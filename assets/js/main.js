// Ashworth & Vale — shared behaviour, linked from every page.
// Mobile menu toggle + scroll-reveal for now; more added as later stages need it (filters, accordion, slider).

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Scroll reveal — fades/lifts elements marked data-reveal into place the first
  // time they enter the viewport. See styles.css for the animation itself.
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

      revealEls.forEach(function (el) { observer.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }

  // Hero scroll parallax — image drifts slower than the page. Desktop only
  // (perf + iOS Safari quirks on mobile) and skipped for prefers-reduced-motion.
  var heroImg = document.querySelector('.hero__media img');
  var isDesktop = window.matchMedia('(min-width: 900px)').matches;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (heroImg && isDesktop && !reducedMotion) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var offset = Math.min(window.scrollY * 0.25, 120);
        heroImg.style.transform = 'translateY(' + offset + 'px) scale(1.08)';
        ticking = false;
      });
    }, { passive: true });
  }

  // Big Stats count-up — animates each number from 0 to its target the first
  // time it scrolls into view. Skipped for prefers-reduced-motion: final
  // value is shown immediately instead of counting.
  var countEls = document.querySelectorAll('[data-count-to]');
  if (countEls.length) {
    var animateCount = function (el) {
      var target = parseFloat(el.getAttribute('data-count-to'));
      var suffix = el.getAttribute('data-suffix') || '';
      var decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals'), 10) : 0;

      if (reducedMotion) {
        el.textContent = target.toFixed(decimals) + suffix;
        return;
      }

      var duration = 1200;
      var start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (progress < 1) window.requestAnimationFrame(step);
      }

      window.requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
      var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      countEls.forEach(function (el) { countObserver.observe(el); });
    } else {
      countEls.forEach(animateCount);
    }
  }

  // Magnetic button hover — buttons pull very slightly toward the cursor.
  // Mouse/trackpad only (hover + fine pointer), never on touch devices, and
  // skipped for prefers-reduced-motion. Kept deliberately subtle (8px max
  // pull) — a hint of "aliveness," not a gimmick.
  var supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (supportsHover && !reducedMotion) {
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        var maxPull = 8;
        var pullX = Math.max(Math.min(x * 0.25, maxPull), -maxPull);
        var pullY = Math.max(Math.min(y * 0.25, maxPull), -maxPull);
        btn.style.transform = 'translate(' + pullX + 'px, ' + pullY + 'px)';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }
});
