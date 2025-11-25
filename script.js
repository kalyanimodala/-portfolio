// Simple interactive bits: menu toggle and contact form handler
document.getElementById('menuBtn').addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Contact form: basic front-end behavior only (no server)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = 'Thank you — message sent (demo).';
  formMsg.style.color = '#059669';
  form.reset();
  setTimeout(()=> formMsg.textContent = '', 4000);
});
