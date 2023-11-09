document.addEventListener('DOMContentLoaded', function () {
    const stickyImages = document.querySelectorAll('.sticky-image');
    let currentImage = 1;
  
    function handleScroll() {
      stickyImages.forEach(function (image, index) {
        const rect = image.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  
        if (isVisible) {
          switchImage(index + 1);
        }
      });
    }
  
    function switchImage(index) {
      if (currentImage !== index) {
        currentImage = index;
        updateImage();
      }
    }
  
    function updateImage() {
      stickyImages.forEach(function (image) {
        image.style.opacity = 0;
      });
      const currentStickyImage = document.getElementById(`image${currentImage}`);
      currentStickyImage.style.opacity = 1;
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  