const translate = document.querySelectorAll(".translate-scroll");
const logo = document.querySelector(".logo");
const header = document.getElementById("header");
const spiderBco1 = document.querySelector(".spiderBco");
const spiderRed1 = document.querySelector(".spiderRed");
const spiderBlack1 = document.querySelector(".spiderBlack");
const bildingLeft = document.querySelector(".bildingLeft");
const bildingRight = document.querySelector(".bildingRight");
const bildingCenter = document.querySelector(".bildingCenter");
let initialPosition = -50; // Posición inicial
let currentPosition = initialPosition;
let scrollLimit = 250;


window.addEventListener("scroll", () =>{
    let scroll = window.scrollY;
    let speed;
    let scrollDirection = getScrollDirection();
    //console.log("hola",scroll);
    translate.forEach(elem => {
         speed = elem.dataset.speed;
       
         elem.style.transform = `translateY(${scroll*speed}px)`;
//        // elem.style.transform = `translateX(${scroll*speed}px)`;
     })
   // let scale = Math.max(1, Math.min(1.25, 1 + scroll * 0.25));
    if (scrollDirection === "down" ) {
        currentPosition = Math.min(currentPosition + 2, 0);
       // if(scroll <= scrollLimit){
            spiderBco1.style.transform = `translateY(${-scroll*0.25}px) translateX(${-scroll*0.25}px) scale(0.85)`;
            spiderBlack1.style.transform = `translateY(${-scroll*0.2}px) translateX(${scroll*0.2}px) scale(0.85)`;
      //  }
        spiderRed1.style.transform = ` translateY(${-scroll*0.15}px) `;
        
        
    } else {
        currentPosition = Math.max(currentPosition - 2, initialPosition);
       // scale = Math.max(1, Math.min(1.25, 1 + scroll * 0.25));
      // if(scroll > scrollLimit){
            spiderBlack1.style.transform = `translateY(${-scroll*-0.20}px) translateX(${scroll*-0.2}px) scale(1)`;
            spiderBco1.style.transform = `translateY(${-scroll*-0.25}px) translateX(${-scroll*-0.25}px)scale(1)`;
      // }
        spiderRed1.style.transform = ` translateY(${-scroll*-0.15}px)   `;
    }

    //spiderBco1.style.transform = `scale(1.05) translateY(${scroll*speed}px)`;
    bildingLeft.style.left = currentPosition + "px";
    bildingRight.style.right = currentPosition + "px";

   // var newsize = 1 - (scroll / 100); // Puedes ajustar este valor según tus necesidades
  //  var newHeight= 301 - scroll * 0.02; // Puedes ajustar este valor según tus necesidades
    
    var newOpacity = 1 - scroll * 0.01; // Puedes ajustar este valor según tus necesidades

    // Aplica los nuevos estilos al logo
    
    if(scroll > 40){
        logo.style.transform = ` translateX(-10%) scale(0.25) `;
        logo.style.position = `fixed`;
        logo.style.top = "-110px";
        //logo.style.tran = newWidth;
       // logo.style.height = newHeight;
       // logo.style.opacity = newOpacity;
        headerSticky();
    }
     else {
        header.style.height = "227px";
        document.body.classList.remove("sticky-header");
        logo.style.transform = `scale(1) `;
        logo.style.position = `absolute`;
        logo.style.top = "-30px";
        header.style.zIndex = `-1`;
     //   logo.style.zIndex = `10001`;
        
    }
    // if(scroll > 150){
        
    // }
   // logo.style.transform = `translateY(${-scroll*0.9}px) scale(0.5) `;
    //logo.style.transform = ``;
})

function getScrollDirection() {
    let currentScroll = window.scrollY;

    if (currentScroll > (window.lastScroll || 0)) {
      window.lastScroll = currentScroll;
      return "down";
    } else {
      window.lastScroll = currentScroll;
      return "up";
    }
  }

const headerSticky = ()=> {
   header.style.height = "80px";
   header.style.zIndex = `10001`;
   document.body.classList.add("sticky-header");

   //header
   // header.style.position = "sticky";
}