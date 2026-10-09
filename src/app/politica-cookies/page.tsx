import React from 'react';

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark font-sans pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-serif border-b border-brand-sand/30 pb-6">Política de Cookies</h1>
        
        <div className="space-y-8 font-light text-brand-dark/80 leading-relaxed text-sm md:text-base">
          
          <div className="space-y-4">
            <p>En Clínica Venencia creemos que la confianza de nuestros pacientes comienza mucho antes de entrar en consulta. También se construye mediante una navegación transparente, segura y respetuosa con su privacidad.</p>
            <p>Por este motivo, el sitio web www.clinicavenencia.com utiliza cookies y tecnologías similares únicamente en los casos permitidos por la legislación vigente y de acuerdo con los principios de transparencia establecidos en el Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 (LOPDGDD) y la Ley 34/2002 (LSSI-CE).</p>
            <p>La presente Política complementa nuestra Política de Privacidad y deberá interpretarse conjuntamente con ella.</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-brand-dark">1. ¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que un sitio web almacena en el navegador o dispositivo desde el que accede un usuario. Su finalidad principal es recordar determinada información sobre la navegación para permitir el funcionamiento técnico de la página, mejorar la experiencia, analizar el uso del sitio web o mostrar publicidad adaptada.</p>
            <p>Las cookies no contienen virus ni dañan el dispositivo del usuario.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-brand-dark">2. ¿Quién es el responsable del uso de las cookies?</h2>
            <p>Las cookies utilizadas en este sitio web son gestionadas por:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Titular:</strong> Mercedes Trinidad Venencia</li>
              <li><strong>Carrer de Baldrich, 74, 08221 Terrassa (Barcelona)</strong></li>
              <li><strong>Correo electrónico:</strong> clinicavenencia@clinicavenencia.com</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-brand-dark">3. Tipos de cookies que utilizamos</h2>
            
            <div className="space-y-3 mt-4">
              <h3 className="font-medium text-brand-dark">A. Según su finalidad</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies técnicas (Estrictamente necesarias):</strong> Permiten el funcionamiento básico del sitio web (navegación, seguridad, mantener la sesión). Son imprescindibles y no requieren el consentimiento del usuario.</li>
                <li><strong>Cookies analíticas o de medición:</strong> Permiten conocer cómo interactúan los visitantes con el sitio web para elaborar estadísticas agregadas (ej. Google Analytics). En ningún caso se utilizan para adoptar decisiones individuales sobre los usuarios.</li>
                <li><strong>Cookies publicitarias:</strong> Permiten gestionar los espacios publicitarios y mostrar campañas adaptadas a sus hábitos de navegación (ej. Meta Pixel, Google Ads). Únicamente se utilizarán si el usuario ha aceptado expresamente su instalación.</li>
              </ul>
            </div>

            <div className="space-y-3 mt-4">
              <h3 className="font-medium text-brand-dark">B. Según quién las gestione</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Propias:</strong> Instaladas directamente por Clínica Venencia.</li>
                <li><strong>De terceros:</strong> Gestionadas por proveedores externos (ej. Meta, Google). Cada proveedor trata la información conforme a sus propias políticas de privacidad.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-brand-dark">4. Proveedores de servicios tecnológicos</h2>
            <p>Para prestar determinados servicios, Clínica Venencia puede integrar herramientas desarrolladas por terceros, tales como:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google LLC / Google Ireland Limited (Analytics, Ads, Maps)</li>
              <li>Meta Platforms Ireland Limited (Meta Pixel para seguimiento publicitario)</li>
              <li>Proveedores de alojamiento web (Vercel)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-brand-dark">5. Gestión y revocación (Cómo bloquear cookies)</h2>
            <p>El usuario puede aceptar, rechazar o configurar las cookies no esenciales a través del banner de configuración habilitado al entrar en la web. Asimismo, puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador utilizado:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
              <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Bloquear todas las cookies.</li>
              <li><strong>Firefox:</strong> Ajustes &gt; Privacidad &amp; Seguridad &gt; Cookies y datos del sitio.</li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}