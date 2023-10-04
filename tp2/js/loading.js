let button = document.querySelectorAll('button.fake-loader');
let loading = document.getElementById('loading');

function actualizarPorcentaje() {
    let porcentaje = 10; 
    let porcentajeElement = document.getElementById('porcentaje');

    let intervalo = setInterval(function() {
        if (porcentaje < 100) {
            porcentaje += 10; 
            porcentajeElement.textContent = 'cargando...' + porcentaje + '%';         } else {
            clearInterval(intervalo); 
        }
        }, 500); 
}


function loadingCircle (e) {
        e.preventDefault();
        loading.classList.remove('no-visible');        
        loading.classList.add('visible');
        actualizarPorcentaje();
        setTimeout(function() {
            window.location.href = './index.html';
        }, 5000);
}

button.forEach (b => {
        b.addEventListener('click', loadingCircle);
});



