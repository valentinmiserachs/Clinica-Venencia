"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// ==========================================
// 1. MOLDES DE DATOS (INTERFACES)
// ==========================================
interface Evidencia { titulo: string; fuente: string; link: string; }
interface FAQ { pregunta: string; respuesta: string; }
interface Parametro { titulo: string; valor: string; }
interface AntesDespues { antes: string; despues: string; }
interface DetallesTratamiento { descripcion: string; ventajas: string[]; faqs: FAQ[]; evidencia?: Evidencia[]; }
interface Tratamiento { nombre: string; tituloDescripcion?: string; imagen: string; descripcionBreve: string; antesDespues: AntesDespues; detalles: DetallesTratamiento; parametros: Parametro[]; }

const imgProvisional = '/textura-piel.webp';
const AD: AntesDespues = { antes: imgProvisional, despues: imgProvisional };

// ==========================================
// 2. MEGA BASE DE DATOS (TEXTOS MÉDICOS REALES PARA TODOS LOS TRATAMIENTOS)
// ==========================================
const tratamientosData: Record<string, Tratamiento> = {

  // --- 1.1 ARMONIZACIÓN Y VOLÚMENES ---
  "voluminizacion-labios": {
    nombre: "Voluminización y perfilado de labios",
    tituloDescripcion: "¿EN QUÉ CONSISTE EL TRATAMIENTO?",
    imagen: "/textura-piel.webp",
    descripcionBreve: "",
    antesDespues: { antes: "/textura-piel.webp", despues: "/textura-piel.webp" },
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
    imagen: imgProvisional, 
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
    imagen: imgProvisional, descripcionBreve: 'Abordaje estructural profundo para elevar la base nasal y suavizar el rictus superior.', antesDespues: AD,
    detalles: {
      descripcion: 'Tratamiento médico avanzado enfocado en la fosa piriforme (base de la nariz). Al infiltrar ácido hialurónico de alta densidad en este plano óseo profundo, logramos proyectar la base nasal, lo que automáticamente levanta la punta de la nariz y suaviza el inicio del surco nasogeniano.',
      ventajas: ['Proyección sutil del tercio medio facial.', 'Suaviza el pliegue nasolabial desde su origen profundo.', 'Mejora el soporte estructural del rostro.'],
      faqs: [{ pregunta: '¿Es un tratamiento doloroso?', respuesta: 'Se realiza en planos óseos profundos donde hay menos terminaciones nerviosas, siendo muy tolerable con anestesia local.' }],
      evidencia: [{ titulo: "Piriform Fossa Augmentation with Hyaluronic Acid", fuente: "Plastic and Reconstructive Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Inyección Profunda' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'Inmediatos' }, { titulo: 'Duración', valor: '12-18 meses' }]
  },
  'relleno-pomulos': {
    nombre: 'Proyección y relleno de pómulos',
    imagen: "/vero-facial.jpeg", descripcionBreve: 'Estructura tu rostro, combate el descolgamiento y recupera el "triángulo de la juventud".', antesDespues: AD,
    detalles: {
      descripcion: 'Con el paso del tiempo, los compartimentos grasos de las mejillas descienden. Reponemos este volumen perdido a nivel supraperióstico profundo. Esto no solo realza el pómulo, sino que genera un efecto lifting indirecto que mejora el surco nasogeniano y reafirma el óvalo.',
      ventajas: ['Efecto lifting no quirúrgico inmediato.', 'Masculinización o feminización del rostro a medida.', 'Mejora la luz y el contorno facial central.'],
      faqs: [{ pregunta: '¿Quedaré con las mejillas muy grandes?', respuesta: 'Estudiamos tu estructura ósea para reponer estrictamente el volumen perdido, manteniendo tu esencia.' }],
      evidencia: [{ titulo: "Midface Rejuvenation with Volumizing Fillers", fuente: "Aesthetic Surgery Journal", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Cánula profunda' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'Inmediatos' }, { titulo: 'Duración', valor: '12-18 meses' }]
  },
  'marcaje-mandibular': {
    nombre: 'Marcaje mandibular',
    imagen: imgProvisional, descripcionBreve: 'Define tu contorno facial, tensa el cuello y proyecta seguridad con una mandíbula estructurada.', antesDespues: AD,
    detalles: {
      descripcion: 'Infiltramos hidroxiapatita cálcica o ácido hialurónico de alta densidad a lo largo de la rama mandibular. Este soporte estructural define el límite exacto entre el rostro y el cuello, camuflando la flacidez leve y aportando fuerza al perfil.',
      ventajas: ['Definición nítida del óvalo facial.', 'Efecto estilizador del cuello y reducción visual de la papada.', 'Tratamiento estrella en la armonización masculina y femenina.'],
      faqs: [{ pregunta: '¿Es igual para hombres que para mujeres?', respuesta: 'No. En mujeres buscamos una V elegante, y en hombres ángulos rectos más ensanchados.' }],
      evidencia: [{ titulo: "Jawline Contouring with Fillers", fuente: "Dermatologic Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Cánula' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'Inmediatos' }, { titulo: 'Duración', valor: '12-18 meses' }]
  },
  'correccion-menton': {
    nombre: 'Proyección y corrección de mentón',
    imagen: imgProvisional, descripcionBreve: 'Equilibra tu perfil, reduce visualmente la papada y aporta fuerza a tu estructura facial.', antesDespues: AD,
    detalles: {
      descripcion: 'Un mentón retraído (retrognatia leve) desequilibra todo el rostro y hace que la nariz parezca más prominente. Proyectamos el mentón hacia adelante o hacia abajo según la necesidad anatómica, mejorando la tensión de la piel del cuello y armonizando la perfiloplastia.',
      ventajas: ['Armonización instantánea del perfil (Perfiloplastia).', 'Mejora la tensión de la papada.', 'Procedimiento rápido y de alto impacto visual.'],
      faqs: [{ pregunta: '¿Es un implante?', respuesta: 'No, es ácido hialurónico denso que simula la dureza del hueso, siendo 100% reversible y reabsorbible.' }],
      evidencia: [{ titulo: "Chin Augmentation with Hyaluronic Acid", fuente: "Journal of Craniofacial Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Microinyección ósea' }, { titulo: 'Tiempo', valor: '20 min' }, { titulo: 'Resultados', valor: 'Inmediatos' }, { titulo: 'Duración', valor: '12-18 meses' }]
  },
  'relleno-ojeras': {
    nombre: 'Relleno de ojeras',
    tituloDescripcion: '¿Qué es el relleno de ojeras con ácido hialurónico?',
    imagen: imgProvisional,
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
    imagen: imgProvisional, descripcionBreve: 'Rejuvenece el tercio superior y eleva la cola de la ceja restaurando el volumen de las sienes.', antesDespues: AD,
    detalles: {
      descripcion: 'Con la edad o la pérdida de peso, las sienes se hunden dando un aspecto esqueletizado o cadavérico. Al reponer el volumen en la fosa temporal profunda, logramos un efecto "lifting" que abre la mirada y devuelve la suavidad ovalada al rostro.',
      ventajas: ['Elevación indirecta y natural de la cola de la ceja.', 'Suaviza las transiciones óseas del contorno facial.', 'Aporta un aspecto saludable e hidratado.'],
      faqs: [{ pregunta: '¿Duele?', respuesta: 'Es un área que puede generar cierta presión temporal durante la infiltración, pero utilizamos anestesia para asegurar tu confort.' }],
      evidencia: [{ titulo: "Temporal Fossa Volumization Techniques", fuente: "Aesthetic Surgery Journal", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Cánula / Aguja' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'Inmediatos' }, { titulo: 'Duración', valor: '12-18 meses' }]
  },
  'surco-nasogeniano': {
    nombre: 'Tratamiento de surco nasogeniano',
    imagen: imgProvisional, descripcionBreve: 'Suaviza las líneas de tristeza y el rictus para un rostro más amable, fresco y descansado.', antesDespues: AD,
    detalles: {
      descripcion: 'El pliegue que va desde la nariz hasta la boca envejece severamente el rostro. Infiltramos ácido hialurónico dinámico a lo largo del surco para "planchar" la arruga desde el interior, devolviendo la tersura al tercio medio facial.',
      ventajas: ['Eliminación del aspecto de cansancio crónico o tristeza.', 'Rejuvenecimiento instantáneo de la zona perioral.', 'Resultados que acompañan el movimiento natural de tu rostro.'],
      faqs: [{ pregunta: '¿Se notará raro al sonreír?', respuesta: 'Usamos hialurónicos con tecnología resiliente (dinámicos) que se estiran y adaptan cuando gesticulas y sonríes.' }],
      evidencia: [{ titulo: "Nasolabial Fold Correction with Dermal Fillers", fuente: "Dermatologic Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Cánula subdérmica' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'Inmediatos' }, { titulo: 'Duración', valor: '9-12 meses' }]
  },

  // --- 1.2 ARRUGAS Y LÍNEAS ---
  'arrugas-expresion': {
    nombre: 'Tratamiento de arrugas de expresión',
    imagen: imgProvisional, descripcionBreve: 'Relaja la musculatura facial para suavizar arrugas, despejar la mirada y prevenir el envejecimiento.', antesDespues: AD,
    detalles: {
      descripcion: 'El tratamiento preventivo antiaging por excelencia. Mediante la relajación selectiva y temporal de los músculos depresores (entrecejo, frente y patas de gallo), logramos difuminar las arrugas dinámicas antes de que rompan la piel. El resultado es una mirada abierta y un rostro sereno.',
      ventajas: ['Prevención activa de las arrugas profundas.', 'Mirada iluminada, descansada y cejas sutilmente elevadas.', 'Piel visiblemente más lisa y brillante.'],
      faqs: [{ pregunta: '¿Perderé la expresión?', respuesta: 'No. El objetivo moderno ("Baby Botox") es modular el músculo, no paralizarlo, conservando tu gestualidad intacta.' }],
      evidencia: [{ titulo: "Long-term safety of neuromodulators", fuente: "Dermatologic Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Microinyección' }, { titulo: 'Tiempo', valor: '20 min' }, { titulo: 'Resultados', valor: 'A los 4-10 días' }, { titulo: 'Duración', valor: '4-6 meses' }]
  },
  'codigo-barras': {
    nombre: 'Corrección del "código de barras"',
    imagen: imgProvisional, descripcionBreve: 'Alisado de las arrugas periorales para rejuvenecer la zona alrededor de la boca sin aportar volumen.', antesDespues: AD,
    detalles: {
      descripcion: 'Las arrugas verticales sobre el labio superior se tratan combinando técnicas: usamos la técnica "Blanching" con infiltración superficial de ácido hialurónico muy elástico para rellenar la línea rota, a menudo apoyado con microdosis neuromoduladoras para evitar la contracción excesiva.',
      ventajas: ['Rejuvenecimiento estético de la zona perioral.', 'Evita que el pintalabios se cuartee por las líneas finas.', 'Tratamiento discreto sin efecto de "labio inflado".'],
      faqs: [{ pregunta: '¿Me cambiará la boca?', respuesta: 'En absoluto. Se trata solo la piel blanca (el bigote), no la mucosa labial.' }],
      evidencia: [{ titulo: "Perioral Rejuvenation and Blanching Technique", fuente: "Plastic and Reconstructive Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Blanching superficial' }, { titulo: 'Tiempo', valor: '20 min' }, { titulo: 'Resultados', valor: 'Inmediatos' }, { titulo: 'Duración', valor: '6-9 meses' }]
  },
  'bandas-platismales': {
    nombre: 'Tratamiento de bandas platismales',
    imagen: imgProvisional, descripcionBreve: 'Suaviza el cuello, los anillos de Venus y estiliza el óvalo facial relajando la tensión muscular.', antesDespues: AD,
    detalles: {
      descripcion: 'El músculo platisma (en el cuello) tira constantemente hacia abajo, desdibujando la mandíbula y marcando "cuerdas" verticales. Al relajar estratégicamente estas bandas con neuromoduladores (Técnica del Lifting de Nefertiti), permitimos que los músculos elevadores de la cara ganen, redefiniendo el cuello.',
      ventajas: ['Efecto "Lifting de Nefertiti" inmediato sin cirugía.', 'Estiliza y alarga visualmente el cuello.', 'Frena el descolgamiento del tercio inferior facial.'],
      faqs: [{ pregunta: '¿Afecta al tragar o hablar?', respuesta: 'No, el tratamiento es estrictamente superficial en las bandas platismales, no afecta a las estructuras internas del cuello.' }],
      evidencia: [{ titulo: "Nefertiti Lift: A new technique for lower face contouring", fuente: "Journal of Cosmetic and Laser Therapy", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Neuromodulación' }, { titulo: 'Tiempo', valor: '15 min' }, { titulo: 'Resultados', valor: 'A los 10 días' }, { titulo: 'Duración', valor: '4-6 meses' }]
  },

  // --- 1.3 CALIDAD DE PIEL ---
  'mesoterapia-facial': {
    nombre: 'Mesoterapia facial con vitaminas y ácido hialurónico',
    imagen: imgProvisional, descripcionBreve: 'Nutrición profunda inyectada para un efecto "Glow" instantáneo, cerrando poros y unificando el tono.', antesDespues: AD,
    detalles: {
      descripcion: 'Infiltramos un cóctel médico bio-nutritivo (ácido hialurónico no reticulado, vitaminas C, E, aminoácidos y coenzimas) directamente en la dermis superficial. Esto actúa como un fertilizante celular, rehidratando la piel desde dentro y protegiéndola de la oxidación celular.',
      ventajas: ['Piel intensamente hidratada, jugosa y elástica.', 'Efecto flash luminoso ideal para eventos (Efecto Glow).', 'Lucha activa contra el fotoenvejecimiento.'],
      faqs: [{ pregunta: '¿Quedan moratones?', respuesta: 'Las agujas son minúsculas, puede quedar algún micro-hematoma que se disimula fácilmente con maquillaje.' }],
      evidencia: [{ titulo: "Mesotherapy for Facial Skin Rejuvenation", fuente: "Journal of Clinical Medicine", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Micropunciones' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'En 48 horas' }, { titulo: 'Duración', valor: 'Mantenimiento mensual/trimestral' }]
  },
  'mesoterapia-periocular': {
    nombre: 'Mesoterapia periocular',
    imagen: imgProvisional, descripcionBreve: 'Revitalización profunda del contorno de ojos para borrar finas líneas y mejorar la pigmentación.', antesDespues: AD,
    detalles: {
      descripcion: 'El contorno de ojos tiene la piel más fina del cuerpo. Utilizamos un complejo peptídico y despigmentante específico para esta zona. Drena líquidos, refuerza los capilares sanguíneos y engrosa la piel, atenuando las arrugas finas y aclarando las ojeras marrones/violáceas.',
      ventajas: ['Reducción de ojeras vasculares y pigmentarias.', 'Alisa la textura "arrugada" de la piel inferior del ojo.', 'Mirada iluminada, drenada y descansada.'],
      faqs: [{ pregunta: '¿Se inflaman los ojos?', respuesta: 'Puede haber una leve inflamación transitoria que baja a las pocas horas. Es completamente normal.' }],
      evidencia: [{ titulo: "Periocular Rejuvenation Strategies", fuente: "Aesthetic Plastic Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Microinyección dérmica' }, { titulo: 'Tiempo', valor: '20 min' }, { titulo: 'Resultados', valor: 'Acumulativos' }, { titulo: 'Duración', valor: 'Mantenimiento' }]
  },
  'polinucleotidos': {
    nombre: 'Bioestimulación con Polinucleótidos',
    imagen: imgProvisional, descripcionBreve: 'Medicina regenerativa celular de última generación para reparar tejidos dañados y fotoenvejecidos.', antesDespues: AD,
    detalles: {
      descripcion: 'Los polinucleótidos son fracciones de ADN altamente purificado. No son un relleno, son verdaderos "obreros" celulares. Se unen a los receptores de los fibroblastos ordenándoles que se multipliquen, reparen el daño solar, creen colágeno nuevo y neutralicen los radicales libres.',
      ventajas: ['Regeneración tisular profunda a nivel ADN.', 'Aumento drástico de la elasticidad y firmeza de la piel.', 'Poder antiinflamatorio (excelente para pacientes con rosácea).'],
      faqs: [{ pregunta: '¿Dan alergia?', respuesta: 'No, son moléculas purificadas que presentan una biocompatibilidad absoluta.' }],
      evidencia: [{ titulo: "Polynucleotides in Aesthetic Medicine", fuente: "Journal of Cosmetic Dermatology", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Infiltración intradérmica' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'A partir de 1 mes' }, { titulo: 'Duración', valor: 'Largo plazo' }]
  },
  'prp-facial': {
    nombre: 'Plasma Rico en Plaquetas (PRP) Facial',
    imagen: imgProvisional, descripcionBreve: 'El poder regenerador de tu propia sangre para una piel luminosa, firme y sin imperfecciones.', antesDespues: AD,
    detalles: {
      descripcion: 'Extraemos una pequeña muestra de tu sangre, la centrifugamos para separar el plasma y los Factores de Crecimiento Plaquetario, y los reinyectamos en la dermis facial. Estas proteínas autologas aceleran la reparación celular, creando colágeno nuevo y revitalizando el tejido (Vampire Facial).',
      ventajas: ['Tratamiento 100% autólogo: imposible que haya rechazo o alergia.', 'Mejora drásticamente la calidad y luminosidad de la piel.', 'Acelera la curación de marcas y secuelas de acné.'],
      faqs: [{ pregunta: '¿Duele?', respuesta: 'Aplicamos crema anestésica previamente para hacer el procedimiento muy confortable.' }],
      evidencia: [{ titulo: "Platelet-Rich Plasma for Skin Rejuvenation", fuente: "Dermatologic Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Extracción + Mesoterapia' }, { titulo: 'Tiempo', valor: '60 min' }, { titulo: 'Resultados', valor: 'A los 20 días' }, { titulo: 'Duración', valor: 'Mantenimiento anual' }]
  },
  'exosomas-facial': {
    nombre: 'Terapia avanzada con Exosomas',
    imagen: imgProvisional, descripcionBreve: 'La innovación definitiva en antiaging biológico. Señalización celular para una regeneración total.', antesDespues: AD,
    detalles: {
      descripcion: 'Los exosomas son nanovesículas mensajeras derivadas de células madre. Aplicados mediante micropunción, penetran en la piel y "comunican" a las células envejecidas que deben volver a comportarse de manera joven. Tienen una concentración regenerativa miles de veces superior al PRP.',
      ventajas: ['El antiaging biológico más potente y moderno.', 'Reduce drásticamente rojeces, melasma y calma la rosácea.', 'Alisa la textura y cierra poros como ningún otro activo.'],
      faqs: [{ pregunta: '¿Se inyectan?', respuesta: 'No, se aplican sobre la piel mediante canales creados con Microneedling (Dermapen) para maximizar su penetración.' }],
      evidencia: [{ titulo: "Exosomes in Skin Regeneration and Rejuvenation", fuente: "Biomaterials Research", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Microneedling' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'Semanas' }, { titulo: 'Duración', valor: 'Largo Plazo' }]
  },

  // --- 1.4 INDUCTORES DE COLÁGENO ---
  'radiesse': {
    nombre: 'Hidroxiapatita de Calcio (Radiesse)',
    imagen: imgProvisional, descripcionBreve: 'Inductor de colágeno estelar. Tensa, redensifica y combate la flacidez creando una nueva red de soporte.', antesDespues: AD,
    detalles: {
      descripcion: 'Infiltramos microesferas de Hidroxiapatita Cálcica mediante vectores de tensión bajo la piel. Estas esferas actúan como andamios que estimulan a tus fibroblastos para producir colágeno tipo I (colágeno joven) y elastina. Logramos un efecto lifting biológico, reafirmando el óvalo facial.',
      ventajas: ['Efecto tensor reafirmante sin aportar volumen indeseado.', 'Trata eficazmente la flacidez del tercio inferior y cuello.', 'Mejora radical del grosor y la calidad cutánea.'],
      faqs: [{ pregunta: '¿Se parece al ácido hialurónico?', respuesta: 'No. El hialurónico rellena e hidrata; Radiesse "despierta" a la piel para que se tense y se cure por sí misma.' }],
      evidencia: [{ titulo: "Calcium Hydroxylapatite for Facial Rejuvenation", fuente: "Journal of Clinical and Aesthetic Dermatology", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Vectores (Cánula)' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'Efecto lifting progresivo (1 a 3 meses)' }, { titulo: 'Duración', valor: '12-18 meses' }]
  },
  'sculptra': {
    nombre: 'Ácido Poli-L-Láctico (Sculptra)',
    imagen: imgProvisional, descripcionBreve: 'El secreto del "Lifting líquido". Reactiva el colágeno profundo para restaurar toda la estructura facial.', antesDespues: AD,
    detalles: {
      descripcion: 'Sculptra actúa en la dermis profunda para restaurar los cimientos del rostro. Induce una respuesta inflamatoria subclínica controlada que reemplaza el colágeno perdido gradualmente, tratando la flacidez severa, el descolgamiento y restaurando los volúmenes perdidos de forma ultra natural.',
      ventajas: ['Abordaje global de la flacidez de todo el rostro en una sesión.', 'Resultados progresivos y extremadamente sutiles (nadie nota el cambio de golpe).', 'Durabilidad clínica superior.'],
      faqs: [{ pregunta: '¿Cuándo veré los resultados?', respuesta: 'Es un tratamiento para pacientes. El cuerpo tarda unas 4-8 semanas en sintetizar las nuevas bandas de colágeno.' }],
      evidencia: [{ titulo: "Poly-L-lactic acid for soft tissue augmentation", fuente: "Dermatologic Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Cánula profunda' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'A los 2-3 meses' }, { titulo: 'Duración', valor: 'Hasta 2 años' }]
  },

  // --- 1.5 RENOVACIÓN CUTÁNEA ---
  'peelings-quimicos': {
    nombre: 'Peelings químicos médicos',
    imagen: imgProvisional, descripcionBreve: 'Renovación celular programada para eliminar manchas, acné y devolverle a la piel su luz natural.', antesDespues: AD,
    detalles: {
      descripcion: 'Aplicamos soluciones ácidas dermatológicas (TCA, salicílico, glicólico, fenol) que inducen una quimioexfoliación controlada de las capas dañadas de la epidermis. Esto obliga a la piel a renovarse con células nuevas, sanas y libres de pigmento excesivo.',
      ventajas: ['Mejora radicalmente las marcas de acné activo y cicatrices superficiales.', 'Eliminación del estrato córneo apagado (Efecto Flash).', 'Difumina el melasma y unifica el tono.'],
      faqs: [{ pregunta: '¿Me pelaré como una serpiente?', respuesta: 'Depende de la profundidad elegida. Tenemos peelings superficiales para iluminar sin pelar, y peelings medios donde descamarás suavemente unos 3 días.' }],
      evidencia: [{ titulo: "Chemical Peels in Aesthetic Dermatology", fuente: "Clinical, Cosmetic and Investigational Dermatology", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Quimioexfoliación' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'Tras la descamación (5-7 días)' }, { titulo: 'Duración', valor: 'Mantenimiento' }]
  },
  'microneedling': {
    nombre: 'Microneedling médico',
    imagen: imgProvisional, descripcionBreve: 'Inducción de colágeno mediante microagujas para cicatrices, poros dilatados y mejora de textura.', antesDespues: AD,
    detalles: {
      descripcion: 'Utilizamos dispositivos médicos de micropunción motorizada (Dermapen/Nanopore) para crear miles de microcanales en la piel. Esto engaña al cuerpo haciéndole creer que hay una herida, provocando una avalancha de colágeno natural para curarla. Además, usamos estos canales para infundir vitaminas o ácido hialurónico puro.',
      ventajas: ['Reducción espectacular del tamaño del poro.', 'Tratamiento no térmico ideal para afinar cicatrices de acné.', 'Renovación de la textura cutánea sin riesgo de quemadura.'],
      faqs: [{ pregunta: '¿Sangra?', respuesta: 'Se genera un eritema (enrojecimiento) y un leve rocío sangrante microscópico que es necesario para liberar factores de crecimiento.' }],
      evidencia: [{ titulo: "Microneedling: Advances and widening horizons", fuente: "Indian Journal of Dermatology", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Micropunción automatizada' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'A los 15 días' }, { titulo: 'Duración', valor: 'Mantenimiento' }]
  },
  'limpieza-facial': {
    nombre: 'Limpieza Facial Personalizada',
    imagen: imgProvisional, descripcionBreve: 'Higiene purificante de grado clínico. Prepara, vacía los poros y equilibra la microbiota de tu piel.', antesDespues: AD,
    detalles: {
      descripcion: 'Mucho más que una higiene tradicional en cabina. Diseñamos un protocolo personalizado (hidrodermoabrasión, peeling enzimático, extracción ultrasónica) para desincrustar la suciedad y el sebo oxidado de los poros sin agresiones manuales, estabilizando el manto lipídico protector.',
      ventajas: ['Piel oxigenada, suave y libre de comedones.', 'Minimiza la apariencia del poro dilatado.', 'Paso previo indispensable para maximizar la eficacia de láseres e infiltraciones.'],
      faqs: [{ pregunta: '¿Saldré con la cara irritada o marcada?', respuesta: 'No. Nuestros protocolos finalizan con activos calmantes que dejan la piel perfecta inmediatamente.' }],
      evidencia: []
    },
    parametros: [{ titulo: 'Técnica', valor: 'Aparatología Clínica / Cosmecéutica' }, { titulo: 'Tiempo', valor: '60 min' }, { titulo: 'Resultados', valor: 'Inmediatos' }, { titulo: 'Duración', valor: '1 - 2 meses' }]
  },

  // --- 2. TRATAMIENTOS CORPORALES ---
  'mesoterapia-lipolitica': {
    nombre: 'Mesoterapia Lipolítica (Grasa Localizada y Celulitis)',
    imagen: imgProvisional, descripcionBreve: 'Elimina adiposidades rebeldes y deshace la celulitis con principios activos inyectados que queman grasa.', antesDespues: AD,
    detalles: {
      descripcion: 'Microinyecciones de activos lipolíticos, péptidos y enzimas (como la L-carnitina y desoxicolato) directamente en el tejido graso subcutáneo. Estos compuestos destruyen la membrana del adipocito y disuelven los nódulos fibróticos de la celulitis, permitiendo al sistema linfático drenar la grasa naturalmentte.',
      ventajas: ['Reducción de centímetros en zonas rebeldes (flancos, abdomen, cartucheras).', 'Alisado visible de la "piel de naranja".', 'Alternativa real sin cirugía a la liposucción focalizada.'],
      faqs: [{ pregunta: '¿Duele?', respuesta: 'Las agujas de mesoterapia corporal son mínimas. Es un tratamiento rápido y perfectamente tolerable.' }],
      evidencia: [{ titulo: "Injection Lipolysis for Body Contouring", fuente: "Plastic and Reconstructive Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Microinyección corporal' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'Progresivos' }, { titulo: 'Duración', valor: 'Permanente (en esa célula)' }]
  },
  'esclerosis-vascular': {
    nombre: 'Esclerosis Vascular (Eliminación de varices y arañas vasculares)',
    imagen: imgProvisional, descripcionBreve: 'Eliminación médica definitiva de varices y antiestéticas arañas vasculares en las piernas.', antesDespues: AD,
    detalles: {
      descripcion: 'El gold-standard de la fleboestética. Infiltramos un agente esclerosante (en líquido o microespuma) con una aguja invisible directamente en la vena o araña vascular. El líquido irrita la pared de la vena, haciendo que se cierre (colapse) y se convierta en tejido fibroso que el cuerpo reabsorbe y hace desaparecer.',
      ventajas: ['Eliminación completa de trayectos venosos y capilares rotos.', 'Alivio de la sensación de pesadez y dolor en piernas.', 'Procedimiento ambulatorio, sin quirófano ni baja médica.'],
      faqs: [{ pregunta: '¿Hay que llevar medias de compresión?', respuesta: 'Sí, recomendamos usar medias de compresión los días posteriores para asegurar el cierre de la vena.' }],
      evidencia: [{ titulo: "Sclerotherapy in the Treatment of Varicose Veins", fuente: "Phlebology", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Micro-escleroterapia' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'A las semanas' }, { titulo: 'Duración', valor: 'Definitiva' }]
  },
  'inductores-corporales': {
    nombre: 'Inductores de colágeno corporal (Firmeza y flacidez)',
    imagen: imgProvisional, descripcionBreve: 'Combate la flacidez severa en brazos, abdomen o muslos tensando la piel desde su interior.', antesDespues: AD,
    detalles: {
      descripcion: 'Utilizamos bioestimuladores avanzados (como ácido poliláctico o hidroxiapatita cálcica hiperdiluida) inyectados en red bajo la piel del cuerpo. Provocan una reacción que genera mallas densas de colágeno y elastina, "pegando" la piel laxa al músculo en zonas conflictivas (cara interna de brazos/muslos, rodillas, abdomen).',
      ventajas: ['Tensado espectacular y engrosamiento de la piel fina y arrugada.', 'Mejora estética de estrías blancas y celulitis flácida.', 'Recuperación de la tensión abdominal post-parto.'],
      faqs: [{ pregunta: '¿Cuántas sesiones se necesitan?', respuesta: 'Normalmente se pautan entre 2 y 3 sesiones espaciadas para una creación de colágeno óptima.' }],
      evidencia: [{ titulo: "Body Contouring using Bio-stimulatory Fillers", fuente: "Journal of Drugs in Dermatology", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Cánula en abanico' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'A los 2-3 meses' }, { titulo: 'Duración', valor: '18-24 meses' }]
  },
  'aumento-gluteos': {
    nombre: 'Remodelación y aumento de glúteos con ácido hialurónico',
    imagen: imgProvisional, descripcionBreve: 'Proyecta, redondea y eleva tus glúteos sin necesidad de someterte a cirugías ni implantes.', antesDespues: AD,
    detalles: {
      descripcion: 'Procedimiento de vanguardia usando ácido hialurónico corporal macromolecular (muy denso). Se inyecta profundamente para rediseñar la forma del glúteo a medida: rellenamos hundimientos laterales (los temidos "hip dips"), elevamos el polo superior y aportamos un volumen sensual, liso y sin celulitis.',
      ventajas: ['Aumento de glúteos sin cirugía, sin anestesia general y sin posoperatorio doloroso.', 'Moldeado anatómico exacto a diferencia de las prótesis.', 'Mejora la tensión de la piel, alisando hoyuelos de celulitis.'],
      faqs: [{ pregunta: '¿Se nota al tacto?', respuesta: 'No. El material se integra en el tejido celular subcutáneo y tiene la misma textura natural que la grasa glútea.' }],
      evidencia: [{ titulo: "Non-surgical Gluteal Augmentation with Hyaluronic Acid", fuente: "Aesthetic Surgery Journal", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Cánula profunda corporal' }, { titulo: 'Tiempo', valor: '60 min' }, { titulo: 'Resultados', valor: 'Inmediatos' }, { titulo: 'Duración', valor: '12-24 meses' }]
  },
  'depilacion-laser': {
    nombre: 'Depilación Láser Médica',
    imagen: imgProvisional, descripcionBreve: 'Eliminación permanente del vello corporal bajo estricta supervisión médica y tecnología clínica de alta potencia.', antesDespues: AD,
    detalles: {
      descripcion: 'No toda la depilación láser es igual. En un entorno clínico usamos plataformas médicas de alta penetración que alcanzan la papila folicular con temperaturas superiores a los 65ºC. Esto coagula los vasos que alimentan al pelo, destruyendo la matriz germinativa y eliminando el vello para siempre, resolviendo problemas como la foliculitis.',
      ventajas: ['Eficacia clínica real en muchas menos sesiones que los equipos de centros estéticos.', 'Supervisión médica: garantía contra quemaduras y ajuste a tu fototipo de piel.', 'Solución médica y estética para la pseudofoliculitis (vellos enquistados).'],
      faqs: [{ pregunta: '¿Duele?', respuesta: 'Nuestros equipos clínicos incorporan sistemas de refrigeración por gas o zafiro que congelan la piel milisegundos antes del disparo láser, haciéndolo casi indoloro.' }],
      evidencia: [{ titulo: "Laser Hair Removal: Long-Term Efficacy", fuente: "Dermatologic Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Láser Médico Alta Potencia' }, { titulo: 'Tiempo', valor: 'Variable' }, { titulo: 'Resultados', valor: 'Desde la 1ª sesión' }, { titulo: 'Duración', valor: 'Permanente' }]
  },

  // --- 3. TRATAMIENTOS CAPILARES ---
  'mesoterapia-capilar': {
    nombre: 'Mesoterapia capilar avanzada',
    imagen: imgProvisional, descripcionBreve: 'Nutrición y medicación inyectada directamente en la raíz para frenar en seco la caída capilar.', antesDespues: AD,
    detalles: {
      descripcion: 'El folículo piloso a menudo no recibe los nutrientes por vía oral. Inyectamos magistralmente en la dermis del cuero cabelludo (a 2mm de profundidad) una mezcla de inhibidores hormonales (como Dutasterida), péptidos bioactivos, vitaminas y aminoácidos que frenan la miniaturización y engrosan el tallo piloso.',
      ventajas: ['Entrega la medicación al 100% en la diana (la raíz del pelo).', 'Engrosa visiblemente el pelo fino y debilitado.', 'Detiene con alta eficacia la caída androgénica y el efluvio telógeno.'],
      faqs: [{ pregunta: '¿Duele que te pinchen en la cabeza?', respuesta: 'Usamos agujas invisibles de mesoterapia y sistemas de frío (crioterapia local) que hacen el procedimiento muy tolerable.' }],
      evidencia: [{ titulo: "Dutasteride Mesotherapy in Androgenetic Alopecia", fuente: "Journal of the American Academy of Dermatology", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Microinyecciones bulbares' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'Al 3º mes' }, { titulo: 'Duración', valor: 'Mantenimiento periódico' }]
  },
  'laser-led-capilar': {
    nombre: 'Terapia fotobiológica (Láser LED capilar)',
    imagen: imgProvisional, descripcionBreve: 'Estimulación lumínica indolora para multiplicar el riego sanguíneo de tus folículos capilares.', antesDespues: AD,
    detalles: {
      descripcion: 'La Terapia LLLT (Low Level Laser Therapy) baña el cuero cabelludo con luz roja y cercana al infrarrojo. Las células madre del folículo absorben esta energía y aumentan su metabolismo (ATP). Esto reduce la inflamación microscópica y prolonga la fase anágena (de crecimiento) del pelo.',
      ventajas: ['Tratamiento 100% indoloro, no invasivo y relajante.', 'Potencia exponencialmente los efectos del PRP capilar y la mesoterapia.', 'Mejora el entorno capilar, reduciendo dermatitis, caspa o grasa excesiva.'],
      faqs: [{ pregunta: '¿Funciona por sí solo?', respuesta: 'Sirve como mantenimiento y prevención, pero su verdadero poder clínico se ve al combinarlo con terapias inyectables.' }],
      evidencia: [{ titulo: "Low-Level Laser (Light) Therapy for Hair Loss", fuente: "Lasers in Surgery and Medicine", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Fotobiomodulación' }, { titulo: 'Tiempo', valor: '20 min' }, { titulo: 'Resultados', valor: 'Progresivos' }, { titulo: 'Duración', valor: 'Apoyo constante' }]
  },
  'prp-capilar': {
    nombre: 'Plasma Rico en Plaquetas (PRP) Capilar',
    imagen: imgProvisional, descripcionBreve: 'Reactivamos los folículos inactivos y dormidos usando los factores de crecimiento de tu propia sangre.', antesDespues: AD,
    detalles: {
      descripcion: 'Aislando tus factores de crecimiento plaquetario (a través de una pequeña muestra de sangre) e inyectándolos en el cuero cabelludo, provocamos una angiogénesis masiva (creación de nuevos vasos sanguíneos). Esto despierta folículos en fase de reposo, multiplicando la densidad y sanando la raíz del pelo.',
      ventajas: ['Tratamiento biológico autólogo (sin químicos ni riesgo de alergias).', 'Detiene las caídas masivas por estrés, posparto o Covid (efluvios).', 'Aporta un anclaje, brillo y vitalidad únicos al cabello.'],
      faqs: [{ pregunta: '¿Cuántas sesiones se pautan?', respuesta: 'Por lo general, un protocolo de choque de 3-4 sesiones mensuales, seguido de mantenimientos espaciados.' }],
      evidencia: [{ titulo: "PRP in the treatment of hair loss", fuente: "Dermatologic Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Mesoterapia Autóloga' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'A los 2 meses' }, { titulo: 'Duración', valor: 'Mantenimiento anual' }]
  },
  'exosomas-capilar': {
    nombre: 'Tratamiento capilar con Exosomas',
    imagen: imgProvisional, descripcionBreve: 'La innovación definitiva en tricología. Señalización celular hiperconcentrada para multiplicar el pelo.', antesDespues: AD,
    detalles: {
      descripcion: 'Los exosomas envían señales directas a las células madre del folículo piloso ordenando su regeneración y crecimiento incesante. Poseen una concentración de factores de crecimiento y ARNm purificado en laboratorio que es 100 veces superior al PRP tradicional, logrando recuperar densidad en alopecias muy resistentes.',
      ventajas: ['El tratamiento regenerativo capilar más potente, puro y moderno del mercado.', 'Disminución ultra-rápida del proceso inflamatorio folicular.', 'Alta eficacia en casos severos donde otros tratamientos convencionales han fallado.'],
      faqs: [{ pregunta: '¿Se aplican con aguja?', respuesta: 'Se aplican tópicamente ayudados por micro-canales generados con tecnología Microneedling (Dermapen) para llegar a la raíz.' }],
      evidencia: [{ titulo: "Exosomes in Hair Regeneration", fuente: "Stem Cell Research & Therapy", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Microneedling capilar' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'Primeras semanas' }, { titulo: 'Duración', valor: 'Largo plazo' }]
  },
  'alopecia': {
    nombre: 'Abordaje médico de la Alopecia y caída capilar',
    imagen: imgProvisional, descripcionBreve: 'Diagnóstico exhaustivo y tricoscopia para descubrir la verdadera causa de tu pérdida de cabello.', antesDespues: AD,
    detalles: {
      descripcion: 'No hay tratamiento que funcione sin un diagnóstico correcto. Realizamos un estudio minucioso del cuero cabelludo, los vasos sanguíneos y el tallo piloso mediante microscopía digital de alta resolución (Tricoscopia), junto con analíticas de sangre específicas para descartar factores carenciales o tiroideos.',
      ventajas: ['Evita que gastes tiempo y dinero en champús comerciales que no solucionan el problema.', 'Diagnóstico diferencial certero (efluvios, alopecias androgénicas, cicatriciales o autoinmunes).', 'Diseño de una hoja de ruta clínica (plan de acción) garantizada.'],
      faqs: [{ pregunta: '¿Por qué se me cae el pelo a mechones?', respuesta: 'Las causas van desde el estrés agudo (efluvio telógeno) hasta desórdenes genético-hormonales. El diagnóstico médico es el único camino para detenerlo.' }],
      evidencia: []
    },
    parametros: [{ titulo: 'Técnica', valor: 'Tricoscopia Digital Médica' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'Diagnóstico inmediato' }, { titulo: 'Duración', valor: 'Valoración inicial' }]
  },

  // --- 4. PATOLOGÍAS DE LA PIEL ---
  'tratamiento-acne': {
    nombre: 'Tratamiento integral del Acné',
    imagen: imgProvisional, descripcionBreve: 'Abordaje médico exhaustivo para controlar brotes, quistes inflamatorios y purificar la glándula sebácea.', antesDespues: AD,
    detalles: {
      descripcion: 'El acné es una enfermedad, no un problema cosmético. Implementamos un protocolo clínico que suprime la secreción sebácea y destruye la bacteria (C. Acnes). Combinamos prescripción médica (retinoides orales o antibióticos), terapias lumínicas (IPL) y peelings profundos con ácido salicílico para secar y desinflamar la piel.',
      ventajas: ['Freno clínico a brotes infecciosos y nódulos dolorosos.', 'Previene la formación de las temidas cicatrices hundidas post-acné.', 'Educación y pauta cosmecéutica para cambiar la salud de tu piel para siempre.'],
      faqs: [{ pregunta: '¿Es normal que me salgan más granos al empezar?', respuesta: 'Sí, la fase de "purga" inicial es común al vaciar las capas profundas de los poros bloqueados. Cede rápidamente revelando piel sana.' }],
      evidencia: [{ titulo: "Guidelines of care for the management of acne vulgaris", fuente: "Journal of the American Academy of Dermatology", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Médico + Peelings/Láser' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'Semanas-Meses' }, { titulo: 'Duración', valor: 'Cura o control crónico' }]
  },
  'manchas-melasma': {
    nombre: 'Eliminación de manchas y Melasma',
    imagen: imgProvisional, descripcionBreve: 'Unifica tu tono borrando los daños solares acumulados e inhibiendo el melasma hormonal rebelde.', antesDespues: AD,
    detalles: {
      descripcion: 'Aplicamos un abordaje dual. Para las pecas y léntigos solares (daño solar), usamos láseres Q-Switched/IPL para fulminar el pigmento. Para el Melasma (mancha hormonal difusa tipo "mapa"), usamos protocolos médicos despigmentantes (mesoterapia de ácido tranexámico, peelings químicos) que paralizan o duermen al melanocito hiperactivo.',
      ventajas: ['Abordaje clínico diferenciado para manchas superficiales o profundas.', 'Piel clara, homogénea, luminosa y libre de pigmento asimétrico.', 'Pautas estrictas para prevenir el fotoenvejecimiento futuro avanzado.'],
      faqs: [{ pregunta: '¿El melasma desaparece para siempre?', respuesta: 'El melasma tiene "memoria". Lo silenciamos y blanqueamos, pero requiere de fotoprotección estricta y mantenimientos.' }],
      evidencia: [{ titulo: "Treatment of Melasma and Pigmentation Disorders", fuente: "Dermatology and Therapy", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Láser + Peeling / Tranexámico' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'Al mes' }, { titulo: 'Duración', valor: 'Mantenimiento' }]
  },
  'rosacea-cuperosis': {
    nombre: 'Control de Rosácea / Cuperosis',
    imagen: imgProvisional, descripcionBreve: 'Calmamos la inflamación, eliminamos los capilares rotos y apagamos el enrojecimiento facial repentino (flushing).', antesDespues: AD,
    detalles: {
      descripcion: 'La rosácea es una patología vascular. El objetivo es frenar esa vasomodulación aberrante. Combinamos principios activos calmantes e inmunorreguladores con terapias láser (Luz Pulsada o Nd:YAG) que colapsan selectivamente las "venitas" dilatadas crónicas, suprimiendo la rojez permanente y reforzando la barrera cutánea.',
      ventajas: ['Disminución radical del eritema de fondo y de los vasos sanguíneos visibles.', 'Fin de los vergonzosos episodios de ardor facial o enrojecimiento con cambios térmicos.', 'Piel médicamente reforzada, blanqueada y sana.'],
      faqs: [{ pregunta: '¿Me curaré del todo?', respuesta: 'Es una condición crónica y genética, pero nuestros protocolos médicos logran blanquear la piel y estabilizarla de forma asombrosa.' }],
      evidencia: [{ titulo: "Laser and light therapy for rosacea", fuente: "Lasers in Surgery and Medicine", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'IPL / Terapia Médica' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'Progresivos' }, { titulo: 'Duración', valor: 'Control crónico' }]
  },  
  'cicatrices-acne': {
    nombre: 'Tratamiento de cicatrices de acné y atróficas',
    imagen: imgProvisional, descripcionBreve: 'Alisamos la textura y el relieve del rostro eliminando los hundimientos y marcas severas post-acné.', antesDespues: AD,
    detalles: {
      descripcion: 'Abordaje médico de alta complejidad. Las marcas atróficas hundidas (Icepick, Boxcar) están atadas por puentes fibróticos dérmicos. Usamos subcisión (cortar esas cuerdas por debajo de la piel), combinada con rellenos de hialurónico, bioestimuladores y láser fraccionado CO2 para obligar a la piel a nivelar la superficie.',
      ventajas: ['Cambio radical en la textura, las sombras y el tacto del rostro.', 'Levanta los hundimientos severos.', 'Recuperación de la autoestima y confianza cutánea.'],
      faqs: [{ pregunta: '¿Quedará la piel 100% lisa como de bebé?', respuesta: 'En cicatrices severas maduras la piel mejora hasta un 70-80%, logrando una uniformidad estética espectacularmente mejorada.' }],
      evidencia: [{ titulo: "Combination Therapy for Acne Scars", fuente: "Dermatologic Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Subcisión / Láser / Rellenos' }, { titulo: 'Tiempo', valor: '60 min' }, { titulo: 'Resultados', valor: 'A los meses' }, { titulo: 'Duración', valor: 'Definitiva' }]
  },
  'cicatrices-queloides': {
    nombre: 'Tratamiento y remodelación de cicatrices queloides e hipertróficas',
    imagen: imgProvisional, descripcionBreve: 'Aplanamos y blanqueamos cicatrices quirúrgicas abultadas y duras para hacerlas casi imperceptibles.', antesDespues: AD,
    detalles: {
      descripcion: 'Las cicatrices hipertróficas o queloides (rojas y en relieve) ocurren por una sobreproducción descontrolada de colágeno al cicatrizar. Inyectamos corticoides (triamcinolona) intralesionales para detener su crecimiento y aplanarlas. Luego, aplicamos láser vascular para borrar el color rojo o violáceo, integrándolas en el tono de la piel.',
      ventajas: ['Aplanamiento de cicatrices de cesáreas, accidentes o cirugías previas.', 'Eliminación del escozor, picor y tirantez típicos del queloide.', 'Blanqueamiento estético y camuflaje tisular.'],
      faqs: [{ pregunta: '¿Se operan los queloides?', respuesta: 'La cirugía pura a menudo provoca un queloide más grande. El abordaje inyectable y lumínico es la opción médica de primera línea.' }],
      evidencia: [{ titulo: "Management of Keloids and Hypertrophic Scars", fuente: "Plastic and Reconstructive Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Infiltración intralesional + Láser' }, { titulo: 'Tiempo', valor: '20 min' }, { titulo: 'Resultados', valor: 'Lentos (meses)' }, { titulo: 'Duración', valor: 'Definitiva tras aplanamiento' }]
  },

  // --- 5. LÁSER Y PLATAFORMA LUMÍNICA ---
  'light-bright': {
    nombre: 'Light & Bright',
    imagen: imgProvisional, descripcionBreve: 'Fusión sinérgica de luz pulsada y láser fraccionado para renovar simultáneamente tono, textura y luminosidad profunda.', antesDespues: AD,
    detalles: {
      descripcion: 'Protocolo de grado médico que aborda el fotoenvejecimiento facial en tres dimensiones (3D). En una única sesión, la tecnología IPL de banda estrecha fulmina rojeces capilares y manchas marrones; seguido, el láser fraccionado no ablativo 1550nm crea microcolumnas de coagulación que obligan al cuerpo a generar colágeno nuevo, cerrando poros y alisando arrugas finas sin dañar la capa más superficial de la piel.',
      ventajas: ['Abordaje simultáneo: corrige textura porosa, manchas solares y venitas dilatadas.', 'Incremento radical de la luminosidad cutánea (Efecto "filtro" real).', 'Al ser no ablativo, la recuperación es muy noble y permite maquillarse al día siguiente.'],
      faqs: [{ pregunta: '¿Qué se siente durante y después?', respuesta: 'Sensación de calor intenso durante los disparos. Después, la piel queda enrojecida como tras un día de playa, remitiendo rápidamente sin pelar escandalosamente.' }],
      evidencia: [{ titulo: "Synergistic approach: IPL and Fractional Non-Ablative Laser in Photoaging", fuente: "Lasers in Surgery and Medicine", link: "#" }]
    },
    parametros: [{ titulo: 'Tecnología', valor: 'IPL + Láser Fracc. No Ablativo' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'Al mes' }, { titulo: 'Duración', valor: 'Anual' }]
  },
  'resurfacing-facial': {
    nombre: 'Resurfacing Facial',
    imagen: imgProvisional, descripcionBreve: 'El estándar de oro en el rejuvenecimiento cutáneo profundo. Vaporización fraccionada para eliminar arrugas consolidadas y daño solar severo.', antesDespues: AD,
    detalles: {
      descripcion: 'Tecnología láser fraccionada ablativa (generalmente de tipo CO2 o Erbio). Este láser actúa con una potencia extraordinaria vaporizando microcolumnas de tejido envejecido, laxo o cicatricial. El organismo, al reparar estas zonas quemadas microscópicamente, genera una reepitelización completa, reemplazando la piel vieja por otra nueva y provocando una retracción de los tejidos similar a un minilifting.',
      ventajas: ['El arma más eficaz que existe en dermatología contra arrugas severas (ej. código de barras o patas de gallo).', 'Tensa y compacta la piel, revirtiendo años de flacidez.', 'Elimina lesiones premalignas, queratosis y pecas oscuras profundas.'],
      faqs: [{ pregunta: '¿Cuánto tiempo de baja médica necesito?', respuesta: 'Al ser un tratamiento ablativo potente, requiere de 5 a 7 días de baja social (aparecen rojeces intensas y costras microscópicas que se descaman a los pocos días).' }],
      evidencia: [{ titulo: "Fractional Ablative Laser Resurfacing for Severe Photoaging", fuente: "Dermatologic Clinics", link: "#" }]
    },
    parametros: [{ titulo: 'Tecnología', valor: 'Láser Ablativo Fraccionado' }, { titulo: 'Tiempo', valor: '60 min' }, { titulo: 'Resultados', valor: 'A los 3 meses (pico de colágeno)' }, { titulo: 'Duración', valor: 'Años' }]
  },
  'fotorrejuvenecimiento': {
    nombre: 'Fotorrejuvenecimiento de Alta Precisión',
    imagen: imgProvisional, descripcionBreve: 'Baños de luz intensa controlados clínicamente para eliminar imperfecciones cromáticas y devolver a la piel el tono porcelana de la juventud.', antesDespues: AD,
    detalles: {
      descripcion: 'Empleamos Luz Pulsada Intensa (IPL) de grado médico equipada con filtros de corte hiperselectivos. La energía lumínica viaja a través de la piel y es absorbida por sus cromóforos diana (la melanina de las manchas o la hemoglobina de las rojeces). Estas lesiones se calientan y destruyen (fototermólisis selectiva) mientras el tejido sano queda intacto, estimulando de paso los fibroblastos superficiales.',
      ventajas: ['Unifica el tono de forma global, borrando el daño de veranos pasados.', 'Aporta una luminosidad extrema, cerrando poros sutilmente.', 'Tratamiento de elección ("buena cara") como mantenimiento antiaging preventivo anual.'],
      faqs: [{ pregunta: '¿Me puedo hacer este láser en verano?', respuesta: 'Rotundamente no. Exige que la piel no esté bronceada ni expuesta al sol semanas antes ni después del tratamiento.' }],
      evidencia: [{ titulo: "Intense Pulsed Light for Complete Skin Rejuvenation", fuente: "American Journal of Clinical Dermatology", link: "#" }]
    },
    parametros: [{ titulo: 'Tecnología', valor: 'IPL de grado Médico' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'A los 15 días' }, { titulo: 'Duración', valor: 'Mantenimiento semestral/anual' }]
  },
  'laser-manchas': {
    nombre: 'Tratamiento de Manchas Solares y Léntigos',
    imagen: imgProvisional, descripcionBreve: 'Impactos fotoacústicos ultracortos para pulverizar la melanina y borrar las manchas (léntigos y pecas) de forma focalizada.', antesDespues: AD,
    detalles: {
      descripcion: 'Utilizamos láseres de altísima velocidad (Q-Switched o Picosegundos). A diferencia de los láseres térmicos que "queman", estos equipos disparan energía en nanosegundos. Esto genera un efecto mecánico (fotoacústico) que literalmente estalla los acúmulos de melanina en partículas de polvo microscópicas. Los macrófagos del sistema inmunológico se encargan después de "barrer" esos restos.',
      ventajas: ['Eliminación exacta y limpia de léntigos solares ("manchas de la edad"), efélides y algunos nevus.', 'Al no calentar el tejido circundante, es hiperseguro y rápido.', 'Altísima eficacia en un número muy reducido de sesiones.'],
      faqs: [{ pregunta: '¿Qué aspecto tiene la mancha recién disparada?', respuesta: 'La mancha tratada se oscurece inmediatamente y forma una fina costra superficial y plana que se cae de forma natural en 7-10 días.' }],
      evidencia: [{ titulo: "Q-Switched Lasers for Benign Pigmented Lesions", fuente: "Lasers in Medical Science", link: "#" }]
    },
    parametros: [{ titulo: 'Tecnología', valor: 'Láser Q-Switched / Pico' }, { titulo: 'Tiempo', valor: '20 min' }, { titulo: 'Resultados', valor: 'Tras la descamación (10 días)' }, { titulo: 'Duración', valor: 'Permanente (en esa mancha)' }]
  },
  'laser-vascular': {
    nombre: 'Eliminación de Rojeces, Cuperosis y Arañas Vasculares',
    imagen: imgProvisional, descripcionBreve: 'Termocoagulación selectiva precisa para borrar vasos sanguíneos dilatados y apagar patologías de enrojecimiento crónico.', antesDespues: AD,
    detalles: {
      descripcion: 'La herramienta definitiva contra las arañas vasculares, telangiectasias, puntos rubí y la cuperosis grave. El láser vascular (ej. Nd:YAG o Colorante Pulsado) emite una luz que busca el color rojo de la sangre (hemoglobina). El calor coagula el vaso al instante, las paredes venosas se pegan y el vaso colapsado desaparece para siempre.',
      ventajas: ['Cierre y desaparición instantánea de vasos sanguíneos visibles en cara y cuerpo.', 'Reducción drástica del flushing (sofocos) en pacientes con rosácea crónica.', 'La refrigeración avanzada de los equipos clínicos protege la epidermis de cualquier quemadura.'],
      faqs: [{ pregunta: '¿Quedará alguna marca?', respuesta: 'Dependiendo del calibre del vaso, puede aparecer un leve oscurecimiento (púrpura o hematoma suave) que el cuerpo reabsorbe en unos días.' }],
      evidencia: [{ titulo: "Vascular Laser Therapy for Facial Telangiectasia and Erythema", fuente: "Dermatologic Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Tecnología', valor: 'Láser Vascular Específico' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'Visibles desde la 1ª sesión' }, { titulo: 'Duración', valor: 'Largo plazo' }]
  },
  'laser-cicatrices': {
    nombre: 'Remodelación de Cicatrices',
    imagen: imgProvisional, descripcionBreve: 'Tecnología fraccionada profunda para romper la fibrosis cicatricial y promover un tejido nuevo, liso y estéticamente sano.', antesDespues: AD,
    detalles: {
      descripcion: 'El tejido de una cicatriz tiene un colágeno "desordenado" y fibrótico. El láser fraccionado perfora microscópicamente esa cicatriz atrófica (como las secuelas severas del acné) o hipertrófica. Esta lesión controlada estimula la cascada de reparación celular natural del organismo, induciendo la creación de nuevo colágeno, esta vez, ordenado y liso.',
      ventajas: ['Aplanamiento de bordes, elevación de hundimientos y mejora global de textura.', 'Difumina cicatrices traumáticas, de varicela o intervenciones quirúrgicas.', 'Aumenta notablemente la elasticidad de la piel rígida o acartonada dañada.'],
      faqs: [{ pregunta: '¿Se borra por completo la marca de la piel?', respuesta: 'Una cicatriz consolidada madura nunca se borra al 100%, pero sí logramos una difuminación y mejora del relieve del 70-80%.' }],
      evidencia: [{ titulo: "Fractional Laser Therapy for the Management of Scars", fuente: "Journal of Cutaneous and Aesthetic Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Tecnología', valor: 'Láser Fraccionado (Ablativo/No Ablativo)' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'Mes a mes (Acumulativo)' }, { titulo: 'Duración', valor: 'Definitiva' }]
  },
  'laser-estrias': {
    nombre: 'Tratamiento de Estrías Corporales',
    imagen: imgProvisional, descripcionBreve: 'Reparación del desgarro dérmico reactivando de urgencia la producción de elastina en estrías rojas y blancas.', antesDespues: AD,
    detalles: {
      descripcion: 'Una estría es una cicatriz interna por estiramiento abrupto de la piel donde las fibras elásticas se han roto. Aplicando láser fraccionado o radiofrecuencia microneedling (Morpheus), calentamos la dermis profunda para forzar la neocologénesis. Esto engrosa el tejido que había quedado fino como un "papel de fumar", acortando la anchura de la estría.',
      ventajas: ['Eficacia clínica elevadísima en estrías recientes (rojas o violáceas).', 'Mejora visible del grosor, la contracción y la textura en estrías antiguas (blancas o nacaradas).', 'Tratamiento de elección para recuperar la tensión en abdómenes post-parto.'],
      faqs: [{ pregunta: '¿Cuántas sesiones se necesitan para ver resultados?', respuesta: 'Las estrías son rebeldes, suelen requerir protocolos de 4 a 6 sesiones para mostrar una mejoría contundente.' }],
      evidencia: [{ titulo: "Lasers and Energy Devices for the Treatment of Striae Distensae", fuente: "Dermatology Research and Practice", link: "#" }]
    },
    parametros: [{ titulo: 'Tecnología', valor: 'Fraccionado / Radiofrecuencia Agujas' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'Acumulativos y progresivos' }, { titulo: 'Duración', valor: 'Definitiva' }]
  },
  'depilacion-alta-precision': {
    nombre: 'Depilación Láser de Alta Precisión: Eliminación del vello corporal y facial',
    imagen: imgProvisional, descripcionBreve: 'Destrucción definitiva de la raíz pilosa utilizando plataformas clínicas seguras, rápidas y eficaces para todo fototipo.', antesDespues: AD,
    detalles: {
      descripcion: 'La fotodepilación médica cuenta con potencias inaccesibles para el sector puramente estético. Usamos plataformas de Diodo, Alejandrita o Nd:YAG que envían pulsos térmicos exactos para destruir la matriz germinativa de las células madre del pelo (>65ºC), impidiendo que vuelva a salir nunca más.',
      ventajas: ['Resultados reales y duraderos en una fracción de sesiones frente a centros no médicos.', 'Supervisión médica estricta: prevención de quemaduras, ajuste exacto para pieles oscuras o sensibles.', 'Es el único tratamiento definitivo contra patologías como la foliculitis o vellos enquistados severos.'],
      faqs: [{ pregunta: '¿Es compatible si tengo la piel morena o negra?', respuesta: 'Sí. Contamos con tecnologías láser (como el Nd:YAG) que "ignoran" la melanina epidérmica y van directamente al bulbo oscuro del pelo profundo, siendo 100% seguras y eficaces en fototipos altos.' }],
      evidencia: [{ titulo: "Long-Pulsed Lasers for Effective Hair Removal", fuente: "Lasers in Surgery and Medicine", link: "#" }]
    },
    parametros: [{ titulo: 'Tecnología', valor: 'Láser Médico (Diodo/Alejandrita/Nd:YAG)' }, { titulo: 'Tiempo', valor: 'Zonal (15-60 min)' }, { titulo: 'Resultados', valor: 'Pérdida desde la 1ª sesión' }, { titulo: 'Duración', valor: 'Permanente' }]
  },

  // --- 6. TRATAMIENTOS AVANZADOS ---
  'rejuvenecimiento-manos': {
    nombre: 'Rejuvenecimiento de manos',
    imagen: imgProvisional, descripcionBreve: 'Borramos las manchas solares y el aspecto esqueletizado para que tus manos revelen tanta juventud como tu rostro.', antesDespues: AD,
    detalles: {
      descripcion: 'Las manos delatan la edad real del paciente y están expuestas al sol diario. Las tratamos combinando dos terapias maestras: luz pulsada intensa (IPL) para borrar los léntigos y manchas solares marrones, y bioestimulación con hidroxiapatita cálcica inyectable para redensificar, tapar las venas marcadas y tensar la piel fina y arrugada.',
      ventajas: ['Recuperación instantánea del acolchado juvenil del dorso de la mano.', 'Ocultación del "aspecto huesudo" y de las venas sobresalientes.', 'Borrado definitivo de la hiperpigmentación solar ("manchas de hígado").'],
      faqs: [{ pregunta: '¿Me inhabilitan las manos tras el procedimiento?', respuesta: 'No, puedes conducir, trabajar y hacer vida normal desde el primer segundo. Podría existir un leve edema de pocas horas.' }],
      evidencia: [{ titulo: "Hand Rejuvenation: A Review and Update", fuente: "Dermatologic Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Láser IPL + Bioestimulador inyectable' }, { titulo: 'Tiempo', valor: '45 min' }, { titulo: 'Resultados', valor: 'Inmediatos' }, { titulo: 'Duración', valor: '12-18 meses' }]
  },
  'hiperhidrosis': {
    nombre: 'Tratamiento de la Hiperhidrosis',
    imagen: imgProvisional, descripcionBreve: 'Frena la sudoración excesiva en axilas, manos o pies y recupera por fin tu comodidad social y laboral.', antesDespues: AD,
    detalles: {
      descripcion: 'Una solución médica transformadora para pacientes que sudan de forma incontrolable. Mediante la microinfiltración superficial de neuromoduladores en las glándulas sudoríparas hiperactivas (axilas, palmas o plantas), bloqueamos el nervio simpático que ordena producir sudor, frenando la actividad de la glándula en seco de forma completamente segura.',
      ventajas: ['Eliminación drástica de los cercos de sudor y el olor corporal fuerte.', 'Mejora radical, inmediata y emocional de la calidad de vida y la autoestima en entornos sociales.', 'Procedimiento clínico rápido, ambulatorio y con altísima tasa de satisfacción.'],
      faqs: [{ pregunta: '¿Sudaré más por otras partes del cuerpo para compensar?', respuesta: 'No. No existe sudoración compensatoria con este tratamiento (al contrario de lo que ocurre con algunas cirugías). Tu cuerpo termorregulará normalmente de forma general.' }],
      evidencia: [{ titulo: "Botulinum Toxin for the Treatment of Primary Hyperhidrosis", fuente: "American Journal of Clinical Dermatology", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Microinyección Dérmica Subcutánea' }, { titulo: 'Tiempo', valor: '30 min' }, { titulo: 'Resultados', valor: 'A los 7 días' }, { titulo: 'Duración', valor: '6-9 meses' }]
  },
  'sonrisa-gingival': {
    nombre: 'Corrección de la Sonrisa Gingival',
    imagen: imgProvisional, descripcionBreve: 'Armoniza tu sonrisa para evitar mostrar excesivas encías al reír, relajando la musculatura del labio superior.', antesDespues: AD,
    detalles: {
      descripcion: 'Mostrar una banda ancha de encía al sonreír estropea la estética perioral y suele deberse a un músculo elevador del labio hiperactivo (que tira demasiado fuerte hacia arriba). Con apenas un par de inyecciones microscópicas de neuromodulador bajo la nariz, limitamos la fuerza de ese ascenso. El labio frena antes, cubriendo la encía, pero permitiéndote sonreír de manera amplia y natural.',
      ventajas: ['Corrección facial instantánea sin necesidad de pasar por costosas y dolorosas cirugías maxilofaciales o periodontales.', 'Resultados tremendamente naturales, respetando la estructura y el volumen de tu boca.', 'Impacto estético brutal que embellece radicalmente la expresión de alegría.'],
      faqs: [{ pregunta: '¿Afectará a mi forma de hablar, comer o gesticular?', respuesta: 'Por supuesto que no. Calculamos dosis magistrales únicamente para limitar el "exceso de tracción" muscular hacia arriba; toda tu movilidad esencial quedará intacta.' }],
      evidencia: [{ titulo: "Botulinum Toxin in the Management of Gummy Smile", fuente: "Journal of Craniofacial Surgery", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Neuromodulación selectiva' }, { titulo: 'Tiempo', valor: '10 min' }, { titulo: 'Resultados', valor: 'A los 7-10 días' }, { titulo: 'Duración', valor: '4-6 meses' }]
  },
  'bruxismo': {
    nombre: 'Tratamiento médico del Bruxismo',
    imagen: imgProvisional, descripcionBreve: 'Aliviamos dolores mandibulares, evitamos fracturas dentales y afinamos tu rostro inferior relajando la musculatura de masticación.', antesDespues: AD,
    detalles: {
      descripcion: 'El estrés hace que apretemos inconscientemente la mandíbula (bruxismo), lo que provoca dolores cervicofaciales severos, desgasta el esmalte dental e hipertrofia los músculos maseteros haciendo el rostro cuadrado y varonil. Inyectando relajante muscular en los maseteros, reducimos la potencia de esta contracción en un 60%, solucionando la patología dolorosa y generando un deseado afinamiento estético de las mejillas inferiores ("Efecto V-Shape").',
      ventajas: ['Alivio de las cefaleas tensionales de origen mandibular desde los primeros días.', 'Tratamiento médico activo que protege tus dientes de roturas por fricción extrema.', 'Efecto estético hiperdemandado: feminización, suavizado y afinamiento del rostro ancho inferior.'],
      faqs: [{ pregunta: '¿Podré seguir masticando alimentos duros como la carne o el pan?', respuesta: 'Sin problema. El músculo masetero es el músculo con mayor fuerza por centímetro cuadrado del cuerpo humano. Al reducir su potencia excesiva, seguirás masticando de forma impecable sin fatiga.' }],
      evidencia: [{ titulo: "Botulinum Toxin Type A for the Treatment of Bruxism", fuente: "Neurological Sciences", link: "#" }]
    },
    parametros: [{ titulo: 'Técnica', valor: 'Inyección Intramuscular Profunda' }, { titulo: 'Tiempo', valor: '15 min' }, { titulo: 'Resultados', valor: 'A los 15 días' }, { titulo: 'Duración', valor: '6-9 meses' }]
  }

};

// ==========================================
// 3. GENERADOR DINÁMICO (FALLBACK INTELIGENTE DE SEGURIDAD)
// ==========================================
const generarTratamientoPorDefecto = (slug: string): Tratamiento => {
  const tituloFormateado = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    nombre: tituloFormateado,
    imagen: imgProvisional,
    descripcionBreve: 'Restaura, equilibra y proyecta tu belleza natural con protocolos médicos vanguardistas y resultados armónicos.',
    antesDespues: AD,
    detalles: {
      descripcion: 'En Clínica Venencia entendemos la medicina estética desde el rigor clínico y el bienestar integral. Nuestro enfoque médico para este tratamiento combina tecnología de vanguardia y protocolos hiper-personalizados. Trabajamos en planos anatómicos precisos para garantizar tu seguridad, logrando resultados elegantes que respetan tu esencia y realzan tu mejor versión.',
      ventajas: [
        'Criterio médico riguroso y protocolos de alta seguridad.', 
        'Resultados armónicos que respetan tu naturalidad (Antiaging elegante).', 
        'Uso exclusivo de aparatología y principios activos premium.'
      ],
      faqs: [
        { pregunta: '¿Quedaré con un aspecto artificial?', respuesta: 'Bajo ningún concepto. Nuestra filosofía es el "lujo silencioso" y el "menos es más".' },
        { pregunta: '¿Es doloroso?', respuesta: 'Aplicamos anestesias magistrales para que sea muy tolerable.' }
      ],
      evidencia: []
    },
    parametros: [
      { titulo: 'Abordaje', valor: 'Criterio Médico' }, { titulo: 'Sesiones', valor: 'Personalizado' }, { titulo: 'Resultados', valor: 'Óptimos' }, { titulo: 'Duración', valor: 'Según paciente' }
    ]
  };
};

type TabType = 'descripcion' | 'ventajas' | 'faqs' | 'evidencia';

export default function TratamientoPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const tratamiento = tratamientosData[slug] || generarTratamientoPorDefecto(slug);
  
  const [tabActiva, setTabActiva] = useState<TabType>('descripcion');
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark font-sans pt-28 pb-0">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 mt-10">
       <div className="w-full md:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-serif text-brand-dark leading-tight mb-10">
            {tratamiento.nombre}
          </h1>
          
          <Link href="/reserva" className="inline-block mt-2">
            <button className="bg-brand-dark text-brand-light px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-brand-terra transition-colors shadow-lg">
              Reserva tu Cita
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3]">
          <Image src={tratamiento.imagen} alt={tratamiento.nombre} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-sm shadow-xl bg-brand-sand/20" />
        </div>
      </section>

      {/* PESTAÑAS (TABS) */}
      <section className="max-w-5xl mx-auto mt-24 px-6">
        <div className="flex justify-start md:justify-center border-b border-brand-sand/40 space-x-6 md:space-x-12 overflow-x-auto pb-2 scrollbar-hide">
          {(['descripcion', 'faqs', 'evidencia'] as TabType[]).map((tab) => (
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
                <h3 className="text-2xl font-serif text-brand-dark mb-6">
                {tratamiento.tituloDescripcion || "Protocolo Médico"}
              </h3>
                <p className="text-brand-dark/80 leading-relaxed text-lg text-left md:text-center">{tratamiento.detalles.descripcion}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8 border-t border-brand-sand/30 pt-12">
                {tratamiento.parametros.map((param, i) => (
                  <div key={i} className="text-center space-y-2 min-w-[120px]">
                    <span className="text-brand-terra text-2xl">✦</span>
                    <h4 className="text-[10px] uppercase tracking-widest text-brand-dark/50">{param.titulo}</h4>
                    <p className="font-serif text-brand-dark text-sm">{param.valor}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tabActiva === 'faqs' && (
             <div className="animate-fade-in-up max-w-3xl mx-auto space-y-4">
               {tratamiento.detalles.faqs.map((faq, i) => (
                 <div key={i} className="border border-brand-sand/30 bg-white">
                   <button onClick={() => setFaqAbierta(faqAbierta === i ? null : i)} className="w-full text-left p-6 flex justify-between hover:bg-brand-sand/10 transition">
                     <span className="font-serif text-lg text-brand-dark pr-4">{faq.pregunta}</span>
                     <span className="text-brand-terra text-2xl">{faqAbierta === i ? '−' : '+'}</span>
                   </button>
                   {faqAbierta === i && <div className="p-6 pt-0 text-brand-dark/70 font-light whitespace-pre-line">{faq.respuesta}</div>}
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
            <Image src={tratamiento.antesDespues.antes} alt="Antes" fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover object-center" />
            <div className="absolute inset-0" style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}>
              <Image src={tratamiento.antesDespues.despues} alt="Después" fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover object-center" />
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