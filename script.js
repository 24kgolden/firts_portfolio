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
    about_p1:`I'm a <span class="accent">Software Engineering student</span> with a strong passion for backend development — designing systems that are clean, efficient, and built to last.`,
    about_p2:`I'm constantly pushing my limits through university events, hackathons, and personal projects. I believe the best way to grow is to <span class="accent">build real things</span> and learn from every line of code.`,
    stat_sem:"Semesters", stat_proj:"Projects", stat_coffee:"Coffees",
    now_title:"Currently", now_1:"Studying Software Engineering",
    now_2:"Building Java projects", now_3:"Learning Spring Boot deeply",
    now_4:"Open to opportunities",
    tl_title:"Timeline", tl_intro:"My journey — education, milestones & achievements.",
    tl_cur:"Current",
    tl_sw_title:"Software Engineering", tl_sw_org:"Universidad — Ongoing",
    tl_sw_d:"Studying backend architecture, databases, design patterns and software engineering principles. Actively participating in academic events and competitions.",
    tl_javaweb_title:"Java Web con JSP y JPA",
    tl_javaweb_d:"Certificate of completion for the Java Web with JSP and JPA course — covering full-stack Java web development with persistence layers.",
    tl_pasantia_title:"Professional Internship — SOSYSTEC",
    tl_pasantia_d:"Successfully completed 240 hours of professional internship at SOSYSTEC, gaining real-world experience in software development and enterprise technology solutions.",
    tl_arduino_title:"Introduction to Arduino",
    tl_arduino_d:"Certificate of completion for the Introduction to Arduino course, exploring embedded systems, hardware programming and IoT fundamentals.",
    tl_dl_title:"Introduction to Deep Learning",
    tl_dl_d:"Certificate of completion for the Introduction to Deep Learning course, covering neural networks, machine learning fundamentals and AI concepts.",
    tl_poo_title:"OOP with Java",
    tl_poo_d:"Certificate of completion for the OOP with Java course — mastering classes, inheritance, polymorphism, encapsulation and design principles.",
    tl_hack_title:"Hackathon Tech Tiger Code 2025", tl_hack_org:"External Competition",
    tl_hack_d:"Certificate of participation in the Tech Tiger Code 2025 Hackathon, competing to build innovative solutions under time pressure.",
    tl_bd_title:"Relational Databases with MySQL",
    tl_bd_d:"Certificate of completion covering SQL, schema design, queries and database management fundamentals.",
    tl_git_title:"Introduction to Git & GitHub",
    tl_git_d:"Certificate of completion — version control, branching, pull requests and collaborative workflows.",
    tl_roles_title:"Roles & Permissions System", tl_roles_org:"Personal Project",
    tl_roles_d:"Full role-based access control system in Java — users, roles and granular permission management with structured backend architecture.",
    tl_uteg_title:"Tech Fair — UTEG",
    tl_uteg_d:"Certificate of participation in the Technology Fair at UTEG, showcasing academic and practical software development skills.",
    tl_crud_title:"Peluqueria Canina · CRUD App", tl_crud_org:"University Project",
    tl_crud_d:"First full CRUD desktop app for a canine grooming salon using Java and MySQL.",
    tl_javabeg_title:"Java para Principiantes",
    tl_javabeg_d:"Certificate of completion for the Java for Beginners course — the foundation of my Java journey. Syntax, data types, control flow and basic OOP.",
    tl_start_title:"Started Software Engineering", tl_start_org:"Universidad — Semester 1",
    tl_start_d:"First lines of code, first algorithms, first taste of building software.",
    certs_title:"Certifications",
    certs_total:"Total Certificates", certs_institutions:"Institutions", certs_hours:"CEUs + Hours",
    certs_online:"Online Platform · 5 Certificates",
    certs_mbtu_sub:"MBTU · 2 Certificates · 60 CEUs",
    certs_other_org:"Professional & Academic",
    certs_other_sub:"3 Certificates · 240 Professional Hours",
    cert_completion:"Certificate of Completion",
    cert_participation:"Certificate of Participation",
    c_javaweb:"Java Web con JSP y JPA",
    c_poo:"OOP with Java",
    c_bd:"Relational Databases with MySQL",
    c_git:"Introduction to Git & GitHub",
    c_javabeg:"Java for Beginners",
    c_arduino:"Introduction to Arduino",
    c_dl:"Introduction to Deep Learning",
    c_sosystec:"Professional Internship — SOSYSTEC",
    c_hackathon:"Hackathon Tech Tiger Code 2025",
    c_uteg:"Tech Fair — UTEG",
    proj_title:"Projects",
    p1_n:"Login Validator", p1_d:"Desktop login validation built with Java Swing. Authentication with clean dark UI and credential management.",
    p2_n:"Roles & Permissions", p2_d:"Role-based access control in Java. Manages users, roles and granular permissions with structured backend architecture.",
    p3_n:"Peluqueria Canina", p3_d:"Full CRUD desktop app for a canine grooming salon built in Java with MySQL backend.",
    p4_n:"Java Snippet",
    p5_n:"Clínica Odontológica Sonrisas", p5_d:"Dental clinic management system built in Java. Handles patient records, appointments and clinic data with a structured backend architecture.",
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
    about_p1:`Soy <span class="accent">estudiante de Ingeniería en Software</span> con una fuerte pasión por el desarrollo backend — diseñando sistemas limpios, eficientes y construidos para durar.`,
    about_p2:`Me esfuerzo constantemente a través de eventos universitarios, hackathons y proyectos personales. Creo que la mejor manera de crecer es <span class="accent">construir cosas reales</span> y aprender de cada línea de código.`,
    stat_sem:"Semestres", stat_proj:"Proyectos", stat_coffee:"Cafés",
    now_title:"Actualmente", now_1:"Estudiando Ingeniería en Software",
    now_2:"Construyendo proyectos Java", now_3:"Aprendiendo Spring Boot a fondo",
    now_4:"Abierto a oportunidades",
    tl_title:"Trayectoria", tl_intro:"Mi recorrido — educación, hitos y logros.",
    tl_cur:"Actual",
    tl_sw_title:"Ingeniería en Software", tl_sw_org:"Universidad — En curso",
    tl_sw_d:"Estudiando arquitectura backend, bases de datos, patrones de diseño y principios de ingeniería de software. Participando activamente en eventos académicos y competencias.",
    tl_javaweb_title:"Java Web con JSP y JPA",
    tl_javaweb_d:"Certificado de finalización del curso Java Web con JSP y JPA — desarrollo web fullstack con Java y capas de persistencia.",
    tl_pasantia_title:"Prácticas Preprofesionales — SOSYSTEC",
    tl_pasantia_d:"Completé satisfactoriamente 240 horas de prácticas preprofesionales en SOSYSTEC, adquiriendo experiencia real en desarrollo de software y soluciones tecnológicas empresariales.",
    tl_arduino_title:"Introducción a Arduino",
    tl_arduino_d:"Certificado de finalización del curso de Arduino — sistemas embebidos, programación de hardware y fundamentos de IoT. Miami Business Technological University.",
    tl_dl_title:"Introducción a Deep Learning",
    tl_dl_d:"Certificado de finalización del curso de Deep Learning — redes neuronales, fundamentos de machine learning y conceptos de inteligencia artificial. MBTU.",
    tl_poo_title:"Programación Orientada a Objetos con Java",
    tl_poo_d:"Certificado de finalización del curso de POO con Java — clases, herencia, polimorfismo, encapsulamiento y principios de diseño.",
    tl_hack_title:"Hackathon Tech Tiger Code 2025", tl_hack_org:"Competencia externa",
    tl_hack_d:"Certificado de participación en el Hackathon Tech Tiger Code 2025, compitiendo para crear soluciones tecnológicas bajo presión de tiempo.",
    tl_bd_title:"Bases de Datos Relacionales con MySQL",
    tl_bd_d:"Certificado de finalización — SQL, diseño de esquemas, consultas y fundamentos de gestión de bases de datos.",
    tl_git_title:"Introducción a Git y GitHub",
    tl_git_d:"Certificado de finalización — control de versiones, ramas, pull requests y flujos de trabajo colaborativos.",
    tl_roles_title:"Sistema de Roles y Permisos", tl_roles_org:"Proyecto Personal",
    tl_roles_d:"Sistema completo de control de acceso basado en roles en Java — usuarios, roles y permisos granulares con arquitectura backend estructurada.",
    tl_uteg_title:"Feria Tecnológica — UTEG",
    tl_uteg_d:"Certificado de participación en la feria tecnológica de la UTEG, demostrando habilidades académicas y prácticas en desarrollo de software.",
    tl_crud_title:"Peluquería Canina · CRUD", tl_crud_org:"Proyecto Universitario",
    tl_crud_d:"Primera aplicación CRUD de escritorio para una peluquería canina usando Java y MySQL.",
    tl_javabeg_title:"Java para Principiantes",
    tl_javabeg_d:"Certificado de finalización del curso Java para Principiantes — la base de mi camino con Java. Sintaxis, tipos de datos, flujo de control y POO básica.",
    tl_start_title:"Inicio en Ingeniería en Software", tl_start_org:"Universidad — Semestre 1",
    tl_start_d:"Primeras líneas de código, primeros algoritmos, primer contacto con el desarrollo de software.",
    certs_title:"Certificaciones",
    certs_total:"Certificados Totales", certs_institutions:"Instituciones", certs_hours:"CEUs + Horas",
    certs_online:"Plataforma Online · 5 Certificados",
    certs_mbtu_sub:"MBTU · 2 Certificados · 60 CEUs",
    certs_other_org:"Profesional y Académico",
    certs_other_sub:"3 Certificados · 240 Horas Profesionales",
    cert_completion:"Certificado de Finalización",
    cert_participation:"Certificado de Participación",
    c_javaweb:"Java Web con JSP y JPA",
    c_poo:"Programación Orientada a Objetos con Java",
    c_bd:"Bases de Datos Relacionales con MySQL",
    c_git:"Introducción a Git y GitHub",
    c_javabeg:"Java para Principiantes",
    c_arduino:"Introducción a Arduino",
    c_dl:"Introducción a Deep Learning",
    c_sosystec:"Prácticas Preprofesionales — SOSYSTEC",
    c_hackathon:"Hackathon Tech Tiger Code 2025",
    c_uteg:"Feria Tecnológica — UTEG",
    c1:"Bases de Datos Relacionales", c2:"Participación Feria Tecnológica — UTEG",
    cert_type:"Certificación", cert_part:"Certificado de Participación", cert_course:"Curso en Progreso",
    proj_title:"Proyectos",
    p1_n:"Validador de Login", p1_d:"Sistema de validación de inicio de sesión con Java Swing. Autenticación con UI oscura y gestión de credenciales.",
    p2_n:"Roles y Permisos", p2_d:"Control de acceso basado en roles en Java. Gestiona usuarios, roles y permisos granulares.",
    p3_n:"Peluquería Canina", p3_d:"Aplicación CRUD de escritorio para peluquería canina construida en Java con MySQL.",
    p4_n:"Fragmento Java",
    p5_n:"Clínica Odontológica Sonrisas", p5_d:"Sistema de gestión para clínica dental desarrollado en Java. Maneja registros de pacientes, citas y datos de la clínica con arquitectura backend estructurada.",
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

  // ── Datos estáticos de respaldo (siempre se muestran primero) ──
  const STATIC_PROFILE = {
    public_repos: 12,
    followers: 2,
    following: 4,
  };

  const STATIC_REPOS = [
    { name: "bytecode-portfolio",       html_url: "https://github.com/24kgolden/bytecode-portfolio",          description: "Personal developer portfolio built with vanilla HTML, CSS and JS.", language: "HTML",       stargazers_count: 0, forks_count: 0, updated_at: "2025-05-01" },
    { name: "Cl-nica-Odontol-gica-Sonrisas", html_url: "https://github.com/24kgolden/Cl-nica-Odontol-gica-Sonrisas", description: "Dental clinic management system — patient records, appointments, Java + MySQL.", language: "Java", stargazers_count: 0, forks_count: 0, updated_at: "2025-04-10" },
    { name: "Sistema-de-Roles-y-Permisos", html_url: "https://github.com/24kgolden/Sistema-de-Roles-y-Permisos",   description: "Role-based access control system in Java with granular permission management.", language: "Java",       stargazers_count: 0, forks_count: 0, updated_at: "2024-11-20" },
    { name: "Proyecto-Crud",            html_url: "https://github.com/24kgolden/Proyecto-Crud",                description: "Full CRUD desktop app for a canine grooming salon — Java + MySQL.",    language: "Java",       stargazers_count: 0, forks_count: 0, updated_at: "2023-09-15" },
    { name: "LoginValidatorSwing",      html_url: "https://github.com/24kgolden/LoginValidatorSwing",          description: "Desktop login validator with Java Swing, dark UI and credential management.", language: "Java", stargazers_count: 0, forks_count: 0, updated_at: "2023-06-10" },
  ];

  const STATIC_COMMITS = [
    { msg: "Update portfolio sections and fix layout",  repo: "bytecode-portfolio",            date: "2d ago" },
    { msg: "Add dental clinic module — patient records", repo: "Cl-nica-Odontol-gica-Sonrisas", date: "4w ago" },
    { msg: "Refactor permission service layer",          repo: "Sistema-de-Roles-y-Permisos",   date: "6mo ago" },
    { msg: "Fix CRUD delete confirmation dialog",        repo: "Proyecto-Crud",                 date: "1y ago" },
    { msg: "Initial commit — login validator UI",        repo: "LoginValidatorSwing",           date: "2y ago" },
  ];

  const LANG_COLORS = {
    Java:"#b07219", JavaScript:"#f1e05a", HTML:"#e34c26",
    CSS:"#563d7c", Python:"#3572A5", TypeScript:"#3178c6",
    "C++":"#f34b7d", C:"#555555", Shell:"#89e051"
  };

  function langDotClass(l) {
    const map = { Java:"java", HTML:"html", CSS:"css", JavaScript:"js", Python:"python" };
    return map[l] || "";
  }

  function timeAgo(dateStr) {
    const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
    if (diff < 3600)  return Math.floor(diff / 60)   + "m ago";
    if (diff < 86400) return Math.floor(diff / 3600)  + "h ago";
    return Math.floor(diff / 86400) + "d ago";
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
    const color = r => LANG_COLORS[r.language] || "#888";

    container.innerHTML = repos.slice(0, 6).map(r => `
      <a href="${r.html_url}" target="_blank" rel="noopener" class="gh-repo-card">
        <div class="gh-repo-top">
          <span class="gh-repo-name">${r.name}</span>
          <span class="gh-repo-arr">↗</span>
        </div>
        <p class="gh-repo-desc">${r.description || d.gh_no_desc}</p>
        <div class="gh-repo-meta">
          <span class="gh-repo-lang" style="--lc:${color(r)}">
            <span class="gh-lang-dot ${langDotClass(r.language)}" style="background:${color(r)}"></span>
            <span>${r.language || "—"}</span>
          </span>
          <span class="gh-stars">⭐ ${r.stargazers_count}</span>
          <span>🍴 ${r.forks_count}</span>
        </div>
      </a>`).join("");
  }

  /* ── Render commits (desde datos estáticos) ── */
  function renderStaticCommits() {
    const container = el("ghCommitList");
    if (!container) return;
    container.innerHTML = STATIC_COMMITS.map(c => `
      <div class="gh-commit-row">
        <span class="gh-commit-dot"></span>
        <div class="gh-commit-info">
          <span class="gh-commit-msg">${c.msg}</span>
          <span class="gh-commit-repo">${c.repo}</span>
        </div>
        <span class="gh-commit-date">${c.date}</span>
      </div>`).join("");
  }

  /* ── Render commits (desde API) ── */
  function renderCommits(events) {
    const container = el("ghCommitList");
    if (!container) return;
    const pushEvents = events.filter(e => e.type === "PushEvent").slice(0, 7);
    if (!pushEvents.length) { renderStaticCommits(); return; }

    container.innerHTML = pushEvents.map(e => {
      const commit = e.payload.commits?.slice(-1)[0];
      if (!commit) return "";
      const msg  = commit.message.split("\n")[0];
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

  /* ── Render con datos estáticos inmediatamente ── */
  function renderStatic() {
    renderStat("ghRepos",     STATIC_PROFILE.public_repos, "gh_repos_lbl");
    renderStat("ghFollowers", STATIC_PROFILE.followers,    "gh_followers_lbl");
    renderStat("ghFollowing", STATIC_PROFILE.following,    "gh_following_lbl");
    renderStat("ghStars",     0,                           "gh_stars_lbl");
    renderRepos(STATIC_REPOS);
    renderStaticCommits();
  }

  /* ── Intentar enriquecer con la API (sin bloquear) ── */
  async function tryEnrichFromAPI() {
    try {
      const profileRes = await fetch(`${BASE}/users/${USER}`);
      if (!profileRes.ok) return; // rate limit u otro error → silencioso
      const profile = await profileRes.json();

      const reposRes = await fetch(`${BASE}/users/${USER}/repos?per_page=100&sort=updated`);
      if (!reposRes.ok) return;
      const repos = await reposRes.json();

      if (!Array.isArray(repos)) return;

      const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);
      renderStat("ghRepos",     profile.public_repos, "gh_repos_lbl");
      renderStat("ghFollowers", profile.followers,     "gh_followers_lbl");
      renderStat("ghFollowing", profile.following,     "gh_following_lbl");
      renderStat("ghStars",     totalStars,            "gh_stars_lbl");

      const sorted = [...repos].sort((a, b) =>
        b.stargazers_count - a.stargazers_count ||
        new Date(b.updated_at) - new Date(a.updated_at));
      renderRepos(sorted);

      const eventsRes = await fetch(`${BASE}/users/${USER}/events/public?per_page=30`);
      if (!eventsRes.ok) return;
      const events = await eventsRes.json();
      if (Array.isArray(events)) renderCommits(events);

    } catch (_) {
      // Fallo silencioso — los datos estáticos ya están visibles
    }
  }

  /* ── Init ── */
  function fetchGitHub() {
    const ghSec = document.querySelector("#github");
    if (!ghSec) return;

    // 1. Mostrar datos estáticos inmediatamente (sin spinners)
    renderStatic();

    // 2. Intentar actualizar desde la API en segundo plano
    const rect = ghSec.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      tryEnrichFromAPI();
    } else {
      let enriched = false;
      new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !enriched) {
          enriched = true;
          tryEnrichFromAPI();
        }
      }, { threshold: 0.1 }).observe(ghSec);
    }
  }

  fetchGitHub();
})();

/* ═══════════════════════════════════════════
   INTERACTIVE TERMINAL — EASTER EGG
═══════════════════════════════════════════ */
(function initTerminal() {
  const terminal  = document.getElementById("heroTerminal");
  const body      = document.getElementById("termBody");
  const input     = document.getElementById("termInput");
  const cursor    = document.getElementById("termCursor");
  const inputLine = input?.closest(".t-input-line");
  if (!terminal || !input) return;

  let history = [];
  let histIdx  = -1;

  /* ── Command definitions ── */
  const CMDS = {
    help: () => [
      { cls:"t-out-special", t:"Available commands:" },
      { cls:"t-out-resp", t:"  whoami       — About me" },
      { cls:"t-out-resp", t:"  skills       — My tech stack" },
      { cls:"t-out-resp", t:"  projects     — My projects" },
      { cls:"t-out-resp", t:"  contact      — Get in touch" },
      { cls:"t-out-resp", t:"  coffee       — ☕ Essential resource" },
      { cls:"t-out-resp", t:"  dragon       — 🐉 Unleash the beast" },
      { cls:"t-out-resp", t:"  hack         — 💻 Elite mode" },
      { cls:"t-out-resp", t:"  sudo         — Try your luck" },
      { cls:"t-out-resp", t:"  matrix       — Take the red pill" },
      { cls:"t-out-resp", t:"  joke         — Random dev joke" },
      { cls:"t-out-resp", t:"  clear        — Clear terminal" },
    ],

    whoami: () => [
      { cls:"t-out-resp", t:"Edwar Ramírez" },
      { cls:"t-out-resp", t:"Software Engineering Student · Backend Developer" },
      { cls:"t-out-resp", t:"Universidad Tecnológica Empresarial de Guayaquil" },
      { cls:"t-out-resp", t:"Guayaquil, Ecuador 🇪🇨" },
    ],

    skills: () => [
      { cls:"t-out-special", t:"languages   Java · JavaScript · SQL" },
      { cls:"t-out-special", t:"frameworks  Spring Boot · HTML · CSS" },
      { cls:"t-out-special", t:"tools       Docker · Git · MySQL" },
    ],

    projects: () => [
      { cls:"t-out-resp", t:"📁 LoginValidator      — Java + Swing" },
      { cls:"t-out-resp", t:"📁 RolesPermissions    — Java + RBAC" },
      { cls:"t-out-resp", t:"📁 PeluqueriaCanina    — Java + MySQL" },
    ],

    contact: () => [
      { cls:"t-out-resp", t:"📧 edwarddelcastillo4@gmail.com" },
      { cls:"t-out-resp", t:"🐙 github.com/24kgolden" },
      { cls:"t-out-resp", t:"🐦 x.com/666_serpico" },
    ],

    coffee: () => [
      { cls:"t-out-special", t:"       ( (" },
      { cls:"t-out-special", t:"        ) )" },
      { cls:"t-out-special", t:"     ........" },
      { cls:"t-out-special", t:"     |      |]" },
      { cls:"t-out-special", t:"     \\      /" },
      { cls:"t-out-special", t:"      `----'" },
      { cls:"t-out-warn",    t:"  ☕  Coffee loaded. Ready to code." },
    ],

    dragon: () => [
      { cls:"t-out-special", t:"      /\\_____/\\" },
      { cls:"t-out-special", t:"  /\\  / o   o \\" },
      { cls:"t-out-special", t:" //\\\\ \\  w  /  🔥" },
      { cls:"t-out-special", t:" \\  / /     \\" },
      { cls:"t-out-special", t:"  \\/  \\  ^  /" },
      { cls:"t-out-resp",    t:"  🐉 The dragon awakens... 00ff88 forever." },
    ],

    hack: () => [
      { cls:"t-out-warn",    t:"  INITIATING HACK SEQUENCE..." },
      { cls:"t-out-special", t:"  > accessing mainframe......... ✓" },
      { cls:"t-out-special", t:"  > bypassing firewall........... ✓" },
      { cls:"t-out-special", t:"  > downloading internet......... ✓" },
      { cls:"t-out-special", t:"  > installing coffee.jar........ ✓" },
      { cls:"t-out-warn",    t:"  HACK COMPLETE. You are now elite." },
    ],

    sudo: () => [
      { cls:"t-out-err",  t:"  sudo: permission denied" },
      { cls:"t-out-resp", t:"  (nice try though 😄)" },
    ],

    matrix: () => [
      { cls:"t-out-special", t:"  Wake up, Neo..." },
      { cls:"t-out-special", t:"  The Matrix has you..." },
      { cls:"t-out-special", t:"  01000101 01100100 01110111 01100001 01110010" },
      { cls:"t-out-warn",    t:"  Follow the white rabbit. 🐇" },
    ],

    joke: () => {
      const jokes = [
        ["Why do programmers prefer dark mode?", "Because light attracts bugs! 🐛"],
        ["How many programmers does it take to change a lightbulb?", "None. It's a hardware problem."],
        ["A SQL query walks into a bar...", "...walks up to two tables and asks: 'Can I JOIN you?' 😂"],
        ["Why did Java break up with JavaScript?", "Because it had too many undefined issues. 💔"],
        ["What's a developer's favourite place?", "The foo bar. 🍺"],
      ];
      const [q, a] = jokes[Math.floor(Math.random() * jokes.length)];
      return [
        { cls:"t-out-resp",    t:"  " + q },
        { cls:"t-out-special", t:"  " + a },
      ];
    },

    clear: () => "CLEAR",

    "rm -rf /": () => [
      { cls:"t-out-err",  t:"  rm: WARNING: deleting entire filesystem" },
      { cls:"t-out-err",  t:"  rm: just kidding 😅 nothing was harmed" },
    ],

    "git push": () => [
      { cls:"t-out-special", t:"  Pushing to origin/main..." },
      { cls:"t-out-warn",    t:"  fatal: rejected — pushing to production on a Friday? 😱" },
    ],

    "git blame": () => [
      { cls:"t-out-resp", t:"  edwar (2024) — it was me. I regret nothing." },
    ],

    "hello world": () => [
      { cls:"t-out-special", t:'  System.out.println("Hello, World! 👋");' },
    ],

    ls: () => [
      { cls:"t-out-resp", t:"  projects/   skills/   certifications/   coffee.jar" },
    ],

    date: () => [
      { cls:"t-out-resp", t:"  " + new Date().toLocaleString() },
    ],

    pwd: () => [
      { cls:"t-out-resp", t:"  /home/edwar/portfolio" },
    ],

    uname: () => [
      { cls:"t-out-resp", t:"  EdwarOS 5.0 — Java-Powered — Build 2025" },
    ],
  };

  /* ── Process a command ── */
  function runCmd(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    history.unshift(raw.trim());
    histIdx = -1;

    // Print the entered command
    appendLine("t-out-cmd", raw.trim(), true);

    if (cmd === "clear") {
      // Keep only the static lines (up to and not including input line)
      const lines = body.querySelectorAll(".t-dynamic");
      lines.forEach(l => l.remove());
      // Remove all static output too and rebuild minimal
      const all = [...body.children];
      const inputLineEl = inputLine;
      all.forEach(el => { if (el !== inputLineEl) el.remove(); });
      // Re-add minimal prompt lines
      prependStatics();
      return;
    }

    const handler = CMDS[cmd] || CMDS[raw.trim().toLowerCase()];
    if (handler) {
      const result = handler();
      if (Array.isArray(result)) {
        result.forEach(({cls, t}) => appendLine(cls, t));
      }
    } else {
      appendLine("t-out-err", `  command not found: ${raw.trim()}  (type 'help' for commands)`);
    }

    // blank line after output
    appendLine("tg", "");
    scrollBottom();
  }

  function appendLine(cls, text, isCmd = false) {
    const p = document.createElement("p");
    p.className = "tl " + cls + " t-dynamic";
    if (isCmd) {
      p.innerHTML = `<span class="tp">$</span> <span class="t-out-cmd">${escHtml(text)}</span>`;
    } else if (cls === "tg") {
      // blank spacer
    } else {
      p.textContent = text;
    }
    body.insertBefore(p, inputLine);
    scrollBottom();
  }

  function escHtml(s) {
    return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }

  const termBodyEl = body;

  function scrollBottom() {
    termBodyEl.scrollTop = termBodyEl.scrollHeight;
  }

  function prependStatics() {
    // nothing — let the original HTML stay, we only clear dynamic lines on `clear`
  }

  /* ── Event listeners ── */
  // Click anywhere on terminal to focus input
  terminal.addEventListener("click", () => {
    input.focus();
    terminal.classList.add("t-focused");
    // move cursor to end
    const range = document.createRange();
    const sel   = window.getSelection();
    range.selectNodeContents(input);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  });

  input.addEventListener("focus", () => {
    terminal.classList.add("t-focused");
    cursor.style.display = "none";  // hide static cursor when typing
  });
  input.addEventListener("blur", () => {
    terminal.classList.remove("t-focused");
    cursor.style.display = "";
  });

  // Sync cursor visibility with input content
  input.addEventListener("input", () => {
    cursor.style.display = input.textContent.length ? "none" : "";
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = input.textContent;
      input.textContent = "";
      cursor.style.display = "";
      runCmd(val);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (histIdx < history.length - 1) histIdx++;
      input.textContent = history[histIdx] || "";
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx > 0) histIdx--;
      else { histIdx = -1; input.textContent = ""; }
      input.textContent = histIdx >= 0 ? history[histIdx] : "";
    }
    // Tab autocomplete
    if (e.key === "Tab") {
      e.preventDefault();
      const partial = input.textContent.trim().toLowerCase();
      const match = Object.keys(CMDS).find(k => k.startsWith(partial) && k !== partial);
      if (match) { input.textContent = match; }
    }
  });

})();
