const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

// Variables para la animación Matrix
const characters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

// Función principal de animación Matrix
function drawMatrix() {
  // Llenamos el fondo con un color semitransparente para "borrar" un poco
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Color y fuente para los caracteres
  ctx.fillStyle = "#00ffcc";
  ctx.font = `${fontSize}px monospace`;

  // Dibujar cada "columna" de caracteres
  for (let i = 0; i < drops.length; i++) {
    const char = characters[Math.floor(Math.random() * characters.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    // Si el carácter se sale de la pantalla, lo reiniciamos
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Ejecutar la animación ~20fps
setInterval(drawMatrix, 50);

// Ajustar el canvas si se cambia el tamaño de la ventana
window.addEventListener("resize", resizeCanvas);

// IntersectionObserver para animar las secciones al entrar en pantalla
const sections = document.querySelectorAll("section");
const options = { threshold: 0.15 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

sections.forEach((section) => observer.observe(section));










