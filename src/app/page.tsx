"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Tratamiento {
  nombre: string;
  subtitulo: string;
  slug: string;
  imagen: string;
}

interface Subcategoria {
  nombre: string;
  tratamientos: Tratamiento[];
}

interface CategoriaData {
  tieneSubcategorias: boolean;
  tratamientos?: Tratamiento[];
  subcategorias?: Subcategoria[];
}

const imgProvisional = '/textura-piel.webp';

const tratamientosDB: Record<string, CategoriaData> = {
  'Tratamientos Faciales': {
    tieneSubcategorias: true,
    subcategorias: [
      {
        nombre: '1.1. Armonización y Volúmenes',
        tratamientos: [
          { nombre: 'Voluminización y perfilado de labios.', subtitulo: 'Armonización Facial', slug: 'voluminizacion-labios', imagen: imgProvisional },
          { nombre: 'Hidratación labial profunda.', subtitulo: 'Cuidado y Prevención', slug: 'hidratacion-labial', imagen: imgProvisional },
          { nombre: 'Rinomodelación.', subtitulo: 'Perfilado sin Cirugía', slug: 'rinomodelacion', imagen: imgProvisional },
          { nombre: 'Proyección y relleno de pómulos.', subtitulo: 'Estructura Facial', slug: 'relleno-pomulos', imagen: "/vero-facial.jpeg" },
          { nombre: 'Marcaje mandibular.', subtitulo: 'Definición del Óvalo', slug: 'marcaje-mandibular', imagen: imgProvisional },
          { nombre: 'Proyección y corrección de mentón.', subtitulo: 'Equilibrio de Perfil', slug: 'correccion-menton', imagen: imgProvisional },
          { nombre: 'Relleno de ojeras.', subtitulo: 'Mirada Descansada', slug: 'relleno-ojeras', imagen: imgProvisional },
          { nombre: 'Relleno de fosa temporal.', subtitulo: 'Rejuvenecimiento Superior', slug: 'fosa-temporal', imagen: imgProvisional },
          { nombre: 'Tratamiento de surco nasogeniano.', subtitulo: 'Suavizado de Expresión', slug: 'surco-nasogeniano', imagen: imgProvisional }
        ]
      },
      {
        nombre: '1.2. Tratamiento de Arrugas y Líneas de Expresión',
        tratamientos: [
          { nombre: 'Tratamiento de arrugas de expresión.', subtitulo: 'Tercio Superior', slug: 'arrugas-expresion', imagen: imgProvisional },
          { nombre: 'Corrección del "código de barras" (Arrugas periorales).', subtitulo: 'Rejuvenecimiento Perioral', slug: 'codigo-barras', imagen: imgProvisional },
          { nombre: 'Tratamiento de bandas platismales (Anillos de Venus / Cuello).', subtitulo: 'Armonización de Cuello', slug: 'bandas-platismales', imagen: imgProvisional }
        ]
      },
      {
        nombre: '1.3. Calidad de Piel y Regeneración Celular',
        tratamientos: [
          { nombre: 'Mesoterapia facial con vitaminas y ácido hialurónico.', subtitulo: 'Nutrición Profunda', slug: 'mesoterapia-facial', imagen: imgProvisional },
          { nombre: 'Mesoterapia periocular.', subtitulo: 'Cuidado del Contorno', slug: 'mesoterapia-periocular', imagen: imgProvisional },
          { nombre: 'Bioestimulación con Polinucleótidos.', subtitulo: 'Regeneración Celular', slug: 'polinucleotidos', imagen: imgProvisional },
          { nombre: 'Plasma Rico en Plaquetas (PRP) Facial.', subtitulo: 'Bioestimulación Autóloga', slug: 'prp-facial', imagen: imgProvisional },
          { nombre: 'Terapia avanzada con Exosomas.', subtitulo: 'Medicina Regenerativa', slug: 'exosomas-facial', imagen: imgProvisional }
        ]
      },
      {
        nombre: '1.4. Inductores de Colágeno (Efecto Lifting sin Cirugía)',
        tratamientos: [
          { nombre: 'Hidroxiapatita de Calcio (Radiesse).', subtitulo: 'Firmeza y Tensión', slug: 'radiesse', imagen: imgProvisional },
          { nombre: 'Ácido Poli-L-Láctico. (Sculptra).', subtitulo: 'Lifting sin Cirugía', slug: 'sculptra', imagen: imgProvisional }
        ]
      },
      {
        nombre: '1.5. Renovación Cutánea',
        tratamientos: [
          { nombre: 'Peelings químicos médicos.', subtitulo: 'Renovación Celular', slug: 'peelings-quimicos', imagen: imgProvisional },
          { nombre: 'Microneedling médico.', subtitulo: 'Inducción de Colágeno', slug: 'microneedling', imagen: imgProvisional },
          { nombre: 'Limpieza Facial Personalizada.', subtitulo: 'Higiene y Purificación', slug: 'limpieza-facial', imagen: imgProvisional }
        ]
      }
    ]
  },
  'Tratamientos Corporales': {
    tieneSubcategorias: false,
    tratamientos: [
      { nombre: 'Mesoterapia Lipolítica (Grasa Localizada y Celulitis).', subtitulo: 'Remodelación', slug: 'mesoterapia-lipolitica', imagen: imgProvisional },
      { nombre: 'Esclerosis Vascular (Eliminación de varices y arañas vasculares).', subtitulo: 'Salud Vascular', slug: 'esclerosis-vascular', imagen: imgProvisional },
      { nombre: 'Inductores de colágeno corporal (Firmeza y flacidez).', subtitulo: 'Firmeza Corporal', slug: 'inductores-corporales', imagen: imgProvisional },
      { nombre: 'Remodelación y aumento de glúteos con ácido hialurónico.', subtitulo: 'Armonización Corporal', slug: 'aumento-gluteos', imagen: imgProvisional },
      { nombre: 'Depilación Láser Médica.', subtitulo: 'Láser de Alta Potencia', slug: 'depilacion-laser', imagen: imgProvisional }
    ]
  },
  'Tratamientos Capilares': {
    tieneSubcategorias: false,
    tratamientos: [
      { nombre: 'Mesoterapia capilar avanzada.', subtitulo: 'Nutrición Folicular', slug: 'mesoterapia-capilar', imagen: imgProvisional },
      { nombre: 'Terapia fotobiológica (Láser LED capilar).', subtitulo: 'Estimulación Lumínica', slug: 'laser-led-capilar', imagen: imgProvisional },
      { nombre: 'Plasma Rico en Plaquetas (PRP) Capilar.', subtitulo: 'Regeneración Folicular', slug: 'prp-capilar', imagen: imgProvisional },
      { nombre: 'Tratamiento capilar con Exosomas.', subtitulo: 'Terapia Regenerativa', slug: 'exosomas-capilar', imagen: imgProvisional },
      { nombre: 'Abordaje médico de la Alopecia y caída capilar.', subtitulo: 'Diagnóstico Integral', slug: 'alopecia', imagen: imgProvisional }
    ]
  },
  'Patologías de la Piel': {
    tieneSubcategorias: false,
    tratamientos: [
      { nombre: 'Tratamiento integral del Acné.', subtitulo: 'Control Médico', slug: 'tratamiento-acne', imagen: imgProvisional },
      { nombre: 'Eliminación de manchas y Melasma.', subtitulo: 'Unificación del Tono', slug: 'manchas-melasma', imagen: imgProvisional },
      { nombre: 'Control de Rosácea / Cuperosis.', subtitulo: 'Estabilización Vascular', slug: 'rosacea-cuperosis', imagen: imgProvisional },
      { nombre: 'Tratamiento de cicatrices de acné y atróficas.', subtitulo: 'Alisado de la Piel', slug: 'cicatrices-acne', imagen: imgProvisional },
      { nombre: 'Tratamiento y remodelación de cicatrices queloides e hipertróficas.', subtitulo: 'Remodelación Cutánea', slug: 'cicatrices-queloides', imagen: imgProvisional }
    ]
  },
  'Láser y Plataforma Lumínica': {
    tieneSubcategorias: true,
    subcategorias: [
      {
        nombre: '5.1. Rejuvenecimiento y Calidad de Piel',
        tratamientos: [
          { nombre: 'Light & Bright.', subtitulo: 'Luminosidad Extrema', slug: 'light-bright', imagen: imgProvisional },
          { nombre: 'Resurfacing Facial.', subtitulo: 'Renovación Cutánea', slug: 'resurfacing-facial', imagen: imgProvisional },
          { nombre: 'Fotorrejuvenecimiento de Alta Precisión.', subtitulo: 'Tono y Textura', slug: 'fotorrejuvenecimiento', imagen: imgProvisional }
        ]
      },
      {
        nombre: '5.2. Láser Vascular y Lesiones Pigmentarias',
        tratamientos: [
          { nombre: 'Tratamiento de Manchas Solares y Léntigos.', subtitulo: 'Eliminación de Pigmento', slug: 'laser-manchas', imagen: imgProvisional },
          { nombre: 'Eliminación de Rojeces, Cuperosis y Arañas Vasculares.', subtitulo: 'Control Vascular', slug: 'laser-vascular', imagen: imgProvisional }
        ]
      },
      {
        nombre: '5.3. Cicatrices y Estrías',
        tratamientos: [
          { nombre: 'Remodelación de Cicatrices.', subtitulo: 'Alisado Dérmico', slug: 'laser-cicatrices', imagen: imgProvisional },
          { nombre: 'Tratamiento de Estrías Corporales.', subtitulo: 'Regeneración Tisular', slug: 'laser-estrias', imagen: imgProvisional }
        ]
      },
      {
        nombre: '5.4. Fotodepilación Médica',
        tratamientos: [
          { nombre: 'Depilación Láser de Alta Precisión: vello corporal y facial.', subtitulo: 'Eliminación Definitiva', slug: 'depilacion-alta-precision', imagen: imgProvisional }
        ]
      }
    ]
  },
  'Tratamientos Avanzados': {
    tieneSubcategorias: false,
    tratamientos: [
      { nombre: 'Rejuvenecimiento de manos.', subtitulo: 'Cuidado Integral', slug: 'rejuvenecimiento-manos', imagen: imgProvisional },
      { nombre: 'Tratamiento de la Hiperhidrosis.', subtitulo: 'Control de Sudoración', slug: 'hiperhidrosis', imagen: imgProvisional },
      { nombre: 'Corrección de la Sonrisa Gingival.', subtitulo: 'Armonización Dental', slug: 'sonrisa-gingival', imagen: imgProvisional },
      { nombre: 'Tratamiento médico del Bruxismo.', subtitulo: 'Salud y Bienestar', slug: 'bruxismo', imagen: imgProvisional }
    ]
  }
};

type Categoria = keyof typeof tratamientosDB;

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>('Tratamientos Faciales');

  const renderTarjeta = (tratamiento: Tratamiento, idx: number) => (
    <Link 
      href={`/tratamientos/${tratamiento.slug}`} 
      key={idx} 
      className="group relative aspect-[3/4] md:aspect-[3/4] overflow-hidden bg-brand-sand/10 cursor-pointer block rounded-sm md:rounded-none"
    >
      <div className="absolute inset-0">
        <Image 
          src={tratamiento.imagen} 
          alt={tratamiento.nombre}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-70 md:opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end transform transition-transform duration-500 md:translate-y-4 group-hover:translate-y-0">
        <span className="text-brand-sand text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold mb-1 md:mb-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {tratamiento.subtitulo}
        </span>
        
        <h3 className="text-xl md:text-2xl font-serif text-brand-light leading-snug mb-2 md:mb-4">
          {tratamiento.nombre}
        </h3>
        
        <div className="border-t border-brand-light/20 pt-3 md:pt-4 mt-1 md:mt-2 overflow-hidden h-auto md:h-0 group-hover:h-auto opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 flex justify-between items-center">
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-brand-light/80">Protocolo Médico</span>
          <span className="text-brand-sand text-base md:text-lg">→</span>
        </div>
      </div>
    </Link>
  );

  const datosCategoria = tratamientosDB[categoriaActiva];

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark font-sans relative">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden">
        <Image 
          src="/portada.jpg" 
          alt="Venencia" 
          fill 
          priority 
          sizes="100vw" 
          className="object-cover object-center z-0 opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-light/40 via-transparent to-brand-light z-0"></div>
        
        <div className="max-w-5xl text-center space-y-6 md:space-y-8 mt-20 z-10 relative">
          <span className="text-brand-terra text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] block mb-2 md:mb-4">Medicina Estética de Autor</span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-brand-dark leading-tight md:leading-none">
            Tu piel, <br/><span className="italic text-brand-dark/80">nuestra especialidad.</span>
          </h1>
          <p className="max-w-xl mx-auto text-brand-dark font-sans text-base md:text-xl font-light leading-relaxed mt-4 md:mt-6 px-4 md:px-0">
            Combinamos experiencia, ciencia y sensibilidad para crear rutinas que respeten su equilibrio natural.
          </p>
        </div>
      </section>

      {/* SECCIÓN TRATAMIENTOS (GRID EDITORIAL) */}
      <section id="tratamientos" className="py-20 md:py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 md:mb-16 border-b border-brand-sand/30 pb-8 md:pb-12">
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-2 md:mb-4">Portafolio<br className="hidden lg:block"/>Médico</h2>
          </div>
          
          <div className="flex space-x-6 md:space-x-10 overflow-x-auto pb-2 w-full lg:w-auto scrollbar-hide snap-x">
            {(Object.keys(tratamientosDB) as Categoria[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`text-[9px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap snap-start ${
                  categoriaActiva === cat ? 'text-brand-terra font-bold border-b-2 border-brand-terra pb-1 md:pb-2' : 'text-brand-dark/40 hover:text-brand-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* LOGICA DE RENDERIZADO: Subcategorías o Grid normal */}
        {datosCategoria.tieneSubcategorias && datosCategoria.subcategorias ? (
          <div className="space-y-20 md:space-y-28">
            {datosCategoria.subcategorias.map((subcat, sIdx) => (
              <div key={sIdx}>
                <h3 className="text-xl md:text-2xl font-serif text-brand-terra mb-8 border-l-4 border-brand-terra pl-4">{subcat.nombre}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                  {subcat.tratamientos.map((tratamiento, tIdx) => renderTarjeta(tratamiento, tIdx))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {datosCategoria.tratamientos?.map((tratamiento, idx) => renderTarjeta(tratamiento, idx))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="py-8 md:py-12 border-t border-brand-sand/30 text-center bg-white px-4">
        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-brand-dark/50 leading-relaxed">
          C/ Baldrich 74, Terrassa — Venencia © 2026
        </p>
      </footer>
    </main>
  );
}