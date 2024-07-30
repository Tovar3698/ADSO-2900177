/**
 * Javier Ricardo Tovar T.
 * 22/07/2024
 * bingo js
 */

document.addEventListener('DOMContentLoaded', function() {
    const letras = ['B', 'I', 'N', 'G', 'O'];
    let bingo = [];
    let contador = 0;

    console.log("\nBingo");

    for (let i = 0; i < 5; i++) {
        let fila = [];
        for (let j = 0; j < 5; j++) {
            contador += 1;
            fila.push(contador * 3);
        }
        bingo.push(fila);
    }
    console.log(bingo);

    let printResultado = '';


    function generarTabla(bingo, condicional) {
        printResultado += '<table class="table"><tr>';
        letras.forEach(letra => {
            printResultado += `<th class="borde color-letra">${letra}</th>`;
        });
        printResultado += '</tr>';
        for (let i = 0; i < 5; i++) {
            printResultado += '<tr>';
            for (let j = 0; j < 5; j++) {
                let clase = condicional(i, j) ? 'color-1' : '';
                printResultado += `<td class="borde ${clase}">${bingo[i][j]}</td>`;
            }
            printResultado += '</tr>';
        }
        printResultado += '</table>';
    }


    generarTabla(bingo, () => false);

    for (let i = 0; i < 5; i++) {
        generarTabla(bingo, (x, y) => y == i);
    }

    generarTabla(bingo, (i, j) => i == j || i + j == 4);

    generarTabla(bingo, (i, j) => {
        if (i <= 3 && j >= 1 && j <= 4 && i % 2 === 0 && j % 2 === 1) return true;
        if (i <= 2 && j >= 1 && j <= 2 && i % 2 === 1 && j % 2 === 0) return true;
        if (i >= 2 && j <= 3 && i % 2 === 0 && j % 2 === 0) return true;
        if (i >= 2 && j <= 2 && i % 2 === 1 && j % 2 === 1) return true;
        if (i >= 2 && j >= 2 && i % 2 === 0 && j % 2 === 0) return true;
        if (i >= 2 && j >= 2 && i % 2 === 1 && j % 2 === 1) return true;
        return false;
    });

    document.getElementById('bingo-1').innerHTML = printResultado;
});
