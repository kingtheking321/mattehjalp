// Toggle mörkt läge
const toggleDarkBtn = document.getElementById('toggleDark');
const body = document.body;

function setDarkMode(enabled) {
  if (enabled) {
    body.classList.add('dark');
    toggleDarkBtn.textContent = '☀️';
    toggleDarkBtn.setAttribute('aria-pressed', 'true');
  } else {
    body.classList.remove('dark');
    toggleDarkBtn.textContent = '🌙';
    toggleDarkBtn.setAttribute('aria-pressed', 'false');
  }
}

toggleDarkBtn.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  setDarkMode(!isDark);
  // Spara val i localStorage
  localStorage.setItem('darkMode', !isDark);
});

// Läs sparat tema vid laddning
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme === 'true') {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }
});
