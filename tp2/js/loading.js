// Obtén referencia al botón y a la imagen
let button1 = document.getElementById('log-in');
let button2 = document.getElementById('log-google');
let button3 = document.getElementById('log-fb');
let loading = document.getElementById('loading');

// Agrega un evento click al botón
button1.addEventListener('click', function() {
    loading.classList.remove('no-visible');        
    loading.classList.add('visible');
    setTimeout(function() {
            window.location.href = './index.html';
    }, 5000); 
});

button2.addEventListener('click', function() {
    loading.classList.remove('no-visible');        
    loading.classList.add('visible');
    setTimeout(function() {
            window.location.href = './index.html';
    }, 5000); 
});

button3.addEventListener('click', function() {
    loading.classList.remove('no-visible');        
    loading.classList.add('visible');
    setTimeout(function() {
            window.location.href = './index.html';
    }, 5000); 
});


// function actualizarPorcentaje() {
//     let porcentaje = 10; 
//     let porcentajeElement = document.getElementById('porcentaje');

//     let intervalo = setInterval(function() {
//         if (porcentaje < 100) {
//             porcentaje += 10; 
//             porcentajeElement.textContent = 'cargando...' + porcentaje + '%';
//         } else {
//             clearInterval(intervalo); 
//         }
//     }, 5000); 
// }

// actualizarPorcentaje();
