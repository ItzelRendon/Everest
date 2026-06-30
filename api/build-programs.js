function buildProgramPage(p) {
  const levelLabel = p.level === 'licenciatura' ? 'Licenciatura' : p.level === 'maestria' ? 'Maestría' : 'Doctorado';
  const slug = p.id;
  const canonicalUrl = `https://educacioneverest.com/oferta/${slug}.html`;

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.name} | ${levelLabel} en Línea — Instituto Everest</title>
  <meta name="description" content="${levelLabel} en ${p.name} del Instituto Everest. Modalidad 100% en línea. ${p.format}, ${p.duration}. Inicio: ${p.start}. Solicita información ahora.">
  <meta name="keywords" content="${p.name.toLowerCase()}, ${levelLabel.toLowerCase()} en ${p.name.toLowerCase()}, ${p.name.toLowerCase()} en línea, estudiar ${p.name.toLowerCase()}, Instituto Everest">
  <link rel="canonical" href="${canonicalUrl}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${p.name} | Instituto Everest">
  <meta property="og:description" content="${levelLabel} en ${p.name} - 100% en línea. ${p.duration}.">
  <meta property="og:url" content="${canonicalUrl}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/svg+xml" href="../assets/svg/logo-shield.svg">
  <meta name="theme-color" content="#112f55">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,500;0,700;0,900;1,900&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/design-system.css">
  <link rel="stylesheet" href="../assets/css/components.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "${p.name}",
    "description": "${levelLabel} en ${p.name} - 100% en línea. ${p.format}, ${p.duration}.",
    "provider": {
      "@type": "Organization",
      "name": "Instituto Everest de Sinaloa",
      "sameAs": "https://educacioneverest.com"
    },
    "educationalCredentialAwarded": "${levelLabel}",
    "timeToComplete": "${p.duration}",
    "courseMode": "online"
  }
  </script>
</head>
<body>
<a href="#main" class="skip-link">Saltar al contenido principal</a>

<header class="site-header" role="banner">
  <div class="container">
    <div class="header-top">
      <a href="../index.html" class="header-logo" aria-label="Inicio - Instituto Everest">
        <img src="../assets/svg/logo-shield.svg" alt="Logo Instituto Everest" width="48" height="48">
        <span class="logo-text">
          <strong>INSTITUTO EVEREST</strong>
          <small>De Sinaloa</small>
        </span>
      </a>
      <nav class="header-nav" aria-label="Navegación principal">
        <div class="nav-item"><a href="../index.html#instituto" class="nav-link">Instituto</a></div>
        <div class="nav-item"><a href="../index.html#oferta" class="nav-link is-active">Oferta Académica</a></div>
        <div class="nav-item"><a href="../index.html#admisiones" class="nav-link">Admisiones</a></div>
        <div class="nav-item"><a href="../index.html#vida" class="nav-link">Vida Estudiantil</a></div>
        <div class="nav-item"><a href="../index.html#contacto" class="nav-link">Contacto</a></div>
      </nav>
      <div class="header-actions">
        <a href="https://registro.educacioneverest.com/universidad" class="btn btn--gold btn--sm">Pre-Registro</a>
        <a href="../aulavirtual/" class="btn btn--primary btn--sm">Aula Virtual</a>
        <button class="header-mobile-toggle" aria-label="Abrir menú">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </div>
  </div>
</header>

<main id="main">

<section class="section" style="background: linear-gradient(135deg, var(--everest-blue-darker), var(--everest-blue)); color: white; padding-top: calc(var(--header-height) + 3rem); padding-bottom: 3rem;">
  <div class="container">
    <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
      <a href="../index.html#oferta" style="color: rgba(255,255,255,0.7); display: inline-flex; align-items: center; gap: 0.5rem; font-size: var(--fs-sm);">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        Volver a oferta académica
      </a>
      <span class="badge badge--gold">${levelLabel}</span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center;">
      <div class="reveal">
        <h1 style="color: white; font-size: clamp(2rem, 4vw, 3.5rem); margin-bottom: 1rem;">${p.name}</h1>
        <p style="color: rgba(255,255,255,0.9); font-size: var(--fs-lg); max-width: 720px;">Forma parte de la próxima generación de profesionales en ${p.name.toLowerCase()}. Modalidad 100% en línea con docentes internacionales y plataforma disponible 24/7.</p>
        <div class="btn-group" style="margin-top: 1.5rem;">
          <a href="../index.html#contacto" class="btn btn--gold btn--lg">Solicita información</a>
          <a href="#plan" class="btn btn--ghost btn--lg">Ver plan de estudios</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-top: -3rem; position: relative; z-index: 5;">
      <div class="card" style="padding: 1.5rem; box-shadow: var(--shadow-lg);">
        <div style="color: var(--everest-blue); margin-bottom: 0.5rem;">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
        </div>
        <strong style="display: block; font-size: var(--fs-sm); color: var(--everest-gray-500); text-transform: uppercase; letter-spacing: 0.05em;">Formato</strong>
        <p style="font-size: var(--fs-lg); font-weight: 700; color: var(--everest-gray-900);">${p.format}</p>
      </div>
      <div class="card" style="padding: 1.5rem; box-shadow: var(--shadow-lg);">
        <div style="color: var(--everest-blue); margin-bottom: 0.5rem;">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <strong style="display: block; font-size: var(--fs-sm); color: var(--everest-gray-500); text-transform: uppercase; letter-spacing: 0.05em;">Duración</strong>
        <p style="font-size: var(--fs-lg); font-weight: 700; color: var(--everest-gray-900);">${p.duration}</p>
      </div>
      <div class="card" style="padding: 1.5rem; box-shadow: var(--shadow-lg);">
        <div style="color: var(--everest-blue); margin-bottom: 0.5rem;">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>
        </div>
        <strong style="display: block; font-size: var(--fs-sm); color: var(--everest-gray-500); text-transform: uppercase; letter-spacing: 0.05em;">Inicio de clases</strong>
        <p style="font-size: var(--fs-lg); font-weight: 700; color: var(--everest-gray-900);">${p.start}</p>
      </div>
      <div class="card" style="padding: 1.5rem; box-shadow: var(--shadow-lg);">
        <div style="color: var(--everest-blue); margin-bottom: 0.5rem;">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <strong style="display: block; font-size: var(--fs-sm); color: var(--everest-gray-500); text-transform: uppercase; letter-spacing: 0.05em;">Modalidad</strong>
        <p style="font-size: var(--fs-lg); font-weight: 700; color: var(--everest-gray-900);">100% En línea</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start;">
      <div class="reveal">
        <span class="eyebrow">Sobre el programa</span>
        <h2>¿Por qué estudiar ${p.name}?</h2>
        <p>La ${levelLabel.toLowerCase()} en ${p.name} del Instituto Everest te ofrece una formación integral con enfoque práctico y de vanguardia, preparándote para los desafíos del mundo profesional actual.</p>

        <h3 style="margin-top: 2.5rem; margin-bottom: 1rem;">Perfil de egreso</h3>
        <p>Al egresar de este programa, contarás con las competencias profesionales necesarias para destacar en el campo de ${p.name.toLowerCase()}, con una visión crítica, ética y comprometida con el desarrollo social.</p>

        <h3 style="margin-top: 2.5rem; margin-bottom: 1rem;">Competencias que desarrollarás</h3>
        <ul style="display: grid; gap: 0.75rem; margin-top: 1rem;">
          <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--everest-success)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Pensamiento crítico y analítico aplicado a ${p.name.toLowerCase()}.</span>
          </li>
          <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--everest-success)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Dominio de metodologías y herramientas actualizadas del campo profesional.</span>
          </li>
          <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--everest-success)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Capacidad de investigación y solución de problemas complejos.</span>
          </li>
          <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--everest-success)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Liderazgo y trabajo colaborativo en equipos multidisciplinarios.</span>
          </li>
          <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--everest-success)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Ética profesional y compromiso con la sociedad.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="plan" class="section">
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">Plan de estudios</span>
      <h2>Estructura curricular</h2>
      <p>Plan de estudios organizado en períodos ${p.format.toLowerCase()}s con materias progresivas.</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
      <article class="card" style="padding: 1.5rem;">
        <h3 style="color: var(--everest-blue); font-size: var(--fs-lg); margin-bottom: 1rem;">Período 1</h3>
        <ul style="display: flex; flex-direction: column; gap: 0.5rem; color: var(--everest-gray-700); font-size: var(--fs-sm);">
          <li>• Fundamentos disciplinarios</li>
          <li>• Habilidades de pensamiento</li>
          <li>• Tecnologías de la información</li>
          <li>• Inglés técnico</li>
        </ul>
      </article>
      <article class="card" style="padding: 1.5rem;">
        <h3 style="color: var(--everest-blue); font-size: var(--fs-lg); margin-bottom: 1rem;">Período 2</h3>
        <ul style="display: flex; flex-direction: column; gap: 0.5rem; color: var(--everest-gray-700); font-size: var(--fs-sm);">
          <li>• Marco teórico aplicado</li>
          <li>• Metodología de investigación</li>
          <li>• Práctica profesional I</li>
          <li>• Electiva I</li>
        </ul>
      </article>
      <article class="card" style="padding: 1.5rem;">
        <h3 style="color: var(--everest-blue); font-size: var(--fs-lg); margin-bottom: 1rem;">Período 3</h3>
        <ul style="display: flex; flex-direction: column; gap: 0.5rem; color: var(--everest-gray-700); font-size: var(--fs-sm);">
          <li>• Especialización profesional</li>
          <li>• Análisis de casos</li>
          <li>• Práctica profesional II</li>
          <li>• Electiva II</li>
        </ul>
      </article>
      <article class="card" style="padding: 1.5rem;">
        <h3 style="color: var(--everest-blue); font-size: var(--fs-lg); margin-bottom: 1rem;">Período final</h3>
        <ul style="display: flex; flex-direction: column; gap: 0.5rem; color: var(--everest-gray-700); font-size: var(--fs-sm);">
          <li>• Seminario de titulación</li>
          <li>• Proyecto integrador</li>
          <li>• Tesis / Tesina</li>
          <li>• Práctica profesional final</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">Requisitos de admisión</span>
      <h2>Lo que necesitas para inscribirte</h2>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; max-width: 800px; margin: 0 auto;">
      ${(() => {
        const reqs = p.level === 'licenciatura' ? [
          'Certificado de bachillerato',
          'Acta de nacimiento',
          'INE y CURP',
          'Carta de autenticidad',
          'Comprobante de pago'
        ] : p.level === 'maestria' ? [
          'Título de licenciatura',
          'Acta de nacimiento',
          'INE y CURP',
          'Comprobante de pago'
        ] : [
          'Título de maestría o Acta de defensa de tesis',
          'Acta de nacimiento',
          'INE y CURP',
          'Comprobante de pago'
        ];
        return reqs.map(r => `
          <div style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: white; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--everest-success)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span style="font-weight: 500;">${r}</span>
          </div>
        `).join('');
      })()}
    </div>
    <div class="text-center" style="margin-top: 2rem;">
      <a href="../index.html#contacto" class="btn btn--primary btn--lg">Iniciar proceso de admisión</a>
    </div>
  </div>
</section>

</main>

<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="../assets/svg/logo-nombre.svg" alt="Instituto Everest" style="filter: brightness(0) invert(1);">
        <p>Instituto de educación superior en línea con programas de licenciatura, maestría y doctorado.</p>
      </div>
      <div class="footer-col">
        <h4>Instituto</h4>
        <ul>
          <li><a href="../instituto/nosotros.html">Quiénes Somos</a></li>
          <li><a href="../instituto/historia.html">Historia</a></li>
          <li><a href="../instituto/claustro.html">Claustro</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Oferta</h4>
        <ul>
          <li><a href="../oferta/licenciaturas.html">Licenciaturas</a></li>
          <li><a href="../oferta/maestrias.html">Maestrías</a></li>
          <li><a href="../oferta/doctorados.html">Doctorados</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contacto</h4>
        <ul>
          <li><a href="tel:+526699300283">669 930 0283</a></li>
          <li><a href="tel:+525570814419">557 081 4419</a></li>
          <li><a href="https://wa.me/525570814419">WhatsApp</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© 2026 Instituto Everest de Sinaloa. Todos los derechos reservados.</div>
      <div class="footer-bottom__links">
        <a href="../instituto/aviso-de-privacidad.html">Aviso de Privacidad</a>
        <a href="../instituto/terminos.html">Términos</a>
      </div>
    </div>
  </div>
</footer>

<a href="https://wa.me/525570814419" class="whatsapp-float" aria-label="Contactar por WhatsApp" target="_blank" rel="noopener">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>

<script src="../assets/js/app.js" defer></script>
</body>
</html>`;
}

module.exports = { buildProgramPage, PROGRAMS };
