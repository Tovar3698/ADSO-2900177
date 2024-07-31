/**
 * Javier Ricardo Tovar T.
 * 27/07/2024
 * bingo js
 */

 document.addEventListener('DOMContentLoaded', function() {
            const letras = ['B', 'I', 'N', 'G', 'O'];
            let bingo = [];
            let contador = 0;

         
            for (let i = 0; i < 5; i++) {
                let fila = [];
                for (let j = 0; j < 5; j++) {
                    contador += 1;
                    fila.push(contador * 3);
                }
                bingo.push(fila);
            }
            console.log(bingo);

            let printResultadoXGrande = '';
            let printResultadoXPequenas = '';

     
            function generarTabla(bingo, condicional, elementoId) {
                let resultado = '';
                resultado += '<table class="table"><tr>';
                letras.forEach(letra => {
                    resultado += `<th class="borde color-letra">${letra}</th>`;
                });
                resultado += '</tr>';
                for (let i = 0; i < 5; i++) {
                    resultado += '<tr>';
                    for (let j = 0; j < 5; j++) {
                        let clase = condicional(i, j) ? 'color-1' : '';
                        resultado += `<td class="borde ${clase}">${bingo[i][j]}</td>`;
                    }
                    resultado += '</tr>';
                }
                resultado += '</table>';
                document.getElementById(elementoId).innerHTML = resultado;
            }

         
            generarTabla(bingo, (i, j) => i == j || i + j == 4, 'bingo-x-grande');

            generarTabla(bingo, (i, j) => {
                
                if (
                    (i == 1 && j == 1) || (i == 1 && j == 3) || 
                    (i == 3 && j == 1) || (i == 3 && j == 3) || 
                    (i == 2 && j == 2) || 
                    (i == 1 && j == 2) || (i == 2 && j == 1) || (i == 2 && j == 3) || (i == 3 && j == 2) || 
                    (i == 3 && j == 3) || (i == 3 && j == 4) || (i == 4 && j == 3) || (i == 4 && j == 4) || 
                    (i == 2 && j == 4) || (i == 4 && j == 2) || (i == 3 && j == 2)
                ) return true;
                return false;
            }, 'bingo-x-pequenas');
        });
