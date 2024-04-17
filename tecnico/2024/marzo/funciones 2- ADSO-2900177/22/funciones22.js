/**
 * Función para hacer una tabla de multiplicar hasta 10 del número ingresado
 * Autor: Javier Ricardo Tovar T.
 * Fecha: Lunes 01 de abril de 2024
*/

const mult = function (pnum){
    let num = pnum;
    let multi  = 0;
    let res = "";
    for(let con = 1; con <= 10; con++){
        res = num * con;
        multi += num+" x "+con+" = "+res+"\n";
    }
    return multi;
}