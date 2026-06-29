"use client";
import React from 'react';
import Image from 'next/image';

export default function ClinicaPage() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark font-sans pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* HERO EDITORIAL */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="text-brand-terra text-[10px] uppercase tracking-[0.4em] font-bold block">Sobre Nosotros</span>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-dark leading-tight">
            Elevamos la medicina estética a la categoría de arte.
          </h1>
          <p className="text-lg md:text-xl text-brand-dark/70 font-light leading-relaxed pt-4">
            No creemos en la belleza estandarizada. En Clínica Venencia defendemos el lujo silencioso: resultados imperceptibles que devuelven la luz, la salud y la estructura natural a tu rostro.
          </p>
          <div className="w-16 h-[1px] bg-brand-sand mx-auto mt-8"></div>
        </section>

        {/* ESPACIO PARA FOTO GRANDE DEL EQUIPO O CLÍNICA */}
        <section className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-brand-soft overflow-hidden rounded-sm shadow-xl">
          <Image 
            src="/textura-piel.webp" 
            alt="Interior de Clínica Venencia" 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-[2s]"
          />
        </section>

        {/* LA DOCTORA (PERFIL MÉDICO Y FILOSOFÍA) */}
        <section className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Espacio para el retrato de la Dra. Trinidad */}
          <div className="w-full md:w-5/12 relative aspect-[3/4] bg-brand-soft shadow-lg rounded-sm overflow-hidden">
            <Image 
              src="/foto-trini.jpg" 
              alt="Dra. Trinidad Venencia" 
              fill 
              className="object-cover" 
            />
            <div className="absolute bottom-6 left-6 text-white z-10">
              <span className="block font-serif text-2xl">Dra. Trinidad Venencia</span>
              <span className="block text-[10px] uppercase tracking-widest mt-1 opacity-80">Directora Médica & Fundadora</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Texto Editorial */}
          <div className="w-full md:w-7/12 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark leading-snug">
              &quot;El éxito de mi trabajo se basa en que nadie te pregunte qué te has hecho, sino cómo es posible que te vean tan descansada.&quot;
            </h2>
            
            <div className="space-y-6 text-brand-dark/80 font-light leading-relaxed">
              <p>
                La Dra. Trinidad Venencia es el alma clínica de nuestro centro. Especializada en Medicina Estética Avanzada y Regenerativa, ha forjado su trayectoria combinando el máximo rigor dermatológico con un profundo sentido de la proporción y la anatomía humana.
              </p>
              <p>
                Alejada de las tendencias de sobrecorrección y volúmenes artificiales que inundan el sector, la doctora ha creado un espacio clínico seguro en Terrassa. Aquí, cada abordaje se realiza bajo la lupa de la ecografía facial, asegurando que cada infiltración de neuromoduladores o inductores de colágeno se coloque en el plano anatómico exacto.
              </p>
              <p>
                Su obsesión por la calidad de la piel la ha llevado a incorporar las plataformas lumínicas (láseres) y las terapias biológicas (exosomas y PRP) más exclusivas del mundo.
              </p>
            </div>
          </div>
        </section>

        {/* EL ESPACIO (LA CLÍNICA) */}
        <section className="bg-brand-sand/10 p-10 md:p-20 border border-brand-sand/30 rounded-sm">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="text-brand-terra text-[10px] uppercase tracking-[0.4em] font-bold block">Nuestro Santuario</span>
            <h3 className="text-3xl md:text-4xl font-serif text-brand-dark">Un refugio de calma clínica en Terrassa</h3>
            <p className="text-brand-dark/70 font-light leading-relaxed">
              Hemos diseñado nuestra clínica para que cruzar sus puertas sea el inicio de tu tratamiento. Un ambiente cálido, minimalista y orgánico, donde los aromas, la luz y la absoluta privacidad reemplazan la frialdad de las salas de espera tradicionales. 
            </p>
            
            {/* Tres huecos para fotos de detalle de la clínica (recepción, cabina, láser) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="relative aspect-square bg-brand-soft overflow-hidden shadow-sm">
                 <Image src="/textura-piel.webp" alt="Detalle Clínica 1" fill className="object-cover" />
              </div>
              <div className="relative aspect-square bg-brand-soft overflow-hidden shadow-sm">
                 <Image src="/textura-piel.webp" alt="Detalle Clínica 2" fill className="object-cover" />
              </div>
              <div className="relative aspect-square bg-brand-soft overflow-hidden shadow-sm">
                 <Image src="/textura-piel.webp" alt="Detalle Clínica 3" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
        {/* VANGUARDIA TECNOLÓGICA (CANDELA MEDICAL) */}
        <section className="pt-10 md:pt-16">
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <span className="text-brand-terra text-[10px] uppercase tracking-[0.4em] font-bold block">Tecnología Gold Standard</span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark">La ciencia detrás del lujo</h2>
            <p className="text-brand-dark/70 font-light leading-relaxed">
              Nuestra filosofía médica exige herramientas que garanticen la máxima seguridad y eficacia. Por eso, operamos en exclusiva con plataformas de Candela Medical, el referente mundial en dermatología avanzada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* NORDLYS */}
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-2xl font-serif text-brand-dark border-b border-brand-sand/30 pb-4">Plataforma Nordlys™</h3>
              <p className="text-brand-dark/80 font-light leading-relaxed">
                Considerada la plataforma lumínica más avanzada del mundo. Este sistema dual nos permite borrar el daño solar, tratar lesiones vasculares (rosácea, cuperosis) y estimular la regeneración de colágeno con precisión submilimétrica y sin tiempo de inactividad.
              </p>
              <ul className="space-y-3 text-sm font-light text-brand-dark/70 pt-2">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-terra rounded-full"></span> 
                  Fotorrejuvenecimiento integral (Tecnología SWT®)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-terra rounded-full"></span> 
                  Eliminación de rojeces y lesiones pigmentarias
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-terra rounded-full"></span> 
                  Aprobación clínica por la FDA y Marcado CE Europeo
                </li>
              </ul>
            </div>
            <div className="relative aspect-square md:aspect-[4/5] bg-brand-soft shadow-sm overflow-hidden order-1 md:order-2">
               {/* ⚠️ REEMPLAZAR AQUÍ LA IMAGEN POR LA FOTO DEL NORDLYS */}
               <Image src="/textura-piel.webp" alt="Plataforma Nordlys de Candela" fill className="object-cover mix-blend-multiply opacity-90" />
            </div>

            {/* GLACE */}
            <div className="relative aspect-square md:aspect-[4/5] bg-brand-soft shadow-sm overflow-hidden order-3">
               {/* ⚠️ REEMPLAZAR AQUÍ LA IMAGEN POR LA FOTO DEL GLACE */}
               <Image src="/textura-piel.webp" alt="Equipo Glace Hidrodermoabrasión" fill className="object-cover mix-blend-multiply opacity-90" />
            </div>
            <div className="space-y-6 order-4">
              <h3 className="text-2xl font-serif text-brand-dark border-b border-brand-sand/30 pb-4">Glace™ Hydradermabrasion</h3>
              <p className="text-brand-dark/80 font-light leading-relaxed">
                El paso cero innegociable de cualquier protocolo médico. Más que una higiene, Glace es un sistema de hidrodermoabrasión clínica que extrae impurezas y difunde sueros terapéuticos en la dermis. Prepara el lienzo perfecto para maximizar la eficacia de nuestros inyectables y láseres.
              </p>
              <ul className="space-y-3 text-sm font-light text-brand-dark/70 pt-2">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-terra rounded-full"></span> 
                  Purificación profunda y extracción atraumática
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-terra rounded-full"></span> 
                  Infusión de activos dermatológicos de alta pureza
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-terra rounded-full"></span> 
                  Oxigenación dérmica y efecto flash inmediato
                </li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}