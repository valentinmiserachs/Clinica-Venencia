"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { tratamientosDB, TratamientoHome } from '@/data/db';

type Categoria = keyof typeof tratamientosDB;

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>('Tratamientos Faciales');

  const renderTarjeta = (tratamiento: TratamientoHome, idx: number) => (
    <Link 
      href={`/tratamientos/${tratamiento.slug}`} 
      key={idx} 
      className="group relative aspect-[3/4] md:aspect-[3/4] overflow-hidden bg-brand-sand/10 cursor-pointer block rounded-sm md:rounded-none"
    >
      <div className="absolute inset-0">
        <Image src={tratamiento.imagen} alt={tratamiento.nombre} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-110" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-70 md:opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end transform transition-transform duration-500 md:translate-y-4 group-hover:translate-y-0">
        <span className="text-brand-sand text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold mb-1 md:mb-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {tratamiento.subtitulo}
        </span>
        <h3 className="text-xl md:text-2xl font-serif text-brand-light leading-snug mb-2 md:mb-4">{tratamiento.nombre}</h3>
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
      <section className="relative h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden">
        <Image src={'/recepcion-hero.jpg'} alt="Venencia" fill priority sizes="100vw" className="object-cover object-[45%_center] z-0 opacity-50 mix-blend-multiply scale-[1.20]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-light/40 via-transparent to-brand-light z-0"></div>
        <div className="max-w-5xl text-center space-y-6 md:space-y-8 mt-40 md:mt-56 z-10 relative">
          <span className="text-brand-terra text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] block mb-2 md:mb-4">Medicina Estética de Autor</span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-brand-dark leading-tight md:leading-none">Tu piel, <br/><span className="italic text-brand-dark/80">nuestra especialidad.</span></h1>
          <p className="max-w-xl mx-auto text-brand-dark font-sans text-base md:text-xl font-light leading-relaxed mt-4 md:mt-6 px-4 md:px-0">
            Combinamos experiencia, ciencia y sensibilidad para crear rutinas que respeten su equilibrio natural.
          </p>
        </div>
      </section>

      <section id="tratamientos" className="py-20 md:py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 md:mb-16 border-b border-brand-sand/30 pb-8 md:pb-12">
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-2 md:mb-4">Portafolio<br className="hidden lg:block"/>Médico</h2>
          </div>
          <div className="flex space-x-6 md:space-x-10 overflow-x-auto pb-2 w-full lg:w-auto scrollbar-hide snap-x">
            {(Object.keys(tratamientosDB) as Categoria[]).map((cat) => (
              <button key={cat} onClick={() => setCategoriaActiva(cat)} className={`text-[9px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap snap-start ${categoriaActiva === cat ? 'text-brand-terra font-bold border-b-2 border-brand-terra pb-1 md:pb-2' : 'text-brand-dark/40 hover:text-brand-dark'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {datosCategoria && datosCategoria.tieneSubcategorias && datosCategoria.subcategorias ? (
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
            {datosCategoria?.tratamientos?.map((tratamiento, idx) => renderTarjeta(tratamiento, idx))}
          </div>
        )}
      </section>
    </main>
  );
}