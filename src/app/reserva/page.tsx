"use client";
import React from 'react';

export default function ReservaPage() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark font-sans pt-32 pb-24 px-6 md:px-12 flex flex-col items-center">
      
      {/* CABECERA DE LA RESERVA */}
      <div className="text-center space-y-4 mb-12 max-w-2xl">
        <span className="text-brand-terra text-[10px] uppercase tracking-[0.4em] font-bold block">
          Agenda de Autor
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">
          Solicita tu Valoración
        </h1>
        <p className="text-sm text-brand-dark/70 font-light leading-relaxed">
          Selecciona el día y la hora que mejor se adapte a ti. Si no encuentras disponibilidad, por favor, contáctanos directamente a la clínica para apuntarte en nuestra lista de espera prioritaria.
        </p>
      </div>

      {/* EL CONTENEDOR DEL CALENDARIO (AQUÍ IRÁ LA INTEGRACIÓN) */}
      <div className="w-full max-w-4xl bg-white border border-brand-sand/30 shadow-2xl min-h-[600px] flex items-center justify-center p-4">
        
        {/* Este div temporal lo quitaremos cuando pongamos el código de Doctoralia/Calendly */}
        <div className="text-center space-y-4 p-10 border border-dashed border-brand-sand">
          <svg className="w-12 h-12 mx-auto text-brand-terra/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <h2 className="text-xl font-serif text-brand-dark">Integración de Agenda</h2>
          <p className="text-xs text-brand-dark/50 max-w-md mx-auto">
            Aquí insertaremos el widget interactivo de vuestro software de reservas (Doctoralia, Fresha, Calendly...).
          </p>
        </div>

      </div>

    </main>
  );
}