const canvas = document.getElementById('dots-bg');
const ctx = canvas.getContext('2d');
let dots = [];
const numDots = 240;  // doubled number of dots
const shake = 1.5;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function randomDot() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 0.7 + 0.4,  // reduced size range from 0.7-2.2 to 0.4-1.1
    phase: Math.random() * Math.PI * 2
  };
}

dots = Array.from({length: numDots}, randomDot);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dots.forEach(dot => {
    let dx = Math.sin(Date.now() / 600 + dot.phase) * shake;
    let dy = Math.cos(Date.now() / 600 + dot.phase) * shake;
    ctx.beginPath();
    ctx.arc(dot.x + dx, dot.y + dy, dot.r, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.globalAlpha = 0.7;
    ctx.fill();
    ctx.globalAlpha = 1;
  });
  requestAnimationFrame(animate);
}
animate();
