import './style.css';

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
    } else {
      body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  });
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
      : 'rgba(10, 10, 15, 0.98)';
  } else {
    navbar.style.background = body.classList.contains('light-mode')
      ? 'rgba(255, 255, 255, 0.95)'
      : 'rgba(10, 10, 15, 0.95)';
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

console.log('Team Raga MV LEVTeam - Website Initialized');
