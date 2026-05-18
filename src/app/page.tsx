"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tratamientosDB = {
  'Faciales': [
    { nombre: 'Ácido Hialurónico', subtitulo: 'Labios y Rostro', slug: 'acido-hialuronico', imagen: '/foto-facial-1.jpg' },
    { nombre: 'Neuromoduladores', subtitulo: 'Tercio Superior', slug: 'neuromoduladores', imagen: '/foto-facial-2.jpg' },
    { nombre: 'Estimuladores', subtitulo: 'Colágeno Profundo', slug: 'estimuladores-colageno', imagen: '/foto-facial-3.jpg' },
    { nombre: 'Morpheus 8', subtitulo: 'Radiofrecuencia Fraccionada', slug: 'morpheus-8', imagen: '/foto-textura-1.jpg' },
    { nombre: 'Hilos Tensores', subtitulo: 'Efecto Lifting PDO', slug: 'hilos-tensores', imagen: '/foto-textura-2.jpg' },
    { nombre: 'Peeling Químico', subtitulo: 'Renovación Celular Médica', slug: 'peeling-quimico', imagen: '/foto-textura-3.jpg' }
  ],
  'Plataforma Láser': [
    { nombre: 'Láser CO2', subtitulo: 'Resurfacing Fraccionado', slug: 'laser-co2', imagen: '/foto-laser-1.jpg' },
    { nombre: 'Nd:YAG Varices', subtitulo: 'Eliminación Vascular', slug: 'varices-ndyag', imagen: '/foto-laser-2.jpg' },
    { nombre: 'Q-Switched', subtitulo: 'Eliminación de Manchas', slug: 'manchas-qswitched', imagen: '/foto-laser-3.jpg' },
    { nombre: 'Luz Pulsada IPL', subtitulo: 'Unificación del Tono', slug: 'ipl-facial', imagen: '/foto-textura-1.jpg' },
    { nombre: 'Depilación Médica', subtitulo: 'Láser de Alta Potencia', slug: 'depilacion-laser', imagen: '/foto-textura-2.jpg' }
  ],
  'Corporales & Patologías': [
    { nombre: 'HIFU Corporal', subtitulo: 'Remodelación sin Cirugía', slug: 'hifu-corporal', imagen: '/foto-corporal-1.jpg' },
    { nombre: 'Acné y Cicatrices', subtitulo: 'Abordaje Dermatológico', slug: 'tratamiento-acne', imagen: '/foto-textura-3.jpg' },
    { nombre: 'Rosácea', subtitulo: 'Estabilización Vascular', slug: 'rosacea', imagen: '/foto-facial-1.jpg' },
    { nombre: 'Medicina Capilar', subtitulo: 'Bioestimulación Folicular', slug: 'medicina-capilar', imagen: '/foto-textura-1.jpg' }
  ]
};

type Categoria = keyof typeof tratamientosDB;

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>('Faciales');

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark font-sans relative">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <Image src="/portada.jpg" alt="Venencia" fill priority sizes="100vw" className="object-cover object-center z-0 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-light/40 via-transparent to-brand-light z-0"></div>
        
        <div className="max-w-5xl text-center space-y-8 mt-20 z-10 relative">
          <span className="text-brand-terra text-[10px] uppercase tracking-[0.5em] block mb-4">Medicina Estética de Autor</span>
          <h1 className="text-6xl md:text-8xl font-serif text-brand-dark leading-none">
            Tu piel, <br/><span className="italic text-brand-dark/80">nuestra especialidad.</span>
          </h1>
          <p className="max-w-xl mx-auto text-brand-dark font-sans text-lg md:text-xl font-light leading-relaxed mt-6">
            Combinamos experiencia, ciencia y sensibilidad para crear rutinas que respeten su equilibrio natural.
          </p>
        </div>
      </section>

      {/* SECCIÓN TRATAMIENTOS (GRID EDITORIAL) */}
      <section id="tratamientos" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-brand-sand/30 pb-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif text-brand-dark mb-4">Portafolio<br/>Médico</h2>
          </div>
          <div className="flex space-x-6 md:space-x-10 overflow-x-auto pb-2 mt-8 md:mt-0">
            {(Object.keys(tratamientosDB) as Categoria[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
                  categoriaActiva === cat ? 'text-brand-terra font-bold border-b-2 border-brand-terra pb-2' : 'text-brand-dark/40 hover:text-brand-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tratamientosDB[categoriaActiva].map((tratamiento, idx) => (
            <Link 
              href={`/tratamientos/${tratamiento.slug}`} 
              key={idx} 
              className="group relative aspect-[3/4] overflow-hidden bg-brand-sand/10 cursor-pointer block"
            >
              <div className="absolute inset-0">
                <Image 
                  src={tratamiento.imagen} 
                  alt={tratamiento.nombre}
                  fill
                  className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-brand-sand text-[9px] uppercase tracking-[0.3em] font-bold mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {tratamiento.subtitulo}
                </span>
                
                <h3 className="text-3xl font-serif text-brand-light leading-snug mb-4">
                  {tratamiento.nombre}
                </h3>
                
                <div className="border-t border-brand-light/20 pt-4 mt-2 overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-brand-light/80">Protocolo Médico</span>
                  <span className="text-brand-sand text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-brand-sand/30 text-center bg-white">
        <p className="text-[10px] uppercase tracking-[0.4em] text-brand-dark/50">
          C/ Baldrich 74, Terrassa — Venencia © 2026
        </p>
      </footer>
    </main>
  );
} 