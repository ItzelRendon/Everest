/* ============================================
   INSTITUTO EVEREST — MAIN APP
   ============================================ */

(function() {
  'use strict';

  // ============================================
  // DATA
  // ============================================
  const TESTIMONIALS = [
    {
      text: '[Escribe aquí el testimonio del padre, madre o alumno...]',
      name: '[Nombre del padre/madre]',
      program: '[Preescolar — Sucursal Santa Rosa]',
      initials: 'XX'
    },
    {
      text: '[Escribe aquí el testimonio del padre, madre o alumno...]',
      name: '[Nombre del padre/madre]',
      program: '[Primaria — Sucursal Munich]',
      initials: 'XX'
    },
    {
      text: '[Escribe aquí el testimonio del padre, madre o alumno...]',
      name: '[Nombre del alumno/a]',
      program: '[Primaria — Sucursal Santa Rosa]',
      initials: 'XX'
    },
    {
      text: '[Escribe aquí el testimonio del padre, madre o alumno...]',
      name: '[Nombre del padre/madre]',
      program: '[Preescolar — Sucursal Munich]',
      initials: 'XX'
    }
  ];

  const NEWS = [
    {
      id: 0,
      category: '[Categoría]',
      date: '2026-01-01',
      dateLabel: '[DD Mes AAAA]',
      readTime: '[X]',
      title: '[Título de la noticia]',
      excerpt: '[Breve resumen de la noticia en 1-2 líneas.]',
      body: '[Cuerpo completo de la noticia. Reemplaza este texto con el contenido real: qué pasó, cuándo, dónde y por qué es relevante para la comunidad del colegio.]'
    },
    {
      id: 1,
      category: '[Categoría]',
      date: '2026-01-01',
      dateLabel: '[DD Mes AAAA]',
      readTime: '[X]',
      title: '[Título de la noticia]',
      excerpt: '[Breve resumen de la noticia en 1-2 líneas.]',
      body: '[Cuerpo completo de la noticia. Reemplaza este texto con el contenido real: qué pasó, cuándo, dónde y por qué es relevante para la comunidad del colegio.]'
    },
    {
      id: 2,
      category: '[Categoría]',
      date: '2026-01-01',
      dateLabel: '[DD Mes AAAA]',
      readTime: '[X]',
      title: '[Título de la noticia]',
      excerpt: '[Breve resumen de la noticia en 1-2 líneas.]',
      body: '[Cuerpo completo de la noticia. Reemplaza este texto con el contenido real: qué pasó, cuándo, dónde y por qué es relevante para la comunidad del colegio.]'
    }
  ];

  const EVENTS = [
    {
      day: '00',
      month: '[Mes]',
      title: '[Nombre del evento]',
      detail: '[Detalle del evento]',
      time: '[Hora]',
      location: '[Lugar / Sucursal]',
      description: '[Descripción completa del evento: en qué consiste, a quién va dirigido y si requiere confirmar asistencia.]'
    },
    {
      day: '00',
      month: '[Mes]',
      title: '[Nombre del evento]',
      detail: '[Detalle del evento]',
      time: '[Hora]',
      location: '[Lugar / Sucursal]',
      description: '[Descripción completa del evento: en qué consiste, a quién va dirigido y si requiere confirmar asistencia.]'
    },
    {
      day: '00',
      month: '[Mes]',
      title: '[Nombre del evento]',
      detail: '[Detalle del evento]',
      time: '[Hora]',
      location: '[Lugar / Sucursal]',
      description: '[Descripción completa del evento: en qué consiste, a quién va dirigido y si requiere confirmar asistencia.]'
    }
  ];

  const GALLERY = [
    { id: 0, type: 'photo', category: 'instalaciones', label: '[Foto: fachada del colegio]' },
    { id: 1, type: 'photo', category: 'instalaciones', label: '[Foto: salón de clases]' },
    { id: 2, type: 'photo', category: 'alumnos', label: '[Foto: alumnos en actividad]' },
    { id: 3, type: 'video', category: 'videos', label: '[Video: recorrido por el colegio]' },
    { id: 4, type: 'photo', category: 'eventos', label: '[Foto: festival o ceremonia]' },
    { id: 5, type: 'photo', category: 'alumnos', label: '[Foto: alumnos en el recreo]' },
    { id: 6, type: 'photo', category: 'eventos', label: '[Foto: día del niño / evento especial]' },
    { id: 7, type: 'video', category: 'videos', label: '[Video: testimonio en video]' },
    { id: 8, type: 'photo', category: 'instalaciones', label: '[Foto: área deportiva]' }
  ];

  // ============================================
  // INITIALIZATION
  // ============================================
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initHeroCarousel();
    initSearch();
    initTabs();
    initCounters();
    initTestimonials();
    initNews();
    initEventModal();
    initArticlePage();
    initGallery();
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
      { title: 'Nosotros', category: 'Colegio', url: 'nosotros.html', icon: 'globe' },
      { title: 'Preescolar', category: 'Niveles', url: 'preescolar.html', icon: 'book' },
      { title: 'Primaria', category: 'Niveles', url: 'primaria.html', icon: 'book' },
      { title: 'Admisiones', category: 'Admisiones', url: 'admisiones.html', icon: 'file-text' },
      { title: 'Costos y Becas', category: 'Admisiones', url: 'becas.html', icon: 'scholarship' },
      { title: 'Noticias', category: 'Comunidad', url: 'noticias.html', icon: 'calendar' },
      { title: 'Galería', category: 'Comunidad', url: 'galeria.html', icon: 'quote' },
      { title: 'Contacto', category: 'Contacto', url: 'contacto.html', icon: 'building' }
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
  // NEWS GRID (fuente única: array NEWS)
  // ============================================
  function initNews() {
    const grid = document.querySelector('.news-grid');
    if (!grid || !NEWS.length) return;

    grid.innerHTML = NEWS.map(n => `
      <article class="news-card">
        <div class="news-card__image">
          <span class="news-card__category">${n.category}</span>
        </div>
        <div class="news-card__body">
          <div class="news-card__meta">
            <time datetime="${n.date}">${n.dateLabel}</time>
            <span>· ${n.readTime} min lectura</span>
          </div>
          <h3 class="news-card__title">${n.title}</h3>
          <p class="news-card__excerpt">${n.excerpt}</p>
          <a href="noticia.html?id=${n.id}" class="card__link">Leer más <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
        </div>
      </article>
    `).join('');
  }

  // ============================================
  // EVENT MODAL (fuente única: array EVENTS)
  // ============================================
  function initEventModal() {
    const cards = document.querySelectorAll('[data-event-index]');
    const modal = document.getElementById('modal-event');
    if (!cards.length || !modal) return;

    const titleEl = modal.querySelector('.modal__title');
    const subtitleEl = modal.querySelector('.modal__subtitle');
    const bodyEl = modal.querySelector('[data-event-body]');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        const ev = EVENTS[card.dataset.eventIndex];
        if (!ev) return;
        if (titleEl) titleEl.textContent = ev.title;
        if (subtitleEl) subtitleEl.textContent = `${ev.day} de ${ev.month} · ${ev.time} · ${ev.location}`;
        if (bodyEl) bodyEl.textContent = ev.description;
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  // ============================================
  // ARTICLE PAGE (noticia.html) — lee ?id= de la URL
  // ============================================
  function initArticlePage() {
    const titleEl = document.querySelector('[data-article-title]');
    if (!titleEl) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'), 10);
    const article = NEWS.find(n => n.id === id) || NEWS[0];
    if (!article) return;

    document.title = `${article.title} | Colegio Everest`;
    titleEl.textContent = article.title;

    const categoryEl = document.querySelector('[data-article-category]');
    const dateEl = document.querySelector('[data-article-date]');
    const readtimeEl = document.querySelector('[data-article-readtime]');
    const bodyEl = document.querySelector('[data-article-body]');
    const crumbEl = document.querySelector('[data-article-crumb]');

    if (categoryEl) categoryEl.textContent = article.category;
    if (dateEl) { dateEl.textContent = article.dateLabel; dateEl.setAttribute('datetime', article.date); }
    if (readtimeEl) readtimeEl.textContent = `${article.readTime} min lectura`;
    if (bodyEl) bodyEl.textContent = article.body;
    if (crumbEl) crumbEl.textContent = article.title;
  }

  // ============================================
  // GALERÍA (filtro + lightbox)
  // ============================================
  function initGallery() {
    const grid = document.querySelector('[data-gallery-grid]');
    if (!grid) return;

    const chips = document.querySelectorAll('[data-gallery-filter]');
    const lightbox = document.getElementById('modal-lightbox');
    const lightboxDialog = lightbox?.querySelector('.modal__dialog');
    const lightboxIcon = lightbox?.querySelector('[data-lightbox-icon]');
    const lightboxLabel = lightbox?.querySelector('[data-lightbox-label]');
    const lightboxNote = lightbox?.querySelector('[data-lightbox-note]');
    const lightboxCounter = lightbox?.querySelector('[data-lightbox-counter]');
    const prevBtn = lightbox?.querySelector('[data-lightbox-prev]');
    const nextBtn = lightbox?.querySelector('[data-lightbox-next]');

    const photoIcon = '<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';
    const videoIcon = '<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>';

    let currentItems = GALLERY;
    let currentIndex = 0;

    function showLightboxItem(index) {
      if (!currentItems.length || !lightbox) return;
      currentIndex = (index + currentItems.length) % currentItems.length;
      const item = currentItems[currentIndex];

      if (lightboxIcon) lightboxIcon.innerHTML = item.type === 'video' ? videoIcon : photoIcon;
      if (lightboxLabel) lightboxLabel.textContent = item.label;
      if (lightboxNote) lightboxNote.textContent = item.type === 'video'
        ? 'Reemplaza este bloque con el reproductor de video real (YouTube, Vimeo o archivo propio).'
        : 'Reemplaza este bloque con la fotografía real en alta calidad.';
      if (lightboxCounter) lightboxCounter.textContent = `${currentIndex + 1} / ${currentItems.length}`;
    }

    function openLightbox(index) {
      showLightboxItem(index);
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function render(filter) {
      currentItems = filter === 'todas' ? GALLERY : GALLERY.filter(g => g.category === filter);

      grid.innerHTML = currentItems.map(g => `
        <button type="button" class="gallery-item" data-gallery-id="${g.id}" style="cursor:pointer;border:1.5px dashed var(--col-warm-border, var(--everest-gray-300));width:100%;">
          ${g.type === 'video' ? videoIcon : photoIcon}
          <span>${g.label}</span>
        </button>
      `).join('');

      grid.querySelectorAll('[data-gallery-id]').forEach((btn, i) => {
        btn.addEventListener('click', () => openLightbox(i));
      });
    }

    prevBtn?.addEventListener('click', () => showLightboxItem(currentIndex - 1));
    nextBtn?.addEventListener('click', () => showLightboxItem(currentIndex + 1));

    document.addEventListener('keydown', (e) => {
      if (!lightbox?.classList.contains('is-open')) return;
      if (e.key === 'ArrowLeft') showLightboxItem(currentIndex - 1);
      if (e.key === 'ArrowRight') showLightboxItem(currentIndex + 1);
    });

    // Swipe táctil (móvil)
    let touchStartX = 0;
    lightboxDialog?.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    lightboxDialog?.addEventListener('touchend', (e) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) < 40) return;
      if (deltaX < 0) showLightboxItem(currentIndex + 1);
      else showLightboxItem(currentIndex - 1);
    }, { passive: true });

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        render(chip.dataset.galleryFilter);
      });
    });

    render('todas');
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
  window.Everest = { showToast };
})();
