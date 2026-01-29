import './style.css';
import 'particles.js';

declare const particlesJS: any;

// Initialize Particles.js
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ff4500'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ff6b35',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  body.classList.add('light-mode');
  if (themeToggle) themeToggle.checked = true;
}

// Toggle theme on checkbox change
if (themeToggle) {
  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      // Update particles color for light mode
      updateParticlesColor('#ff4500', '#ff6b35');
    } else {
      body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      // Update particles color for dark mode
      updateParticlesColor('#ff4500', '#ff6b35');
    }
  });
}

// Function to update particles color
function updateParticlesColor(particleColor: string, lineColor: string) {
  if (typeof particlesJS !== 'undefined' && (window as any).pJSDom && (window as any).pJSDom[0]) {
    const pJS = (window as any).pJSDom[0].pJS;
    pJS.particles.color.value = particleColor;
    pJS.particles.line_linked.color = lineColor;
    pJS.fn.particlesRefresh();
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const href = anchor.getAttribute('href');
    if (href) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar') as HTMLElement;
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.style.background = body.classList.contains('light-mode') 
      ? 'rgba(255, 255, 255, 0.98)' 
      : 'rgba(0, 0, 0, 0.98)';
  } else {
    navbar.style.background = body.classList.contains('light-mode')
      ? 'rgba(255, 255, 255, 0.95)'
      : 'rgba(0, 0, 0, 0.95)';
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .concept-card, .highlight-item').forEach(el => {
  observer.observe(el);
});

// Update copyright year dynamically
const yearElement = document.getElementById('current-year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear().toString();
}

console.log('Team Raga MV LEVTeam - Website Initialized');
