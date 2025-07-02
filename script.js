const toggleBtn = document.getElementById('toggleDark');
const body = document.body;

// Kontrollera om användaren redan valt tema i localStorage
if(localStorage.getItem('darkMode') === 'enabled'){
  body.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if(body.classList.contains('dark')){
    toggleBtn.textContent = '☀️';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    toggleBtn.textContent = '🌙';
    localStorage.setItem('darkMode', 'disabled');
  }
});
