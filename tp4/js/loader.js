
document.addEventListener("DOMContentLoaded", loading);

function actualizarPorcentaje() {
    let porcentaje = 10; 
    let porcentajeElement = document.getElementById('porcentaje');

    let intervalo = setInterval(function() {
        if (porcentaje < 100) {
            porcentaje += 10; 
            porcentajeElement.textContent = 'cargando...' + porcentaje + '%';         
        } 
        else {
            clearInterval(intervalo); 
        }
        }, 500); 
}


function loading (e) {
        e.preventDefault();
        actualizarPorcentaje();
        setTimeout(function() {
            window.location.href = './index.html';
        }, 5000);

}






