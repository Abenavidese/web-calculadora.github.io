document.addEventListener("DOMContentLoaded", function() {
    const showAnswerButtons = document.querySelectorAll('.show-answer');

    showAnswerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
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


function donar() {
    var monto = document.getElementById("monto").value;
    if (!isNaN(monto)) {
        alert("¡Gracias por su donación!");
    } else {
        alert("Por favor ingrese un número válido.");
    }
}