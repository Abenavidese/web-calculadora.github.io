// Obtener elementos del DOM
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

// Crear instancia de la clase Display
const display = new Display(displayValorAnterior, displayValorActual);

// Agregar evento click a los botones de números
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

// Agregar evento click a los botones de operadores
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});
