import cv2
import numpy as np

def alinear_imagenes(ruta_antes, ruta_despues, ruta_salida):
    print("Iniciando alineación facial...")
    
    # 1. Cargar las imágenes
    img_antes = cv2.imread(ruta_antes)
    img_despues = cv2.imread(ruta_despues)

    # Convertir a escala de grises para el algoritmo
    gris_antes = cv2.cvtColor(img_antes, cv2.COLOR_BGR2GRAY)
    gris_despues = cv2.cvtColor(img_despues, cv2.COLOR_BGR2GRAY)

    # 2. Detectar puntos clave (Algoritmo ORB)
    orb = cv2.ORB_create(nfeatures=5000)
    kp_antes, desc_antes = orb.detectAndCompute(gris_antes, None)
    kp_despues, desc_despues = orb.detectAndCompute(gris_despues, None)

    # 3. Emparejar los puntos de ambas fotos
    matcher = cv2.DescriptorMatcher_create(cv2.DESCRIPTOR_MATCHER_BRUTEFORCE_HAMMING)
    matches = matcher.match(desc_despues, desc_antes, None)
    matches = sorted(matches, key=lambda x: x.distance)

    # Quedarnos solo con el 15% de los mejores emparejamientos (ojos, boca, nariz)
    mejores_matches = int(len(matches) * 0.15)
    matches = matches[:mejores_matches]

    # 4. Extraer coordenadas
    puntos_antes = np.zeros((len(matches), 2), dtype=np.float32)
    puntos_despues = np.zeros((len(matches), 2), dtype=np.float32)

    for i, match in enumerate(matches):
        puntos_antes[i, :] = kp_antes[match.trainIdx].pt
        puntos_despues[i, :] = kp_despues[match.queryIdx].pt

    # 5. Calcular la transformación (Homografía)
    h, mask = cv2.findHomography(puntos_despues, puntos_antes, cv2.RANSAC)

    # 6. Aplicar la transformación a la foto del "Después"
    alto, ancho, _ = img_antes.shape
    img_alineada = cv2.warpPerspective(img_despues, h, (ancho, alto))

    # Guardar la imagen perfecta
    cv2.imwrite(ruta_salida, img_alineada)
    print(f"Éxito. Imagen alineada guardada en: {ruta_salida}")

# EJECUCIÓN:
alinear_imagenes(
    'public/casos/acne-antes.jpg', 
    'public/casos/acne-despues.jpg', 
    'public/casos/acne-despues-alineada.jpg'
)