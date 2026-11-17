(function () {
  // Mobile menu
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Testimonial scroller buttons
  var track = document.querySelector('.reviews');
  document.querySelectorAll('[data-scroll]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!track) return;
      var dir = btn.getAttribute('data-scroll') === 'next' ? 1 : -1;
      track.scrollBy({ left: dir * 400, behavior: 'smooth' });
    });
  });

  // Contact form (front-end only — connect to a form service or your backend)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      document.getElementById('form-msg').classList.add('show');
      form.reset();
    });
  }
})();
