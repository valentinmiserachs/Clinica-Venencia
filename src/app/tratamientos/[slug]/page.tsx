"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// ==========================================
// BASE DE DATOS COMPLETA: LAS 15 PATOLOGÍAS CARGADAS EN LIMPIO
// ==========================================
const tratamientosData = {
  'acido-hialuronico': {
    nombre: 'Armonización con Ácido Hialurónico',
    imagen: '/foto-facial-1.jpg',
    descripcionBreve: 'Restaura volúmenes, perfila contornos y proyecta tus rasgos con resultados absolutamente naturales e imperceptibles.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Entendemos el ácido hialurónico no como un simple relleno, sino como una herramienta de arquitectura facial. Infiltramos este gel biocompatible para embellecer zonas clave como labios, ojeras o pómulos en planos anatómicos profundos (nivel supraperióstico) utilizando alta cohesividad con estudios reológicos contrastados, garantizando una perfecta integración tisular y estimulación de tu matriz extracelular.',
      ventajas: ['Armonización facial respetando tu esencia.', 'Proyección estructural y corrección de asimetrías.', 'Hidratación profunda inmediata.', 'Material seguro y 100% reabsorbible.'],
      faqs: [{ pregunta: '¿Quedaré artificial?', respuesta: 'Bajo ningún concepto. La filosofía es "menos es más" para rejuvenecer con total naturalidad.' }],
      evidencia: [{ titulo: "Safety and Efficacy of Hyaluronic Acid Fillers", fuente: "Journal of Cosmetic Dermatology", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Safety+and+Efficacy+of+Hyaluronic+Acid+Fillers" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Cánula / Aguja' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Sesiones', valor: '1 sesión' }, { titulo: 'Resultados', valor: 'Inmediatos' }, { titulo: 'Duración', valor: '9 - 18 meses' }]
  },
  'neuromoduladores': {
    nombre: 'Neuromoduladores (Tercio Superior)',
    imagen: '/foto-facial-2.jpg',
    descripcionBreve: 'Relaja la musculatura facial para suavizar arrugas de expresión, despejar la mirada y prevenir el envejecimiento.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Producen una denervación química selectiva mediante la inhibición presináptica de acetilcolina en la placa neuromuscular, relajando de manera milimétrica los músculos depresores del entrecejo, frente y patas de gallo para aportar un aspecto descansado y fresco.',
      ventajas: ['Prevención activa de arrugas profundas.', 'Mirada despejada y rejuvenecida.', 'Eficaz contra el bruxismo severo.'],
      faqs: [{ pregunta: '¿Perderé la expresión?', respuesta: 'No. Modulamos la dosis para relajar el músculo sin congelar tu gestualidad natural.' }],
      evidencia: [{ titulo: "Long-term safety of neuromodulators", fuente: "Aesthetic Surgery Journal", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Long-term+safety+of+neuromodulators" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Microinyección' }, { titulo: 'Tiempo', valor: '20 min' }, { titulo: 'Sesiones', valor: '1 + Revisión' }, { titulo: 'Resultados', valor: '4-15 días' }, { titulo: 'Duración', valor: '4 - 6 meses' }]
  },
  'estimuladores-colageno': {
    nombre: 'Estimuladores de Colágeno',
    imagen: '/foto-facial-3.jpg',
    descripcionBreve: 'Reactiva la juventud de tu piel desde el interior creando una nueva red de soporte para combatir la flacidez.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Infiltración subdérmica de inductores (hidroxiapatita cálcica o ácido poli-L-láctico) mediante vectores de tracción. Provocan una respuesta biológica subclínica que activa la neocologénesis (colágeno tipo I) para un tensado y lifting puramente natural.',
      ventajas: ['Lifting biológico sin aportar volumen artificial.', 'Redensificación dérmica progresiva.', 'Mejora radical de la laxitud cutánea.'],
      faqs: [{ pregunta: '¿Cuándo se nota?', respuesta: 'A partir de la cuarta semana, cuando tu propio organismo empieza a sintetizar las nuevas fibras de soporte.' }],
      evidencia: [{ titulo: "Mechanism of action of poly-L-lactic acid", fuente: "Journal of Drugs in Dermatology", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Mechanism+of+action+of+poly-L-lactic+acid" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Vectores (Cánula)' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Sesiones', valor: '1 - 3 sesiones' }, { titulo: 'Resultados', valor: 'Progresivos' }, { titulo: 'Duración', valor: '12 - 24 meses' }]
  },
  'morpheus-8': {
    nombre: 'Morpheus 8',
    imagen: '/foto-textura-1.jpg',
    descripcionBreve: 'Radiofrecuencia fraccionada avanzada para el tensado extremo y la remodelación del tejido adiposo.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Dispositivo médico de radiofrecuencia fraccionada subdérmica con microagujas aisladas en oro. Entrega energía térmica controlada directamente en la dermis reticular coagulando grasa localizada y retrayendo septos fibrosos para un tensado extremo.',
      ventajas: ['Contracción tridimensional térmica de la piel.', 'Reducción de grasa en papada y óvalo facial.', 'Tratamiento líder para marcas de acné profundas.'],
      faqs: [{ pregunta: '¿Requiere baja social?', respuesta: 'Únicamente de 24 a 48 horas de leve eritema local. Al tercer día se puede usar maquillaje.' }],
      evidencia: [{ titulo: "Fractional radiofrequency microneedling rejuvenation", fuente: "Lasers in Surgery and Medicine", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Fractional+radiofrequency+microneedling" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'RF Microneedling' }, { titulo: 'Tiempo', valor: '60 min' }, { titulo: 'Sesiones', valor: '3 sesiones' }, { titulo: 'Resultados', valor: 'A las 3 semanas' }, { titulo: 'Duración', valor: 'Permanente' }]
  },
  'hilos-tensores': {
    nombre: 'Hilos Tensores PDO',
    imagen: '/foto-textura-2.jpg',
    descripcionBreve: 'Reposicionamiento de tejidos caídos y efecto lifting no quirúrgico mediante mallas de soporte.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Inserción subcutánea de hilos espiculados de polidioxanona (PDO) anclados en el SMAS. Generan una elevación mecánica inmediata junto con una posterior mecanotransducción celular que crea cordones biológicos de colágeno fibrilar permanente.',
      ventajas: ['Elevación instantánea del óvalo facial caido.', 'Procedimiento médico seguro sin incisiones.', 'Estimulación prolongada autóloga.'],
      faqs: [{ pregunta: '¿Se palpan en la cara?', respuesta: 'No. Al posicionarse en la hipodermis profunda quedan completamente integrados e invisibles.' }],
      evidencia: [{ titulo: "Efficacy of PDO threads for facial rejuvenation", fuente: "Aesthetic Plastic Surgery", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Efficacy+of+PDO+threads" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Soporte Subcutáneo' }, { titulo: 'Tiempo', valor: '60 min' }, { titulo: 'Sesiones', valor: '1 sesión' }, { titulo: 'Resultados', valor: 'Inmediatos' }, { titulo: 'Duración', valor: '12 - 18 meses' }]
  },
  'peeling-quimico': {
    nombre: 'Peeling Químico Médico',
    imagen: '/foto-textura-3.jpg',
    descripcionBreve: 'Renovación celular profunda para eliminar imperfecciones y devolverle a la piel su luz natural.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Quimioexfoliación médica programada (TCA o alfa-hidroxiácidos) que induce la queratólisis del estrato córneo. Elimina queratinocitos pigmentados y activa la dermis papilar para unificar el tono y borrar melasma o secuelas.',
      ventajas: ['Atenuación radical de manchas corporales/faciales.', 'Cierre de poros y alisado de textura.', 'Efecto "Glow" clínico inmediato.'],
      faqs: [{ pregunta: '¿La descamación es muy agresiva?', respuesta: 'Calibramos la profundidad. Existen peelings superficiales sin pelado visible y peelings medios con descamación controlada de 3 días.' }],
      evidencia: [{ titulo: "Chemical peels in skin review", fuente: "JCAD", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Chemical+peels+rejuvenation" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Quimioexfoliación' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Sesiones', valor: '1 - 4 sesiones' }, { titulo: 'Resultados', valor: 'Al 7º día' }, { titulo: 'Duración', valor: 'Mantenimiento' }]
  },
  'laser-co2': {
    nombre: 'Láser Fraccionado CO2',
    imagen: '/foto-laser-1.jpg',
    descripcionBreve: 'El tratamiento definitivo para resurfacing facial, eliminación de cicatrices y rejuvenecimiento intensivo.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Fototermólisis fraccionada ablativa con longitud de onda de 10.600 nm. Vaporiza columnas microscópicas de agua intracelular forzando una reepitelización masiva y contrayendo las fibras elásticas profundas para restaurar pieles muy dañadas.',
      ventajas: ['Eliminación definitiva de arrugas periorales y cicatrices.', 'Efecto rejuvenecedor ablativo radical.', 'Vaporización segura de imperfecciones elásticas.'],
      faqs: [{ pregunta: '¿Cuánto dura el postratamiento?', respuesta: 'De 5 a 7 días de baja social debido al enrojecimiento y formación de microcostras protectoras.' }],
      evidencia: [{ titulo: "Fractional ablative carbon dioxide laser resurfacing", fuente: "Dermatologic Clinics", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Fractional+ablative+carbon+dioxide+laser" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Láser Ablativo' }, { titulo: 'Tiempo', valor: '60 min' }, { titulo: 'Sesiones', valor: '1 - 3 sesiones' }, { titulo: 'Resultados', valor: 'A los 15 días' }, { titulo: 'Duración', valor: 'Años' }]
  },
  'varices-ndyag': {
    nombre: 'Eliminación de Varices (Nd:YAG)',
    imagen: '/foto-laser-2.jpg',
    descripcionBreve: 'Eliminación segura y eficaz de arañas vasculares y lesiones venosas sin cirugía.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Fotocoagulación láser con pulso largo Nd:YAG (1064 nm). Capta la oxihemoglobina dentro del vaso dilatado y destruye el endotelio venoso por energía térmica selectiva, permitiendo que el organismo reabsorba el capilar cerrado de forma natural.',
      ventajas: ['Eliminación completa de telangiectasias sin aguja.', 'Protección total de los tejidos circundantes.', 'Resultados visibles desde la sesión inicial.'],
      faqs: [{ pregunta: '¿Duele?', respuesta: 'Se percibe un leve gomazo térmico, minimizado gracias al cabezal de zafiro refrigerado a -5ºC.' }],
      evidencia: [{ titulo: "Long-pulsed Nd:YAG laser for telangiectasias", fuente: "Dermatologic Surgery", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Long-pulsed+Nd%3AYAG+laser+telangiectasias" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Láser Vascular' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Sesiones', valor: '1 - 3 sesiones' }, { titulo: 'Resultados', valor: 'Progresivos' }, { titulo: 'Duración', valor: 'Permanente' }]
  },
  'manchas-qswitched': {
    nombre: 'Láser Q-Switched (Manchas)',
    imagen: '/foto-laser-3.jpg',
    descripcionBreve: 'Fragmentación térmica de la melanina para borrar manchas solares, melasma y lentigos de manera precisa.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Emisión de pulsos acústicos ultracortos que fragmentan los melanosomas e hiperpigmentaciones en partículas microscópicas mediante un impacto mecánico fotoacústico, facilitando su eliminación inmunológica sin quemar la superficie dérmica.',
      ventajas: ['Efecto fotoacústico ultrapreciso sobre la mancha.', 'Eficaz en léntigos solares rebeldes y pecas.', 'Baja tasa de rebote inflamatorio.'],
      faqs: [{ pregunta: '¿Cómo queda tras la sesión?', respuesta: 'La mancha se oscurece momentáneamente formando una microcostra plana que se desprende sola en 6 días.' }],
      evidencia: [{ titulo: "Q-switched Nd:YAG laser for pigmented lesions", fuente: "Lasers in Medical Science", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Q-switched+Nd%3AYAG+laser+pigmented" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Pulsos Nano/Picosegundos' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Sesiones', valor: '2 - 4 sesiones' }, { titulo: 'Resultados', valor: 'Tras descamación' }, { titulo: 'Duración', valor: 'Permanente' }]
  },
  'ipl-facial': {
    nombre: 'Luz Pulsada Intensa (IPL)',
    imagen: '/foto-textura-1.jpg',
    descripcionBreve: 'Filtros de luz médica para eliminar rojeces, manchitas y aportar un baño de luz extrema al rostro.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Fotorejuvenecimiento de amplio espectro guiado con filtros de corte selectivos. Impacta en hemoglobina y melanina para blanquear rojeces, cerrar capilares superficiales y estimular simultáneamente fibroblastos superficiales.',
      ventajas: ['Tratamiento integral de manchas y cuperosis combinadas.', 'Cierre de poros dilatados e iluminación extrema.', 'Procedimiento indoloro y ambulatorio.'],
      faqs: [{ pregunta: '¿Se puede hacer en verano?', respuesta: 'No. El IPL exige una nula exposición solar previa y posterior con uso estricto de protección SPF50+.' }],
      evidencia: [{ titulo: "Intense pulsed light photorejuvenation review", fuente: "Dermatologic Surgery", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Intense+pulsed+light+photorejuvenation" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Fotorejuvenecimiento' }, { titulo: 'Tiempo', valor: '45 min' }, { font: '', titulo: 'Sesiones', valor: '1 - 3 sesiones' }, { titulo: 'Resultados', valor: 'Al 7º día' }, { titulo: 'Duración', valor: 'Anual' }]
  },
  'depilacion-laser': {
    nombre: 'Depilación Láser Médica',
    imagen: '/foto-textura-2.jpg',
    descripcionBreve: 'Eliminación permanente del vello con tecnología de alta potencia bajo estricta supervisión médica.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Plataformas médicas de alta potencia (Diodo / Alejandrita) que provocan la fototermólisis selectiva del folículo en fase anágena. Destruye de raíz el bulbo piloso eliminando el vello para siempre y solucionando patologías dérmicas corporales.',
      ventajas: ['Eficacia clínica radical en menos sesiones.', 'Supervisión médica directa contra quemaduras.', 'Eliminación definitiva de la molesta foliculitis.'],
      faqs: [{ pregunta: '¿Es apto para pieles morenas?', respuesta: 'Sí. Modulamos los parámetros y longitudes específicas para proteger fototipos altos de forma segura.' }],
      evidencia: [{ titulo: "Laser hair removal long pulsed lasers", fuente: "Dermatologic Surgery", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Laser+hair+removal+long+pulsed" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Fototermólisis Selectiva' }, { titulo: 'Tiempo', valor: 'Variable' }, { titulo: 'Sesiones', valor: '6 - 8 sesiones' }, { titulo: 'Resultados', valor: 'Progresivos' }, { titulo: 'Duración', valor: 'Definitiva' }]
  },
  'hifu-corporal': {
    nombre: 'Remodelación Corporal (HIFU)',
    imagen: '/foto-corporal-1.jpg',
    descripcionBreve: 'Ultrasonidos focalizados de alta intensidad para destruir la grasa y tensar la piel simultáneamente.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Concentración focalizada de energía ultrasónica en la hipodermis profunda (9mm y 13mm). Induce puntos de termocoagulación que licuan y destruyen el adipocito graso local, mientras retrae el tejido elástico combatiendo la flacidez.',
      ventajas: ['Destrucción apoptótica definitiva de grasa localizada.', 'Tensado e intensificación cutánea profunda.', 'Alternativa real no invasiva a la liposucción.'],
      faqs: [{ pregunta: '¿Cuándo se aprecia el cambio?', respuesta: 'A partir del primer mes el drenaje linfático elimina los lípidos, consolidándose el resultado a los 90 días.' }],
      evidencia: [{ titulo: "High intensity focused ultrasound body sculpting", fuente: "Seminars in Cutaneous Medicine", link: "https://pubmed.ncbi.nlm.nih.gov/?term=High+intensity+focused+ultrasound+body" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Ultrasonido Focalizado' }, { titulo: 'Tiempo', valor: '90 min' }, { titulo: 'Sesiones', valor: '1 - 2 sesiones' }, { titulo: 'Resultados', valor: 'A los 30 días' }, { titulo: 'Duración', valor: 'Permanente' }]
  },
  'tratamiento-acne': {
    nombre: 'Tratamiento Integral del Acné',
    imagen: '/foto-textura-3.jpg',
    descripcionBreve: 'Abordaje médico exhaustivo para controlar brotes activos, regular el sebo y borrar cicatrices atróficas.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Abordaje médico dermatológico combinado. Suprimimos la secreción sebácea y reducimos la bacteria causante de los brotes activos, asociando técnicas quirúrgicas de subcisión con láser ablativo para remodelar y alisar cicatrices atróficas.',
      ventajas: ['Freno clínico de brotes infecciosos y quísticos.', 'Eliminación de eritemas y manchas rojas residuales.', 'Restauración real de la textura y relieve dérmico.'],
      faqs: [{ pregunta: '¿Se eliminan las marcas hundidas?', respuesta: 'Sí. La combinación de subcisión biológica y láser CO2 rompe los puentes fibrosos levantando el relieve de la piel.' }],
      evidencia: [{ titulo: "Guidelines management of acne vulgaris", fuente: "JAAD", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Guidelines+management+of+acne+vulgaris" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Protocolo Médico Clínico' }, { titulo: 'Tiempo', valor: '60 min' }, { titulo: 'Sesiones', valor: 'Personalizado' }, { titulo: 'Resultados', valor: 'Graduales' }, { titulo: 'Duración', valor: 'Mantenimiento' }]
  },
  'rosacea': {
    nombre: 'Tratamiento de Rosácea y Cuperosis',
    imagen: '/foto-facial-1.jpg',
    descripcionBreve: 'Protocolos dermatológicos y láser vascular para calmar la inflamación y reducir el enrojecimiento crónico.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Frenado de la vasomodulación aberrante. Combinamos principios inmunorreguladores tópicos con ráfagas láser que colapsan selectivamente los capilares ramificados crónicos, suprimiendo la rojez permanente y calmando el flushing dérmico.',
      ventajas: ['Disminución radical del eritema e inflamación vascular.', 'Fin de los episodios dolorosos de flushing o ardor.', 'Blindaje y nutrición de la barrera cutánea sensible.'],
      faqs: [{ pregunta: '¿Se cura de forma definitiva?', respuesta: 'Es una condición crónica, pero con láser logramos blanquear por completo el rostro y mantenerlo limpio de brotes por meses.' }],
      evidencia: [{ titulo: "Laser and light therapy for rosacea review", fuente: "Dermatology Reports", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Laser+and+light+therapy+for+rosacea" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Láser Vascular / Médico' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Sesiones', valor: '2 - 4 sesiones' }, { titulo: 'Resultados', valor: 'Progresivos' }, { titulo: 'Duración', valor: 'Control Crónico' }]
  },
  'medicina-capilar': {
    nombre: 'Medicina Capilar Avanzada',
    imagen: '/foto-textura-1.jpg',
    descripcionBreve: 'Frena la caída y redensifica tu cabello mediante protocolos de bioestimulación, exosomas y mesoterapia médica.',
    antesDespues: { antes: '/foto-antes.jpg', despues: '/foto-despues.jpg' },
    detalles: {
      descripcion: 'Microinyecciones intradérmicas directas en el folículo miniaturizado. Suministramos inhibidores enzimáticos de la 5-alfa reductasa (Dutasterida), PRP o Exosomas para revertir la atrofia folicular y expandir la densidad estructural del cabello.',
      ventajas: ['Freno inmediato a alopecias androgénicas activas.', 'Engrosamiento biológico del calibre del tallo del pelo.', 'Aporte celular directo sin paso hepático ni oral.'],
      faqs: [{ pregunta: '¿Cuándo para la caída?', respuesta: 'La caída se detiene notablemente a la tercera sesión. La ganancia de grosor visual se consolida hacia el cuarto mes.' }],
      evidencia: [{ titulo: "Dutasteride in the treatment of androgenetic alopecia", fuente: "Clinical Interventions in Aging", link: "https://pubmed.ncbi.nlm.nih.gov/?term=Dutasteride+in+the+treatment+of+androgenetic+alopecia" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Mesoterapia Médica Bulbar' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Sesiones', valor: '4 - 8 sesiones' }, { titulo: 'Resultados', valor: 'A los 3 meses' }, { titulo: 'Duración', valor: 'Mantenimiento' }]
  }
};

type TabType = 'descripcion' | 'ventajas' | 'faqs' | 'evidencia';

export default function TratamientoPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const tratamiento = tratamientosData[slug as keyof typeof tratamientosData] || tratamientosData['acido-hialuronico'];
  
  const [tabActiva, setTabActiva] = useState<TabType>('descripcion');
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark font-sans pt-28 pb-0">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 mt-10">
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif text-brand-dark leading-tight">
            {tratamiento.nombre}
          </h1>
          <p className="text-lg text-brand-dark/80 font-light leading-relaxed">
            {tratamiento.descripcionBreve}
          </p>
          <button className="bg-brand-dark text-brand-light px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-brand-terra transition-colors shadow-lg">
            Reserva tu Cita
          </button>
        </div>
        <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3]">
          <Image src={tratamiento.imagen} alt={tratamiento.nombre} fill className="object-cover rounded-sm shadow-xl bg-brand-sand/20" />
        </div>
      </section>

      {/* PESTAÑAS (TABS) */}
      <section className="max-w-5xl mx-auto mt-24 px-6">
        <div className="flex justify-start md:justify-center border-b border-brand-sand/40 space-x-6 md:space-x-12 overflow-x-auto pb-2">
          {(['descripcion', 'ventajas', 'faqs', 'evidencia'] as TabType[]).map((tab) => (
            (tab !== 'evidencia' || (tratamiento.detalles.evidencia && tratamiento.detalles.evidencia.length > 0)) && (
              <button
                key={tab}
                onClick={() => setTabActiva(tab)}
                className={`pb-4 text-[10px] md:text-sm uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
                  tabActiva === tab ? 'text-brand-terra font-bold border-b-2 border-brand-terra -mb-[2px]' : 'text-brand-dark/50 hover:text-brand-dark'
                }`}
              >
                {tab.replace('faqs', 'Preguntas Frecuentes').replace('evidencia', 'Evidencia Científica')}
              </button>
            )
          ))}
        </div>

        {/* CONTENIDO DE LAS PESTAÑAS */}
        <div className="py-16 min-h-[300px]">
          {tabActiva === 'descripcion' && (
            <div className="animate-fade-in-up space-y-16">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-serif text-brand-dark">Protocolo Médico</h2>
                <p className="text-brand-dark/80 leading-relaxed text-lg text-left md:text-center">{tratamiento.detalles.descripcion}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-t border-brand-sand/30 pt-12">
                {tratamiento.parametros.map((param, i) => (
                  <div key={i} className="text-center space-y-2">
                    <span className="text-brand-terra text-2xl">✦</span>
                    <h4 className="text-[10px] uppercase tracking-widest text-brand-dark/50">{param.titulo}</h4>
                    <p className="font-serif text-brand-dark text-sm">{param.valor}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tabActiva === 'ventajas' && (
             <div className="animate-fade-in-up max-w-3xl mx-auto space-y-6">
               <ul className="space-y-4">
                 {tratamiento.detalles.ventajas.map((ventaja, i) => (
                   <li key={i} className="flex items-start bg-white p-6 border border-brand-sand/20 shadow-sm">
                     <span className="text-brand-terra text-xl mr-4 mt-1">✓</span>
                     <span className="text-brand-dark/80 font-light">{ventaja}</span>
                   </li>
                 ))}
               </ul>
             </div>
          )}

          {tabActiva === 'faqs' && (
             <div className="animate-fade-in-up max-w-3xl mx-auto space-y-4">
               {tratamiento.detalles.faqs.map((faq, i) => (
                 <div key={i} className="border border-brand-sand/30 bg-white">
                   <button onClick={() => setFaqAbierta(faqAbierta === i ? null : i)} className="w-full text-left p-6 flex justify-between hover:bg-brand-light/50 transition">
                     <span className="font-serif text-lg text-brand-dark pr-4">{faq.pregunta}</span>
                     <span className="text-brand-terra text-2xl">{faqAbierta === i ? '−' : '+'}</span>
                   </button>
                   {faqAbierta === i && <div className="p-6 pt-0 text-brand-dark/70 font-light">{faq.respuesta}</div>}
                 </div>
               ))}
             </div>
          )}

          {tabActiva === 'evidencia' && (
            <div className="animate-fade-in-up max-w-3xl mx-auto space-y-6">
              <div className="text-center mb-10">
                <span className="text-brand-terra text-2xl mb-2 block">✦</span>
                <h2 className="text-3xl font-serif text-brand-dark">Respaldo Médico</h2>
              </div>
              <div className="grid gap-4">
                {tratamiento.detalles.evidencia?.map((estudio, i) => (
                  <div key={i} className="bg-white p-6 border border-brand-sand/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition">
                    <div>
                      <h4 className="font-serif text-brand-dark text-lg mb-1">{estudio.titulo}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-brand-terra font-bold">{estudio.fuente}</p>
                    </div>
                    <a href={estudio.link} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-brand-dark border border-brand-dark px-4 py-2 hover:bg-brand-dark hover:text-brand-light transition flex-shrink-0">
                      Ver en PubMed
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* DESLIZADOR INTERACTIVO ANTES Y DESPUÉS */}
      <section className="py-24 bg-brand-dark text-brand-light relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <span className="text-brand-sand text-[10px] uppercase tracking-[0.4em] font-bold">Resultados Reales</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-light">El arte del cuidado de la piel</h2>
          </div>

          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-brand-dark/50 overflow-hidden rounded-sm shadow-2xl">
            <Image src={tratamiento.antesDespues.antes} alt="Antes" fill className="object-cover object-center" />
            <div className="absolute inset-0" style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}>
              <Image src={tratamiento.antesDespues.despues} alt="Después" fill className="object-cover object-center" />
            </div>
            <input type="range" min="0" max="100" value={sliderPos} onChange={(e) => setSliderPos(Number(e.target.value))} className="absolute inset-0 z-20 w-full h-full opacity-0 cursor-ew-resize" />
            <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.8)] z-10 flex items-center justify-center pointer-events-none" style={{ left: `calc(${sliderPos}% - 2px)` }}>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-brand-dark text-lg font-bold tracking-tighter">◂▸</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA / EXPERIENCIA */}
      <section className="py-32 bg-brand-light relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">La experiencia Dra. Trinidad</h2>
            <p className="text-brand-dark/60 font-light text-lg italic">&quot;No buscamos una piel perfecta, buscamos una piel sana.&quot;</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-brand-sand/30">
            <div className="pt-8 md:pt-0 md:px-8 flex flex-col items-center md:items-start text-center md:text-left group">
              <span className="text-7xl font-serif text-brand-sand/30 group-hover:text-brand-terra transition-colors duration-500 mb-4 block">1</span>
              <h3 className="text-xl font-serif text-brand-dark mb-3">Diagnóstico 3D</h3>
              <p className="text-brand-dark/70 font-light text-sm leading-relaxed">Estudio ecográfico de tu anatomía para planificar la intervención exacta.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-8 flex flex-col items-center md:items-start text-center md:text-left group">
              <span className="text-7xl font-serif text-brand-sand/30 group-hover:text-brand-terra transition-colors duration-500 mb-4 block">2</span>
              <h3 className="text-xl font-serif text-brand-dark mb-3">Sin Prisas</h3>
              <p className="text-brand-dark/70 font-light text-sm leading-relaxed">Bloqueamos el tiempo necesario en agenda para atenderte con calma.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-8 flex flex-col items-center md:items-start text-center md:text-left group">
              <span className="text-7xl font-serif text-brand-sand/30 group-hover:text-brand-terra transition-colors duration-500 mb-4 block">3</span>
              <h3 className="text-xl font-serif text-brand-dark mb-3">Confort Máximo</h3>
              <p className="text-brand-dark/70 font-light text-sm leading-relaxed">Protocolos anti-dolor estrictos y uso de anestesias magistrales.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-8 flex flex-col items-center md:items-start text-center md:text-left group">
              <span className="text-7xl font-serif text-brand-sand/30 group-hover:text-brand-terra transition-colors duration-500 mb-4 block">4</span>
              <h3 className="text-xl font-serif text-brand-dark mb-3">Seguimiento Real</h3>
              <p className="text-brand-dark/70 font-light text-sm leading-relaxed">Agendamos revisiones exhaustivas post-tratamiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-brand-sand/10 py-16 border-t border-brand-sand/30">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-serif text-brand-dark mb-6">¿Preparado/a para transformar tu piel?</h2>
          <button className="bg-brand-dark text-brand-light px-10 py-4 text-sm uppercase tracking-widest hover:bg-brand-terra transition-colors shadow-xl">Solicitar Valoración</button>
        </div>
      </section>
      
    </main>
  );
}