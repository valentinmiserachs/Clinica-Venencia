import { StaticImageData } from 'next/image';

// ==========================================
// 1. MOLDES DE DATOS (INTERFACES)
// ==========================================
export interface Evidencia { titulo: string; fuente: string; link: string; }
export interface FAQ { pregunta: string; respuesta: string; }
export interface Parametro { titulo: string; valor: string; }
export interface AntesDespues { antes: string; despues: string; }
export interface DetallesTratamiento { descripcion: string; ventajas: string[]; faqs: FAQ[]; evidencia?: Evidencia[]; }
export interface Tratamiento { nombre: string; tituloDescripcion?: string; imagen: string | StaticImageData; descripcionBreve: string; antesDespues: AntesDespues; detalles: DetallesTratamiento; parametros: Parametro[]; }

export interface TratamientoHome { nombre: string; subtitulo: string; slug: string; imagen: string; }
export interface Subcategoria { nombre: string; tratamientos: TratamientoHome[]; }
export interface CategoriaData { tieneSubcategorias: boolean; tratamientos?: TratamientoHome[]; subcategorias?: Subcategoria[]; }
export type MenuItem = { nombre: string; slug?: string; items?: MenuItem[] };

export const imgProvisional = '/textura-piel.webp';
export const AD: AntesDespues = { antes: imgProvisional, despues: imgProvisional };

// ==========================================
// 2. MEGA BASE DE DATOS (TEXTOS MÉDICOS REALES PARA TODOS LOS TRATAMIENTOS)
// ==========================================
export const tratamientosData: Record<string, Tratamiento> = {

  // --- 1.1 ARMONIZACIÓN Y VOLÚMENES ---
  "voluminizacion-labios": {
    nombre: "Voluminización y perfilado de labios",
    tituloDescripcion: "¿EN QUÉ CONSISTE EL TRATAMIENTO?",
    imagen: '/tratamientos/voluminizacion-labios.jpeg',
    descripcionBreve: "",
    antesDespues: { 
      antes: "/casos/labios-antes.jpg", 
      despues: "/casos/labios-despues.jpg" 
    },
    parametros: [
      { titulo: "TÉCNICA", valor: "Aguja / Cánula" },
      { titulo: "TIEMPO", valor: "40 min" },
      { titulo: "RESULTADOS", valor: "Inmediatos" },
      { titulo: "DURACIÓN", valor: "9-12 meses" }
    ],
    detalles: {
      descripcion: "Es un procedimiento clínico avanzado que permite modificar la estructura, el volumen y la hidratación de los labios sin necesidad de cirugía. Utilizando geles de ácido hialurónico de última generación y máxima pureza, realizamos un abordaje anatómico personalizado para restaurar la pérdida de volumen o potenciar la estética labial de forma segura.",
      ventajas: [],
      faqs: [
        {
          pregunta: "¿Cuantas sesiones se necesitan para ver resultados?",
          respuesta: "Los resultados son visibles desde el primer momento y habitualmente el objetivo se alcanza en una sola sesión clínica. El protocolo incluye una cita de seguimiento a los 14 días para valorar el resultado final una vez que el labio está completamente desinflamado."
        },
        {
          pregunta: "¿Es doloroso el tratamiento?",
          respuesta: "Es un procedimiento totalmente confortable gracias a nuestro protocolo de control del dolor. Para garantizar tu máxima comodidad, realizamos una anestesia infiltrada local (bloqueo). Este método adormece la sensibilidad del labio por completo, lo que nos permite trabajar con una precisión milimétrica y segura mientras tú disfrutas de una experiencia libre de molestias."
        },
        {
          pregunta: "¿Qué debo tener en cuenta antes de la sesión?",
          respuesta: "Para garantizar los mejores resultados y minimizar la aparición de hematomas, te recomendamos seguir estas sencillas pautas antes de tu cita:\n\n• Evita ciertos medicamentos: No tomes antiinflamatorios (como ibuprofeno o aspirina) ni suplementos que puedan diluir la sangre (Omega 3, vitamina E) durante los 3-5 días previos, a menos que sea por prescripción médica.\n• Si tienes tendencia a sufrir herpes labiales, avísanos con unos días de antelación para pautar un tratamiento preventivo (profilaxis antivírica).\n• No consumas bebidas alcohólicas ni fumes en las 24 horas previas al tratamiento.\n• Si es posible, ven a la clínica con la zona perioral desmaquillada."
        },
        {
          pregunta: "¿Qué hacer después de la sesión?",
          respuesta: "Tras la remodelación labial, es completamente normal experimentar inflamación, asimetría transitoria o algún pequeño hematoma. Para optimizar el resultado, sigue estas pautas:\n\n• Primeras 24 horas: Aplica frío local indirecto (con un paño limpio) en intervalos cortos para reducir la inflamación. Evita tocar, masajear o presionar los labios. No uses maquillaje labial.\n• Primeros 2 días: Evita realizar ejercicio físico intenso, acudir a saunas, piscinas o exponerte a fuentes de calor directo (como tomar el sol). No consumas bebidas o alimentos excesivamente calientes.\n• Durante la primera semana: Intenta dormir boca arriba con la cabeza ligeramente elevada. Evita el consumo de alcohol y tabaco, ya que favorecen la deshidratación y la inflamación.\n\nRecuerda: El resultado definitivo se aprecia a las dos semanas, una vez que el producto se ha integrado por completo y la inflamación ha desaparecido. ¡Nos vemos en tu cita de revisión!"
        },
        {
          pregunta: "¿Es un tratamiento reversible?",
          respuesta: "Sí, es 100% reversible. El ácido hialurónico es un material reabsorbible que el propio cuerpo va eliminando de forma natural con el tiempo. Sin embargo, si por cualquier motivo el paciente no se siente cómodo con el resultado o desea realizar una modificación inmediata, disponemos de una enzima médica llamada hialuronidasa. Al aplicarla, deshace el producto de forma segura y selectiva en cuestión de horas, devolviendo al labio su estado original."
        },
        {
          pregunta: "¿Quiénes NO deben realizarse este tratamiento?",
          respuesta: "La seguridad de nuestros pacientes es la prioridad absoluta. Por ello, el tratamiento se pospondrá en caso de embarazo, periodo de lactancia o si existe un brote activo de herpes labial en el momento de la sesión.\n\nAsimismo, está contraindicado en personas con enfermedades autoinmunes graves sin controlar, pacientes con historial de alergia grave a los componentes de la fórmula o aquellos que porten materiales de relleno permanentes en los labios. En la consulta médica inicial evaluaremos tu historial clínico completo para asegurarnos de que el procedimiento es 100% seguro para ti."
        }
      ],
      evidencia: [
        { titulo: "Eficacia y seguridad clínica", fuente: "Journal of Cosmetic Dermatology", link: "#" }
      ]
    }
  },
  'hidratacion-labial': {
    nombre: 'Hidratación labial profunda',
    tituloDescripcion: '¿Qué es la hidratación labial profunda?',
    imagen: '/tratamientos/hidratacion-labios-profunda.jpg', 
    descripcionBreve: 'Recupera la jugosidad y suavidad de tus labios sin añadir volumen extra.', 
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Microinyección' }, 
      { titulo: 'Tiempo', valor: '20 min' }, 
      { titulo: 'Resultados', valor: 'Inmediatos' }, 
      { titulo: 'Duración', valor: '6-9 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético diseñado exclusivamente para restaurar la elasticidad, la jugosidad y la vitalidad de los labios sin aportar volumen. Mediante microinyecciones de ácido hialurónico de baja densidad y alta capacidad de captación de agua, logramos nutrir el tejido labial desde las capas más profundas. El resultado es un "efecto gloss" natural y duradero que suaviza las líneas de deshidratación, redefine sutilmente el aspecto saludable del labio y devuelve su color sonrosado original de forma inmediata.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'Los resultados son visibles de forma inmediata desde una única sesión. Sin embargo, al tratarse de un protocolo de nutrición celular profunda, en labios muy agrietados o deshidratados podemos recomendar un protocolo inicial de 2 sesiones.\n\nAl igual que en todos nuestros tratamientos, incluimos una visita de control a las dos semanas para evaluar la perfecta integración del producto en el tejido y asegurar un acabado óptimo y homogéneo.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'Es un procedimiento totalmente confortable gracias a nuestro protocolo de control del dolor. Para garantizar tu máxima comodidad, realizamos una anestesia infiltrada local (bloqueo). Este método adormece la sensibilidad del labio por completo, lo que nos permite trabajar con una precisión milimétrica y segura mientras tú disfrutas de una experiencia libre de molestias.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para garantizar los mejores resultados y una experiencia óptima, te aconsejamos seguir estas recomendaciones previas:\n\n• No tomes antiinflamatorios (como ibuprofeno o aspirina) ni suplementos de Omega 3 durante los 3-5 días anteriores para minimizar el riesgo de pequeñas rojeces o hematomas.\n• Si tienes tendencia a sufrir herpes labiales, indícanoslo al agendar tu cita para pautar un tratamiento preventivo (profilaxis antivírica) unos días antes.\n• Evita el consumo de bebidas alcohólicas y el tabaco las 24 horas previas.\n• El día de la cita acude con la zona limpia y desmaquillada. Recuerda que no es necesario que te apliques crema anestésica en casa, ya que realizaremos el bloqueo anestésico directamente en la clínica.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'La recuperación es inmediata, pero al tratarse de una zona muy vascularizada, es normal notar una leve inflamación. Sigue estas pautas para optimizar el tratamiento:\n\n• Primeras 24 horas: Aplica frío local indirecto de forma intermitente. Evita tocar, presionar o masajear los labios y pospone el uso de maquillaje labial.\n• Primeros 2 días: Evita realizar ejercicio físico intenso, acudir a saunas, piscinas o exponerte a fuentes de calor directo (sol o rayos UVA). No consumas alimentos o bebidas excesivamente calientes.\n• Evita el alcohol y el tabaco durante los primeros días, ya que interfieren con el proceso de hidratación del ácido hialurónico.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Sí, es 100% reversible. El ácido hialurónico utilizado es una sustancia completamente biocompatible que tu organismo metabolizará de forma natural con los meses. Además, en la clínica contamos con la enzima médica hialuronidasa, un "antídoto" seguro capaz de disolver el producto de manera inmediata si en algún momento se deseara revertir el tratamiento, garantizando un control médico absoluto sobre el proceso.'
        },
        {
          pregunta: 'Contraindicaciones principales',
          respuesta: 'Este tratamiento no se realizará en los siguientes casos:\n\n• Mujeres en periodos de embarazo o lactancia.\n• Presencia de infecciones activas en la zona perioral (brote de herpes labial, infecciones bacterianas o heridas abiertas) el día de la cita.\n• Alergia o hipersensibilidad conocida al ácido hialurónico o a los anestésicos locales (lidocaína).\n• Enfermedades autoinmunes graves no controladas.\n• Presencia previa de materiales de relleno permanentes (como silicona), debido al riesgo de inducir reacciones inflamatorias.'
        }
      ],
      evidencia: [
        { titulo: "Hyaluronic Acid Skinboosters for Lip Hydration", fuente: "Aesthetic Surgery Journal", link: "#" }
      ]
    }
  },
  'rinomodelacion': {
    nombre: 'Rinomodelación',
    tituloDescripcion: '¿Qué es la rinomodelación con ácido hialurónico?',
    imagen: '/tratamientos/rinomodelacion.jpeg',
    descripcionBreve: 'Abordaje estructural profundo para elevar la base nasal y suavizar el rictus superior.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Inyección Profunda' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'Inmediatos' },
      { titulo: 'Duración', valor: '12-18 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético avanzado y no quirúrgico que permite estilizar, equilibrar y corregir la forma de la nariz de manera inmediata.\n\nMediante la infiltración precisa de ácido hialurónico de alta densidad y gran soporte estructural, logramos disimular la giba, rectificar desviaciones, suavizar ángulos y elevar o proyectar la punta nasal para armonizar el perfil del rostro. Es la alternativa ideal a la rinoplastia quirúrgica para aquellos pacientes que buscan modificar la estética nasal sin pasar por el quirófano, sin postoperatorio y con resultados naturales desde el primer momento.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'Los resultados son completamente visibles desde una única sesión clínica. El procedimiento es rápido y el cambio en el perfil es instantáneo.\n\nAl igual que en el resto de nuestros tratamientos, programamos una visita de control obligatoria a las dos semanas. Esta cita de seguimiento es fundamental en la rinomodelación para evaluar la perfecta asentación del producto en una estructura tan rígida como la nasal, valorar la simetría final y realizar cualquier pequeño retoque de optimización si el caso lo requiere, el cual está completamente incluido dentro del tratamiento inicial.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'Es un procedimiento muy tolerable. Para garantizar tu máximo confort, aplicamos una pomada anestésica tópica de alta eficacia en la zona minutos antes de comenzar el tratamiento. Además, los geles de ácido hialurónico de última generación que utilizamos ya incorporan lidocaína (anestésico) en su propia formulación, lo que hace que la zona se adormezca. La mayoría de los pacientes describen la sensación únicamente como una leve presión perfectamente soportable.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: '• No consumas antiinflamatorios (como el ibuprofeno o la aspirina) ni suplementos como el Omega 3 o la Vitamina E durante los 3-5 días anteriores para minimizar el riesgo de hematomas o inflamación.\n• No consumas bebidas alcohólicas ni realices ejercicio físico intenso las 24 horas previas al tratamiento.\n• Acude a la clínica con el rostro completamente limpio, prestando especial atención a que la zona de la nariz y el entrecejo esté desmaquillada.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'La reincorporación a tu vida cotidiana es inmediata, pero el tejido nasal requiere ciertos cuidados específicos durante los primeros días para que el ácido hialurónico se asiente correctamente:\n\n• Es muy importante evitar el uso de gafas de sol o de vista que apoyen directamente sobre el puente nasal durante los primeros 5-7 días, para impedir que la presión desplace el producto.\n• Primeras 24-48 horas: Aplica frío local indirecto de forma suave si notas ligera inflamación. Evita tocar, presionar, masajear la nariz o dormir boca abajo.\n• Actividades prohibidas: Pospone el ejercicio físico de gran intensidad, las saunas, las piscinas y la exposición solar directa durante los primeros 3 días.\n• Lava el rostro de forma muy suave, sin ejercer presión sobre la estructura de la nariz.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Sí, es 100% reversible. El ácido hialurónico es un material reabsorbible que el cuerpo metaboliza con el tiempo. Sin embargo, ante cualquier asimetría, inconformidad del paciente o por criterios estrictos de seguridad médica, disponemos de la enzima hialuronidasa. Al ser aplicada, disuelve el producto de forma inmediata y selectiva, devolviendo a la nariz su anatomía original en pocas horas.'
        },
        {
          pregunta: 'Contraindicaciones principales',
          respuesta: '• Mujeres en periodo de embarazo o lactancia.\n• Cirugías nasales previas (Rinoplastia quirúrgica): La presencia de anatomía alterada o cicatrices quirúrgicas previas modifica la vascularización de la nariz, elevando el riesgo de complicaciones vasculares. Evaluaremos exhaustivamente cada caso.\n• Infecciones cutáneas activas en la zona de la nariz o perinasal el día de la cita.\n• Alergia diagnosticada al ácido hialurónico o a los anestésicos locales (lidocaína).\n• Enfermedades autoinmunes sistémicas o del colágeno en fase activa.'
        }
      ],
      evidencia: [
        { titulo: "Piriform Fossa Augmentation with Hyaluronic Acid", fuente: "Plastic and Reconstructive Surgery", link: "#" }
      ]
    }
  },
  'relleno-pomulos': {
    nombre: 'Proyección y relleno de pómulos',
    tituloDescripcion: '¿Qué es la proyección y relleno de pómulos con ácido hialurónico?',
    imagen: '/tratamientos/rellenopomulos.jpeg',
    descripcionBreve: 'Estructura tu rostro, combate el descolgamiento y recupera el "triángulo de la juventud".',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Cánula profunda' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'Inmediatos' },
      { titulo: 'Duración', valor: '12-18 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético avanzado diseñado para restaurar el soporte estructural del rostro, definir los contornos y rejuvenecer las facciones de forma armónica.\n\nCon el paso del tiempo, los compartimentos grasos del tercio medio facial disminuyen y descienden, provocando un aspecto cansado o flácido. Mediante la infiltración precisa de ácido hialurónico de alta densidad, devolvemos el volumen perdido al hueso malar, proyectamos los pómulos de manera elegante y logramos un efecto de elevación (lifting no quirúrgico) que suaviza indirectamente el surco nasogeniano y mejora el soporte de la zona de la ojera, todo sin perder la naturalidad de tu expresión.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'Los resultados estructurales son visibles de forma inmediata en una única sesión. El paciente sale de la clínica apreciando una mayor definición y frescura en el rostro.\n\nComo parte de nuestro protocolo, programamos una visita de control a las dos semanas. En esta cita evaluamos la perfecta integración del producto con la estructura ósea y muscular del rostro, confirmamos la simetría y, si es necesario, realizamos cualquier pequeño ajuste de optimización para asegurar un acabado impecable, lo cual está completamente incluido en el tratamiento inicial.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable y cómodo. Al realizarse habitualmente en planos profundos (cerca del hueso, donde apenas hay receptores de dolor), las molestias son mínimas. Además, los viales de ácido hialurónico que utilizamos incorporan lidocaína (anestésico) en su propia fórmula, adormeciendo la zona conforme se realiza el tratamiento.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para conseguir un resultado óptimo y minimizar los efectos secundarios comunes, te recomendamos seguir estas pautas previas:\n\n• Evita la toma de antiinflamatorios (como ibuprofeno o aspirina) y suplementos como el Omega 3 o la Vitamina E durante los 3-5 días anteriores, salvo indicación médica, para reducir el riesgo de hematomas.\n• No consumas bebidas alcohólicas.\n• Acude a la clínica con el rostro limpio.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'La incorporación a tus actividades diarias es inmediata, pero al tratarse de un tratamiento de soporte profundo, debes seguir estos cuidados los primeros días:\n\n• Evita apoyar firmemente las mejillas al dormir (intenta dormir boca arriba) y no te realices masajes faciales ni uses tratamientos como el Gua Sha durante las primeras dos semanas.\n• Primeras 24-48 horas: Es normal notar una sensación de agujetas o ligera presión al gesticular o masticar debido al soporte del producto. Puedes aplicar frío local indirecto de manera suave si hay inflamación.\n• No acudas a saunas, baños turcos ni te expongas directamente al sol o rayos UVA durante los primeros 3 días. Pospone también el ejercicio físico de alta intensidad.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Sí, es 100% reversible. El ácido hialurónico utilizado es una sustancia totalmente biocompatible que el cuerpo reabsorbe de forma gradual con los meses. No obstante, si el paciente desea realizar alguna modificación o es necesario por criterios médicos, disponemos en clínica de la enzima hialuronidasa. Este compuesto deshace el producto de forma inmediata, segura y selectiva, devolviendo a las facciones su estado original.'
        },
        {
          pregunta: 'Contraindicaciones principales',
          respuesta: '• Mujeres en periodo de embarazo o lactancia.\n• Infecciones activas en la piel del rostro (como brotes de acné quístico severo, herpes o heridas) en la zona de la mejilla el día de la cita.\n• Alergia diagnosticada al ácido hialurónico o a la lidocaína.\n• Enfermedades autoinmunes o sistémicas en fase activa no controladas.\n• Presencia de materiales de relleno permanentes previos en el tercio medio facial.'
        }
      ],
      evidencia: [
        { titulo: "Midface Rejuvenation with Volumizing Fillers", fuente: "Aesthetic Surgery Journal", link: "#" }
      ]
    }
  },
  'marcaje-mandibular': {
    nombre: 'Marcaje mandibular',
    tituloDescripcion: '¿Qué es el marcaje mandibular con ácido hialurónico?',
    imagen: '/tratamientos/marcaje-mandibular.jpeg',
    descripcionBreve: 'Define tu contorno facial, tensa el cuello y proyecta seguridad con una mandíbula estructurada.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Cánula' },
      { titulo: 'Tiempo', valor: '45 min' },
      { titulo: 'Resultados', valor: 'Inmediatos' },
      { titulo: 'Duración', valor: '12-18 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético de alta precisión diseñado para definir, esculpir y estructurar el contorno inferior del rostro. Mediante la infiltración de ácido hialurónico de alta densidad, logramos proyectar el ángulo de la mandíbula y delimitar la línea que separa el rostro del cuello. Este procedimiento es ideal tanto para pacientes jóvenes que buscan potenciar sus facciones y ganar un perfil más estilizado o masculinizado, como para rostros maduros que desean disimular la flacidez inicial del tercio inferior y recuperar el soporte óseo perdido, consiguiendo un resultado nítido, elegante y natural.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La definición del contorno mandibular es visible de forma inmediata en una única sesión.\n\nDentro de nuestro protocolo clínico, programamos una visita de control a las dos semanas. En esta consulta evaluamos la correcta integración del gel de alta densidad con la estructura ósea del maxilar inferior, comprobamos la perfecta simetría bilateral y, si el caso lo requiere, realizamos cualquier pequeño ajuste de optimización.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable. Al trabajarse habitualmente en planos profundos sobre el tejido óseo, la sensibilidad al dolor es muy baja. Además, los viales de ácido hialurónico que empleamos incorporan lidocaína en su fórmula que adormecen la zona.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para asegurar un procedimiento seguro y minimizar la aparición de hematomas en el área del cuello y la mandíbula, te recomendamos seguir estas pautas previas:\n\n• Evita consumir antiinflamatorios (como ibuprofeno o aspirina) y suplementos como el Omega 3 o la Vitamina E durante los 3-5 días anteriores a tu cita, a menos que sea por indicación médica.\n• No consumas bebidas alcohólicas.\n• El día de la cita acude a la clínica con el rostro y la línea de la mandíbula limpios. En el caso de los hombres, se recomienda acudir afeitados de forma suave (evitando irritaciones severas en la piel el mismo día).'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Aunque puedes reincorporarte a tu rutina diaria de inmediato, el tercio inferior requiere cuidados específicos las primeras horas para que el soporte se asiente correctamente:\n\n• No te realices masajes faciales, tratamientos de estética en cabina ni utilices rodillos o Gua Sha durante las primeras dos semanas. Intenta dormir boca arriba.\n• Es completamente normal notar una sensación similar a las agujetas o cierta rigidez al masticar o abrir la boca de par en par durante los primeros 2-3 días.\n• Si experimentas una leve inflamación, puedes aplicar frío local de forma indirecta y suave. Evita el ejercicio físico intenso, las saunas, piscinas y la exposición solar directa.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Sí, es 100% reversible. Al utilizar exclusivamente geles de ácido hialurónico de calidad premium, el material es totalmente biocompatible y reabsorbible por tu propio organismo. En caso de que se desee modificar el volumen o si es necesario por criterios médicos, disponemos en la clínica de la enzima hialuronidasa. Este componente médico disuelve el producto de forma inmediata y segura, devolviendo al contorno de tu rostro su anatomía original en pocas horas.'
        },
        {
          pregunta: 'Contraindicaciones principales',
          respuesta: '• Mujeres en periodos de embarazo o lactancia.\n• Infecciones cutáneas activas, heridas abiertas o brotes severos de acné en la línea de la mandíbula, mentón o zona superior del cuello el día de la cita.\n• Alergia documentada al ácido hialurónico o al anestésico local (lidocaína).\n• Enfermedades autoinmunes sistémicas o patologías del colágeno en fase de brote activo.\n• Antecedentes de materiales de relleno permanentes previos (como siliconas o biopolímeros) en el tercio inferior del rostro.'
        }
      ],
      evidencia: [
        { titulo: "Jawline Contouring with Fillers", fuente: "Dermatologic Surgery", link: "#" }
      ]
    }
  },
  'correccion-menton': {
    nombre: 'Proyección y corrección de mentón',
    tituloDescripcion: '¿Qué es la proyección y corrección de mentón con ácido hialurónico?',
    imagen: '/tratamientos/menton.jpeg',
    descripcionBreve: 'Equilibra tu perfil, reduce visualmente la papada y aporta fuerza a tu estructura facial.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Microinyección ósea' }, 
      { titulo: 'Tiempo', valor: '20 min' }, 
      { titulo: 'Resultados', valor: 'Inmediatos' }, 
      { titulo: 'Duración', valor: '12-18 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético avanzado y no quirúrgico diseñado para definir, proyectar y equilibrar la estructura del mentón, logrando una armonía perfecta en las facciones del rostro.\n\nUn mentón retraído o corto desequilibra la proporción facial, haciendo que la nariz parezca más prominente o acentuando la zona de la papada. Mediante la infiltración precisa de ácido hialurónico de alta densidad, conseguimos proyectar el mentón hacia adelante, alargar el rostro de forma sutil o suavizar la forma de la barbilla. Es la alternativa ideal a la mentoplastia quirúrgica para quienes buscan estilizar el perfil facial de manera inmediata, segura y sin postoperatorio.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La prevención y proyección del mentón es visible de forma inmediata en una única sesión.\n\nSiguiendo nuestro protocolo clínico, programamos una visita de control obligatoria a las dos semanas. En esta cita de seguimiento evaluamos la perfecta adaptación del producto sobre la estructura ósea, confirmamos la simetría y realizamos cualquier pequeño ajuste de optimización necesario para consolidar un acabado impecable, lo cual está completamente incluido en el tratamiento inicial.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'Es un procedimiento muy tolerable. Al realizarse en un plano anatómico profundo sobre el hueso (donde apenas existen terminaciones nerviosas sensitivas), las molestias son mínimas. Además, el ácido hialurónico que utilizamos incorpora lidocaína en su fórmula, adormeciendo el tejido y permitiendo que la sesión sea cómoda.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: '• Evita consumir antiinflamatorios (como el ibuprofeno o la aspirina) y suplementos alimenticios (Omega 3, Vitamina E) durante los 3-5 días anteriores a tu cita, a menos que sea por prescripción médica.\n• No consumas bebidas alcohólicas.\n• El día de la cita acude a la clínica con la zona del mentón limpia y desmaquillada. En pacientes masculinos, se aconseja acudir con un afeitado suave del mismo día o el anterior para facilitar la evaluación anatómica exacta de la barbilla.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Puedes retomar tu actividad diaria de forma inmediata, pero debido a que el material empleado ejerce una función de soporte óseo, es fundamental que sigas estas recomendaciones los primeros días:\n\n• No te realices masajes fuertes, limpiezas faciales profundas ni utilices herramientas tipo Gua Sha o rodillos durante las primeras dos semanas. Intenta dormir boca arriba.\n• Es normal experimentar una sensación de molestia leve, presión o "agujetas" en la barbilla al gesticular, hablar o masticar durante las primeras 48-72 horas.\n• Primeros 3 días: Evita acudir a saunas, baños de vapor, piscinas o realizar ejercicio físico intenso. Tampoco te expongas de manera directa al sol o a radiación UVA para controlar el proceso de inflamación.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Sí, es 100% reversible. Al trabajar exclusivamente con ácidos hialurónicos premium y biodegradables, el producto es reabsorbido de manera natural por tu propio organismo con el paso del tiempo. Sin embargo, si deseas realizar cualquier modificación o si fuera necesario bajo criterios de seguridad médica, disponemos en consulta de la enzima hialuronidasa. Este compuesto disuelve el gel de forma inmediata y segura, devolviendo al mentón su aspecto original en pocas horas.'
        },
        {
          pregunta: 'Contraindicaciones principales',
          respuesta: '• Mujeres en periodos de embarazo o de lactancia.\n• Presencia de infecciones activas en la piel (brotes de acné quístico severo, herpes labial activo o foliculitis) en la zona de la barbilla el día de la cita.\n• Alergia diagnosticada al ácido hialurónico o a los anestésicos locales (lidocaína).\n• Enfermedades autoinmunes sistémicas o patologías del tejido conectivo en fase activa.\n• Existencia previa de implantes rígidos de mentón (prótesis quirúrgicas) o materiales de relleno permanentes antiguos en el tercio inferior del rostro.'
        }
      ],
      evidencia: [
        { titulo: "Chin Augmentation with Hyaluronic Acid", fuente: "Journal of Craniofacial Surgery", link: "#" }
      ]
    }
  },
  'relleno-ojeras': {
    nombre: 'Relleno de ojeras',
    tituloDescripcion: '¿Qué es el relleno de ojeras con ácido hialurónico?',
    imagen: '/tratamientos/relleno-ojeras.jpg',
    descripcionBreve: 'Recupera la luz de tu mirada. Eliminamos el hundimiento y el aspecto de cansancio crónico.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Cánula atraumática' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'Inmediatos' },
      { titulo: 'Duración', valor: '12-18 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético de alta precisión diseñado para recuperar el volumen perdido en la zona del surco lagrimal y rejuvenecer la mirada de forma inmediata. Mediante la infiltración de un ácido hialurónico específico de baja densidad y nula capacidad hidrofílica (que no retiene agua para evitar bolsas), logramos eliminar el aspecto de cansancio o "mirada triste".\n\nEste procedimiento suaviza la transición entre el párpado inferior y la mejilla, proyectando la zona de la ojera de forma natural. Al rellenar el surco, la luz vuelve a incidir correctamente sobre la piel, atenuando significativamente el tono oscuro o sombreado de la ojera.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'En la gran mayoría de los casos, una única sesión es suficiente para apreciar una mirada descansada de forma inmediata. Al tratarse de una zona anatómica especialmente compleja, aplicamos el principio médico de la prudencia: es preferible corregir de menos que de más.\n\nA las dos o tres semanas del tratamiento, realizamos una visita de control para evaluar la integración del producto una vez asentado. Si en esta revisión se requiere una pequeña optimización para perfeccionar el resultado, está completamente incluida en el tratamiento inicial.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy cómodo para el paciente. Para garantizar el máximo confort y, sobre todo, la máxima seguridad, realizamos el tratamiento utilizando una cánula de punta roma en lugar de agujas tradicionales.\n\nLa cánula avanza suavemente por los tejidos sin cortar los vasos sanguíneos, lo que reduce las molestias al mínimo y disminuye drásticamente el riesgo de hematomas. Además, el ácido hialurónico específico que empleamos incorpora lidocaína (anestésico) en su composición para que la sesión sea una experiencia confortable.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para asegurar una sesión óptima y minimizar la aparición de pequeñas rojeces, te recomendamos seguir estas pautas previas:\n\n• No consumas antiinflamatorios (como el ibuprofeno o la aspirina) ni suplementos de Omega 3 o Vitamina E durante los 3-5 días anteriores a la cita.\n• No consumas bebidas alcohólicas las 24 horas previas al tratamiento.\n• Ven a la clínica preferiblemente sin maquillaje ni corrector de ojeras en la zona periocular.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'La zona periocular es muy delicada, por lo que las primeras horas requieren un cuidado especial:\n\n• Primeras 24 horas: No frotes, presiones ni masajees la zona de las ojeras. Evita el uso de gafas pesadas que se apoyen directamente sobre el surco tratado.\n• Primeros 2 días: Evita el ejercicio físico intenso, las saunas, baños turcos o la exposición solar directa.\n• Es normal notar una ligera tirantez o edema muy leve los primeros días. Puedes aplicar frío local indirecto de forma muy suave si el médico lo indica.\n• Evita aplicar corrector de ojeras o cosméticos en la zona inmediatamente tratada hasta el día siguiente.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Sí, es 100% reversible. El ácido hialurónico periocular es un material reabsorbible que el cuerpo asimila con el tiempo. No obstante, al trabajar en una zona tan visible, contar con una garantía absoluta es clave: disponemos de la enzima hialuronidasa. Si por cualquier motivo anatómico el resultado no fuera el deseado o el producto generase una retención de líquido tardía, esta enzima disuelve el gel de forma segura y rápida en pocas horas.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: 'Este tratamiento médico está contraindicado o deberá posponerse en los siguientes casos:\n\n• Bolsas palpebrales prominentes (grasas o retención de líquido importante): El ácido hialurónico está diseñado para tratar el hundimiento; si el paciente tiene bolsas grandes, el relleno podría empeorarlas.\n• Embarazo y lactancia.\n• Infecciones activas en la piel de la zona periocular o procesos inflamatorios oculares (como conjuntivitis).\n• Enfermedades autoinmunes graves o sistémicas no controladas.\n• Alergia conocida al ácido hialurónico o a la lidocaína.'
        }
      ],
      evidencia: [
        { titulo: "Treatment of Tear Trough Deformity", fuente: "Plastic and Reconstructive Surgery", link: "#" }
      ]
    }
  },
  'fosa-temporal': {
    nombre: 'Relleno de fosa temporal',
    tituloDescripcion: '¿Qué es el relleno de la fosa temporal con ácido hialurónico?',
    imagen: '/tratamientos/fosa-temporal.jpg',
    descripcionBreve: 'Rejuvenece el tercio superior y eleva la cola de la ceja restaurando el volumen de las sienes.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Cánula / Aguja' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'Inmediatos' },
      { titulo: 'Duración', valor: '12-18 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético diseñado para restaurar el volumen perdido en la zona de las sienes. Con el paso de los años, el envejecimiento provoca una reabsorción ósea y una pérdida de los compartimentos grasos en los laterales de la frente, lo que genera un hundimiento de las sienes que da al rostro un aspecto envejecido, demacrado o excesivamente delgado.\n\nMediante la infiltración precisa de ácido hialurónico de alta densidad, conseguimos proyectar suavemente la fosa temporal. Este procedimiento no solo suaviza los contornos laterales del rostro devolviéndole una forma ovalada y armoniosa, sino que además produce un efecto óptico de "lifting" indirecto, elevando la cola de la ceja y abriendo la mirada.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'En la gran mayoría de los casos, una sola sesión es suficiente para recuperar el volumen perdido y apreciar el resultado de forma inmediata. Al ser una zona que requiere un producto de alta cohesividad, el cambio estructural es muy evidente desde el primer momento.\n\nA las dos o tres semanas, realizamos una consulta de seguimiento para evaluar cómo se ha asentado el producto y comprobar la perfecta simetría entre ambos lados.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable. Además, los geles de ácido hialurónico que utilizamos incorporan lidocaína, lo que minimiza cualquier molestia durante la sesión.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: '• Suspende la toma de antiinflamatorios (como ibuprofeno o aspirina) y suplementos de Omega 3 o Vitamina E entre 3 y 5 días antes, salvo indicación médica.\n• Evita el alcohol y el tabaco en las 24 horas previas.\n• Ven a la consulta con el rostro y la línea de nacimiento del cabello limpios de maquillaje o productos capilares pesados.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'La recuperación es inmediata, pero al tratarse de un músculo de la masticación (el músculo temporal), el post-tratamiento tiene ciertas particularidades:\n\n• Es completamente normal sentir una ligera molestia, agujetas o sensación de presión al abrir la boca o masticar alimentos duros durante los primeros 2-3 días. Se recomienda una dieta más blanda si es necesario.\n• Primeras 24-48 horas: Evita presionar la zona. Intenta dormir boca arriba y no uses cascos de música ajustados, diademas o gorras que ejerzan presión directa sobre las sienes.\n• Evita fuentes de calor y ejercicio: No realices deporte intenso, ni acudas a saunas o piscinas en los 2 días posteriores.\n• Control del dolor: Si notas sensibilidad, puedes tomar paracetamol. Evita el ibuprofeno las primeras horas.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Sí, es 100% reversible. Al igual que en el resto de tratamientos con ácido hialurónico, el producto es reabsorbible y biocompatible. Contamos en clínica con la enzima hialuronidasa, nuestro protocolo de seguridad para disolver el producto de forma inmediata si el paciente lo requiere o si se deseara modificar el volumen asentado.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: 'Este procedimiento médico no se realizará o se pospondrá bajo los siguientes criterios:\n\n• Embarazo y lactancia.\n• Infecciones activas en la piel de la zona (frente, sienes o cuero cabelludo cercano).\n• Patologías autoinmunes graves o sistémicas sin control médico.\n• Alergia conocida al ácido hialurónico o a los anestésicos locales.'
        }
      ],
      evidencia: [
        { titulo: "Temporal Fossa Volumization Techniques", fuente: "Aesthetic Surgery Journal", link: "#" }
      ]
    }
  },
  'surco-nasogeniano': {
    nombre: 'Tratamiento de surco nasogeniano',
    tituloDescripcion: '¿Qué es el tratamiento del surco nasogeniano con ácido hialurónico?',
    imagen:'/tratamientos/surconasogeniano.jpeg',
    descripcionBreve: 'Suaviza las líneas de tristeza y el rictus para un rostro más amable, fresco y descansado.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Cánula subdérmica' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'Inmediatos' },
      { titulo: 'Duración', valor: '9-12 meses' }
    ],
    detalles: {
      descripcion: 'Es un procedimiento médico-estético diseñado para suavizar las líneas de expresión y pliegues que se forman entre la nariz y las comisuras de la boca, devolviendo al rostro un aspecto más descansado, fresco y rejuvenecido. Con el paso del tiempo, la pérdida de soporte óseo y el desplazamiento de los compartimentos grasos de las mejillas hacen que los tejidos caigan, acentuando este surco y aportando una apariencia de cansancio o tristeza.\n\nEl tratamiento se realiza mediante la infiltración de ácido hialurónico de densidad media-alta. Dependiendo de las necesidades anatómicas del paciente, podemos abordar el problema desde su origen (aportando soporte en el pómulo para realizar un efecto lifting que eleve el tejido) o tratando directamente el surco de forma superficial para recuperar la tersura de la piel, garantizando siempre la máxima naturalidad al gesticular y sonreír.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'En la gran mayoría de los casos, una sola sesión es suficiente para atenuar el surco y apreciar un cambio notable e inmediato. Al reponer el volumen perdido, el rostro recupera su equilibrio al momento.\n\nA las dos o tres semanas de la sesión inicial, programamos una consulta de seguimiento para valorar la integración del producto en una zona de alta gesticulación. Si en esta revisión se requiere algún pequeño toque de optimización para perfeccionar la simetría, se realiza de manera integrada.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un tratamiento tolerable. Habitualmente realizamos el procedimiento utilizando una cánula ultrafina de punta roma, la cual avanza de forma suave por los tejidos sin cortar los vasos sanguíneos, reduciendo al mínimo las molestias y el riesgo de hematomas. Además, los geles de ácido hialurónico que empleamos incorporan lidocaína (anestésico) en su propia fórmula, adormeciendo la zona durante la sesión.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para asegurar un procedimiento seguro y minimizar la aparición de pequeñas rojeces o hematomas, te recomendamos seguir estas pautas:\n\n• Evita medicamentos que afecten a la coagulación: No tomes antiinflamatorios (como ibuprofen o aspirina) ni suplementos de Omega 3 o Vitamina E durante los 3-5 días previos, a menos que sea por indicación médica.\n• No consumas bebidas alcohólicas en las 24 horas anteriores a tu cita.\n• Si tienes propensión a sufrir brotes de acné severo o infecciones cutáneas en la zona perioral, coméntanoslo antes de acudir.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'La recuperación es inmediata y te permite volver a tu rutina diaria, siguiendo unos cuidados básicos:\n\n• Primeras 24 horas: Evita tocar, presionar o masajear la zona tratada. Intenta no gesticular de forma excesivamente exagerada o reír de manera forzada justo después de la sesión para dejar que el producto se asiente adecuadamente.\n• No apliques maquillaje en la zona del surco hasta el día siguiente. Mantén el rostro limpio.\n• Pospone el ejercicio físico intenso, el uso de saunas, baños turcos o la exposición solar directa durante los primeros 2 días.\n• Posición al dormir: Intenta dormir boca arriba con la cabeza ligeramente elevada durante las primeras noches.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Sí, es 100% reversible. El ácido hialurónico empleado es un material completamente biocompatible y reabsorbible que tu organismo asimilará de forma gradual. Al igual que en el resto de nuestros tratamientos, contamos en clínica con la enzima médica hialuronidasa. Este protocolo de seguridad nos permite disolver el gel de manera rápida y segura en pocas horas si por cualquier criterio estético o médico se deseara revertir el resultado.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: 'Este procedimiento médico no se realizará o se pospondrá bajo los siguientes criterios:\n\n• Embarazo y lactancia.\n• Infecciones activas en la zona a tratar: Presencia de brotes de acné inflamatorio, herpes labial, dermatitis o heridas abiertas en el área nasogeniana.\n• Enfermedades autoinmunes graves o sistémicas que no estén controladas por su especialista.\n• Alergia documentada al ácido hialurónico o a los anestésicos locales (lidocaína).\n• Rellenos permanentes previos: No infilbramos ácido hialurónico en zonas donde existan antecedentes de materiales no reabsorbibles antiguos (como siliconas o biopolímeros).'
        }
      ],
      evidencia: [
        { titulo: "Nasolabial Fold Correction with Dermal Fillers", fuente: "Dermatologic Surgery", link: "#" }
      ]
    }
  },

  // --- 1.2 ARRUGAS Y LÍNEAS ---
  'arrugas-expresion': {
    nombre: 'Tratamiento de arrugas de expresión',
    tituloDescripcion: '¿Qué es el tratamiento de arrugas de expresión (Neuromodulación)?',
    imagen: '/tratamientos/arrugas-expresion.jpeg',
    descripcionBreve: 'Relaja la musculatura facial para suavizar arrugas, despejar la mirada y prevenir el envejecimiento.',
    antesDespues: {
      antes: "/casos/botox-antes.jpg",
      despues: "/casos/botox-despues.jpg"
    },
    parametros: [
      { titulo: 'Técnica', valor: 'Microinyección' },
      { titulo: 'Tiempo', valor: '20 min' },
      { titulo: 'Resultados', valor: 'A los 4-10 días' },
      { titulo: 'Duración', valor: '4-6 meses' }
    ],
    detalles: {
      descripcion: 'Es el procedimiento médico-estético de elección para suavizar, prevenir y eliminar las arrugas dinámicas del tercio superior del rostro, logrando una apariencia visiblemente más descansada, fresca y rejuvenecida sin perder la naturalidad de la expresión. Las arrugas de la frente, el entrecejo y las "patas de gallo" aparecen debido a la contracción repetitiva de los músculos faciales al gesticular.\n\nSu función es relajar temporalmente y de forma selectiva los músculos hiperactivos responsables de los pliegues, permitiendo que la piel se alise, deteniendo el proceso de envejecimiento de la zona y evitando que las arrugas se vuelvan profundas y permanentes.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'Para este tratamiento se requiere una única sesión inicial. A diferencia de los rellenos, el efecto no es inmediato: los músculos comienzan a relajarse de forma progresiva alcanzando el resultado óptimo a los 14 días.\n\nComo protocolo médico, programamos una visita de control obligatorio a las dos semanas. En esta revisión evaluamos la simetría facial en movimiento y, si la fuerza muscular del paciente lo requiere (especialmente frecuente en varones o musculaturas potentes), realizamos un pequeño retoque de optimización.'
        },
        {
          pregunta: '¿Cuánto tiempo dura el efecto?',
          respuesta: 'Los efectos tienen una duración media de entre 4 y 6 meses, dependiendo del metabolismo de cada paciente.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento prácticamente indoloro, rápido y muy cómodo.\n\nPara garantizar el máximo confort, utilizamos microagujas de calibre ultra fino. La mayoría de los pacientes describen la sensación como pequeños pinchazos superficiales perfectamente tolerables, por lo que no es necesario aplicar anestesia infiltrada ni tópica, permitiéndote retomar tus actividades diarias inmediatamente.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para asegurar un procedimiento seguro y evitar la aparición de pequeños puntos de hematoma, te recomendamos:\n\n• No consumas antiinflamatorios (como ibuprofeno o aspirina) ni suplementos que puedan fluidificar la sangre (como el Omega 3) durante los 3-5 días previos a la cita.\n• Acude a la clínica con el rostro limpio y desmaquillado si es posible.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Para asegurar que el producto actúe exactamente en el músculo seleccionado y no se difunda a zonas no deseadas, es fundamental seguir estas pautas estrictas durante las 4 horas posteriores al tratamiento:\n\n• Mantente erguido: No te tumbes, no te acuestes boca abajo ni vayas a dormir durante las primeras 4 horas.\n• Evita masajear, frotar o presionar la frente, el entrecejo o los ojos. Al lavarte el rostro o aplicar cremas, hazlo con toques extremadamente suaves.\n• Evita el ejercicio y el calor: No realices deporte intenso, ni acudas a saunas, piscinas o spas durante las primeras 24 horas. El calor excesivo puede inactivar o desplazar el producto.\n• Evita el uso de cascos o gorras: No utilices elementos que presionen la frente o las sienes inmediatamente después.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'El tratamiento no requiere un "antídoto" directo porque su efecto es completamente transitorio y reversible por sí mismo. El organismo metaboliza y elimina el producto de forma natural y gradual.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Enfermedades neuromusculares de base: Patologías como la Miastenia Gravis o el Síndrome de Lambert-Eaton.\n• Infecciones activas: Presencia de infecciones bacterianas, herpes o heridas abiertas en la piel de la zona de la frente o contorno de ojos.\n• Alergia documentada a los componentes del complejo molecular.'
        }
      ],
      evidencia: [
        { titulo: "Long-term safety of neuromodulators", fuente: "Dermatologic Surgery", link: "#" }
      ]
    }
  },
  'codigo-barras': {
    nombre: 'Corrección código de barras',
    tituloDescripcion: '¿Qué es la corrección del "código de barras"?',
    imagen: '/tratamientos/codigo-barras.jpeg',
    descripcionBreve: 'Suaviza las arrugas periorales y rejuvenece tu sonrisa sin añadir volumen artificial al labio.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Blanching superficial' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'Inmediatos' },
      { titulo: 'Duración', valor: '9-12 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético diseñado para atenuar y eliminar las arrugas verticales que se forman en la piel del labio superior e inferior. Estas líneas de expresión aparecen debido al envejecimiento cutáneo, la pérdida de colágeno, la gesticulación repetitiva al hablar o fumar, y la disminución del soporte estructural de la propia boca.\n\nPara solucionarlo, empleamos un abordaje avanzado mediante la infiltración de ácido hialurónico dinámico de baja densidad y alta elasticidad. En lugar de rellenar de forma masiva, aplicamos la técnica de blanching o microinyecciones superficiales directamente en el lecho de cada arruga. Esto nos permite "sellar" la hendidura y rehidratar la piel desde el interior, devolviendo la tersura y el aspecto liso a la zona perioral sin modificar la anatomía ni aportar un volumen artificial al labio.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'En la mayoría de los casos, una sola sesión es suficiente para apreciar una mejoría y suavizar el relieve de la piel de forma inmediata.\n\nA las dos semanas del procedimiento, programamos una consulta de seguimiento en la clínica. Al ser una zona con tanta movilidad, esta revisión es clave para evaluar la integración del gel en el tejido y comprobar que el resultado es completamente homogéneo al gesticular.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'Es un procedimiento perfectamente tolerable. La zona perioral superior es especialmente sensible, por lo que antes de comenzar, aplicamos una crema anestésica de alta potencia. Asimismo, el producto utilizado incorpora lidocaína (anestesia) en su fórmula, garantizando un procedimiento rápido, seguro y confortable.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para asegurar el éxito del tratamiento y reducir al mínimo el riesgo de pequeños hematomas, te recomendamos:\n\n• Evita medicamentos que afecten a la coagulación: No tomes antiinflamatorios (como ibuprofeno o aspirina) ni suplementos de Omega 3 o Vitamina E entre 3 y 5 días antes de la cita.\n• Si tienes tendencia a sufrir herpes, avísanos unos días antes para pautar un tratamiento preventivo.\n• No consumas bebidas alcohólicas ni fumes en las 24 horas previas.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'La zona perioral es muy propensa a una inflamación transitoria en las primeras horas. Para optimizar el resultado, sigue estas pautas:\n\n• Primeras 24 horas: Evita tocar, frotar o presionar la zona tratada. No uses maquillaje ni labiales. Intenta no gesticular de manera exagerada o forzar la boca (evita usar pajitas).\n• Aplica frío local indirecto (envuelto en un paño limpio) en intervalos cortos. Es normal notar pequeños relieves o durezas al pasar el dedo los primeros días debido a la inflamación; desaparecerán al asentarse el producto.\n• No realices deporte intenso, ni acudas a saunas o piscinas durante los primeros 2 días.\n• Evita fumar y consumir bebidas alcohólicas o alimentos excesivamente calientes durante las primeras 48 horas.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Sí, es 100% reversible. El ácido hialurónico dinámico utilizado es un material totalmente biocompatible que el cuerpo reabsorbe de manera natural con el tiempo. Si por cualquier motivo desearas modificar el resultado de forma inmediata, contamos en clínica con la enzima hialuronidasa, un protocolo de seguridad médica que disuelve el producto de forma rápida y segura en cuestión de horas.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: 'Este procedimiento médico se pospondrá o estará contraindicado en caso de:\n\n• Embarazo y lactancia.\n• Infecciones activas en la zona: Brotes de herpes labial, infecciones bacterianas, acné inflamatorio o heridas abiertas alrededor de la boca.\n• Presencia de rellenos permanentes previos: No infiltramos ácido hialurónico si existen antecedentes de siliconas o biopolímeros en la zona perioral, debido al alto riesgo de complicaciones.\n• Enfermedades autoinmunes graves o sistémicas no controladas.\n• Alergias conocidas al ácido hialurónico o a la lidocaína.'
        }
      ],
      evidencia: [
        { titulo: "Blanching Technique for Perioral Rhytids", fuente: "Journal of Cosmetic Dermatology", link: "#" }
      ]
    }
  },
  'bandas-platismales': {
    nombre: 'Tratamiento de bandas platismales',
    tituloDescripcion: '¿Qué es el tratamiento de bandas platismales?',
    imagen: '/tratamientos/bandas-plastismasles.jpeg',
    descripcionBreve: 'Rejuvenece el cuello, redefine el ángulo mandibular y elimina las cuerdas verticales.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Microinyección selectiva' },
      { titulo: 'Tiempo', valor: '20 min' },
      { titulo: 'Resultados', valor: 'A los 14 días' },
      { titulo: 'Duración', valor: '4-6 meses' }
    ],
    detalles: {
      descripcion: 'Es un procedimiento médico-estético no quirúrgico diseñado para rejuvenecer el cuello y redefinir la línea de la mandíbula. Con el paso del tiempo y la gesticulación, el músculo platisma (un músculo fino y plano que cubre la parte anterior del cuello) tiende a hipertrofiarse y descolgarse, formando unos cordones o cuerdas verticales conocidas como bandas platismales, que tiran de las facciones hacia abajo.\n\nEl tratamiento consiste en la aplicación microfocalizada de proteínas neuromoduladoras (relajantes musculares) directamente sobre estas bandas. Al relajar de forma selectiva las fibras del músculo platisma, conseguimos que las cuerdas verticales desaparezcan, la piel del cuello se alise y se libere la tracción negativa que sufre el tercio inferior, logrando un efecto de lifting biológico que redefine por completo el ángulo mandibular.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'Se requiere una única sesión inicial. Al tratarse de un tratamiento de relajación muscular, el efecto no se aprecia de forma inmediata: el músculo empieza a destensarse a partir del tercer día y el resultado óptimo se consolida a los 14 días.\n\nComo parte de nuestro protocolo de seguridad, programamos una visita de control a las dos semanas para evaluar la simetría del cuello en movimiento y realizar un pequeño retoque si alguna fibra muscular mantiene demasiada fuerza.'
        },
        {
          pregunta: '¿Cuánto duran los efectos del tratamiento?',
          respuesta: 'Los efectos tienen una duración media de entre 4 y 6 meses. Este tiempo puede variar en función de factores individuales de cada paciente, como su velocidad metabólica, el nivel de gesticulación o la realización de ejercicio físico de alta intensidad. Transcurrido este periodo, el músculo recupera su fuerza de forma gradual y es el momento idóneo para programar la siguiente sesión de mantenimiento.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento prácticamente indoloro. Utilizamos agujas de calibre fino, por lo que las infiltraciones se perciben apenas como pequeños y rápidos pinchazos superficiales en la cara anterior del cuello.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para garantizar un procedimiento seguro y evitar la presencia de pequeños hematomas en la zona del cuello, te recomendamos:\n\n• Evita antiinflamatorios: No tomes medicamentos como el ibuprofeno o la aspirina, ni suplementos que puedan licuar la sangre (Omega 3, vitamina E) durante los 3-5 días previos.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Para garantizar que el producto actúe exclusivamente en los puntos musculares seleccionados del cuello, debes seguir estas pautas durante las 4 horas posteriores:\n\n• Evita tumbarte: Mantente en posición erguida (no te acuestes ni te pongas boca abajo).\n• Evita frotar, presionar o realizar masajes de drenaje en la zona tratada. Al aplicar tus cremas habituales, hazlo con toques muy suaves.\n• No realices deporte de alta intensidad ni vayas al gimnasio durante las primeras 24 horas para evitar la migración del producto por sudoración o esfuerzo excesivo.\n• No acudas a saunas, spas, baños turcos ni te expongas al sol de forma directa el día del tratamiento.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'El tratamiento es completamente reversible de forma natural. Al ser un procedimiento de neuromodulación temporal, el organismo metaboliza el producto de forma gradual. Transcurridos unos meses, el músculo platisma recupera su función y contracción habitual de manera progresiva, volviendo exactamente al estado inicial sin dejar ningún tipo de secuela.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Enfermedades neuromusculares de base: Como la Miastenia Gravis, el Síndrome de Lambert-Eaton o esclerosis lateral.\n• Presencia de infecciones cutáneas, acné quístico o heridas abiertas en la zona anterior del cuello.\n• Alergia documentada a los componentes de la fórmula o a la albúmina de huevo.'
        }
      ],
      evidencia: [
        { titulo: "Treatment of Platysmal Bands with Neuromodulators", fuente: "Plastic and Reconstructive Surgery", link: "#" }
      ]
    }
  },

  // --- 1.3 CALIDAD DE PIEL ---
  'mesoterapia-facial': {
    nombre: 'Mesoterapia facial',
    tituloDescripcion: '¿Qué es la mesoterapia facial con vitaminas y ácido hialurónico?',
    imagen: '/tratamientos/mesoterapia-facial.jpeg',
    descripcionBreve: 'Revitaliza tu piel desde el interior con un cóctel de vitaminas, minerales y ácido hialurónico.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Micropunciones' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'Progresivos' },
      { titulo: 'Duración', valor: '3-4 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético de revitalización celular diseñado para devolver de forma inmediata la luminosidad, la elasticidad y la jugosidad a la piel. Con el paso del tiempo, el estrés, la contaminación y la exposición solar, la piel pierde sus nutrientes esenciales, mostrándose apagada, deshidratada y con finas líneas de expresión.\n\nEl procedimiento consiste en la aplicación de microinyecciones superficiales en la dermis de un cóctel personalizado que combina ácido hialurónico no reticulado con más de 50 principios activos (vitaminas A, B, C y E, aminoácidos, coenzimas y minerales). Al depositar estos nutrientes directamente donde la cosmética convencional no puede llegar, estimulamos los fibroblastos, reactivamos la producción de colágeno y elastina, y logramos un efecto de "piel descansada" y profundamente hidratada, sin alterar en absoluto tus volúmenes naturales.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La mesoterapia facial es un tratamiento acumulativo y progresivo de la calidad de la piel. Para lograr un cambio estructural, profundo y duradero se requiere un protocolo inicial de entre 3 y 5 sesiones.\n\nEl número exacto de sesiones y el espacio entre ellas dependerá de las necesidades particulares de cada piel y del grado de envejecimiento. Una vez completado este ciclo inicial personalizado, se recomiendan sesiones de mantenimiento periódicas para prolongar la vitalidad celular y el efecto antioxidante en el tiempo.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable y mínimamente invasivo. Las microinyecciones se realizan de forma muy superficial en la dermis utilizando agujas finas.\n\nPara garantizar que la experiencia sea completamente cómoda y agradable, aplicamos una crema anestésica de alta potencia en el rostro 20-30 minutos antes de comenzar la sesión. La mayoría de los pacientes solo perciben una leve sensación de hormigueo o pequeños pinchazos superficiales perfectamente tolerables.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar tu piel y minimizar la aparición de pequeñas rojeces, te recomendamos seguir estas pautas previas:\n\n• Evita medicamentos que afecten a la coagulación: No consumas antiinflamatorios (como el ibuprofeno o la aspirina) ni suplementos de Omega 3 o Vitamina E durante los 3-5 días anteriores a tu cita.\n• No te realices peelings químicos potentes, exfoliaciones mecánicas profundas o depilación facial con cera la semana previa.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'La recuperación es prácticamente inmediata, aunque al tratarse de múltiples micropunciones superficiales, debes cuidar la piel las primeras horas:\n\n• Primeras 24 horas: No te maquilles ni apliques cosméticos que contengan retinol, ácidos (glicólico, salicílico) o alcohol. Lávate el rostro con un limpiador suave y agua tibia.\n• No frotes ni masajees la cara de forma enérgica. Es normal que queden pequeñas pápulas (pequeños bultitos donde se depositó el producto) o leves rojeces que desaparecen de forma natural en unas horas.\n• Aplica fotoprotector solar de amplio espectro (SPF 50+) cada 2-3 horas y evita la exposición solar directa durante los primeros 2 días.\n• No realices ejercicio físico intenso, ni acudas a saunas, piscinas o baños turcos durante las primeras 48 horas para evitar irritaciones.'
        },
        {
          pregunta: '¿Cuánto duran los efectos del tratamiento?',
          respuesta: 'Al completar el protocolo inicial de 3-5 sesiones, los beneficios de regeneración celular, firmeza y mejora de la textura de la piel tienen una duración media de entre 3 y 4 meses, momento en el cual el metabolismo celular agradece una sesión de mantenimiento.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Al tratarse de un procedimiento de nutrición e hidratación con componentes totalmente biocompatibles y reabsorbibles, el cuerpo los asimila de forma natural. No requiere ningún proceso de reversión (como la hialuronidasa), ya que el ácido hialurónico utilizado es libre (no reticulado), no genera volúmenes fijos ni asimetrías, y simplemente se integra en la dermis aportando agua y sustrato celular.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y lactancia.\n• Presencia de brotes de acné inflamatorio severo, herpes labial activo, eccemas, psoriasis o heridas abiertas en el rostro en el momento de la sesión.\n• Alergias conocidas a alguno de los componentes del cóctel (como a ciertas vitaminas o minerales).\n• Haberse realizado peelings médicos profundos o tratamientos láser ablativos en la zona en los días previos.'
        }
      ],
      evidencia: [
        { titulo: "Mesotherapy in skin rejuvenation", fuente: "Journal of Cosmetic Dermatology", link: "#" }
      ]
    }
  },
  'mesoterapia-periocular': {
    nombre: 'Mesoterapia periocular',
    tituloDescripcion: '¿Qué es la mesoterapia periocular?',
    imagen: '/tratamientos/mesoterapia-periocular.jpg',
    descripcionBreve: 'Revitaliza tu mirada, atenúa las ojeras oscuras y suaviza las finas líneas de expresión.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Microinyecciones' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'Progresivos' },
      { titulo: 'Duración', valor: 'Acumulativa' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético diseñado para revitalizar, aclarar y rejuvenecer la zona del contorno de ojos. La piel periocular es hasta cinco veces más fina que la del resto del rostro, lo que la hace especialmente vulnerable al cansancio, la pérdida de colágeno, la flacidez y los trastornos de la microcirculación.\n\nEl procedimiento consiste en la aplicación de sutiles infiltraciones en la dermis periocular de un cóctel de activos médicos seleccionados (que suelen combinar ácido hialurónico no reticulado, péptidos tensores, aminoácidos, antioxidantes y agentes drenantes o despigmentantes). Al actuar directamente en la ojera, logramos mejorar la microcirculación linfática y sanguínea, atenuar el tono oscuro, suavizar las arrugas finas y aportar una hidratación profunda que devuelve la frescura y apertura a la mirada, sin aportar volúmenes artificiales.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La mesoterapia periocular es un tratamiento acumulativo y progresivo enfocado en la restauración del tejido. Para alcanzar un resultado óptimo, visible y sostenido, se requiere un protocolo inicial de entre 3 y 5 sesiones.\n\nEl número definitivo de sesiones, así como el intervalo de tiempo entre ellas, se determinará de forma personalizada en la consulta tras una valoración médica de tu tipo de piel, el grado de envejecimiento y las indicaciones específicas del laboratorio del producto seleccionado para tu caso. Tras completar este ciclo inicial, se pautarán sesiones de mantenimiento espaciadas en el tiempo para prolongar los resultados.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable ya que antes de iniciar la sesión, aplicamos una crema anestésica de alta potencia para adormecer la piel de la zona. Las microinyecciones se realizan de forma muy superficial mediante agujas de calibre fino, minimizando las molestias al máximo. La mayoría de los pacientes describen la sensación como un leve hormigueo o pequeños pellizcos superficiales perfectamente tolerables.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar la zona periocular y disminuir el riesgo de que aparezcan pequeñas rojeces o hematomas en un área tan vascularizada, se recomienda:\n\n• Evita medicamentos anticoagulantes: No consumas antiinflamatorios (como el ibuprofeno o la aspirina) ni suplementos de Omega 3 o Vitamina E durante los 3-5 días previos a tu cita, salvo indicación médica.\n• Evita aplicar contornos de ojos con altas concentraciones de retinol o ácidos exfoliantes las 48 horas previas.\n• Ven a la clínica preferiblemente sin maquillaje, máscara de pestañas ni corrector de ojeras.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Dado que el tejido periocular es muy propenso a retener líquido de forma transitoria, el post-tratamiento inmediato requiere un cuidado delicado:\n\n• Primeras 24 horas: No frotes, presiones ni masajees la zona de las ojeras. Lávate el rostro de forma extremadamente suave y evita el uso de maquillaje o correctores en la zona tratada hasta el día siguiente.\n• Es normal presentar una ligera rojez, pápulas muy pequeñas (diminutos bultitos donde se depositó el producto) o un edema leve en el párpado inferior. Esto forma parte del proceso y desaparece de forma natural en unas horas o a lo largo del día siguiente.\n• Pospone el ejercicio físico intenso, el uso de saunas, baños turcos o ambientes con calor extremo durante las primeras 48 horas para evitar que aumente la inflamación.\n• Aplica fotoprotección solar específica y utiliza gafas de sol para proteger la zona de la radiación directa durante los primeros días.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Al tratarse de un procedimiento de nutrición cutánea profunda con principios activos totalmente biocompatibles y reabsorbibles, el organismo los metaboliza y asimila de forma natural con el tiempo.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Infecciones oculares o palpebrales activas: Presencia de conjuntivitis, blefaritis, herpes activo u orzuelos en el momento de la sesión.\n• Infecciones o heridas cutáneas en la zona del contorno de ojos.\n• Bolsas grasas palpebrales muy severas o hernia de grasa infraorbitaria: En estos casos, el tratamiento de elección suele ser quirúrgico (blefaroplastia), ya que la mesoterapia no elimina el exceso de grasa estructural.\n• Alergia documentada a alguno de los componentes del cóctel médico seleccionado.'
        }
      ],
      evidencia: [
        { titulo: "Periorbital Rejuvenation with Mesotherapy", fuente: "Journal of Cutaneous and Aesthetic Surgery", link: "#" }
      ]
    }
  },
  'bioestimulacion-polinucleotidos': {
    nombre: 'Bioestimulación con polinucleótidos',
    tituloDescripcion: '¿Qué es la bioestimulación con polinucleótidos?',
    imagen: '/tratamientos/polinucleotidos.jpg',
    descripcionBreve: 'Regenera tu piel desde el interior restaurando la firmeza y elasticidad con tecnología celular avanzada.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Microinyección dérmica' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'Progresivos' },
      { titulo: 'Duración', valor: 'Acumulativa' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético de vanguardia englobado dentro de la medicina regenerativa, diseñado para restaurar la firmeza, la elasticidad y la salud de la piel desde su estructura celular profunda.\n\nAl ser infiltrados en la dermis, estos compuestos se unen a receptores específicos de las células de la piel (los fibroblastos), ordenándoles que vuelvan a fabricar colágeno propio de alta calidad y elastina de forma masiva. Además, tienen una altísima capacidad para captar agua (hidratación tridimensional), un potente efecto antioxidante que neutraliza los radicales libres y una acción antiinflamatoria. Es el tratamiento idóneo para combatir la flacidez, mejorar la textura y regenerar pieles envejecidas, dañadas por el sol o con cicatrices, manteniendo una naturalidad absoluta.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La bioestimulación con polinucleótidos es un proceso biológico de autoreparación cutánea, por lo que sus efectos son progresivos y acumulativos. Aunque la piel empieza a mostrarse más jugosa y tersa a las pocas semanas, el pico máximo de regeneración celular se consolida con el paso de los meses.\n\nPara lograr un cambio estructural, firme y duradero, se requiere habitualmente un protocolo inicial de entre 3 y 5 sesiones. El número definitivo de sesiones, así como el intervalo de tiempo entre ellas, se adaptará estrictamente en la consulta tras una valoración médica de las necesidades de tu piel, tu capacidad de regeneración y las indicaciones específicas del laboratorio del producto seleccionado. Una vez completado este ciclo de choque, se pautarán sesiones de mantenimiento personalizadas.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento perfectamente tolerable. Las infiltraciones se realizan de forma muy precisa en la dermis utilizando agujas o cánulas finas.\n\nPara garantizar que tu experiencia en la clínica sea completamente confortable, aplicamos una crema anestésica de alta potencia en la zona a tratar unos 20-30 minutos antes de comenzar la sesión. Los pacientes suelen describir la sensación como pequeños pinchazos o sutiles puntos de presión superficiales que se toleran sin ninguna dificultad.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar tu piel adecuadamente y minimizar el riesgo de que aparezcan pequeñas rojeces o hematomas, te recomendamos seguir estas pautas:\n\n• Evita medicamentos que afecten a la coagulación: No consumas antiinflamatorios (como el ibuprofeno o la aspirina) ni suplementos de Omega 3 o Vitamina E durante los 3-5 días previos a tu cita, a menos que sea por indicación médica.\n• Evita realizarte tratamientos agresivos en la zona (como peelings químicos potentes o láseres ablativos) la semana anterior.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'El proceso de recuperación es inmediato, requiriendo únicamente unos cuidados básicos durante las primeras horas:\n\n• Primeras 24 horas: No te maquilles ni apliques cosméticos que contengan activos renovadores potentes (retinol, ácidos exfoliantes) o alcohol. Lava la zona de forma suave con un limpiador delicado y agua tibia.\n• Es completamente normal y esperable que aparezcan pequeñas pápulas o bultitos en los puntos de inyección. Esto se debe al depósito del producto y a su alta capacidad hidrofílica; desaparecen de forma natural en unas horas o a lo largo del día siguiente a medida que el gel se integra en el tejido.\n• No realices deporte de alta intensidad, ni acudas a saunas, spas, piscinas o baños turcos durante las primeras 48 horas para evitar que aumente la inflamación local.\n• Aplica fotoprotección solar de amplio espectro (SPF 50+) de forma rigurosa y evita la exposición solar directa los días posteriores.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Al tratarse de un procedimiento de medicina regenerativa basado en polímeros biológicos de nucleótidos completamente biocompatibles y reabsorbibles, el cuerpo los metaboliza y asimila de forma natural a través de las enzimas celulares.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Presencia de brotes de acné inflamatorio severo, herpes activo, dermatitis o heridas abiertas en la zona a tratar en el momento de la sesión.\n• Enfermedades autoinmunes graves, sistémicas o del colágeno que no estén debidamente controladas por su médico especialista.\n• Alergias conocidas a los polinucleótidos o a los componentes de la fórmula.'
        }
      ],
      evidencia: [
        { titulo: "Polynucleotides in Aesthetic Medicine", fuente: "Journal of Cosmetic Dermatology", link: "#" }
      ]
    }
  },
  'prp-facial': {
    nombre: 'Plasma Rico en Plaquetas (PRP)',
    tituloDescripcion: '¿Qué es la terapia facial con Plasma Rico en Plaquetas (PRP)?',
    imagen: '/tratamientos/prpfacial.jpeg',
    descripcionBreve: 'Bioestimulación celular y regeneración cutánea utilizando los recursos biológicos de tu propio cuerpo.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Microinyecciones' },
      { titulo: 'Tiempo', valor: '45 min' },
      { titulo: 'Resultados', valor: 'Progresivos' },
      { titulo: 'Duración', valor: 'Acumulativa' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético de bioestimulación celular y regeneración cutánea que utiliza los recursos biológicos del propio paciente para frenar el proceso de envejecimiento, mejorar la textura de la piel y restaurar su vitalidad. Consiste en el aislamiento y la aplicación concentrada de los factores de crecimiento presentes de forma natural en las plaquetas de nuestra sangre.\n\nEl procedimiento se realiza en la consulta mediante una pequeña extracción de sangre, la muestra se somete a un proceso de centrifugado que permite separar la fracción del plasma donde se concentran las plaquetas. Al ser infiltrado en la dermis, este concentrado activa de manera natural a los fibroblastos, induciendo la producción de colágeno propio, elastina y nuevo tejido, lo que se traduce en una piel notablemente más firme, tersa, luminosa y con arrugas atenuadas.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La terapia con PRP actúa activando los procesos biológicos internos de reparación de los tejidos, por lo que sus beneficios son progresivos. Aunque la mejora en la luminosidad y la elasticidad de la piel se percibe a los pocos días, la verdadera regeneración celular y síntesis de colágeno se consolida con el paso de las semanas.\n\nPara obtener un cambio estructural profundo, el protocolo médico inicial suele requerir entre 3 y 5 sesiones. El número definitivo de sesiones, así como el intervalo de tiempo entre ellas, se pautará de forma personalizada en la consulta tras una valoración médica del estado basal de tu piel, tu edad cronológica y tu capacidad de respuesta celular.\n\nUna vez completado este ciclo inicial de estimulación, se recomiendan sesiones de mantenimiento espaciadas a lo largo del año para prolongar los beneficios biológicos.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'Para garantizar el máximo confort durante tu sesión en la clínica, aplicamos una crema anestésica de alta potencia en la zona a tratar unos 20-30 minutos antes del procedimiento. La mayoría de los pacientes describen la sensación como pequeños pinchazos superficiales que se toleran con total facilidad. Al finalizar la sesión, aplicamos una mascarilla fría o crema recuperadora para calmar la zona antes de que regreses a tus actividades habituales.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar tu organismo y asegurar la obtención de una muestra de plasma de óptima calidad biológica, te recomendamos seguir estas pautas previas:\n\n• No consumas antiinflamatorios (como el ibuprofeno o la aspirina) durante los 5-7 días previos a la cita, ya que estos fármacos inhiben la función plaquetaria de forma temporal y restan eficacia al tratamiento. Si necesitas analgésicos, puedes tomar paracetamol.\n• Evita el consumo de bebidas alcohólicas y el tabaco las 24-48 horas previas. Mantén una excelente hidratación bebiendo abundante agua el día de la cita.\n• Acude a la clínica preferiblemente con el rostro completamente limpio y desmaquillado.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: '• Primeras 24 horas: No te apliques maquillaje, correctores ni cosméticos con activos renovadores fuertes (como retinol o ácidos exfoliantes). Lava el rostro de forma muy suave con un limpiador delicado y agua tibia.\n• No frotes, presiones ni realices masajes enérgicos en el rostro. Es completamente normal presentar pequeñas pápulas o sobreelevaciones transitorias en los puntos de inyección, así como un leve eritema (rojez) que remite de forma espontánea en pocas horas.\n• No realices deporte de alta intensidad, ni acudas a saunas, piscinas, spas o baños turcos durante las primeras 48 horas para evitar la sudoración excesiva o la irritación de las micropunciones.\n• Aplica protector solar de amplio espectro (SPF 50+) de manera rigurosa y evita la exposición solar directa los días posteriores.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: 'Al ser un producto autólogo, el riesgo de alergia o rechazo es inexistente. No obstante, este procedimiento médico está contraindicado o deberá posponerse en los siguientes supuestos:\n\n• Embarazo y periodo de lactancia.\n• Patologías hematológicas o de la coagulación: Pacientes diagnosticados con trombocitopenia (bajo recuento de plaquetas), trastornos funcionales plaquetarios o inestabilidad hemodinámica.\n• Tratamientos anticoagulantes activos: Pacientes bajo pautas farmacológicas estrictas de sintrom u otros anticoagulantes orales.\n• Infecciones activas: Presencia de brotes de acné inflamatorio severo, herpes labial activo, procesos infecciosos cutáneos o sistémicos (fiebre) el día de la sesión.\n• Enfermedades neoplásicas activas o antecedentes oncológicos que no cuenten con la autorización expresa de su especialista.'
        }
      ],
      evidencia: [
        { titulo: "Platelet-Rich Plasma in Dermatology and Aesthetics", fuente: "Journal of Cutaneous and Aesthetic Surgery", link: "#" }
      ]
    }
  },
  'exosomas-facial': {
    nombre: 'Terapia avanzada con exosomas',
    tituloDescripcion: '¿Qué es la terapia avanzada con exosomas?',
    imagen: '/tratamientos/terapia-avanzada-exosomas.jpg',
    descripcionBreve: 'La vanguardia de la medicina regenerativa: reprogramación celular para una piel joven, firme y unificada.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Tópica + Microcanales' },
      { titulo: 'Tiempo', valor: '40 min' },
      { titulo: 'Resultados', valor: 'Progresivos' },
      { titulo: 'Duración', valor: 'Acumulativa' }
    ],
    detalles: {
      descripcion: 'Es el tratamiento más revolucionario dentro de la medicina regenerativa celular, diseñado para revertir los signos del envejecimiento, acelerar la reparación de la piel y unificar el tono cutáneo. Los exosomas son nanopartículas biológicas (vesículas extracelulares) que actúan como el sistema de comunicación más avanzado de nuestro organismo, transportando una altísima concentración de proteínas, factores de crecimiento y material genético directamente de una célula a otra.\n\nEn clínica, aplicamos este tratamiento de forma tópica combinado con técnicas de Microneedling o tecnologías que generan microcanales en la epidermis. A través de estos canales, los exosomas penetran en las capas profundas y liberan su carga molecular, "reprogramando" a las células envejecidas o dañadas para que vuelvan a comportarse como células jóvenes. El resultado es un estímulo sin precedentes en la producción de colágeno y elastina, una reducción notable de arrugas, manchas y cicatrices, y una regeneración global de la textura cutánea.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La terapia con exosomas desencadena un proceso de renovación y reparación celular continuo. Aunque la mejora en la luminosidad, la textura y la reducción de las rojeces o inflamación es visible a los pocos días de la primera sesión, los cambios estructurales más profundos se consolidan progresivamente.\n\nPara maximizar el potencial regenerativo, el protocolo estándar inicial suele requerir entre 3 y 5 sesiones. El número definitivo de sesiones, así como el intervalo de tiempo entre ellas, se adaptará minuciosamente en la consulta tras una valoración médica del estado basal de tu piel y de las indicaciones específicas del laboratorio del producto seleccionado. Posteriormente, se pautarán sesiones de mantenimiento para prolongar la longevidad celular lograda.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable. Al aplicarse los exosomas por vía tópica a través de microcanales previos, la sensación del tratamiento dependerá exclusivamente de la técnica complementaria utilizada.\n\nPara garantizar una experiencia totalmente confortable en nuestra clínica, aplicamos una crema anestésica de alta potencia en la zona a tratar 20-30 minutos antes del procedimiento. La mayoría de los pacientes describen la sesión como una vibración constante o un leve cosquilleo superficial sobre la piel que se tolera con total facilidad.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: '• Suspende el uso de cosméticos que contengan retinol, ácido glicólico, salicílico u otros exfoliantes químicos potentes durante los 3-5 días anteriores a tu cita.\n• Evita la exposición solar intensa o quemaduras en el rostro la semana previa al tratamiento.'
        },
        {
          pregunta: '¿Qué hacer después de la sesión?',
          respuesta: '• Primeras 24 horas: No te apliques maquillaje, correctores ni cosméticos convencionales. Lava el rostro de forma extremadamente suave solo con agua tibia o con el limpiador específico que te paute el médico en la consulta.\n• Es completamente normal experimentar una ligera rojez o sensación de tirantez similar a una leve quemadura solar durante las primeras 12-24 horas. Disminuirá rápidamente gracias a la acción de las vesículas.\n• Pospone el ejercicio físico intenso, el uso de saunas, piscinas, spas o baños turcos durante las primeras 48 horas para evitar la contaminación de los microcanales o la irritación por sudor.\n• Aplica protector solar de amplio espectro (SPF 50+) de forma obligatoria cada 2-3 horas y evita la exposición solar directa durante los días posteriores.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Infecciones cutáneas activas: Presencia de brotes de acné inflamatorio agudo, herpes labial activo, eccemas, dermatitis o heridas abiertas en la zona a tratar el día de la sesión.\n• Enfermedades oncológicas activas: Pacientes en procesos tumorales o tratamientos de quimio/radioterapia activos (salvo autorización expresa de su oncólogo).\n• Alergia conocida a alguno de los componentes de la fórmula de soporte de los exosomas.'
        }
      ],
      evidencia: [
        { titulo: "Exosomes in skin rejuvenation", fuente: "International Journal of Molecular Sciences", link: "#" }
      ]
    }
  },

  // --- 1.4 INDUCTORES DE COLÁGENO ---
  'radiesse': {
    nombre: 'Hidroxiapatita de Calcio (Radiesse)',
    tituloDescripcion: '¿Qué es el tratamiento de Hidroxiapatita Cálcica?',
    imagen: '/tratamientos/radiesse.jpeg',
    descripcionBreve: 'Combate la flacidez y recupera el soporte estructural de tu rostro con un efecto lifting biológico inmediato y duradero.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Cánula ultrafina' },
      { titulo: 'Tiempo', valor: '45 min' },
      { titulo: 'Resultados', valor: 'Inmediatos + Progresivos' },
      { titulo: 'Duración', valor: '12-18 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético avanzado de bioestimulación celular e inducción de colágeno, diseñado para combatir la flacidez facial, recuperar el soporte estructural y redefinir los contornos del rostro de forma natural, sin añadir un volumen artificial. Las microesferas de este compuesto, biocompatible y presente de forma natural en nuestro organismo, actúan reactivando la juventud de la piel desde sus capas más profundas.\n\nEl procedimiento se realiza mediante infiltraciones precisas (habitualmente con una cánula ultrafina). Al depositarse en el tejido, produce un doble beneficio: un efecto de soporte y definición inmediato gracias al gel conductor que cohesiona el producto, y un estímulo regenerativo a medio plazo. Con el paso de las semanas, las microesferas activan a los fibroblastos para que sinteticen su propio colágeno nuevo y elastina, logrando una piel notablemente más firme, densa y elástica con un efecto de lifting biológico.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'Al tratarse de un proceso de bioestimulación biológica, el resultado se consolida de forma progresiva a partir del tercer mes, que es cuando la nueva red de colágeno propio se ha formado por completo en la dermis. Dependiendo del grado de flacidez basal de la piel y de la respuesta celular de cada paciente, el médico evaluará en las consultas de seguimiento la idoneidad de realizar una sesión de refuerzo. Los resultados tienen una alta durabilidad, manteniéndose entre 12 y 18 meses.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable y cómodo. Para garantizar la máxima seguridad anatómica y el confort del paciente, realizamos el tratamiento utilizando una cánula ultrafina de punta roma. La cánula avanza suavemente por los tejidos sin cortar los vasos sanguíneos, lo que reduce las molestias y el riesgo de hematomas.\n\nAdemás, el producto se diluye previamente en la consulta con una pequeña cantidad de lidocaína (anestésico local).'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar tu piel y minimizar la aparición de pequeños hematomas en las zonas de soporte facial, te recomendamos seguir estas pautas:\n\n• Evita medicamentos que afecten a la coagulación: No consumas antiinflamatorios (como el ibuprofeno o la aspirina) ni suplementos de Omega 3 o Vitamina E durante los 3-5 días previos a tu cita, salvo indicación médica expresa.\n• No te sometas a tratamientos estéticos agresivos en el rostro (como peelings químicos profundos o láseres abrasivos) la semana anterior.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'La recuperación es inmediata y te permite reincorporarte a tu vida diaria, siguiendo unos cuidados básicos durante los primeros días:\n\n• Primeras 24-48 horas: Evita masajear, presionar de forma enérgica o frotar las zonas tratadas. Intenta dormir boca arriba las primeras noches.\n• Evita aplicar maquillaje pesado o correctores durante las primeras 12-24 horas sobre los puntos de entrada de la cánula.\n• No realices ejercicio físico de alta intensidad, ni acudas a saunas, piscinas, spas o baños turcos durante los primeros 2 días para evitar un aumento de la inflamación transitoria.\n• Aplica protector solar de amplio espectro (SPF 50+) de manera rigurosa si vas a exponerte al sol.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Infecciones activas en la zona: Presencia de brotes de acné inflamatorio severo, herpes labial activo, procesos infecciosos cutáneos o heridas abiertas el día de la sesión.\n• Antecedentes de rellenos permanentes: Está contraindicado infiltrar este producto en zonas del rostro donde existan materiales no reabsorbibles antiguos (como siliconas o biopolímeros) debido al riesgo de desencadenar reacciones inflamatorias tardías.\n• Enfermedades autoinmunes graves, sistémicas o del colágeno no controladas.\n• Alergias conocidas: Hipersensibilidad documentada a la hidroxiapatita de calcio o a la lidocaína.'
        }
      ],
      evidencia: [
        { titulo: "Calcium Hydroxylapatite for Facial Rejuvenation", fuente: "Aesthetic Surgery Journal", link: "#" }
      ]
    }
  },
  'sculptra': {
    nombre: 'Ácido Poli-L-Láctico (Sculptra)',
    tituloDescripcion: '¿Qué es el tratamiento de Ácido Poli-L-Láctico?',
    imagen: '/tratamientos/sculptra.jpeg',
    descripcionBreve: 'Restituye la arquitectura interna de tu rostro estimulando tu propio colágeno para combatir la flacidez severa.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Cánula fina' },
      { titulo: 'Tiempo', valor: '45 min' },
      { titulo: 'Resultados', valor: 'A partir de 4-6 semanas' },
      { titulo: 'Duración', valor: '18-24 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético avanzado de bioestimulación celular y regeneración estructural, diseñado para combatir la flacidez severa, restaurar la firmeza cutánea y redefinir los contornos faciales. El ácido poli-L-Láctico es un polímero sintético, 100% biocompatible y completamente reabsorbible.\n\nA diferencia de los materiales de relleno convencionales, este compuesto no trabaja aportando un volumen inmediato. Su función principal es actuar como un potente inductor del propio colágeno del paciente. Al ser infiltrado en las capas profundas de la piel, las micropartículas de este polímero desencadenan una respuesta biológica que reactiva a los fibroblastos, obligándolos a fabricar una nueva red de colágeno propio. Esto restituye de forma progresiva la arquitectura interna del rostro, devolviendo la densidad y la tersura perdidas con los años.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'El ácido poli-L-Láctico es un tratamiento puramente biológico y acumulativo. Debido a que el organismo requiere tiempo para sintetizar las nuevas proteínas estructurales, los resultados no son inmediatos, sino que comienzan a apreciarse de forma natural a partir de la cuarta o sexta semana, alcanzando su punto óptimo a los 3 meses.\n\nDependiendo del grado de flacidez basal, la pérdida de soporte y la capacidad regenerativa de cada paciente, el protocolo médico estándar suele requerir un ciclo inicial de entre 2 y 3 sesiones, espaciadas entre 4 y 6 semanas. Tras completar este protocolo de choque, los resultados de firmeza y elasticidad son altamente duraderos, manteniéndose en perfectas condiciones entre 18 y 24 meses.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable y cómodo. Para garantizar la máxima seguridad anatómica y el confort del paciente, realizamos el tratamiento utilizando una cánula fina de punta roma. La cánula avanza suavemente por los tejidos sin cortar los vasos sanguíneos, lo que reduce las molestias y el riesgo de hematomas. Además, el producto se diluye previamente en la consulta con una pequeña cantidad de lidocaína (anestésico local).'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar tu piel adecuadamente y minimizar la aparición de pequeños hematomas, te recomendamos seguir estas pautas:\n\n• Evita medicamentos que afecten a la coagulación: No consumas antiinflamatorios (como el ibuprofeno o la aspirina) ni suplementos de Omega 3 o Vitamina E durante los 3-5 días previos a tu cita, a menos que sea por indicación médica expresa.\n• Evita realizarte tratamientos agresivos en la zona (como peelings químicos potentes o láseres ablativos) la semana anterior.\n• Acude a tu cita médica preferiblemente con la piel completamente limpia y libre de maquillaje.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'El post-tratamiento del ácido poli-L-Láctico tiene una pauta específica y obligatoria que el paciente debe cumplir en casa para garantizar una correcta distribución del producto (la regla del 5):\n\n• El masaje de los 5 días (Fundamental): Debes masajear las zonas tratadas durante 5 minutos, 5 veces al día, durante los 5 días posteriores al tratamiento. Esto asegura que las micropartículas se repartan de manera homogénea en el tejido y optimiza la síntesis de colágeno.\n• Evita el maquillaje en los puntos de entrada de la cánula durante las primeras 24 horas.\n• No realices ejercicio físico de alta intensidad, ni acudas a saunas, piscinas o spas durante los primeros 2 días para evitar un aumento de la inflamación.\n• Aplica protector solar de amplio espectro (SPF 50+) de manera rigurosa.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Infecciones activas en la zona: Presencia de brotes de acné inflamatorio, herpes labial activo o heridas abiertas el día de la sesión.\n• Antecedentes de rellenos permanentes: Está contraindicado infiltrar este producto si existen materiales no reabsorbibles antiguos (como siliconas o biopolímeros) en la zona.\n• Predisposición a queloides: Pacientes con antecedentes demostrados de formación de cicatrices queloides o respuestas hipertróficas.\n• Enfermedades autoinmunes graves, sistémicas o del tejido conectivo no controladas.\n• Alergias conocidas: Hipersensibilidad documentada al ácido poli-L-Láctico.'
        }
      ],
      evidencia: [
        { titulo: "Poly-L-lactic acid (PLLA) for facial volume restoration", fuente: "Journal of Cosmetic Dermatology", link: "#" }
      ]
    }
  },

  // --- 1.5 RENOVACIÓN CUTÁNEA ---
  'peelings-quimicos': {
    nombre: 'Peelings químicos médicos',
    tituloDescripcion: '¿Qué son los peelings químicos médicos?',
    imagen: '/tratamientos/peeling.jpeg',
    descripcionBreve: 'Renovación cutánea profunda para eliminar imperfecciones, unificar el tono y revelar una piel completamente nueva.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Tópica controlada' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'A los 7 días' },
      { titulo: 'Duración', valor: 'Larga duración' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético de renovación cutánea global diseñado para eliminar las capas de células muertas, corregir imperfecciones y unificar el tono y la textura de la piel. Consiste en la aplicación controlada de diferentes sustancias ácidas purificadas de alta gama médica sobre el rostro, cuello o escote.\n\nA diferencia de las exfoliaciones convencionales, el peeling médico actúa a niveles profundos de la epidermis y la dermis. Según las necesidades de cada paciente, seleccionamos y combinamos diferentes activos. Este proceso induce una descamación controlada que elimina las células dañadas, reduce manchas, secuelas de acné, poros abiertos y arrugas finas, dando paso a una piel completamente nueva, tersa, luminosa y oxigenada.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La respuesta y los resultados de un peeling químico médico dependen directamente de la profundidad del tratamiento y de la patología a tratar (como melasma, acné activo o rejuvenecimiento). Aunque la piel muestra un cambio notable en textura y luminosidad desde la primera sesión, para lograr una corrección estructural y duradera se requiere habitualmente un protocolo inicial de entre 3 y 5 sesiones.\n\nEl número definitivo de sesiones, así como el intervalo de tiempo entre ellas, se determinará de forma personalizada en la consulta tras una valoración médica de tu tipo de piel, tu fototipo y las indicaciones específicas del laboratorio del producto seleccionado. Al finalizar el ciclo de choque, se valorará la necesidad de sesiones de mantenimiento anuales, preferiblemente en las estaciones de menor radiación solar.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable y cómodo. Para garantizar la máxima seguridad y el confort del paciente durante la sesión, realizamos una preparación exhaustiva de la piel y controlamos los tiempos de exposición de forma milimétrica. La sensación habitual durante la aplicación del ácido se limita a un calor local o un sutil hormigueo completamente tolerable que remite rápidamente al aplicar el producto neutralizante específico o mascarillas calmantes al finalizar el procedimiento.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar la piel adecuadamente y evitar efectos adversos como la hiperpigmentación postinflamatoria, es fundamental seguir estas pautas previas:\n\n• Suspende el uso de cremas o sérums que contengan retinol, ácido glicólico, salicílico u otros agentes exfoliantes entre 3 y 5 días antes de tu cita.\n• No realices depilación facial (con cera, hilo o crema depilatoria) ni te decolores el vello de la zona durante los 5 días anteriores.\n• No te expongas al sol de forma intensa ni acudas a soláriums la semana previa al tratamiento. La piel no debe estar bronceada ni presentar quemaduras.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'El éxito de un peeling químico médico depende en un 50% de los cuidados que el paciente realice estrictamente en casa durante el proceso de descamación:\n\n• Fotoprotección solar estricta (El cuidado más importante): Aplica protector solar de amplio espectro (SPF 50+) cada 2 o 3 horas de forma obligatoria, incluso en días nublados. Evita la exposición solar directa durante los 10-14 días posteriores para prevenir la aparición de manchas.\n• Aplica exclusivamente la crema recuperadora y calmante pautada por el médico en la consulta tantas veces al día como sientas la piel tirante o deshidratada.\n• Dependiendo del peeling, la piel puede descamarse entre el segundo y el quinto día. Nunca estires, rasgues ni arranques las pieles sueltas, ya que podrías generar cicatrices o manchas. Deja que se caigan de forma natural al lavarte el rostro de manera suave.\n• No realices ejercicio físico intenso, ni acudas a saunas, piscinas con cloro o baños turcos durante los primeros 3-4 días para evitar irritaciones extremas.\n• No utilices maquillaje durante las primeras 24-48 horas y pospone el uso de tus ácidos habituales o retinoides hasta que la piel esté completamente recuperada.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Fototipos muy altos o pieles recientemente bronceadas: Exige una valoración extrema o el uso de peelings específicos para evitar alteraciones pigmentarias.\n• Infecciones activas en la zona: Presencia de herpes labial activo, infecciones bacterianas, heridas abiertas o eccemas en el rostro el día de la sesión.\n• Uso reciente de retinoides orales: Haber tomado isotretinoína oral (tratamiento para el acné severo) durante los 6 meses previos.\n• Alergias conocidas: Hipersensibilidad documentada a alguno de los ácidos de la formulación.'
        }
      ],
      evidencia: [
        { titulo: "Chemical Peels in Aesthetic Dermatology", fuente: "Journal of Clinical and Aesthetic Dermatology", link: "#" }
      ]
    }
  },
  'microneedling': {
    nombre: 'Microneedling Médico',
    tituloDescripcion: '¿Qué es el Microneedling?',
    imagen: '/tratamientos/microneedling.jpeg',
    descripcionBreve: 'Inducción mecánica de colágeno para difuminar cicatrices, reducir poros y transformar la textura de tu piel.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Micropunción mecánica' },
      { titulo: 'Tiempo', valor: '45 min' },
      { titulo: 'Resultados', valor: 'Progresivos' },
      { titulo: 'Duración', valor: 'Larga duración' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético de inducción mecánica de colágeno y regeneración cutánea, diseñado para difuminar cicatrices de acné, reducir poros abiertos y mejorar globalmente la firmeza y la textura de la piel. El procedimiento se realiza mediante un dispositivo médico de micropunción de última generación provisto de cabezales con microagujas estériles ultrafinas.\n\nEste tratamiento actúa mediante un doble mecanismo de acción: por un lado, las microagujas realizan miles de microperforaciones controladas en la dermis, lo que activa los mecanismos naturales de cicatrización y autorreparación del organismo, estimulando de forma masiva la producción de nuevo colágeno tipo I y elastina. Por otro lado, aprovechamos la apertura de estos microcanales para realizar una terapia de drug delivery, aplicando de forma tópica cócteles médicos que penetran de forma directa y profunda, multiplicando su eficacia exponencialmente.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'El microneedling médico estimula un proceso biológico y gradual de reestructuración dérmica. Aunque la piel se muestra visiblemente más suave, tersa y luminosa a los pocos días de la primera sesión, los cambios estructurales profundos (como la atenuación de cicatrices o la mejora de la flacidez) se consolidan de forma progresiva.\n\nPara obtener un resultado óptimo, visible y duradero, el protocolo médico inicial suele requerir entre 3 y 5 sesiones. El número definitivo de sesiones, así como el intervalo de tiempo entre ellas, se determinará de forma personalizada en la consulta tras una valoración médica del estado basal de tu piel, tu capacidad de reparación cutánea y los objetivos terapéuticos buscados.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable y cómodo. Para garantizar la máxima seguridad anatómica y el confort del paciente, realizamos el tratamiento aplicando previamente una crema anestésica de alta potencia en la zona a tratar durante 20-30 minutos. Esto adormece la superficie cutánea, haciendo que la sesión sea una experiencia rápida, perfectamente tolerable y donde el paciente solo percibe una sutil vibración mecánica sobre la piel.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar tu piel adecuadamente y asegurar un procedimiento seguro y libre de irritaciones, te recomendamos seguir estas pautas previas:\n\n• Suspende el uso de cremas o cosméticos que contengan retinol, ácido glicólico, salicílico u otros exfoliantes químicos entre 3 y 5 días antes de tu cita.\n• No acudas a la sesión con la piel recientemente bronceada o que presente quemaduras solares.\n• Ven a la consulta preferiblemente con la zona a tratar (rostro, cuello o escote) completamente limpia y libre de maquillaje.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Al haberse generado miles de microcanales en la epidermis, el cuidado posterior en casa durante las primeras horas es estricto:\n\n• Primeras 24 horas: No te apliques maquillaje, correctores ni cosméticos convencionales. Lava la zona de forma extremadamente suave solo con agua tibia o con el limpiador específico que te paute el médico en la consulta.\n• Es completamente normal y esperable presentar un eritema (rojez) moderado y una sensación de calor o tirantez similar a una leve quemadura solar. Este proceso remite de forma natural en las primeras 24-48 horas, dando paso en ocasiones a una sutil descamación seca en los días posteriores.\n• No realices ejercicio físico de alta intensidad, ni acudas a saunas, piscinas, spas o baños turcos durante las primeras 48 horas para evitar que el sudor o el cloro irriten los microcanales abiertos.\n• Aplica protector solar de amplio espectro (SPF 50+) de forma obligatoria cada 2-3 horas y evita la exposición solar directa durante los 7 días posteriores para prevenir la hiperpigmentación postinflamatoria.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Infecciones cutáneas activas: Presencia de brotes de acné inflamatorio activo, herpes labial activo, eccemas, dermatitis o heridas abiertas en la zona a tratar el día de la sesión.\n• Uso reciente de retinoides orales: Haber realizado tratamiento con isotretinoína oral durante los 6 meses previos.\n• Cicatrización anómala: Pacientes con antecedentes demostrados de formación de cicatrices queloides o hipertróficas.\n• Tratamientos anticoagulantes activos o trastornos graves de la coagulación.'
        }
      ],
      evidencia: [
        { titulo: "Microneedling: Advances and widening horizons", fuente: "Indian Dermatology Online Journal", link: "#" }
      ]
    }
  },
 'higiene-facial-glow': {
    nombre: 'Higiene Facial Glow',
    tituloDescripcion: 'Aportar luz inmediata, limpiar impurezas superficiales y mantener el rostro fresco.',
    imagen: '/tratamientos/higiene-glow.jpg',
    descripcionBreve: 'Aporta luz inmediata, limpia impurezas superficiales y mantiene el rostro fresco.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Microdermoabrasión' },
      { titulo: 'Sesiones', valor: 'Mantenimiento mensual' },
      { titulo: 'Resultados', valor: 'Inmediatos' },
      { titulo: 'Recuperación', valor: 'Ninguna' }
    ],
    detalles: {
      descripcion: 'Indicado para: Pieles que presentan tono apagado que buscan un mantenimiento mensual para conservar la vitalidad y la frescura natural del rostro.',
      ventajas: [
        'Doble limpieza purificante',
        'Microdermoabrasión con punta de diamante',
        'Tónico equilibrante e hidratación profunda',
        'Mascarilla antioxidante',
        'Sérum concentrado y protección solar alta'
      ],
      faqs: [
        {
          pregunta: '¿Puedo reservar este tratamiento si no sé si es el adecuado para mi piel?',
          respuesta: 'Sí, totalmente. La elección final del protocolo depende del estado de tu piel el día de la cita. En la clínica evaluamos tu piel antes de comenzar para confirmarte si este es el tratamiento idóneo o si requiere otro enfoque.'
        },
        {
          pregunta: '¿Es dolorosa la microdermoabrasión con punta de diamante?',
          respuesta: 'No, es un proceso totalmente indoloro. Se siente como un suave masaje de succión que retira las células muertas sin agredir la piel.'
        },
        {
          pregunta: '¿Puedo hacérmelo antes de un evento?',
          respuesta: 'Sí, es un tratamiento ideal para realizar 24 a 48 horas antes de un evento, ya que deja la piel luminosa, suave y sin tiempo de recuperación.'
        }
      ],
      evidencia: []
    }
  },
  'limpieza-facial-renovadora': {
    nombre: 'Limpieza Facial Renovadora',
    tituloDescripcion: 'Restaurar los niveles de hidratación, eliminar células muertas, suavizar la textura de la piel y devolverle una sensación de calma y confort inmediato.',
    imagen: '/tratamientos/limpieza-renovadora.jpg',
    descripcionBreve: 'Restaura los niveles de hidratación, elimina células muertas y devuelve una sensación de calma y confort inmediato.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Punta de diamante + Enzimático' },
      { titulo: 'Sesiones', valor: 'Cada 4 a 6 semanas' },
      { titulo: 'Resultados', valor: 'Inmediatos' },
      { titulo: 'Recuperación', valor: 'Ninguna' }
    ],
    detalles: {
      descripcion: 'Indicado para: Pieles secas, deshidratadas o apagadas que necesitan renovar la textura cutánea, devolver el confort a la piel y recuperar un aspecto jugoso y descansado.',
      ventajas: [
        'Doble limpieza preparatoria',
        'Renovación dual: Punta de diamante + Peeling enzimático',
        'Tónico equilibrante',
        'Mascarilla descongestiva y desinflamante',
        'Mascarilla antioxidante',
        'Hidratación profunda y protección solar alta'
      ],
      faqs: [
        {
          pregunta: '¿En qué se diferencia de la Higiene Facial Glow?',
          respuesta: 'Mientras que la opción Glow es un mantenimiento express para aportar luminosidad inmediata, la Limpieza Renovadora es un protocolo más completo (75 min) que suma un peeling enzimático a la punta de diamante y doble mascarilla para tratar la deshidratación y devolver el confort a la piel.'
        },
        {
          pregunta: '¿Qué diferencia al peeling enzimático de un peeling químico tradicional?',
          respuesta: 'El peeling enzimático trabaja de forma suave disolviendo los enlaces de las células muertas en superficie, sin causar pelado ni irritación posterior.'
        },
        {
          pregunta: '¿Cada cuánto tiempo se recomienda realizarlo?',
          respuesta: 'Lo ideal es realizarlo cada 4 a 6 semanas para acompañar el ciclo de renovación celular natural y preservar la salud y la hidratación de la barrera cutánea.'
        }
      ],
      evidencia: []
    }
  },
  'higiene-facial-profunda-detox': {
    nombre: 'Higiene Facial Profunda Detox',
    tituloDescripcion: 'Limpiar el poro de impurezas, equilibrar la producción de grasa y purificar la piel mediante extracción y fototerapia.',
    imagen: '/tratamientos/higiene-detox.jpg',
    descripcionBreve: 'Limpia el poro, equilibra la producción de grasa y purifica la piel mediante extracción y fototerapia.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Extracción, Peeling y LED' },
      { titulo: 'Sesiones', valor: 'Según valoración' },
      { titulo: 'Resultados', valor: 'Piel purificada' },
      { titulo: 'Recuperación', valor: 'Ligera rojez (horas)' }
    ],
    detalles: {
      descripcion: 'Indicado para: Pieles mixtas, grasas o con tendencia a la acumulación de puntos negros, comedones, quistes de milium, poros obstruidos o textura irregular que requieren una limpieza minuciosa y acción bactericida.',
      ventajas: [
        'Doble limpieza purificante',
        'Preparación de la piel con vaporizador',
        'Microdermoabrasión con punta de diamante',
        'Peeling químico adaptado (enzimático o salicílico)',
        'Extracción minuciosa de comedones, impurezas y quistes de milium',
        'Tónico equilibrante',
        'Mascarilla descongestiva/desinflamante',
        'Mascarilla antioxidante',
        'Hidratación profunda',
        'Fototerapia LED (Terapia de luz reparadora/bactericida)',
        'Protección solar alta'
      ],
      faqs: [
        {
          pregunta: '¿Saldré con la piel roja tras la extracción?',
          respuesta: 'Aplicamos mascarillas descongestivas y fototerapia LED al final de la sesión para calmar la piel. Si aparece alguna ligera rojez por la extracción manual, suele remitir en pocas horas.'
        },
        {
          pregunta: '¿Para qué sirve la Fototerapia LED al final de la sesión?',
          respuesta: 'Emitimos luz específica para acelerar la recuperación de la piel tras la extracción y ejercer un efecto purificante y bactericida que ayuda a prevenir nuevos brotes.'
        },
        {
          pregunta: '¿Qué cuidados debo seguir las primeras 24 horas?',
          respuesta: 'Evita la exposición solar directa, el uso de retinoides o ácidos en casa, saunas, ejercicio intenso y maquillaje pesado durante el primer día.'
        }
      ],
      evidencia: []
    }
  },
  'protocolo-venencia-glow': {
    nombre: 'Protocolo Venencia Glow & Regeneración',
    tituloDescripcion: 'Inducir la renovación celular, estimular la síntesis de colágeno y rejuvenecer de forma integral el rostro, con foco en el contorno de ojos y labios.',
    imagen: '/tratamientos/venencia-glow.jpg',
    descripcionBreve: 'Rejuvenecimiento integral del rostro, con foco en el contorno de ojos y labios, mediante infusión de vitaminas y micropunción.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Dermapen, Peeling y LED' },
      { titulo: 'Sesiones', valor: 'Pauta acumulativa' },
      { titulo: 'Resultados', valor: 'Efecto buena cara inmediato' },
      { titulo: 'Recuperación', valor: 'Ligero rubor (24-48h)' }
    ],
    detalles: {
      descripcion: 'Indicado para: Pieles maduras o con primeros signos de envejecimiento que buscan un tratamiento completo de firmeza, nutrición vitamínica y cuidado de zonas delicadas en una sola sesión.',
      ventajas: [
        'Higiene y Renovación: Doble limpieza, vaporizador, microdermoabrasión, peeling médico adaptado (enzimático/salicílico) y extracciones.',
        'Tratamiento Específico Periocular y Labial: Exfoliación e hidratación labial + Parches de relleno e hidratación para líneas de expresión en el contorno de ojos.',
        'Revitalización Celular: Infusión de complejo vitamínico mediante Dermapen (microneedling).',
        'Calma y Reparación: Mascarilla descongestiva, mascarilla antioxidante y fototerapia LED.',
        'Finalización: Hidratación profunda y protección solar alta.'
      ],
      faqs: [
        {
          pregunta: '¿Tiene tiempo de recuperación el uso de Dermapen?',
          respuesta: 'Al tratarse de una infusión de vitaminas con micro agujas finas, puede aparecer un ligero rubor que remite en 24-48 horas. La fototerapia LED y las mascarillas al final de la sesión reducen notablemente la rojez.'
        },
        {
          pregunta: '¿Con cuánta antelación debo agendarlo si tengo un evento?',
          respuesta: 'Recomendamos realizar este protocolo entre 5 y 7 días antes del evento para permitir que la piel absorba completamente la nutrición vitamínica y luzca su máximo punto de firmeza y luminosidad.'
        },
        {
          pregunta: '¿Cuándo comenzaré a notar los resultados en la calidad de la piel?',
          respuesta: 'El efecto "buena cara", la hidratación profunda y la luminosidad son inmediatos tras la sesión. En cuanto a la firmeza, una sola sesión aporta un primer estímulo de colágeno e infusión de activos, pero para obtener cambios estructurales en la densidad de la piel se requiere un protocolo acumulativo de varias sesiones pautadas en consulta.'
        }
      ],
      evidencia: []
    }
  },
  'glace-hidrodermoabrasion': {
      nombre: 'Glacē: Hidrodermoabrasión Médica y Glass Skin',
      tituloDescripcion: 'Limpia, exfolia, desintoxica e hidrata en profundidad',
      imagen: '/tratamientos/tratamiento-glace.jpg',
      descripcionBreve: 'Consigue una piel luminosa, fresca y renovada en una sola sesión con la tecnología Glacē™ de Candela Medical.',
      antesDespues: AD,
      parametros: [
        { titulo: 'Técnica', valor: 'Hidrodermoabrasión Glacē™' },
        { titulo: 'Tiempo', valor: '60 min' },
        { titulo: 'Resultados', valor: 'Inmediatos (Flash)' },
        { titulo: 'Recuperación', valor: 'Cero inactividad' }
      ],
      detalles: {
        descripcion: 'En Clínica Venencia incorporamos la tecnología Glacē™ de Candela Medical, el estándar de excelencia en hidrodermoabrasión avanzada. Este protocolo médico-estético combina en un solo tratamiento la microdermoabrasión de precisión con diamantes, la infusión de activos de alta eficacia, el masaje desintoxicante (doble cupping) y la terapia LED con mascarilla hidratante.\n\nEl resultado es el efecto "Glass Skin": una piel visiblemente más suave, uniforme, profundamente limpia y con una luminosidad natural sin necesidad de reposo ni tiempos de inactividad.',
        ventajas: [],
        faqs: [
          {
            pregunta: '¿Cómo es el tratamiento Glacē?',
            respuesta: 'El tratamiento Glacē™ actúa en 4 etapas:\n1. Exfoliación con diamantes de uso individual (DiamondGlacē): Adaptamos el nivel de dermoabrasión para retirar células muertas.\n2. Hidro-extracción e Infusión (GlacēVac™): Limpiamos el poro en profundidad mientras infundimos serums ricos en antioxidantes.\n3. Drenaje Linfático y Esculpido (GlacēMassage™): Masaje de doble ventosa para estimular el drenaje y definir contornos.\n4. Fototerapia LED & Mascarilla: Luz LED y nutrición intensiva para calmar y regenerar.'
          },
          {
            pregunta: '¿Para qué tipos de piel está indicado?',
            respuesta: 'Es apto para todo tipo de pieles, incluyendo las más sensibles o reactivas. Se personaliza al 100% gracias a puntas de diamante de diferente abrasión y succión regulable.'
          },
          {
            pregunta: '¿Cuánto dura la sesión y qué se siente?',
            respuesta: 'Dura unos 60 minutos. Es indolora y agradable; sentirás un suave efecto de succión y frescor constante.'
          },
          {
            pregunta: '¿Requiere tiempo de baja o cuidados?',
            respuesta: 'No. Tiene "zero downtime" (cero tiempo de inactividad). Puedes maquillarte y seguir con tu vida inmediatamente. Ideal previo a un evento ("efecto flash").'
          },
          {
            pregunta: '¿Cuántas sesiones se recomiendan?',
            respuesta: 'Efectos evidentes desde la primera sesión. Como mantenimiento antienvejecimiento, recomendamos realizarlo cada 2 a 4 semanas.'
          },
          {
            pregunta: '¿Se puede combinar con otros tratamientos?',
            respuesta: 'Sí, es la preparación ideal antes de neuromoduladores, ácido hialurónico, hilos o láser, garantizando un tejido limpio y permeable.'
          }
        ]
      }
    },
    'protocolo-proxn': {
      nombre: 'Protocolo PROXN®: Terapia Antioxidante',
      tituloDescripcion: 'Terapia Antioxidante y Antiinflamatoria Avanzada',
      imagen: '/tratamientos/tratamiento-proxn.jpg',
      descripcionBreve: 'Restaura, calma y fortalece la barrera cutánea en pieles sensibles, con acné o patología inflamatoria.',
      antesDespues: AD,
      parametros: [
        { titulo: 'Técnica', valor: 'Terapia con Xanthohumol' },
        { titulo: 'Sesiones', valor: '3 a 6 (según pauta)' },
        { titulo: 'Resultados', valor: 'Desde la 1ª sesión' },
        { titulo: 'Descamación', valor: 'Ninguna' }
      ],
      detalles: {
        descripcion: 'El Protocolo PROXN es un tratamiento médico-estético formulado a base de Xanthohumol, un complejo antioxidante de última generación hasta 30 veces más potente que la Vitamina C.\n\nEste protocolo está especialmente diseñado para tratar y calmar las pieles más vulnerables, reactivas o comprometidas: pieles con acné (activo o inflamatorio), rosácea, dermatitis, hiperpigmentación postinflamatoria o barrera cutánea dañada. Combate el estrés oxidativo, frena la inflamación crónica y devuelve la salud a tu piel.',
        ventajas: [],
        faqs: [
          {
            pregunta: '¿En qué consiste el tratamiento PROXN® en cabina?',
            respuesta: 'Es una terapia facial profesional que aplica fórmulas de alta concentración de Xanthohumol combinadas con complejos calmantes. Incluye limpieza, exfoliación enzimática suave, infusión de activos y mascarilla reparadora.'
          },
          {
            pregunta: '¿Cómo actúa el Xanthohumol en tu piel?',
            respuesta: 'Actúa en tres niveles:\n1. Acción Antiinflamatoria: Inhibe citoquinas proinflamatorias, reduciendo enrojecimiento e hinchazón.\n2. Máxima Protección: Neutraliza radicales libres (30x más potente que Vit. C).\n3. Reparación de Barrera: Fortalece el manto hidrolipídico.'
          },
          {
            pregunta: '¿Para qué pieles está indicado?',
            respuesta: 'Ideal para:\n- Acné: Regula sebo y acelera cicatrización.\n- Rosácea/Cuperosis: Reduce reactividad y rojeces.\n- Pieles sensibles/atópicas: Repara barrera y reduce ardor.\n- Prevención Inflammaging: Combate envejecimiento microcelular.\n- Post-procedimiento: Acelera recuperación tras láser o peelings.'
          },
          {
            pregunta: '¿Cuántas sesiones se necesitan?',
            respuesta: 'Mejoría desde la primera sesión. Para acné o rosácea, pautamos de 3 a 6 sesiones (cada 3-4 semanas) para lograr estabilización duradera.'
          },
          {
            pregunta: '¿Tiene algún efecto secundario o descamación?',
            respuesta: 'No. PROXN® no es un peeling químico agresivo. No causa pelado, ni fotosensibilidad, permitiendo su uso todo el año.'
          },
          {
            pregunta: '¿Puedo combinar PROXN® con mis tratamientos habituales?',
            respuesta: 'Sí, es un excelente complemento pre/post procedimientos médicos (láser, infiltraciones) para preparar la piel o acelerar su recuperación.'
          }
        ]
      }
    },
    

  // --- 2. TRATAMIENTOS CORPORALES ---
  'mesoterapia-lipolitica': {
    nombre: 'Mesoterapia Lipolítica Corporal',
    tituloDescripcion: '¿Qué es la mesoterapia lipolítica corporal?',
    imagen: '/tratamientos/mesoterapia-lipolítica-corporal.jpg',
    descripcionBreve: 'Reduce la grasa localizada, combate la celulitis y reafirma tu figura con nuestro cóctel médico personalizado.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Microinyecciones localizadas' },
      { titulo: 'Tiempo', valor: '30-45 min' },
      { titulo: 'Resultados', valor: 'Progresivos (6-10 sesiones)' },
      { titulo: 'Duración', valor: 'Permanente (con hábitos)' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético mínimamente invasivo diseñado específicamente para reducir la grasa localizada, combatir la celulitis y mejorar la firmeza de la piel.\n\nEl tratamiento consiste en la aplicación de microinyecciones directas en el tejido adiposo de un cóctel personalizado de sustancias médicas. Estos activos combinan agentes lipolíticos (que rompen y disuelven las células grasas), sustancias drenantes (que activan la microcirculación y eliminan la retención de líquidos) y componentes tensores. Al actuar directamente sobre el foco del problema, conseguimos disminuir el volumen local, alisar la "piel de naranja" y reestructurar el tejido conectivo de forma progresiva.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La mesoterapia lipolítica es un tratamiento progresivo y altamente dependiente de la constancia. Aunque la mejora en la inflamación interna y la textura de la piel se empieza a notar desde las primeras citas, la reducción de volumen graso requiere que el organismo metabolice y elimine la grasa liberada.\n\nPara obtener un resultado óptimo, visible y satisfactorio, se requiere un protocolo inicial de entre 6-10 sesiones. El número definitivo de sesiones, así como el intervalo de tiempo entre ellas (que suele ser de 1 o 2 semanas), se pautará de forma personalizada en la consulta tras una valoración médica del tipo de grasa, el grado de celulitis y las indicaciones específicas del laboratorio del producto seleccionado para tu caso.'
        },
        {
          pregunta: '¿Los resultados obtenidos son definitivos o de qué depende su duración?',
          respuesta: 'La reducción de la grasa localizada alcanzada con el tratamiento es permanente, ya que las células grasas destruidas y metabolizadas no se vuelven a regenerar. Sin embargo, la durabilidad de este resultado en el tiempo depende estrictamente de los hábitos del paciente.\n\nPara mantener el contorno corporal estilizado y evitar que las células grasas remanentes de la zona aumenten de tamaño, es fundamental acompañar el procedimiento de un estilo de vida saludable que incluya una alimentación equilibrada, una correcta hidratación y la práctica regular de ejercicio físico. La mesoterapia es una herramienta médica excepcional para eliminar la grasa rebelde, pero el mantenimiento del éxito a largo plazo es un trabajo en equipo entre el médico y el paciente.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable y cómodo. Las infiltraciones se realizan directamente en el tejido graso —una zona con menor densidad de terminaciones nerviosas sensitivas que la piel superficial— utilizando agujas finas.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar tu cuerpo adecuadamente y minimizar la aparición de pequeñas rojeces o hematomas en las zonas de punción, te recomendamos:\n\n• Evita medicamentos que afecten a la coagulación: No consumas antiinflamatorios (como el ibuprofeno o la aspirina) ni suplementos de Omega 3 durante los 3-5 días previos a tu cita, salvo indicación médica.\n• Bebe abundante agua (entre 1,5 y 2 litros) el día de la sesión para ayudar a tu sistema renal y linfático a prepararse para la eliminación de toxinas.\n• Acude a la clínica con prendas holgadas que no presionen la zona corporal que se va a tratar.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'El proceso de eliminación de la grasa disuelta depende directamente de tus hábitos en los días posteriores a la sesión:\n\n• Primeras 24 horas: No frotes, presiones ni masajees enérgicamente la zona tratada. Es completamente normal presentar una ligera inflamación, sensación de agujetas locales, calor o pequeños hematomas que desaparecen de manera natural.\n• Potencia el drenaje (Fundamental): Bebe al menos 2 litros de agua diarios durante los días siguientes. Es altamente recomendable combinar el tratamiento con masajes de drenaje linfático manual o presoterapia a partir de las 48 horas para acelerar la eliminación de la grasa liberada.\n• No acudas a saunas, spas, baños turcos ni te expongas al sol de forma directa durante los primeros 2-3 días.\n• Mantén una alimentación equilibrada, baja en grasas saturadas y azúcares, y evita el consumo de alcohol principalmente durante las 48 horas posteriores, ya que el hígado debe centrarse en metabolizar la grasa liberada.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Infecciones activas en la piel: Presencia de infecciones bacterianas, heridas abiertas, eccemas o dermatitis en la zona corporal a tratar el día de la sesión.\n• Patologías hepáticas o renales graves: Debido a que la grasa liberada debe ser metabolizada por el hígado y eliminada por los riñones.\n• Alteraciones graves de la coagulación o tratamientos anticoagulantes activos.\n• Alergias conocidas: Hipersensibilidad documentada a alguno de los principios activos del cóctel lipolítico.'
        }
      ],
      evidencia: [
        { titulo: "Efficacy and Safety of Injection Lipolysis", fuente: "Journal of Clinical and Aesthetic Dermatology", link: "#" }
      ]
    }
  },
  'esclerosis-vascular': {
    nombre: 'Esclerosis Vascular',
    tituloDescripcion: '¿Qué es el tratamiento de Esclerosis Vascular?',
    imagen: '/tratamientos/esclerosis-vascular.jpeg',
    descripcionBreve: 'Eliminación segura y eficaz de arañas vasculares y pequeñas varices para recuperar la salud y estética de tus piernas.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Microinyecciones / Microespuma' },
      { titulo: 'Tiempo', valor: '30-45 min' },
      { titulo: 'Resultados', valor: 'Progresivos (3-6 sesiones)' },
      { titulo: 'Duración', valor: 'Larga duración' }
    ],
    detalles: {
      descripcion: 'Es un procedimiento médico diseñado específicamente para eliminar de forma segura y eficaz las arañas vasculares (telangiectasias) y las pequeñas venas varicosas que aparecen principalmente en las piernas. Estas lesiones no solo suponen un problema estético, sino que a menudo son el reflejo de una alteración en el retorno venoso que genera pesadez, cansancio o reactividad local.\n\nEl procedimiento consiste en la infiltración microfocalizada de un fármaco líquido o en forma de microespuma directamente en el interior de la vena afectada mediante agujas de calibre médico ultrafino. Este principio activo produce una irritación controlada de las paredes internas del vaso, provocando su cierre inmediato y su posterior cicatrización. Con el paso de las semanas, el propio organismo reabsorbe de forma natural la vena colapsada y desvía la circulación hacia vasos sanos, haciendo desaparecer la imperfección y aliviando la sintomatología de la zona.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La esclerosis vascular es un proceso progresivo de reabsorción biológica. Aunque muchas venitas se difuminan o desaparecen desde la primera sesión, la eliminación completa de una red vascular requiere tiempo y constancia.\n\nPara lograr un resultado óptimo, limpio y satisfactorio, se requiere habitualmente un protocolo inicial de entre 3 y 6 sesiones por zona. El número definitivo de sesiones, así como el intervalo de tiempo entre ellas, dependerá estrictamente del calibre de los vasos, de la extensión de la zona a tratar y de la respuesta inflamatoria de cada paciente. Tras una valoración médica exhaustiva en la consulta, se diseñará tu plan de tratamiento personalizado.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento tolerable. Al realizarse las infiltraciones con agujas de calibre fino, la molestia es mínima. La sensación se limita a un leve pinchazo superficial seguido, en ocasiones, de un ligero picor o escozor local transitorio que dura apenas unos minutos y que coincide con la acción del esclerosante dentro del vaso sanguíneo, permitiéndote retomar tus actividades diarias inmediatamente al salir de la clínica.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar tus piernas adecuadamente y garantizar un procedimiento seguro, te recomendamos seguir estas pautas:\n\n• Evita medicamentos que afecten a la coagulación: No consumas antiinflamatorios (como el ibuprofeno o la aspirina) durante los 3-5 días previos a tu cita, a menos que sea por indicación médica estricta.\n• Ropa holgada: Ven a la clínica con pantalones o faldas anchas y calzado cómodo para facilitar la colocación de las medias de compresión posteriores.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'El éxito de la esclerosis vascular depende en gran medida del cumplimiento de los cuidados en casa durante los días posteriores:\n\n• Uso de compresión (Fundamental): Deberás utilizar medias de compresión elástica médica inmediatamente después de la sesión y durante los días que te paute el médico. La compresión es clave para mantener la vena cerrada y optimizar el proceso de esclerosis.\n• Es muy recomendable caminar de 30 a 45 minutos diarios tras el tratamiento para activar la circulación profunda. Evita permanecer de pie o sentada en la misma posición durante periodos muy prolongados.\n• Es completamente normal que la zona presente rojez, una ligera inflamación local (similar a una picadura) o pequeños hematomas en los puntos de inyección. También es habitual que las venitas tratadas se tornen de un color más oscuro o violáceo antes de desaparecer; esto indica que el proceso de esclerosis ha comenzado.\n• No te des baños con agua muy caliente, ni acudas a saunas, spas o baños turcos durante la primera semana, ya que el calor produce vasodilatación y contrarresta el efecto del tratamiento.\n• No expongas las piernas al sol de forma directa mientras existan hematomas o marcas de las punciones para evitar la aparición de hiperpigmentación postinflamatoria (manchas oscuras).'
        },
        {
          pregunta: '¿De qué depende la duración de los resultados?',
          respuesta: 'Las venas que se han esclerosado y reabsorbido con éxito desaparecen de forma definitiva. Sin embargo, la insuficiencia venosa crónica es una condición evolutiva y de carácter genético.\n\nLa aparición de nuevas arañas vasculares en otras zonas con el paso del tiempo dependerá estrictamente de los factores de riesgo y los hábitos del paciente. Para prolongar los resultados al máximo, es fundamental mantener un estilo de vida saludable: evitar el sedentarismo, realizar ejercicio físico de forma regular, mantener un peso adecuado, evitar el uso de ropa excesivamente ajustada y no exponer las piernas a fuentes de calor intensas y directas. Se recomiendan revisiones anuales para tratar precozmente los nuevos vasos que puedan desarrollarse.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Insuficiencia venosa profunda grave: Pacientes que presenten patología de los ejes venosos mayores no tratada que requiera cirugía previa.\n• Antecedentes de Trombosis Venosa Profunda (TVP) o tromboembolismo pulmonar.\n• Infecciones activas: Presencia de infecciones cutáneas, úlceras abiertas, eccemas graves o heridas en la zona de las piernas el día de la sesión.\n• Inmovilización prolongada: Pacientes encamados o que vayan a realizar un viaje en avión de larga duración de forma inmediata.\n• Alergias conocidas: Hipersensibilidad documentada al fármaco esclerosante (polidocanol).'
        }
      ],
      evidencia: [
        { titulo: "Sclerotherapy in the treatment of varicose and spider veins", fuente: "Journal of Vascular Surgery", link: "#" }
      ]
    }
  },
  'inductores-corporales': { 
    nombre: 'Inductores de Colágeno Corporal',
    tituloDescripcion: '¿Qué es el tratamiento con inductores de colágeno corporal?',
    imagen: '/tratamientos/inductores-colageno.jpg',
    descripcionBreve: 'Combate la flacidez y recupera la densidad de la piel de tu cuerpo mediante una estimulación celular profunda y duradera.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Cánula fina' },
      { titulo: 'Tiempo', valor: '45-60 min' },
      { titulo: 'Resultados', valor: 'A partir de 4-6 semanas' },
      { titulo: 'Duración', valor: '12-24 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético avanzado de bioremodelación y medicina regenerativa, diseñado específicamente para combatir la flacidez, la pérdida de densidad cutánea y la laxitud en diferentes zonas del cuerpo.\n\nLas micropartículas del compuesto actúan como un potente estímulo mecánico y químico sobre los fibroblastos, obligándolos a sintetizar una gran cantidad de colágeno nuevo (principalmente tipo I) y elastina. El resultado es un efecto de tensado biológico, un aumento del grosor de la dermis y una piel visiblemente más firme, tersa y rejuvenecida.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿En qué zonas corporales se puede realizar este tratamiento?',
          respuesta: 'Los inductores de colágeno son extraordinariamente versátiles y están diseñados para combatir la flacidez y la pérdida de firmeza en áreas corporales críticas donde la piel tiende a descolgarse con el paso del tiempo o tras cambios bruscos de peso. Las principales zonas de aplicación clínica son:\n\n• Cara interna de los brazos: Ideal para compactar la piel de la zona del tríceps.\n• Abdomen: Muy demandado para reestructurar la piel flácida y las arrugas periumbilicales, especialmente común en el postparto o tras pérdidas notables de volumen.\n• Glúteos: Permite elevar el contorno, mejorar la firmeza cutánea y suavizar de forma drástica los hoyuelos de la celulitis flácida.\n• Cara interna de los muslos: Trata una de las zonas más complejas y propensas a la laxitud, devolviendo la tensión a la piel por encima de las rodillas.\n• Zona peri-rotuliana (rodillas): Corrige el descolgamiento y el aspecto de "piel arrugada" que se forma justo por encima de la rodilla debido a la pérdida de soporte elástico y la gravedad.\n• Escote y cuello: Redensifica la piel fina del pecho dañada por la exposición solar crónica, difuminando las arrugas en forma de abanico.'
        },
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'Al tratarse de una terapia basada en una respuesta biológica del propio organismo, los resultados son progresivos y acumulativos. La síntesis de la nueva red de soporte dérmico comienza a consolidarse a partir de la cuarta o sexta semana, alcanzando su punto máximo de tensado y firmeza entre el tercer y el cuarto mes posterior a la aplicación.\n\nDependiendo de la zona corporal a tratar, del grado de flacidez basal y de la capacidad de regeneración celular de cada paciente, el protocolo médico inicial suele requerir entre 1 y 3 sesiones, espaciadas entre 4 y 8 semanas. Una vez alcanzado el resultado óptimo, los beneficios estructurales son muy duraderos, manteniéndose estables entre 12 y 24 meses según las características individuales del paciente.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable y cómodo. Para garantizar la máxima seguridad anatómica y el confort del paciente, realizamos el tratamiento utilizando una cánula fina de punta roma. La cánula avanza suavemente por los tejidos corporales sin cortar los vasos sanguíneos, lo que reduce las molestias y el riesgo de hematomas. Además, el producto se diluye previamente en la consulta con una pequeña cantidad de lidocaína (anestésico local).'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar la zona corporal adecuadamente y minimizar el riesgo de que aparezcan pequeños hematomas, te recomendamos seguir estas pautas:\n\n• Evita medicamentos anticoagulantes: No consumas antiinflamatorios (como el ibuprofeno o la aspirina) ni suplementos de Omega 3 durante los 3-5 días anteriores a tu cita, a menos que sea por indicación médica estricta.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: '• Protocolo de masajes (Si se utiliza Ácido Poli-L-Láctico): Si tu tratamiento se realiza con este compuesto, deberás realizar masajes firmes en la zona tratada durante 5 minutos, 5 veces al día, durante los primeros 5 días. Esto garantiza una distribución de las micropartículas en el tejido.\n• Utiliza prendas suaves y holgadas que no ejerzan una fricción excesiva sobre la zona tratada durante las primeras 24 horas.\n• Pospone el ejercicio físico de alta intensidad, las saunas, piscinas, spas o baños calientes durante las primeras 48 horas para prevenir la inflamación del tejido.\n• Evita la exposición solar directa sobre la zona tratada mientras persista cualquier marca o pequeño hematoma para prevenir manchas en la piel.'
        },
        {
          pregunta: '¿De qué depende la duración de los resultados?',
          respuesta: 'Aunque el estímulo de colágeno generado es de larga duración, la estabilidad del resultado en el tiempo está estrechamente relacionada con los hábitos y el estilo de vida del paciente.\n\nPara prolongar el efecto de firmeza y evitar la degradación prematura de las nuevas fibras estructurales, es fundamental mantener una alimentación equilibrada y proteica, una correcta hidratación diaria, evitar el consumo de tabaco (que destruye el colágeno) y realizar ejercicios de fuerza o tonificación muscular que den soporte al tejido cutáneo. Al tratarse de un proceso de envejecimiento cronológico natural, se recomiendan sesiones de mantenimiento anuales para preservar la turgencia lograda.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Presencia de infecciones bacterianas, heridas abiertas, brotes de eccema, psoriasis o dermatitis en la zona corporal a tratar el día de la sesión.\n• Enfermedades autoinmunes graves, sistémicas o alteraciones severas del tejido conectivo que no estén debidamente controladas.\n• Está contraindicado infiltrar inductores en zonas corporales donde existan materiales no reabsorbibles antiguos (como biopolímeros o siliconas).\n• Hipersensibilidad documentada a los componentes del inductor seleccionado o a la lidocaína.'
        }
      ],
      evidencia: [
        { titulo: "Collagen Stimulators for Body Contouring and Skin Laxity", fuente: "Aesthetic Surgery Journal", link: "#" }
      ]
    }
  },
  'aumento-gluteos': {
    nombre: 'Aumento de glúteos con Ácido Hialurónico',
    tituloDescripcion: '¿Qué es la remodelación y aumento de glúteos con ácido hialurónico?',
    imagen: '/tratamientos/aumento-gluteos.jpg', // Cambia esto por la variable de la foto si ya la tienes
    descripcionBreve: 'Tratamiento médico-estético corporal diseñado para proyectar, elevar, dar volumen y corregir imperfecciones como los hip dips de forma inmediata y sin cirugía.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Infiltración con cánula de punta roma' },
      { titulo: 'Tiempo', valor: '45 - 60 min' },
      { titulo: 'Resultados', valor: 'Inmediatos y naturales' },
      { titulo: 'Duración', valor: '12 a 24 meses' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético y mínimamente invasivo diseñado para proyectar, elevar, dar volumen y redefinir la silueta de los glúteos sin necesidad de pasar por un quirófano ni someterse a largos periodos de baja. Consiste en la infiltración de un ácido hialurónico de alta densidad y máxima pureza, desarrollado específicamente para el remodelado corporal.\n\nEs el tratamiento idóneo para pacientes que desean restaurar el volumen perdido por la edad o la pérdida de peso, proyectar el polo superior del glúteo, redondear los flancos corrigiendo las depresiones laterales (conocidas como hip dips) y mejorar visiblemente la tersura de la piel, suavizando las imperfecciones de la celulitis. Todo ello se consigue de forma inmediata, aportando una consistencia y un aspecto absolutamente naturales al tacto.',
      ventajas: [], // <-- ARREGLADO: Vacío para que no se muestre nada
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'Los resultados de la remodelación de glúteos con ácido hialurónico son visibles e inmediatos desde el mismo momento en que finaliza la sesión.\n\nAunque el cambio es inmediato, para alcanzar el volumen óptimo y un diseño perfectamente consolidado, el protocolo médico puede estructurarse en 1 o 2 sesiones, espaciadas entre 4 y 6 semanas. Dividir el tratamiento permite que el tejido se adapte cómodamente al producto y ayuda al médico a realizar sutiles retoques de simetría fina en la segunda cita. Al ser un material reabsorbible de alta resistencia, la duración del resultado oscila entre los 12 y 24 meses, dependiendo de las características individuales del paciente.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable. Para garantizar la máxima seguridad anatómica y el confort del paciente, realizamos el tratamiento utilizando una cánula fina de punta roma. La cánula avanza suavemente por los tejidos corporales, lo que reduce las molestias y el riesgo de hematomas.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para asegurar un procedimiento seguro y minimizar la aparición de hematomas en el área glútea, te recomendamos seguir estas pautas:\n\n• Evita medicamentos anticoagulantes: No consumas antiinflamatorios (como el ibuprofeno o la aspirina) ni suplementos de Omega 3 durante los 5-7 días previos a tu cita, salvo indicación médica expresa.\n• Higiene de la zona: No realices depilación agresiva (cera o láser) en la zona de los glúteos las 48 horas previas para evitar microlesiones en la epidermis.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Al tratarse de la infiltración de un volumen significativo en una zona de apoyo, los cuidados post-tratamiento durante las primeras semanas son muy específicos:\n\n• Primeras 48-72 horas: Intenta evitar dormir boca arriba (hazlo de lado o boca abajo) y reduce al mínimo el tiempo que pasas sentada directamente sobre superficies duras.\n• Evita el calor y el sudor: No realices ejercicio físico de alta intensidad (especialmente entrenamientos de pierna o glúteo con peso), ni acudas a saunas, spas, piscinas o playas durante los primeros 7-10 días para garantizar la correcta fijación del producto y evitar infecciones en los puntos de entrada.\n• Higiene local: Mantén los pequeños puntos de entrada de la cánula limpios y secos. Puedes ducharte con normalidad al día siguiente con agua tibia y jabón neutro, evitando frotar la zona de forma enérgica.\n• Uso de prendas de soporte: Se recomienda utilizar una prenda de compresión suave o mallas deportivas cómodas durante la primera semana para ayudar a estabilizar el gel en su posición anatómica perfecta.'
        },
        {
          pregunta: '¿De qué depende la duración de los resultados?',
          respuesta: 'Aunque el ácido hialurónico corporal está diseñado con una reticulación de alta resistencia para ralentizar su degradación, la duración del resultado depende de factores biológicos y de los hábitos del paciente.\n\nEl metabolismo basal de cada persona degrada el gel a un ritmo diferente, pero la práctica de ejercicio de fuerza extrema en la zona glútea o someterse a fluctuaciones drásticas de peso pueden acelerar la reabsorción del producto. Para prolongar los resultados al máximo, se aconseja mantener un peso estable, una hidratación excelente y realizar sesiones de mantenimiento anuales con menor cantidad de viales para conservar la proyección inicial de forma indefinida.'
        },
        {
          pregunta: '¿Es un tratamiento reversible?',
          respuesta: 'Sí, esta es una de las mayores ventajas de este procedimiento. Al tratarse de un implante inyectable de ácido hialurónico puro, es un tratamiento 100% reversible. Si por cualquier motivo el paciente desea modificar el resultado, corregir una asimetría o retirar el volumen, disponemos en la consulta de la hialuronidasa, una enzima médica inyectable capaz de disolver y eliminar el gel de forma segura e inmediata en cuestión de horas.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Infecciones activas en la zona: Presencia de infecciones bacterianas, foliculitis activa en los glúteos, eccemas o heridas abiertas el día de la sesión.\n• Antecedentes de rellenos permanentes: Está estrictamente contraindicado infiltrar este producto en glúteos donde existan materiales no reabsorbibles previos (como siliconas líquidas, poliacrilamidas o biopolímeros).\n• Enfermedades autoinmunes graves o sistémicas que puedan alterar la respuesta inmunitaria frente al implante.\n• Alergias conocidas: Hipersensibilidad documentada al ácido hialurónico o a la lidocaína.'
        }
      ], // <-- AQUÍ TERMINAN TUS FAQS
      evidencia: [
        { 
          titulo: "Effectiveness and Safety of Hyaluronic Acid for Gluteal Augmentation", 
          fuente: "Aesthetic Plastic Surgery (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/37407710/" 
        },
        { 
          titulo: "Assessment of HA Filler in Gluteal Contouring: A 1-Year Prospective Study", 
          fuente: "PubMed Central (PMC)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/41423732/" 
        }
      ]
    }
  }, // <-- Y aquí termina el tratamiento de aumento de glúteos
  'maderoterapia': {
    nombre: 'Maderoterapia Corporal',
    tituloDescripcion: '¿Qué es el tratamiento de Maderoterapia Corporal?',
    imagen: '/tratamientos/maderoterapia.jpeg', // Se enlazará a tu foto cuando la subas a assets
    descripcionBreve: 'Remodela tu silueta, elimina la retención de líquidos y combate la celulitis mediante un masaje terapéutico intenso con utensilios de madera noble.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Masaje Mecánico Profundo' },
      { titulo: 'Tiempo', valor: '45 - 60 min' },
      { titulo: 'Resultados', valor: 'Inmediatos y progresivos' },
      { titulo: 'Sesiones', valor: '6 a 10 sesiones' }
    ],
    detalles: {
      descripcion: 'La Maderoterapia es un tratamiento corporal no invasivo de origen natural que utiliza utensilios anatómicos de madera noble diseñados específicamente para realizar un masaje terapéutico y modelador de alta intensidad.\n\nA nivel médico y fisiológico, este procedimiento actúa mediante un estímulo mecánico profundo sobre el tejido celular subcutáneo. Su diseño permite ejercer una presión controlada que reactiva la circulación sanguínea, estimula el sistema linfático para acelerar la eliminación de toxinas y líquidos retenidos, y ayuda a fragmentar los acúmulos de grasa localizada y los nódulos fibrosos causantes de la celulitis (piel de naranja). Es el tratamiento idóneo para remodelar la silueta, tonificar los tejidos y aliviar la sensación de piernas cansadas o congestionadas.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuándo se aprecian los resultados?',
          respuesta: 'El protocolo estándar para lograr una remodelación y un cambio estructural visible consta de un ciclo de entre 6 y 10 sesiones, las cuales se programan de forma ideal 1 o 2 veces por semana.\n\nLos resultados se aprecian en dos vertientes cronológicas:\n• Efecto Drenante Inmediato: Desde la primera sesión, el paciente experimenta una ligereza absoluta y una reducción del volumen debido a la evacuación de líquidos retenidos y la reactivación de la diuresis (ganas de orinar tras el masaje).\n• Efecto Modelador y Reductor: A partir de la cuarta o quinta sesión, la piel se aprecia visiblemente más lisa, compacta y firme, con una atenuación drástica de la celulitis y una definición de los contornos corporales (glúteos, flancos, abdomen o cartucheras).'
        },
        {
          pregunta: '¿Es dolorosa la Maderoterapia? ¿Salen moratones?',
          respuesta: 'Existe el falso mito de que la maderoterapia debe doler o dejar hematomas para ser efectiva, lo cual es clínicamente incorrecto. El tratamiento es intenso y profundo, por lo que durante las primeras sesiones se puede percibir cierta sensibilidad o agujetas en las zonas con mayor acumulación de grasa o celulitis fibrosa. Con el paso de las sesiones, a medida que el tejido se drena y la inflamación disminuye, el tratamiento se vuelve placentero y relajante.'
        },
        {
          pregunta: '¿Qué precauciones debo tener en cuenta antes de mi sesión?',
          respuesta: 'Para acudir a tu sesión corporal y optimizar los resultados del drenaje metabólico, te recomendamos seguir estas pautas:\n\n• Hidratación previa: Bebe al menos medio litro de agua antes de acudir a la clínica para facilitar la movilización de las toxinas a través del sistema linfático.\n• Digestión ligera: Evita realizar comidas copiosas o pesadas en las 2 horas previas al tratamiento, ya que las maniobras en la zona abdominal podrían resultar incómodas.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué debo hacer en casa?',
          respuesta: 'El post-tratamiento de la maderoterapia es completamente inocuo y no interrumpe tu rutina diaria. Para prolongar y potenciar el efecto reductor y drenante logrado en la camilla, es clave que sigas estos hábitos en casa:\n\n• Aumenta la ingesta de agua: Bebe entre 1,5 y 2 litros de agua durante el resto del día para ayudar a tus riñones a filtrar y eliminar los lípidos y líquidos movilizados durante el masaje.\n• Evita el consumo excesivo de sal, azúcares refinados y alcohol en las horas posteriores, ya que favorecen la inflamación del adipocito y la retención hídrica.\n• Realiza una caminata ligera o actividad física moderada tras la sesión para activar la bomba muscular y acelerar el retorno linfático.\n• Aplica las emulsiones reafirmantes, anticelulíticas o de activación microcirculatoria pautadas en consulta mediante un suave masaje ascendente antes de dormir.'
        },
        {
          pregunta: '¿Los resultados obtenidos son permanentes?',
          respuesta: 'Los resultados de la maderoterapia son excelentes y duraderos, logrando una mejora real en la arquitectura de la piel y la eliminación del edema. Sin embargo, el tejido adiposo y el sistema linfático tienen memoria biológica y están íntimamente ligados a tus hábitos de vida, tu genética y tus niveles hormonales.\n\nPara que los resultados de remodelación y firmeza se mantengan estables a largo plazo, el tratamiento debe acompañarse de una alimentación equilibrada y ejercicio regular. Asimismo, se recomienda realizar 1 o 2 sesiones de mantenimiento mensuales para evitar que los líquidos y la celulitis vuelvan a consolidarse.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones de este tratamiento corporal?',
          respuesta: '• Embarazo: Está contraindicado realizar maniobras profundas en abdomen, flancos o espalda (se puede adaptar de forma muy suave y exclusiva para drenaje de piernas a partir del segundo trimestre, bajo autorización médica).\n• Patologías vasculares graves: Pacientes con antecedentes de trombosis venosa profunda, flebitis activa o varices severas, muy prominentes y dolorosas en la zona a tratar.\n• Procesos oncológicos activos o alteraciones del sistema linfático no controladas.\n• Infecciones o alteraciones cutáneas: Presencia de heridas abiertas, quemaduras solares, eccemas severos o infecciones bacterianas de la piel en la región que se va a masajear.'
        }
      ],
      evidencia: [
        { 
          titulo: "Efectos Físicos y Fisiológicos del Masaje Mecánico y de Vacío en el Tejido Subcutáneo", 
          fuente: "Journal of Cosmetic and Laser Therapy (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/27018318/" 
        },
        { 
          titulo: "Evaluación Longitudinal del Drenaje Linfático Mecánico en el Tratamiento de la Celulitis", 
          fuente: "Aesthetic Surgery Journal (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/20442099/" 
        }
      ]
    }
  },
  'depilacion-laser': {
    nombre: 'Depilación Láser Médica',
    tituloDescripcion: '¿Qué es la Depilación Láser Médica con la plataforma Nordlys de Candela?',
    imagen: '/tratamientos/corp-depilacion-laser.jpeg', // Luego lo vincularemos con su foto renombrada de la carpeta assets
    descripcionBreve: 'Eliminación permanente del vello corporal bajo estricta supervisión médica y tecnología clínica de alta potencia.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Tecnología', valor: 'Nordlys de Candela (HR 600 SWT)' },
      { titulo: 'Tiempo', valor: 'Zonal (15 - 60 min)' },
      { titulo: 'Resultados', valor: 'Permanentes y progresivos' },
      { titulo: 'Sesiones', valor: '8 a 10 sesiones' }
    ],
    detalles: {
      descripcion: 'Es un procedimiento médico-estético diseñado para eliminar el vello corporal y facial de forma permanente, segura y eficaz. En nuestra clínica utilizamos la prestigiosa plataforma médica Nordlys de Candela, equipada con la tecnología avanzada HR 600 (Selective Waveband Technology).\n\nA diferencia de los sistemas de depilación convencionales, esta tecnología médica utiliza un sistema de filtrado doble patentado que emite pulsos de luz de banda estrecha de alta precisión. La energía es absorbida de manera selectiva por la melanina del vello y se transforma en calor, destruyendo las células madre responsables del crecimiento del folículo piloso (fototermólisis selectiva) sin calentar ni dañar la piel circundante.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La tecnología médica HR 600 de Nordlys destruye de forma eficaz únicamente el vello que se encuentra en la fase anágena (fase de crecimiento activo), que es cuando el pelo está conectado con la raíz. Dado que no todos los folículos están en la misma fase a la vez, se requieren varias sesiones para actuar sobre la totalidad del vello de una zona.\n\nPara lograr una eliminación de entre el 80% y el 90% del vello corporal, el protocolo estándar suele requerir de 8 a 10 sesiones. El número definitivo de sesiones, así como el intervalo de tiempo entre ellas (que suele oscilar entre 6 y 8 semanas), se determinará de forma personalizada tras una valoración médica de tu tipo de piel, color y grosor de vello, y perfil hormonal. Tras completar el ciclo, se recomiendan sesiones de mantenimiento espaciadas a lo largo de los años para controlar el vello residual.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable. Al utilizar la tecnología avanzada HR 600 de Nordlys de Candela, el sistema filtra de forma inteligente la luz infrarroja innecesaria, evitando el calentamiento excesivo del agua de la piel que suele causar el dolor en otros equipos. Esto, sumado al uso de pulsos ultra cortos y controlados, minimiza drásticamente la sensación de molestia.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar tu piel de forma óptima y evitar complicaciones como las quemaduras o la pérdida de eficacia del tratamiento, debes seguir estas pautas:\n\n• No arranques el vello de raíz: Durante las 4 semanas previas a tu cita, no utilices cera, pinzas, hilo ni máquinas eléctricas de depilación. El folículo debe estar intacto para que la luz actúe. Puedes rasurarte con cuchilla cuantas veces lo necesites.\n• Rasurado previo: Rasura la zona a tratar con cuchilla de 24 a 48 horas antes de acudir a la clínica.\n• Evita la exposición solar: No tomes el sol, no acudas a soláriums ni utilices cremas autobronceadoras durante las 2-3 semanas previas. La piel no debe estar irritada ni presentar quemaduras solares.\n• Piel libre de productos: Acude a tu cita con la piel limpia. No apliques cremas hidratantes, aceites, desodorantes (en caso de axilas) ni perfumes el día de la sesión.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Tras la sesión, la piel puede presentar un eritema o edema perifolicular (pequeñas rojeces alrededor del folículo), lo cual es una señal excelente de que la raíz ha sido destruida. Los cuidados básicos en casa son:\n\n• Hidratación y regeneración (Fundamental): Aplica abundante gel de Aloe Vera puro o la crema regeneradora pautada en consulta durante los 3-4 días posteriores para calmar la zona. Evita ducharte con agua excesivamente caliente las primeras 24 horas.\n• No arranques el vello que cae: En las 2 semanas posteriores a la sesión, notarás que el vello tratado empieza a ser expulsado por el folículo. Déjalo caer de forma natural o exfólialo suavemente durante la ducha.\n• Evita el sudor y el calor extremo: No realices ejercicio físico de alta intensidad, ni acudas a saunas, piscinas con cloro o baños turcos durante las primeras 24-48 horas para evitar que el sudor irrite los poros.\n• Fotoprotección solar estricta: Aplica de forma obligatoria protector solar de amplio espectro (SPF 50+) en las zonas expuestas (como el rostro o los brazos) y evita la exposición solar directa durante los 7-10 días posteriores para prevenir la aparición de manchas (hiperpigmentación postinflamatoria).'
        },
        {
          pregunta: '¿Los resultados obtenidos son definitivos?',
          respuesta: 'El tratamiento con la plataforma médica Nordlys logra una destrucción permanente de los folículos pilosos tratados, lo que significa que el vello eliminado no volverá a crecer. Sin embargo, el cuerpo humano tiene la capacidad de generar nuevos folículos a lo largo de la vida debido a estímulos y cambios hormonales (como el embarazo, la menopausia o el uso de ciertos medicamentos). Por esta razón, el tratamiento se define clínicamente como una depilación permanente o de larga duración, siendo muy habitual realizar una única sesión de recordatorio anual o bianual para mantener la piel perfectamente lisa.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Medicamentos fotosensibilizantes: Pacientes bajo tratamientos farmacológicos activos que aumenten la sensibilidad de la piel a la luz (como ciertos antibióticos, retinoides orales como la isotretinoína, o algunos antiinflamatorios de uso continuado). Es obligatorio informar al médico de cualquier tratamiento actual.\n• Infecciones o lesiones activas: Presencia de herpes, infecciones bacterianas, heridas abiertas, eccemas agudos o quemaduras solares en la zona a tratar el día de la sesión.\n• Pieles extremadamente bronceadas recientemente: Se deberá evaluar clínicamente si es necesario posponer la sesión unas semanas para garantizar la total seguridad epidérmica.\n• Patologías oncológicas activas o procesos inmunológicos severos sin autorización del especialista.'
        }
      ],
      evidencia: [
        { 
          titulo: "Eficacia a Largo Plazo de la Tecnología de Banda Estrecha (SWT) en la Reducción del Vello", 
          fuente: "Journal of Cosmetic and Laser Therapy (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/16753748/" 
        },
        { 
          titulo: "Análisis Comparativo de Sistemas Lumínicos Médicos para la Fotodepilación Permanente", 
          fuente: "Lasers in Surgery and Medicine (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/11568631/" 
        }
      ]
    }
  },
  // Archivo de datos de tratamientos (ej: src/data/tratamientos.ts o dentro de tu [slug]/page.tsx)

'control-peso-medico': {
    nombre: 'Control de Peso Médico',
    tituloDescripcion: '¿Qué significa Control de Peso Médico?',
    imagen: '/tratamientos/pesoglp1.jpeg', 
    descripcionBreve: 'Programa clínico integral para la pérdida de grasa sostenible utilizando fármacos análogos de GLP-1 bajo estricto control médico y analítico.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Tratamiento', valor: 'Fármacos Análogos GLP-1' },
      { titulo: 'Objetivo', valor: 'Pérdida de grasa (15-20%)' },
      { titulo: 'Seguimiento', valor: 'Médico, analítico y nutricional' },
      { titulo: 'Resultados', valor: 'Progresivos y sostenibles' }
    ],
    detalles: {
      descripcion: 'Es un programa clínico, individualizado y riguroso diseñado para el tratamiento integral del sobrepeso y la obesidad, priorizando la salud metabólica y la pérdida de grasa de forma sostenible. A diferencia de los enfoques nutricionales convencionales o las dietas restrictivas, nuestra unidad aborda la pérdida de peso como una necesidad médica, identificando las causas hormonales, genéticas y conductuales de cada paciente.\n\nEl pilar diferencial de nuestro protocolo es la incorporación y el seguimiento de tratamientos farmacológicos de última generación, específicamente los análogos de la hormona GLP-1. Estos fármacos de precisión imitan a las hormonas incretinas naturales del cuerpo, actuando directamente sobre los centros cerebrales que regulan el apetito para inducir una saciedad temprana, ralentizar el vaciado gástrico y estabilizar los niveles de glucosa en sangre, lo que elimina la ansiedad por la comida de raíz.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cómo funciona el tratamiento y en qué consiste el programa?',
          respuesta: 'El programa médico se divide en fases clínicas estrictas para garantizar la máxima seguridad y eficacia:\n\n• Evaluación Médica Inicial: Realizamos una analítica de sangre completa (perfil hormonal, hepático, lipídico y glucémico) y una historia clínica detallada.\n• Pauta y Titulación del Fármaco: Si eres candidato clínico, se prescribe el fármaco análogo de GLP-1 (de administración inyectable subcutánea semanal). La dosis se pauta de forma escalonada para que tu cuerpo se adapte perfectamente al medicamento.\n• Seguimiento y Reeducación: Se programan consultas periódicas para monitorizar la pérdida de peso (asegurándonos de que pierdas masa grasa y preserves la masa muscular), reajustar dosis, pautar asesoramiento nutricional y establecer pautas de ejercicio adaptadas.'
        },
        {
          pregunta: '¿Cuánto peso se puede perder?',
          respuesta: 'Clínicamente, bajo el protocolo con fármacos reguladores de GLP-1 y un cambio de hábitos supervisado, los estudios médicos demuestran una pérdida media de peso corporal que oscila entre el 15% y el 20% a lo largo del tratamiento. No obstante, el objetivo de nuestra unidad no es la rapidez extrema, sino una tasa de pérdida segura y saludable protegiendo siempre el tejido muscular.'
        },
        {
          pregunta: '¿El tratamiento farmacológico tiene efectos secundarios?',
          respuesta: 'Al tratarse de medicamentos que ralentizan el sistema digestivo para prolongar la saciedad, los efectos secundarios más frecuentes son de carácter gastrointestinal, de intensidad leve a moderada y de naturaleza transitoria.\n\nDurante las primeras semanas o al aumentar la dosis, es común experimentar náuseas sutiles, sensación de plenitud prolongada, estreñimiento o reflujo. Al estar bajo supervisión médica continua, te daremos pautas nutricionales específicas (como fraccionar las comidas o evitar alimentos grasos) y, si fuera necesario, soporte médico farmacológico sintomático para que el proceso sea completamente confortable y seguro.'
        },
        {
          pregunta: '¿Qué requisitos o pautas debo cumplir antes de iniciar el programa?',
          respuesta: 'Para garantizar el éxito terapéutico, es indispensable realizar el proceso de cribado médico previo:\n\n• Analítica de sangre reciente: Obligatorio evaluar la función tiroidea, renal, pancreática y metabólica antes de iniciar tratamiento.\n• Compromiso de cambio: El fármaco es una herramienta biológica superpotente, pero no trabaja solo. El paciente debe acudir con la disposición de aprender nuevos hábitos nutricionales y pautas de actividad física que mantengan su salud en el futuro.\n• Declaración de antecedentes: Es vital informar de cualquier historial familiar de patologías específicas (como el carcinoma medular de tiroides o pancreatitis previas) durante la primera entrevista de valoración.'
        },
        {
          pregunta: '¿Qué cuidados o hábitos debo mantener durante el tratamiento?',
          respuesta: 'Para optimizar los resultados y evitar la pérdida de masa muscular (sarcopenia), debes seguir estas pautas domiciliarias:\n\n• Prioriza la proteína: Al tener mucho menos apetito, es fundamental que las pocas calorías que ingieras sean de alta calidad. Debes asegurar un aporte proteico óptimo diario pautado en consulta.\n• Entrenamiento de fuerza (Fundamental): Para evitar la flacidez corporal y mantener activo tu metabolismo basal, es obligatorio incorporar ejercicios de fuerza o resistencia al menos 2 o 3 veces por semana.\n• Hidratación constante: Bebe entre 1,5 y 2 litros de agua al día, ya que el fármaco puede disminuir de forma inconsciente la sensación de sed.'
        },
        {
          pregunta: '¿Existe "efecto rebote" al suspender el fármaco de GLP-1?',
          respuesta: 'Médicamente, el efecto rebote ocurre cuando el fármaco se retira de forma abrupta sin haber reeducado los centros de saciedad ni haber consolidado nuevos hábitos de vida en el paciente.\n\nEn nuestra clínica, el tratamiento no se corta de golpe; realizamos una fase de mantenimiento y retirada progresiva de la dosis. El fármaco te da la ventana de oportunidad biológica para que aprendas a comer y te muevas por hábito. Si al retirar el medicamento mantienes la masa muscular ganada y los hábitos instaurados, el peso se mantendrá perfectamente estable a largo plazo.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del Control de Peso Médico?',
          respuesta: 'Este programa y la prescripción de análogos de GLP-1 están estrictamente contraindicados en:\n\n• Embarazo o planificación del mismo (debe suspenderse el fármaco al menos 2 meses antes de buscar el embarazo).\n• Antecedentes personales o familiares directos de Carcinoma Medular de Tiroides o Síndrome de Neoplasia Endocrina Múltiple tipo 2 (NEM 2).\n• Antecedentes de Pancreatitis aguda grave.\n• Pacientes con trastornos de la conducta alimentaria (TCA) activos sin un abordaje psiquiátrico conjunto.'
        }
      ],
      evidencia: [
        { 
          titulo: "Eficacia de los agonistas del receptor GLP-1 en el tratamiento de la obesidad", 
          fuente: "New England Journal of Medicine (NEJM)", 
          link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183" 
        }
      ]
    }
  },
  // --- 3. TRATAMIENTOS CAPILARES ---
  'mesoterapia-capilar': {
    nombre: 'Mesoterapia Capilar',
    tituloDescripcion: '¿Qué es el tratamiento de Mesoterapia Capilar?',
    imagen: '/tratamientos/mesoterapia-capilar.jpeg', // Vinculada a tu foto real de la clínica
    descripcionBreve: 'Nutrición y medicación inyectada directamente en la raíz para frenar en seco la caída capilar.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Microinyecciones bulbares' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'A partir del 3º mes' },
      { titulo: 'Duración', valor: 'Mantenimiento periódico' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético de bioestimulación y nutrición folicular activa, diseñado específicamente para frenar la caída del cabello, estimular el crecimiento de pelo nuevo y mejorar la densidad, grosor y calidad de la masa capilar. Consiste en la aplicación microfocalizada de sustancias terapéuticas directamente en el cuero cabelludo, alcanzando la capa dérmica profunda donde se alojan las raíces de los folículos pilosos.\n\nA diferencia de los tratamientos tópicos convencionales (como lociones o champús), que difícilmente atraviesan la barrera cutánea, la mesoterapia introduce de forma directa un concentrado personalizado de alta gama médica. Estos cócteles biológicos suelen incluir vitaminas esenciales, aminoácidos, minerales, coenzimas, ácido hialurónico y fármacos antiandrógenos específicos de uso médico. Este aporte directo de nutrientes reactiva los folículos debilitados, prolonga la fase de crecimiento del vello (fase anágena) y revierte el proceso de miniaturización capilar.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La mesoterapia capilar actúa respetando y potenciando los ciclos biológicos naturales de crecimiento del cabello. Al tratarse de un estímulo celular progresivo, los resultados no son inmediatos: la detención de la caída anormal del cabello suele apreciarse a partir de la tercera o cuarta semana, mientras que el nacimiento de pelo nuevo y el aumento visible de la densidad capilar se consolidan a partir del tercer o cuarto mes.\n\nPara obtener un cambio estructural profundo, el protocolo médico inicial suele requerir entre 4 y 6 sesiones. El número definitivo de sesiones, así como el intervalo de tiempo entre ellas, se pautará de forma personalizada en la consulta tras un diagnóstico capilar exhaustivo. Una vez completado este ciclo de choque, se recomiendan sesiones de mantenimiento espaciadas a lo largo del año para prolongar la vitalidad del folículo.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento muy tolerable. Para garantizar la máxima seguridad anatómica y el confort del paciente, realizamos las infiltraciones utilizando agujas finas, aplicando el producto de forma superficial.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para preparar tu cuero cabelludo y asegurar un procedimiento higiénico y eficaz, te recomendamos seguir estas pautas previas:\n\n• Evita productos de peinado: No te apliques lacas, gominas, geles, espumas ni fibras capilares el día del tratamiento, ya que es fundamental que la piel esté libre de residuos.\n• Medicamentos: Evita el consumo de antiinflamatorios (como el ibuprofeno o la aspirina) durante las 24-48 horas previas para minimizar el riesgo de pequeños puntos de sangrado.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Al tratarse de un procedimiento mínimamente invasivo que genera micropunciones transitorias en el cuero cabelludo, debes seguir estos cuidados higiénicos básicos en las horas posteriores:\n\n• No laves la cabeza ni te mojes el cuero cabelludo durante las 12-24 horas posteriores a la sesión para permitir que los principios activos terminen de absorberse por completo en la dermis.\n• Evita tocar, rascar o frotar el cuero cabelludo de forma enérgica. Tras el periodo de espera, utiliza un champú suave o neutro para el primer lavado.\n• No realices deporte de alta intensidad, ni acudas a saunas, piscinas, spas o playas durante las primeras 48 horas para evitar que la sudoración excesiva o el cloro irriten las micropunciones.\n• No utilices cascos de moto, gorras o sombreros ajustados inmediatamente después del tratamiento para evitar la acumulación de calor y mantener la zona perfectamente oxigenada.\n• Pospone la aplicación de tintes, decoloraciones o permanentes hasta que hayan transcurrido al menos 5-7 días desde la sesión.'
        },
        {
          pregunta: '¿De qué depende la duración de los resultados?',
          respuesta: 'La mesoterapia capilar es una herramienta médica excepcional para reactivar los folículos pilosos, pero la estabilidad de sus resultados a largo plazo depende de la constancia del paciente y de la causa subyacente de la alopecia.\n\nEn casos de alopecias de origen genético y hormonal (como la alopecia androgénica), el estímulo destructivo sobre el folículo es crónico. Por lo tanto, para mantener el pelo fuerte y evitar que vuelva a miniaturizarse, es fundamental cumplir de forma estricta con las sesiones de mantenimiento pautadas y combinarlas, si el médico lo indica, con tratamientos domiciliarios orales o tópicos. En casos de caídas temporales (efluvios telógenos por estrés o postparto), los resultados pueden ser definitivos una vez corregido el factor desencadenante.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Infecciones o patologías activas en el cuero cabelludo: Presencia de dermatitis seborreica severa en brote, psoriasis capilar activa, infecciones bacterianas (foliculitis), heridas abiertas o quemaduras solares el día de la sesión.\n• Alteraciones graves de la coagulación o pacientes bajo tratamientos anticoagulantes activos severos.\n• Enfermedades neoplásicas activas en la zona o antecedentes oncológicos sin la autorización expresa de su especialista.\n• Alergias conocidas: Hipersensibilidad documentada a alguno de los principios activos o vitaminas de la formulación seleccionada.'
        }
      ],
      evidencia: [
        { 
          titulo: "Eficacia y Seguridad de la Mesoterapia con Antiandrógenos en Alopecia Androgenética", 
          fuente: "International Journal of Trichology (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/28900321/" 
        },
        { 
          titulo: "Uso de la Mesoterapia como Tratamiento Adyuvante para la Pérdida Capilar", 
          fuente: "Journal of Clinical and Aesthetic Dermatology (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/33907572/" 
        }
      ]
    }
  },
  'laser-led-capilar': {
    nombre: 'Terapia fotobiológica (Láser LED capilar)',
    tituloDescripcion: '¿Qué es la Terapia Fotobiológica o Láser LED capilar?',
    imagen: '/tratamientos/terapia-fotobiologica.jpeg', // Vinculada a tu foto real de la clínica
    descripcionBreve: 'Estimulación lumínica indolora para multiplicar el riego sanguíneo de tus folículos capilares.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Fotobiomodulación' },
      { titulo: 'Tiempo', valor: '15 - 20 min' },
      { titulo: 'Resultados', valor: 'Progresivos y acumulativos' },
      { titulo: 'Sesiones', valor: '8 a 12 sesiones' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético de fotobiomodulación celular, diseñado de forma específica para frenar la caída del cabello, acelerar el crecimiento capilar y mejorar la densidad y vitalidad de los folículos pilosos. Consiste en la aplicación de una luz enriquecida de baja intensidad a través de longitudes de onda rojas e infrarrojas sumamente precisas, que penetran en el cuero cabelludo sin emitir calor ni dañar los tejidos.\n\nEl mecanismo de acción actúa directamente a nivel mitocondrial (la central energética de las células) desencadenando un aumento inmediato en la producción de energía celular (ATP). Esto estimula la microcirculación local, mejora el aporte de oxígeno y nutrientes a la raíz del pelo, disminuye la inflamación perifolicular y reduce la acción de los radicales libres. Como resultado, los folículos miniaturizados y debilitados se reactivan, logrando un cabello notablemente más grueso, denso y resistente.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La terapia fotobiológica capilar de baja intensidad estimula una respuesta biológica progresiva y acumulativa en el cuero cabelludo. Al tratarse de un proceso de regeneración celular, los resultados se consolidan de manera gradual: la estabilización de la caída del vello suele apreciarse a partir de las 4 o 6 semanas, mientras que la mejora en el grosor y el aumento de la densidad capilar se hacen visibles a partir del tercer o cuarto mes de tratamiento continuo.\n\nPara obtener un beneficio terapéutico sólido y duradero, el protocolo estándar inicial suele requerir un ciclo de entre 8 y 12 sesiones. Al ser un procedimiento no invasivo, las sesiones se pautan generalmente 1 o 2 veces por semana, con una duración de entre 15 y 20 minutos por sesión. El diseño definitivo de tu calendario se adaptará minuciosamente en la consulta tras un diagnóstico capilar personalizado.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento absolutamente indoloro, cómodo y relajante. La tecnología de emisión LED de baja intensidad es una forma de "energía fría", lo que significa que no genera quemaduras, pinchazos ni molestias de ningún tipo. No requiere ningún tipo de anestesia y te permite reincorporarte a tu vida diaria de forma inmediata al salir de la clínica.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para garantizar que la luz penetre de forma limpia y directa en el cuero cabelludo sin interferencias ópticas, te recomendamos seguir estas pautas previas:\n\n• Piel libre de residuos: No te apliques lacas, gominas, geles, espumas ni, de forma muy importante, fibras capilares densificadoras el día de la cita, ya que estos productos pueden bloquear o reflejar los fotones de luz, disminuyendo la eficacia del tratamiento.\n• Sin cosméticos grasos: Intenta evitar el uso de lociones capilares excesivamente aceitosas unas horas antes de la sesión.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Al ser un tratamiento completamente no invasivo que respeta la integridad de la piel, la recuperación es inmediata y no requiere cuidados complejos en casa.'
        },
        {
          pregunta: '¿De qué depende la duración de los resultados?',
          respuesta: 'La fotobiomodulación mantiene activos los folículos pilosos mientras persista el estímulo energético y se controlen los factores causantes de la caída. En alopecias crónicas o de origen genético (como la alopecia androgénica), el folículo sigue estando expuesto al ataque hormonal nativo del organismo.\n\nPor esta razón, la duración de los resultados estéticos depende de la constancia en el mantenimiento. Una vez finalizado el protocolo de choque inicial, es fundamental realizar sesiones de recuerdo espaciadas combinadas con el tratamiento médico integral pautado en consulta para conservar de forma indefinida la densidad y el grosor capilar recuperados.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Medicamentos fotosensibilizantes potentes: Pacientes que estén tomando fármacos que aumenten de forma severa la sensibilidad de la piel a la luz (como ciertos antibióticos o tratamientos dermatológicos específicos).\n• Patologías de la piel fotosensibles: Enfermedades que empeoren con la exposición lumínica, como el Lupus Eritematoso Sistémico o la porfiria.\n• Infecciones o heridas abiertas: Presencia de infecciones bacterianas agudas o ulceraciones sangrantes en el cuero cabelludo el día de la sesión.\n• Antecedentes de patologías oncológicas activas en la zona de tratamiento.'
        }
      ],
      evidencia: [
        { 
          titulo: "Terapia de Luz de Baja Intensidad (LLLT) para el Tratamiento de la Pérdida de Cabello: Un Estudio Clínico", 
          fuente: "Lasers in Surgery and Medicine (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/24078483/" 
        },
        { 
          titulo: "Eficacia de la Fotobiomodulación en la Alopecia Androgenética Masculina y Femenina", 
          fuente: "Annals of Dermatology (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/30402061/" 
        }
      ]
    }
  },
  'prp-capilar': {
    nombre: 'Plasma Rico en Plaquetas (PRP) Capilar',
    tituloDescripcion: '¿Qué es el tratamiento de Plasma Rico en Plaquetas (PRP) Capilar?',
    imagen: '/tratamientos/prpcapilar.jpeg', 
    descripcionBreve: 'Reactivamos los folículos inactivos y dormidos usando los factores de crecimiento de tu propia sangre.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Mesoterapia Autóloga' },
      { titulo: 'Tiempo', valor: '45 min' },
      { titulo: 'Resultados', valor: 'A partir del 3º o 4º mes' },
      { titulo: 'Sesiones', valor: '4 a 6 sesiones' }
    ],
    detalles: {
      descripcion: 'Es un tratamiento médico-estético de digitalización celular y terapia biológica autóloga, diseñado para frenar la pérdida de cabello, potenciar el nacimiento de pelo nuevo y engrosar los folículos debilitados. Consiste en la aplicación intradérmica de una alta concentración de plaquetas obtenidas de la propia sangre del paciente, las cuales contienen factores de crecimiento.\n\nEl procedimiento se realiza de forma inmediata en la consulta: se extrae una pequeña muestra de sangre al paciente y se somete a un proceso de centrifugado médico. Esto permite separar las plaquetas del resto de los componentes sanguíneos. Al infiltrar este plasma hiperconcentrado directamente en el cuero cabelludo, los factores de crecimiento activan de forma natural las células madre del folículo piloso, estimulan la formación de nuevos vasos sanguíneos y aumentan la vascularización local. Como resultado, se reactivan los folículos en fase de reposo y se repara el tejido capilar desde el interior.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'El PRP capilar desencadena una respuesta de reparación y bioestimulación biológica profunda y progresiva. La respuesta celular requiere tiempo para traducirse en cambios macroscópicos: la mejora en el grosor, la densidad y la textura del pelo se consolidan de forma notable a partir del tercer o cuarto mes.\n\nPara un tratamiento de choque eficaz, el protocolo médico habitual consiste en un ciclo inicial de 4 a 6 sesiones, espaciadas de forma estricta cada 4 o 6 semanas. El diseño definitivo del plan de tratamiento se estructurará de forma personalizada tras una valoración clínica y tricoscópica de tu salud capilar en la consulta.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'Es un procedimiento tolerable y seguro. Para maximizar el confort del paciente durante la sesión, las infiltraciones se realizan de forma muy superficial mediante agujas finas.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para garantizar que el procedimiento se realice bajo las máximas condiciones de asepsia y optimizar la calidad de la muestra biológica, te recomendamos seguir estas pautas:\n\n• Acude a la clínica con el cuero cabelludo limpio, seco y libre de cualquier producto de peinado (lacas, gominas, geles o fibras capilares).\n• Bebe abundante agua durante las horas previas a la extracción sanguínea. No acudas en ayunas de muchas horas; realiza una comida ligera antes de acudir a tu cita.\n• Evita de forma estricta el consumo de antiinflamatorios (como el ibuprofeno o la aspirina) durante los 3-5 días previos a la sesión, ya que estos fármacos inhiben transitoriamente la función plaquetaria y reducirían la eficacia biológica del tratamiento.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Al tratarse de una infiltración médica con micropunciones transitorias, es fundamental mantener unas pautas higiénicas sencillas durante las horas posteriores:\n\n• No laves tu cabello ni mojes el cuero cabelludo durante las 12-24 horas posteriores a la sesión, permitiendo que la zona se asiente y las micropunciones se sellen por completo de forma natural.\n• No frotes, rasques ni masajes el cuero cabelludo con fuerza. Cuando laves la cabeza por primera vez, hazlo de forma suave con un champú neutro y agua tibia.\n• Evita realizar ejercicio físico intenso, acudir a saunas, spas, baños turcos o pfscinas con cloro durante las primeras 48 horas para prevenir irritaciones o infecciones asociadas a la sudoración.\n• No utilices gorras, sombreros ajustados ni cascos de moto inmediatamente después del tratamiento para evitar la fricción y la acumulación de calor local.\n• Pospone la aplicación de tintes, keratinas o decoloraciones durante los 7 días posteriores a la sesión.'
        },
        {
          pregunta: '¿De qué depende la duración de los resultados?',
          respuesta: 'Al ser un tratamiento autólogo, el PRP potencia de forma espectacular los recursos regenerativos de tu propio cuerpo, pero su duración está directamente vinculada a la patología de base del paciente.\n\nEn procesos de alopecia de carácter crónico y evolutivo (como la alopecia androgénica), el estímulo hormonal que debilita el folículo sigue activo en el organismo. Por tanto, para consolidar los resultados y evitar que el cabello vuelva a miniaturizarse, es imprescindible realizar sesiones de mantenimiento pautadas. En caídas temporales por efluvio telógeno o recuperación post-estrés, los beneficios pueden ser definitivos una vez superado el factor desencadenante.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Trastornos de la coagulación o hematológicos: Pacientes diagnosticados con trombocitopenia (bajo recuento de plaquetas), hipofibrinogenemia o bajo tratamiento con anticoagulantes orales que alteren el perfil plaquetario.\n• Infecciones o patologías activas: Presencia de foliculitis, dermatitis seborreica severa en brote, psoriasis capilar, herpes o heridas abiertas en el cuero cabelludo el día de la cita.\n• Enfermedades autoinmunes graves o patologías oncológicas activas sin la autorización expresa del especialista a cargo.'
        }
      ],
      evidencia: [
        { 
          titulo: "Eficacia del Plasma Rico en Plaquetas en la Alopecia Androgenética: Una Revisión Sistemática", 
          fuente: "Aesthetic Plastic Surgery (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/32333179/" 
        },
        { 
          titulo: "Evaluación de los Factores de Crecimiento del PRP en la Regeneración del Folículo Piloso", 
          fuente: "Dermatologic Surgery (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/27054924/" 
        }
      ]
    }
  },
  'exosomas-capilar': {
    nombre: 'Tratamiento capilar con Exosomas',
    tituloDescripcion: '¿Qué es el tratamiento capilar con Exosomas?',
    imagen: '/tratamientos/exosomas-capilar.jpeg', 
    descripcionBreve: 'La innovación definitiva en tricología. Señalización celular hiperconcentrada para multiplicar el pelo.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Microneedling capilar' },
      { titulo: 'Tiempo', valor: '45 min' },
      { titulo: 'Resultados', valor: 'Primeras semanas' },
      { titulo: 'Duración', valor: 'Largo plazo' }
    ],
    detalles: {
      descripcion: 'Es de los tratamientos médico-estético más avanzados de biomedicina y regeneración, diseñado para revertir el debilitamiento capilar severo y regenerar los folículos pilosos desde su núcleo molecular.\n\nLos exosomas son nanovesículas biológicas liberadas por células madre que funcionan como un potente sistema de comunicación intercelular. Los exosomas no contienen células, sino que transportan de forma concentrada las instrucciones genéticas y moleculares exactas (factores de crecimiento, proteínas reguladoras y micro-ARN) que los folículos debilitados necesitan para repararse. Para permitir su correcta absorción, primero generamos una apertura indolora de microcanales en la piel mediante un dispositivo de micropunción controlada (microneedling). Al aplicar seguidamente este concentrado molecular, los exosomas penetran directamente hacia la papila dérmica, reactivando los folículos en fase latente, incrementando la vascularización y deteniendo los procesos inflamatorios que destruyen el pelo.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'Debido a su altísima concentración de señales biológicas purificadas, la terapia con exosomas genera una respuesta regenerativa mucho más rápida e intensa que los tratamientos capilares tradicionales. El aumento del volumen y la redensificación capilar se consolidan de manera evidente entre el segundo y el tercer mes.\n\nGracias a la potencia de este concentrado biomédico, los protocolos de choque son muy eficientes y suelen requerir únicamente de 1 a 3 sesiones, espaciadas entre 4 y 6 semanas según el grado de alopecia del paciente. La pauta definitiva y personalizada se determinará en la consulta médica tras un minucioso examen tricoscópico de la salud de tu cuero cabelludo.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento seguro y perfectamente tolerable. Al no utilizarse agujas de inyección tradicionales, la molestia se reduce al mínimo. La fase previa de micropunción controlada para abrir los canales de absorción se realiza con dispositivos avanzados de alta velocidad y profundidad milimétrica, lo que apenas genera una sutil sensación de hormigueo o fricción en el cuero cabelludo que los pacientes toleran con total facilidad. No requiere el uso de anestesias y te permite reincorporarte a tus actividades habituales inmediatamente después de terminar la sesión.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para asegurar un procedimiento higiénico y garantizar que las nanovesículas biológicas penetren sin interferencias a través de los microcanales, te recomendamos seguir estas indicaciones previas:\n\n• Acude a la sesión con el cabello recién lavado (esa misma mañana o la noche anterior) y completamente seco.\n• No utilices lacas, espumas, gominas, geles ni fibras capilares densificadoras el día del tratamiento. La piel debe estar completamente limpia para que los microcanales permanezcan permeables y libres de contaminación cosmética.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: '• No laves tu cabello ni mojes el cuero cabelludo durante las 24 horas posteriores a la sesión, permitiendo que el producto aplicado por vía tópica se absorba por completo y ejerza su acción en las capas internas de la piel.\n• Evita rascar, frotar o masajear el cuero cabelludo de forma enérgica. En el primer lavado posterior, utiliza un champú suave o neutro y agua tibia, sin friccionar con las uñas.\n• No realices actividad física de alta intensidad, ni acudas a saunas, baños de vapor o piscinas durante las primeras 48 horas. El sudor excesivo o el cloro podrían irritar los canales de absorción que se están cerrando.\n• Evita el uso de gorras, sombreros ajustados o cascos de moto inmediatamente después de la sesión para mantener la zona limpia y perfectamente oxigenada.\n• No te apliques tintes, decoloraciones ni tratamientos de keratina hasta pasados al menos 7 días de la sesión.'
        },
        {
          pregunta: '¿De qué depende la duración de los resultados?',
          respuesta: 'Los exosomas inducen un cambio estructural y biológico profundo en el folículo piloso, despertando su capacidad regenerativa nativa. Sin embargo, en alopecias con una fuerte carga genética y hormonal (como la alopecia androgénica), el estímulo del organismo que debilita el pelo sigue existiendo a nivel sistémico.\n\nPor tanto, la estabilidad de los resultados a largo plazo depende de la estrategia de mantenimiento médico. Una vez alcanzado el objetivo de densidad y grosor con el protocolo de choque, se suele recomendar una o dos sesiones de recuerdo al año, combinada con el soporte terapéutico domiciliario (tópico u oral) que prescriba el equipo médico para proteger el folículo de forma continua.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Infecciones o inflamaciones activas en la zona: Presencia de foliculitis bacteriana, brotes severos de dermatitis seborreica, psoriasis capilar activa, eccemas o heridas abiertas en el cuero cabelludo el día de la cita (ya que impedirían realizar la micropunción).\n• Patologías oncológicas activas: Antecedentes de neoplasias en el cuero cabelludo o procesos oncológicos sistémicos activos sin la autorización expresa y por escrito de su oncólogo.\n• Alergia conocida a alguno de los componentes acompañantes en la solución cosmética estéril.'
        }
      ],
      evidencia: [
        { 
          titulo: "Exosomas Derivados de Células Madre Mesenquimales para la Regeneración Capilar", 
          fuente: "Stem Cell Research & Therapy (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/31818593/" 
        },
        { 
          titulo: "El Rol de los Exosomas en la Promoción del Crecimiento del Folículo Piloso", 
          fuente: "International Journal of Molecular Sciences (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/33945657/" 
        }
      ]
    }
  },
  'alopecia': {
    nombre: 'Abordaje Médico de la Alopecia y Caída Capilar',
    tituloDescripcion: '¿Qué es el Abordaje Médico de la Alopecia y Caída Capilar?',
    imagen: '/tratamientos/alopecia.jpeg', // Se enlazará a tu foto cuando esté disponible
    descripcionBreve: 'Diagnóstico exhaustivo, tricoscopia y tratamiento médico personalizado para detener la pérdida de cabello.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Tricoscopia y Terapia Sistémica' },
      { titulo: 'Tiempo', valor: '45 min' },
      { titulo: 'Resultados', valor: 'Progresivos (4 - 8 semanas)' },
      { titulo: 'Duración', valor: 'Control Crónico' }
    ],
    detalles: {
      descripcion: 'Es un servicio médico especializado enfocado en el diagnóstico, control y tratamiento farmacológico personalizado de las diferentes patologías que provocan la pérdida de densidad, el debilitamiento y la caída del cabello.\n\nLa alopecia no es un problema puramente estético; en la gran mayoría de los casos (como la alopecia androgénica o los efluvios telógenos), responde a factores hormonales, genéticos, déficits nutricionales o estrés oxidativo que afectan directamente al folículo piloso. Mediante una valoración clínica exhaustiva, el diseño de analíticas específicas y el uso de tricoscopia digital, pautamos un tratamiento médico integral que incluye fórmulas magistrales tópicas, suplementación de grado médico y terapia sistémica por vía oral para frenar la caída de forma definitiva y recuperar el cabello miniaturizado en el caso de ser necesario.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿En qué consiste el tratamiento por Vía Oral y Tópica?',
          respuesta: 'El tratamiento médico domiciliario es el pilar fundamental que da soporte y continuidad a las terapias realizadas en la clínica. Se diseña a medida según las necesidades biológicas de cada paciente:\n\n• Terapia Médica por Vía Oral (Sistémica): Consiste en la prescripción de fármacos específicos destinados a bloquear los factores internos que destruyen el folículo. Empleamos inhibidores hormonales (como el Dutasteride o Finasteride) para frenar la miniaturización del vello provocada por la dihidrotestosterona (DHT), o vasodilatadores orales a bajas dosis (como el Minoxidil oral), un tratamiento médico de altísima eficacia que mejora de forma masiva el riego sanguíneo en la raíz del pelo y que ha revolucionado la adherencia al tratamiento al evitar la incomodidad de las lociones diarias.\n• Terapia Médica por Vía Tópica: Diseñamos fórmulas magistrales personalizadas (lociones, espumas o champús médicos) con concentraciones precisas de activos que el paciente aplica directamente en su hogar. Estas fórmulas combinan principios activos anticaída, antiandrógenos tópicos o corticoides de alta especificidad en caso de alopecias de base inflamatoria o autoinmune.'
        },
        {
          pregunta: '¿Cuánto tiempo se necesita para ver resultados?',
          respuesta: 'El ciclo biológico del vello es lento y requiere constancia absoluta. Los tratamientos médicos actúan modificando las fases de crecimiento del folículo desde la raíz dérmica, por lo que los cambios estructurales siguen un calendario fisiológico muy marcado:\n\n• A las 4 - 8 semanas: Se aprecia una estabilización biológica de la caída activa (el cabello deja de caerse de forma anormal). En ocasiones, durante los primeros dos meses puede aparecer el llamado efecto shedding (caída transitoria del vello debilitado para dar paso al pelo nuevo y fuerte), un proceso médico completamente normal que indica que el tratamiento está funcionando.\n• A los 3 - 6 meses: Comienza a ser visible el aumento del grosor, el nacimiento de pelo nuevo y una mayor cobertura del cuero cabelludo.\n• A los 12 meses: Se alcanza el pico máximo de resultado estético y terapéutico de la terapia inicial, mostrando una melena redensificada, fuerte y con un diámetro de fibra capilar notablemente rejuvenecido.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de iniciar el tratamiento?',
          respuesta: 'Para realizar una prescripción médica segura y eficaz, es imprescindible realizar una valoración previa en la consulta:\n\n• Historia clínica y analítica dirigida: El médico evaluará tus antecedentes, alergias, estilo de vida y, si es necesario, solicitará una analítica de sangre específica (perfil hormonal, tiroideo, niveles de hierro y vitaminas) para descartar causas metabólicas subyacentes.\n• Diagnóstico por tricoscopia: Evaluaremos tu cuero cabelludo mediante lentes de alta definición para identificar el tipo exacto de alopecia antes de iniciar cualquier fármaco.\n\nEs fundamental que comuniques al médico cualquier fármaco, anticonceptivo o suplemento que consumas de forma habitual.'
        },
        {
          pregunta: '¿De qué depende la duración de los resultados?',
          respuesta: 'En patologías capilares de carácter genético y crónico (como la alopecia androgénica), el estímulo hormonal del organismo que ataca al folículo piloso se mantiene activo de forma indefinida a lo largo de la vida.\n\nPor lo tanto, la duración y el éxito de los resultados dependen estrictamente de la continuidad del tratamiento. El abordaje médico de la alopecia debe entenderse como un tratamiento de mantenimiento a largo plazo; si los fármacos se suspenden de forma definitiva, el folículo volverá a quedar desprotegido frente a la acción hormonal y el cabello retomará de forma paulatina su proceso natural de miniaturización y caída previa. El médico adaptará y modulará las dosis a lo largo de los años para que el mantenimiento sea lo más cómodo y ligero posible.'
        },
        {
          pregunta: '¿Tiene efectos secundarios el tratamiento médico?',
          respuesta: 'Como cualquier tratamiento farmacológico, la terapia oral o tópica puede presentar efectos adversos, aunque en las dosis médicas controladas empleadas en tricología estética su incidencia es sumamente baja y totalmente reversible. El uso de dosis optimizadas y personalizadas minimiza al máximo la aparición de efectos secundarios corporales u hormonales. Además, cualquier síntoma o molestia es completamente reversible y desaparece de forma inmediata al ajustar la dosis o suspender el fármaco bajo la supervisión directa del médico en las revisiones periódicas.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: 'La prescripción de fármacos capilares sistémicos estará contraindicada o requerirá una estricta adaptación en caso de:\n\n• Embarazo, intención de búsqueda de embarazo o periodos de lactancia: Ciertos fármacos antiandrógenos orales (como el Dutasteride o Finasteride) presentan teratogenicidad estricta y están absolutamente prohibidos en mujeres en edad fértil sin un método anticonceptivo seguro asociado.\n• Patologías hepáticas o renales severas: Que impidan la correcta metabolización o aclaramiento de los fármacos orales.\n• Alteraciones cardiovasculares graves o hipotensión severa: En el caso de utilizar vasodilatadores como el minoxidil a dosis sistémicas, requiere una valoración minuciosa de la tensión arterial basal del paciente.\n• Alergias conocidas: Hipersensibilidad documentada a alguno de los principios activos o excipientes de las fórmulas magistrales pautadas.'
        }
      ],
      evidencia: [
        { 
          titulo: "Eficacia y Seguridad del Minoxidil Oral a Bajas Dosis en el Tratamiento de la Alopecia", 
          fuente: "Journal of the American Academy of Dermatology (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/31102717/" 
        },
        { 
          titulo: "Dutasteride Oral vs Tópico en el Manejo de la Alopecia Androgenética Masculina y Femenina", 
          fuente: "Clinical Interventions in Aging (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/30858696/" 
        }
      ]
    }
  },

  // --- 4. PATOLOGÍAS DE LA PIEL ---
  'tratamiento-acne': {
    nombre: 'Tratamiento integral del Acné',
    tituloDescripcion: '¿Qué es el Tratamiento Integral del Acné?',
    imagen: '/tratamientos/integral-acne.jpeg', 
    descripcionBreve: 'Abordaje médico exhaustivo para controlar brotes, quistes inflamatorios y purificar la glándula sebácea.',
    antesDespues: { 
      antes: "/casos/acne-antes.jpeg", 
      despues: "/casos/acne-despues.jpeg"
    },
    parametros: [
      { titulo: 'Técnica', valor: 'Médico + Peelings/Láser' },
      { titulo: 'Tiempo', valor: '45 min' },
      { titulo: 'Resultados', valor: 'Semanas - Meses' },
      { titulo: 'Duración', valor: 'Cura o control crónico' }
    ],
    detalles: {
      descripcion: 'Es un enfoque médico personalizado diseñado para controlar, tratar y erradicar el acné en todas sus fases (desde comedoniano hasta inflamatorio o quístico), así como para prevenir y eliminar las secuelas físicas que genera, como las manchas y las cicatrices. Al ser una patología médica cutánea multifactorial, no puede resolverse con cosméticos comerciales ni tratamientos de estética convencionales; requiere una intervención clínica dirigida.\n\nNuestro protocolo integral aborda la enfermedad desde la raíz. Combinamos la prescripción de farmacología médica sistémica y tópica de última generación con tratamientos clínicos avanzados en la camilla (como peelings químicos médicos específicos, terapia fotobiológica y láser). De este modo, regulamos la producción de sebo, eliminamos la acumulación de células muertas que obstruyen el poro, reducimos la carga bacteriana del Cutibacterium acnes y controlamos la inflamación de forma drástica y segura.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿En qué consiste el tratamiento y qué técnicas se utilizan?',
          respuesta: 'El éxito del tratamiento radica en la combinación sinérgica de pautas domiciliarias y procedimientos médicos en la clínica, adaptados estrictamente al grado de acné y la tolerancia de tu piel:\n\n• Tratamiento Médico Domiciliario (Farmacológico): Dependiendo de la gravedad, prescribimos retinoides tópicos o por vía oral (Isotretinoína a dosis personalizadas), antibióticos orales o tópicos regulados, o activos seborreguladores potentes como el ácido azelaico y el peróxido de benzoilo.\n• Peelings Químicos Médicos: Realizamos exfoliaciones químicas controladas en la consulta utilizando ácidos de grado médico (como el ácido salicílico, pirúvico o mandélico) para limpiar el folículo en profundidad, desinflamar las lesiones activas y acelerar la renovación de la piel.\n• Terapias Lumínicas y Láser: Utilizamos plataformas avanzadas de luz para destruir la bacteria causante del acné por activación de porfirinas y disminuir la vascularización y el enrojecimiento de las marcas (eritema postinflamatorio), acelerando drásticamente la curación de la piel.'
        },
        {
          pregunta: '¿Cuánto tiempo se necesita para ver resultados?',
          respuesta: 'El tratamiento del acné es un proceso médico que requiere paciencia y una adherencia estricta, ya que la piel necesita completar varios ciclos de renovación celular para estabilizarse:\n\n• Primeras 2 - 4 semanas: Comienza a regularse el exceso de grasa y disminuye la inflamación de las lesiones existentes. En tratamientos con retinoides o peelings, puede aparecer un brote de purga transitorio; un proceso normal en el que la piel expulsa las imperfecciones internas de forma acelerada antes de sanar.\n• A los 2 - 3 meses: El brote activo se encuentra controlado en un alto porcentaje, la aparición de nuevas lesiones se reduce al mínimo y la textura de la piel se muestra visiblemente más lisa, homogénea y recuperada.\n• A partir del 4º mes: Una vez controlada la fase inflamatoria activa, nos centramos en los protocolos de mantenimiento y en la eliminación definitiva de las marcas rojas, manchas oscuras e imperfecciones residuales.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer en casa?',
          respuesta: 'El cuidado domiciliario es clave para consolidar los resultados de las sesiones clínicas y evitar la aparición de manchas:\n\n• Utiliza exclusivamente limpiadores suaves y cremas hidratantes reparadoras no comedogénicas pautadas por el equipo médico para restaurar la barrera cutánea.\n• Evita de forma estricta tocar, apretar o rascar los granitos o las descamaciones, ya que esto incrementa la inflamación y multiplica el riesgo de generar cicatrices permanentes o hiperpigmentaciones.\n• Evita las saunas, spas, baños turcos o ejercicio físico muy intenso durante las primeras 24-48 horas tras un peeling o sesión láser para evitar irritaciones por sudor.\n• Aplica protector solar de amplio espectro (SPF 50+) específico para pieles con tendencia acneica cada 2-3 horas. Los tratamientos médicos renuevan la piel, haciéndola más sensible a la radiación solar.'
        },
        {
          pregunta: '¿De qué depende la duración de los resultados?',
          respuesta: 'El acné es una condición cutánea crónica con un fuerte componente hormonal y genético. El tratamiento médico es altamente eficaz para limpiar y resetear la piel, pero la estabilidad de los resultados a largo plazo depende de la constancia en las pautas de mantenimiento y de los hábitos del paciente.\n\nUna vez que el acné está completamente controlado, es fundamental no abandonar drásticamente el cuidado de la piel; se pautará una rutina cosmética médica de mantenimiento domiciliario y revisiones periódicas en la clínica. Asimismo, llevar una alimentación equilibrada, gestionar los niveles de estrés y utilizar exclusivamente productos cosméticos y de maquillaje libres de aceites (oil-free) y no comedogénicos son factores clave para evitar reactivaciones del brote a largo plazo.'
        }
      ],
      evidencia: [
        { 
          titulo: "Guías Clínicas para el Manejo del Acné Vulgar", 
          fuente: "Journal of the American Academy of Dermatology (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/26897386/" 
        },
        { 
          titulo: "Terapias Basadas en Luz y Láser para el Tratamiento del Acné Activo", 
          fuente: "American Journal of Clinical Dermatology (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/31338767/" 
        }
      ]
    }
  },
  'eliminacion-lentigos': {
    nombre: 'Eliminación de Léntigos / Manchas solares',
    tituloDescripcion: '¿Cómo es el tratamiento de Eliminación de Léntigos Solares (Manchas Solares)?',
    imagen: '/tratamientos/manchassolares.jpeg',
    descripcionBreve: 'Unifica tu tono borrando los daños solares acumulados y recuperando la luminosidad de tu piel de forma definitiva.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Tecnología lumínica / Peelings' },
      { titulo: 'Tiempo', valor: '30-45 min' },
      { titulo: 'Resultados', valor: '1 a 3 sesiones' },
      { titulo: 'Duración', valor: 'Definitivos' }
    ],
    detalles: {
      descripcion: 'Es un procedimiento médico-estético diseñado específicamente para eliminar de forma segura, precisa y definitiva los léntigos solares, comúnmente conocidos como manchas solares o seniles. Estas lesiones son hiperpigmentaciones benignas, de bordes nítidos y coloración marrón variable, que aparecen en las zonas más expuestas a la radiación (rostro, escote, dorso de las manos y brazos) como consecuencia del daño actínico acumulado a lo largo de los años.\n\nEl pigmento del léntigo solar se encuentra concentrado de forma muy superficial (epidérmica). El tratamiento médico se basa en la aplicación de tecnologías lumínicas avanzadas o peelings químicos de grado médico en la consulta. Mediante un mecanismo de fototermólisis selectiva, la energía incide exclusivamente sobre el acúmulo de melanina de la mancha sin dañar el tejido sano circundante, fragmentando el pigmento para que el propio organismo lo elimine de forma natural mediante el proceso de renovación celular.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan para ver resultados?',
          respuesta: 'La eliminación de los léntigos solares es uno de los tratamientos más agradecidos y con resultados más rápidos. Al encontrarse el pigmento en las capas más superficiales de la piel, muchas de estas manchas se eliminan por completo desde la primera sesión.\n\nPor lo general, el protocolo estándar requiere de 1 a 3 sesiones. El número definitivo dependerá estrictamente de la antigüedad de la mancha, su tamaño y la cantidad de pigmento acumulado. Tras una evaluación dermatoscópica previa en la consulta para confirmar la benignidad de la lesión, el equipo médico diseñará tu plan personalizado.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para garantizar un procedimiento seguro en la clínica y evitar efectos secundarios en la piel, es fundamental cumplir con estas pautas previas:\n\n• Exposición solar cero (Fundamental): No puedes realizarte este tratamiento si has tomado el sol recientemente o si tu piel presenta un bronceado activo. La piel debe acudir a la cita en su tono basal para que el haz de luz distinga perfectamente la mancha del tejido sano.\n• Suspende activos renovadores: Interrumpe la aplicación de cremas con retinol, ácido glicólico o salicílico en la zona a tratar entre 3 y 5 días antes de tu sesión.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer en casa?',
          respuesta: 'El proceso posterior a la sesión sigue una evolución cutánea muy característica y predecible:\n\n• Evolución normal de la mancha: Es completamente normal y esperable que, inmediatamente después de la sesión, el léntigo solar tratado se oscurezca notablemente y adquiera un tono marrón oscuro o grisáceo. En los días posteriores, se formará una microcostra muy fina superficial.\n• No manipules la piel: Deja que la microcostra o la fina descamación se desprenda sola de forma natural (suele tardar entre 5 y 7 días en rostro, y algo más en el cuerpo). No utilices exfoliantes físicos (scrubs) ni frotes la piel al secarte.\n• Hidratación y reparación: Aplica la crema regeneradora y calmante pautada en consulta dos o tres veces al día para acelerar la cicatrización del tejido.\n• Fotoprotección solar absoluta (Innegociable): Aplica protector solar de amplio espectro (SPF 50+) cada 2-3 horas todos los días del año. La piel nueva que aparece tras la caída de la costra es muy sensible y el sol podría generar una mancha nueva de forma inmediata.'
        },
        {
          pregunta: '¿Los resultados obtenidos son definitivos?',
          respuesta: 'Sí, la eliminación de los léntigos solares tratados con tecnologías médicas es definitiva. La mancha que ha sido destruida y expulsada por la piel no vuelve a aparecer.\n\nSin embargo, es crucial comprender que la piel tiene "memoria celular" debido al daño solar acumulado a lo largo de tu vida. Si no mantienes unos hábitos estrictos de fotoprotección, con el paso del tiempo el sol activará los melanocitos de las zonas contiguas y aparecerán léntigos solares nuevos. El éxito a largo plazo radica en tu compromiso con el protector solar diario.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: 'Este procedimiento médico de eliminación de manchas solares se pospondrá o evitará en caso de presentar:\n\n• Embarazo y periodo de lactancia.\n• Pieles recientemente bronceadas o que vayan a exponerse al sol de forma inmediata (por ejemplo, viajes programados a la playa).\n• Lesiones sospechosas de malignidad: Cualquier mancha que presente bordes irregulares, asimetría o cambios de color atípicos no se tratará con fines estéticos y se derivará para estudio histológico (biopsia).\n• Infecciones activas: Presencia de herpes labial o infecciones bacterianas en la zona a tratar el día de la cita.\n• Uso de fármacos fotosensibilizantes severos de forma activa.'
        }
      ],
      evidencia: [
        { titulo: "Laser Treatment of Benign Pigmented Lesions", fuente: "Journal of Clinical and Aesthetic Dermatology", link: "#" }
      ]
    }
  },
  'rosacea-cuperosis': {
    nombre: 'Patología Vascular Facial (Rosácea / Cuperosis)',
    tituloDescripcion: '¿Qué es el tratamiento de Control de Rosácea y Cuperosis?',
    imagen: '/tratamientos/rosacea-cuperosis-rojeces.jpeg', // Se enlazará a la foto oficial más adelante
    descripcionBreve: 'Calmamos la inflamación, eliminamos los capilares rotos y apagamos el enrojecimiento facial repentino (flushing).',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'IPL / Terapia Médica' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'Progresivos' },
      { titulo: 'Duración', valor: 'Control crónico' }
    ],
    detalles: {
      descripcion: 'Es un enfoque médico especializado orientado al diagnóstico, estabilización y tratamiento integral de la rosácea (una patología inflamatoria crónica de la piel) y de la cuperosis (la manifestación vascular caracterizada por la dilatación permanente de los capilares, visible en forma de arañas vasculares o rojeces en el rostro). El objetivo principal de este tratamiento es controlar la hiperreactividad vascular, disminuir la inflamación cutánea, espaciar los brotes activos y devolver el confort a la barrera de la piel.\n\nLa rosácea no se cura con cosméticos convencionales, ya que involucra una alteración neurovascular subyacente y un fallo en la función barrera epidérmica. Mediante un protocolo clínico personalizado, combinamos fármacos seborreguladores y antiparasitarios específicos con tecnología lumínica médica avanzada para tratar tanto el componente inflamatorio (pápulas y pústulas) como el componente vascular difuso de forma segura y eficaz.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿En qué consiste el tratamiento y qué técnicas se utilizan?',
          respuesta: 'El control eficaz de la rosácea requiere actuar de forma sinérgica sobre la inflamación y sobre la red capilar alterada del rostro:\n\n• Tratamiento Médico Domiciliario: Prescribimos terapias tópicas dirigidas a controlar los microorganismos asociados y la inflamación. En fases de brote severo, pautamos fármacos sistémicos por vía oral para frenar la cascada inflamatoria desde el interior del organismo.\n• Terapia Lumínica Médica Avanzada (IPL / Láser Vascular): Es el pilar fundamental para eliminar la cuperosis y el eritema (rojez) persistente. Aplicamos pulsos de luz médica que penetran en la dermis y son absorbidos selectivamente por la hemoglobina de los vasos sanguíneos alterados. La energía lumínica se transforma en calor, colapsando y sellando de forma segura los capilares dilatados sin dañar el tejido sano circundante.\n• Cosmética Médica Reparadora: Diseñamos una rutina domiciliaria orientada exclusivamente a restaurar la barrera cutánea mediante activos calmantes, descongestivos y reparadores no comedogénicos.'
        },
        {
          pregunta: '¿Cuánto tiempo se necesita para ver resultados?',
          respuesta: 'La rosácea es una condición de alta sensibilidad, por lo que las mejoras se aprecian de forma paulatina y respetuosa con los tiempos del tejido cutáneo:\n\n• Primeras 2 - 3 semanas: Con la terapia farmacológica adecuada, el paciente percibe una disminución drástica de la sensación de calor, ardor o tirantez, disminuyendo de forma notable el número de pápulas o lesiones inflamatorias activas.\n• Tras 2 - 3 sesiones de IPL / Láser: Los capilares visibles de la cuperosis comienzan a difuminarse y desaparecer, logrando un aclaramiento evidente de la rojez difusa de las mejillas, nariz y mentón, lo que homogeneiza el tono de la piel.\n• A medio y largo plazo: La piel se vuelve significativamente más resistente ante los estímulos cotidianos, reduciendo la frecuencia e intensidad de los brotes eritematosos.'
        },
        {
          pregunta: '¿Qué hacer en casa?',
          respuesta: '• Aplica protector solar de amplio espectro (SPF 50+) específico para pieles con tendencia al eritema o rosácea cada 2-3 horas. La radiación ultravioleta es el principal factor desencadenante de la vasodilatación cutánea y del daño vascular estructural.\n• Lava el rostro con limpiadores suaves y agua templada (evitando el agua muy fría o muy caliente). Seca la piel a toques suaves con una toalla limpia, sin frotar en ningún momento.\n• Durante las primeras 48-72 horas posteriores a la sesión de IPL o láser, pospone de forma estricta el acceso a saunas, baños turcos, spas o la práctica de ejercicio físico de muy alta intensidad que provoque ruborización extrema.\n• No introduzcas productos cosméticos nuevos en tu rutina durante la semana posterior al tratamiento sin que hayan sido supervisados y aprobados por el equipo médico.'
        },
        {
          pregunta: '¿Los resultados obtenidos son definitivos?',
          respuesta: 'Al tratarse la rosácea de una patología vascular y dermatológica crónica de base genética y neurovascular, el tratamiento no proporciona una cura definitiva, sino un control absoluto y excelente de la condición.\n\nLas sesiones de IPL y láser vascular logran eliminar de manera muy exitosa las arañas vasculares y capilares dilatados existentes en ese momento, reseteando la rojez del rostro. Sin embargo, dado que el organismo mantiene la tendencia biológica a generar nuevos vasos sanguíneos debido a la disfunción interna, con el paso del tiempo pueden volver a aparecer de forma paulatina. Por este motivo, para mantener los resultados estables y duraderos a lo largo de los años, se aconseja realizar 1 o 2 sesiones médicas de mantenimiento anuales, combinadas con una adherencia estricta a los cuidados domiciliarios y la evitación de los factores desencadenantes individuales (estrés, cambios bruscos de temperatura, alcohol o ciertos alimentos).'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia: Ciertos fármacos orales están estrictamente contraindicados por motivos de seguridad fetal en estas etapas, modulando el tratamiento únicamente a pautas tópicas seguras o aplazando los procedimientos físicos.\n• Presencia de brotes de herpes labial activo o infecciones bacterianas cutáneas abiertas sobre el área facial a tratar el día de la sesión.\n• Uso de fármacos fotosensibilizantes severos: Medicaciones activas que alteren de forma temporal la respuesta cutánea ante la luz médica, lo cual obligaría a posponer el uso de plataformas lumínicas.\n• Pieles recientemente expuestas a radiación solar intensa o bronceado artificial (solárium) en las últimas 4 semanas.'
        }
      ],
      evidencia: [
        { 
          titulo: "Manejo Integral y Actualización Clínica de la Rosácea y el Eritema Facial", 
          fuente: "Journal of the American Academy of Dermatology (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/25890455/" 
        },
        { 
          titulo: "Eficacia de la Luz Pulsada Intensa (IPL) en el Tratamiento de la Cuperosis y Rosácea Vascular", 
          fuente: "Lasers in Surgery and Medicine (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/22159832/" 
        }
      ]
    }
  },
  'melasma': {
    nombre: 'Control y modulación del Melasma',
    tituloDescripcion: '¿Cómo es el tratamiento de Control y Modulación del Melasma?',
    imagen: '/tratamientos/melasma.jpg', // Se enlazará a tu foto cuando esté lista
    descripcionBreve: 'Enfoque médico especializado para atenuar, estabilizar y modular de forma segura las manchas crónicas y hormonales del rostro.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Despigmentación Médica Controlada' },
      { titulo: 'Tiempo', valor: '30 - 45 min' },
      { titulo: 'Resultados', valor: 'Graduales (3 a 4 semanas)' },
      { titulo: 'Duración', valor: 'Control crónico' }
    ],
    detalles: {
      descripcion: 'Es un enfoque médico especializado diseñado para atenuar, estabilizar y controlar el melasma. A diferencia de las manchas solares comunes, el melasma es una hiperpigmentación de carácter crónico, difuso y simétrico que aparece principalmente en el rostro (mejillas, frente, labio superior y mentón). Su origen es multifactorial, estando íntimamente ligado a factores hormonales (embarazo, anticonceptivos), predisposición genética, radiación solar y un componente vascular inflamatorio subyacente.\n\nEn el melasma, el melanocito (la célula productora de pigmento) está en un estado de hiperreactividad constante. Por ello, el objetivo médico nunca es "destruir" la mancha de forma agresiva, lo cual desencadenaría un efecto rebote devastador (hiperpigmentación postinflamatoria), sino modular su actividad. Tras un diagnóstico minucioso mediante luz de Wood para determinar si el melasma es epidérmico, dérmico o mixto, diseñamos un protocolo combinado que bloquea las enzimas responsables de la producción de melanina y reduce el componente inflamatorio desde el interior de la piel.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿En qué consiste el tratamiento y qué pautas se utilizan?',
          respuesta: 'El abordaje del melasma es crónico y requiere combinar pautas domiciliarias de inhibición enzimática con procedimientos clínicos sumamente respetuosos con el tejido:\n\n• Terapia Farmacológica Domiciliaria (El eje central): Prescribimos tratamientos individualizados vía oral y/o vía tópica con activos despigmentantes médicos de alta potencia.\n• Peelings Químicos Médicos: Realizamos aplicaciones en consulta de soluciones y mascarillas médicas con ácidos específicos. Estos peelings no buscan una agresión profunda, sino acelerar la renovación celular superficial, calmar la inflamación y bloquear la síntesis de melanina de forma progresiva.\n• Terapias Lumínicas Reguladas: Protocolos lumínicos de bajísima emisión térmica adaptados para no activar la hiperreactividad del melanocito.'
        },
        {
          pregunta: '¿Cuánto tiempo se necesita para ver resultados?',
          respuesta: 'El melasma exige un proceso gradual de adaptación celular. Al ser una patología profunda, los cambios estéticos se aprecian siguiendo un calendario biológico muy marcado:\n\n• Primeras 3 - 4 semanas: Con la pauta farmacológica domiciliaria y el primer peeling médico, la piel experimenta un aumento de la luminosidad global y las manchas comienzan a fragmentarse y difuminarse sutilmente en sus bordes.\n• A los 2 - 3 meses: Se alcanza el periodo de mayor aclaramiento. El tono facial se homogeniza significativamente y el melasma puede llegar a ser casi imperceptible, logrando controlar el brote pigmentario.\n• Fase de estabilización y mantenimiento: Una vez aclarado, el protocolo se modifica hacia pautas de mantenimiento a largo plazo para evitar que la mancha vuelva a oscurecerse.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Al trabajar con una piel con melanocitos hiperreactivos, la preparación previa es crucial para evitar complicaciones:\n\n• Suspende activos intensos: Interrumpe el uso de tu fórmula magistral despigmentante, retinol o ácidos exfoliantes entre 3 y 5 días antes de tu cita en clínica, salvo indicación médica contraria.\n• Evita la exposición solar directa: No acudas a la sesión si has tomado el sol recientemente o si tu piel presenta quemaduras. El sol directo contraindica temporalmente los procedimientos en consulta.\n• Comunica cambios hormonales: Informa al médico si has modificado tu pauta de anticonceptivos, si estás bajo terapia hormonal o si existe sospecha de embarazo, ya que influye directamente en el comportamiento del melasma.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer en casa?',
          respuesta: 'El compromiso del paciente en su domicilio determina por completo la estabilidad del melasma:\n\n• Fotoprotección solar de amplio espectro: Debes aplicar protector solar de amplio espectro (SPF 50+) con filtros específicos frente a la radiación UVA, UVB, luz azul (pantallas) e infrarroja cada 2 horas, todos los días del año, incluso en interiores. La luz visible y el sol son los mayores activadores del melasma.\n• Control del calor ambiental: Durante los primeros 5 días posteriores a la sesión, evita estrictamente saunas, spas, baños turcos o la cocina con calor directo intenso, ya que el calor ambiental (infrarrojo) es capaz de dilatar los vasos de la dermis y reactivar la mancha.\n• Hidratación celular: Utiliza cremas barrera no comedogénicas que contengan niacinamida, ceramidas o ácido hialurónico pautadas en consulta para mantener la piel perfectamente equilibrada.\n• Respeta la descamación: Si presentas una descamación fina en los días posteriores al peeling, déjala caer de forma natural. Está prohibido rascar o usar exfoliantes físicos.'
        },
        {
          pregunta: '¿Los resultados obtenidos son definitivos?',
          respuesta: 'No, el melasma es una patología dermatológica crónica que no tiene una cura definitiva, sino un control clínico absoluto. Es fundamental gestionar esta expectativa: mediante el tratamiento médico podemos aclarar la mancha hasta hacerla invisible y devolver la homogeneidad al rostro, pero el melanocito mantiene su "memoria de hiperactividad".\n\nSi el paciente interrumpe la protección solar, se expone a cambios hormonales intensos o abandona las pautas de mantenimiento, la mancha volverá a aparecer de forma paulatina en la misma localización anatómica. Por ello, el éxito radica en un compromiso de fotoprotección estricta de por vida y en la aplicación de rutinas de mantenimiento domiciliario diseñadas por el equipo médico, especialmente durante los meses de verano.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones?',
          respuesta: '• Embarazo y periodo de lactancia: Fármacos de primera línea están estrictamente contraindicados por motivos de seguridad fetal en estas etapas. El manejo del melasma gestacional (cloasma) se limitará estrictamente a fotoprotección absoluta y activos cosméticos totalmente seguros.\n• Infecciones activas en el rostro: Presencia de brotes de acné, herpes labial activo, infecciones bacterianas o heridas abiertas el día de la sesión en clínica.\n• Exposición solar reciente: Pieles recientemente bronceadas o expuestas a radiación ultravioleta artificial (solárium) en las últimas 4 semanas.\n• Enfermedades autoinmunes con fotosensibilidad severa (como el Lupus Eritematoso Sistémico).'
        }
      ],
      evidencia: [
        { 
          titulo: "Estrategias Terapéuticas y Enfoques Actuales en el Manejo Global del Melasma", 
          fuente: "Dermatologic Therapy (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/33155734/" 
        },
        { 
          titulo: "Eficacia del Ácido Tranexámico Oral y Tópico en el Tratamiento del Melasma Crónico", 
          fuente: "Journal of the American Academy of Dermatology (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/34217743/" 
        }
      ]
    }
  },
  'cicatrices-acne': {
    nombre: 'Cicatrices de Acné y Cicatrices Atróficas',
    tituloDescripcion: '¿Qué es el tratamiento de Cicatrices de Acné y Cicatrices Atróficas?',
    imagen:'/tratamientos/cicatrices-acne-cicatrices-atroficas.jpeg',
    descripcionBreve: 'Alisamos la textura y el relieve del rostro eliminando los hundimientos y marcas severas post-acné.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Subcisión / Láser / Rellenos' },
      { titulo: 'Tiempo', valor: '60 min' },
      { titulo: 'Resultados', valor: 'Progresivos (3 a 6 meses)' },
      { titulo: 'Duración', valor: 'Definitiva' }
    ],
    detalles: {
      descripcion: 'Es un enfoque médico avanzado diseñado para remodelar la textura de la piel, suavizar los hundimientos y restaurar la arquitectura cutánea dañada por procesos inflamatorios previos (como el acné severo, varicela o traumatismos). Las cicatrices atróficas se producen cuando el cuerpo, al sanar una infección o inflamación profunda, destruye el colágeno y la elastina de la dermis, generando depresiones o "hoyuelos" en la superficie de la piel.\n\nClínicamente, las clasificamos en tres tipos principales: cicatrices en picahielo (icepick), onduladas (rolling) y en furgón (boxcar). Dado que cada tipo de cicatriz afecta a una profundidad y forma distinta de la dermis, el tratamiento médico no puede ser único ni superficial; requiere una combinación de técnicas clínicas orientadas a romper las fibras que tiran de la piel hacia abajo y estimular una producción masiva de colágeno nuevo para "elevar" el tejido desde el interior.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Qué técnicas se utilizan en el tratamiento?',
          respuesta: 'Para lograr una eliminación real y profunda de las cicatrices atróficas (hundidas), el éxito radica en un abordaje médico que combine diferentes técnicas en una misma sesión o plan de tratamiento:\n\n• Terapias Inyectables Médicas: Infiltramos de forma milimétrica Ácido Hialurónico de Baja Densidad debajo de los hundimientos para elevar la superficie de forma instantánea e hidratar el tejido. Asimismo, empleamos Inductores de Colágeno en zonas con atrofia generalizada para forzar a las células a fabricar nuevas redes de colágeno propio a largo plazo.\n• Subcisión Médica: Es una maniobra manual imprescindible mediante la cual el médico introduce una microcánula o aguja especial debajo de la cicatriz para cortar y liberar las bandas de tejido fibrótico interno que "anclan" y tiran de la piel hacia abajo.\n• Aparatología Médica: Utilizamos el Láser Fraccionado para generar microcolumnas de estimulación térmica controlada en la dermis. Este estímulo activa un proceso de curación natural que destruye y reemplaza el tejido rígido de la cicatriz por fibras de colágeno y elastina completamente nuevas, devolviendo la elasticidad y la firmeza a la piel.\n• TCA CROSS: Aplicación focalizada de peelings químicos de alta potencia (como el Ácido Tricloroacético - TCA) única y exclusivamente en el fondo de las cicatrices estrechas y profundas (en picahielo) para forzar su cierre desde la base.'
        },
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuándo se ven los resultados?',
          respuesta: 'Al tratarse de una combinación de tratamientos que estimulan la regeneración celular profunda, el número de sesiones varía según la profundidad y antigüedad de las marcas, requiriendo habitualmente un protocolo de entre 3 y 5 sesiones.\n\nLos resultados combinan dos tiempos biológicos: el efecto de elevación de la piel por la subcisión y el relleno de ácido hialurónico es inmediato y visible desde el primer día. Por otro lado, la remodelación estructural definitiva (la fabricación de colágeno nuevo inducida por el láser y los activadores biológicos) se consolida de forma progresiva, alcanzando su punto óptimo entre el tercer y el sexto mes posterior a las sesiones.'
        },
        {
          pregunta: '¿Es doloroso este abordaje combinado?',
          respuesta: 'No, es un procedimiento perfectamente tolerable y seguro para el paciente. Dado que combinamos técnicas mecánicas e inyecciones profundas, antes de comenzar aplicamos crema anestésica sobre la zona a tratar y, en puntos estratégicos. Esto, sumado a los sistemas de enfriamiento cutáneo continuo que incorpora nuestra aparatología láser, reduce las molestias al mínimo.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: '• No se pueden tratar las cicatrices si el paciente presenta un brote activo e importante de acné en la misma zona, ya que los procedimientos podrían propagar la bacteria o empeorar la inflamación. Primero se estabiliza la patología activa.\n• Interrumpe el uso de cremas con retinol, ácido glicólico o salicílico en tu rutina domiciliaria entre 3 y 5 días antes de tu cita.\n• Exposición solar cero: No acudas al tratamiento con la piel recientemente bronceada, congestionada o quemada por el sol, ya que es una contraindicación temporal para el uso de tecnologías físicas.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Tras una sesión multimodal, la piel experimentará un proceso de curación normal caracterizado por enrojecimiento, sutil inflamación y la aparición de pequeños hematomas (por las infiltraciones) o microcostras finas (por el láser). En casa deberás seguir estas pautas:\n\n• Fotoprotección solar absoluta: Aplica protector solar de amplio espectro (SPF 50+) cada 2-3 horas todos los días del año. La piel en fase de regeneración es extremadamente delicada y el sol directo generaría manchas oscuras de forma inmediata.\n• Hidratación y reparación intensa: Aplica abundante crema regeneradora con activos barrera (cicatrizantes, ácido hialurónico o ceramidas) pautada en consulta durante los primeros 5-7 días.\n• Higiene delicada y sin fricción: Lava la zona con un limpiador suave y agua templada. Seca a toques sutiles con una toalla limpia, sin frotar.\n• Evita saunas, spas, piscinas o ejercicio físico de alta intensidad durante las primeras 48-72 horas para prevenir irritaciones o complicaciones infecciosas.\n• No manipules la piel: Si se forman finas costras secas, déjalas caer solas de forma natural; está prohibido rascar o usar exfoliantes físicos.'
        },
        {
          pregunta: '¿De qué depende la duración de los resultados?',
          respuesta: 'Los resultados estructurales logrados sobre el relieve de las cicatrices atróficas son permanentes y definitivos. El colágeno nuevo que fabrica tu propio organismo para reestructurar la dermis y el tejido que se eleva tras romper mecánicamente las bandas fibróticas internas no se reabsorben ni desaparecen con el tiempo; pasan a formar parte de la estructura fija de tu piel para siempre.\n\nLa única excepción es el volumen aportado por el ácido hialurónico de relleno puro, el cual se degradará de forma natural a los 9-12 meses, pero habiendo dejado ya detrás un puente de colágeno propio de alta calidad que mantendrá la zona notablemente más lisa a largo plazo.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del tratamiento?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Acné inflamatorio activo severo en la misma zona anatómica que se va a tratar.\n• Tendencia demostrada a la cicatrización queloide o hipertrófica severa.\n• Infecciones activas en la zona: Presencia de brotes de herpes labial o infecciones bacterianas abiertas el día de la cita.\n• Consumo reciente de retinoides orales (Isotretinoína): Se evaluará minuciosamente en consulta el tiempo de seguridad transcurrido desde la última toma antes de realizar subcisiones.'
        }
      ],
      evidencia: [
        { 
          titulo: "Terapia Combinada para el Tratamiento de Cicatrices de Acné Atróficas", 
          fuente: "Dermatologic Surgery (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/24719068/" 
        },
        { 
          titulo: "Subcisión y Relleno Dérmico en Cicatrices de Acné: Eficacia Clínica", 
          fuente: "Journal of Cosmetic Dermatology (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/30345631/" 
        }
      ]
    }
  },
  'cicatrices-queloides': {
    nombre: 'Cicatrices Queloides y Cicatrices Hipertróficas',
    tituloDescripcion: '¿Qué técnicas se utilizan en el Tratamiento de Cicatrices Queloides e Hipertróficas?',
    imagen: '/tratamientos/cicatriz-queloide.jpg',
    descripcionBreve: 'Aplanamos y blanqueamos cicatrices quirúrgicas abultadas y duras para hacerlas casi imperceptibles.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Infiltración intralesional + Láser' },
      { titulo: 'Tiempo', valor: '20 min' },
      { titulo: 'Resultados', valor: 'Progresivos (meses)' },
      { titulo: 'Duración', valor: 'Definitiva tras aplanamiento' }
    ],
    detalles: {
      descripcion: 'El éxito en la reducción y remodelación de las cicatrices queloides e hipertróficas se basa en un abordaje médico multimodal. Al tratarse de lesiones causadas por una producción excesiva y descontrolada de colágeno, el objetivo clínico no es estimular la piel, sino aplanar el tejido, frenar la actividad celular anómala y eliminar los vasos sanguíneos que alimentan la cicatriz. Para ello, combinamos de forma sinérgica las siguientes técnicas en la consulta:\n\n• Infiltraciones Médicas Intralesionales: Inyectamos directamente en el núcleo de la cicatriz fármacos moduladores que actúan frenando de forma drástica la actividad de los fibroblastos, bloqueando la producción de colágeno anómalo y ablandando la estructura rígida de la cicatriz para lograr su aplanamiento progresivo.\n\n• Aparatología Médica Vascular (Láser Vascular / IPL Médica): Las cicatrices queloides están densamente vascularizadas, lo que provoca su color rojizo, el picor y el dolor. Utilizamos plataformas lumínicas médicas dirigidas selectivamente a la hemoglobina para colapsar y cerrar esos vasos sanguíneos aberrantes, cortando el suministro de nutrientes a la cicatriz y eliminando los síntomas molestos de forma inmediata.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuándo se ven los resultados?',
          respuesta: 'El tratamiento de las cicatrices hipertróficas y queloides es un proceso médico crónico que requiere paciencia debido a la alta resistencia de este tejido. Por lo general, se pauta un protocolo de entre 3 y 6 sesiones.\n\nLos resultados se aprecian de forma progresiva. El aplanamiento del volumen, el ablandamiento del tejido rígido y el aclaramiento del color rojizo hacia un tono similar al de la piel sana se consolidan de manera evidente a partir de la tercera o cuarta sesión.'
        },
        {
          pregunta: '¿Es doloroso este abordaje combinado?',
          respuesta: 'El tejido de un queloide es denso y rígido, por lo que la infiltración directa puede generar una sensación transitoria de presión intensa o escozor local.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para acudir a la consulta con las máximas garantías de seguridad y eficacia, te recomendamos seguir estas pautas:\n\n• Sin infecciones activas: La piel perilesional debe estar completamente sana, sin presencia de foliculitis, heridas abiertas o infecciones bacterianas el día de la cita.\n• Es fundamental comunicar al médico si tienes antecedentes familiares de queloides, si la cicatriz se originó por una cirugía, una quemadura o un piercing, y si ha reaccionado de forma negativa a tratamientos previos.\n• No expongas la cicatriz a la radiación solar directa los días previos a la sesión si se van a emplear tecnologías físicas lumínicas.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer después de la sesión?',
          respuesta: 'Tras el tratamiento es habitual que la cicatriz presente una inflamación transitoria, un tono blanquecino o amoratado. Los cuidados domiciliarios esenciales son:\n\n• Lava la zona diariamente con agua templada y un jabón neutro antiséptico. Seca a toques muy suaves con una gasa estéril, sin frotar.\n• Si se forma una ampolla, una costra o una descamación, no la rompas ni la arranques bajo ningún concepto; déjala evolucionar de forma natural para evitar infecciones o reactivaciones de la cicatriz.\n• Fotoprotección solar absoluta: Si la cicatriz está en una zona expuesta (rostro, cuello, escote), aplica protector solar de amplio espectro (SPF 50+) cada 2 horas. El sol sobre una cicatriz tratada generará una mancha oscura (hiperpigmentación) permanente.'
        },
        {
          pregunta: '¿Los resultados obtenidos son definitivos o puede volver a salir?',
          respuesta: 'Los resultados sobre las cicatrices hipertróficas suelen ser definitivos y estables una vez que se logra su aplanamiento. Sin embargo, en el caso de los queloides, debido a su fuerte base genética e inmunológica, existe un riesgo inherente de recidiva (que la cicatriz vuelva a crecer con el tiempo).\n\nPara minimizar este riesgo al mínimo, en nuestra clínica no realizamos extirpaciones quirúrgicas aisladas (las cuales tienen una tasa de rebote del 80%), sino que empleamos el abordaje médico multimodal destructivo y modulador aquí descrito. Una vez aplanado el queloide, establecemos un calendario estricto de revisiones periódicas durante el primer año para detectar cualquier signo de reactivación vascular temprana y frenarlo de inmediato, logrando así un control del queloide a largo plazo en la gran mayoría de los pacientes.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del tratamiento?',
          respuesta: '• Embarazo y periodo de lactancia: El uso de fármacos intralesionales está contraindicado en estas etapas debido a su absorción y perfil de seguridad fetal.\n• Infecciones activas locales: Presencia de procesos infecciosos cutáneos activos en la zona a tratar el día de la cita.\n• Inmunosupresión severa o patologías sistémicas graves no controladas que comprometan la respuesta de cicatrización normal del organismo.\n• Pieles con bronceado reciente muy intenso: En el caso de que la sesión incluya el uso asociado de plataformas láser o lumínicas.'
        }
      ],
      evidencia: [
        { 
          titulo: "Manejo Terapéutico de Queloides y Cicatrices Hipertróficas", 
          fuente: "Plastic and Reconstructive Surgery (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/24487441/" 
        },
        { 
          titulo: "Uso de Triamcinolona Intralesional y Láser Vascular en Cicatrices Patológicas", 
          fuente: "Dermatologic Clinics (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/31682121/" 
        }
      ]
    }
  },
  // --- 5. LÁSER Y PLATAFORMA LUMÍNICA (NUEVOS PROTOCOLOS NORDLYS CANDELA) ---
  'acne-activo-vl555': {
    nombre: 'Acné Activo e Inflamatorio (VL 555)',
    tituloDescripcion: '¿Qué es el tratamiento de Acné Activo con el sistema VL 555 de Nordlys?',
    imagen: '/tratamientos/laser-acne-activo.jpeg',
    descripcionBreve: 'Frena el brote inflamatorio, destruye la bacteria del acné y reduce las rojeces post-lesionales en tiempo récord.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Tecnología', valor: 'Luz Pulsada Estrecha (VL 555)' },
      { titulo: 'Tiempo', valor: '20-30 min' },
      { titulo: 'Resultados', valor: 'A partir de 48-72h' },
      { titulo: 'Sesiones', valor: '3 a 5 sesiones' }
    ],
    detalles: {
      descripcion: 'Es un procedimiento médico avanzado que utiliza la tecnología de Luz Pulsada de Banda Estrecha (aplicador VL 555) para controlar, reducir y frenar el acné inflamatorio en fase activa. Este sistema emite una longitud de onda de alta precisión que penetra en la piel con un doble objetivo biológico inmediato:\n\n• Efecto Bactericida Potente: La luz interactúa con las porfirinas (sustancias producidas por la propia bacteria Cutibacterium acnes), desencadenando una reacción química interna que destruye la bacteria desde el interior del poro de forma selectiva.\n• Acción Antiinflamatoria y Vascular: El aplicador VL 555 capta la hemoglobina de los microvasos que rodean la glándula sebácea lo que reduce el aporte de sangre a la glándula, disminuyendo la inflamación dolorosa, el tamaño de las lesiones quísticas y acelerando la desaparición de las marcas rojas postinflamatorias.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuándo se notan los efectos?',
          respuesta: 'El protocolo médico estándar consta de entre 3 y 5 sesiones, las cuales se programan de forma estricta cada 2 o 3 semanas (un intervalo más corto que en otros tratamientos lumínicos debido al ciclo de replicación bacteriana).\n\nLos resultados son muy rápidos y agradecidos para el paciente: la disminución de la inflamación, el aplanamiento de las lesiones dolorosas y el control del exceso de grasa (sebo) comienzan a apreciarse a partir de las 48-72 horas posteriores a la primera sesión. La remisión del brote activo y la recuperación del tono homogéneo de la piel se consolidan visiblemente al finalizar la tercera sesión.'
        },
        {
          pregunta: '¿Es doloroso el procedimiento con el aplicador VL 555?',
          respuesta: 'No, es un tratamiento perfectamente tolerable. Durante la sesión se aplica un gel conductor frío sobre la zona y el médico realiza los disparos de luz. El paciente percibe un destello brillante y una sensación de calor local breve.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de acudir a mi sesión?',
          respuesta: 'Para garantizar la seguridad clínica del tratamiento y evitar quemaduras o efectos adversos, es fundamental cumplir con los siguientes requisitos previos:\n\n• Exposición solar cero: La piel no puede estar recientemente bronceada, congestionada o expuesta al sol en las 4 semanas previas. La luz debe concentrarse en la inflamación y la bacteria, no en la melanina de una piel bronceada.\n• Suspende tratamientos irritantes: Interrumpe el uso de cremas con retinol, ácido salicílico, glicólico o peróxido de benzoilo entre 3 y 5 días antes de acudir a la clínica.\n• Medicación: Si estás bajo tratamiento con antibióticos orales típicos para el acné (como la doxiciclina o la minociclina), debes comunicarlo obligatoriamente en la consulta, ya que son altamente fotosensibilizantes y obligan a reprogramar la sesión o ajustar los parámetros médicos.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer en casa tras la sesión?',
          respuesta: 'Al salir de la consulta, la piel presentará un eritema (rojez) transitorio y una sutil sensación de calor que desaparece en pocas horas. El paciente puede reincorporarse a su vida diaria de inmediato siguiendo estas pautas de cuidado:\n\n• Fotoprotección solar absoluta (Obligatoria): Aplica un protector solar médico de amplio espectro (SPF 50+), preferiblemente de textura fluida, oil-free y no comedogénica, cada 3 horas. La radiación ultravioleta sobre una piel tratada e inflamada causaría manchas oscuras definitivas.\n• Higiene médica suave: Lava el rostro dos veces al día con agua templada y el limpiador específico que indique tu médico en la consulta. Seca el rostro a toques suaves con una toalla limpia o papel, sin frotar.\n• Aplica únicamente las emulsiones calmantes, seborreguladoras o reparadoras pautadas específicamente por el médico en la consulta.\n• Evita el calor y la oclusión: Durante las primeras 48 horas, pospone el uso de maquillajes pesados, la asistencia a saunas, spas o la práctica de ejercicio físico de alta intensidad que provoque sudoración excesiva.'
        },
        {
          pregunta: '¿Los resultados del tratamiento son definitivos?',
          respuesta: 'El tratamiento con el aplicador VL 555 es extremadamente eficaz para frenar de golpe el brote inflamatorio, destruir la carga bacteriana y restaurar la salud cutánea. Sin embargo, el acné es una patología médica de origen multifactorial (influenciada por hormonas, genética y estilo de vida).\n\nPor lo tanto, para que los resultados se mantengan estables en el tiempo y evitar futuros brotes, el tratamiento en clínica debe complementarse obligatoriamente con una rutina de mantenimiento domiciliaria estricta de grado médico y, en ocasiones, con sesiones de mantenimiento espaciadas a lo largo del año según la evolución clínica del paciente.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones de este tratamiento lumínico?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Pieles recientemente bronceadas o que prevean una exposición solar intensa de forma inmediata (meses de verano).\n• Consumo activo de Isotretinoína oral: Se evaluará rigurosamente el estado de la barrera cutánea y las dosis antes de realizar el tratamiento, siguiendo los protocolos clínicos actualizados.\n• Infecciones activas concomitantes: Presencia de brotes de herpes labial o infecciones bacterianas abiertas (no acnéicas) en la zona de tratamiento el día de la cita.\n• Uso de medicación fotosensibilizante activa que no pueda ser suspendida.'
        }
      ],
      evidencia: [
        { 
          titulo: "Eficacia de la Luz Pulsada Intensa en el Acné Inflamatorio Activo", 
          fuente: "Dermatologic Surgery (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/26431214/" 
        }
      ]
    }
  },
  'fotorejuvenecimiento-nordlys': {
    nombre: 'Fotorejuvenecimiento (PR 530 / VL 555)',
    tituloDescripcion: '¿Qué es el Fotorejuvenecimiento?',
    imagen: '/tratamientos/laser-fotorejuvenecimiento.jpeg',
    descripcionBreve: 'Devuelve la luz y unifica el tono de tu rostro eliminando manchas solares y capilares en una sola sesión.',
    antesDespues: { 
      antes: "/casos/fotorejuvenecimiento-antes-01.jpg", 
      despues: "/casos/fotorejuvenecimiento-despues-01.jpg"
    },
    parametros: [
      { titulo: 'Tecnología', valor: 'IPL Banda Estrecha' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: '7 - 14 días' },
      { titulo: 'Sesiones', valor: '2 a 4 sesiones' }
    ],
    detalles: {
      descripcion: 'El Fotorrejuvenecimiento es un tratamiento médico-estético no invasivo diseñado para restaurar la homogeneidad del rostro, eliminar las imperfecciones de color (manchas y rojeces) y devolver la luminosidad natural a la piel en una misma sesión. A diferencia de los sistemas lumínicos tradicionales, este procedimiento se realiza con la plataforma médica de vanguardia Nordlys de Candela, utilizando su tecnología patentada de Luz Pulsada de Banda Estrecha (SWT).\n\nEsta tecnología actúa emitiendo pulsos de luz filtrados con una precisión absoluta. La energía lumínica atraviesa la superficie de la piel sin dañarla y es absorbida de forma selectiva por dos objetivos específicos (cromóforos): la melanina de las manchas solares (léntigos) y la hemoglobina de las rojeces, capilares dilatados o cuperosis. Al impactar sobre ellos, los destruye por un mecanismo térmico regulado para que el propio organismo los elimine de forma natural, logrando al mismo tiempo un estímulo lumínico que cierra el poro y mejora la calidad global de la piel.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuándo se ven los resultados?',
          respuesta: 'Al tratarse de una tecnología médica de banda estrecha de alta concentración energética, los resultados se aprecian de forma rápida y con un número menor de sesiones que con plataformas convencionales. Por lo general, el protocolo estándar requiere de 2 a 4 sesiones, espaciadas de forma estricta entre 4 y 6 semanas.\n\n• A partir de la primera semana: Se evidencia un cambio en la luminosidad del rostro. La piel pierde ese tono "apagado" o cetrino, los poros se minimizan y las rojeces difusas disminuyen notablemente.\n• Entre los 10 y 14 días: Las manchas solares tratadas terminan de descamar, revelando una piel con un tono completamente unificado, limpio y rejuvenecido.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento seguro y perfectamente tolerable. Durante la sesión, al emitirse el pulso de luz, el paciente percibe un destello brillante acompañado de una sensación térmica muy sutil. La avanzada ingeniería de la plataforma Nordlys optimiza la entrega de energía para que no exista calor residual innecesario, lo que garantiza el máximo confort sin necesidad de usar anestesia tópica.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de acudir a la clínica?',
          respuesta: 'Para garantizar la máxima seguridad durante el procedimiento y evitar efectos adversos en la coloración de la piel, es indispensable cumplir las siguientes pautas previas:\n\n• Exposición solar cero (Obligatorio): No puedes realizarte el fotorejuvenecimiento si has tomado el sol recientemente, si presentas un bronceado activo o si has usado autobronceadores. La piel debe acudir a la cita en su tono basal para que la luz distinga perfectamente la mancha o el capilar del tejido sano.\n• Suspende activos intensos: Interrumpe el uso de cremas con retinol, ácido glicólico y salicílico en la zona a tratar entre 3 y 5 días antes de tu sesión.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué debo hacer en casa?',
          respuesta: 'El fotorejuvenecimiento destaca por tener un downtime (tiempo de recuperación) prácticamente nulo, permitiéndote reincorporarte a tu actividad laboral y social de forma inmediata al salir de la consulta. La evolución normal de la piel en casa requiere los siguientes cuidados:\n\n• Evolución normal de las manchas: Es completamente normal y esperable que las manchas solares tratadas se oscurezcan notablemente inmediatamente después de la sesión, adquiriendo un tono marrón oscuro o grisáceo. En los días posteriores, se formará una microcostra extremadamente fina superficial (textura "de lija").\n• No manipules la piel: Deja que la fina descamación o microcostras se desprendan solas de forma natural (suele tardar entre 5 y 7 días en el rostro). Está estrictamente prohibido usar exfoliantes físicos o frotar con la toalla al secarte.\n• Fotoprotección solar absoluta (Innegociable): Aplica protector solar de amplio espectro (SPF 50+) cada 2-3 horas todos los días del año. La piel tratada está renovándose y la radiación solar directa anularía el efecto aclarante.\n• Hidratación y cosmética suave: Aplica la crema regeneradora y calmante pautada en la consulta durante los primeros días. Evita el maquillaje pesado durante las primeras 24 horas y pospone el uso de saunas o ejercicio físico intenso durante 48 horas.'
        },
        {
          pregunta: '¿Los resultados obtenidos son definitivos?',
          respuesta: 'Sí, la eliminación de las manchas solares, léntigos y capilares dilatados tratados con la tecnología Nordlys es definitiva. El pigmento destruido y el vaso colapsado son eliminados por el organismo y no vuelven a aparecer.\n\nSin embargo, debes recordar que la piel tiene "memoria solar" debido al daño actínico acumulado a lo largo de tu vida y que el envejecimiento fisiológico continúa. Si no mantienes unos hábitos estrictos de fotoprotección diaria, el sol volverá a activar los melanocitos de las zonas contiguas o dilatará nuevos capilares. El éxito a largo plazo y la permanencia de ese rostro luminoso dependen directamente de tu compromiso con el protector solar diario.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del tratamiento?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Pieles recientemente bronceadas o que prevean una exposición solar intensa de forma inmediata (por ejemplo, vacaciones de verano programadas).\n• Uso de fármacos fotosensibilizantes de forma activa (ciertos antibióticos, antiinflamatorios o tratamientos retinoideos).\n• Infecciones activas en la zona: Presencia de brotes de herpes labial activo o infecciones bacterianas abiertas el día de la sesión en la clínica.\n• Lesiones cutáneas sospechosas: Cualquier mancha que presente criterios dermatoscópicos de atipia o malignidad no se tratará con fines estéticos y se derivará para estudio histológico.'
        }
      ],
      evidencia: [
        { 
          titulo: "Evaluación del Fotorejuvenecimiento con IPL de Banda Estrecha", 
          fuente: "Journal of Cutaneous and Aesthetic Surgery (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/22457534/" 
        }
      ]
    }
  },
  'rosacea-nordlys': {
    nombre: 'Rosácea, Cuperosis y Rojeces (VL 555)',
    tituloDescripcion: '¿Qué es el tratamiento de Rosácea y Cuperosis con el sistema VL 555 de Nordlys?',
    imagen: '/tratamientos/rosacea-cuperosis-rojeces.jpeg',
    descripcionBreve: 'Colapsamos de forma selectiva la red capilar dilatada para apagar el enrojecimiento crónico facial.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Tecnología', valor: 'Nordlys VL 555' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'Progresivos' },
      { titulo: 'Sesiones', valor: '3 a 5 sesiones' }
    ],
    detalles: {
      descripcion: 'El tratamiento de la patología vascular facial con el sistema VL 555 de Nordlys es un procedimiento médico de alta precisión diseñado para erradicar el enrojecimiento crónico, las arañas vasculares (telangiectasias) y los síntomas de la rosácea.\n\nEl aplicador VL 555 emite una luz pulsada de banda estrecha optimizada con una longitud de onda específica que es absorbida exclusivamente por la hemoglobina (el pigmento rojo de la sangre). Al impactar sobre los vasos sanguíneos dilatados o "aberrantes" que causan la rojez, la energía lumínica se convierte en energía térmica, provocando un colapso y sellado controlado del vaso (fototermólisis selectiva). Esto permite eliminar la red vascular visible y reducir el eritema difuso, logrando un tono de piel uniforme, saludable y sin la inflamación característica de esta condición.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuándo veré resultados?',
          respuesta: 'La rosácea es una condición vascular crónica, por lo que el protocolo médico se diseña de forma personalizada según el grado de afectación. Por lo general, se requieren entre 3 y 5 sesiones, espaciadas cada 4 semanas.\n\nLos resultados son visibles de forma progresiva:\n• Desde la primera sesión: Es frecuente observar una reducción inmediata de la intensidad del enrojecimiento y una sensación de "piel más calmada".\n• A partir de la segunda/tercera sesión: Las telangiectasias (arañas vasculares) más marcadas comienzan a desvanecerse y el eritema persistente se atenúa drásticamente.\n• Al finalizar el protocolo: Se logra una estabilización clínica donde la piel recupera su tono natural y, lo más importante, se reduce la hiperreactividad vascular ante los factores desencadenantes habituales (cambios de temperatura, estrés, comidas picantes, etc.).'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'La tecnología Nordlys destaca por su confort. El tratamiento se siente como un leve hormigueo cálido ya que el sistema incorpora un enfriamiento cutáneo continuo por el cabezal que protege la epidermis y minimiza la sensación térmica.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Como en todos los tratamientos lumínicos médicos, la seguridad es nuestra prioridad. Para acudir a la consulta debes seguir estas pautas:\n\n• Exposición solar prohibida: Es indispensable no tener la piel bronceada ni haber estado expuesta al sol en las 4 semanas previas. La luz debe detectar el vaso sanguíneo, no la melanina superficial de un bronceado.\n• Suspende irritantes: Evita el uso de productos cosméticos muy activos (ácidos, retinol, exfoliantes físicos) en las 48 horas previas a la cita.\n• Informa de tu medicación: Comunica al médico cualquier fármaco que estés tomando, especialmente si son tratamientos para la presión arterial o vasodilatadores, ya que pueden influir en el comportamiento vascular de tu piel.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer en casa?',
          respuesta: 'El post-tratamiento del VL 555 es muy agradecido, permitiendo el retorno a la vida social y laboral de forma inmediata. La piel puede presentar un leve eritema o una sutil hinchazón (edema) que remite en pocas horas. Los cuidados esenciales son:\n\n• Fotoprotección solar absoluta: Debes usar protector solar físico SPF 50+ cada 2-3 horas durante todo el tratamiento. La piel con rosácea es extremadamente fotosensible y el sol reactiva la inflamación vascular.\n• Utiliza limpiadores muy suaves y aplica únicamente las cremas calmantes o reparadoras prescritas en consulta, libres de perfumes y alcoholes.\n• Durante las primeras 48 horas, evita el ejercicio intenso, las saunas, el consumo de alcohol y las comidas muy picantes. El objetivo es mantener la calma vascular post-sesión.\n• Si aparece alguna pequeña costra puntual (más habitual en el tratamiento de telangiectasias marcadas), no la toques; se desprenderá sola en pocos días.'
        },
        {
          pregunta: '¿El resultado es definitivo?',
          respuesta: 'El tratamiento con el aplicador VL 555 es altamente eficaz para cerrar los vasos sanguíneos dañados, los cuales desaparecen y no vuelven a aparecer. No obstante, la rosácea es una condición con base genética y un componente inflamatorio sistémico. Esto significa que, con el paso de los años, el organismo puede desarrollar nuevos capilares dilatados debido a factores externos (sol, estilo de vida, cambios hormonales).\n\nPor eso, el éxito a largo plazo se basa en realizar 1 o 2 sesiones de mantenimiento anuales para controlar cualquier pequeña reactivación vascular temprana antes de que se vuelva un problema clínico evidente.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del tratamiento?',
          respuesta: 'Este protocolo se pospondrá o adaptará en caso de presentar:\n\n• Embarazo y lactancia.\n• Infecciones activas: Cualquier proceso infeccioso o herida abierta en la zona a tratar.\n• Consumo de fotosensibilizantes: Medicamentos que aumenten la sensibilidad de la piel a la luz (antibióticos, retinoides, etc.).\n• Rosácea severa descompensada: Si existe un brote agudo con pústulas purulentas masivas, primero realizaremos un tratamiento médico de choque (tópico/oral) para estabilizar la piel antes de aplicar el láser.'
        }
      ],
      evidencia: [
        { 
          titulo: "Terapias Vasculares Lumínicas en el Manejo de la Rosácea", 
          fuente: "Lasers in Surgery and Medicine (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/22159832/" 
        }
      ]
    }
  },
  'light-bright-nordlys': {
    nombre: 'Rejuvenecimiento Global - Protocolo Light & Bright',
    tituloDescripcion: '¿Qué es el Tratamiento Light & Bright?',
    imagen: '/tratamientos/laser-fotorejuvenecimiento-global.jpeg',
    descripcionBreve: 'Fusión sinérgica para renovar el tono, borrar manchas y remodelar la firmeza de la piel de una sola vez.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Tecnología', valor: 'VL 555 + Frax 1550/1940' },
      { titulo: 'Tiempo', valor: '60 min' },
      { titulo: 'Resultados', valor: 'Progresivos (Semanas)' },
      { titulo: 'Sesiones', valor: '2 a 4 sesiones' }
    ],
    detalles: {
      descripcion: 'Light & Bright es un protocolo médico de rejuvenecimiento facial de alta gama diseñado para devolver la luminosidad extrema al rostro, unificar el tono cutáneo y remodelar la estructura de la piel en una misma sesión. Este tratamiento premium combina de forma sinérgica dos de las tecnologías lumínicas más potentes y precisas del sector médico-estético.\n\nEl tratamiento actúa bajo un concepto de doble acción biológica. Por un lado, la tecnología de Luz Pulsada de Banda Estrecha se dirige selectivamente a los problemas de color de la piel, eliminando manchas solares, léntigos, rojeces difusas y capilares dilatados (cuperosis). Por otro lado, en el mismo procedimiento, el Láser Fraccionado No Ablativo penetra profundamente en la dermis para estimular una producción masiva de colágeno y elastina nuevos. El resultado es un rejuvenecimiento integral: una piel visiblemente más clara, homogénea, firme, con poros minimizados y un efecto de luminosidad (bright) radiante.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuándo se ven los resultados?',
          respuesta: 'El aumento de la luminosidad y el aclaramiento de las rojeces y manchas superficiales comienzan a apreciarse a partir de la primera semana posterior a la sesión. La mejora en la firmeza, la textura de la piel y la reducción de líneas de expresión se consolida de manera progresiva entre el segundo y el tercer mes, coincidiendo con el ciclo de fabricación de colágeno nuevo.\n\nPara lograr una transformación global y duradera de la calidad de la piel, el protocolo estándar pauta entre 2 y 4 sesiones, espaciadas de forma estricta cada 4 semanas. Tras una valoración médica personalizada, diseñaremos el calendario óptimo para tu tipo de piel.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento y cómo es la experiencia?',
          respuesta: 'No, es un procedimiento perfectamente tolerable y seguro. Durante la fase de Luz Pulsada, el paciente percibe destellos lumínicos acompañados de una sutil sensación de calor transitorio. En la fase del Láser Fraccionado, para garantizar el máximo confort, aplicamos previamente una crema anestésica de alta potencia médica en la zona a tratar. Además, la plataforma incorpora un sistema de enfriamiento cutáneo continuo que protege la epidermis en todo momento, reduciendo las molestias al mínimo y permitiendo una experiencia clínica cómoda.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de la sesión?',
          respuesta: 'Para garantizar una aplicación segura y evitar respuestas inflamatorias anómalas por el uso de tecnologías lumínicas, es fundamental seguir estas pautas:\n\n• Exposición solar cero: No puedes realizarte el tratamiento si has tomado el sol recientemente o si tu piel presenta un bronceado activo o quemaduras. La piel debe acudir a la cita en su tono basal.\n• Suspende activos renovadores: Interrumpe el uso de cremas con retinol, ácido glicólico, salicílico o fórmulas despigmentantes intensas entre 3 y 5 días antes de tu cita en la clínica.\n• Informa de tus medicamentos: Comunica al médico cualquier fármaco que consumas de forma habitual, especialmente si se trata de medicamentos fotosensibilizantes o tratamientos hormonales.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer en casa?',
          respuesta: 'Una de las grandes ventajas del protocolo Light & Bright es que, al emplear un láser no ablativo, la superficie de la piel permanece intacta, lo que reduce el tiempo de recuperación al mínimo. Inmediatamente después de la sesión, la piel presentará un eritema (rojez) y una ligera sensación de calor similar a una leve quemadura solar que remite en 24-48 horas. En casa deberás seguir estos cuidados:\n\n• Fotoprotección solar absoluta (Obligatoria): Aplica protector solar de amplio espectro (SPF 50+) cada 2-3 horas todos los días del año. La radiación ultravioleta sobre la piel tratada anularía los efectos despigmentantes y generaría nuevas marcas.\n• Aparición de microcostras: En los días posteriores, las manchas solares tratadas se oscurecerán sutilmente y darán paso a unas microcostras extremadamente finas (del tamaño de un grano de arena) que se desprenden solas en 5-7 días. Está prohibido rascar, frotar o usar exfoliantes físicos; deben caer de forma natural.\n• Hidratación y reparación: Aplica la crema hidratante y regeneradora pautada en consulta dos o tres veces al día para confortar la barrera cutánea.\n• Pospone el calor extremo: Evita saunas, spas, baños de vapor o ejercicio físico de alta intensidad durante las primeras 48 horas tras la sesión para evitar una vasodilatación excesiva.'
        },
        {
          pregunta: '¿Los resultados obtenidos son definitivos?',
          respuesta: 'Los resultados logrados sobre la estructura de la piel (el colágeno nuevo que aporta firmeza y cierra poros) y la eliminación de las manchas solares y capilares existentes son duraderos y estables. Sin embargo, la piel es un órgano vivo que sigue envejeciendo de forma natural y acumulando el impacto del estilo de vida y la radiación solar diaria.\n\nPor este motivo, para mantener ese tono perfectamente homogéneo, la firmeza y la luminosidad radiante a lo largo de los años, se recomienda realizar 1 sesión de mantenimiento anual (preferiblemente durante los meses de otoño o invierno), combinada con una rutina de cosmética médica domiciliaria y fotoprotección estricta diaria.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del protocolo?',
          respuesta: 'Este procedimiento médico avanzado se pospondrá o evitará en caso de presentar:\n\n• Embarazo y periodo de lactancia.\n• Pieles recientemente bronceadas o que prevean una exposición solar intensa de forma inmediata en las semanas posteriores.\n• Infecciones activas en la zona: Presencia de brotes de herpes labial activo o infecciones bacterianas abiertas el día de la cita.\n• Uso de fármacos fotosensibilizantes severos de forma activa (como ciertos antibióticos o tratamientos retinoideos orales).\n• Antecedentes de cicatrización queloide severa.'
        }
      ],
      evidencia: [
        { 
          titulo: "Eficacia Clínica del Protocolo Combinado Light & Bright en Fotoenvejecimiento", 
          fuente: "Journal of Cosmetic Dermatology (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/30672076/" 
        }
      ]
    }
  },
  'resurfacing-frax': {
    nombre: 'Resurfacing Facial No Ablativo (Láser Frax)',
    tituloDescripcion: '¿Qué es el Resurfacing Facial No Ablativo y qué tecnología se utiliza?',
    imagen: imgProvisional,
    descripcionBreve: 'Reseteo celular profundo para alisar arrugas y textura sin necesidad de bajas médicas prolongadas.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Tecnología', valor: 'Frax 1550 / Frax 1940' },
      { titulo: 'Tiempo', valor: '45-60 min' },
      { titulo: 'Resultados', valor: 'A partir de 4 semanas' },
      { titulo: 'Sesiones', valor: '3 a 4 sesiones' }
    ],
    detalles: {
      descripcion: 'El Resurfacing Facial No Ablativo es un procedimiento médico diseñado para renovar la textura de la piel, eliminar arrugas finas y medias, y corregir los signos del envejecimiento cutáneo sin alterar la superficie de la piel. A diferencia de los láseres ablativos tradicionales que evaporan las capas externas de la epidermis provocando largas recuperaciones, este tratamiento consigue un "reseteo" celular profundo manteniendo la capa más superficial de la piel completamente intacta.\n\nPara lograr este nivel de eficacia y seguridad, en nuestra clínica utilizamos la plataforma médica el Láser Fraccionado Frax de Candela, operando con dos longitudes de onda de vanguardia según las necesidades de cada paciente:\n• Frax 1550: Penetra de forma profunda en la dermis para estimular de forma masiva los fibroblastos y forzar la creación de colágeno estructural, ideal para tratar arrugas y firmeza.\n• Frax 1940: Actúa en las capas más superficiales y en la unión dermoepidérmica para afinar la textura, unificar el tono y cerrar poros dilatados de forma inmediata.\n\nLa tecnología emite miles de haces microscópicos de forma fraccionada, generando microcolumnas de estimulación térmica rodeadas de tejido sano. Esto activa un proceso de curación natural que reemplaza la piel envejecida por un tejido nuevo, elástico y visiblemente rejuvenecido.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuándo se aprecian los resultados?',
          respuesta: 'Al tratarse de una tecnología fraccionada no ablativa que respeta al máximo la integridad cutánea, los resultados se consiguen de manera gradual y acumulativa. El protocolo estándar pauta entre 3 y 4 sesiones, realizadas con un intervalo de 4 semanas entre cada una.\n\nLos resultados combinan dos fases:\n• Resultados Tempranos: A partir de la primera semana, una vez finalizado el sutil proceso de renovación superficial, el paciente percibe una piel notablemente más lisa, suave al tacto, con poros más cerrados y un tono más homogéneo.\n• Resultados Estructurales: El verdadero efecto de tensado, firmeza y difuminado de arrugas alcanza su punto óptimo entre el segundo y el tercer mes tras finalizar el protocolo, periodo en el que el organismo completa la síntesis de nuevas redes de colágeno y elastina (neocolagénesis).'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'El Resurfacing Fraccionado No Ablativo es un procedimiento muy tolerable y seguro. Dado que la energía trabaja a nivel de la dermis, antes de iniciar la sesión aplicamos una crema anestésica de alta potencia médica en la zona a tratar para garantizar el confort absoluto del paciente. Durante el procedimiento, la pieza de mano de la plataforma Candela asocia un sistema continuo de enfriamiento cutáneo por aire subcero que insensibiliza la piel y mitiga el impacto térmico. El paciente percibe únicamente un hormigueo cálido transitorio, haciendo que la experiencia en la camilla sea cómoda y tranquila.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de acudir a la sesión?',
          respuesta: 'La preparación previa en medicina estética es fundamental para maximizar los resultados del sistema Frax y garantizar la máxima seguridad:\n\n• Exposición solar prohibida: Es indispensable no haber tomado el sol ni presentar un bronceado activo o quemaduras durante las 4 semanas previas al tratamiento. La piel debe acudir en su tono basal.\n• Suspende activos renovadores: Interrumpe el uso de cremas con retinol, ácido glicólico o salicílico entre 3 y 5 días antes de tu cita en la clínica.\n• Profilaxis antiviral: Si tienes tendencia a sufrir brotes de herpes labial, el equipo médico te prescribirá una pauta preventiva por vía oral días antes de la sesión.'
        },
        {
          pregunta: '¿Cómo es la recuperación en casa?',
          respuesta: 'La gran ventaja del Resurfacing No Ablativo con Frax de Candela es que el tiempo de recuperación (downtime) es mínimo, permitiéndote retomar tu vida laboral y social de forma casi inmediata.\n\nInmediatamente después de la sesión, la piel presentará un eritema (rojez) moderado, una ligera inflamación y una sensación de calor similar a la de un día de sol intenso, síntomas que remiten en 24-48 horas. Los cuidados domiciliarios son:\n\n• Fotoprotección solar absoluta (Innegociable): Aplica protector solar de amplio espectro (SPF 50+) cada 2-3 horas todos los días del año. La piel nueva en fase de remodelación es extremadamente sensible a la radiación ultravioleta.\n• Textura "de lija" o microcostras: Entre el tercer y el quinto día, notarás que la piel adquiere una textura áspera muy fina (microcostras invisibles del tamaño de un grano de arena) debido a la expulsión del tejido antiguo. Está estrictamente prohibido rascar, frotar o usar exfoliantes; estas microcostras deben desprenderse solas de forma natural en 5-7 días.\n• Hidratación y reparación: Aplica la crema regeneradora y calmante específica pautada en la consulta 3 o 4 veces al día para mantener la barrera cutánea perfectamente hidratada.\n• Evita el calor extremo: Pospone el uso de saunas, baños turcos, spas o la práctica de ejercicio físico de muy alta intensidad durante las primeras 48 horas para evitar una vasodilatación excesiva en el rostro.'
        },
        {
          pregunta: '¿Los resultados obtenidos son definitivos?',
          respuesta: 'Los cambios logrados en la arquitectura interna de la piel son estables y muy duraderos. El colágeno nuevo que fabrica tu propio organismo para reestructurar la dermis y rellenar las arrugas pasa a formar parte de la estructura fija de tu piel de forma indefinida, retrasando de manera drástica el reloj del envejecimiento cutáneo.\n\nNo obstante, dado que el proceso fisiológico de envejecimiento natural continúa con el paso de los años, para prolongar este efecto de piel tersa, lisa y rejuvenecida a largo plazo, se recomienda realizar 1 sola sesión médica de mantenimiento anual, acompañada siempre de una rutina cosmética domiciliaria adecuada y fotoprotección diaria.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del tratamiento?',
          respuesta: 'Este procedimiento médico avanzado se pospondrá o evitará en caso de presentar:\n\n• Embarazo y periodo de lactancia.\n• Pieles recientemente bronceadas o que prevean una exposición solar intensa e inmediata en las semanas posteriores a la sesión.\n• Infecciones activas en el rostro: Presencia de brotes de herpes labial activo, infecciones bacterianas o heridas abiertas el día de la cita.\n• Consumo reciente de retinoides orales (Isotretinoína): Se debe evaluar en consulta el tiempo de seguridad transcurrido tras la última toma antes de someter la piel al láser.\n• Historial de cicatrización anómala (tendencia demostrada a queloides o cicatrices hipertróficas severas).'
        }
      ],
      evidencia: [
        { 
          titulo: "Rejuvenecimiento Cutáneo con Láser Fraccionado No Ablativo 1550 nm", 
          fuente: "Dermatologic Clinics (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/24220371/" 
        }
      ]
    }
  },
  'cicatrices-estrias-frax': {
    nombre: 'Cicatrices de Acné, Atróficas y Estrías (Láser Frax 1550)',
    tituloDescripcion: '¿Qué es el tratamiento de Cicatrices y Estrías con el sistema Frax 1550 de Candela?',
    imagen: '/tratamientos/laser-cicatrices-acne.jpeg',
    descripcionBreve: 'Micro-estimulación térmica para romper el tejido fibrótico dañado y obligar a tu cuerpo a generar piel nueva y lisa.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Tecnología', valor: 'Frax 1550' },
      { titulo: 'Tiempo', valor: '45 min' },
      { titulo: 'Resultados', valor: 'Progresivos y estructurales' },
      { titulo: 'Sesiones', valor: '3 a 5 sesiones' }
    ],
    detalles: {
      descripcion: 'Es un procedimiento médico avanzado de remodelación dérmica profunda que utiliza el láser fraccionado no ablativo Frax 1550. Está diseñado específicamente para corregir imperfecciones estructurales de la piel como las cicatrices de acné, cicatrices quirúrgicas o traumáticas, y estrías corporales (tanto las rojas de reciente aparición como las blancas ya consolidadas).\n\nEl cabezal Frax 1550 emite miles de haces de luz microscópicos que penetran de forma profunda en la dermis sin romper ni evaporar la capa más superficial de la piel (la epidermis). Estas microcolumnas de calor térmico controlado actúan rompiendo de forma selectiva los tejidos fibróticos rígidos y desgarrados que hunden la piel, forzando a las células de la dermis a iniciar una respuesta de curación natural que fabrica colágeno estructural y elastina nuevos. El resultado es una piel visiblemente más lisa, uniforme y con una reducción drástica de la profundidad de las marcas.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuándo se aprecian los resultados?',
          respuesta: 'La reparación del tejido conectivo dañado es un proceso biológico que requiere tiempo. El protocolo clínico estándar pauta entre 3 y 5 sesiones, realizadas con un intervalo estricto de 4 semanas entre cada una de ellas.\n\nLos resultados se aprecian en dos fases diferenciadas:\n• Resultados Iniciales: A partir de los 7 a 10 días posteriores a la primera sesión, una vez que finaliza la sutil renovación superficial, el paciente nota una mejoría evidente en la suavidad, la textura y el tono global de la piel.\n• Resultados Definitivos (Remodelación): La verdadera corrección —el aplanamiento de las estrías y la elevación del fondo de las cicatrices de acné— se consolida de forma espectacular entre el segundo y el cuarto mes tras finalizar el protocolo. Este es el tiempo biológico que necesitan los fibroblastos para madurar las nuevas redes de colágeno.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento con el láser Frax 1550?',
          respuesta: 'Al trabajar a niveles profundos de la dermis, el disparo del láser genera un estímulo térmico perceptible. Para garantizar el confort absoluto del paciente, antes de iniciar la sesión aplicamos una crema anestésica de alta potencia médica en la zona a tratar. Además, la pieza de mano del sistema Nordlys de Candela incorpora un canal de enfriamiento continuo por aire que protege la piel en todo momento e insensibiliza la zona.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de acudir a mi sesión?',
          respuesta: 'Para optimizar la eficacia del láser Frax 1550 y evitar cualquier complicación pigmentaria, es fundamental seguir estas indicaciones:\n\n• Exposición solar prohibida: No debes tomar el sol ni presentar un bronceado activo (incluyendo solárium o autobronceadores) en las 4 semanas previas al tratamiento. La piel debe estar en su tono basal.\n• Suspende activos renovadores: Interrumpe la aplicación de cremas con retinol, ácido glicólico, salicílico o fórmulas despigmentantes entre 3 y 5 días antes de la cita.\n• La zona a tratar debe estar libre de infecciones, heridas abiertas o brotes de acné purulento severo el día de la sesión.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Cómo es la recuperación en casa?',
          respuesta: 'La gran ventaja del láser no ablativo Frax 1550 es su mínimo tiempo de recuperación (downtime). Al salir de la consulta, la zona tratada presentará un eritema (rojez) moderado, una ligera inflamación y sensación de calor que remite en 24-48 horas. Las pautas post-sesión innegociables son:\n\n• Fotoprotección solar absoluta (Obligatoria): Aplica protector solar de amplio espectro (SPF 50+) cada 2-3 horas todos los días del año si la zona está expuesta (como el rostro en cicatrices de acné). El sol sobre la piel en fase de curación generaría manchas oscuras permanentes.\n• Entre el tercer y el quinto día, notarás que la piel adquiere una textura áspera muy fina. Está estrictamente prohibido rascar, frotar o usar exfoliantes; las microcostras invisibles deben caer solas en 5-7 días.\n• Aplica de forma generosa (3-4 veces al día) la crema reparadora o bálsamo cicatrizante específico prescrito en consulta para acelerar la recuperación de la barrera cutánea.\n• Pospone el uso de saunas, baños turcos, spas o entrenamientos de alta intensidad que provoquen sudoración excesiva durante las primeras 48 horas.'
        },
        {
          pregunta: '¿Los resultados sobre las cicatrices y estrías son definitivos?',
          respuesta: 'Sí, los resultados logrados con el láser Frax 1550 son permanentes. El colágeno y la elastina nuevos que fabrica tu propio organismo para rellenar las cicatrices atróficas de acné o para unir el tejido roto de las estrías forman una nueva estructura dérmica que no se reabsorbe ni desaparece con el tiempo. La textura ganada y la atenuación de las marcas se mantienen estables a largo plazo, logrando una mejora definitiva en la calidad de la piel del paciente.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones de este tratamiento?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Pieles recientemente bronceadas o con previsión de exposición solar intensa inmediata.\n• Consumo reciente de Isotretinoína oral: Se debe evaluar en consulta el tiempo de seguridad transcurrido tras la última toma antes de someter la piel al láser profundo, conforme a las guías clínicas actuales.\n• Infecciones activas en la zona: Presencia de brotes de herpes labial activo o infecciones bacterianas abiertas el día de la cita.\n• Historial de cicatrización anómala (tendencia demostrada a la formación de queloides severos).'
        }
      ],
      evidencia: [
        { 
          titulo: "Manejo de Cicatrices Atróficas de Acné con Láser Fraccionado 1550 nm", 
          fuente: "Journal of Cosmetic Dermatology (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/20302568/" 
        }
      ]
    }
  },
  'hemangiomas-nordlys': {
    nombre: 'Hemangiomas y Puntos Rubí (VL 555)',
    tituloDescripcion: '¿Cómo es el tratamiento de Hemangiomas y Puntos Rubí con el aplicador VL 555?',
    imagen: '/tratamientos/hemangiomaspuntosrubi.jpeg',
    descripcionBreve: 'Destrucción fotoacústica y colapso de las lesiones rojizas del cuerpo de forma rápida y sin dejar cicatrices.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Tecnología', valor: 'Nordlys VL 555' },
      { titulo: 'Tiempo', valor: '15-20 min' },
      { titulo: 'Resultados', valor: 'Eliminación en 7-10 días' },
      { titulo: 'Sesiones', valor: '1 a 3 sesiones' }
    ],
    detalles: {
      descripcion: 'Los puntos rubí (pequeñas sobreelevaciones de color rojo brillante que aparecen con la edad en el torso, cuello y escote) y los hemangiomas son lesiones vasculares benignas causadas por una proliferación y dilatación de microcapilares sanguíneos en la superficie de la piel.\n\nEl tratamiento con el aplicador VL 555 de Nordlys es el método médico de elección para eliminarlos de forma rápida, limpia y sin dejar cicatrices. El dispositivo emite un pulso de luz de banda estrecha de alta precisión que es absorbido de forma exclusiva por la hemoglobina concentrada dentro de la lesión. La energía lumínica se transforma instantáneamente en un pico de calor que colapsa y coagula los vasos sanguíneos que alimentan el angioma (fototermólisis selectiva), destruyendo la lesión desde el interior sin dañar en absoluto la piel sana circundante.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuándo desaparecen por completo?',
          respuesta: '• Puntos Rubí: La inmensa mayoría de los puntos rubí pequeños y medianos se eliminan por completo en una sola sesión (a veces se realiza un retoque a las 4 semanas si la lesión era muy voluminosa).\n• Hemangiomas planos o difusos: Dependiendo de su extensión y profundidad anatómica, pueden requerir entre 2 y 3 sesiones espaciadas cada 4 semanas.\n\nInmediatamente después del disparo médico, notarás que el punto rubí cambia de su color rojo brillante a un tono grisáceo, morado oscuro o negruzco. Esto es el signo clínico de que la sangre se ha coagulado con éxito. En los siguientes 7 a 10 días, el organismo reabsorberá ese tejido dañado de forma natural, la microcostra se desprenderá sola y aparecerá piel completamente nueva, limpia y sana debajo.'
        },
        {
          pregunta: '¿Es doloroso el procedimiento?',
          respuesta: 'No, el paciente percibe una sensación muy breve similar a un "pequeño pinchazo cálido". Al ser disparos tan localizados y precisos, no se requiere el uso de cremas anestésicas previas y las molestias desaparecen de forma inmediata al terminar el disparo.'
        },
        {
          pregunta: '¿Qué precauciones debo tomar antes de la sesión?',
          respuesta: 'Para garantizar una eliminación segura y evitar alteraciones en la pigmentación de la piel, debes cumplir con los siguientes requisitos previos:\n\n• Exposición solar cero: La zona donde se encuentren los hemangiomas o puntos rubí a tratar no puede estar bronceada ni haber estado expuesta al sol de forma intensa durante las 4 semanas previas. Si la piel está bronceada, la melanina superficial competiría con la hemoglobina de la lesión, aumentando el riesgo de quemadura epidérmica.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué debo hacer en casa?',
          respuesta: '• Fotoprotección solar absoluta: Si las lesiones tratadas estaban en zonas expuestas (como rostro, escote, brazos o piernas), debes aplicar protector solar de amplio espectro (SPF 50+) cada 2-3 horas. Exponer la zona al sol mientras se está reabsorbiendo la lesión causaría una mancha oscura permanente (hiperpigmentación postinflamatoria).\n• No manipules las microcostras: El punto tratado se volverá oscuro y formará una costra fina y seca. Está prohibido rascarse, arrancarla o usar exfoliantes corporales. Debe caerse por sí sola para garantizar que la piel cicatrice de forma invisible.\n• Aplica una pequeña capa de crema cicatrizante pautada en la consulta 2 o 3 veces al día sobre los puntos tratados.\n• Durante las primeras 48 horas, evita las saunas, baños turcos, jacuzzis o ejercicios de alta intensidad que provoquen una vasodilatación excesiva de la piel.'
        },
        {
          pregunta: '¿Los resultados son definitivos o pueden volver a salir?',
          respuesta: 'Sí, la eliminación del punto rubí o hemangioma tratado con el aplicador VL 555 es definitiva y permanente. El vaso sanguíneo colapsado es destruido y reabsorbido por el cuerpo, por lo que esa lesión específica no puede volver a aparecer ni a llenarse de sangre.\n\nNo obstante, es importante que el paciente entienda que este tratamiento no frena la predisposición genética de su organismo a desarrollar nuevas lesiones vasculares en el futuro en otras áreas del cuerpo debido al envejecimiento cutáneo o a cambios hormonales. Si esto ocurre con los años, esos nuevos puntos rubí se pueden volver a tratar en clínica con la misma eficacia.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones de este tratamiento vascular?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Pieles recientemente bronceadas o con exposición solar intensa prevista de forma inmediata (por ejemplo, justo antes de unas vacaciones de playa).\n• Consumo de fármacos fotosensibilizantes activos que aumenten la sensibilidad de la piel a los estímulos lumínicos.\n• Sospecha clínica de malignidad: Si durante la exploración médica previa en la consulta se detecta que la lesión roja presenta bordes atípicos, sangrado espontáneo persistente o características que no correspondan a un angioma benigno, se pospondrá el láser y se derivará para estudio histológico (biopsia) por seguridad del paciente.'
        }
      ],
      evidencia: [
        { 
          titulo: "Tratamiento de Lesiones Vasculares Cutáneas con Luz Pulsada (IPL)", 
          fuente: "Lasers in Medical Science (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/24584989/" 
        }
      ]
    }
  },
  'depilacion-nordlys': {
    nombre: 'Fotodepilación Médica de Alta Precisión (HR 600)',
    tituloDescripcion: '¿Qué es la Fotodepilación Médica con el sistema HR 600?',
    imagen: '/tratamientos/fotodepilacion.jpeg',
    descripcionBreve: 'Destrucción definitiva de la raíz pilosa utilizando la plataforma clínica Nordlys, segura para todo fototipo.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Tecnología', valor: 'Nordlys IPL HR 600' },
      { titulo: 'Tiempo', valor: 'Zonal (15-60 min)' },
      { titulo: 'Resultados', valor: 'Destrucción folicular' },
      { titulo: 'Sesiones', valor: '8 a 10 sesiones' }
    ],
    detalles: {
      descripcion: 'Es un procedimiento de eliminación duradera del vello facial y corporal que utiliza el aplicador de alta gama HR 600 de la plataforma médica Nordlys de Candela. A diferencia de los sistemas de depilación convencionales o comerciales, este dispositivo emite una Luz Pulsada de Banda Estrecha con un filtro de doble corte patentado.\n\nEsta tecnología de precisión dirige la energía lumínica exclusivamente hacia la melanina (el pigmento oscuro) del tallo del vello. La luz viaja a través del pelo y se transforma en un pulso térmico concentrado al llegar a la raíz, destruyendo de forma definitiva las células madre encargadas del crecimiento del folículo piloso (fototermólisis selectiva).',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuándo se aprecian los resultados?',
          respuesta: 'La eliminación del vello requiere atacar el folículo durante su fase de crecimiento activo (fase anágena). Como no todos los pelos se encuentran en la misma fase a la vez, se necesita un protocolo secuencial. El número medio de sesiones oscila entre 8 y 10 sesiones. Las sesiones se espacian estrictamente cada 4 o 6 semanas en el rostro, y cada 6 u 8 semanas en el cuerpo.\n\n• A los 10-14 días post-sesión: El vello tratado que se encontraba en fase activa comienza a desprenderse y caer de forma natural.\n• Progresivamente: El vello restante se vuelve visiblemente más fino, débil y tardará mucho más tiempo en salir, espaciando el crecimiento de forma drástica sesión tras sesión.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento con el aplicador HR 600?',
          respuesta: 'No, la fotodepilación médica con Nordlys es uno de los sistemas más confortables del mercado internacional. La avanzada ingeniería de Candela permite destruir el folículo utilizando pulsos de energía ultra-cortos pero altamente efectivos, lo que evita el calentamiento doloroso de la superficie de la piel. El paciente percibe únicamente un destello lumínico y una sensación de "leve pellizco o calor instantáneo" perfectamente tolerable.'
        },
        {
          pregunta: '¿Qué debo tener en cuenta antes de acudir a mi sesión?',
          respuesta: 'Para garantizar una sesión segura, eficaz y sin riesgos de quemaduras, es fundamental que sigas estas pautas clínicas en casa:\n\n• Rasurado previo: Acude a tu cita con la zona perfectamente rasurada con cuchilla de 24 a 48 horas antes. Está estrictamente prohibido arrancar el vello de raíz (con cera, pinzas o máquinas depiladoras) durante las 4 semanas previas; necesitamos que la raíz esté intacta dentro del poro para que el láser pueda actuar.\n• Aunque el aplicador HR 600 cuenta con un perfil de seguridad excelente, debes evitar la exposición solar intensa, solárium o el uso de autobronceadores en las 2 semanas previas a la sesión. El tono de tu piel debe estar lo más estabilizado posible.\n• Acude a la clínica sin desodorante, cremas, aceites corporales ni maquillaje en la zona que se va a tratar.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué hacer en casa?',
          respuesta: 'Tras finalizar la sesión, es normal que la piel presente un eritema (rojez) sutil y una ligera inflamación alrededor del poro (edema perifolicular), signos médicos de que el folículo ha sido destruido con éxito y que desaparecen en pocas horas. Los cuidados domiciliarios son muy sencillos:\n\n• Fotoprotección solar (Obligatoria): Si la zona tratada está expuesta (como el rostro, brazos o piernas en verano), aplica protector solar de amplio espectro (SPF 50+) de forma estricta.\n• Aplica la crema reparadora pautada en consulta dos veces al día durante las primeras 48 horas para confortar la barrera cutánea.\n• Durante las primeras 24-48 horas, pospone el uso de saunas, spas, baños calientes y entrenamientos de alta intensidad que provoquen sudoración excesiva. No uses ropa excesivamente ajustada en las zonas corporales tratadas para evitar el roce.\n• Si necesitas retirar el vello que vaya saliendo entre una cita y otra, utiliza exclusivamente la cuchilla de rasurar. No uses métodos de arranque.'
        },
        {
          pregunta: '¿Los resultados son definitivos?',
          respuesta: 'Sí, la destrucción de los folículos pilosos completada con el sistema HR 600 de Candela es permanente. Las raíces eliminadas de forma médica no tienen la capacidad biológica de regenerarse ni volver a producir vello.\n\nSin embargo, a nivel clínico nos referimos a este tratamiento como "depilación duradera", ya que el cuerpo humano puede generar nuevos folículos pilosos a lo largo de la vida debido a cambios hormonales profundos (embarazo, menopausia, alteraciones endocrinas) o factores genéticos. Por este motivo, una vez finalizado el protocolo completo, se recomienda realizar 1 sesión de mantenimiento anual o bianual para eliminar de forma temprana cualquier vello residual nuevo que el organismo intente desarrollar.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del tratamiento?',
          respuesta: '• Embarazo y periodo de lactancia.\n• Consumo de fármacos fotosensibilizantes activos: Medicamentos que aumentan la sensibilidad de la piel a la luz (como ciertos antibióticos orales para el acné o tratamientos retinoideos).\n• Infecciones o patologías activas en la zona: Presencia de brotes de herpes, foliculitis bacteriana infecciosa, heridas abiertas o eccemas activos el día de la cita.\n• Tatuajes en la zona de tratamiento: El láser no puede pasar por encima de un tatuaje, ya que la tinta absorbería toda la energía provocando una quemadura. El médico rodeará la zona del tatuaje manteniendo una distancia de seguridad estricta.'
        }
      ],
      evidencia: [
        { 
          titulo: "Evaluación del Perfil de Seguridad y Eficacia de la Depilación Médica con Sistema IPL", 
          fuente: "Dermatologic Surgery (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/22159833/" 
        }
      ]
    }
  },
'tensado-cutaneo-hifu': {
    nombre: 'Tensado Cutáneo y Flacidez (Ultraformer - HIFU)',
    tituloDescripcion: '¿Qué es el Tensado Cutáneo con HIFU y qué tecnología se utiliza?',
    imagen: '/clinica/hifu.jpg',
    descripcionBreve: 'Tratamiento médico no invasivo diseñado para combatir la flacidez, reafirmar los tejidos y redefinir el óvalo facial sin cirugía.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Tecnología', valor: 'Ultraformer III / MPT (HIFU)' },
      { titulo: 'Tiempo', valor: '45-75 min según la zona' },
      { titulo: 'Resultados', valor: 'Inmediatos (10-20%) y progresivos' },
      { titulo: 'Sesiones', valor: '1 a 2 sesiones al año' }
    ],
    detalles: {
      descripcion: 'El Tensado Cutáneo mediante HIFU (High-Intensity Focused Ultrasound) es un tratamiento médico no invasivo diseñado para combatir la flacidez, reafirmar los tejidos y redefinir el óvalo facial sin necesidad de cirugía ni tiempo de baja. Esta plataforma emite ondas de ultrasonido de alta intensidad que alcanzan el plano SMAS (Sistema Músculo-Aponuerótico Superficial) provocando un tensado profundo y duradero.\n\nEn nuestra clínica utilizamos Ultraformer, la plataforma médica de ultrasonidos focalizados de última generación. Su tecnología trabaja mediante micropuntos de coagulación térmica precisos a diferentes profundidades fijas (1.5 mm, 3.0 mm y 4.5 mm), generando una respuesta biológica inmediata y una remodelación tisular progresiva:\n\n- Plano SMAS (4.5 mm): Genera la contracción y el anclaje del tejido muscular y facial, redefiniendo la línea mandibular, la papada y el cuello.\n- Dermis Profunda y Superficial (3.0 mm y 1.5 mm): Estimula la síntesis de colágeno y elastina, densificando la piel, mejorando la elasticidad y suavizando arrugas finas en rostro, periocular y escote.\n\nLa precisión de Ultraformer permite concentrar la energía térmica en la profundidad exacta deseada sin lesionar la epidermis ni los tejidos adyacentes, lo que garantiza máxima seguridad, confort y una reincorporación inmediata a tu rutina.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Es doloroso el tratamiento con Ultraformer?',
          respuesta: 'Se perciben pequeños impulsos térmicos o cosquilleo en profundidad, especialmente en zonas de relieve óseo como la línea mandibular. Es una molestia tolerable y transitoria que adaptamos según la sensibilidad de cada paciente ajustando los parámetros de la sesión.'
        },
        {
          pregunta: '¿Cuándo se aprecian los resultados y cuánto duran?',
          respuesta: 'Se observa un efecto de compactación inicial ligero por la contracción térmica inmediata del colágeno. Sin embargo, el resultado real y la reestructuración del tejido se consolidan entre los 2 y 3 meses posteriores a medida que el organismo genera nuevo colágeno. Sus efectos suelen mantenerse entre 12 y 18 meses.'
        },
        {
          pregunta: '¿Requiere tiempo de recuperación o baja médica?',
          respuesta: 'No. Al respetar la capa superficial de la piel, no se producen pelados ni heridas. Puedes reincorporarte a tus actividades diarias inmediatamente. En algunos casos puede aparecer un ligero rubor o una discreta molestia al tacto similar a "agujetas" musculares que remite en pocos días.'
        },
        {
          pregunta: '¿En qué zonas se puede realizar el tratamiento?',
          respuesta: 'Está indicado para el tercio inferior del rostro (definición del óvalo y surcos nasogenianos), zona submentoniana (papada), cuello, escote y elevación del arco de la ceja.'
        },
        {
          pregunta: '¿Se puede combinar con otros tratamientos estéticos?',
          respuesta: 'Sí, es totalmente combinable. Funciona de manera sinérgica con tratamientos de calidad de piel (como la higiene facial o inductores de colágeno) o plataformas médicas lumínicas, pautando el intervalo adecuado entre sesiones según el plan médico personalizado.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del tratamiento?',
          respuesta: 'Está contraindicado en caso de embarazo o lactancia, infecciones activas o heridas en la zona a tratar, marcapasos o dispositivos electrónicos implantados, o parálisis facial previa en la zona de tratamiento.'
        }
      ],
      evidencia: []
    }
  },

  // --- 6. TRATAMIENTOS AVANZADOS ---
  // --- 6. TRATAMIENTOS AVANZADOS ---
  'rejuvenecimiento-manos': {
    nombre: 'Rejuvenecimiento de manos',
    tituloDescripcion: '¿Qué es el Rejuvenecimiento de Manos?',
    imagen: '/tratamientos/rejuvenecimiento-manos.jpeg',
    descripcionBreve: 'Borramos las manchas solares y el aspecto esqueletizado para que tus manos revelen tanta juventud como tu rostro.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Infiltración subdérmica' },
      { titulo: 'Tiempo', valor: '45 min' },
      { titulo: 'Resultados', valor: 'Inmediatos' },
      { titulo: 'Duración', valor: '12-18 meses' }
    ],
    detalles: {
      descripcion: 'Es un procedimiento médico-estético diseñado para restaurar el volumen perdido, disimular las estructuras anatómicas marcadas y devolver la turgencia juvenil a la piel del dorso de las manos. Las manos sufren un proceso de envejecimiento muy evidente debido a la pérdida progresiva de la grasa subcutánea, lo que cronológicamente hace que las venas, los tendones y los huesos se vuelvan excesivamente prominentes, dando un aspecto "envejecido o esquelético".\n\nEste tratamiento avanzado consiste en la infiltración subdérmica de materiales biocompatibles de última generación, principalmente ácido hialurónico o inductores de colágeno. Estos productos actúan creando un "colchón" hidrolipídico homogéneo debajo de la piel que camufla las estructuras subyacentes y estimula de forma biológica la producción de colágeno propio, devolviendo el grosor y la elasticidad perdidos a la dermis.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuánto duran los efectos?',
          respuesta: 'Este procedimiento se realiza en una única sesión, pautando una visita de control a las 2 semanas para evaluar la simetría y el asentamiento del producto.\n\nLos resultados mecánicos de soporte y volumen son inmediatos, apreciándose unas manos rejuvenecidas y estilizadas al salir de la clínica. Además, la durabilidad de este tratamiento es muy alta debido a la baja movilidad metabólica del dorso de las manos, prolongándose los efectos entre 12 y 18 meses según las características biológicas del paciente y el material inyectable de elección.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento en el dorso de las manos?',
          respuesta: 'No, es un tratamiento ambulatorio confortable para el paciente. Para garantizar la máxima seguridad y minimizar el dolor, el procedimiento se realiza mediante el uso de una cánula de punta roma flexible.\n\nA través de un único micropunto de entrada, la cánula se desliza suavemente por el espacio subdérmico sin cortar vasos sanguíneos ni dañar nervios. Además, los geles inyectables de gama médica premium incorporan lidocaína (anestésico local) en su propia formulación, lo que insensibiliza la zona de forma inmediata durante el procedimiento. El paciente solo percibe una leve sensación de presión o estiramiento perfectamente tolerable.'
        },
        {
          pregunta: '¿Qué precauciones debo tomar antes de acudir a mi cita?',
          respuesta: 'Para optimizar la seguridad clínica y reducir al mínimo la posibilidad de pequeños hematomas en el dorso de las manos, es fundamental seguir estas pautas previas:\n\n• Evita fármacos anticoagulantes: Interrumpe el consumo de ácido acetilsalicílico (aspirina), ibuprofeno o suplementos de omega-3 y vitamina E durante los 5-7 días anteriores a la sesión (siempre bajo validación si es medicación crónica pautada).\n\n• Retirada de accesorios: Acude a la clínica habiéndote quitado previamente todos los anillos, pulseras o relojes para permitir una desinfección y manipulación médica aséptica completa de la extremidad.\n\n• El dorso de las manos debe estar libre de eccemas, dermatitis de contacto, quemaduras domésticas o heridas abiertas el día del tratamiento.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué debo hacer en casa?',
          respuesta: 'Al ser un procedimiento mínimamente invasivo sin incisiones ni suturas, la reincorporación a la actividad diaria es inmediata. Tras la sesión, es normal notar una ligera inflamación o sensación de pesadez en las manos que remite espontáneamente en 24-48 horas. Las pautas post-tratamiento obligatorias son:\n\n• No presiones ni masajees la zona: El producto debe asentarse de forma natural en el espacio subdérmico. Evita masajearte las manos o aplastarlas durante las primeras 48 horas.\n\n• Utiliza guantes protectores de forma obligatoria si vas a fregar, limpiar con productos químicos domésticos o manipular sustancias irritantes durante los primeros 3 días.\n\n• Pospone las saunas, baños calientes prolongados o ejercicios de fuerza de gran intensidad que involucren una presión palmar excesiva (como levantamiento de pesas) durante las primeras 48 horas.\n\n• Fotoprotección solar: Aunque es un tratamiento inyectable, si apareciera algún pequeño hematoma puntual, es indispensable aplicar protector solar SPF 50+ en el dorso para evitar la pigmentación postinflamatoria por el hierro de la sangre.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del tratamiento?',
          respuesta: '• Embarazo y periodo de lactancia.\n\n• Infecciones activas locales o sistémicas: Presencia de infecciones cutáneas en las manos, procesos fúngicos o infecciones dentales activas el día de la infiltración.\n\n• Enfermedades autoinmunes o del tejido conectivo de carácter grave que se encuentren descompensadas o en fase de brote activo.\n\n• Alergia conocida o hipersensibilidad a los componentes del gel de relleno o al anestésico local (lidocaína).'
        }
      ],
      evidencia: [
        { 
          titulo: "Rejuvenecimiento de Manos con Rellenos Dérmicos y Bioestimuladores", 
          fuente: "Dermatologic Surgery (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/26218731/" 
        }
      ]
    }
  },
  'hiperhidrosis': {
    nombre: 'Tratamiento de la Hiperhidrosis',
    tituloDescripcion: '¿Qué es el Tratamiento de la Hiperhidrosis?',
    imagen: '/tratamientos/hyperhidrosis.jpeg',
    descripcionBreve: 'Frena la sudoración excesiva en axilas, manos o pies y recupera por fin tu comodidad social y laboral.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Microinyección Intradérmica' },
      { titulo: 'Tiempo', valor: '30 min' },
      { titulo: 'Resultados', valor: 'A los 7-14 días' },
      { titulo: 'Duración', valor: '6-9 meses' }
    ],
    detalles: {
      descripcion: 'Es un procedimiento médico diseñado para frenar de forma drástica y segura la sudoración excesiva (hiperhidrosis) en zonas localizadas del cuerpo, principalmente en axilas, palmas de las manos y plantas de los pies. Esta condición, que suele reactivarse con el estrés, el calor o de forma espontánea, altera significativamente la calidad de vida y la confianza del paciente.\n\nEl tratamiento consiste en la aplicación de microinyecciones intradérmicas de neuromoduladores. Este fármaco actúa bloqueando temporalmente las señales nerviosas encargadas de activar las glándulas sudoríparas ecrinas. Al interrumpir este estímulo, las glándulas dejan de producir sudor en la zona tratada, manteniendo la piel perfectamente seca y regulada sin afectar a la termorregulación global del organismo.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuánto duran los efectos?',
          respuesta: 'Este tratamiento es sumamente eficiente y cómodo, ya que se realiza en una única sesión.\n\nLos resultados comienzan a percibirse de forma progresiva a partir del tercer o cuarto día, alcanzando su eficacia máxima de bloqueo a los 14 días posteriores a la aplicación. El control absoluto de la sudoración se mantiene estable entre 6 y 9 meses, dependiendo de la zona tratada (la tasa metabólica en las manos suele ser mayor que en las axilas).'
        },
        {
          pregunta: '¿Es doloroso el procedimiento?',
          respuesta: 'La sensibilidad varía según la zona anatómica a tratar:\n\n• En las Axilas: Es un procedimiento prácticamente indoloro. Se realiza con agujas de calibre microscópico y la molestia es mínima, describiéndose como pequeños pinchazos superficiales muy tolerables.\n\n• En Palmas de Manos y Plantas de Pies: Al ser zonas con una densidad nerviosa muy alta, la sensibilidad es mayor. Para garantizar el confort absoluto en estos casos, aplicamos una crema anestésica de alta potencia médica previa a la sesión o utilizamos sistemas de frío local intenso para insensibilizar la piel por completo antes de cada microinyección.'
        },
        {
          pregunta: '¿Qué precauciones debo tomar antes de acudir a la clínica?',
          respuesta: '• En el caso del tratamiento axilar, rasurar la zona con cuchilla 2 o 3 días antes de la cita. No acudas con el rasurado del mismo día para evitar que la piel esté irritada o presente microcortes.\n\n• Acude a la sesión con la zona limpia de desodorantes, antitranspirantes, cremas o polvos de talco.\n\n• Evita anticoagulantes: Suspende el consumo de aspirinas o antiinflamatorios (ibuprofeno) durante los 5 días previos para minimizar el riesgo de pequeños hematomas puntuales en los sitios de punción.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué debo hacer en casa?',
          respuesta: 'El post-tratamiento es inmediato y permite la reincorporación laboral y social al salir de la consulta. Es normal presentar una leve rojez o sutil inflamación en los puntos de inyección que remite en pocas horas. Los cuidados domiciliarios esenciales durante las primeras 48 horas son:\n\n• Higiene suave: Lava la zona tratada con agua templada y jabón neutro. En el caso de las axilas, evita usar desodorantes que contengan alcohol durante las primeras 24 horas.\n\n• Evita realizar masajes, fricciones enérgicas o depilaciones en la zona tratada durante los primeros 2 días para permitir que el fármaco se asiente correctamente en el plano intradérmico.\n\n• Pospone las saunas, baños turcos, spas o entrenamientos físicos de alta intensidad durante las primeras 48 horas para prevenir la disipación local del producto por vasodilatación.'
        },
        {
          pregunta: '¿Eliminar el sudor en una zona puede provocar que sude más por otra?',
          respuesta: 'Esta es una de las dudas más frecuentes en consulta y la respuesta médica es no. El bloqueo de las glándulas sudoríparas en zonas focales (como las axilas o las manos) abarca una superficie corporal muy pequeña en comparación con el resto del cuerpo.\n\nPor lo tanto, el organismo no experimenta el fenómeno de "sudoración compensatoria". El resto de tu piel continuará realizando la función biológica de termorregulación de manera completamente normal e imperceptible.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del tratamiento?',
          respuesta: '• Embarazo y periodo de lactancia.\n\n• Enfermedades neuromusculares de base: Pacientes diagnosticados con Miastenia Gravis, Síndrome de Lambert-Eaton o Esclerosis Lateral Amiotrófica (ELA).\n\n• Infecciones activas en la zona: Presencia de foliculitis, eccemas, hidradenitis supurativa activa o heridas abiertas en la región a tratar el día de la cita.\n\n• Alergia documentada a los neuromoduladores o a la albúmina humana.'
        }
      ],
      evidencia: [
        { 
          titulo: "Eficacia de los Neuromoduladores en la Hiperhidrosis Primaria", 
          fuente: "American Journal of Clinical Dermatology (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/15053580/" 
        }
      ]
    }
  },
  'sonrisa-gingival': {
    nombre: 'Corrección de la Sonrisa Gingival',
    tituloDescripcion: '¿Cómo es el tratamiento de Corrección de la Sonrisa Gingival?',
    imagen: '/tratamientos/sonrisa-gingival.jpeg',
    descripcionBreve: 'Armoniza tu sonrisa para evitar mostrar excesivas encías al reír, relajando la musculatura del labio superior.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Neuromodulación selectiva' },
      { titulo: 'Tiempo', valor: '10 min' },
      { titulo: 'Resultados', valor: 'A los 7-14 días' },
      { titulo: 'Duración', valor: '4-6 meses' }
    ],
    detalles: {
      descripcion: 'La sonrisa gingival se define como aquella en la que, al sonreír, queda expuesta una cantidad desproporcionada de encía superior (generalmente más de 3 milímetros), lo que suele generar timidez, complejos o insatisfacción estética en el paciente al mostrar su rostro de forma natural.\n\nEl tratamiento médico de Corrección de la Sonrisa Gingival con neuromoduladores es un procedimiento no quirúrgico de alta precisión que armoniza la sonrisa. Consiste en la realización de microinyecciones localizadas en los músculos encargados de elevar el labio superior. Al relajar sutilmente la hiperactividad de estos músculos, conseguimos que el labio no se retraiga en exceso al sonreír, logrando que cubra la encía de manera armónica, estética y natural sin perder la expresividad del rostro.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuánto duran los efectos?',
          respuesta: 'Este procedimiento requiere de una única sesión. Posteriormente, pautamos una visita de control obligatoria a los 14 días para evaluar la simetría muscular exacta y realizar cualquier pequeño ajuste si fuera necesario.\n\nLos resultados no son inmediatos, sino que comienzan a apreciarse de forma progresiva a partir del tercer o cuarto día, consolidándose el efecto definitivo a las dos semanas. La durabilidad del tratamiento oscila entre los 4 y 6 meses, periodo en el cual el músculo recupera paulatinamente su fuerza de contracción habitual, momento en el que se recomienda realizar una sesión de mantenimiento.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento?',
          respuesta: 'No, es un procedimiento prácticamente indoloro. Se utilizan agujas de un calibre fino y se realizan únicamente dos o tres micropuntos de inyección muy específicos a los lados de la nariz. La molestia es mínima y dura escasos segundos.'
        },
        {
          pregunta: '¿Qué precauciones debo tomar antes de mi sesión?',
          respuesta: 'Para garantizar la máxima seguridad en la consulta y evitar la aparición de pequeños hematomas puntuales en la zona perinasal, es importante que sigas estas pautas:\n\n• Evita medicamentos antiinflamatorios: Suspende el uso de aspirina, ibuprofeno, naproxeno o suplementos como el omega-3 durante los 5 días previos a la cita (siempre que no sean tratamientos crónicos pautados por tu médico).\n\n• Cero consumo de alcohol: No ingieras bebidas alcohólicas 24 horas antes debido a su efecto vasodilatador.\n\n• La zona que rodea la nariz y los labios debe estar libre de acné quístico activo, infecciones cutáneas o brotes de herpes labial el día de la sesión.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué debo hacer en casa?',
          respuesta: 'Al ser un tratamiento mínimamente invasivo, el tiempo de recuperación es nulo y puedes volver a trabajar o realizar tus actividades sociales inmediatamente al salir de la clínica. No obstante, para asegurar que el neuromodulador actúe de forma localizada y no se desplace a músculos vecinos, es indispensable cumplir estas pautas durante las primeras 24 horas:\n\n• Está estrictamente prohibido frotar, presionar o realizar masajes en la zona de las alas de la nariz y el labio superior. Al lavarte la cara o aplicar cremas, hazlo con toques extremadamente suaves.\n\n• Evita tumbarte o reclinar la cabeza completamente boca abajo durante las 4 horas posteriores a la infiltración.\n\n• Evita los entrenamientos deportivos intensos, el uso de saunas, spas o baños calientes prolongados durante las primeras 48 horas.\n\n• Intenta no realizar gesticulaciones excesivamente forzadas o movimientos bucales exagerados durante el primer día.'
        },
        {
          pregunta: '¿La expresión de mi rostro o la forma de mis labios se verán artificiales?',
          respuesta: 'Esta es la principal preocupación de los pacientes y la respuesta es un rotundo no, siempre que el tratamiento sea realizado por un médico especialista que domine la anatomía facial. Los neuromoduladores avanzados se dosifican de forma milimétrica para suavizar únicamente la elevación excesiva del labio, sin alterar la forma natural de tu boca, el grosor de tus labios ni la simetría del rostro. Al hablar, reír o gesticular, tu expresión seguirá siendo completamente tuya, pero con una sonrisa mucho más equilibrada y estética.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del tratamiento?',
          respuesta: '• Embarazo y periodo de lactancia.\n\n• Patologías neuromusculares de base: Pacientes diagnosticados con Miastenia Gravis, Síndrome de Lambert-Eaton o Esclerosis Lateral Amiotrófica (ELA).\n\n• Infecciones activas en la zona perioral: Presencia de brotes de herpes labial activo o infecciones bacterianas abiertas el día de la cita.\n\n• Alergia documentada a los componentes del neuromodulador o a la albúmina humana.'
        }
      ],
      evidencia: [
        { 
          titulo: "Manejo de la Sonrisa Gingival con Neuromoduladores: Técnica y Eficacia", 
          fuente: "Journal of Craniofacial Surgery (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/23756306/" 
        }
      ]
    }
  },
  'bruxismo': {
  nombre: 'Tratamiento médico del Bruxismo',
  imagen: '/tratamientos/bruxismo.jpeg', 
  tituloDescripcion: '¿Cómo es el Tratamiento del Bruxismo...',
  // ... resto del código
    descripcionBreve: 'Aliviamos dolores mandibulares, evitamos fracturas dentales y afinamos tu rostro inferior relajando la musculatura de masticación.',
    antesDespues: AD,
    parametros: [
      { titulo: 'Técnica', valor: 'Inyección Intramuscular Profunda' },
      { titulo: 'Tiempo', valor: '15 min' },
      { titulo: 'Resultados', valor: 'A los 14 días' },
      { titulo: 'Duración', valor: '6-9 meses' }
    ],
    detalles: {
      descripcion: 'El bruxismo es una disfunción neuromuscular caracterizada por el hábito involuntario de apretar o rechinar los dientes, especialmente durante las horas de sueño. Esta presión constante provoca hipertrofia (desarrollo excesivo) de los músculos masticatorios, desencadenando dolores de cabeza crónicos, tensión cervical, chasquidos y dolor en la articulación temporomandibular (ATM), además de un desgaste dental severo.\n\nEl tratamiento médico avanzado con neuromoduladores consiste en realizar microinyecciones intramusculares directas y milimétricas en el músculo masetero (el principal músculo encargado de la masticación). El fármaco actúa relajando sutilmente la fuerza de contracción involuntaria de este músculo. Al disminuir esta tensión constante, se elimina la presión sobre la mandíbula y los dientes, aliviando el dolor crónico de forma drástica y devolviendo el bienestar diario al paciente sin afectar la capacidad normal de hablar o masticar alimentos.',
      ventajas: [],
      faqs: [
        {
          pregunta: '¿Cuántas sesiones se necesitan y cuánto duran los efectos?',
          respuesta: 'Este procedimiento se realiza en una única sesión. Se programa una visita de revisión obligatoria a los 14 días para evaluar la respuesta muscular exacta.\n\nLa evolución de los resultados se experimenta en dos fases:\n\n• Alivio Sintomático (Funcional): El paciente comienza a notar una liberación de la tensión mandibular y la desaparición de las cefaleas matutinas a partir del quinto o séptimo día, alcanzando el beneficio máximo a las dos semanas.\n\n• Efecto Estético (Adelgazamiento Facial): Al estar el músculo relajado, deja de ejercitarse en exceso y experimenta una atrofia secundaria controlada. Entre el primer y segundo mes, el tercio inferior del rostro se estiliza, suavizando las facciones cuadradas y logrando un óvalo facial más armónico.\n\nLa durabilidad del bloqueo neuromuscular en esta zona oscila entre los 6 y 8 meses, momento en el que el músculo recupera su fuerza de forma paulatina y se valora una sesión de mantenimiento.'
        },
        {
          pregunta: '¿Es doloroso el tratamiento en los músculos maseteros?',
          respuesta: 'No, es un procedimiento perfectamente tolerable. Al tratarse de un músculo voluminoso y profundo, las microinyecciones se realizan con agujas ultrafinas. El paciente experimenta una leve sensación de presión profunda transitoria durante el depósito del producto, pero la molestia es mínima y dura escasos segundos.'
        },
        {
          pregunta: '¿Qué precauciones debo tomar antes de la sesión?',
          respuesta: 'Para acudir a tu cita médica con total seguridad y reducir el riesgo de pequeños hematomas puntuales en la zona de la mandíbula, es fundamental seguir estas indicaciones:\n\n• Suspende antiinflamatorios: Evita consumir aspirina, ibuprofeno, naproxeno o suplementos de omega-3 durante los 5 días anteriores a la sesión (siempre bajo supervisión si es medicación pautada por patologías crónicas).\n\n• No ingieras bebidas alcohólicas 24 horas antes de acudir a la clínica para evitar la vasodilatación local.\n\n• La zona de las mejillas y la mandíbula debe estar libre de acné quístico activo o infecciones cutáneas. Asimismo, comunica al médico si presentas alguna infección dental activa en curso.'
        },
        {
          pregunta: 'Cuidados post-tratamiento: ¿Qué debo hacer en casa?',
          respuesta: 'Al ser un procedimiento médico sin cirugía ni puntos, la reincorporación a tu vida laboral o social es inmediata. Sin embargo, para asegurar que el neuromodulador se fije correctamente en las fibras del músculo masetero, debes seguir de forma estricta estas pautas durante las primeras 24-48 horas:\n\n• Está estrictamente prohibido frotar, presionar o realizar masajes en la zona de las mejillas o el ángulo mandibular. Al lavarte el rostro o aplicar cremas, hazlo con toques muy ligeros.\n\n• Evita la asistencia a saunas, spas, baños turcos o la práctica de entrenamientos deportivos de alta intensidad durante las primeras 48 horas.\n\n• Durante los primeros 2 o 3 días, intenta no consumir alimentos que requieran una masticación excesivamente enérgica o prolongada (como carnes muy duras, frutos secos rígidos o chicles) para permitir el reposo inicial del músculo.\n\n• Evita acostarte o reclinar la cabeza completamente boca abajo durante las 4 horas posteriores a la infiltración.'
        },
        {
          pregunta: '¿Este tratamiento sustituye el uso de la férula de descarga?',
          respuesta: 'A nivel médico, el tratamiento con neuromoduladores y la férula de descarga rígida son procedimientos complementarios y sinérgicos, no excluyentes.\n\nMientras que la férula de descarga es una barrera mecánica excelente que protege el esmalte dental contra el desgaste físico, el neuromodulador actúa directamente sobre el origen biológico del problema: la hiperactividad del músculo. En muchos casos de bruxismo severo donde el paciente rompe las férulas o sigue levantándose con dolor de cabeza a pesar de usarlas, los neuromoduladores son la herramienta médica definitiva para romper ese círculo de dolor y conseguir una relajación real de toda la musculatura craneomandibular.'
        },
        {
          pregunta: '¿Cuáles son las contraindicaciones del tratamiento?',
          respuesta: '• Embarazo y periodo de lactancia.\n\n• Patologías neuromusculares diagnosticadas: Pacientes con Miastenia Gravis, Síndrome de Lambert-Eaton o Esclerosis Lateral Amiotrófica (ELA).\n\n• Infecciones activas en la zona de punción: Presencia de infecciones cutáneas superficiales o procesos infecciosos dentales severos el día de la cita.\n\n• Alergia documentada a los componentes del neuromodulador o a la albúmina humana.'
        }
      ],
      evidencia: [
        { 
          titulo: "Uso de Neuromoduladores para el Tratamiento del Bruxismo y la Hipertrofia Maseterina", 
          fuente: "Neurological Sciences (PubMed)", 
          link: "https://pubmed.ncbi.nlm.nih.gov/26350325/" 
        }
      ]
    }
  }
};


// ==========================================
// 3. GENERADOR DINÁMICO
// ==========================================
export const generarTratamientoPorDefecto = (slug: string): Tratamiento => {
  const tituloFormateado = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    nombre: tituloFormateado, imagen: imgProvisional, descripcionBreve: 'Restaura, equilibra y proyecta tu belleza natural.', antesDespues: AD,
    detalles: { descripcion: 'Protocolos hiper-personalizados para resultados elegantes.', ventajas: [], faqs: [], evidencia: [] },
    parametros: [{ titulo: 'Abordaje', valor: 'Criterio Médico' }, { titulo: 'Sesiones', valor: 'Personalizado' }, { titulo: 'Resultados', valor: 'Óptimos' }, { titulo: 'Duración', valor: 'Según paciente' }]
  };
};

// ==========================================
// 4. ÍNDICE COMPLETO DEL BUSCADOR INTELIGENTE
// ==========================================
export const indiceBusquedaGlobal = [
  { nombre: 'Voluminización y perfilado de labios', slug: 'voluminizacion-labios', categoria: 'Faciales', palabrasClave: 'labios, boca, aumento' },
  { nombre: 'Hidratación labial profunda', slug: 'hidratacion-labial', categoria: 'Faciales', palabrasClave: 'labios secos, hidratacion' },
  { nombre: 'Rinomodelación', slug: 'rinomodelacion', categoria: 'Faciales', palabrasClave: 'nariz, perfil, rinonasogeniano' },
  { nombre: 'Proyección y relleno de pómulos', slug: 'relleno-pomulos', categoria: 'Faciales', palabrasClave: 'pomulos, mejillas' },
  { nombre: 'Marcaje mandibular', slug: 'marcaje-mandibular', categoria: 'Faciales', palabrasClave: 'mandibula, ovalo' },
  { nombre: 'Proyección y corrección de mentón', slug: 'correccion-menton', categoria: 'Faciales', palabrasClave: 'menton, barbilla' },
  { nombre: 'Relleno de ojeras', slug: 'relleno-ojeras', categoria: 'Faciales', palabrasClave: 'ojeras, mirada' },
  { nombre: 'Relleno de fosa temporal', slug: 'fosa-temporal', categoria: 'Faciales', palabrasClave: 'sienes' },
  { nombre: 'Tratamiento de surco nasogeniano', slug: 'surco-nasogeniano', categoria: 'Faciales', palabrasClave: 'surco, rictus' },
  { nombre: 'Tratamiento de arrugas de expresión', slug: 'arrugas-expresion', categoria: 'Faciales', palabrasClave: 'botox, frente, entrecejo' },
  { nombre: 'Código de barras', slug: 'codigo-barras', categoria: 'Faciales', palabrasClave: 'arrugas boca, periorales' },
  { nombre: 'Bandas platismales (Cuello)', slug: 'bandas-platismales', categoria: 'Faciales', palabrasClave: 'cuello, anillos venus' },
  { nombre: 'Mesoterapia facial', slug: 'mesoterapia-facial', categoria: 'Faciales', palabrasClave: 'vitaminas, brillo' },
  { nombre: 'Mesoterapia periocular', slug: 'mesoterapia-periocular', categoria: 'Faciales', palabrasClave: 'ojos, contorno' },
  { nombre: 'Bioestimulación Polinucleótidos', slug: 'bioestimulacion-polinucleotidos', categoria: 'Faciales', palabrasClave: 'regeneracion' },
  { nombre: 'PRP Facial', slug: 'prp-facial', categoria: 'Faciales', palabrasClave: 'plasma, sangre' },
  { nombre: 'Exosomas faciales', slug: 'exosomas-facial', categoria: 'Faciales', palabrasClave: 'exosomas, celulas' },
  { nombre: 'Radiesse', slug: 'radiesse', categoria: 'Faciales', palabrasClave: 'colageno, flacidez' },
  { nombre: 'Sculptra', slug: 'sculptra', categoria: 'Faciales', palabrasClave: 'colageno, acido polilactico' },
  { nombre: 'Peelings químicos médicos', slug: 'peelings-quimicos', categoria: 'Faciales', palabrasClave: 'peeling, renovacion' },
  { nombre: 'Microneedling médico', slug: 'microneedling', categoria: 'Faciales', palabrasClave: 'dermapen, marcas' },
  { nombre: 'Higiene Facial Glow', slug: 'higiene-facial-glow', categoria: 'Faciales', palabrasClave: 'limpieza, glow, luminosidad, express, brillo' },
  { nombre: 'Limpieza Facial Renovadora', slug: 'limpieza-facial-renovadora', categoria: 'Faciales', palabrasClave: 'limpieza, hidratacion, renovadora, peeling enzimatico, piel seca' },
  { nombre: 'Higiene Facial Profunda Detox', slug: 'higiene-facial-profunda-detox', categoria: 'Faciales', palabrasClave: 'limpieza profunda, detox, extraccion, puntos negros, poros, granos, comedones' },
  { nombre: 'Protocolo Venencia Glow & Regeneración', slug: 'protocolo-venencia-glow', categoria: 'Faciales', palabrasClave: 'venencia glow, dermapen, vitaminas, rejuvenecimiento, microneedling, ojeras' },
  { nombre: 'Mesoterapia Lipolítica', slug: 'mesoterapia-lipolitica', categoria: 'Corporales', palabrasClave: 'grasa, celulitis' },
  { nombre: 'Esclerosis Vascular', slug: 'esclerosis-vascular', categoria: 'Corporales', palabrasClave: 'varices, arañas' },
  { nombre: 'Inductores de Colágeno Corporal', slug: 'inductores-corporales', categoria: 'Corporales', palabrasClave: 'flacidez corporal' },
  { nombre: 'Aumento de glúteos', slug: 'aumento-gluteos', categoria: 'Corporales', palabrasClave: 'gluteos, culo' },
  { nombre: 'Mesoterapia capilar', slug: 'mesoterapia-capilar', categoria: 'Capilares', palabrasClave: 'pelo, vitaminas pelo' },
  { nombre: 'Maderoterapia Corporal', slug: 'maderoterapia', categoria: 'Corporales', palabrasClave: 'maderoterapia, celulitis, masaje, madera, drenaje' },
  { nombre: 'Control de Peso Médico (GLP-1)', slug: 'control-peso-medico', categoria: 'Corporales', palabrasClave: 'peso, adelgazar, obesidad, glp1, glp-1, saxenda, wegovy, ozempic, grasa, adelgazamiento' },
  { nombre: 'Láser LED capilar', slug: 'laser-led-capilar', categoria: 'Capilares', palabrasClave: 'led, fotobiologica' },
  { nombre: 'PRP Capilar', slug: 'prp-capilar', categoria: 'Capilares', palabrasClave: 'plasma pelo' },
  { nombre: 'Exosomas Capilares', slug: 'exosomas-capilar', categoria: 'Capilares', palabrasClave: 'exosomas pelo' },
  { nombre: 'Abordaje médico de la Alopecia', slug: 'alopecia', categoria: 'Capilares', palabrasClave: 'caida pelo, calvicie' },
  { nombre: 'Tratamiento Acné', slug: 'tratamiento-acne', categoria: 'Patologías', palabrasClave: 'acne, granos' },
  { nombre: 'Eliminación de léntigos / Manchas solares', slug: 'eliminacion-lentigos', categoria: 'Patologías', palabrasClave: 'manchas, melasma' },
  { nombre: 'Patología Vascular Facial (Rosácea / Cuperosis)', slug: 'rosacea-cuperosis', categoria: 'Patologías', palabrasClave: 'rosacea, rojeces, cuperosis, vascular' },
  { nombre: 'Control y modulación del Melasma', slug: 'melasma', categoria: 'Patologías', palabrasClave: 'melasma, manchas hormonales, manchas frente, labio, cloasma' },
  { nombre: 'Cicatrices de Acné y Cicatrices Atróficas', slug: 'cicatrices-acne', categoria: 'Patologías', palabrasClave: 'marcas acne, cicatrices, atroficas, subcision' },
  { nombre: 'Cicatrices Queloides e Hipertróficas', slug: 'cicatrices-queloides', categoria: 'Patologías', palabrasClave: 'queloides, hipertroficas, abultadas' },
  { nombre: 'Acné Activo e Inflamatorio (VL 555)', slug: 'acne-activo-vl555', categoria: 'Láser', palabrasClave: 'acne laser, granos, nordlys' },
  { nombre: 'Fotorejuvenecimiento Nordlys', slug: 'fotorejuvenecimiento-nordlys', categoria: 'Láser', palabrasClave: 'manchas, ipl, fotorrejuvenecimiento, luz pulsada' },
  { nombre: 'Rosácea, Cuperosis y Rojeces (VL 555)', slug: 'rosacea-nordlys', categoria: 'Láser', palabrasClave: 'rosacea laser, cuperosis, rojeces, vascular' },
  { nombre: 'Rejuvenecimiento Light & Bright', slug: 'light-bright-nordlys', categoria: 'Láser', palabrasClave: 'light bright, rejuvenecimiento, frax, manchas' },
  { nombre: 'Resurfacing Facial No Ablativo (Frax)', slug: 'resurfacing-frax', categoria: 'Láser', palabrasClave: 'resurfacing, frax 1550, arrugas, rejuvenecimiento' },
  { nombre: 'Cicatrices de Acné y Estrías (Frax)', slug: 'cicatrices-estrias-frax', categoria: 'Láser', palabrasClave: 'cicatrices laser, estrias, frax 1550, marcas' },
  { nombre: 'Hemangiomas y Puntos Rubí', slug: 'hemangiomas-nordlys', categoria: 'Láser', palabrasClave: 'puntos rubi, hemangiomas, lunares rojos, vascular' },
  { nombre: 'Fotodepilación Médica (HR 600)', slug: 'depilacion-nordlys', categoria: 'Láser', palabrasClave: 'depilacion laser, vello, pelo, hr 600' },
  { nombre: 'Tensado Cutáneo y Flacidez (Ultraformer - HIFU)', slug: 'tensado-cutaneo-hifu', categoria: 'Láser', palabrasClave: 'hifu, ultraformer, flacidez, tensado, lifting sin cirugia, smas, papada, cuello, arrugas' },
  { nombre: 'Rejuvenecimiento manos', slug: 'rejuvenecimiento-manos', categoria: 'Avanzados', palabrasClave: 'manos' },
  { nombre: 'Hiperhidrosis', slug: 'hiperhidrosis', categoria: 'Avanzados', palabrasClave: 'sudor, axilas' },
  { nombre: 'Sonrisa Gingival', slug: 'sonrisa-gingival', categoria: 'Avanzados', palabrasClave: 'encias, sonrisa' },
  { nombre: 'Bruxismo', slug: 'bruxismo', categoria: 'Avanzados', palabrasClave: 'dientes, mandibula' }
];

// ==========================================
// 5. ESTRUCTURA DEL PORTAFOLIO MÉDICO (MENÚ LATERAL)
// ==========================================
export const estructuraMenuTratamientos: MenuItem[] = [
  {
    nombre: '1. Tratamientos Faciales',
    items: [
      {
        nombre: '1.1. Armonización y Volúmenes:',
        items: [
          { nombre: 'Voluminización y perfilado de labios.', slug: 'voluminizacion-labios' },
          { nombre: 'Hidratación labial profunda.', slug: 'hidratacion-labial' },
          { nombre: 'Rinomodelación.', slug: 'rinomodelacion' },
          { nombre: 'Proyección y relleno de pómulos.', slug: 'relleno-pomulos' },
          { nombre: 'Marcaje mandibular.', slug: 'marcaje-mandibular' },
          { nombre: 'Proyección y corrección de mentón.', slug: 'correccion-menton' },
          { nombre: 'Relleno de ojeras.', slug: 'relleno-ojeras' },
          { nombre: 'Relleno de fosa temporal.', slug: 'fosa-temporal' },
          { nombre: 'Tratamiento de surco nasogeniano.', slug: 'surco-nasogeniano' }
        ]
      },
      {
        nombre: '1.2. Tratamiento de Arrugas y Líneas de Expresión:',
        items: [
          { nombre: 'Tratamiento de arrugas de expresión.', slug: 'arrugas-expresion' },
          { nombre: 'Corrección del "código de barras" (Arrugas periorales).', slug: 'codigo-barras' },
          { nombre: 'Tratamiento de bandas platismales (Cuello).', slug: 'bandas-platismales' }
        ]
      },
      {
        nombre: '1.3. Calidad de Piel y Regeneración Celular:',
        items: [
          { nombre: 'Mesoterapia facial con vitaminas y ácido hialurónico.', slug: 'mesoterapia-facial' },
          { nombre: 'Mesoterapia periocular.', slug: 'mesoterapia-periocular' },
          { nombre: 'Bioestimulación con Polinucleótidos.', slug: 'bioestimulacion-polinucleotidos' },
          { nombre: 'Plasma Rico en Plaquetas (PRP) Facial.', slug: 'prp-facial' },
          { nombre: 'Terapia avanzada con Exosomas.', slug: 'exosomas-facial' }
        ]
      },
      {
        nombre: '1.4. Inductores de Colágeno (Lifting sin Cirugía):',
        items: [
          { nombre: 'Hidroxiapatita de Calcio (Radiesse).', slug: 'radiesse' },
          { nombre: 'Ácido Poli-L-Láctico. (Sculptra).', slug: 'sculptra' }
        ]
      },
      {
        nombre: '1.5. RENOVACIÓN CUTÁNEA:',
        items: [
          { nombre: 'Glacē™: Hidrodermoabrasión y Glass Skin', slug: 'glace-hidrodermoabrasion' },
          { nombre: 'Protocolo PROXN®: Terapia Antioxidante', slug: 'protocolo-proxn' },
          { nombre: 'Peelings químicos médicos.', slug: 'peelings-quimicos' },
          { nombre: 'Microneedling médico.', slug: 'microneedling' },
          { nombre: 'Higiene Facial Glow', slug: 'higiene-facial-glow' },
          { nombre: 'Limpieza Facial Renovadora', slug: 'limpieza-facial-renovadora' },
          { nombre: 'Higiene Facial Profunda Detox', slug: 'higiene-facial-profunda-detox' },
          { nombre: 'Protocolo Venencia Glow & Regeneración', slug: 'protocolo-venencia-glow' },
        ]
      }
    ]
  },
  {
    nombre: '2. Tratamientos Corporales',
    items: [
      { nombre: 'Mesoterapia Lipolítica (Grasa Localizada y Celulitis).', slug: 'mesoterapia-lipolitica' },
      { nombre: 'Esclerosis Vascular (Eliminación de varices y arañas vasculares).', slug: 'esclerosis-vascular' },
      { nombre: 'Inductores de colágeno corporal (Firmeza y flacidez).', slug: 'inductores-corporales' },
      { nombre: 'Remodelación y aumento de glúteos con ácido hialurónico.', slug: 'aumento-gluteos' },
      { nombre: 'Maderoterapia Corporal.', slug: 'maderoterapia' },
      { nombre: 'Depilación Láser Médica.', slug: 'depilacion-laser' },
      { nombre: 'Control de Peso Médico (GLP-1).', slug: 'control-peso-medico' }
    ]
  },
  {
    nombre: '3. Tratamientos Capilares',
    items: [
      { nombre: 'Mesoterapia capilar avanzada.', slug: 'mesoterapia-capilar' },
      { nombre: 'Terapia fotobiológica (Láser LED capilar).', slug: 'laser-led-capilar' },
      { nombre: 'Plasma Rico en Plaquetas (PRP) Capilar.', slug: 'prp-capilar' },
      { nombre: 'Tratamiento capilar con Exosomas.', slug: 'exosomas-capilar' },
      { nombre: 'Abordaje médico de la Alopecia y caída capilar.', slug: 'alopecia' }
    ]
  },
  {
    nombre: '4. Patologías de la Piel',
    items: [
      { nombre: 'Tratamiento integral del Acné.', slug: 'tratamiento-acne' },
      { nombre: 'Eliminación de Léntigos / Manchas solares.', slug: 'eliminacion-lentigos' },
      { nombre: 'Patología Vascular Facial (Rosácea / Cuperosis).', slug: 'rosacea-cuperosis' },
      { nombre: 'Control y modulación del Melasma.', slug: 'melasma' },
      { nombre: 'Cicatrices de Acné y Cicatrices Atróficas.', slug: 'cicatrices-acne' },
      { nombre: 'Cicatrices Queloides e Hipertróficas.', slug: 'cicatrices-queloides' }
    ]
  },
  {
    nombre: '5. Plataformas Médicas y Láser',
    items: [
      { nombre: 'Acné Activo e Inflamatorio (VL 555).', slug: 'acne-activo-vl555' },
      { nombre: 'Fotorejuvenecimiento (PR 530 / CL 555).', slug: 'fotorejuvenecimiento-nordlys' },
      { nombre: 'Rosácea, Cuperosis y Rojeces (VL 555).', slug: 'rosacea-nordlys' },
      { nombre: 'Rejuvenecimiento Global - Protocolo Light & Bright.', slug: 'light-bright-nordlys' },
      { nombre: 'Resurfacing Facial No Ablativo (Láser Frax).', slug: 'resurfacing-frax' },
      { nombre: 'Cicatrices de Acné, Atróficas y Estrías (Láser Frax 1550).', slug: 'cicatrices-estrias-frax' },
      { nombre: 'Hemangiomas y Puntos Rubí (VL 555).', slug: 'hemangiomas-nordlys' },
      { nombre: 'Fotodepilación Médica de Alta Precisión (HR 600).', slug: 'depilacion-nordlys' },
      { nombre: 'Tensado Cutáneo y Flacidez (Ultraformer - HIFU)', slug: 'tensado-cutaneo-hifu' },
    ]
  },
  {
    nombre: '6. Tratamientos Avanzados',
    items: [
      { nombre: 'Rejuvenecimiento de manos.', slug: 'rejuvenecimiento-manos' },
      { nombre: 'Tratamiento de la Hiperhidrosis.', slug: 'hiperhidrosis' },
      { nombre: 'Corrección de la Sonrisa Gingival.', slug: 'sonrisa-gingival' },
      { nombre: 'Tratamiento médico del Bruxismo.', slug: 'bruxismo' }
    ]
  }
];

// ==========================================
// 6. MEGA BASE DE DATOS (TARJETAS DE LA HOME)
// ==========================================
export const tratamientosDB: Record<string, CategoriaData> = {
  'Tratamientos Faciales': {
    tieneSubcategorias: true,
    subcategorias: [
      {
        nombre: '1.1. Armonización y Volúmenes',
        tratamientos: [
          { nombre: 'Voluminización y perfilado de labios.', subtitulo: 'Armonización Facial', slug: 'voluminizacion-labios', imagen: '/tratamientos/voluminizacion-labios.jpeg' },
          { nombre: 'Hidratación labial profunda.', subtitulo: 'Cuidado y Prevención', slug: 'hidratacion-labial', imagen: '/tratamientos/hidratacion-labios-profunda.jpg' },
          { nombre: 'Rinomodelación.', subtitulo: 'Perfilado sin Cirugía', slug: 'rinomodelacion', imagen: '/tratamientos/rinomodelacion.jpeg' },
          { nombre: 'Proyección y relleno de pómulos.', subtitulo: 'Estructura Facial', slug: 'relleno-pomulos', imagen: '/tratamientos/rellenopomulos.jpeg' },
          { nombre: 'Marcaje mandibular.', subtitulo: 'Definición del Óvalo', slug: 'marcaje-mandibular', imagen: '/tratamientos/marcaje-mandibular.jpeg' },
          { nombre: 'Proyección y corrección de mentón.', subtitulo: 'Equilibrio de Perfil', slug: 'correccion-menton', imagen: '/tratamientos/menton.jpeg' },
          { nombre: 'Relleno de ojeras.', subtitulo: 'Mirada Descansada', slug: 'relleno-ojeras', imagen: '/tratamientos/relleno-ojeras.jpg' },
          { nombre: 'Relleno de fosa temporal.', subtitulo: 'Rejuvenecimiento Superior', slug: 'fosa-temporal', imagen: '/tratamientos/fosa-temporal.jpg' },
          { nombre: 'Tratamiento de surco nasogeniano.', subtitulo: 'Suavizado de Expresión', slug: 'surco-nasogeniano', imagen: '/tratamientos/surconasogeniano.jpeg' }
        ]
      },
      {
        nombre: '1.2. Tratamiento de Arrugas y Líneas de Expresión',
        tratamientos: [
          { nombre: 'Tratamiento de arrugas de expresión.', subtitulo: 'Tercio Superior', slug: 'arrugas-expresion', imagen: '/tratamientos/arrugas-expresion.jpeg' },
          { nombre: 'Corrección del "código de barras" (Arrugas periorales).', subtitulo: 'Rejuvenecimiento Perioral', slug: 'codigo-barras', imagen:'/tratamientos/codigo-barras.jpeg' },
          { nombre: 'Tratamiento de bandas platismales (Anillos de Venus / Cuello).', subtitulo: 'Armonización de Cuello', slug: 'bandas-platismales', imagen: '/tratamientos/bandas-plastismasles.jpeg' }
        ]
      },
      {
        nombre: '1.3. Calidad de Piel y Regeneración Celular',
        tratamientos: [
          { nombre: 'Mesoterapia facial con vitaminas y ácido hialurónico.', subtitulo: 'Nutrición Profunda', slug: 'mesoterapia-facial', imagen: '/tratamientos/mesoterapia-facial.jpeg' },
          { nombre: 'Mesoterapia periocular.', subtitulo: 'Cuidado del Contorno', slug: 'mesoterapia-periocular', imagen: '/tratamientos/mesoterapia-periocular.jpg' },
          { nombre: 'Bioestimulación con Polinucleótidos.', subtitulo: 'Regeneración Celular', slug: 'bioestimulacion-polinucleotidos', imagen: '/tratamientos/polinucleotidos.jpg' },
          { nombre: 'Plasma Rico en Plaquetas (PRP) Facial.', subtitulo: 'Bioestimulación Autóloga', slug: 'prp-facial', imagen: '/tratamientos/prpfacial.jpeg' },
          { nombre: 'Terapia avanzada con Exosomas.', subtitulo: 'Medicina Regenerativa', slug: 'exosomas-facial', imagen: '/tratamientos/terapia-avanzada-exosomas.jpg' }
        ]
      },
      {
        nombre: '1.4. Inductores de Colágeno (Efecto Lifting sin Cirugía)',
        tratamientos: [
          { nombre: 'Hidroxiapatita de Calcio (Radiesse).', subtitulo: 'Firmeza y Tensión', slug: 'radiesse', imagen: '/tratamientos/radiesse.jpeg' },
          { nombre: 'Ácido Poli-L-Láctico. (Sculptra).', subtitulo: 'Lifting sin Cirugía', slug: 'sculptra', imagen: '/tratamientos/sculptra.jpeg' }
        ]
      },
      {
        nombre: '1.5. Renovación Cutánea',
        tratamientos: [
          { nombre: 'Peelings químicos médicos.', subtitulo: 'Renovación Celular', slug: 'peelings-quimicos', imagen: '/tratamientos/peeling.jpeg' },
          { nombre: 'Microneedling médico.', subtitulo: 'Inducción de Colágeno', slug: 'microneedling', imagen: '/tratamientos/microneedling.jpeg' },
          { nombre: 'Higiene Facial Glow', subtitulo: 'Mantenimiento Express', slug: 'higiene-facial-glow', imagen: '/tratamientos/higiene-glow.jpg' },
          { nombre: 'Limpieza Facial Renovadora', subtitulo: 'Hidratación Profunda', slug: 'limpieza-facial-renovadora', imagen: '/tratamientos/limpieza-renovadora.jpg' },
          { nombre: 'Higiene Facial Profunda Detox', subtitulo: 'Limpieza Clínica', slug: 'higiene-facial-profunda-detox', imagen: '/tratamientos/higiene-detox.jpg' },
          { nombre: 'Protocolo Venencia Glow & Regeneración', subtitulo: 'El Tratamiento Estrella', slug: 'protocolo-venencia-glow', imagen: '/tratamientos/venencia-glow.jpg' },
          { nombre: 'Glacē: Hidrodermoabrasión Médica', subtitulo: 'Efecto Glass Skin', slug: 'glace-hidrodermoabrasion', imagen: '/tratamientos/tratamiento-glace.jpg' },
          { nombre: 'Protocolo PROXN®', subtitulo: 'Terapia Antioxidante', slug: 'protocolo-proxn', imagen: '/tratamientos/tratamiento-proxn.jpg' }
        ]
      }
    ]
  },
  'Tratamientos Corporales': {
    tieneSubcategorias: false,
    tratamientos: [
      { nombre: 'Mesoterapia Lipolítica (Grasa Localizada y Celulitis).', subtitulo: 'Remodelación', slug: 'mesoterapia-lipolitica', imagen: '/tratamientos/mesoterapia-lipolítica-corporal.jpg' },
      { nombre: 'Esclerosis Vascular (Eliminación de varices y arañas vasculares).', subtitulo: 'Salud Vascular', slug: 'esclerosis-vascular', imagen: '/tratamientos/esclerosis-vascular.jpeg' },
      { nombre: 'Inductores de colágeno corporal (Firmeza y flacidez).', subtitulo: 'Firmeza Corporal', slug: 'inductores-corporales', imagen: '/tratamientos/inductores-colageno.jpg' },
      { nombre: 'Remodelación y aumento de glúteos con ácido hialurónico.', subtitulo: 'Armonización Corporal', slug: 'aumento-gluteos', imagen: '/tratamientos/aumento-gluteos.jpg' },
      { nombre: 'Maderoterapia Corporal.', subtitulo: 'Remodelación y Drenaje', slug: 'maderoterapia', imagen: '/tratamientos/maderoterapia.jpeg' },
      { nombre: 'Depilación Láser Médica.', subtitulo: 'Láser de Alta Potencia', slug: 'depilacion-laser', imagen: '/tratamientos/corp-depilacion-laser.jpeg' },
      { nombre: 'Control de Peso Médico (GLP-1).', subtitulo: 'Pérdida de Grasa Sostenible', slug: 'control-peso-medico', imagen: '/tratamientos/pesoglp1.jpeg' }
    ]
  },
  'Tratamientos Capilares': {
    tieneSubcategorias: false,
    tratamientos: [
      { nombre: 'Mesoterapia capilar avanzada.', subtitulo: 'Nutrición Folicular', slug: 'mesoterapia-capilar', imagen: '/tratamientos/mesoterapia-capilar.jpeg' },
      { nombre: 'Terapia fotobiológica (Láser LED capilar).', subtitulo: 'Estimulación Lumínica', slug: 'laser-led-capilar', imagen: '/tratamientos/terapia-fotobiologica.jpeg' },
      { nombre: 'Plasma Rico en Plaquetas (PRP) Capilar.', subtitulo: 'Regeneración Folicular', slug: 'prp-capilar', imagen: '/tratamientos/prpcapilar.jpeg' },
      { nombre: 'Terapia regenerativa con Exosomas Capilares.', subtitulo: 'Regeneración Celular', slug: 'exosomas-capilar', imagen: '/tratamientos/exosomas-capilar.jpeg' },
      { nombre: 'Abordaje médico de la Alopecia y caída capilar.', subtitulo: 'Diagnóstico Integral', slug: 'alopecia', imagen: '/tratamientos/alopecia.jpeg' }
    ]
  },
  'Patologías de la Piel': {
    tieneSubcategorias: false,
    tratamientos: [
      { nombre: 'Tratamiento integral del Acné.', subtitulo: 'Control Médico', slug: 'tratamiento-acne', imagen: '/tratamientos/integral-acne.jpeg' },
      { nombre: 'Eliminación de léntigos / Manchas solares.', subtitulo: 'Unificación del Tono', slug: 'eliminacion-lentigos', imagen: '/tratamientos/manchassolares.jpeg' },
      { nombre: 'Patología Vascular Facial (Rosácea / Cuperosis).', subtitulo: 'Estabilización Vascular', slug: 'rosacea-cuperosis', imagen: '/tratamientos/rosacea-cuperosis-rojeces.jpeg' },
      { nombre: 'Control y modulación del Melasma.', subtitulo: 'Tratamiento de Manchas Crónicas', slug: 'melasma', imagen: '/tratamientos/melasma.jpg'},
      { nombre: 'Cicatrices de Acné y Cicatrices Atróficas.', subtitulo: 'Alisado de la Piel', slug: 'cicatrices-acne', imagen: '/tratamientos/cicatrices-acne-cicatrices-atroficas.jpeg', },
      { nombre: 'Cicatrices Queloides e Hipertróficas.', subtitulo: 'Remodelación Cutánea', slug: 'cicatrices-queloides', imagen: '/tratamientos/cicatriz-queloide.jpg' }
    ]
  },
  'Plataformas Médicas y Láser': {
    tieneSubcategorias: false,
    tratamientos: [
      { nombre: 'Acné Activo e Inflamatorio (VL 555).', subtitulo: 'Control Bacteriano', slug: 'acne-activo-vl555', imagen: '/tratamientos/laser-acne-activo.jpeg' },
      { nombre: 'Fotorejuvenecimiento (PR 530 / VL 555).', subtitulo: 'Unificación del Tono', slug: 'fotorejuvenecimiento-nordlys', imagen: '/tratamientos/laser-fotorejuvenecimiento.jpeg' },
      { nombre: 'Rosácea, Cuperosis y Rojeces (VL 555).', subtitulo: 'Control Vascular', slug: 'rosacea-nordlys', imagen: '/tratamientos/rosacea-cuperosis-rojeces.jpeg' },
      { nombre: 'Rejuvenecimiento Global - Protocolo Light & Bright.', subtitulo: 'Luminosidad Extrema', slug: 'light-bright-nordlys', imagen: '/tratamientos/laser-fotorejuvenecimiento-global.jpeg'},
      { nombre: 'Resurfacing Facial No Ablativo (Láser Frax).', subtitulo: 'Renovación Celular', slug: 'resurfacing-frax', imagen: '/tratamientos/laser-resurfacing-facial.jpeg' },
      { nombre: 'Cicatrices de Acné, Atróficas y Estrías (Láser Frax 1550).', subtitulo: 'Alisado Dérmico', slug: 'cicatrices-estrias-frax', imagen: '/tratamientos/laser-cicatrices-acne.jpeg' },
      { nombre: 'Hemangiomas y Puntos Rubí (VL 555).', subtitulo: 'Eliminación Vascular', slug: 'hemangiomas-nordlys', imagen: '/tratamientos/hemangiomaspuntosrubi.jpeg' },
      { nombre: 'Fotodepilación Médica de Alta Precisión (HR 600).', subtitulo: 'Eliminación Definitiva', slug: 'depilacion-nordlys', imagen: '/tratamientos/fotodepilacion.jpeg' },
      { nombre: 'Tensado Cutáneo y Flacidez (Ultraformer - HIFU).', subtitulo: 'Lifting sin Cirugía', slug: 'tensado-cutaneo-hifu', imagen: '/clinica/hifu.jpg' },
    ]
  },
  'Tratamientos Avanzados': {
    tieneSubcategorias: false,
    tratamientos: [
      { nombre: 'Rejuvenecimiento de manos.', subtitulo: 'Cuidado Integral', slug: 'rejuvenecimiento-manos', imagen: '/tratamientos/rejuvenecimiento-manos.jpeg'},
      { nombre: 'Tratamiento de la Hiperhidrosis.', subtitulo: 'Control de Sudoración', slug: 'hiperhidrosis', imagen: '/tratamientos/hyperhidrosis.jpeg' },
      { nombre: 'Corrección de la Sonrisa Gingival.', subtitulo: 'Armonización Dental', slug: 'sonrisa-gingival', imagen: '/tratamientos/sonrisa-gingival.jpeg' },
      { nombre: 'Tratamiento médico del Bruxismo.', subtitulo: 'Salud y Bienestar', slug: 'bruxismo', imagen: '/tratamientos/bruxismo.jpeg' }
    ]
  }
};