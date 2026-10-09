import React from 'react';

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark font-sans pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-serif border-b border-brand-sand/30 pb-6">Aviso Legal</h1>
        
        <div className="space-y-8 font-light text-brand-dark/80 leading-relaxed text-sm md:text-base">
          
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-brand-dark">Compromiso con la transparencia</h2>
            <p>En Clínica Venencia creemos que una relación de confianza comienza mucho antes de la primera consulta. También se construye ofreciendo información clara, accesible y transparente sobre quiénes somos, cómo prestamos nuestros servicios y cuáles son las condiciones que regulan el acceso y uso de nuestro sitio web.</p>
            <p>El presente Aviso Legal tiene por objeto informar a los usuarios sobre la titularidad del sitio web, las condiciones generales de utilización y los derechos y obligaciones que resultan de aplicación durante la navegación, de conformidad con la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), así como con el resto de normativa española y europea aplicable.</p>
            <p>El acceso y utilización de este sitio web implica la aceptación de las presentes condiciones. Si no está de acuerdo con cualquiera de ellas, le recomendamos que se abstenga de utilizar este sitio.</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-brand-dark">1. Titular del sitio web e Información Sanitaria</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Titular:</strong> Mercedes Trinidad Venencia</li>
              <li><strong>NIF/NIE:</strong> Z2105498Z</li>
              <li><strong>Domicilio:</strong> Carrer de Baldrich, 74, 08221 Terrassa (Barcelona), España.</li>
              <li><strong>Correo electrónico:</strong> clinicavenencia@clinicavenencia.com</li>
              <li><strong>Teléfono (WhatsApp):</strong> +34 608 71 31 35</li>
            </ul>
            <p>Clínica Venencia es un centro sanitario en proceso de autorización por el Departament de Salut de la Generalitat de Catalunya:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>N.º de Registro Sanitario:</strong> En trámite (Expediente N.º 9015-2136787/2026).</li>
              <li><strong>Directora Médica:</strong> Dra. Mercedes Trinidad Venencia, colegiada n.º 67506 por el Colegio Oficial de Médicos de Barcelona (COMB).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-brand-dark">2. Finalidad y carácter de la información</h2>
            <p>El sitio web tiene como finalidad ofrecer información sobre la Clínica, nuestro equipo, las instalaciones y el catálogo de tratamientos de medicina estética avanzada.</p>
            <p>La información publicada tiene carácter exclusivamente orientativo, divulgativo y comercial. En ningún caso sustituye una consulta médica personalizada, un diagnóstico clínico o la valoración presencial realizada por nuestra Directora Médica. Todo tratamiento está supeditado a la previa valoración y aptitud clínica del paciente.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-brand-dark">3. Condiciones de acceso y utilización</h2>
            <p>El usuario se compromete a realizar un uso responsable, lícito y conforme a la buena fe de este sitio web y sus contenidos. Queda expresamente prohibido:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Realizar cualquier acción que pueda dañar, inutilizar, sobrecargar o deteriorar el funcionamiento del sitio web.</li>
              <li>Vulnerar derechos de terceros, el honor o la reputación de Clínica Venencia.</li>
              <li>Utilizar los contenidos de la web (especialmente imágenes clínicas) para fines ilícitos o no autorizados.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-brand-dark">4. Propiedad intelectual e industrial</h2>
            <p>Todos los contenidos del sitio web (textos, fotografías clínicas, imágenes, logotipos, diseño, código fuente) son titularidad exclusiva de Mercedes Trinidad Venencia o se utilizan bajo licencia legítima.</p>
            <p>Queda terminantemente prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otro tipo de explotación, por cualquier procedimiento, sin autorización previa, expresa y por escrito de la titular.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-brand-dark">5. Exención de responsabilidad</h2>
            <p>Clínica Venencia no garantiza la obtención de resultados idénticos a los mostrados en ejemplos, fotografías o casos clínicos previos publicados en esta web. Los resultados de los tratamientos médicos dependen inherentemente de factores genéticos, anatómicos y clínicos propios de cada paciente individual.</p>
            <p>La titular no se hace responsable de los daños o perjuicios que pudieran derivarse de interferencias, omisiones, interrupciones, virus informáticos o averías en el funcionamiento operativo del sistema electrónico, motivadas por causas ajenas a la Clínica.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-brand-dark">6. Legislación aplicable y jurisdicción</h2>
            <p>Las relaciones establecidas entre Clínica Venencia y el usuario se regirán por la normativa española vigente. Cualquier controversia o reclamación que pudiera derivarse del acceso o uso de este sitio web se someterá a los Juzgados y Tribunales de la ciudad de Terrassa (Barcelona), renunciando expresamente las partes a cualquier otro fuero que pudiera corresponderles.</p>
          </section>

        </div>
      </div>
    </main>
  );
}