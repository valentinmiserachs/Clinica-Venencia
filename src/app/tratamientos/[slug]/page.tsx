"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { tratamientosData, generarTratamientoPorDefecto } from '@/data/db';

type TabType = 'descripcion' | 'ventajas' | 'faqs' | 'evidencia';

export default function TratamientoPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const tratamiento = tratamientosData[slug] || generarTratamientoPorDefecto(slug);
  
  const [tabActiva, setTabActiva] = useState<TabType>('descripcion');
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);

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

        <div className="py-16 min-h-[300px]">
          {tabActiva === 'descripcion' && (
            <div className="animate-fade-in-up space-y-16">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h3 className="text-2xl font-serif text-brand-dark mb-6">{tratamiento.tituloDescripcion || "Protocolo Médico"}</h3>
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

      {/* CONDICIONAL: Solo mostrar si la foto NO es la textura provisional */}
      {tratamiento.antesDespues && tratamiento.antesDespues.antes !== "/textura-piel.webp" && (
        <section className="py-24 bg-brand-dark text-brand-light relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-4">
              <span className="text-brand-sand text-[10px] uppercase tracking-[0.4em] font-bold">Resultados Reales</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-light">El arte del cuidado de la piel</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-5xl mx-auto">
              {/* Tarjeta ANTES */}
              <div className="relative aspect-[4/5] md:aspect-[3/4] bg-brand-dark/50 overflow-hidden rounded-sm shadow-xl">
                <Image 
                  src={tratamiento.antesDespues.antes} 
                  alt="Estado Inicial" 
                  fill 
                  priority /* <-- FIX LCP */
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  className="object-cover object-center hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] rounded-sm backdrop-blur-md border border-white/10">
                  Antes
                </div>
              </div>

              {/* Tarjeta DESPUÉS */}
              <div className="relative aspect-[4/5] md:aspect-[3/4] bg-brand-dark/50 overflow-hidden rounded-sm shadow-xl">
                <Image 
                  src={tratamiento.antesDespues.despues} 
                  alt="Resultado Final" 
                  fill 
                  priority /* <-- FIX LCP */
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  className="object-cover object-center hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute top-4 right-4 bg-brand-terra/90 text-white px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] rounded-sm backdrop-blur-md shadow-lg border border-brand-terra/50">
                  Después
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CALL TO ACTION */}
      <section className="bg-brand-sand/10 py-16 border-t border-brand-sand/30">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-serif text-brand-dark mb-6">¿Preparado/a para transformar tu piel?</h2>
          <Link href="/reserva">
            <button className="bg-brand-dark text-brand-light px-10 py-4 text-sm uppercase tracking-widest hover:bg-brand-terra transition-colors shadow-xl">Solicitar Valoración</button>
          </Link>
        </div>
      </section>
      
    </main>
  );
}