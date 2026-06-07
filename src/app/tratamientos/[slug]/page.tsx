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
    tituloDescripcion: '¿Qué es la rinomodelación con ácido hialurónico?',
    imagen: imgProvisional,
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
    imagen: "/vero-facial.jpeg",
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
    imagen: imgProvisional,
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
    imagen: imgProvisional,
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
    tituloDescripcion: '¿Qué es el relleno de la fosa temporal con ácido hialurónico?',
    imagen: imgProvisional,
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
    imagen: imgProvisional,
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
    imagen: imgProvisional,
    descripcionBreve: 'Relaja la musculatura facial para suavizar arrugas, despejar la mirada y prevenir el envejecimiento.',
    antesDespues: AD,
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
    imagen: imgProvisional,
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
    imagen: imgProvisional,
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
    imagen: imgProvisional,
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
    imagen: imgProvisional,
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
    imagen: imgProvisional,
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
    imagen: imgProvisional,
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
    imagen: imgProvisional,
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
    imagen: imgProvisional,
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
    imagen: imgProvisional,
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
    imagen: imgProvisional,
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
    imagen: imgProvisional,
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
                <div className="space-y-4 text-brand-dark/80 leading-relaxed text-lg text-left md:text-center">
                  {tratamiento.detalles.descripcion.split('\n\n').map((parrafo, index) => (
                    <p key={index}>{parrafo}</p>
                  ))}
                </div>
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
          {/* PESTAÑA: EVIDENCIA CIENTÍFICA */}
          {tabActiva === 'evidencia' && tratamiento.detalles.evidencia && (
            <div className="animate-fade-in-up max-w-3xl mx-auto space-y-6">
              {tratamiento.detalles.evidencia.map((item, i) => (
                <div key={i} className="border-b border-brand-sand/50 pb-6">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="block hover:opacity-70 transition-opacity">
                    <h4 className="text-lg font-serif text-brand-dark mb-2 flex items-center gap-2">
                      <span className="text-brand-terra">✦</span> {item.titulo}
                    </h4>
                    <p className="text-brand-dark/60 text-sm uppercase tracking-wider">{item.fuente}</p>
                  </a>
                </div>
              ))}
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