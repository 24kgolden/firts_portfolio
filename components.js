/* ═══════════════════════════════════════════
   COMPONENTS.JS
   Injects shared Nav & Footer into every page.
   All nav links use .html paths for multi-page routing.
═══════════════════════════════════════════ */

(function injectComponents() {

  /* ── Active page detection ── */
  const page = location.pathname.split('/').pop().replace('.html','') || 'index';

  function isActive(href) {
    const target = href.replace('.html','').replace('index','');
    const cur    = page === 'index' ? '' : page;
    return target === cur || (cur === '' && href === 'index.html');
  }

  /* ── NAV ── */
  const NAV_LINKS = [
    { href:'about.html',    i18n:'nav_about',    label:'About'     },
    { href:'timeline.html', i18n:'nav_timeline', label:'Timeline'  },
    { href:'certs.html',    i18n:'nav_certs',    label:'Certs'     },
    { href:'projects.html', i18n:'nav_projects', label:'Projects'  },
    { href:'skills.html',   i18n:'nav_skills',   label:'Skills'    },
    { href:'github.html',   i18n:'nav_github',   label:'GitHub'    },
    { href:'contact.html',  i18n:'nav_contact',  label:'Contact'   },
  ];

  const desktopLinks = NAV_LINKS.map((l, i) =>
    `<li><a href="${l.href}" class="${isActive(l.href)?'active':''}" data-i18n="${l.i18n}">${l.label}</a></li>`
  ).join('');

  const overlayLinks = NAV_LINKS.map((l, i) =>
    `<a href="${l.href}" class="menu-link">
      <span class="ml-n">0${i+1}</span>
      <span class="ml-t" data-i18n="${l.i18n}">${l.label}</span>
      <span class="ml-arr">→</span>
    </a>`
  ).join('');

  const footerLinks = NAV_LINKS.map(l =>
    `<a href="${l.href}" data-i18n="${l.i18n}">${l.label}</a>`
  ).join('');

  const NAV_HTML = `
  <nav class="nav" id="mainNav">
    <a href="index.html" class="nav-logo">ER<span class="accent">.</span></a>
    <div class="nav-badge">
      <span class="badge-dot"></span>
      <span data-i18n="nav_status">Studying · Building · Learning</span>
    </div>
    <ul class="nav-links" id="desktopLinks">${desktopLinks}</ul>
    <div class="nav-right">
      <div class="lang-pill" id="langPill" role="button" tabindex="0" aria-label="Toggle language">
        <span class="lp-track" id="lpTrack"></span>
        <span class="lp-opt lp-active" id="lpEN" data-l="en">EN</span>
        <span class="lp-opt" id="lpES" data-l="es">ES</span>
      </div>
      <button class="menu-btn" id="menuBtn" aria-label="Open menu">
        <span class="menu-btn-text" data-i18n="nav_menu">MENU</span>
        <span class="menu-btn-icon"><span></span><span></span></span>
      </button>
    </div>
  </nav>

  <div class="menu-overlay" id="menuOverlay">
    <div class="menu-overlay-inner">
      <button class="menu-close" id="menuClose" aria-label="Close menu">
        <span class="mc-icon"><span></span><span></span></span>
        <span data-i18n="nav_close">CLOSE</span>
      </button>
      <nav class="menu-nav">${overlayLinks}</nav>
      <div class="menu-footer">
        <div class="menu-socials">
          <a href="https://github.com/24kgolden" target="_blank" rel="noopener">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/edwar-ram%C3%ADrez-11b995270/" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href="https://x.com/666_serpico" target="_blank" rel="noopener">X / Twitter ↗</a>
        </div>
        <p class="menu-copy">© <span id="yr2"></span> Edwar Ramírez</p>
      </div>
    </div>
  </div>`;

  /* ── FOOTER ── */
  const FOOTER_HTML = `
  <footer class="footer">
    <div class="wrap footer-inner">
      <div class="footer-top">
        <a href="index.html" class="nav-logo">ER<span class="accent">.</span></a>
        <nav class="footer-links">${footerLinks}</nav>
        <div class="footer-soc">
          <a href="https://github.com/24kgolden" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/edwar-ram%C3%ADrez-11b995270/" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a>
          <a href="https://x.com/666_serpico" target="_blank" rel="noopener"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="mailto:edwarddelcastillo4@gmail.com"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
      <div class="footer-div"></div>
      <div class="footer-bot">
        <p>© <span id="yr"></span> Edwar Ramírez. <span data-i18n="f_rights">All rights reserved.</span></p>
        <p>☕ <span data-i18n="f_made">Built with coffee &amp; code</span> <span class="accent">♥</span></p>
      </div>
    </div>
  </footer>`;

  /* ── Inject ── */
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;

  const footEl = document.getElementById('footer-placeholder');
  if (footEl) footEl.outerHTML = FOOTER_HTML;

  /* ── Year ── */
  const y = new Date().getFullYear();
  ['yr','yr2'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = y; });

})();
