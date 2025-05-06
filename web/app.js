// JavaScript for scroll-triggered table animation
window.addEventListener('scroll', () => {
    const table = document.querySelector('table');
    const tablePosition = table.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (tablePosition < windowHeight * 0.8) {
      table.classList.add('visible');
    }
  });