function buildSectionPage(opts) {
  const { title, description, parent, breadcrumb, heroBg, content } = opts;
  const isHome = parent === 'index.html';
  const basePath = isHome ? '' : '../';
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Instituto Everest</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="https://educacioneverest.com/${parent.replace('.html','')}">
  <link rel="icon" type="image/svg+xml" href="${basePath}assets/svg/logo-shield.svg">
  <meta name="theme-color" content="#112f55">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,500;0,700;0,900;1,900&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${basePath}assets/css/design-system.css">
  <link rel="stylesheet" href="${basePath}assets/css/components.css">
</head>
<body>
<a href="#main" class="skip-link">Saltar al contenido principal</a>

<header class="site-header" role="banner">
  <div class="container">
    <div class="header-top">
      <a href="${basePath}index.html" class="header-logo" aria-label="Inicio - Instituto Everest">
        <img src="${basePath}assets/svg/logo-shield.svg" alt="Logo Instituto Everest" width="48" height="48">
        <span class="logo-text"><strong>INSTITUTO EVEREST</strong><small>De Sinaloa</small></span>
      </a>
      <nav class="header-nav" aria-label="Navegación principal">
        <div class="nav-item"><a href="${basePath}index.html#instituto" class="nav-link">Instituto</a></div>
        <div class="nav-item"><a href="${basePath}index.html#oferta" class="nav-link">Oferta Académica</a></div>
        <div class="nav-item"><a href="${basePath}index.html#admisiones" class="nav-link">Admisiones</a></div>
        <div class="nav-item"><a href="${basePath}index.html#vida" class="nav-link">Vida Estudiantil</a></div>
        <div class="nav-item"><a href="${basePath}index.html#contacto" class="nav-link">Contacto</a></div>
      </nav>
      <div class="header-actions">
        <a href="https://registro.educacioneverest.com/universidad" class="btn btn--gold btn--sm">Pre-Registro</a>
        <a href="${basePath}aulavirtual/" class="btn btn--primary btn--sm">Aula Virtual</a>
        <button class="header-mobile-toggle" aria-label="Abrir menú">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </div>
  </div>
</header>

<main id="main">

<section class="section" style="background: ${heroBg || 'linear-gradient(135deg, var(--everest-blue-darker), var(--everest-blue))'}; color: white; padding-top: calc(var(--header-height) + 3rem); padding-bottom: 3rem;">
  <div class="container">
    <div style="margin-bottom: 1rem;">
      <a href="${basePath}index.html" style="color: rgba(255,255,255,0.7); display: inline-flex; align-items: center; gap: 0.5rem; font-size: var(--fs-sm);">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        Inicio
      </a>
      ${breadcrumb ? '<span style="color: rgba(255,255,255,0.5); margin: 0 0.5rem;">/</span><span style="color: rgba(255,255,255,0.9); font-size: var(--fs-sm);">' + breadcrumb + '</span>' : ''}
    </div>
    <h1 style="color: white; font-size: clamp(2.5rem, 5vw, 4rem);">${title}</h1>
    <p style="color: rgba(255,255,255,0.9); font-size: var(--fs-lg); max-width: 720px; margin-top: 1rem;">${description}</p>
  </div>
</section>

${content}

</main>

<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="${basePath}assets/svg/logo-nombre.svg" alt="Instituto Everest" style="filter: brightness(0) invert(1);">
        <p>Instituto de educación superior en línea con programas de licenciatura, maestría y doctorado.</p>
      </div>
      <div class="footer-col">
        <h4>Instituto</h4>
        <ul>
          <li><a href="${basePath}instituto/nosotros.html">Quiénes Somos</a></li>
          <li><a href="${basePath}instituto/historia.html">Historia</a></li>
          <li><a href="${basePath}instituto/claustro.html">Claustro</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Oferta</h4>
        <ul>
          <li><a href="${basePath}oferta/licenciaturas.html">Licenciaturas</a></li>
          <li><a href="${basePath}oferta/maestrias.html">Maestrías</a></li>
          <li><a href="${basePath}oferta/doctorados.html">Doctorados</a></li>
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
        <a href="${basePath}instituto/aviso-de-privacidad.html">Aviso de Privacidad</a>
        <a href="${basePath}instituto/terminos.html">Términos</a>
      </div>
    </div>
  </div>
</footer>

<a href="https://wa.me/525570814419" class="whatsapp-float" aria-label="Contactar por WhatsApp" target="_blank" rel="noopener">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>

<script src="${basePath}assets/js/app.js" defer></script>
</body>
</html>`;
}

module.exports = { buildSectionPage };
