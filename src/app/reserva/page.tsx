"use client";
import React, { useEffect } from 'react';

export default function ReservaPage() {
  useEffect(() => {

    const script = document.createElement('script');
    script.id = 'zl-facility-widget';
    script.src = 'https://www.doctoralia.es/platform/js/widget.js';
    script.async = true;
    
    
    const oldScript = document.getElementById('zl-facility-widget');
    if (oldScript) {
      oldScript.remove();
    }
    
    document.body.appendChild(script);

   
    return () => {
      if (document.getElementById('zl-facility-widget')) {
        document.getElementById('zl-facility-widget')?.remove();
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Cabecera */}
        <div className="text-center mb-10">
          <span className="text-brand-terra text-[10px] uppercase tracking-[0.4em] font-bold">9:00-20:00hs</span>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mt-4 mb-6">Solicita tu Valoración</h1>
          <p className="text-brand-dark/70 font-light max-w-xl mx-auto">
            Selecciona el tratamiento y el horario. La Dra. Trinidad Venencia y nuestro equipo te esperan en Terrassa.
          </p>
        </div>

        {/* Contenedor del Widget de Doctoralia Ajustado */}
        <div className="max-w-[450px] mx-auto bg-white rounded-2xl shadow-2xl min-h-[600px] w-full flex justify-center overflow-hidden border border-brand-sand/30">
          {/* El enlace original que Doctoralia convierte en Iframe */}
          <a 
            href="https://www.doctoralia.es/clinicas/clinica-venencia" 
            data-zl-widget-facility="clinica-venencia" 
            rel="nofollow" 
            data-placement="inline" 
            data-zlw-type="facility-calendar-listing-with-saas-only"
            className="hidden" // Se oculta el texto temporal hasta que carga el widget
          >
            Reserve una cita
          </a>
        </div>
        
      </div>
    </main>
  );
}