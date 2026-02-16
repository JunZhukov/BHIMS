// BHMIS Demo - Basic interactivity
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Appointment form
  document.querySelector('.appointment-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Appointment request submitted! (Demo)');
  });

  // Medicine request form
  document.querySelector('.medicine-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Medicine request submitted! (Demo)');
  });

  // Set min date for appointment to today
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
});
