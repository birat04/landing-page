document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});

document.getElementById('newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for subscribing!');
  this.reset();
});