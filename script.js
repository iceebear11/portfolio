// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===========================
// ROLE TEXT ANIMATION
// ===========================
const roles = [
  'Architecture Student',
  'Graphics Designer',
  'Python Enthusiast',
  'AI / ML Learner',
  'Photographer',
  'Football Lover'
];
let roleIndex = 0;
const roleText = document.getElementById('roleText');

function animateRole() {
  roleText.style.opacity = '0';
  roleText.style.transform = 'translateY(10px)';
  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleText.textContent = roles[roleIndex];
    roleText.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    roleText.style.opacity = '1';
    roleText.style.transform = 'translateY(0)';
  }, 300);
}

setInterval(animateRole, 2500);

// ===========================
// SCROLL REVEAL
// ===========================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger animation
      setTimeout(() => {
        entry.target.classList.add('active');
      }, 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// ===========================
// SKILL BAR ANIMATION
// ===========================
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const targetWidth = fill.getAttribute('data-width');
      fill.style.width = targetWidth + '%';
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ===========================
// PORTFOLIO FILTER TABS
// ===========================
const tabBtns = document.querySelectorAll('.tab-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active tab
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-tab');

    portfolioItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.classList.remove('hidden');
        item.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// ===========================
// FLOATING PARTICLES
// ===========================
const particlesContainer = document.getElementById('particles');
const PARTICLE_COUNT = 30;

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const p = document.createElement('div');
  const size = Math.random() * 3 + 1;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const dur = Math.random() * 20 + 10;
  const delay = Math.random() * 10;
  const opacity = Math.random() * 0.4 + 0.1;

  p.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}%;
    top: ${y}%;
    background: ${Math.random() > 0.5 ? '#7c3aed' : '#06b6d4'};
    border-radius: 50%;
    opacity: ${opacity};
    animation: particleFloat ${dur}s ${delay}s ease-in-out infinite alternate;
    box-shadow: 0 0 ${size * 3}px currentColor;
  `;
  particlesContainer.appendChild(p);
}

// Add particle animation to styles
const style = document.createElement('style');
style.textContent = `
  @keyframes particleFloat {
    0% { transform: translateY(0) translateX(0); }
    100% { transform: translateY(-${Math.random() * 60 + 20}px) translateX(${(Math.random() - 0.5) * 40}px); }
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
`;
document.head.appendChild(style);

// ===========================
// CONTACT FORM
// ===========================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const span = btn.querySelector('span');
    const icon = btn.querySelector('i');

    btn.disabled = true;
    span.textContent = 'Sending...';
    icon.className = 'fas fa-spinner fa-spin';

    setTimeout(() => {
      span.textContent = 'Message Sent! ✓';
      icon.className = 'fas fa-check';
      btn.style.background = 'linear-gradient(135deg, #16a34a, #4ade80)';
      contactForm.reset();

      setTimeout(() => {
        span.textContent = 'Send Message';
        icon.className = 'fas fa-paper-plane';
        btn.disabled = false;
        btn.style.background = '';
      }, 3000);
    }, 1500);
  });
}

// ===========================
// SMOOTH ACTIVE NAV LINK
// ===========================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(l => l.style.color = '');
        link.style.color = '#7c3aed';
      }
    }
  });
});

// ===========================
// CURSOR GLOW EFFECT
// ===========================
const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124,58,237,0.06), transparent 70%);
  pointer-events: none;
  z-index: 0;
  transform: translate(-50%, -50%);
  transition: left 0.15s ease, top 0.15s ease;
`;
document.body.appendChild(cursorGlow);

window.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});
