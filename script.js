
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(mode) {
  if (mode === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';// to make dark mode...abhi
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    themeToggleBtn.textContent = '🌙';// to make it light mode...abhi
    localStorage.setItem('theme', 'light');
  }
}


const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Toggle on button click ...abhi
themeToggleBtn.addEventListener('click', () => {
  const isDark = body.classList.contains('dark-mode');
  setTheme(isDark ? 'light' : 'dark');
});

//this function for the email.js but have stopped ...abhi
(function () {
  emailjs.init(""); //  Replace with your actual EmailJS User ID ...abhi
})();

const form = document.getElementById('contact-form');
const statusText = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  statusText.innerText = 'Sending...';

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this) //Replace with actual values abhi...
    .then(() => {
      statusText.innerText = '✅ Message sent successfully!';
      form.reset();
    }, (error) => {
      console.error('EmailJS Error:', error);
      statusText.innerText = '❌ Failed to send. Try again later.';
    });
});

//animations ...abhi
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.section, .project-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
