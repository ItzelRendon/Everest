/* ============================================
   INSTITUTO EVEREST — MAIN APP
   ============================================ */

(function() {
  'use strict';

  // ============================================
  // DATA
  // ============================================
  const PROGRAMS = [
    // Licenciaturas
    { id: 'ldds', name: 'Diseño y Desarrollo de Software', level: 'licenciatura', area: 'tecnologia', icon: 'software', format: 'Cuatrimestral', duration: '3 años 8 meses', start: 'Febrero y Septiembre' },
    { id: 'lfa', name: 'Finanzas y Administración', level: 'licenciatura', area: 'negocios', icon: 'finance', format: 'Cuatrimestral', duration: '3 años 8 meses', start: 'Febrero y Septiembre' },
    { id: 'lmd', name: 'Marketing Digital', level: 'licenciatura', area: 'negocios', icon: 'marketing', format: 'Cuatrimestral', duration: '3 años 8 meses', start: 'Febrero y Septiembre' },
    { id: 'lped', name: 'Pedagogía', level: 'licenciatura', area: 'educacion', icon: 'pedagogy', format: 'Cuatrimestral', duration: '3 años 8 meses', start: 'Febrero y Septiembre' },
    { id: 'lsa', name: 'Sustentabilidad y Ambiente', level: 'licenciatura', area: 'ingenieria', icon: 'environment', format: 'Cuatrimestral', duration: '3 años 8 meses', start: 'Febrero y Septiembre' },

    // Maestrías
    { id: 'maegp', name: 'Administración de Empresas y Gestión de Proyectos', level: 'maestria', area: 'negocios', icon: 'business', format: 'Cuatrimestral', duration: '1 año 4 meses', start: 'Febrero y Septiembre' },
    { id: 'mcd', name: 'Ciencia de Datos', level: 'maestria', area: 'tecnologia', icon: 'data', format: 'Cuatrimestral', duration: '1 año 4 meses', start: 'Febrero y Septiembre' },
    { id: 'maed', name: 'Educación', level: 'maestria', area: 'educacion', icon: 'pedagogy', format: 'Cuatrimestral', duration: '1 año 4 meses', start: 'Febrero y Septiembre' },
    { id: 'mga', name: 'Gestión Ambiental', level: 'maestria', area: 'ingenieria', icon: 'environment', format: 'Cuatrimestral', duration: '1 año 4 meses', start: 'Febrero y Septiembre' },
    { id: 'mgde', name: 'Gestión y Dirección Escolar', level: 'maestria', area: 'educacion', icon: 'pedagogy', format: 'Cuatrimestral', duration: '1 año 4 meses', start: 'Febrero y Septiembre' },
    { id: 'mia', name: 'Ingeniería Aplicada', level: 'maestria', area: 'ingenieria', icon: 'engineering', format: 'Cuatrimestral', duration: '1 año 4 meses', start: 'Febrero y Septiembre' },
    { id: 'mingc', name: 'Inteligencia de Negocios y Gestión del Conocimiento', level: 'maestria', area: 'tecnologia', icon: 'data', format: 'Cuatrimestral', duration: '1 año 4 meses', start: 'Febrero y Septiembre' },
    { id: 'mjo', name: 'Juicios Orales en Materia Penal y Mercantil', level: 'maestria', area: 'educacion', area2: 'negocios', icon: 'law', format: 'Cuatrimestral', duration: '1 año 4 meses', start: 'Febrero y Septiembre' },
    { id: 'mli', name: 'Logística e Industria', level: 'maestria', area: 'ingenieria', icon: 'logistics', format: 'Cuatrimestral', duration: '1 año 4 meses', start: 'Febrero y Septiembre' },
    { id: 'mpe', name: 'Pedagogías Emergentes', level: 'maestria', area: 'educacion', icon: 'pedagogy', format: 'Cuatrimestral', duration: '1 año 4 meses', start: 'Febrero y Septiembre' },
    { id: 'msi', name: 'Seguridad Informática', level: 'maestria', area: 'tecnologia', icon: 'security', format: 'Cuatrimestral', duration: '1 año 4 meses', start: 'Febrero y Septiembre' },

    // Doctorados
    { id: 'daa', name: 'Ambientes de Aprendizaje', level: 'doctorado', area: 'educacion', icon: 'doctorate', format: 'Semestral', duration: '2 años 6 meses', start: 'Febrero y Septiembre' },
    { id: 'ddi', name: 'Docencia e Investigación', level: 'doctorado', area: 'educacion', icon: 'research', format: 'Semestral', duration: '2 años', start: 'Febrero y Septiembre' },
    { id: 'doed', name: 'Educación', level: 'doctorado', area: 'educacion', icon: 'pedagogy', format: 'Semestral', duration: '2 años 6 meses', start: 'Febrero y Septiembre' },
    { id: 'dea', name: 'Energía y Ambiente', level: 'doctorado', area: 'ingenieria', icon: 'environment', format: 'Semestral', duration: '2 años 6 meses', start: 'Febrero y Septiembre' }
  ];

  const REQUIREMENTS = {
    licenciatura: [
      'Certificado de bachillerato',
      'Acta de nacimiento',
      'INE y CURP',
      'Carta de autenticidad (expedida por la preparatoria de egreso)',
      'Comprobante de pago de inscripción'
    ],
    maestria: [
      'Título de licenciatura',
      'Acta de nacimiento',
      'INE y CURP',
      'Comprobante de pago de inscripción'
    ],
    doctorado: [
      'Título de maestría o Acta de defensa de tesis',
      'Acta de nacimiento',
      'INE y CURP',
      'Comprobante de pago de inscripción'
    ]
  };

  const TESTIMONIALS = [
    {
      text: 'Estudiar en el Instituto Everest me permitió compaginar mi trabajo con una maestría de calidad. La plataforma es muy intuitiva y los docentes siempre están dispuestos a apoyarte.',
      name: 'María González',
      program: 'Maestría en Educación',
      initials: 'MG'
    },
    {
      text: 'La flexibilidad horaria y la calidad académica fueron clave para mí. Pude cursar mi doctorado desde Sinaloa con reconocimiento internacional.',
      name: 'Dr. Carlos Ramírez',
      program: 'Doctorado en Docencia e Investigación',
      initials: 'CR'
    },
    {
      text: 'Como madre y profesionista, el modelo en línea del Instituto Everest se adaptó perfectamente a mi vida. Los tutores son excelentes y el contenido es muy actual.',
      name: 'Laura Hernández',
      program: 'Licenciatura en Pedagogía',
      initials: 'LH'
    },
    {
      text: 'Mi maestría en Ciencia de Datos me abrió puertas en el sector tecnológico. Los proyectos prácticos y el claustro docente marcaron la diferencia.',
      name: 'Roberto Sánchez',
      program: 'Maestría en Ciencia de Datos',
      initials: 'RS'
    }
  ];

  // ============================================
  // INITIALIZATION
  // ============================================
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initHeroCarousel();
    initSearch();
    initTabs();
    initPrograms();
    initCounters();
    initTestimonials();
    initWizard();
    initModals();
    initRevealAnimations();
    initContactForm();
    initSmoothScroll();
  });

  // ============================================
  // HEADER
  // ============================================
  function initHeader() {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.querySelector('.header-mobile-toggle');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const drawerBackdrop = document.querySelector('.mobile-drawer__backdrop');
    const drawerClose = document.querySelector('.mobile-drawer__close');

    if (!header) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      header.classList.toggle('is-scrolled', currentScroll > 20);
      lastScroll = currentScroll;
    }, { passive: true });

    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        mobileDrawer.classList.add('is-open');
        drawerBackdrop?.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });

      const closeDrawer = () => {
        mobileDrawer.classList.remove('is-open');
        drawerBackdrop?.classList.remove('is-open');
        document.body.style.overflow = '';
      };

      drawerClose?.addEventListener('click', closeDrawer);
      drawerBackdrop?.addEventListener('click', closeDrawer);

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
          closeDrawer();
        }
      });
    }
  }

  // ============================================
  // HERO CAROUSEL
  // ============================================
  function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero__slide');
    const dots = document.querySelectorAll('.hero__dot');
    const progressBar = document.querySelector('.hero__progress-bar');

    if (slides.length === 0) return;

    let currentSlide = 0;
    const SLIDE_DURATION = 7000;
    let progress = 0;
    let progressInterval;
    let slideInterval;

    function goToSlide(index) {
      slides.forEach(s => s.classList.remove('is-active'));
      dots.forEach(d => d.classList.remove('is-active'));
      currentSlide = index;
      slides[currentSlide].classList.add('is-active');
      dots[currentSlide]?.classList.add('is-active');
      progress = 0;
      if (progressBar) progressBar.style.width = '0%';
    }

    function nextSlide() {
      goToSlide((currentSlide + 1) % slides.length);
    }

    function startAutoplay() {
      slideInterval = setInterval(nextSlide, SLIDE_DURATION);
      progressInterval = setInterval(() => {
        progress += 100 / (SLIDE_DURATION / 100);
        if (progressBar) progressBar.style.width = Math.min(progress, 100) + '%';
      }, 100);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        clearInterval(progressInterval);
        goToSlide(i);
        startAutoplay();
      });
    });

    startAutoplay();
  }

  // ============================================
  // SEARCH
  // ============================================
  function initSearch() {
    const toggle = document.querySelector('.header-search-toggle');
    const modal = document.querySelector('.search-modal');
    const input = document.querySelector('.search-modal__input');
    const resultsContainer = document.querySelector('.search-modal__results');
    const closeBtn = document.querySelector('.search-modal__close');

    if (!toggle || !modal) return;

    const searchableItems = [
      ...PROGRAMS.map(p => ({
        title: p.name,
        category: p.level.charAt(0).toUpperCase() + p.level.slice(1),
        url: `oferta/${p.id}.html`,
        icon: 'book'
      })),
      { title: 'Proceso de Admisión', category: 'Admisiones', url: 'admisiones/proceso.html', icon: 'file-text' },
      { title: 'Requisitos de Admisión', category: 'Admisiones', url: 'admisiones/requisitos.html', icon: 'shield-check' },
      { title: 'Becas y Financiamiento', category: 'Admisiones', url: 'admisiones/becas.html', icon: 'scholarship' },
      { title: 'Calendario Académico', category: 'Academico', url: 'admisiones/calendario.html', icon: 'calendar' },
      { title: 'Testimonios', category: 'Vida Estudiantil', url: 'vida-estudiantil/testimonios.html', icon: 'quote' },
      { title: 'Egresados Destacados', category: 'Vida Estudiantil', url: 'vida-estudiantil/egresados.html', icon: 'alumni' },
      { title: 'Bolsa de Trabajo', category: 'Trabajo', url: 'bolsa-trabajo.html', icon: 'briefcase' },
      { title: 'Misión y Visión', category: 'Instituto', url: 'instituto/nosotros.html', icon: 'globe' },
      { title: 'Historia', category: 'Instituto', url: 'instituto/historia.html', icon: 'building' },
      { title: 'Claustro Docente', category: 'Instituto', url: 'instituto/claustro.html', icon: 'users' }
    ];

    function renderResults(query = '') {
      if (!resultsContainer) return;
      const filtered = query
        ? searchableItems.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
        : searchableItems.slice(0, 6);

      if (filtered.length === 0) {
        resultsContainer.innerHTML = '<p style="padding: 1rem; text-align: center; color: var(--everest-gray-500);">No se encontraron resultados</p>';
        return;
      }

      resultsContainer.innerHTML = filtered.map(item => `
        <a href="${item.url}" class="search-result">
          <span class="search-result__icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </span>
          <div class="search-result__content">
            <div class="search-result__title">${item.title}</div>
            <div class="search-result__category">${item.category}</div>
          </div>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
      `).join('');
    }

    function openSearch() {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      setTimeout(() => input?.focus(), 100);
      renderResults();
    }

    function closeSearch() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      if (input) input.value = '';
    }

    toggle.addEventListener('click', openSearch);
    closeBtn?.addEventListener('click', closeSearch);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeSearch(); });

    let debounceTimer;
    input?.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => renderResults(e.target.value), 200);
    });

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeSearch();
      }
      if (e.key === '/' && !modal.classList.contains('is-open') && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        openSearch();
      }
    });
  }

  // ============================================
  // TABS (Somos)
  // ============================================
  function initTabs() {
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabPanels = document.querySelectorAll('[data-tab-panel]');

    if (tabButtons.length === 0) return;

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.dataset.tab;

        tabButtons.forEach(b => b.classList.remove('is-active'));
        tabPanels.forEach(p => p.classList.remove('is-active'));

        button.classList.add('is-active');
        document.querySelector(`[data-tab-panel="${target}"]`)?.classList.add('is-active');
      });
    });
  }

  // ============================================
  // PROGRAMS GRID
  // ============================================
  function initPrograms() {
    const grid = document.querySelector('.programs-grid');
    const filterButtons = document.querySelectorAll('[data-filter]');
    const searchInput = document.querySelector('[data-programs-search]');

    if (!grid) return;

    function renderPrograms(filter = 'all', query = '') {
      let filtered = PROGRAMS;

      if (filter !== 'all') {
        filtered = filtered.filter(p => p.level === filter);
      }

      if (query) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--everest-gray-500);">
            <p>No se encontraron programas con esos criterios.</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map(p => `
        <article class="program-card reveal" data-level="${p.level}">
          <div class="program-card__image">
            <span class="program-card__level">${p.level === 'licenciatura' ? 'Licenciatura' : p.level === 'maestria' ? 'Maestría' : 'Doctorado'}</span>
            <div class="program-card__pattern"></div>
            <img src="assets/svg/program-${p.icon}.svg" alt="" class="program-card__icon" loading="lazy" width="64" height="64">
          </div>
          <div class="program-card__body">
            <h3 class="program-card__title">${p.name}</h3>
            <div class="program-card__features">
              <div class="program-card__feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                <span><strong>Formato:</strong> ${p.format}</span>
              </div>
              <div class="program-card__feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span><strong>Duración:</strong> ${p.duration}</span>
              </div>
              <div class="program-card__feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                <span><strong>Inicio:</strong> ${p.start}</span>
              </div>
            </div>
          </div>
          <div class="program-card__footer">
            <a href="oferta/${p.id}.html" class="program-card__cta">
              Ver detalles
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <button class="program-card__requirements" data-requirements="${p.level}">Requisitos</button>
          </div>
        </article>
      `).join('');

      // Re-bind requirements buttons
      grid.querySelectorAll('[data-requirements]').forEach(btn => {
        btn.addEventListener('click', () => openRequirementsModal(btn.dataset.requirements));
      });
    }

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const filter = btn.dataset.filter;
        renderPrograms(filter, searchInput?.value || '');
      });
    });

    let searchDebounce;
    searchInput?.addEventListener('input', (e) => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        const activeFilter = document.querySelector('[data-filter].is-active')?.dataset.filter || 'all';
        renderPrograms(activeFilter, e.target.value);
      }, 200);
    });

    renderPrograms();
  }

  // ============================================
  // COUNTERS
  // ============================================
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }

  function animateCounter(element) {
    const target = parseInt(element.dataset.counter, 10);
    const duration = 2000;
    const start = performance.now();
    const isFloat = element.dataset.counter.includes('.');

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = target * eased;

      element.textContent = isFloat
        ? current.toFixed(1)
        : Math.floor(current).toLocaleString('es-MX');

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = isFloat
          ? target.toFixed(1)
          : target.toLocaleString('es-MX');
      }
    }

    requestAnimationFrame(update);
  }

  // ============================================
  // TESTIMONIALS CAROUSEL
  // ============================================
  function initTestimonials() {
    const track = document.querySelector('.testimonials-track');
    const dotsContainer = document.querySelector('.testimonial-dots');
    const prevBtn = document.querySelector('[data-testimonial-prev]');
    const nextBtn = document.querySelector('[data-testimonial-next]');

    if (!track || TESTIMONIALS.length === 0) return;

    let currentIndex = 0;

    track.innerHTML = TESTIMONIALS.map(t => `
      <div class="testimonial">
        <svg class="testimonial__quote-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h2c0 5-3 5-3 5zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h2c0 5-3 5-3 5z"/>
        </svg>
        <p class="testimonial__text">"${t.text}"</p>
        <div class="testimonial__author">
          <div class="testimonial__avatar">${t.initials}</div>
          <div class="testimonial__author-info">
            <strong>${t.name}</strong>
            <span>${t.program}</span>
          </div>
        </div>
      </div>
    `).join('');

    if (dotsContainer) {
      dotsContainer.innerHTML = TESTIMONIALS.map((_, i) => `
        <button class="carousel-dot ${i === 0 ? 'is-active' : ''}" data-testimonial-dot="${i}" aria-label="Ir al testimonio ${i + 1}"></button>
      `).join('');

      dotsContainer.querySelectorAll('[data-testimonial-dot]').forEach((dot, i) => {
        dot.addEventListener('click', () => goToTestimonial(i));
      });
    }

    function goToTestimonial(index) {
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dotsContainer?.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('is-active', i === currentIndex);
      });
    }

    prevBtn?.addEventListener('click', () => {
      goToTestimonial((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    });

    nextBtn?.addEventListener('click', () => {
      goToTestimonial((currentIndex + 1) % TESTIMONIALS.length);
    });

    // Autoplay
    let autoplay = setInterval(() => {
      goToTestimonial((currentIndex + 1) % TESTIMONIALS.length);
    }, 6000);

    const carousel = document.querySelector('.testimonials-carousel');
    carousel?.addEventListener('mouseenter', () => clearInterval(autoplay));
    carousel?.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => {
        goToTestimonial((currentIndex + 1) % TESTIMONIALS.length);
      }, 6000);
    });
  }

  // ============================================
  // WIZARD FORM
  // ============================================
  function initWizard() {
    const wizard = document.querySelector('[data-wizard]');
    if (!wizard) return;

    const steps = wizard.querySelectorAll('.wizard-step');
    const panels = wizard.querySelectorAll('.wizard-panel');
    const nextBtns = wizard.querySelectorAll('[data-wizard-next]');
    const prevBtns = wizard.querySelectorAll('[data-wizard-prev]');
    const form = wizard.querySelector('form');

    let currentStep = 0;

    function showStep(index) {
      panels.forEach((p, i) => p.classList.toggle('is-active', i === index));
      steps.forEach((s, i) => {
        s.classList.remove('is-active', 'is-complete');
        if (i < index) s.classList.add('is-complete');
        else if (i === index) s.classList.add('is-active');
      });
      currentStep = index;
    }

    nextBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        // Validate current step
        const currentPanel = panels[currentStep];
        const inputs = currentPanel.querySelectorAll('input[required], select[required]');
        let valid = true;
        inputs.forEach(input => {
          if (!input.value.trim()) {
            valid = false;
            input.parentElement.classList.add('error');
          } else {
            input.parentElement.classList.remove('error');
          }
        });
        if (!valid) {
          showToast('Por favor completa los campos requeridos', 'error');
          return;
        }
        if (currentStep < panels.length - 1) {
          showStep(currentStep + 1);
        } else {
          // Submit
          handleFormSubmit(form);
        }
      });
    });

    prevBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentStep > 0) showStep(currentStep - 1);
      });
    });

    showStep(0);
  }

  function handleFormSubmit(form) {
    const submitBtn = form.querySelector('[type="submit"], [data-wizard-next]:last-of-type');
    const originalText = submitBtn?.textContent;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
    }

    // Simulate send
    setTimeout(() => {
      showToast('¡Gracias! Pronto un asesor te contactará.', 'success');
      form.reset();
      document.querySelectorAll('.wizard-panel').forEach((p, i) => p.classList.toggle('is-active', i === 0));
      document.querySelectorAll('.wizard-step').forEach((s, i) => s.classList.toggle('is-active', i === 0));
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }, 1200);
  }

  // ============================================
  // MODALS
  // ============================================
  function initModals() {
    const openButtons = document.querySelectorAll('[data-open-modal]');
    const closeButtons = document.querySelectorAll('[data-close-modal]');
    const modals = document.querySelectorAll('.modal');

    openButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.dataset.openModal;
        document.getElementById(`modal-${target}`)?.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    });

    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.modal')?.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    modals.forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('is-open');
          document.body.style.overflow = '';
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modals.forEach(modal => modal.classList.remove('is-open'));
        document.body.style.overflow = '';
      }
    });
  }

  function openRequirementsModal(level) {
    const modal = document.getElementById('modal-requirements');
    if (!modal) return;

    const list = modal.querySelector('.modal__list');
    const subtitle = modal.querySelector('.modal__subtitle');
    const items = REQUIREMENTS[level] || [];

    if (subtitle) {
      subtitle.textContent = level === 'licenciatura' ? 'Licenciatura' : level === 'maestria' ? 'Maestría' : 'Doctorado';
    }

    if (list) {
      list.innerHTML = items.map(req => `
        <div class="modal__list-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${req}</span>
        </div>
      `).join('');
    }

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  // ============================================
  // REVEAL ANIMATIONS
  // ============================================
  function initRevealAnimations() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));
  }

  // ============================================
  // CONTACT FORM
  // ============================================
  function initContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('[type="submit"]');
      const originalText = submitBtn?.textContent;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }

      setTimeout(() => {
        showToast('¡Mensaje enviado! Te responderemos pronto.', 'success');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }, 1200);
    });
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = link.getAttribute('href');
        if (target === '#') return;
        const targetEl = document.querySelector(target);
        if (targetEl) {
          e.preventDefault();
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
          const top = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ============================================
  // TOAST
  // ============================================
  function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const icons = {
      success: '<path d="M20 6L9 17l-5-5"/>',
      error: '<path d="M18 6L6 18M6 6l12 12"/>',
      warning: '<path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>',
      info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'
    };

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <span class="toast__icon">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${icons[type] || icons.info}</svg>
      </span>
      <div class="toast__content">
        <div class="toast__title">${type === 'success' ? '¡Éxito!' : type === 'error' ? 'Error' : 'Aviso'}</div>
        <div class="toast__message">${message}</div>
      </div>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Expose to global for inline use
  window.Everest = { showToast, openRequirementsModal };
})();
