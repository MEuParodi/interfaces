document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('#ppal-carrousel .menu li a');
  const sliderItems = document.querySelectorAll('#ppal-carrousel .slider li');

  menuLinks.forEach(function(link, index) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Elimina la clase "active" de todos los enlaces
      menuLinks.forEach(function(item) {
        item.classList.remove('active');
      });

      // Agrega la clase "active" solo al enlace que se hizo clic
      this.classList.add('active');

      // Oculta todas las imágenes del slider
      sliderItems.forEach(function(item) {
        item.style.opacity = 0;
      });

      // Muestra la imagen correspondiente al enlace que se hizo clic
      sliderItems[index].style.opacity = 1;
    });
  });
});