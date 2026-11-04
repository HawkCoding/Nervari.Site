// Contact form
(function () {
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    note.textContent = 'This is an example page. Your details were not sent or saved.';
    note.hidden = false;
    form.reset();
  });
})();
