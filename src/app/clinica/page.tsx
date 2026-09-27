"use client";
import React from 'react';
import Image from 'next/image';

export default function ClinicaPage() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark font-sans pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-24">
        
       {/* HERO EDITORIAL */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Mantenemos el diseño minimalista pero usamos etiqueta H1 para no hundir el SEO local */}
          <h1 className="text-brand-terra text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold block">
            Sobre Nosotros
          </h1>
          <div className="text-lg md:text-xl text-brand-dark/70 font-light leading-relaxed pt-4 space-y-4">
            <p>
              No creemos en la belleza estandarizada ni en los cambios drásticos. En Clínica Venencia entendemos la medicina estética como un medio para cuidar la salud de tu piel, preservar su estructura y acompañar el paso del tiempo con armonía.
            </p>
            <p>
              Nuestro objetivo es sencillo: conseguir resultados sutiles e imperceptibles que devuelvan la luz y la frescura a tu rostro, respetando siempre tu esencia y tu expresión natural.
            </p>
          </div>
          <div className="w-16 h-[1px] bg-brand-sand mx-auto mt-8"></div>
        </section>

        {/* ESPACIO PARA FOTO GRANDE DEL EQUIPO O CLÍNICA */}
        <section className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-brand-soft overflow-hidden rounded-sm shadow-xl">
          <Image 
            src="/clinica/principal.jpg" 
            alt="Interior de Clínica Venencia" 
            fill 
            sizes="100vw"
            priority
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
              sizes="(max-width: 768px) 100vw, 50vw"
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
                La Dra. Trinidad Venencia es la Directora Médica de nuestra clínica. Especializada en Medicina Estética Avanzada y Regenerativa, su forma de trabajar prioriza siempre la naturalidad y el respeto por tus rasgos.
              </p>
              <p>
                Su prioridad es acompañarte para recuperar la salud, la calidad y la vitalidad de tu piel a través de un diagnóstico preciso y protocolos combinados adaptados a la necesidad de cada paciente.
              </p>
              <p>
                Un enfoque ético y honesto para que te reconozcas frente al espejo, sintiéndote en tu mejor versión.
              </p>
            </div>
          </div>
        </section>

        {/* LA NUTRICIONISTA (NORA GAJA) */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24 pt-16 mt-16 border-t border-brand-sand/30">
          
          {/* Foto Nora */}
          <div className="w-full md:w-5/12 relative aspect-[3/4] bg-brand-soft shadow-lg rounded-sm overflow-hidden">
            <Image 
              src="/foto-nutricionista.jpg" 
              alt="Nora Gaja - Nutricionista Clínica Venencia" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover" 
            />
            <div className="absolute bottom-6 right-6 text-white z-10 text-right">
              <span className="block font-serif text-2xl">Nora Gaja</span>
              <span className="block text-[10px] uppercase tracking-widest mt-1 opacity-80">Dietista-Nutricionista Clínica</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Texto Editorial */}
          <div className="w-full md:w-7/12 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark leading-snug">
              &quot;El verdadero éxito antienvejecimiento no nace de la restricción, sino del equilibrio metabólico y la preservación muscular.&quot;
            </h2>
            
            <div className="space-y-6 text-brand-dark/80 font-light leading-relaxed">
              <p>
                Nora Gaja es dietista-nutricionista especializada en nutrición clínica, respaldada tanto en el ámbito hospitalario como en consulta privada. Su metodología huye de las pautas estandarizadas para centrarse en un enfoque rigurosamente científico y un acompañamiento adaptado a las necesidades y el estilo de vida de cada paciente.
              </p>
              <p>
                En Clínica Venencia, Nora es la pieza fundamental para la optimización de la composición corporal. Lidera el abordaje nutricional de nuestro programa de Control de Peso Médico, trabajando en estrecha sinergia con los tratamientos farmacológicos de análogos de GLP-1.
              </p>
              <p>
                Su labor trasciende la pérdida de peso tradicional: diseña estrategias individualizadas orientadas a favorecer una pérdida de grasa sostenida, preservar la masa muscular y optimizar la salud metabólica, garantizando resultados duraderos y un envejecimiento verdaderamente saludable.
              </p>
            </div>
          </div>
        </section>

        {/* EL ESPACIO (LA CLÍNICA) */}
        <section className="bg-brand-sand/10 p-10 md:p-20 border border-brand-sand/30 rounded-sm">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="text-brand-terra text-[10px] uppercase tracking-[0.4em] font-bold block">Nuestras instalaciones</span>
            <h3 className="text-3xl md:text-4xl font-serif text-brand-dark">Un espacio en Terrassa diseñado para garantizar tu privacidad, comodidad y tranquilidad durante todo tu proceso.</h3>
            <p className="text-brand-dark/70 font-light leading-relaxed">
              Hemos diseñado nuestra clínica para que cruzar sus puertas sea el inicio de tu tratamiento. Un ambiente cálido, minimalista y orgánico, donde los aromas, la luz y la absoluta privacidad reemplazan la frialdad de las salas de espera tradicionales. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="relative aspect-square bg-brand-soft overflow-hidden shadow-sm">
                 <Image src="/clinica/recepcion.jpeg" alt="Detalle Clínica 1" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="relative aspect-square bg-brand-soft overflow-hidden shadow-sm">
                 <Image src="/clinica/sala-espera.jpeg" alt="Detalle Clínica 2" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="relative aspect-square bg-brand-soft overflow-hidden shadow-sm">
                 <Image src="/clinica/box3.jpeg" alt="Detalle Clínica 3" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>
        
        {/* VANGUARDIA TECNOLÓGICA (CANDELA MEDICAL) */}
        <section className="pt-10 md:pt-16">
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <span className="text-brand-terra text-[10px] uppercase tracking-[0.4em] font-bold block">Tecnología y Seguridad Médica</span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark">Eficiencia avalada por la ciencia</h2>
            <p className="text-brand-dark/70 font-light leading-relaxed">
              En Clínica Venencia seleccionamos cada equipo bajo criterios de máxima seguridad, eficacia y evidencia científica. Por ello, apostamos por las plataformas médica de Candela Medical, referentes a nivel internacional en dermatología y medicina estética.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* NORDLYS */}
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-2xl font-serif text-brand-dark border-b border-brand-sand/30 pb-4">Plataforma Nordlys™️</h3>
              <p className="text-brand-dark/80 font-light leading-relaxed">
                Sistema multiláser y de luz pulsada de banda estrecha diseñado para el tratamiento integral de la calidad de la piel:
              </p>
              <div className="space-y-3 text-sm font-light text-brand-dark/70 pt-2">
                <p>-Fotodaño y manchas: Unifica el tono y atenúa las lesiones pigmentarias.</p>
                <p>-Vascular: Trata el componente vascular en pieles con rosácea, cuperosis o rojeces.</p>
                <p>-Estructura y textura: Estimula la síntesis de colágeno para recuperar la firmeza.</p>
                <p>-Garantía médica: Equipamiento con certificación FDA y Marcado CE Europeo.</p>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/5] bg-brand-soft shadow-sm overflow-hidden order-1 md:order-2">
               <Image src="/clinica/nordlys.jpeg" alt="Plataforma Nordlys de Candela" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover mix-blend-multiply opacity-90" />
            </div>

            {/* GLACE */}
            <div className="relative aspect-square md:aspect-[4/5] bg-brand-soft shadow-sm overflow-hidden order-3">
               <Image src="/clinica/glace.jpeg" alt="Equipo Glace Hidrodermoabrasión" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover mix-blend-multiply opacity-90" />
            </div>
            <div className="space-y-6 order-4">
              <h3 className="text-2xl font-serif text-brand-dark border-b border-brand-sand/30 pb-4">Candela Glacē™️</h3>
              <p className="text-brand-dark/80 font-light leading-relaxed">
                Sistema de hidrodermoabrasión médica diseñado para optimizar la salud de la piel y preparar el tejido antes de otros procedimientos médicos:
              </p>
              <div className="space-y-3 text-sm font-light text-brand-dark/70 pt-2">
                <p>-Limpieza y exfoliación: Realiza una renovación celular suave y una extracción de impurezas sin agredir el tejido.</p>
                <p>-Luminosidad y textura: Aporta hidratación profunda, mejorando el tono y la suavidad de forma inmediata.</p>
                <p>-Acondicionamiento cutáneo: Mejora la permeabilidad y receptividad de la piel para potenciar los protocolos posteriores.</p>
              </div>
            </div>

            {/* FIRE-XEL CO2 */}
            <div className="space-y-6 order-6 md:order-5">
              <h3 className="text-2xl font-serif text-brand-dark border-b border-brand-sand/30 pb-4">Láser CO2 Fraccionado y Quirúrgico (FIRE-Xel™️)</h3>
              <p className="text-brand-dark/80 font-light leading-relaxed">
                Sistema de referencia en regeneración y cirugía dermatológica menor. Permite actuar con máxima precisión tanto en la superficie como en capas profundas de la piel:
              </p>
              <div className="space-y-3 text-sm font-light text-brand-dark/70 pt-2">
                <p>Cirugía menor benigna: Eliminación de fibromas, verrugas, xantelasmas, nevos benignos y queratosis sin necesidad de puntos.</p>
                <p>Renovación cutánea: Tratamiento del fotoenvejecimiento y disminución de arrugas, líneas de expresión, poros dilatados y textura irregular, mejorando la calidad global de la piel.</p>
                <p>Corrección de cicatrices: Abordaje de cicatrices de acné y cicatrices quirúrgicas.</p>
                <p>Firmeza y densidad: Activa la producción profunda de colágeno y elastina para recuperar la estructura del tejido.</p>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/5] bg-brand-soft shadow-sm overflow-hidden order-5 md:order-6">
               <Image src="/clinica/CO2.jpg" alt="Láser CO2 FIRE-Xel" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover mix-blend-multiply opacity-90" />
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}