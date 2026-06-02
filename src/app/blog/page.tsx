"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  // Artículos de ejemplo (Placeholder premium)
  const articuloDestacado = {
    categoria: "Filosofía Médica",
    titulo: "El fin de la sobrecorrección: Por qué el 'menos es más' domina la medicina estética.",
    extracto: "Durante años, el sector ha normalizado rostros artificiales y volúmenes exagerados. En Clínica Venencia apostamos por la arquitectura facial y el lujo silencioso. Te explicamos por qué la naturalidad es la tendencia que ha venido para quedarse.",
    fecha: "Octubre 2026",
    imagen: "/textura-piel.webp",
    slug: "#"
  };

  const articulosRecientes = [
    {
      categoria: "Regeneración Celular",
      titulo: "Exosomas vs PRP: El futuro biológico del antienvejecimiento",
      extracto: "Analizamos las diferencias clave entre las dos terapias más potentes de la actualidad para restaurar la juventud celular de tu piel.",
      fecha: "Septiembre 2026",
      imagen: "/textura-piel.webp",
      slug: "#"
    },
    {
      categoria: "Tecnología Láser",
      titulo: "Láser Fraccionado: Mitos, verdades y por qué es el rey del colágeno",
      extracto: "Desmontamos los temores alrededor de los láseres ablativos y descubrimos cómo logran transformar cicatrices y arrugas profundas.",
      fecha: "Septiembre 2026",
      imagen: "/textura-piel.webp",
      slug: "#"
    },
    {
      categoria: "Patologías Dérmicas",
      titulo: "Guía médica definitiva para combatir el melasma rebelde",
      extracto: "El melasma tiene memoria. Descubre por qué las cremas comerciales no funcionan y cómo el abordaje láser clínico puede silenciarlo.",
      fecha: "Agosto 2026",
      imagen: "/textura-piel.webp",
      slug: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark font-sans pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-20">
        
       {/* HEADER DEL BLOG */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="text-brand-terra text-[10px] uppercase tracking-[0.4em] font-bold block">Divulgación Científica</span>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-dark leading-tight">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-brand-dark/70 font-light leading-relaxed pt-2">
            El espacio de la Dra. Trinidad Venencia dedicado a la ciencia, la belleza y la salud cutánea. Artículos clínicos explicados con elegancia.
          </p>
          <div className="w-16 h-[1px] bg-brand-sand mx-auto mt-8"></div>
        </section>

        {/* ARTÍCULO DESTACADO */}
        <section className="group relative w-full overflow-hidden bg-brand-soft rounded-sm shadow-md flex flex-col md:flex-row">
          <div className="w-full md:w-3/5 relative aspect-square md:aspect-auto min-h-[400px]">
            <Image 
              src={articuloDestacado.imagen} 
              alt={articuloDestacado.titulo} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
            />
          </div>
          <div className="w-full md:w-2/5 p-8 md:p-16 flex flex-col justify-center bg-white border-l border-brand-sand/20 z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-terra mb-4 block">
              {articuloDestacado.categoria}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark leading-snug mb-6 hover:text-brand-terra transition-colors cursor-pointer">
              {articuloDestacado.titulo}
            </h2>
            <p className="text-brand-dark/70 font-light leading-relaxed mb-8">
              {articuloDestacado.extracto}
            </p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-sand/30">
              <span className="text-xs font-serif text-brand-dark/50 italic">{articuloDestacado.fecha}</span>
              <Link href={articuloDestacado.slug} className="text-[10px] uppercase tracking-widest font-bold text-brand-dark hover:text-brand-terra transition-colors flex items-center space-x-2">
                <span>Leer Artículo</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* GRID DE ARTÍCULOS RECIENTES */}
        <section className="space-y-10">
          <div className="flex justify-between items-end border-b border-brand-sand/30 pb-4">
            <h3 className="text-2xl font-serif text-brand-dark">Últimas Publicaciones</h3>
            <span className="text-[10px] uppercase tracking-widest text-brand-dark/50">Ver todas</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articulosRecientes.map((articulo, i) => (
              <div key={i} className="group cursor-pointer flex flex-col h-full bg-white border border-brand-sand/20 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-brand-soft">
                  <Image 
                    src={articulo.imagen} 
                    alt={articulo.titulo} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-terra mb-3 block">
                    {articulo.categoria}
                  </span>
                  <h4 className="text-xl font-serif text-brand-dark leading-snug mb-4 group-hover:text-brand-terra transition-colors">
                    {articulo.titulo}
                  </h4>
                  <p className="text-sm text-brand-dark/70 font-light leading-relaxed mb-6 flex-grow">
                    {articulo.extracto}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-brand-sand/20">
                    <span className="text-xs font-serif text-brand-dark/50 italic">{articulo.fecha}</span>
                    <span className="text-brand-terra text-sm">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}