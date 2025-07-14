document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formularioContacto");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
      }
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValido.test(email)) {
        alert("Ingresa un correo electrónico válido.");
        return;
      }
      alert("¡Formulario enviado correctamente!");
      form.reset();
    });
  }
});
      