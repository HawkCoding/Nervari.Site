(function () {
  'use strict';

  var doc = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var form = document.getElementById('lead-form');
  var formSection = document.getElementById('book');
  var firstField = document.getElementById('f-name');
  var hero = document.getElementById('hero');
  var sticky = document.getElementById('sticky');
  var hasIO = 'IntersectionObserver' in window;

  /* Section reveal: short fade and rise. CSS shows everything when
     reduced motion is on, or when this script does not run. */
  if (hasIO && !reduceMotion.matches) {
    doc.classList.add('can-reveal');
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealIO.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { revealIO.observe(el); });
  }

  /* Every button goes to the form and puts the cursor in the first field. */
  function goToForm(e) {
    if (e) e.preventDefault();
    if (!formSection) return;
    var target = form && !form.hidden ? firstField : document.getElementById('form-done');
    formSection.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
    if (target) target.focus({ preventScroll: true });
    if (history.replaceState) history.replaceState(null, '', '#book');
  }
  document.querySelectorAll('[data-cta]').forEach(function (a) {
    a.addEventListener('click', goToForm);
  });

  /* Phone sticky bar: shows after the hero, hides while the form is on screen. */
  if (sticky && hasIO && hero && formSection) {
    var heroVisible = true;
    var formVisible = false;
    var update = function () {
      var show = !heroVisible && !formVisible;
      sticky.classList.toggle('is-shown', show);
      sticky.inert = !show;
      sticky.setAttribute('aria-hidden', show ? 'false' : 'true');
    };
    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
      update();
    }, { threshold: 0 }).observe(hero);
    new IntersectionObserver(function (entries) {
      formVisible = entries[0].isIntersecting;
      update();
    }, { threshold: 0, rootMargin: '0px 0px -20% 0px' }).observe(formSection);
    update();
  }

  /* Form: check the fields, then show the notice. Nothing is sent or stored. */
  if (!form) return;
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var rules = [
    { id: 'f-name', test: function (v) { return v.length >= 2; }, msg: 'Please enter your name.' },
    { id: 'f-email', test: function (v) { return EMAIL.test(v); }, msg: 'Please enter a valid email address.' }
  ];

  function setError(field, msg) {
    var err = document.getElementById(field.id + '-err');
    field.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (err) err.textContent = msg || '';
  }

  rules.forEach(function (r) {
    var field = document.getElementById(r.id);
    field.addEventListener('input', function () {
      if (field.getAttribute('aria-invalid') === 'true' && r.test(field.value.trim())) setError(field, '');
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var firstBad = null;
    rules.forEach(function (r) {
      var field = document.getElementById(r.id);
      var ok = r.test(field.value.trim());
      setError(field, ok ? '' : r.msg);
      if (!ok && !firstBad) firstBad = field;
    });
    if (firstBad) { firstBad.focus(); return; }

    form.reset();
    form.hidden = true;
    var done = document.getElementById('form-done');
    done.hidden = false;
    done.focus({ preventScroll: true });
    done.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'center' });
  });
})();
