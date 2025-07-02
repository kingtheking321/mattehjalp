// Initiera AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    once: true, // Animationen sker bara en gång
  });

  const toggleButton = document.getElementById('toggleDark');
  const body = document.body;

  // Kolla om användaren redan har valt mörkt/ljust tema tidigare (localStorage)
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = '☀️'; // Visa solikon vid mörkt läge
  } else {
    toggleButton.textContent = '🌙'; // Visa månikon vid ljust läge
  }

  // Växla tema vid knapptryck
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
      toggleButton.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleButton.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
});
