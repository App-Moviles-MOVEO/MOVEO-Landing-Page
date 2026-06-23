document.addEventListener('DOMContentLoaded', function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // ── language switcher (ES / EN) ───────────────────────────────
  const I18N = {
    es: {
      "nav.home": "Inicio", "nav.features": "Funciones", "nav.how": "Cómo funciona", "nav.faq": "FAQ",
      "nav.login": "Iniciar sesión", "nav.getapp": "Descargar app", "btn.getapp": "Descargar la app",
      "hero.title": "Tu auto y tu ruta,<br>en una sola <span class='wp-h1-accent'>app</span>",
      "hero.sub": "Alquila autos entre particulares y comparte rutas con carpooling verificado, con más ingresos para los dueños, menos costos para los conductores y todo desde tu celular.",
      "store.appstore.sub": "Descárgala en", "store.play.sub": "Disponible en",
      "hero.trust1": "Identidad verificada", "hero.trust2": "Pagos protegidos en escrow",
      "metric1": "Descargas en Lima", "metric2": "Calificación promedio", "metric3": "Perfiles verificados", "metric4": "Distritos cubiertos",
      "feat.eyebrow": "Funciones", "feat.title": "Todo lo que necesitas, en tu bolsillo",
      "r1.tag": "01 · Alquiler entre particulares", "r1.title": "Alquila el auto perfecto, cerca de ti",
      "r1.desc": "Explora autos de particulares verificados filtrando por zona, modelo y precio, reserva con calendario y firma el contrato digital en segundos, sin papeleo ni intermediarios.",
      "r1.li1": "Contrato digital con firma biométrica", "r1.li2": "Pagos retenidos en escrow hasta la devolución", "r1.li3": "Telemetría y reporte de daños incluidos",
      "phone1.title": "Catálogo cerca de ti", "phone1.sub": "Surco · 24 autos disponibles",
      "phone1.meta1": "★ 4.9 · Automático", "phone1.price1": "S/ 89/día", "phone1.meta2": "★ 4.8 · Mecánico", "phone1.price2": "S/ 75/día", "phone1.meta3": "★ 5.0 · Automático", "phone1.price3": "S/ 92/día",
      "r2.tag": "02 · Carpooling", "r2.title": "Comparte tu ruta, divide los gastos",
      "r2.desc": "Publica tu trayecto diario y viaja solo con personas verificadas de tu misma universidad o trabajo, y la app divide el costo automáticamente y te paga al instante, sin negociar.",
      "r2.li1": "Filtro por comunidad institucional (UPC, PUCP y más)", "r2.li2": "División automática de gastos, sin efectivo", "r2.li3": "Filtro opcional «solo mujeres» y GPS en vivo",
      "phone2.title": "Ruta en vivo", "phone2.seats": "3 asientos", "phone2.origin": "Origen", "phone2.dest": "Destino",
      "r3.tag": "03 · Confianza", "r3.title": "No es un grupo de Facebook, es confianza real",
      "r3.desc": "Toda la comunidad pasa por el mismo filtro: DNI, biometría facial, récord de conducción y reputación bidireccional, así siempre sabes con quién tratas.",
      "r3.li1": "Verificación KYC con DNI y biometría facial", "r3.li2": "Badge azul en cada perfil verificado", "r3.li3": "Botón de pánico y soporte 24/7",
      "phone3.title": "Verificación de identidad", "phone3.step": "Paso {n} de 4", "phone3.i1": "DNI anverso y reverso", "phone3.i2": "Biometría facial", "phone3.i3": "Correo institucional", "phone3.i4": "Récord de conducción", "phone3.btn": "Continuar",
      "how.eyebrow": "Cómo funciona", "how.title": "Empieza en tres pasos",
      "how.s1t": "Descarga y verifica", "how.s1d": "Baja la app, sube tu DNI y completa el escaneo facial, listo en menos de 5 minutos.",
      "how.s2t": "Alquila o publica", "how.s2d": "Encuentra un auto cerca o pon el tuyo a generar ingresos, reserva y firma todo desde la app.",
      "how.s3t": "Muévete y comparte", "how.s3d": "Conduce, publica tu ruta para carpool y divide los gastos con pasajeros verificados.",
      "test.eyebrow": "Testimonios", "test.title": "Voces de la comunidad",
      "test.q1": "«Mi Yaris pagaba sus propias cuotas, y con la verificación facial y el contrato digital tengo una tranquilidad que ningún grupo me daba.»", "test.r1": "Propietario · Surco",
      "test.q2": "«Por fin un canal donde sé que el conductor estudia en mi universidad, las rutas llegan a tiempo y mi mamá puede ver mi ubicación en vivo.»", "test.r2": "Pasajera · UPC",
      "test.q3": "«Alquilé barato y recuperé casi todo publicando asientos en mis trayectos a la oficina, y la división de gastos es automática y sin incomodidad.»", "test.r3": "Conductor · San Borja",
      "faq.eyebrow": "Preguntas frecuentes", "faq.title": "Todo lo que necesitas saber",
      "faq.desc": "Resolvemos las dudas más comunes sobre seguridad, pagos y cómo funciona la app.",
      "faq.q1": "¿Cómo funciona el pago en escrow?", "faq.a1": "El dinero del alquiler se retiene en una cuenta escrow hasta que el propietario confirma que el vehículo se devolvió en buen estado, así ambas partes quedan protegidas en todo momento.",
      "faq.q2": "¿Qué es la verificación KYC con DNI?", "faq.a2": "KYC (Know Your Customer) verifica la identidad de cada usuario escaneando su DNI en cuatro pasos: anverso, reverso, selfie y validación automática, y los perfiles aprobados muestran un badge azul.",
      "faq.q3": "¿Puedo filtrar el carpooling solo para mujeres?", "faq.a3": "Sí, en la sección de seguridad puedes activar el filtro «Solo mujeres», que limita tus viajes a conductoras y pasajeras verificadas, y también puedes filtrar por institución educativa.",
      "faq.q4": "¿Qué métodos de pago aceptan?", "faq.a4": "Aceptamos Yape, Plin, Visa, Mastercard y transferencia bancaria, y todos los pagos quedan retenidos en escrow hasta confirmar el fin del servicio.",
      "cta.title": "Descarga WheelsPe<br><span class='wp-cta-accent'>Gratis</span>", "cta.sub": "Crea tu cuenta en 2 minutos, verifica tu identidad y únete a la comunidad de movilidad colaborativa del Perú.",
      "footer.features": "Funciones", "footer.how": "Cómo funciona", "footer.faq": "FAQ", "footer.privacy": "Privacidad", "footer.copy": "© 2025 WheelsPe · Lima, Perú", "footer.proj": "Proyecto MOVEO · UPC"
    },
    en: {
      "nav.home": "Home", "nav.features": "Features", "nav.how": "How it works", "nav.faq": "FAQ",
      "nav.login": "Log in", "nav.getapp": "Get the app", "btn.getapp": "Get the app",
      "hero.title": "Your car and your route,<br>in a single <span class='wp-h1-accent'>app</span>",
      "hero.sub": "Rent cars between private owners and share rides with verified carpooling, with more income for owners, lower costs for drivers and everything from your phone.",
      "store.appstore.sub": "Download on the", "store.play.sub": "Get it on",
      "hero.trust1": "Verified identity", "hero.trust2": "Payments protected in escrow",
      "metric1": "Downloads in Lima", "metric2": "Average rating", "metric3": "Verified profiles", "metric4": "Districts covered",
      "feat.eyebrow": "Features", "feat.title": "Everything you need, in your pocket",
      "r1.tag": "01 · Peer-to-peer rental", "r1.title": "Rent the perfect car, close to you",
      "r1.desc": "Browse cars from verified owners by area, model and price, book with a calendar and sign the digital contract in seconds, with no paperwork or middlemen.",
      "r1.li1": "Digital contract with biometric signature", "r1.li2": "Payments held in escrow until the car is returned", "r1.li3": "Telemetry and damage reports included",
      "phone1.title": "Catalog near you", "phone1.sub": "Surco · 24 cars available",
      "phone1.meta1": "★ 4.9 · Automatic", "phone1.price1": "S/ 89/day", "phone1.meta2": "★ 4.8 · Manual", "phone1.price2": "S/ 75/day", "phone1.meta3": "★ 5.0 · Automatic", "phone1.price3": "S/ 92/day",
      "r2.tag": "02 · Carpooling", "r2.title": "Share your route, split the cost",
      "r2.desc": "Post your daily trip and ride only with verified people from your own university or workplace, and the app splits the cost automatically and pays you instantly, with no haggling.",
      "r2.li1": "Filter by community (UPC, PUCP and more)", "r2.li2": "Automatic cost splitting, no cash needed", "r2.li3": "Optional “women only” filter and live GPS",
      "phone2.title": "Live route", "phone2.seats": "3 seats", "phone2.origin": "From", "phone2.dest": "To",
      "r3.tag": "03 · Trust", "r3.title": "It's not a Facebook group, it's real trust",
      "r3.desc": "Everyone in the community goes through the same checks: ID, facial biometrics, driving record and two-way ratings, so you always know who you're dealing with.",
      "r3.li1": "KYC verification with ID and facial biometrics", "r3.li2": "Blue badge on every verified profile", "r3.li3": "Panic button and 24/7 support",
      "phone3.title": "Identity verification", "phone3.step": "Step {n} of 4", "phone3.i1": "ID front and back", "phone3.i2": "Facial biometrics", "phone3.i3": "Institutional email", "phone3.i4": "Driving record", "phone3.btn": "Continue",
      "how.eyebrow": "How it works", "how.title": "Get started in three steps",
      "how.s1t": "Download and verify", "how.s1d": "Get the app, upload your ID and complete the face scan, all in under 5 minutes.",
      "how.s2t": "Rent or list", "how.s2d": "Find a car nearby or put yours to work, book and sign everything from the app.",
      "how.s3t": "Move and share", "how.s3d": "Drive, post your route for carpooling and split the cost with verified passengers.",
      "test.eyebrow": "Testimonials", "test.title": "Voices from the community",
      "test.q1": "“My Yaris paid its own installments, and with the facial verification and digital contract I have a peace of mind no group ever gave me.”", "test.r1": "Owner · Surco",
      "test.q2": "“Finally a place where I know the driver studies at my university, rides arrive on time and my mom can see my live location.”", "test.r2": "Passenger · UPC",
      "test.q3": "“I rented cheaply and recovered almost everything by posting seats on my trips to the office, and the cost splitting is automatic and hassle-free.”", "test.r3": "Driver · San Borja",
      "faq.eyebrow": "Frequently asked questions", "faq.title": "Everything you need to know",
      "faq.desc": "We answer the most common questions about safety, payments and how the app works.",
      "faq.q1": "How does escrow payment work?", "faq.a1": "The rental money is held in an escrow account until the owner confirms the car was returned in good condition, so both sides stay protected at all times.",
      "faq.q2": "What is KYC verification with an ID?", "faq.a2": "KYC (Know Your Customer) verifies each user's identity by scanning their ID in four steps: front, back, selfie and automatic validation, and approved profiles show a blue badge.",
      "faq.q3": "Can I filter carpooling for women only?", "faq.a3": "Yes, in the safety section you can turn on the “Women only” filter, which limits your trips to verified female drivers and passengers, and you can also filter by school.",
      "faq.q4": "What payment methods do you accept?", "faq.a4": "We accept Yape, Plin, Visa, Mastercard and bank transfer, and every payment stays in escrow until the service is confirmed complete.",
      "cta.title": "Download WheelsPe<br><span class='wp-cta-accent'>Free</span>", "cta.sub": "Create your account in 2 minutes, verify your identity and join Peru's shared mobility community.",
      "footer.features": "Features", "footer.how": "How it works", "footer.faq": "FAQ", "footer.privacy": "Privacy", "footer.copy": "© 2025 WheelsPe · Lima, Peru", "footer.proj": "MOVEO Project · UPC"
    }
  };
  let curLang = 'en';
  try { curLang = localStorage.getItem('wp-lang') || 'en'; } catch (e) {}
  let verifStep = 1; // current step shown in the verification mockup (1..4), driven by the wheel
  const renderStep = () => {
    const el = $('.wp-verif-step');
    if (!el) return;
    const tpl = (I18N[curLang] || I18N.en)['phone3.step'];
    if (tpl) el.textContent = tpl.replace('{n}', verifStep);
  };
  const setLang = l => {
    if (!I18N[l]) l = 'en';
    curLang = l;
    document.documentElement.lang = l;
    try { localStorage.setItem('wp-lang', l); } catch (e) {}
    const dict = I18N[l];
    $$('[data-i18n]').forEach(el => { const v = dict[el.dataset.i18n]; if (v != null) el.textContent = v; });
    $$('[data-i18n-html]').forEach(el => { const v = dict[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v; });
    $$('.wp-lang-label').forEach(el => el.textContent = l.toUpperCase());
    renderStep();
  };
  $$('.wp-lang').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    setLang(curLang === 'es' ? 'en' : 'es');
  }));
  setLang(curLang);

  // cursor glow — a clipped layer inside each dark section, lit only under the pointer
  const glowLayers = $$('.wp-glow-layer');
  if (glowLayers.length) {
    let raf = null, lastE = null;
    const paint = () => {
      raf = null;
      const e = lastE; if (!e) return;
      const dark = e.target && e.target.closest && e.target.closest('.wp-dark');
      glowLayers.forEach(l => { if (l.parentElement !== dark) l.style.opacity = '0'; });
      if (dark) {
        const layer = dark.querySelector(':scope > .wp-glow-layer');
        if (layer) {
          const r = dark.getBoundingClientRect();
          layer.style.setProperty('--gx', (e.clientX - r.left) + 'px');
          layer.style.setProperty('--gy', (e.clientY - r.top) + 'px');
          layer.style.opacity = '1';
        }
      }
    };
    window.addEventListener('pointermove', e => { lastE = e; if (!raf) raf = requestAnimationFrame(paint); }, { passive: true });
    document.addEventListener('mouseleave', () => glowLayers.forEach(l => l.style.opacity = '0'));
  }

  // mobile menu
  const menu = $('.wp-mobile');
  const dots = $('.wp-dots');
  if (menu) {
    // the dots button morphs into an X while the menu is open (replaces the duplicate logo header)
    const dotsIco = dots && dots.querySelector('.wp-dots-ico');
    const xIco = dots && dots.querySelector('.wp-x-ico');
    const setIcon = isOpen => {
      if (dotsIco) dotsIco.style.display = isOpen ? 'none' : 'flex';
      if (xIco) xIco.style.display = isOpen ? 'block' : 'none';
      if (dots) dots.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    };
    const open = () => { menu.style.opacity = '1'; menu.style.pointerEvents = 'all'; menu.style.transform = 'translateX(-50%) translateY(0)'; menu.dataset.open = '1'; setIcon(true); };
    const close = () => { menu.style.opacity = '0'; menu.style.pointerEvents = 'none'; menu.style.transform = 'translateX(-50%) translateY(-10px)'; menu.dataset.open = ''; setIcon(false); };
    const toggle = () => { menu.dataset.open ? close() : open(); };
    $$('a', menu).forEach(a => a.addEventListener('click', close));
    // cerrar al tocar fuera de la tarjeta (sin contar el botón de 3 puntos)
    document.addEventListener('click', e => {
      if (!menu.dataset.open) return;
      if (menu.contains(e.target) || (dots && dots.contains(e.target))) return;
      close();
    });
    window.wpOpenMenu = open;
    window.wpCloseMenu = close;
    window.wpToggleMenu = toggle;
  }

  // faq accordion
  $$('.wp-faqq').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.wp-faq');
      const open = item.hasAttribute('data-open');
      $$('.wp-faq[data-open]').forEach(o => {
        o.removeAttribute('data-open');
        const a = o.querySelector('.wp-faqa'); a.style.maxHeight = '0'; a.style.padding = '0 22px';
        const c = o.querySelector('.wp-chev'); c.style.transform = 'rotate(0)'; c.style.background = '#EAE7DE'; c.style.color = '#15171C'; c.textContent = '+';
      });
      if (!open) {
        item.setAttribute('data-open', '1');
        const a = item.querySelector('.wp-faqa'); a.style.maxHeight = '260px'; a.style.padding = '0 22px 20px';
        const c = item.querySelector('.wp-chev'); c.style.transform = 'rotate(45deg)'; c.style.background = '#2B54C9'; c.style.color = '#fff';
      }
    });
  });

  // verification mockup — a 3D picker wheel (iOS-style): you see the row above
  // (already checked), the centered one being checked, and the one below (upcoming)
  const wheel = $('.wp-wheel');
  if (wheel) {
    const STEP = 30, R = 120;
    // clone the 4 steps around the cylinder so the neighbours are always populated
    const base = $$('.wp-verif-item', wheel);
    for (let r = 1; r < 3; r++) base.forEach(it => wheel.appendChild(it.cloneNode(true)));
    const faces = $$('.wp-verif-item', wheel);
    const N = faces.length;
    faces.forEach((f, i) => { f.style.transform = 'rotateX(' + (-i * STEP) + 'deg) translateZ(' + R + 'px)'; });
    const at = i => faces[((i % N) + N) % N];
    let idx = 0, rot = 0;
    const HOLD = 1100, ROLL = 650;
    at(idx - 1).classList.add('is-done'); // start with the row above already checked
    const run = () => {
      at(idx - 2).classList.remove('is-done', 'is-active'); // rolled out the top
      const front = at(idx);
      verifStep = (idx % 4) + 1; renderStep(); // keep "Paso N de 4" in sync with the wheel
      front.classList.add('is-active');
      setTimeout(() => front.classList.add('is-done'), 400);
      setTimeout(() => {
        front.classList.remove('is-active'); // becomes the checked row above
        idx++; rot += STEP;
        wheel.style.transform = 'rotateX(' + rot + 'deg)';
        setTimeout(run, ROLL);
      }, HOLD);
    };
    run();
  }

  // scroll reveal — up (fade+rise) and slide (framer-style left/right)
  const rafThrottle = fn => { let q = false; return () => { if (q) return; q = true; requestAnimationFrame(() => { q = false; fn(); }); }; };
  const onScroll = fn => { const t = rafThrottle(fn); window.addEventListener('scroll', t, { passive: true }); document.addEventListener('scroll', t, { passive: true, capture: true }); };

  const revealEls = $$('.wp-up, .wp-slide, .wp-hero-anim > *');
  revealEls.forEach(el => { el.style.filter = 'blur(4px)'; el.style.transition += ', filter .6s cubic-bezier(.22,.61,.36,1)'; });
  const show = el => { el.style.opacity = '1'; el.style.transform = 'none'; el.style.filter = 'none'; el.dataset.shown = '1'; };
  const checkReveal = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    revealEls.forEach(el => {
      if (el.dataset.shown) return;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) show(el);
    });
  };

  // staggered blur-in for card grids (steps, testimonials)
  const staggers = $$('.wp-stagger');
  const showStagger = c => {
    c.dataset.shown = '1';
    Array.from(c.children).forEach((ch, i) => { ch.style.transitionDelay = (i * 0.1) + 's'; ch.style.opacity = '1'; ch.style.transform = 'none'; ch.style.filter = 'none'; });
  };
  const checkStagger = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    staggers.forEach(c => {
      if (c.dataset.shown) return;
      const r = c.getBoundingClientRect();
      if (r.top < vh * 0.86 && r.bottom > 0) showStagger(c);
    });
  };

  // paint the "how it works" step circles one by one when the section enters view
  const stepsEl = $('.wp-steps');
  const stepNums = $$('.wp-steps .wp-step-num');
  let stepsPainted = false;
  const checkSteps = () => {
    if (stepsPainted || !stepsEl) return;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const r = stepsEl.getBoundingClientRect();
    if (r.top < vh * 0.82 && r.bottom > 0) {
      stepsPainted = true;
      stepNums.forEach((n, i) => setTimeout(() => n.classList.add('is-painted'), 250 + i * 380));
    }
  };

  const tick = () => { checkReveal(); checkStagger(); checkSteps(); };
  onScroll(tick);
  window.addEventListener('resize', rafThrottle(tick));
  tick();
  [120, 300, 600, 1000].forEach(t => setTimeout(tick, t));


  // count up
  const ease = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  const animate = el => {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const dec = parseInt(el.dataset.decimals || '0');
    const isK = el.dataset.format === 'k';
    const dur = 2000; const s = performance.now();
    const tick = now => {
      const p = Math.min((now - s) / dur, 1); const v = ease(p) * target;
      if (isK) { const k = v / 1000; el.textContent = (k >= 1 ? k.toFixed(1) : k.toFixed(2)).replace(/\.0$/, '') + 'K+'; }
      else { el.textContent = v.toFixed(dec) + suffix; }
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  let started = false;
  const band = $('.wp-metrics');
  const startCount = () => { if (!started) { started = true; $$('.wp-count', band).forEach(animate); } };
  if (band) {
    const checkBand = () => {
      if (started) return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const r = band.getBoundingClientRect();
      if (r.top < vh * 0.85 && r.bottom > 0) startCount();
    };
    onScroll(checkBand);
    checkBand();
    [120, 300, 600, 1000].forEach(t => setTimeout(checkBand, t));
  }

  // active nav + nav shadow
  const ids = ['inicio', 'funciones', 'como-funciona', 'faq'];
  const links = $$('.wp-navlink');
  const nav = $('.wp-nav');
  const navwrap = $('.wp-navwrap'), navactions = $('.wp-navactions');
  const navItems = [navwrap, navactions].filter(Boolean);
  const isMobile = () => window.matchMedia('(max-width:920px)').matches;
  let pastTop = false, hovering = false;
  const renderNav = () => {
    const mini = pastTop && !hovering && !isMobile();
    if ((nav.dataset.mini === '1') === mini) return;
    nav.dataset.mini = mini ? '1' : '';
    if (mini) {
      // collapsing: fade the content out, then let the pill shrink
      navItems.forEach(el => { el.style.transition = 'opacity .14s ease'; el.style.opacity = '0'; });
      document.body.classList.add('wp-mini');
    } else {
      // expanding: keep the content invisible while the bar widens, reveal it after
      navItems.forEach(el => { el.style.transition = 'opacity .25s ease .2s'; el.style.opacity = '0'; });
      document.body.classList.remove('wp-mini');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        navItems.forEach(el => { el.style.opacity = '1'; });
      }));
    }
  };
  const setShrink = on => { pastTop = on; renderNav(); };
  const canHover = window.matchMedia('(hover:hover)').matches;
  // hover-device mobile: open on enter, close shortly after the pointer leaves both the pill and the dropdown
  let menuHoverTimer = null;
  const cancelMenuClose = () => { if (menuHoverTimer) { clearTimeout(menuHoverTimer); menuHoverTimer = null; } };
  const scheduleMenuClose = () => { cancelMenuClose(); menuHoverTimer = setTimeout(() => { if (window.wpCloseMenu) window.wpCloseMenu(); }, 160); };
  nav.addEventListener('mouseenter', () => {
    if (isMobile()) { if (canHover && window.wpOpenMenu) { cancelMenuClose(); window.wpOpenMenu(); } return; }
    hovering = true; renderNav();
  });
  nav.addEventListener('mouseleave', () => {
    if (isMobile()) { if (canHover) scheduleMenuClose(); return; }
    hovering = false; renderNav();
  });
  // keep the menu open while the pointer is over the dropdown; the 160ms timer bridges the gap from the pill
  if (menu) {
    menu.addEventListener('mouseenter', () => { if (canHover && isMobile()) cancelMenuClose(); });
    menu.addEventListener('mouseleave', () => { if (canHover && isMobile()) scheduleMenuClose(); });
  }
  if (dots) dots.addEventListener('click', () => {
    if (isMobile()) { cancelMenuClose(); if (window.wpToggleMenu) window.wpToggleMenu(); }
    else { hovering = true; renderNav(); }
  });
  const sentinel = document.getElementById('wp-top-sentinel');
  if (sentinel) {
    const sio = new IntersectionObserver(es => {
      es.forEach(e => setShrink(!e.isIntersecting && !isMobile()));
    }, { threshold: 0 });
    sio.observe(sentinel);
  }

  const heroRef = document.getElementById('inicio');
  const upd = () => {
    const scrolled = heroRef ? -heroRef.getBoundingClientRect().top : 0;
    if (!isMobile()) setShrink(scrolled > 90);
    else setShrink(false);
    let cur = ids[0];
    ids.forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 150) cur = id; });
    links.forEach(a => { const on = a.dataset.target === cur; a.style.color = on ? '#2B54C9' : '#696E76'; a.style.fontWeight = on ? '600' : '500'; });
    if (nav) {
      const base = 'inset 0 1px 0 rgba(255,255,255,.75),inset 0 -1px 0 rgba(21,23,28,.04)';
      nav.style.boxShadow = scrolled > 8
        ? '0 12px 38px rgba(21,23,28,.14),' + base
        : '0 8px 30px rgba(21,23,28,.08),' + base;
      nav.style.background = scrolled > 8 ? 'rgba(250,250,248,.62)' : 'rgba(250,250,248,.5)';
    }
  };
  onScroll(upd);
  window.addEventListener('resize', rafThrottle(upd));
  upd();
});