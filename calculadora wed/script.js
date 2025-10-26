const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        //  Botón C (limpiar todo)
        if (boton.id === 'c') {
            pantalla.textContent = '0';
            return;
        }

        // Botón borrar (⬅)
        if (boton.id === 'borrar') {
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'ERROR') {
                pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        //  Botón igual (=)
        if (boton.id === 'igual') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = 'ERROR';
            }
            return;
        }

        //Agregar números u operadores
        if (pantalla.textContent === '0' || pantalla.textContent === 'ERROR') {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});
