document.addEventListener("DOMContentLoaded", function () {
    const parallaxContainer = document.getElementById("parallaxContainer");
  
    parallaxContainer.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const { offsetWidth, offsetHeight } = parallaxContainer;
  
      const centerX = offsetWidth / 2; //centro en x del contenedor parallax
      const centerY = offsetHeight / 2; //centro en y del contenedor parallax
  
      const moveX = (clientX - centerX) / 20;
      const moveY = (clientY - centerY) / 20;
  
      const layer1 = document.querySelector(".layer1");
      const layer2 = document.querySelector(".layer2");
      const girl = document.querySelector(".girl");
      const panther = document.querySelector(".panther");
      const hulk = document.querySelector(".hulk");
      const grass = document.querySelector(".grass");
  
      // layer1.style.transform = `translateX(${moveX * -0.3}px) translateY(${moveY * -0.3}px) `;
      // layer2.style.transform = `translateX(${moveX * -0.5}px) translateY(${moveY * -0.5}px) `;
      // grass.style.transform = `translateX(${moveX * -0.9}px) translateY(${moveY * -0.9}px) scale(${1 + moveY/10 * 0.003})`;

      // layer2.style.transform = `scale(${1 + clientX/30 * 0.003})`;
      // grass.style.transform = `scale(${1 + clientX/30 * 0.003})`;

      panther.style.transform = `translateX(${moveX * -0.5}px) translateY(${moveY * -0.7}px) rotate(4deg)`;
      hulk.style.transform = `translateX(${moveX * -1.4}px) translateY(${moveY * -1.7}px)`;
      girl.style.transform = `translateX(${moveX * -1.9}px) translateY(${moveY * -2.2}px) rotate(-5.483deg)`;
    });
  });
  
  
  