document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 800, once: true });

  const toggle = document.getElementById("toggleDark");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
