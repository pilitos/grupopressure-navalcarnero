document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav ul');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }

  // Formulario de contacto -> mailto (sin backend). Sustituir por integración real si se desea.
  var form = document.querySelector('.form[data-contact]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nombre = form.nombre.value.trim();
      var telefono = form.telefono.value.trim();
      var email = form.email.value.trim();
      var mensaje = form.mensaje.value.trim();
      var destino = form.getAttribute('data-contact');
      var asunto = encodeURIComponent('Solicitud de presupuesto - ' + nombre);
      var cuerpo = encodeURIComponent(
        'Nombre: ' + nombre + '\nTeléfono: ' + telefono + '\nEmail: ' + email + '\n\n' + mensaje
      );
      window.location.href = 'mailto:' + destino + '?subject=' + asunto + '&body=' + cuerpo;
    });
  }
});
