document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.s6-sticky-container');
    let currentContainerIndex = 0;

    function handleScroll() {
      containers.forEach(function (container, index) {
        const rect = container.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
          switchContainer(index);
        }
      });
    }

    function switchContainer(index) {
      if (currentContainerIndex !== index) {
        currentContainerIndex = index;
        updateContent();
      }
    }

    function updateContent() {
      containers.forEach(function (container, index) {
        const opacity = index === currentContainerIndex ? 1 : 0;
        container.querySelector('.sticky-image').style.opacity = opacity;
        container.querySelector('.text-container').style.opacity = opacity;
      });
    }

    window.addEventListener('scroll', handleScroll);
  });