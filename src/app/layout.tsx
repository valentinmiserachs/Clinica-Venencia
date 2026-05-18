"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import "./globals.css";

// 1. ÍNDICE DEL BUSCADOR (El motor inteligente)
const indiceBusquedaGlobal = [
  { nombre: 'Armonización con Ácido Hialurónico', slug: 'acido-hialuronico', categoria: 'Faciales', palabrasClave: 'labios, ojeras, pomulos, volumen' },
  { nombre: 'Neuromoduladores (Tercio Superior)', slug: 'neuromoduladores', categoria: 'Faciales', palabrasClave: 'botox, frente, entrecejo, arrugas' },
  { nombre: 'Estimuladores de Colágeno', slug: 'estimuladores-colageno', categoria: 'Faciales', palabrasClave: 'sculptra, flacidez, tensado' },
  { nombre: 'Morpheus 8', slug: 'morpheus-8', categoria: 'Faciales', palabrasClave: 'radiofrecuencia microagujas, papada' },
  { nombre: 'Hilos Tensores PDO', slug: 'hilos-tensores', categoria: 'Faciales', palabrasClave: 'hilos espiculados, lifting' },
  { nombre: 'Peeling Químico Médico', slug: 'peeling-quimico', categoria: 'Faciales', palabrasClave: 'manchas, melasma, glow' },
  { nombre: 'Láser Fraccionado CO2', slug: 'laser-co2', categoria: 'Láser', palabrasClave: 'resurfacing, cicatrices acne' },
  { nombre: 'Eliminación de Varices (Nd:YAG)', slug: 'varices-ndyag', categoria: 'Láser', palabrasClave: 'arañas vasculares, venitas' },
  { nombre: 'Láser Q-Switched (Manchas)', slug: 'manchas-qswitched', categoria: 'Láser', palabrasClave: 'quitar manchas, sol, tatuajes' },
  { nombre: 'Luz Pulsada Intensa (IPL)', slug: 'ipl-facial', categoria: 'Láser', palabrasClave: 'rojeces, unificar tono, cuperosis' },
  { nombre: 'Depilación Láser Médica', slug: 'depilacion-laser', categoria: 'Láser', palabrasClave: 'quitar pelo definitivo, diodo' },
  { nombre: 'Remodelación Corporal (HIFU)', slug: 'hifu-corporal', categoria: 'Corporal', palabrasClave: 'ultrasonidos, quemar grasa' },
  { nombre: 'Tratamiento del Acné', slug: 'tratamiento-acne', categoria: 'Patologías', palabrasClave: 'granitos, espinillas, piel grasa' },
  { nombre: 'Rosácea y Cuperosis', slug: 'rosacea', categoria: 'Patologías', palabrasClave: 'piel roja, sofocos, sensibilidad' },
  { nombre: 'Medicina Capilar', slug: 'medicina-capilar', categoria: 'Capilar', palabrasClave: 'caida pelo, alopecia, prp' }
];

// 2. ESTRUCTURA DEL MENÚ LATERAL
const estructuraMenu = {
  'Faciales Inyectables': [
    { nombre: 'Ácido Hialurónico', slug: 'acido-hialuronico' },
    { nombre: 'Neuromoduladores', slug: 'neuromoduladores' },
    { nombre: 'Estimuladores de Colágeno', slug: 'estimuladores-colageno' },
    { nombre: 'Hilos Tensores', slug: 'hilos-tensores' }
  ],
  'Plataforma Láser': [
    { nombre: 'Láser CO2 Fraccionado', slug: 'laser-co2' },
    { nombre: 'Luz Pulsada (IPL)', slug: 'ipl-facial' },
    { nombre: 'Q-Switched (Manchas)', slug: 'manchas-qswitched' },
    { nombre: 'Nd:YAG (Varices)', slug: 'varices-ndyag' },
    { nombre: 'Depilación Médica', slug: 'depilacion-laser' }
  ],
  'Cuidado de la Piel & Acné': [
    { nombre: 'Morpheus 8', slug: 'morpheus-8' },
    { nombre: 'Peeling Químico', slug: 'peeling-quimico' },
    { nombre: 'Tratamiento Acné', slug: 'tratamiento-acne' },
    { nombre: 'Rosácea', slug: 'rosacea' }
  ],
  'Moldeado Corporal': [
    { nombre: 'HIFU Corporal', slug: 'hifu-corporal' }
  ],
  'Medicina Capilar': [
    { nombre: 'Mesoterapia y Exosomas', slug: 'medicina-capilar' }
  ]
};

// ==========================================
// FUNCIÓN PARA QUITAR ACENTOS (NORMALIZACIÓN)
// ==========================================
const quitarAcentos = (texto: string) => {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [busqueda, setBusqueda] = useState('');
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [categoriaExpandida, setCategoriaExpandida] = useState<string | null>(null);

  // Lógica de filtrado a prueba de errores ortográficos y acentos
  const busquedaLimpia = quitarAcentos(busqueda.trim());
  const resultados = busquedaLimpia === '' ? [] : indiceBusquedaGlobal.filter(item => {
    const nombreLimpio = quitarAcentos(item.nombre);
    const clavesLimpias = quitarAcentos(item.palabrasClave);
    return nombreLimpio.includes(busquedaLimpia) || clavesLimpias.includes(busquedaLimpia);
  });

  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-brand-light text-brand-dark antialiased">
        
        {/* NAVBAR SUPERIOR FIJO */}
        <nav className="fixed top-0 w-full z-40 border-b border-brand-sand/30 bg-brand-light/90 backdrop-blur-md px-6 md:px-12 py-5 flex justify-between items-center">
          
          <Link href="/" className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase text-brand-dark hover:text-brand-terra transition duration-300">
            Dra. Trinidad
          </Link>
          
          <div className="flex items-center space-x-6 md:space-x-8">
            
            {/* BUSCADOR RÁPIDO */}
            <div className="relative hidden md:block">
              <div className="flex items-center border-b border-brand-dark/20 pb-1 focus-within:border-brand-terra transition-colors">
                <span className="text-brand-dark/40 mr-2">⌕</span>
                <input
                  type="text"
                  placeholder="Buscar tratamiento..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="bg-transparent text-[10px] uppercase tracking-widest focus:outline-none text-brand-dark w-48 transition-all focus:w-64"
                />
              </div>
              {busqueda && (
                <div className="absolute top-full right-0 mt-4 w-80 bg-white border border-brand-sand/30 shadow-2xl z-50 rounded-sm">
                  {resultados.length > 0 ? resultados.map((res) => (
                    <Link key={res.slug} href={`/tratamientos/${res.slug}`} onClick={() => setBusqueda('')} className="block px-5 py-4 hover:bg-brand-sand/10 border-b border-brand-sand/10">
                      <span className="font-serif text-sm">{res.nombre}</span>
                    </Link>
                  )) : <div className="p-6 text-xs text-center">No hay resultados</div>}
                </div>
              )}
            </div>

            {/* BOTÓN DE MENÚ (HAMBURGUESA) */}
            <button 
              onClick={() => setMenuAbierto(true)}
              className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-bold hover:text-brand-terra transition-colors"
            >
              <span className="hidden md:block">Menú</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            
          </div>
        </nav>

        {/* OVERLAY OSCURO */}
        {menuAbierto && (
          <div 
            className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-50 transition-opacity"
            onClick={() => setMenuAbierto(false)}
          ></div>
        )}

        {/* PANEL LATERAL DEL MENÚ */}
        <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${menuAbierto ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <div className="flex justify-between items-center px-8 py-6 border-b border-brand-sand/20">
            <span className="text-2xl font-serif tracking-widest text-brand-dark">MENU</span>
            <div className="flex items-center space-x-6">
              <span className="text-[10px] uppercase tracking-widest border border-brand-sand/50 px-3 py-1 rounded-sm">ES ▾</span>
              <button onClick={() => setMenuAbierto(false)} className="text-brand-dark hover:text-brand-terra transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-8 py-6 space-y-2 no-scrollbar">
            {Object.entries(estructuraMenu).map(([categoria, tratamientos]) => (
              <div key={categoria} className="border-b border-brand-sand/20 last:border-0">
                <button 
                  onClick={() => setCategoriaExpandida(categoriaExpandida === categoria ? null : categoria)}
                  className="w-full py-5 flex justify-between items-center text-left hover:text-brand-terra transition-colors group"
                >
                  <span className="text-lg font-serif tracking-wide">{categoria}</span>
                  <span className={`text-brand-sand transform transition-transform duration-300 ${categoriaExpandida === categoria ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${categoriaExpandida === categoria ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 border-l border-brand-sand/30 flex flex-col space-y-4 py-2">
                    {tratamientos.map((trat) => (
                      <Link 
                        key={trat.slug} 
                        href={`/tratamientos/${trat.slug}`}
                        onClick={() => setMenuAbierto(false)}
                        className="text-[13px] font-light text-brand-dark/70 hover:text-brand-terra transition-colors"
                      >
                        {trat.nombre}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 border-t border-brand-sand/20 bg-brand-light/50 space-y-4">
            <button className="w-full flex items-center justify-center space-x-2 border border-brand-dark py-4 text-xs uppercase tracking-widest hover:bg-brand-sand/10 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span>Contactar</span>
            </button>
            <button className="w-full bg-brand-dark text-white py-4 text-xs uppercase tracking-widest hover:bg-brand-terra transition-colors flex justify-center items-center space-x-2">
              <span>Reserva</span>
              <span className="text-sm">→</span>
            </button>
          </div>

        </div>

        {/* CONTENIDO DE LA WEB */}
        <div className="pt-0">
          {children}
        </div>

      </body>
    </html>
  );
}