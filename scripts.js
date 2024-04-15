document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los botones de mostrar respuesta
    const showAnswerButtons = document.querySelectorAll('.show-answer');

    // Agregar evento click a cada botón
    showAnswerButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el elemento hermano siguiente
            const answer = this.nextElementSibling;
            // Alternar la visibilidad de la respuesta
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                this.textContent = 'Ocultar Respuesta';
            } else {
                answer.style.display = 'none';
                this.textContent = 'Mostrar Respuesta';
            }
        });
    });
});

// Función para procesar la donación
function donar() {
    // Obtener el valor del monto de la donación
    var monto = document.getElementById("monto").value;
    // Verificar si el valor es un número
    if (!isNaN(monto)) {
        alert("¡Gracias por su donación!");
    } else {
        alert("Por favor ingrese un número válido.");
    }
}


