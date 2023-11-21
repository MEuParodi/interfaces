const btn = document.getElementById("btn-hambur");
const nav = document.getElementById("nav");
const gwen = document.getElementById("gwen");
const peter = document.getElementById("peter");
const miles = document.getElementById("miles");


btn.addEventListener("click", ()=>{
    console.log("hola", nav);
    nav.classList.toggle("close-sidebar");
    // gwen.style.opacity = 1;
    // peter.style.opacity = 1;
    // miles.style.opacity = 1;
    
})
console.log("hola2", nav);