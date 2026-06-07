"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { DM_Sans } from 'next/font/google';
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dmsans'
});

// 1. ÍNDICE COMPLETO DEL BUSCADOR INTELIGENTE
const indiceBusquedaGlobal = [
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
  { nombre: 'Limpieza Facial Personalizada', slug: 'limpieza-facial', categoria: 'Faciales', palabrasClave: 'limpieza, higiene' },
  { nombre: 'Mesoterapia Lipolítica', slug: 'mesoterapia-lipolitica', categoria: 'Corporales', palabrasClave: 'grasa, celulitis' },
  { nombre: 'Esclerosis Vascular', slug: 'esclerosis-vascular', categoria: 'Corporales', palabrasClave: 'varices, arañas' },
  { nombre: 'Inductores corporales', slug: 'inductores-corporales', categoria: 'Corporales', palabrasClave: 'flacidez corporal' },
  { nombre: 'Aumento de glúteos', slug: 'aumento-gluteos', categoria: 'Corporales', palabrasClave: 'gluteos, culo' },
  { nombre: 'Mesoterapia capilar', slug: 'mesoterapia-capilar', categoria: 'Capilares', palabrasClave: 'pelo, vitaminas pelo' },
  { nombre: 'Láser LED capilar', slug: 'laser-led-capilar', categoria: 'Capilares', palabrasClave: 'led, fotobiologica' },
  { nombre: 'PRP Capilar', slug: 'prp-capilar', categoria: 'Capilares', palabrasClave: 'plasma pelo' },
  { nombre: 'Exosomas Capilares', slug: 'exosomas-capilar', categoria: 'Capilares', palabrasClave: 'exosomas pelo' },
  { nombre: 'Tratamiento Acné', slug: 'tratamiento-acne', categoria: 'Patologías', palabrasClave: 'acne, granos' },
  { nombre: 'Manchas y Melasma', slug: 'manchas-melasma', categoria: 'Patologías', palabrasClave: 'manchas, melasma' },
  { nombre: 'Control Rosácea', slug: 'rosacea-cuperosis', categoria: 'Patologías', palabrasClave: 'rosacea, rojeces' },
  { nombre: 'Cicatrices de acné', slug: 'cicatrices-acne', categoria: 'Patologías', palabrasClave: 'marcas acne, cicatrices' },
  { nombre: 'Cicatrices queloides', slug: 'cicatrices-queloides', categoria: 'Patologías', palabrasClave: 'queloides, abultadas' },
  { nombre: 'Light & Bright', slug: 'light-bright', categoria: 'Láser', palabrasClave: 'luz, rejuvenecimiento laser, brillo' },
  { nombre: 'Resurfacing Facial', slug: 'resurfacing-facial', categoria: 'Láser', palabrasClave: 'resurfacing, laser co2, renovacion' },
  { nombre: 'Fotorrejuvenecimiento', slug: 'fotorrejuvenecimiento', categoria: 'Láser', palabrasClave: 'ipl, rejuvenecimiento luz' },
  { nombre: 'Láser Manchas y Léntigos', slug: 'laser-manchas', categoria: 'Láser', palabrasClave: 'quitar manchas laser, sol' },
  { nombre: 'Láser Vascular (Rojeces)', slug: 'laser-vascular', categoria: 'Láser', palabrasClave: 'venitas, rojeces laser, arañas' },
  { nombre: 'Láser Cicatrices', slug: 'laser-cicatrices', categoria: 'Láser', palabrasClave: 'borrar cicatriz laser' },
  { nombre: 'Láser Estrías', slug: 'laser-estrias', categoria: 'Láser', palabrasClave: 'estrias, borrar estrias' },
  { nombre: 'Depilación Láser Alta Precisión', slug: 'depilacion-alta-precision', categoria: 'Láser', palabrasClave: 'depilacion, vello, pelo' },
  { nombre: 'Rejuvenecimiento manos', slug: 'rejuvenecimiento-manos', categoria: 'Avanzados', palabrasClave: 'manos' },
  { nombre: 'Hiperhidrosis', slug: 'hiperhidrosis', categoria: 'Avanzados', palabrasClave: 'sudor, axilas' },
  { nombre: 'Sonrisa Gingival', slug: 'sonrisa-gingival', categoria: 'Avanzados', palabrasClave: 'encias, sonrisa' },
  { nombre: 'Bruxismo', slug: 'bruxismo', categoria: 'Avanzados', palabrasClave: 'dientes, mandibula' }
];

// 2. ESTRUCTURA DEL PORTAFOLIO MÉDICO (ACORDEONES)
type MenuItem = { nombre: string; slug?: string; items?: MenuItem[] };

const estructuraMenuTratamientos: MenuItem[] = [
  {
    nombre: '1. Tratamientos Faciales',
    items: [
      {
        nombre: '1.1. Armonización y Volúmenes',
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
          { nombre: 'Tratamiento de bandas platismales (Anillos de Venus / Cuello).', slug: 'bandas-platismales' }
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
        nombre: '1.5. Renovación Cutánea:',
        items: [
          { nombre: 'Peelings químicos médicos.', slug: 'peelings-quimicos' },
          { nombre: 'Microneedling médico.', slug: 'microneedling' },
          { nombre: 'Limpieza Facial Personalizada.', slug: 'limpieza-facial' }
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
      { nombre: 'Depilación Láser Médica.', slug: 'depilacion-laser' }
    ]
  },
  {
    nombre: '3. Tratamientos Capilares (Salud Capilar)',
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
      { nombre: 'Tratamiento integral del Acné (Fase activa).', slug: 'tratamiento-acne' },
      { nombre: 'Eliminación de manchas y Melasma.', slug: 'manchas-melasma' },
      { nombre: 'Control de Rosácea / Cuperosis.', slug: 'rosacea-cuperosis' },
      { nombre: 'Tratamiento de cicatrices de acné y atróficas.', slug: 'cicatrices-acne' },
      { nombre: 'Tratamiento y remodelación de cicatrices queloides e hipertróficas.', slug: 'cicatrices-queloides' }
    ]
  },
  {
    nombre: '5. Láser y Plataforma Lumínica',
    items: [
      {
        nombre: '5.1. Rejuvenecimiento y Calidad de Piel',
        items: [
          { nombre: 'Light & Bright.', slug: 'light-bright' },
          { nombre: 'Resurfacing Facial.', slug: 'resurfacing-facial' },
          { nombre: 'Fotorrejuvenecimiento de Alta Precisión.', slug: 'fotorrejuvenecimiento' }
        ]
      },
      {
        nombre: '5.2. Láser Vascular y Pigmentario',
        items: [
          { nombre: 'Tratamiento de Manchas Solares y Léntigos.', slug: 'laser-manchas' },
          { nombre: 'Eliminación de Rojeces, Cuperosis y Arañas Vasculares.', slug: 'laser-vascular' }
        ]
      },
      {
        nombre: '5.3. Cicatrices y Estrías',
        items: [
          { nombre: 'Remodelación de Cicatrices.', slug: 'laser-cicatrices' },
          { nombre: 'Tratamiento de Estrías Corporales.', slug: 'laser-estrias' }
        ]
      },
      {
        nombre: '5.4. Fotodepilación Médica',
        items: [
          { nombre: 'Depilación Láser de Alta Precisión: Corporal y Facial.', slug: 'depilacion-alta-precision' }
        ]
      }
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
      <body className={`${dmSans.variable} bg-brand-light text-brand-dark font-sans antialiased`}>
        
        {/* NAVBAR SUPERIOR FIJO */}
        <nav className="fixed top-0 w-full z-40 border-b border-brand-sand/30 bg-brand-light/90 backdrop-blur-md px-6 md:px-12 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase text-brand-dark hover:text-brand-terra transition duration-300">
            VENENCIA
          </Link>
          
          <div className="flex items-center space-x-6 md:space-x-8">
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
                      <span className="font-serif text-sm text-brand-terra block mb-1">{res.categoria}</span>
                      <span className="font-sans text-sm">{res.nombre}</span>
                    </Link>
                  )) : <div className="p-6 text-xs text-center">No hay resultados</div>}
                </div>
              )}
            </div>

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
            
            {/* SECCIÓN A: ENLACES CORPORATIVOS SELECCIONADOS */}
            <div className="flex flex-col space-y-4 border-b border-brand-sand/30 pb-6">
              <Link href="/clinica" onClick={() => setMenuAbierto(false)} className="text-xl font-serif text-brand-dark hover:text-brand-terra transition-colors block">
                La Clínica <span className="text-[10px] font-sans text-brand-terra/60 block uppercase tracking-widest mt-1">Quiénes Somos & Equipo</span>
              </Link>
              <Link href="/metodo" onClick={() => setMenuAbierto(false)} className="text-xl font-serif text-brand-dark hover:text-brand-terra transition-colors block">
                El Método Venencia <span className="text-[10px] font-sans text-brand-terra/60 block uppercase tracking-widest mt-1">Filosofía & Rigor Tecnológico</span>
              </Link>
             {/* <Link href="/casos-reales" onClick={() => setMenuAbierto(false)} className="text-xl font-serif text-brand-dark hover:text-brand-terra transition-colors block">
                Casos Reales <span className="text-[10px] font-sans text-brand-terra/60 block uppercase tracking-widest mt-1">Resultados antes y después</span>
              </Link> */}
              {/* ENLACE AL BLOG */}
              <Link href="/blog" onClick={() => setMenuAbierto(false)} className="text-xl font-serif text-brand-dark hover:text-brand-terra transition-colors block">
                Blog <span className="text-[10px] font-sans text-brand-terra/60 block uppercase tracking-widest mt-1">Divulgación Científica</span>
              </Link>
            </div>

            {/* SECCIÓN B: PORTAFOLIO DE TRATAMIENTOS */}
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-terra/70 block mb-3">Portafolio Médico</span>
              
              {estructuraMenuTratamientos.map((categoria) => (
                <div key={categoria.nombre} className="border-b border-brand-sand/20 last:border-0">
                  <button 
                    onClick={() => setCategoriaExpandida(categoriaExpandida === categoria.nombre ? null : categoria.nombre)}
                    className="w-full py-4 flex justify-between items-center text-left hover:text-brand-terra transition-colors group"
                  >
                    <span className="text-base font-serif tracking-wide">{categoria.nombre}</span>
                    <span className={`text-[10px] text-brand-sand transform transition-transform duration-300 ${categoriaExpandida === categoria.nombre ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${categoriaExpandida === categoria.nombre ? 'max-h-[2000px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 border-l border-brand-sand/30 flex flex-col space-y-5 py-2">
                      
                      {categoria.items?.map((subItem, index) => (
                        subItem.items ? (
                          <div key={index} className="flex flex-col space-y-3">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-terra/80 leading-relaxed">
                              {subItem.nombre}
                            </span>
                            <div className="flex flex-col space-y-3 pl-3">
                              {subItem.items.map((trat) => (
                                <Link 
                                  key={trat.slug} 
                                  href={`/tratamientos/${trat.slug}`}
                                  onClick={() => setMenuAbierto(false)}
                                  className="text-[13px] font-light text-brand-dark/80 hover:text-brand-terra transition-colors leading-snug"
                                >
                                  {trat.nombre}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link 
                            key={index} 
                            href={`/tratamientos/${subItem.slug}`}
                            onClick={() => setMenuAbierto(false)}
                            className="text-[13px] font-light text-brand-dark/80 hover:text-brand-terra transition-colors leading-snug"
                          >
                            {subItem.nombre}
                          </Link>
                        )
                      ))}
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SECCIÓN C: ENLACE INFERIOR DIRECTO */}
            <div className="border-t border-brand-sand/30 pt-4 flex flex-col space-y-2">
              <Link href="/contacto" onClick={() => setMenuAbierto(false)} className="text-xl font-serif text-brand-dark hover:text-brand-terra transition-colors block">
                Ubicación y Contacto <span className="text-[10px] font-sans text-brand-terra/60 block uppercase tracking-widest mt-1">Terrassa — Agenda de Autor</span>
              </Link>
            </div>

          </div>

          <div className="p-8 border-t border-brand-sand/20 bg-brand-light/50 space-y-4">
            <button className="w-full flex items-center justify-center space-x-2 border border-brand-dark py-4 text-xs uppercase tracking-widest hover:bg-brand-sand/10 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span>Contactar</span>
            </button>
            <Link href="/reserva" onClick={() => setMenuAbierto(false)} className="w-full">
              <button className="w-full bg-brand-dark text-white py-4 text-xs uppercase tracking-widest hover:bg-brand-terra transition-colors flex justify-center items-center space-x-2">
                <span>Reserva</span>
                <span className="text-sm">→</span>
              </button>
            </Link>
          </div>

        </div>

        {/* CONTENIDO DE LA WEB */}

        {/* CONTENIDO DE LA WEB */}
        <div className="pt-0">
          {children}
        </div>

      </body>
    </html>
  );
}