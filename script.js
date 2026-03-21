/* ═══════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════ */
const LANG = {
  en: {
    nav_status:"Studying · Building · Learning",
    nav_github:"GitHub",
    gh_title:"GitHub Activity", gh_view:"View Profile",
    gh_repos:"Recent Repositories", gh_commits:"Recent Commits",
    gh_loading:"Fetching from GitHub...", gh_no_desc:"No description.",
    gh_error:"Could not load GitHub data.",
    gh_repos_lbl:"Repos", gh_followers_lbl:"Followers",
    gh_following_lbl:"Following", gh_stars_lbl:"Stars",
    nav_projects:"Projects", nav_skills:"Skills", nav_contact:"Contact",
    nav_menu:"MENU", nav_close:"CLOSE",
    hero_available:"Available for opportunities",
    btn_projects:"View Projects", btn_contact:"Get In Touch",
    hero_scroll:"Scroll", hero_sub_static:"Backend Developer",
    t_whoami:"Edwar Ramírez — Backend Developer",
    about_title:"About Me", about_hi:"I'm Edwar.",
    about_p1:`Software Engineering student in my fifth semester, passionate about <span class="accent">backend development</span> and building clean, efficient systems from the ground up.`,
    about_p2:`I push my limits through university events and external competitions. I believe in <span class="accent">learning by building</span> — one project at a time.`,
    stat_sem:"Semesters", stat_proj:"Projects", stat_coffee:"Coffees",
    now_title:"Currently", now_1:"Studying Software Engineering",
    now_2:"Building Java projects", now_3:"Learning Spring Boot deeply",
    now_4:"Open to opportunities",
    tl_title:"Timeline", tl_intro:"My journey — education, milestones & achievements.",
    tl_cur:"Current",
    tl1_h:"Software Engineering · 5th Semester", tl1_org:"Universidad",
    tl1_d:"Deepening backend architecture, databases, and software design patterns. Actively competing in academic events and hackathons.",
    tl2_h:"Hackathon Tech Tiger Code 2025", tl2_org:"External Competition",
    tl2_d:"Certificate of participation competing to build innovative tech solutions under time pressure.",
    tl3_h:"Roles & Permissions System", tl3_org:"Personal Project",
    tl3_d:"Full role-based access control in Java — users, roles and granular permission management.",
    tl4_h:"Tech Fair — UTEG",
    tl4_d:"Certificate of participation showcasing academic and practical software development skills.",
    tl5_h:"Peluqueria Canina · CRUD App", tl5_org:"University Project",
    tl5_d:"First full CRUD desktop app for a canine grooming salon using Java and MySQL.",
    tl6_h:"Started Software Engineering", tl6_org:"Universidad · Semester 1",
    tl6_d:"First lines of code, first algorithms, first taste of building software.",
    certs_title:"Certifications", certs_earned:"Earned", certs_progress:"In Progress",
    c1:"Relational Databases", c2:"Tech Fair Participation — UTEG",
    c3:"Arduino", c4:"Deep Learning", c5:"Hackathon Tech Tiger Code 2025",
    cert_type:"Certification", cert_part:"Certificate of Participation", cert_course:"Course in Progress",
    cr1:"API Development with Spring Boot", cr2:"Spring Security",
    cr3:"Microservices with Spring Cloud", cr4:"Fullstack Java Web — JSP + JPA",
    proj_title:"Projects",
    p1_n:"Login Validator", p1_d:"Desktop login validation built with Java Swing. Authentication with clean dark UI and credential management.",
    p2_n:"Roles & Permissions", p2_d:"Role-based access control in Java. Manages users, roles and granular permissions with structured backend architecture.",
    p3_n:"Peluqueria Canina", p3_d:"Full CRUD desktop app for a canine grooming salon built in Java with MySQL backend.",
    p4_n:"Java Snippet",
    pl_proj:"Project", pl_stack:"Stack", pl_yr:"Year",
    sk_title:"Skills", sk_tools:"Tools & DevOps", sk_prof:"Proficiency",
    ct_title:"Contact", ct_hl:"Have a project in mind<br>or want to connect?",
    ct_sub:"I'm always open to new opportunities, collaborations, or just a good conversation about tech.",
    f_name:"Name", f_email:"Email", f_msg:"Message",
    f_ph_name:"John Doe", f_ph_msg:"Tell me about your project...", f_send:"Send Message",
    f_rights:"All rights reserved.", f_made:"Built with coffee & code",
    typing:["Backend Developer","Java Enthusiast","System Builder","Problem Solver","Coffee-Powered Coder"]
  },
  es: {
    nav_status:"Estudiando · Construyendo · Aprendiendo",
    nav_github:"GitHub",
    gh_title:"Actividad en GitHub", gh_view:"Ver Perfil",
    gh_repos:"Repositorios Recientes", gh_commits:"Commits Recientes",
    gh_loading:"Cargando desde GitHub...", gh_no_desc:"Sin descripción.",
    gh_error:"No se pudo cargar la información de GitHub.",
    gh_repos_lbl:"Repos", gh_followers_lbl:"Seguidores",
    gh_following_lbl:"Siguiendo", gh_stars_lbl:"Estrellas",
    nav_projects:"Proyectos", nav_skills:"Habilidades", nav_contact:"Contacto",
    nav_menu:"MENÚ", nav_close:"CERRAR",
    hero_available:"Disponible para oportunidades",
    btn_projects:"Ver Proyectos", btn_contact:"Contáctame",
    hero_scroll:"Desplazar", hero_sub_static:"Desarrollador Backend",
    t_whoami:"Edwar Ramírez — Desarrollador Backend",
    about_title:"Sobre mí", about_hi:"Soy Edwar.",
    about_p1:`Estudiante de Ingeniería en Software en mi quinto semestre, apasionado por el <span class="accent">desarrollo backend</span> y la construcción de sistemas limpios y eficientes.`,
    about_p2:`Supero mis límites en eventos universitarios y competencias externas. Creo en <span class="accent">aprender construyendo</span> — un proyecto a la vez.`,
    stat_sem:"Semestres", stat_proj:"Proyectos", stat_coffee:"Cafés",
    now_title:"Actualmente", now_1:"Estudiando Ingeniería en Software",
    now_2:"Construyendo proyectos Java", now_3:"Aprendiendo Spring Boot a fondo",
    now_4:"Abierto a oportunidades",
    tl_title:"Trayectoria", tl_intro:"Mi recorrido — educación, hitos y logros.",
    tl_cur:"Actual",
    tl1_h:"Ingeniería en Software · 5to Semestre", tl1_org:"Universidad",
    tl1_d:"Profundizando en arquitectura backend, bases de datos y patrones de diseño. Participando en eventos y hackathons.",
    tl2_h:"Hackathon Tech Tiger Code 2025", tl2_org:"Competencia externa",
    tl2_d:"Certificado de participación compitiendo para crear soluciones tecnológicas bajo presión de tiempo.",
    tl3_h:"Sistema de Roles y Permisos", tl3_org:"Proyecto Personal",
    tl3_d:"Sistema completo de control de acceso basado en roles en Java — usuarios, roles y permisos granulares.",
    tl4_h:"Feria Tecnológica — UTEG",
    tl4_d:"Certificado de participación en la feria tecnológica de la UTEG, demostrando habilidades en desarrollo de software.",
    tl5_h:"Peluquería Canina · CRUD", tl5_org:"Proyecto Universitario",
    tl5_d:"Primera aplicación CRUD de escritorio para una peluquería canina usando Java y MySQL.",
    tl6_h:"Inicio en Ingeniería en Software", tl6_org:"Universidad · Semestre 1",
    tl6_d:"Primeras líneas de código, primeros algoritmos, primer contacto con el desarrollo de software.",
    certs_title:"Certificaciones", certs_earned:"Obtenidas", certs_progress:"En Progreso",
    c1:"Bases de Datos Relacionales", c2:"Participación Feria Tecnológica — UTEG",
    c3:"Arduino", c4:"Deep Learning", c5:"Hackathon Tech Tiger Code 2025",
    cert_type:"Certificación", cert_part:"Certificado de Participación", cert_course:"Curso en Progreso",
    cr1:"Desarrollo de APIs con Spring Boot", cr2:"Spring Security",
    cr3:"Microservicios con Spring Cloud", cr4:"Fullstack Java Web — JSP + JPA",
    proj_title:"Proyectos",
    p1_n:"Validador de Login", p1_d:"Sistema de validación de inicio de sesión con Java Swing. Autenticación con UI oscura y gestión de credenciales.",
    p2_n:"Roles y Permisos", p2_d:"Control de acceso basado en roles en Java. Gestiona usuarios, roles y permisos granulares.",
    p3_n:"Peluquería Canina", p3_d:"Aplicación CRUD de escritorio para peluquería canina construida en Java con MySQL.",
    p4_n:"Fragmento Java",
    pl_proj:"Proyecto", pl_stack:"Stack", pl_yr:"Año",
    sk_title:"Habilidades", sk_tools:"Herramientas y DevOps", sk_prof:"Nivel",
    ct_title:"Contacto", ct_hl:"¿Tienes un proyecto en mente<br>o quieres conectar?",
    ct_sub:"Siempre estoy abierto a nuevas oportunidades, colaboraciones, o una buena conversación sobre tecnología.",
    f_name:"Nombre", f_email:"Correo", f_msg:"Mensaje",
    f_ph_name:"Juan Pérez", f_ph_msg:"Cuéntame sobre tu proyecto...", f_send:"Enviar Mensaje",
    f_rights:"Todos los derechos reservados.", f_made:"Construido con café y código",
    typing:["Desarrollador Backend","Entusiasta de Java","Constructor de Sistemas","Solucionador de Problemas","Coder con Café"]
  }
};

let lang = "en";
let typingPhrases = LANG.en.typing;

/* ── Apply translations ── */
function applyLang(l) {
  lang = l;
  const d = LANG[l];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    if (d[k] !== undefined) el.innerHTML = d[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const k = el.dataset.i18nPh;
    if (d[k]) el.placeholder = d[k];
  });
  document.documentElement.lang = l;
  typingPhrases = d.typing;
}

/* ═══════════════════════════════════════════
   MATRIX RAIN
═══════════════════════════════════════════ */
const canvas = document.getElementById("matrixCanvas");
const ctx    = canvas.getContext("2d");
function resizeCanvas(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
resizeCanvas();
const CHARS = "01アイウエオカキクケコタチツテトナニヌネノ01010101";
const FSZ   = 14;
let cols  = Math.floor(canvas.width/FSZ);
let drops = Array.from({length:cols},()=>Math.random()*-80);
function drawMatrix(){
  ctx.fillStyle="rgba(0,0,0,0.055)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.font=`${FSZ}px 'Share Tech Mono',monospace`;
  for(let i=0;i<drops.length;i++){
    ctx.fillStyle=Math.random()>.995?"#fff":"#00ff88";
    ctx.fillText(CHARS[Math.floor(Math.random()*CHARS.length)],i*FSZ,drops[i]*FSZ);
    if(drops[i]*FSZ>canvas.height&&Math.random()>.972) drops[i]=0;
    drops[i]+=.42;
  }
}
setInterval(drawMatrix,55);
window.addEventListener("resize",()=>{
  resizeCanvas();
  cols=Math.floor(canvas.width/FSZ);
  drops=Array.from({length:cols},()=>Math.random()*-80);
});

/* ═══════════════════════════════════════════
   LANGUAGE PILL
═══════════════════════════════════════════ */
const langPill = document.getElementById("langPill");
const lpTrack  = document.getElementById("lpTrack");
const lpEN     = document.getElementById("lpEN");
const lpES     = document.getElementById("lpES");

function setLang(l) {
  applyLang(l);
  lpTrack.style.transform = l==="es" ? "translateX(100%)" : "translateX(0)";
  lpEN.classList.toggle("lp-active", l==="en");
  lpES.classList.toggle("lp-active", l==="es");
}

langPill.addEventListener("click", e => {
  const opt = e.target.closest("[data-l]");
  setLang(opt ? opt.dataset.l : (lang==="en"?"es":"en"));
});
langPill.addEventListener("keydown", e => {
  if(e.key==="Enter"||e.key===" "){ e.preventDefault(); setLang(lang==="en"?"es":"en"); }
});

/* ═══════════════════════════════════════════
   MENU OVERLAY
═══════════════════════════════════════════ */
const menuOverlay = document.getElementById("menuOverlay");
const menuBtn     = document.getElementById("menuBtn");
const menuClose   = document.getElementById("menuClose");

menuBtn.addEventListener("click",  ()=>menuOverlay.classList.add("open"));
menuClose.addEventListener("click",()=>menuOverlay.classList.remove("open"));
document.querySelectorAll(".menu-link").forEach(l=>l.addEventListener("click",()=>menuOverlay.classList.remove("open")));
document.addEventListener("keydown",e=>{ if(e.key==="Escape") menuOverlay.classList.remove("open"); });

/* ═══════════════════════════════════════════
   SECTION REVEAL
═══════════════════════════════════════════ */
document.querySelectorAll(".section").forEach(s =>
  new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting) s.classList.add("visible");
  },{threshold:.07}).observe(s)
);

/* ═══════════════════════════════════════════
   NAV ACTIVE LINK + SCROLL BORDER
═══════════════════════════════════════════ */
const navLinks = document.querySelectorAll(".nav-links a");
document.querySelectorAll("section[id]").forEach(sec=>
  new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting)
      navLinks.forEach(l=>l.classList.toggle("active",l.getAttribute("href")===`#${sec.id}`));
  },{threshold:.35}).observe(sec)
);
const navEl = document.getElementById("mainNav");
window.addEventListener("scroll",()=>{
  navEl.style.borderBottomColor = window.scrollY>60?"rgba(0,255,136,.28)":"rgba(0,255,136,.10)";
});

/* ═══════════════════════════════════════════
   TEXT SCRAMBLE (hero title)
═══════════════════════════════════════════ */
const SC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
function scramble(el){
  const fin = el.dataset.text;
  let i=0;
  const iv=setInterval(()=>{
    el.textContent=fin.split("").map((c,idx)=>{
      if(!c.trim()||c==="Í"||c==="É") return c;
      if(idx<i) return fin[idx];
      return SC[Math.floor(Math.random()*SC.length)];
    }).join("");
    if(i>=fin.length) clearInterval(iv);
    i+=.4;
  },45);
}
window.addEventListener("load",()=>setTimeout(()=>document.querySelectorAll(".scramble").forEach(scramble),500));

/* ═══════════════════════════════════════════
   TYPING ANIMATION
═══════════════════════════════════════════ */
const typEl = document.getElementById("typingEl");
let pi=0,ci=0,del=false,delay=110;
function type(){
  const cur=typingPhrases[pi%typingPhrases.length];
  if(!del){typEl.textContent=cur.slice(0,ci+1);ci++;delay=ci===cur.length?2200:110;if(ci===cur.length)del=true;}
  else{typEl.textContent=cur.slice(0,ci-1);ci--;delay=54;if(ci===0){del=false;pi=(pi+1)%typingPhrases.length;delay=300;}}
  setTimeout(type,delay);
}
setTimeout(type,1800);

/* ═══════════════════════════════════════════
   PROJECT VIEW TOGGLE
═══════════════════════════════════════════ */
const vbGrid=document.getElementById("vbGrid"), vbList=document.getElementById("vbList");
const projGrid=document.getElementById("projGrid"), projList=document.getElementById("projList");
vbGrid.addEventListener("click",()=>{projGrid.classList.remove("hidden");projList.classList.add("hidden");vbGrid.classList.add("active");vbList.classList.remove("active");});
vbList.addEventListener("click",()=>{projList.classList.remove("hidden");projGrid.classList.add("hidden");vbList.classList.add("active");vbGrid.classList.remove("active");});

/* ═══════════════════════════════════════════
   LIST ROW SCRAMBLE HOVER
═══════════════════════════════════════════ */
document.querySelectorAll(".pl-row:not(.no-link)").forEach(row=>{
  const nm=row.querySelector(".pl-name");
  const orig=nm.textContent;
  let iv;
  row.addEventListener("mouseenter",()=>{
    let i=0;
    iv=setInterval(()=>{
      nm.textContent=orig.split("").map((c,idx)=>{
        if(!c.trim()) return c;
        if(idx<i) return orig[idx];
        return SC[Math.floor(Math.random()*SC.length)];
      }).join("");
      if(i>=orig.length) clearInterval(iv);
      i+=.5;
    },30);
  });
  row.addEventListener("mouseleave",()=>{clearInterval(iv);nm.textContent=orig;});
});

/* ═══════════════════════════════════════════
   SKILL CARDS STAGGER
═══════════════════════════════════════════ */
const skCards=document.querySelectorAll(".sk-card");
skCards.forEach(c=>{c.style.opacity="0";c.style.transform="translateY(14px)";c.style.transition="opacity .45s ease,transform .45s ease,border-color .28s,box-shadow .28s";});
const skSec=document.querySelector("#skills");
if(skSec) new IntersectionObserver(e=>{
  if(e[0].isIntersecting) skCards.forEach((c,i)=>setTimeout(()=>{c.style.opacity="1";c.style.transform="translateY(0)";},i*55));
},{threshold:.12}).observe(skSec);

/* ═══════════════════════════════════════════
   PROFICIENCY BARS
═══════════════════════════════════════════ */
const bars=document.querySelectorAll(".bar-row");
bars.forEach(r=>{
  const f=r.querySelector(".bar-fill");
  f.style.width="0";
  f.style.transition="width 1.2s cubic-bezier(.4,0,.2,1)";
});
if(skSec) new IntersectionObserver(e=>{
  if(e[0].isIntersecting)
    bars.forEach((r,i)=>setTimeout(()=>{r.querySelector(".bar-fill").style.width=r.dataset.pct+"%";},200+i*120));
},{threshold:.2}).observe(skSec);

/* ═══════════════════════════════════════════
   TIMELINE STAGGER
═══════════════════════════════════════════ */
const tlRows=document.querySelectorAll(".tl-row");
tlRows.forEach(r=>{r.style.opacity="0";r.style.transform="translateX(-14px)";r.style.transition="opacity .6s ease,transform .6s ease";});
const tlSec=document.querySelector("#timeline");
if(tlSec) new IntersectionObserver(e=>{
  if(e[0].isIntersecting) tlRows.forEach((r,i)=>setTimeout(()=>{r.style.opacity="1";r.style.transform="translateX(0)";},i*120));
},{threshold:.08}).observe(tlSec);

/* ═══════════════════════════════════════════
   CERT CARDS STAGGER
═══════════════════════════════════════════ */
const certItems=document.querySelectorAll(".cert-item");
certItems.forEach(c=>{c.style.opacity="0";c.style.transform="translateX(-10px)";c.style.transition="opacity .5s ease,transform .5s ease,border-color .28s,box-shadow .28s";});
const certSec=document.querySelector("#certs");
if(certSec) new IntersectionObserver(e=>{
  if(e[0].isIntersecting) certItems.forEach((c,i)=>setTimeout(()=>{c.style.opacity="1";c.style.transform="translateX(0)";},i*75));
},{threshold:.1}).observe(certSec);

/* ═══════════════════════════════════════════
   LIVE CODE TYPEWRITER (robbowen.digital)
═══════════════════════════════════════════ */
(function(){
  const codeEl  = document.getElementById("liveEl");
  const cursor  = document.getElementById("lcursor");
  if(!codeEl||!cursor) return;

  // Token list: [text, cssClass|null]
  const TOKENS = [
    ["public class","kw"],[" ",null],["HelloWorld","cl"],[" {\n",null],
    ["  ",null],["public static void","kw"],["\n",null],
    ["    ",null],["main","fn"],["(String[] args) {\n",null],
    ["      System.out.println(\n",null],
    ["        ",null],['"Hello, World!"',"str"],["\n",null],
    ["      );\n",null],
    ["  }\n",null],
    ["}",null],
  ];
  const CHARS2=[];
  for(const[text,cls] of TOKENS) for(const ch of text) CHARS2.push({ch,cls});

  const SMIN=38,SMAX=95,PLINE=160,PEND=2800,ESPD=22,PSTART=900;
  let pos=0,erasing=false,started=false;

  function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}

  function render(){
    let html="",buf="",cur=null;
    function flush(){if(!buf)return;html+=cur?`<span class="${cur}">${esc(buf)}</span>`:esc(buf);buf="";}
    for(let i=0;i<pos&&i<CHARS2.length;i++){const{ch,cls}=CHARS2[i];if(cls!==cur){flush();cur=cls;}buf+=ch;}
    flush();
    codeEl.innerHTML=html;
  }

  function tick(){
    if(!erasing){
      if(pos>=CHARS2.length){
        cursor.style.animation="none";cursor.style.opacity="1";
        setTimeout(()=>{cursor.style.animation="";erasing=true;tick();},PEND);
        return;
      }
      pos++;render();
      const ch=CHARS2[pos-1].ch;
      setTimeout(tick,ch==="\n"?PLINE+Math.random()*SMAX:SMIN+Math.random()*(SMAX-SMIN));
    } else {
      if(pos<=0){erasing=false;setTimeout(tick,PSTART);return;}
      pos--;render();
      setTimeout(tick,ESPD);
    }
  }

  const projSec=document.querySelector("#projects");
  if(projSec){
    new IntersectionObserver(e=>{
      if(e[0].isIntersecting&&!started){started=true;setTimeout(tick,600);}
    },{threshold:.15}).observe(projSec);
  } else {
    setTimeout(tick,800);
  }
})();

/* ═══════════════════════════════════════════
   GITHUB ACTIVITY
═══════════════════════════════════════════ */
(function initGitHub() {
  const USER = "24kgolden";
  const BASE = "https://api.github.com";

  const LANG_COLORS = {
    Java:"#b07219", JavaScript:"#f1e05a", HTML:"#e34c26",
    CSS:"#563d7c", Python:"#3572A5", TypeScript:"#3178c6",
    "C++":"#f34b7d", C:"#555555", Shell:"#89e051"
  };

  function langDotClass(l) {
    const map = {Java:"java",HTML:"html",CSS:"css",JavaScript:"js",Python:"python"};
    return map[l] || "";
  }

  function timeAgo(dateStr) {
    const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
    if (diff < 3600)  return Math.floor(diff/60)  + "m ago";
    if (diff < 86400) return Math.floor(diff/3600) + "h ago";
    return Math.floor(diff/86400) + "d ago";
  }

  function el(id) { return document.getElementById(id); }

  /* ── Render stat card ── */
  function renderStat(id, num, labelKey) {
    const card = el(id);
    if (!card) return;
    const d = LANG[lang];
    card.innerHTML = `
      <span class="gh-stat-num">${num}</span>
      <span class="gh-stat-label">${d[labelKey] || labelKey}</span>`;
  }

  /* ── Render repos ── */
  function renderRepos(repos) {
    const container = el("ghRepoList");
    if (!container) return;
    const d = LANG[lang];

    const items = repos.slice(0, 6).map(r => {
      const langDot = r.language
        ? `<span class="gh-lang-dot ${langDotClass(r.language)}"></span><span>${r.language}</span>`
        : "";
      const color = LANG_COLORS[r.language] || "#888";
      return `
        <a href="${r.html_url}" target="_blank" rel="noopener" class="gh-repo-card">
          <div class="gh-repo-top">
            <span class="gh-repo-name">${r.name}</span>
            <span class="gh-repo-arr">↗</span>
          </div>
          <p class="gh-repo-desc">${r.description || d.gh_no_desc}</p>
          <div class="gh-repo-meta">
            <span class="gh-repo-lang" style="--lc:${color}">
              <span class="gh-lang-dot ${langDotClass(r.language)}" style="background:${color}"></span>
              <span>${r.language || "—"}</span>
            </span>
            <span class="gh-stars">⭐ ${r.stargazers_count}</span>
            <span>🍴 ${r.forks_count}</span>
          </div>
        </a>`;
    }).join("");

    container.innerHTML = items || `<p class="gh-error">${d.gh_error}</p>`;
  }

  /* ── Render commits ── */
  function renderCommits(events) {
    const container = el("ghCommitList");
    if (!container) return;
    const d = LANG[lang];

    const pushEvents = events
      .filter(e => e.type === "PushEvent")
      .slice(0, 7);

    if (!pushEvents.length) {
      container.innerHTML = `<p class="gh-error">${d.gh_error}</p>`;
      return;
    }

    container.innerHTML = pushEvents.map(e => {
      const commit = e.payload.commits?.slice(-1)[0];
      if (!commit) return "";
      const msg = commit.message.split("\n")[0];
      const repo = e.repo.name.replace(`${USER}/`, "");
      return `
        <div class="gh-commit-row">
          <span class="gh-commit-dot"></span>
          <div class="gh-commit-info">
            <span class="gh-commit-msg">${msg}</span>
            <span class="gh-commit-repo">${repo}</span>
          </div>
          <span class="gh-commit-date">${timeAgo(e.created_at)}</span>
        </div>`;
    }).join("");
  }

  /* ── Fetch everything ── */
  async function fetchGitHub() {
    const ghSec = document.querySelector("#github");
    if (!ghSec) return;

    // Observe so we fetch on scroll into view
    new IntersectionObserver(async (entries) => {
      if (!entries[0].isIntersecting) return;

      try {
        // User profile
        const profileRes = await fetch(`${BASE}/users/${USER}`);
        const profile    = await profileRes.json();

        // Count total stars
        const reposRes = await fetch(`${BASE}/users/${USER}/repos?per_page=100&sort=updated`);
        const repos    = await reposRes.json();
        const totalStars = Array.isArray(repos)
          ? repos.reduce((s, r) => s + r.stargazers_count, 0)
          : 0;

        // Render stats
        renderStat("ghRepos",     profile.public_repos,  "gh_repos_lbl");
        renderStat("ghFollowers", profile.followers,      "gh_followers_lbl");
        renderStat("ghFollowing", profile.following,      "gh_following_lbl");
        renderStat("ghStars",     totalStars,             "gh_stars_lbl");

        // Render repos (sorted by stars then updated)
        if (Array.isArray(repos)) {
          const sorted = [...repos].sort((a,b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));
          renderRepos(sorted);
        }

        // Events for commits
        const eventsRes = await fetch(`${BASE}/users/${USER}/events/public?per_page=30`);
        const events    = await eventsRes.json();
        if (Array.isArray(events)) renderCommits(events);

      } catch(err) {
        const d = LANG[lang];
        ["ghRepos","ghFollowers","ghFollowing","ghStars"].forEach(id => {
          const c = el(id);
          if (c) c.innerHTML = `<span class="gh-stat-label">—</span>`;
        });
        const rl = el("ghRepoList");
        const cl = el("ghCommitList");
        if (rl) rl.innerHTML = `<p class="gh-error">${d.gh_error}</p>`;
        if (cl) cl.innerHTML = `<p class="gh-error">${d.gh_error}</p>`;
      }
    }, { threshold: 0.1 }).observe(ghSec);
  }

  fetchGitHub();
})();

/* ═══════════════════════════════════════════
   FOOTER YEAR
═══════════════════════════════════════════ */
const y=new Date().getFullYear();
["yr","yr2"].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=y;});







