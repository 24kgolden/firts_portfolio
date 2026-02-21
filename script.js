/* ══════════════════════════════════════════════
   EDWAR RAMÍREZ — Portfolio Scripts
   Author: Edwar Ramírez
   ══════════════════════════════════════════════ */

'use strict';

// ══════════════════════════════════
// 1. LANGUAGE SYSTEM
// ══════════════════════════════════
let currentLang = 'en';

const FORM_PLACEHOLDERS = {
  en: {
    name:    'Your Name',
    email:   'Your Email',
    subject: 'Subject',
    message: 'Your Message...'
  },
  es: {
    name:    'Tu Nombre',
    email:   'Tu Correo',
    subject: 'Asunto',
    message: 'Tu Mensaje...'
  }
};

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Toggle button states
  document.getElementById('btnEN').classList.toggle('active', lang === 'en');
  document.getElementById('btnES').classList.toggle('active', lang === 'es');
  document.getElementById('btnEN').setAttribute('aria-pressed', String(lang === 'en'));
  document.getElementById('btnES').setAttribute('aria-pressed', String(lang === 'es'));

  // Update all i18n elements
  document.querySelectorAll('[data-en]').forEach(el => {
    const txt = el.getAttribute('data-' + lang);
    if (txt) el.textContent = txt;
  });

  // Update form placeholders
  const ph = FORM_PLACEHOLDERS[lang];
  const ids = ['inp-name', 'inp-email', 'inp-subject', 'inp-message'];
  const keys = ['name', 'email', 'subject', 'message'];
  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = ph[keys[i]];
  });

  // Page title
  document.title = lang === 'es'
    ? 'Edwar Ramírez — Ingeniero de Software'
    : 'Edwar Ramírez — Software Engineer';

  // Restart typewriter with new language
  startTyping(lang);

  // Fade transition
  document.body.style.transition = 'opacity 0.15s';
  document.body.style.opacity   = '0.85';
  setTimeout(() => { document.body.style.opacity = '1'; }, 150);
}

// ══════════════════════════════════
// 2. TYPEWRITER EFFECT
// ══════════════════════════════════
const TYPED_LINES = {
  en: [
    'Software Engineer',
    'Backend Developer',
    'BJJ Blue Belt in Code',
    'Dragon in the Machine',
    'Coffee Powered Dev'
  ],
  es: [
    'Ingeniero de Software',
    'Desarrollador Backend',
    'Cinta Azul en Código',
    'Dragón en la Máquina',
    'Dev Impulsado por Café'
  ]
};

let typeIdx    = 0;
let charIdx    = 0;
let deleting   = false;
let typeTimer  = null;

function startTyping(lang) {
  clearTimeout(typeTimer);
  typeIdx  = 0;
  charIdx  = 0;
  deleting = false;
  typeTick(lang || currentLang);
}

function typeTick(lang) {
  const lines   = TYPED_LINES[lang] || TYPED_LINES.en;
  const el      = document.getElementById('hero-typed');
  if (!el) return;

  const current = lines[typeIdx % lines.length];

  if (!deleting) {
    charIdx++;
    el.textContent = current.slice(0, charIdx);
    if (charIdx >= current.length) {
      deleting  = true;
      typeTimer = setTimeout(() => typeTick(lang), 1800);
      return;
    }
  } else {
    charIdx--;
    el.textContent = current.slice(0, charIdx);
    if (charIdx <= 0) {
      deleting  = false;
      typeIdx++;
      typeTimer = setTimeout(() => typeTick(lang), 300);
      return;
    }
  }

  typeTimer = setTimeout(() => typeTick(lang), deleting ? 45 : 85);
}

// ══════════════════════════════════
// 3. ANIMATED STAT COUNTERS
// ══════════════════════════════════
function animateCount(el, target, suffix, duration) {
  let start = 0;
  const step = target / (duration / 16);

  const tick = () => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start) + suffix;
    if (start < target) requestAnimationFrame(tick);
    else el.textContent = target + suffix;
  };

  requestAnimationFrame(tick);
}

function initStatCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.fcs-val').forEach(el => {
        const raw = el.textContent.trim();
        if (raw === '∞') return;
        const num = parseInt(raw, 10);
        if (!isNaN(num)) {
          const suffix = raw.replace(String(num), '');
          animateCount(el, num, suffix, 1200);
        }
      });
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.fighter-card').forEach(c => obs.observe(c));
}

// ══════════════════════════════════
// 4. GLITCH LOGO EFFECT
// ══════════════════════════════════
function initGlitchLogo() {
  const logoEl = document.querySelector('.logo-text');
  if (!logoEl) return;

  function glitch() {
    logoEl.classList.add('glitch');
    setTimeout(() => logoEl.classList.remove('glitch'), 320);
    setTimeout(glitch, Math.random() * 5000 + 3000);
  }

  setTimeout(glitch, 2000);
}

// ══════════════════════════════════
// 5. SCROLL PROGRESS BAR
// ══════════════════════════════════
function initScrollProgress() {
  const bar = document.getElementById('scroll-bar');
  if (!bar) return;

  function update() {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
}

// ══════════════════════════════════
// 6. SPOTLIGHT / MOUSE FOLLOW GLOW
// ══════════════════════════════════
function initSpotlight() {
  const canvas = document.getElementById('spotCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let spx  = window.innerWidth  / 2;
  let spy  = window.innerHeight / 2;
  let tspx = spx;
  let tspy = spy;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  document.addEventListener('mousemove', e => {
    tspx = e.clientX;
    tspy = e.clientY;
  });

  function draw() {
    spx += (tspx - spx) * 0.08;
    spy += (tspy - spy) * 0.08;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const grd = ctx.createRadialGradient(spx, spy, 0, spx, spy, 380);
    grd.addColorStop(0,   'rgba(200,147,58,0.055)');
    grd.addColorStop(0.4, 'rgba(232,84,26,0.02)');
    grd.addColorStop(1,   'transparent');

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(draw);
  }

  draw();
}

// ══════════════════════════════════
// 7. BG CANVAS — animated glow
// ══════════════════════════════════
function initBgCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let t = 0;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Bottom radial glow
    const grd = ctx.createRadialGradient(
      canvas.width * .5, canvas.height, 0,
      canvas.width * .5, canvas.height, canvas.height * .9
    );
    grd.addColorStop(0, `rgba(200,147,58,${0.04 + Math.sin(t * .02) * .02})`);
    grd.addColorStop(.5, `rgba(232,84,26,${0.02 + Math.sin(t * .015) * .01})`);
    grd.addColorStop(1, 'transparent');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Left side accent glow
    const gr2 = ctx.createRadialGradient(0, canvas.height * .4, 0, 0, canvas.height * .4, 400);
    gr2.addColorStop(0, `rgba(200,147,58,${0.05 + Math.sin(t * .018) * .02})`);
    gr2.addColorStop(1, 'transparent');
    ctx.fillStyle = gr2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    t++;
    requestAnimationFrame(draw);
  }

  draw();
}

// ══════════════════════════════════
// 8. EMBER PARTICLES
// ══════════════════════════════════
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 50; i++) {
    const p    = document.createElement('div');
    p.className = 'particle';
    const size  = Math.random() * 4 + 1;
    const color = Math.random() > 0.5 ? '#e8541a' : '#c8933a';

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 10 + 6}s;
      animation-delay: ${Math.random() * 10}s;
      --drift: ${(Math.random() - 0.5) * 160}px;
      background: ${color};
    `;

    container.appendChild(p);
  }
}

// ══════════════════════════════════
// 9. HERO PARALLAX
// ══════════════════════════════════
function initParallax() {
  const heroDragon = document.querySelector('.hero-dragon-bg');
  if (!heroDragon) return;

  window.addEventListener('mousemove', e => {
    const px = (e.clientX / window.innerWidth  - 0.5) * 30;
    const py = (e.clientY / window.innerHeight - 0.5) * 20;
    heroDragon.style.transform = `translateY(-50%) translate(${px}px, ${py}px)`;
  }, { passive: true });
}

// ══════════════════════════════════
// 10. MAGNETIC BUTTONS
// ══════════════════════════════════
function initMagneticButtons() {
  const selector = '.btn-gold, .btn-ghost-gold, .nav-cta, .btn-fire';

  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left  - r.width  / 2;
      const y = e.clientY - r.top   - r.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ══════════════════════════════════
// 11. BACK TO TOP BUTTON
// ══════════════════════════════════
function initBackToTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
}

// ══════════════════════════════════
// 12. AMBIENT AUDIO (Web Audio API)
// ══════════════════════════════════
function initAudio() {
  const btn = document.getElementById('audio-btn');
  if (!btn) return;

  let audioCtx    = null;
  let isAudioOn   = false;
  let droneGain   = null;

  function startAudio() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // Deep forge drone
    const droneOsc  = audioCtx.createOscillator();
    droneOsc.type   = 'sawtooth';
    droneOsc.frequency.value = 55;

    droneGain = audioCtx.createGain();
    droneGain.gain.value = 0;

    const lp       = audioCtx.createBiquadFilter();
    lp.type        = 'lowpass';
    lp.frequency.value = 200;

    droneOsc.connect(lp).connect(droneGain).connect(audioCtx.destination);
    droneOsc.start();

    // Fire crackle (white noise)
    const bufLen = audioCtx.sampleRate * 2;
    const buf    = audioCtx.createBuffer(1, bufLen, audioCtx.sampleRate);
    const data   = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) data[i] = (Math.random() * 2 - 1) * 0.18;

    const crackleNode = audioCtx.createBufferSource();
    crackleNode.buffer = buf;
    crackleNode.loop   = true;

    const crackleFilter       = audioCtx.createBiquadFilter();
    crackleFilter.type        = 'bandpass';
    crackleFilter.frequency.value = 800;
    crackleFilter.Q.value     = 0.5;

    const crackleGain         = audioCtx.createGain();
    crackleGain.gain.value    = 0.06;

    crackleNode.connect(crackleFilter).connect(crackleGain).connect(audioCtx.destination);
    crackleNode.start();

    // Fade in
    droneGain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 2);
  }

  function stopAudio() {
    if (!audioCtx) return;
    droneGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1);
    setTimeout(() => {
      audioCtx.close();
      audioCtx = null;
    }, 1200);
  }

  btn.addEventListener('click', () => {
    isAudioOn = !isAudioOn;
    btn.classList.toggle('on', isAudioOn);
    btn.setAttribute('aria-pressed', String(isAudioOn));
    btn.innerHTML = isAudioOn
      ? '<i class="fas fa-volume-up" aria-hidden="true"></i>'
      : '<i class="fas fa-volume-mute" aria-hidden="true"></i>';

    if (isAudioOn) startAudio();
    else stopAudio();
  });
}

// ══════════════════════════════════
// 13. SECTION REVEAL — Intersection Observer
// ══════════════════════════════════
function initSectionReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    }),
    { threshold: 0.07 }
  );

  document.querySelectorAll('.section').forEach(s => obs.observe(s));
}

// ══════════════════════════════════
// 14. ACTIVE NAV LINK ON SCROLL
// ══════════════════════════════════
function initActiveNav() {
  const sections = document.querySelectorAll('.section[id]');
  const links    = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });

    links.forEach(a => {
      const isActive = a.getAttribute('href') === '#' + current;
      a.classList.toggle('active', isActive);
    });
  }, { passive: true });
}

// ══════════════════════════════════
// 15. DRAGON CURSOR
// ══════════════════════════════════
function initDragonCursor() {
  const dragonEl = document.getElementById('dragon-cursor');
  if (!dragonEl) return;

  let mx = window.innerWidth  / 2;
  let my = window.innerHeight / 2;
  let dx = mx, dy = my;
  let lastX = mx, lastY = my;
  let trailCounter = 0;

  function spawnTrail() {
    const trail = document.createElement('div');
    trail.className  = 'cursor-trail';
    trail.style.left = dx + 'px';
    trail.style.top  = dy + 'px';
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 500);
  }

  function animate() {
    dx += (mx - dx) * 0.18;
    dy += (my - dy) * 0.18;

    dragonEl.style.left = dx + 'px';
    dragonEl.style.top  = dy + 'px';

    const vx = mx - lastX;
    const vy = my - lastY;

    if (Math.abs(vx) > 0.5 || Math.abs(vy) > 0.5) {
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);
      const svg   = dragonEl.querySelector('svg');
      const scale = dragonEl.classList.contains('hovering') ? 'scale(1.5) ' : '';
      svg.style.transform = `${scale}rotate(${angle}deg)`;
    }

    lastX = dx;
    lastY = dy;
    requestAnimationFrame(animate);
  }

  animate();

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    trailCounter++;
    if (trailCounter % 2 === 0) spawnTrail();
  });

  document.addEventListener('click', e => {
    const r       = document.createElement('div');
    r.className   = 'cursor-ripple';
    r.style.left  = e.clientX + 'px';
    r.style.top   = e.clientY + 'px';
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 500);
  });

  // Hover state
  const hoverSelector = 'a, button, .skill-panel, .proj-main-card, .proj-side-card, .dojo-tag, .lang-btn';
  document.querySelectorAll(hoverSelector).forEach(el => {
    el.addEventListener('mouseenter', () => dragonEl.classList.add('hovering'));
    el.addEventListener('mouseleave', () => dragonEl.classList.remove('hovering'));
  });
}

// ══════════════════════════════════
// 16. CONTACT FORM HANDLING
// ══════════════════════════════════
function initContactForm() {
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const feedback  = document.getElementById('form-feedback');
  if (!form) return;

  const MSG = {
    en: {
      success: '✓ Message sent! I\'ll reply soon.',
      error:   '✗ Something went wrong. Try emailing directly.',
      sending: 'Sending...',
      send:    'Send Challenge'
    },
    es: {
      success: '✓ ¡Mensaje enviado! Te responderé pronto.',
      error:   '✗ Algo salió mal. Intenta enviar correo directamente.',
      sending: 'Enviando...',
      send:    'Enviar Desafío'
    }
  };

  function showFeedback(type, msg) {
    feedback.className = `form-feedback ${type}`;
    feedback.textContent = msg;
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const lang = currentLang;
    const m    = MSG[lang] || MSG.en;

    // Basic validation
    let valid = true;
    form.querySelectorAll('[required]').forEach(el => {
      if (!el.value.trim()) {
        el.classList.add('input-error');
        valid = false;
      } else {
        el.classList.remove('input-error');
      }
    });
    if (!valid) return;

    // Disable submit
    submitBtn.disabled      = true;
    submitBtn.querySelector('span').textContent = m.sending;

    try {
      const data = new FormData(form);
      const res  = await fetch(form.action, {
        method: 'POST',
        body:   data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        showFeedback('success', m.success);
        form.reset();
      } else {
        showFeedback('error', m.error);
      }
    } catch {
      showFeedback('error', m.error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = m.send;
    }
  });

  // Clear error state on input
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => el.classList.remove('input-error'));
  });
}

// ══════════════════════════════════
// INIT — Run everything on DOMContentLoaded
// ══════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  startTyping('en');
  initGlitchLogo();
  initScrollProgress();
  initBgCanvas();
  initSpotlight();
  initParticles();
  initParallax();
  initMagneticButtons();
  initBackToTop();
  initAudio();
  initSectionReveal();
  initActiveNav();
  initDragonCursor();
  initStatCounters();
  initContactForm();
});
