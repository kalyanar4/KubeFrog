const year = document.getElementById("year");
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

year.textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

const counters = document.querySelectorAll("[data-counter]");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const el = entry.target;
      const target = Number(el.dataset.counter);

      if (prefersReducedMotion) {
        el.textContent = target.toString();
        counterObserver.unobserve(el);
        return;
      }

      let current = 0;
      const step = target / 60;

      const tick = () => {
        current += step;
        if (current >= target) {
          el.textContent = target.toString();
          return;
        }

        el.textContent = current.toFixed(target % 1 ? 2 : 0);
        requestAnimationFrame(tick);
      };

      tick();
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.7 }
);

counters.forEach((el) => counterObserver.observe(el));

if (!prefersReducedMotion) {
  const tiltCards = document.querySelectorAll(".tilt");

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const rotateX = -((y / bounds.height) - 0.5) * 8;
      const rotateY = ((x / bounds.width) - 0.5) * 10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
}

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let animationFrameId;

const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = Array.from(
    { length: Math.min(110, Math.floor(window.innerWidth / 14)) },
    () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 2 + 0.5,
    })
  );
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const particle of particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > canvas.width) {
      particle.vx *= -1;
    }

    if (particle.y < 0 || particle.y > canvas.height) {
      particle.vy *= -1;
    }

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(139, 216, 255, 0.7)";
    ctx.fill();
  }

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.hypot(dx, dy);

      if (distance < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(114, 242, 195, ${1 - distance / 120})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  animationFrameId = requestAnimationFrame(draw);
};

window.addEventListener("resize", resize);
resize();

if (!prefersReducedMotion) {
  draw();
} else {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("beforeunload", () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
