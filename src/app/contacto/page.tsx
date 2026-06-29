import Link from 'next/link';

export default function Contacto() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark pt-32 pb-20 px-6 md:px-16">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Cabecera */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-terra text-[10px] uppercase tracking-[0.4em] font-bold block">
            Ubicación y Contacto
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-dark">
            Experimenta <span className="italic">Venencia</span>
          </h1>
          <p className="max-w-2xl mx-auto text-brand-dark/80 font-light text-sm md:text-base">
            Tu viaje hacia el equilibrio natural comienza aquí. Visítanos en nuestro espacio clínico diseñado para tu privacidad y confort.
          </p>
        </div>

        {/* Grid a 2 columnas (Estilo Santé pero minimalista) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center bg-white p-6 md:p-12 shadow-sm border border-brand-sand/20">
          
          {/* Columna Izquierda: Mapa Seguro (Sin riesgo de API error) */}
         <div className="w-full h-[400px] bg-brand-sand/10 relative overflow-hidden grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.4873473326525!2d2.012193976086199!3d41.558695971278595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4936663d8eee3%3A0xb4ccaddeb0d8ce14!2sCl%C3%ADnica%20Venencia!5e0!3m2!1ses!2ses!4v1782686300394!5m2!1ses!2ses"  
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Columna Derecha: Información y CTAs */}
          <div className="space-y-8">
            
            {/* Dirección */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-brand-terra mb-2">Dirección</h3>
              <p className="font-serif text-xl text-brand-dark">Terrassa, Barcelona</p>
              <p className="font-light text-sm text-brand-dark/70 mt-1">Carrer de Baldrich, 74, 08221</p>
            </div>

            {/* Horarios (Adaptado a tu estrategia) */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-brand-terra mb-2">Horario</h3>
              <p className="font-serif text-lg text-brand-dark">Agenda de Autor</p>
              <p className="font-light text-sm text-brand-dark/70 mt-1">Atención exclusiva bajo cita previa para garantizar la máxima privacidad.</p>
            </div>

            {/* Botones de Acción */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/reserva" className="w-full">
                <button className="w-full bg-brand-dark text-white py-4 text-xs uppercase tracking-widest hover:bg-brand-terra transition-colors flex justify-center items-center space-x-2">
                  <span>Reserva tu cita</span>
                  <span className="text-sm">→</span>
                </button>
              </Link>
              
              {/* Usa el enlace wa.me que ya creamos antes */}
              <a 
                href="https://wa.me/34608713135?text=Hola,%20estoy%20en%20la%20web%20y%20me%20gustaría%20agendar%20una%20valoración%20en%20Venencia."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 border border-brand-dark py-4 text-xs uppercase tracking-widest hover:bg-brand-sand/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <span>Contactar</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}