// Obtén referencia al botón y a la imagen
var button1 = document.getElementById('log-in');
var button2 = document.getElementById('log-google');
var button3 = document.getElementById('log-fb');

// Agrega un evento click al botón
button1.addEventListener('click', function() {
    // Muestra la imagen
    var popUp = window.open('./loading.html');
    // Espera 3 segundos antes de redirigir a otra página
    setTimeout(function() {
        // Redirige a la nueva página (reemplaza 'nueva_pagina.html' con la URL deseada)
        popUp.close();
        window.location.href = './index.html';
    }, 2000); // 2000 milisegundos (2 segundos)
});

button2.addEventListener('click', function() {
    var popUp = window.open('./loading.html');
    setTimeout(function() {
        popUp.close();
        window.location.href = './index.html';
    }, 2000); 
});

button3.addEventListener('click', function() {
    var popUp = window.open('./loading.html');
    setTimeout(function() {
        popUp.close();
        window.location.href = './index.html';
    }, 2000); 
});
