const fs = require('fs');
const { buildSectionPage } = require('./build-section.js');

const pages = [
  {
    output: 'instituto/nosotros.html',
    title: 'Quiénes Somos',
    description: 'Conoce nuestra misión, visión, filosofía y los principios que guían al Instituto Everest de Sinaloa.',
    parent: 'instituto/nosotros.html',
    breadcrumb: 'Quiénes Somos',
    content: `
<section class="section">
  <div class="container">
    <div style="max-width: 800px; margin: 0 auto;">
      <span class="eyebrow">Nuestra identidad</span>
      <h2>Misión, Visión y Filosofía</h2>
      <p style="font-size: var(--fs-lg); color: var(--everest-gray-700); line-height: 1.8; margin-top: 1.5rem;">En el Instituto Everest de Sinaloa se trabaja permanentemente por la excelencia profesional, la pertinencia social y la inclusión educativa; se distingue por la gestión eficiente de innovadores programas académicos, con basamento en la tecnología y la educación a distancia como modelos abiertos e interdependientes de la actual sociedad del conocimiento, que contribuyen a la formación de profesionales competentes, con una fuerte proyección nacional e internacional.</p>
    </div>
  </div>
</section>
<section class="section section--alt">
  <div class="container">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
      <article class="card" style="padding: 2rem;">
        <div style="color: var(--everest-blue); margin-bottom: 1rem;"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
        <h3>Misión</h3>
        <p>Formar profesionales competentes a través de programas académicos innovadores con tecnología y educación a distancia.</p>
      </article>
      <article class="card" style="padding: 2rem;">
        <div style="color: var(--everest-blue); margin-bottom: 1rem;"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
        <h3>Visión</h3>
        <p>Ser una institución de excelencia con un claustro docente de alta profesionalidad, distinguida por su compromiso con la sociedad.</p>
      </article>
      <article class="card" style="padding: 2rem;">
        <div style="color: var(--everest-blue); margin-bottom: 1rem;"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
        <h3>Filosofía</h3>
        <p>Reconocemos principios y valores compartidos que sustentan nuestra identidad científico-profesional y orientan nuestro quehacer académico.</p>
      </article>
    </div>
  </div>
</section>
<section class="section">
  <div class="container text-center">
    <h2>Valores institucionales</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 2rem;">
      <span class="badge badge--gold" style="font-size: var(--fs-base); padding: 0.5rem 1rem;">Excelencia</span>
      <span class="badge badge--gold" style="font-size: var(--fs-base); padding: 0.5rem 1rem;">Innovación</span>
      <span class="badge badge--gold" style="font-size: var(--fs-base); padding: 0.5rem 1rem;">Inclusión</span>
      <span class="badge badge--gold" style="font-size: var(--fs-base); padding: 0.5rem 1rem;">Pertinencia</span>
      <span class="badge badge--gold" style="font-size: var(--fs-base); padding: 0.5rem 1rem;">Compromiso Social</span>
      <span class="badge badge--gold" style="font-size: var(--fs-base); padding: 0.5rem 1rem;">Ética</span>
    </div>
  </div>
</section>
`
  },
  {
    output: 'instituto/historia.html',
    title: 'Nuestra Historia',
    description: 'Conoce la trayectoria del Instituto Everest de Sinaloa y cómo hemos transformado la educación en línea en México.',
    parent: 'instituto/historia.html',
    breadcrumb: 'Historia',
    content: `<section class="section"><div class="container" style="max-width: 800px;"><span class="eyebrow">Trayectoria</span><h2>Más de una década formando profesionales</h2><p style="font-size: var(--fs-lg); color: var(--everest-gray-700); line-height: 1.8; margin-top: 1.5rem;">El Instituto Everest de Sinaloa nació con el propósito de democratizar la educación superior en México, llevando programas académicos de calidad a todos los rincones del país a través de modalidades flexibles.</p><p style="margin-top: 1rem;">A lo largo de nuestra trayectoria, hemos formado a miles de profesionales que hoy se desempeñan con éxito en los sectores público y privado, contribuyendo al desarrollo de sus comunidades y al progreso del país.</p><p>Con más de 12 años de experiencia, hemos consolidado un modelo educativo de excelencia que combina la flexibilidad del aprendizaje en línea con la calidad y el rigor académico de la educación presencial.</p><h3 style="margin-top: 2.5rem;">Hitos importantes</h3><ul style="display: grid; gap: 0.75rem; margin-top: 1rem;"><li style="display: flex; align-items: flex-start; gap: 0.75rem;"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--everest-success)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Fundación del Instituto Everest con la visión de transformar la educación superior en México.</span></li><li style="display: flex; align-items: flex-start; gap: 0.75rem;"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--everest-success)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Implementación del modelo 100% en línea con plataforma propia.</span></li><li style="display: flex; align-items: flex-start; gap: 0.75rem;"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--everest-success)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Expansión a 19 programas académicos en 3 niveles educativos.</span></li><li style="display: flex; align-items: flex-start; gap: 0.75rem;"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--everest-success)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Convenios internacionales y reconocimiento de validez oficial.</span></li></ul></div></section>`
  },
  {
    output: 'instituto/modelo.html',
    title: 'Modelo Educativo',
    description: 'Conoce nuestro modelo educativo en línea, basado en tecnología, flexibilidad y excelencia académica.',
    parent: 'instituto/modelo.html',
    breadcrumb: 'Modelo Educativo',
    content: `<section class="section"><div class="container"><div class="section-header"><span class="eyebrow">Modelo Educativo</span><h2>Aprendizaje flexible, formación de excelencia</h2><p>Un modelo diseñado para que puedas estudiar a tu propio ritmo, con el acompañamiento de tutores especializados.</p></div><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem;"><article class="card" style="padding: 2rem; text-align: center;"><div style="color: var(--everest-blue); margin-bottom: 1rem;"><svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/></svg></div><h3>Plataforma 24/7</h3><p>Acceso ilimitado a materiales, clases grabadas y recursos desde cualquier dispositivo.</p></article><article class="card" style="padding: 2rem; text-align: center;"><div style="color: var(--everest-blue); margin-bottom: 1rem;"><svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></div><h3>Claustro de excelencia</h3><p>Docentes con experiencia profesional y académica reconocida internacionalmente.</p></article><article class="card" style="padding: 2rem; text-align: center;"><div style="color: var(--everest-blue); margin-bottom: 1rem;"><svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-6 0v4"/><path d="M5 9h14l-1 12H6L5 9z"/></svg></div><h3>Tutorías personalizadas</h3><p>Acompañamiento académico individual con tutores especializados en cada programa.</p></article><article class="card" style="padding: 2rem; text-align: center;"><div style="color: var(--everest-blue); margin-bottom: 1rem;"><svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><h3>Horarios flexibles</h3><p>Estudia a tu propio ritmo. Compatible con tu trabajo y vida personal.</p></article></div></div></section>`
  },
  {
    output: 'instituto/claustro.html',
    title: 'Claustro Docente',
    description: 'Conoce a nuestro equipo de docentes, profesionales con experiencia internacional y reconocimiento académico.',
    parent: 'instituto/claustro.html',
    breadcrumb: 'Claustro',
    content: `<section class="section"><div class="container"><div class="section-header"><span class="eyebrow">Claustro</span><h2>Profesionales de excelencia a tu servicio</h2><p>Nuestro equipo docente está integrado por profesionales con amplia experiencia en el ámbito académico y laboral.</p></div><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem; margin-top: 3rem;">${['Dr. Carlos Mendoza','Dra. María Cervantes','Mtro. Roberto Sánchez','Dra. Laura Hernández','Dr. Juan Pablo Ríos','Mtra. Ana Patricia López','Dr. Fernando Ortiz','Mtra. Gabriela Moreno'].map((name, i) => `<article class="card" style="padding: 1.5rem; text-align: center;"><div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--everest-blue), var(--everest-blue-light)); color: var(--everest-gold); display: inline-flex; align-items: center; justify-content: center; font-size: var(--fs-2xl); font-weight: 900; margin-bottom: 1rem;">${name.split(' ').map(n => n[0]).join('').slice(0, 2)}</div><h3 style="font-size: var(--fs-base); margin-bottom: 0.25rem;">${name}</h3><p style="font-size: var(--fs-sm); color: var(--everest-gold-dark); margin: 0;">${['Doctorado','Doctorado','Maestría','Doctorado','Doctorado','Maestría','Doctorado','Maestría'][i]}</p><p style="font-size: var(--fs-sm); color: var(--everest-gray-600); margin-top: 0.5rem;">Docente investigador con más de 10 años de experiencia.</p></article>`).join('')}</div></div></section>`
  },
  {
    output: 'instituto/acreditaciones.html',
    title: 'Acreditaciones y RVOE',
    description: 'Conoce nuestras acreditaciones, Reconocimientos de Validez Oficial de Estudios y certificaciones institucionales.',
    parent: 'instituto/acreditaciones.html',
    breadcrumb: 'Acreditaciones',
    content: `<section class="section"><div class="container" style="max-width: 800px;"><span class="eyebrow">Validez Oficial</span><h2>Acreditaciones y Reconocimientos</h2><p style="font-size: var(--fs-lg); color: var(--everest-gray-700); line-height: 1.8; margin-top: 1.5rem;">Todos nuestros programas cuentan con Reconocimiento de Validez Oficial de Estudios (RVOE) otorgado por la Secretaría de Educación Pública y Cultura del Estado de Sinaloa.</p><div style="display: grid; gap: 1.5rem; margin-top: 2.5rem;"><article class="card" style="padding: 1.5rem; display: flex; gap: 1rem; align-items: center;"><div style="width: 60px; height: 60px; background: var(--everest-gold-50); color: var(--everest-gold-dark); border-radius: var(--radius-md); display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg></div><div><h3 style="font-size: var(--fs-lg); margin-bottom: 0.25rem;">RVOE Federal</h3><p style="font-size: var(--fs-sm); color: var(--everest-gray-600); margin: 0;">Todos los programas cuentan con reconocimiento oficial.</p></div></article><article class="card" style="padding: 1.5rem; display: flex; gap: 1rem; align-items: center;"><div style="width: 60px; height: 60px; background: var(--everest-gold-50); color: var(--everest-gold-dark); border-radius: var(--radius-md); display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/></svg></div><div><h3 style="font-size: var(--fs-lg); margin-bottom: 0.25rem;">SEP Federal</h3><p style="font-size: var(--fs-sm); color: var(--everest-gray-600); margin: 0;">Reconocimiento de la Secretaría de Educación Pública.</p></div></article><article class="card" style="padding: 1.5rem; display: flex; gap: 1rem; align-items: center;"><div style="width: 60px; height: 60px; background: var(--everest-gold-50); color: var(--everest-gold-dark); border-radius: var(--radius-md); display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg></div><div><h3 style="font-size: var(--fs-lg); margin-bottom: 0.25rem;">CIEES</h3><p style="font-size: var(--fs-sm); color: var(--everest-gray-600); margin: 0;">Acreditación de calidad educativa por los Comités Interinstitucionales.</p></div></article></div></div></section>`
  },
  {
    output: 'instituto/aviso-de-privacidad.html',
    title: 'Aviso de Privacidad',
    description: 'Conoce nuestro aviso de privacidad y cómo protegemos tus datos personales.',
    parent: 'instituto/aviso-de-privacidad.html',
    breadcrumb: 'Aviso de Privacidad',
    content: `<section class="section"><div class="container" style="max-width: 800px;"><h2>Aviso de Privacidad</h2><p style="margin-top: 1.5rem;">En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, el Instituto Everest de Sinaloa pone a tu disposición el presente aviso de privacidad.</p><h3 style="margin-top: 2rem;">Datos personales que recabamos</h3><p>Recabamos tus datos personales de identificación (nombre, RFC, CURP, fecha de nacimiento), de contacto (teléfono, correo electrónico, domicilio) y académicos (historial escolar) para los fines descritos en el presente aviso.</p><h3 style="margin-top: 2rem;">Finalidades del tratamiento</h3><p>Tus datos personales serán utilizados para: gestionar tu proceso de admisión, inscripción, evaluación y certificación; enviarte información sobre nuestros programas académicos; y cumplir con obligaciones legales y regulatorias.</p><h3 style="margin-top: 2rem;">Derechos ARCO</h3><p>Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación u Oposición al tratamiento de tus datos personales mediante solicitud escrita a contacto@educacioneverest.com.</p><h3 style="margin-top: 2rem;">Transferencias</h3><p>Tus datos personales no serán transferidos a terceros sin tu consentimiento, salvo en los casos previstos por la ley.</p></div></section>`
  },
  {
    output: 'instituto/terminos.html',
    title: 'Términos y Condiciones',
    description: 'Conoce los términos y condiciones que rigen el uso de nuestro sitio web y servicios.',
    parent: 'instituto/terminos.html',
    breadcrumb: 'Términos',
    content: `<section class="section"><div class="container" style="max-width: 800px;"><h2>Términos y Condiciones</h2><p style="margin-top: 1.5rem;">Al utilizar el sitio web del Instituto Everest de Sinaloa, aceptas los siguientes términos y condiciones.</p><h3 style="margin-top: 2rem;">Uso del sitio</h3><p>El contenido de este sitio es únicamente con fines informativos. Queda prohibida la reproducción total o parcial sin autorización previa.</p><h3 style="margin-top: 2rem;">Propiedad intelectual</h3><p>Todos los contenidos, marcas, logotipos y demás elementos son propiedad del Instituto Everest de Sinaloa.</p><h3 style="margin-top: 2rem;">Limitación de responsabilidad</h3><p>El Instituto Everest no se hace responsable por daños derivados del uso del sitio o la imposibilidad de acceder al mismo.</p><h3 style="margin-top: 2rem;">Modificaciones</h3><p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones serán efectivas al publicarse en este sitio.</p></div></section>`
  }
];

pages.forEach(p => {
  const html = buildSectionPage(p);
  fs.writeFileSync(p.output, html);
  console.log('✓ ' + p.output);
});
