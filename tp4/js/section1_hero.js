const logo = document.querySelector(".logo");
const header = document.getElementById("header");
const spiderBco1 = document.querySelector(".spiderBco");
const spiderRed1 = document.querySelector(".spiderRed");
const spiderBlack1 = document.querySelector(".spiderBlack");
const bildingLeft = document.querySelector(".bildingLeft");
const bildingRight = document.querySelector(".bildingRight");
const bildingCenter = document.querySelector(".bildingCenter");
const sky = document.querySelector(".sky");
const imagesSection1 = [spiderBco1, spiderRed1, spiderBlack1, bildingLeft, bildingRight, bildingCenter, logo];

const cargarElem = () => {
  console.log("cargar")
  imagesSection1.forEach((c) => {
    c.classList.remove("close");
  });
};

// Llama a la función después de 1 segundo
setTimeout(cargarElem, 1000);


window.addEventListener("scroll", () =>{
  

  let scroll = window.scrollY;
  //logo
  if(scroll > 20){
    logo.style.transform = `translateY(-25%)  translateX(-10%) scale(0.25) `;
    logo.style.position = `fixed`;
    headerSticky();
  }
   else {
    header.style.height = "227px";
    document.body.classList.remove("sticky-header");
    logo.style.transform = `scale(1) `;
    logo.style.position = `absolute`;
    logo.style.top = "-30px";
    header.style.zIndex = `1`;
  }

 //personajes
  spiderBco1.style.transform = `translateY(${-scroll*0.35}px) translateX(${-scroll*0.35}px) `;
  spiderBlack1.style.transform = `translateY(${-scroll*0.25}px) translateX(${scroll*0.25}px)`;
  spiderRed1.style.transform = ` translateY(${-scroll*0.45}px) `;
  //cielo
  sky.style.transform = `translateY(${scroll*0.4}px)`
  //edificios
  bildingCenter.style.transform = `scale(${1+scroll*0.0005}) translateX(${scroll*0.050}px)`;
  bildingLeft.style.transform = `translateY(${scroll*0.10}px) translateX(${-scroll*0.10}px) `;
  bildingRight.style.transform = `translateY(${scroll*0.10}px)translateX(${scroll*0.10}px)  `;

})


const headerSticky = ()=> {
   header.style.height = "80px";
   header.style.zIndex = `10001`;
   document.body.classList.add("sticky-header");
   header.style.position = "sticky";
}

