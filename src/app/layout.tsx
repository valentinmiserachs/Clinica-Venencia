"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import { DM_Sans } from 'next/font/google';
import { indiceBusquedaGlobal, estructuraMenuTratamientos } from '@/data/db';
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dmsans'
});

const quitarAcentos = (texto: string) => {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [busqueda, setBusqueda] = useState('');
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [categoriaExpandida, setCategoriaExpandida] = useState<string | null>(null);

  const busquedaLimpia = quitarAcentos(busqueda.trim());
  const resultados = busquedaLimpia === '' ? [] : indiceBusquedaGlobal.filter(item => {
    const nombreLimpio = quitarAcentos(item.nombre);
    const clavesLimpias = quitarAcentos(item.palabrasClave);
    return nombreLimpio.includes(busquedaLimpia) || clavesLimpias.includes(busquedaLimpia);
  });

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* VALIDACIÓN DOMINIO META ADS */}
        <meta name="facebook-domain-verification" content="z14o5fuguo72gkxp7iryw0nf485kcz" />
      </head>
      <body className={`${dmSans.variable} bg-brand-light text-brand-dark font-sans antialiased flex flex-col min-h-screen`}>
        
        {/* NAVBAR SUPERIOR FIJO */}
        <nav className="fixed top-0 w-full z-40 border-b border-brand-sand/30 bg-brand-light/90 backdrop-blur-md px-6 md:px-12 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase text-brand-dark hover:text-brand-terra transition duration-300">
            VENENCIA
          </Link>
          
          <div className="flex items-center space-x-5 md:space-x-8">
            
            {/* Buscador (Solo Desktop) */}
            <div className="relative hidden md:block">
              <div className="flex items-center border-b border-brand-dark/20 pb-1 focus-within:border-brand-terra transition-colors">
                <span className="text-brand-dark/40 mr-2">⌕</span>
                <input type="text" placeholder="Buscar tratamiento..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} className="bg-transparent text-[10px] uppercase tracking-widest focus:outline-none text-brand-dark w-48 transition-all focus:w-64" />
              </div>
              {busqueda && (
                <div className="absolute top-full right-0 mt-4 w-80 bg-white border border-brand-sand/30 shadow-2xl z-50 rounded-sm">
                  {resultados.length > 0 ? resultados.map((res) => (
                    <Link key={res.slug} href={`/tratamientos/${res.slug}`} onClick={() => setBusqueda('')} className="block px-5 py-4 hover:bg-brand-sand/10 border-b border-brand-sand/10">
                      <span className="font-serif text-sm text-brand-terra block mb-1">{res.categoria}</span>
                      <span className="font-sans text-sm">{res.nombre}</span>
                    </Link>
                  )) : <div className="p-6 text-xs text-center">No hay resultados</div>}
                </div>
              )}
            </div>

            {/* Botón de Reserva Directa (Visible siempre) */}
            <Link href="/reserva" className="hidden sm:flex items-center justify-center bg-brand-dark text-white px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] hover:bg-brand-terra transition-colors duration-300">
              Reservar Cita
            </Link>

            {/* Menú Hamburguesa */}
            <button onClick={() => setMenuAbierto(true)} className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-bold hover:text-brand-terra transition-colors ml-2">
              <span className="hidden md:block">Menú</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </nav>

        {/* OVERLAY OSCURO */}
        {menuAbierto && <div className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-50 transition-opacity" onClick={() => setMenuAbierto(false)}></div>}

        {/* PANEL LATERAL DEL MENÚ */}
        <div className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${menuAbierto ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center px-8 py-6 border-b border-brand-sand/20">
            <span className="text-2xl font-serif tracking-widest text-brand-dark">MENU</span>
            <div className="flex items-center space-x-6">
              <span className="text-[10px] uppercase tracking-widest border border-brand-sand/50 px-3 py-1 rounded-sm">ES ▾</span>
              <button onClick={() => setMenuAbierto(false)} className="text-brand-dark hover:text-brand-terra transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6 no-scrollbar">
            <div className="flex flex-col space-y-4 border-b border-brand-sand/30 pb-6">
              <Link href="/clinica" onClick={() => setMenuAbierto(false)} className="text-xl font-serif text-brand-dark hover:text-brand-terra transition-colors block">
                La Clínica <span className="text-[10px] font-sans text-brand-terra/60 block uppercase tracking-widest mt-1">Quiénes Somos & Equipo</span>
              </Link>
            </div>

            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-terra/70 block mb-3">Portafolio Médico</span>
              {estructuraMenuTratamientos.map((categoria) => (
                <div key={categoria.nombre} className="border-b border-brand-sand/20 last:border-0">
                  <button onClick={() => setCategoriaExpandida(categoriaExpandida === categoria.nombre ? null : categoria.nombre)} className="w-full py-4 flex justify-between items-center text-left hover:text-brand-terra transition-colors group">
                    <span className="text-base font-serif tracking-wide">{categoria.nombre}</span>
                    <span className={`text-[10px] text-brand-sand transform transition-transform duration-300 ${categoriaExpandida === categoria.nombre ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${categoriaExpandida === categoria.nombre ? 'max-h-[2000px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 border-l border-brand-sand/30 flex flex-col space-y-5 py-2">
                      {categoria.items?.map((subItem, index) => (
                        subItem.items ? (
                          <div key={index} className="flex flex-col space-y-3">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-terra/80 leading-relaxed">{subItem.nombre}</span>
                            <div className="flex flex-col space-y-3 pl-3">
                              {subItem.items.map((trat) => (
                                <Link key={trat.slug} href={`/tratamientos/${trat.slug}`} onClick={() => setMenuAbierto(false)} className="text-[13px] font-light text-brand-dark/80 hover:text-brand-terra transition-colors leading-snug">{trat.nombre}</Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link key={index} href={`/tratamientos/${subItem.slug}`} onClick={() => setMenuAbierto(false)} className="text-[13px] font-light text-brand-dark/80 hover:text-brand-terra transition-colors leading-snug">{subItem.nombre}</Link>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-sand/30 pt-4 flex flex-col space-y-2">
              <Link href="/contacto" onClick={() => setMenuAbierto(false)} className="text-xl font-serif text-brand-dark hover:text-brand-terra transition-colors block">
                Ubicación y Contacto <span className="text-[10px] font-sans text-brand-terra/60 block uppercase tracking-widest mt-1">Terrassa — Agenda de Autor</span>
              </Link>
            </div>
          </div>

          <div className="p-8 border-t border-brand-sand/20 bg-brand-light/50 space-y-4">
            <a href="https://wa.me/34608713135?text=Hola,%20estoy%20en%20la%20web%20y%20me%20gustaría%20agendar%20una%20valoración%20en%20Venencia." target="_blank" rel="noopener noreferrer" onClick={() => setMenuAbierto(false)} className="w-full flex items-center justify-center space-x-2 border border-brand-dark py-4 text-xs uppercase tracking-widest hover:bg-brand-sand/10 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span>Contactar</span>
            </a>
            <Link href="/reserva" onClick={() => setMenuAbierto(false)} className="w-full">
              <button className="w-full bg-brand-dark text-white py-4 text-xs uppercase tracking-widest hover:bg-brand-terra transition-colors flex justify-center items-center space-x-2">
                <span>Reserva</span>
                <span className="text-sm">→</span>
              </button>
            </Link>
          </div>
        </div>

        <main className="flex-grow pt-0">{children}</main>

     {/* SECCIÓN PARTNERS Y AUTORIDAD CLÍNICA (CARRUSEL INFINITO DE IMÁGENES) */}
      <section className="bg-brand-light py-12 border-t border-brand-sand/20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
          <span className="text-brand-terra text-[10px] uppercase tracking-[0.4em] font-bold">
            Excelencia Médica
          </span>
          <h3 className="text-sm font-serif text-brand-dark/70 mt-2 uppercase tracking-widest">
            Laboratorios & Tecnología
          </h3>
        </div>

        {/* CSS Inyectado para la animación infinita */}
        <style>{`
          @keyframes scroll-infinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-infinite {
            animation: scroll-infinite 40s linear infinite;
            width: max-content;
          }
          .animate-scroll-infinite:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="relative w-full overflow-hidden flex">
          <div className="animate-scroll-infinite flex items-center gap-16 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 pl-16">
            
            {/* TANDA 1: Mapeo exacto de tu carpeta /public/logos/ */}
            {[
              { src: "/logos/candela.png", alt: "Candela" },
              { src: "/logos/nordlys.png", alt: "Nordlys" },
              { src: "/logos/glacecandela.png", alt: "Glace Candela" },
              { src: "/logos/merz.png", alt: "Merz Aesthetics" },
              { src: "/logos/galderma.png", alt: "Galderma" },
              { src: "/logos/fillmed.png", alt: "Fillmed" },
              { src: "/logos/mesoestetic.png", alt: "Mesoestetic" },
              { src: "/logos/cantabrialabs.png", alt: "Cantabria Labs" },
              { src: "/logos/skinceuticals2.png", alt: "SkinCeuticals" },
              { src: "/logos/isclinical.png", alt: "IS Clinical" },
              { src: "/logos/proxn.png", alt: "Pro XN" }
            ].map((logo, index) => (
              <div key={`tanda1-${index}`} className="flex-shrink-0 flex items-center justify-center h-10 md:h-12">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  loading="lazy"
                  className="h-full w-auto object-contain max-w-[140px] md:max-w-[180px]" 
                />
              </div>
            ))}

            {/* TANDA 2: Clon exacto para que el bucle no dé saltos */}
            {[
              { src: "/logos/candela.png", alt: "Candela" },
              { src: "/logos/nordlys.png", alt: "Nordlys" },
              { src: "/logos/glacecandela.png", alt: "Glace Candela" },
              { src: "/logos/merz.png", alt: "Merz Aesthetics" },
              { src: "/logos/galderma.png", alt: "Galderma" },
              { src: "/logos/fillmed.png", alt: "Fillmed" },
              { src: "/logos/mesoestetic.png", alt: "Mesoestetic" },
              { src: "/logos/cantabrialabs.png", alt: "Cantabria Labs" },
              { src: "/logos/skinceuticals2.png", alt: "SkinCeuticals" },
              { src: "/logos/isclinical.png", alt: "IS Clinical" },
              { src: "/logos/proxn.png", alt: "Pro XN" }
            ].map((logo, index) => (
              <div key={`tanda2-${index}`} className="flex-shrink-0 flex items-center justify-center h-10 md:h-12">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  loading="lazy"
                  className="h-full w-auto object-contain max-w-[140px] md:max-w-[180px]" 
                />
              </div>
            ))}

          </div>
        </div>
      </section>

        <footer className="py-12 border-t border-brand-sand/30 bg-white text-center mt-auto z-10 relative">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-brand-dark/50 font-bold">C/ Baldrich 74, Terrassa — Venencia © {new Date().getFullYear()}</p>
            <div className="flex justify-center items-center space-x-4 md:space-x-8 text-xs font-light text-brand-dark/60 border-y border-brand-sand/20 py-4">
              <Link href="/politica-privacidad" className="hover:text-brand-terra transition-colors">Política de Privacidad</Link>
              <span>|</span>
              <Link href="/politica-cookies" className="hover:text-brand-terra transition-colors">Política de Cookies</Link>
              <span>|</span>
              <Link href="/aviso-legal" className="hover:text-brand-terra transition-colors">Aviso Legal</Link>
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-brand-dark/40">Venencia © {new Date().getFullYear()}. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}