
const btn = document.getElementById("btn-hambur");
const nav = document.getElementById("nav");
const gwen = document.getElementById("gwen");
const peter = document.getElementById("peter");
const miles = document.getElementById("miles");

const lineOne = document.getElementById("line-one");
const lineTwo = document.getElementById("line-two");
const lineThree = document.getElementById("line-three");
const itemsMenu = [gwen, peter, miles];


btn.addEventListener("click", ()=>{

    itemsMenu.forEach(elem =>{
        elem.classList.toggle("closed");
       // elem.classList.add("opened");
    })

    //console.log("hola", nav);
    //nav.classList.toggle("close-sidebar");
    // gwen.style.opacity = 1;
    // peter.style.opacity = 1;
    // miles.style.opacity = 1;
    lineOne.classList.toggle("change-line-one");
    lineTwo.classList.toggle("change-line-two");
    lineThree.classList.toggle("change-line-three");
    
})
console.log("hola2", nav);


// const btn = document.getElementById("btn-hambur");
// const nav = document.getElementById("nav");
// const gwen = document.getElementById("gwen");
// const peter = document.getElementById("peter");
// const miles = document.getElementById("miles");


// btn.addEventListener("click", ()=>{
//     console.log("hola", nav);
//     nav.classList.toggle("close-sidebar");
//     // gwen.style.opacity = 1;
//     // peter.style.opacity = 1;
//     // miles.style.opacity = 1;
    
// })
// console.log("hola2", nav);