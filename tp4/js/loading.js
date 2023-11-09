document.addEventListener('DOMContentLoaded', function () {
    const textElements = document.querySelectorAll('.animated-text');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    function handleScroll() {
      textElements.forEach(function (element) {
        if (isInViewport(element)) {
          element.classList.add('show');
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
  });