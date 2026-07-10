/* ==========================================================================
   Main interactions — nav, reveal-on-scroll, typing tagline,
   project card rendering, mailto contact form.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initTyping();
  initReveal();
  renderProjects();
  initContactForm();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---- Navbar shrink/blur on scroll ---- */
function initNavbar() {
  const nav = document.getElementById("navbar");
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---- Mobile menu toggle ---- */
function initMobileMenu() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    menu.classList.toggle("open");
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      btn.classList.remove("open");
      menu.classList.remove("open");
    })
  );
}

/* ---- Terminal-style rotating typing effect ---- */
function initTyping() {
  const el = document.getElementById("typing-text");
  if (!el) return;

  const lines = [
    "designing multi-agent systems that reason.",
    "cutting RAG inference cost by 6000x.",
    "shipping models to production, not just notebooks.",
    "building agentic pipelines that scale."
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = lines[lineIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
    }

    setTimeout(tick, deleting ? 28 : 42);
  }

  tick();
}

/* ---- Scroll reveal via IntersectionObserver ---- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => io.observe(el));
}

/* ---- Render project cards from projects.js data ---- */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid || typeof projects === "undefined") return;

  grid.innerHTML = projects
    .map(
      (p) => `
    <article class="project-card reveal">
      <div class="project-termbar">
        <span class="td a"></span><span class="td b"></span><span class="td c"></span>
        <span class="path">${escapeHtml(p.path)}</span>
      </div>
      <div class="project-body">
        <div class="project-top">
          <div>
            <h3 class="project-title">${escapeHtml(p.title)}</h3>
            <p style="margin:2px 0 0;font-size:12.5px;color:var(--text-faint);">${escapeHtml(p.subtitle)}</p>
          </div>
          <span class="project-date">${escapeHtml(p.date)}</span>
        </div>
        <span class="project-metric">▲ ${escapeHtml(p.metric)}</span>
        <p class="project-desc">${escapeHtml(p.description)}</p>
        <div class="project-tags">
          ${p.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
        </div>
      </div>
    </article>
  `
    )
    .join("");

  // re-observe newly injected cards for reveal animation
  initReveal();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---- Contact form: builds a mailto: link client-side (no backend needed) ---- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim() || "Portfolio contact";
    const message = form.message.value.trim();

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:afaqbhatti147@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });
}
