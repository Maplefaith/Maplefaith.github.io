//雪花
const fps = 30;
const mspf = Math.floor(1000 / fps) ; 

let width = window.innerWidth || document.documentElement.clientWidth;
let height = window.innerHeight || document.documentElement.clientHeight;
let canvas;
window.addEventListener('resize', () => {
  width = window.innerWidth || document.documentElement.clientWidth;
  height = window.innerHeight || document.documentElement.clientHeight;
  if (canvas) {
    canvas.width = width;
    canvas.height = height;
  }
});

let particles = [];
let wind = [0, 0];
let cursor = [0, 0];

function velocity(r) {
  return 70 / r + 30;
}

function sine_component(h, a) {
  return [2 * Math.PI / h, Math.random() * a, Math.random() * 2 * Math.PI]; // [frequency, amplitude, phase]
}

function calc_sine(components, x) {
  let sum = 0;
  for (let i = 0; i < components.length; i++) {
    const [f, a, p] = components[i];
    sum += Math.sin(x * f + p) * a;
  }
  return sum;
}

function gen_particle() {
  let r = Math.random() * 4 + 1;
  return {
    radius: r,
    x: Math.random() * width,
    y: -r,
    opacity: Math.random(),
    sine_components: [sine_component(height, 3), sine_component(height / 2, 2), sine_component(height / 5, 1), sine_component(height / 10, 0.5)],
  };
}

function update_pos(dt) {
  const n = particles.length;
  for (let i = 0; i < n; i++) {
    const v = velocity(particles[i].radius);
    particles[i].x += calc_sine(particles[i].sine_components, particles[i].y) * v / 5 * dt;
    particles[i].y += v * dt;

    // const dist = Math.hypot(particles[i].x - cursor[0], particles[i].y - cursor[1]) + 1;
    // particles[i].x += wind[0] * dt / dist
    // particles[i].y += wind[1] * dt / dist;

    if (particles[i].y - particles[i].radius > height) {
      particles[i] = gen_particle();  
    }
  }
}

let context_cache;
function get_context() {
  if (context_cache)
    return context_cache;

  canvas = document.createElement('canvas');
  canvas.id = 'snow-canvas';
  canvas.width = width;
  canvas.height = height;
  canvas.style = 'position: fixed; top: 0; left: 0; overflow: hidden; pointer-events: none; z-index: 256;';
  if ((document.documentElement.dataset.darkreaderMode || "").startsWith('filter'))
    canvas.style.filter = 'invert(1)';
  document.body.appendChild(canvas);

  context_cache = canvas.getContext('2d');
  return context_cache;
}

function draw() {
  const ctx = get_context();

  ctx.clearRect(0, 0, width, height);

  const n = particles.length;
  for (let i = 0; i < n; i++) {
    const p = particles[i];
    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
    ctx.shadowColor = '#80EDF7';
    ctx.shadowBlur = 7;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2*Math.PI);
    ctx.fill();
  }
}

let focused = true;
let disabled = false;
let lastTime = performance.now();
const requestFrame = () => setTimeout(loop, mspf);
function loop() {
  const dt = (performance.now() - lastTime) / 1000;

  if (particles.length < 120 && Math.random() < 0.1) {
    particles.push(gen_particle());
  }

  update_pos(dt);
  draw();

  lastTime = performance.now();
  if (focused && !disabled)
    requestFrame();
}


window.addEventListener('focus', () => {
  console.log('snow start');
  focused = true;
  lastTime = performance.now();
  requestFrame();
});

window.addEventListener('blur', () => {
  console.log('snow stop');
  focused = false;
});

window.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key == 's') {
    e.preventDefault();
    disabled = !disabled;
    if (disabled) {
      canvas.style.display = 'none';
    } else {
      canvas.style.display = 'block';
      lastTime = performance.now();
      requestFrame();
    }
  }
});

requestFrame();
//雪花

document.addEventListener("DOMContentLoaded", function () {
  // 查找所有具有 'fade-in-container' 类的元素
  const fadeInElements = document.querySelectorAll(".fade-in-container");

  fadeInElements.forEach((element) => {
    const text = element.getAttribute("data-text"); // 获取动态文字
    const color = element.getAttribute("data-color") || "#000000"; // 默认黑色
    const size = element.getAttribute("data-size") || "24px"; // 默认大小

    // 清空容器内容，避免重复
    element.innerHTML = '';

    // 设置容器样式
    element.style.color = color;
    element.style.fontSize = size;
    element.style.textAlign = 'center'; // 水平居中

    // 拆分文本并逐个创建 span
    text.split('').forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char; // 设置字符内容
      span.style.opacity = 0; // 初始透明度为 0
      span.style.display = 'inline-block'; // 使每个字符在同一行
      span.style.transition = `opacity 0.5s ease ${index * 0.25}s`; // 每个字符的淡入延迟
      element.appendChild(span); // 添加到容器
    });

    // 设置字符在 DOM 中的淡入效果
    setTimeout(() => {
      const spans = element.querySelectorAll("span");
      spans.forEach((span) => {
        span.style.opacity = 1; // 逐个设置透明度为 1
      });
    }, 500); // 初始延迟，确保所有字符都准备好
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // 查找所有具有 'typing-container' 类的元素
  const typingElements = document.querySelectorAll(".typing-container");

  typingElements.forEach((element) => {
    const text = element.getAttribute("data-text"); // 获取动态文字
    const color = element.getAttribute("color") || "#000000"; // 默认黑色
    const size = element.getAttribute("size") || "24px"; // 默认大小 24px

    let index = 0;

    // 设置文字颜色和大小
    element.style.color = color;
    element.style.fontSize = size;
    
    element.textContent = text;
    // function typeCharacter() {
    //   if (index < text.length) {
    //     element.textContent += text.charAt(index); // 逐字显示
    //     index++;
    //     setTimeout(typeCharacter, 200); // 每个字符显示间隔 200ms
    //   }
    // }

    // typeCharacter();
  });
});

