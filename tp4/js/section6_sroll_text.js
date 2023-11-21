
document.addEventListener("DOMContentLoaded", function () {
  // Obtener las posiciones de los títulos e imágenes
  let section6 = document.querySelector(".section6-colText");
  let title1 = document.getElementById("title-1");
  let title2 = document.getElementById("title-2");
  let title3 = document.getElementById("title-3");
  let title4 = document.getElementById("title-4");

  let text1 = document.getElementById("text-1");
  let text2 = document.getElementById("text-2");
  let text3 = document.getElementById("text-3");
  let text4 = document.getElementById("text-4");

  let texts = [text1, text2, text3, text4];

  let img1 = document.getElementById("image1");
  let img2 = document.getElementById("image2");
  let img3 = document.getElementById("image3");
  let img4 = document.getElementById("image4");

  const observador = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //indice del título actual del arreglo texts
        const index = texts.indexOf(entry.target);

        // Ajusta la opacidad de todas las imágenes a 0
        [img1, img2, img3, img4].forEach(img => (img.style.opacity = 0));
        //ajusta titulos
        [text1, text2, text3, text4].forEach(title => (title.style.opacity = 0));

        [title1, title2, title3, title4].forEach(title => (title.style.opacity = 0));
        // Ajusta la opacidad de la imagen correspondiente al título actual a 1
        
        switch (index) {
          case 0:
            img1.style.opacity = 1;
            text1.style.opacity = 1;
            title1.style.opacity = 1;
           // title2.style.opacity =0;
            break;
          case 1:
            img2.style.opacity = 1;
            text1.style.opacity = 0;
            title1.style.opacity = 0;
            text2.style.opacity = 1;
            title2.style.opacity =1;
            break;
          case 2:
            img3.style.opacity = 1;
            text3.style.opacity = 1;
            title3.style.opacity =1;
            text2.style.opacity = 0;
            title2.style.opacity = 0;
            break;
          case 3:
            img4.style.opacity = 1;
            title4.style.opacity = 1;
            text3.style.opacity = 0;
            title3.style.opacity = 0;
            text4.style.opacity = 1;
            break;
          default:
            break;
        }
      }
    });
  });

  // Observa cada título individual
  texts.forEach(title => {
    observador.observe(title);
  });

  // console.log("scroll", window.scrollY)
  // let bottomSection = section6.getBoundingClientRect().bottom;
  // let topImg2 = title2.getBoundingClientRect().top;
  // console.log("botom", bottomSection, "top", topImg2)
  // if(topImg2 < bottomSection){
  //   console.log("holaaaa")
  //   img2.style.opacity = 1;
  //   img1.style.opacity = 0;
  // }

  
});




// document.addEventListener('DOMContentLoaded', function () {
//     const containers = document.querySelectorAll('.s6-sticky-container');
//     let currentContainerIndex = 0;

//     function handleScroll() {
//       containers.forEach(function (container, index) {
//         const rect = container.getBoundingClientRect();
//         const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

//         if (isVisible) {
//           switchContainer(index);
//         }
//       });
//     }

//     function switchContainer(index) {
//       if (currentContainerIndex !== index) {
//         currentContainerIndex = index;
//         updateContent();
//       }
//     }

//     function updateContent() {
//       containers.forEach(function (container, index) {
//         const opacity = index === currentContainerIndex ? 1 : 0;
//         container.querySelector('.sticky-image').style.opacity = opacity;
//         container.querySelector('.text-container').style.opacity = opacity;
//       });
//     }

//     window.addEventListener('scroll', handleScroll);
//   });