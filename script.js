// Toggle dark mode
const toggleDarkBtn = document.getElementById('toggleDark');
const body = document.body;

toggleDarkBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleDarkBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('.section');

const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});
