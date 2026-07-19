// Ashworth & Vale — shared behaviour, linked from every page.
// Mobile menu toggle only for now; more added as later stages need it (filters, accordion, slider).

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});
