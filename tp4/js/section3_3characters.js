// Obtén todos los elementos con la clase deseada
var translateElements = document.getElementsByClassName('image-wrapper');

// Función para verificar si un elemento está en la pantalla
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para manejar el evento de desplazamiento
function handleScroll() {
  // Itera sobre todos los elementos con la clase y aplica la transformación al primero que esté en pantalla
  for (var i = 0; i < translateElements.length; i++) {
    if (isInViewport(translateElements[i])) {
      // Agrega la clase para activar la transformación cuando el elemento está en pantalla
      translateElements[i].classList.add('active');
      // Desvincula el evento de desplazamiento después de aplicar la transformación
      window.removeEventListener('scroll', handleScroll);
      break; // Termina el bucle después de aplicar la transformación al primer elemento en pantalla
    }
  }
}

// Agrega el evento de desplazamiento para activar la transformación
window.addEventListener('scroll', handleScroll);
