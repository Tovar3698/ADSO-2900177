/**
 * Función para hacer el factorial del número que sea ingresado
 * Autor: Javier Ricardo Tovar T.
 * Fecha: Lunes 01 de abril de 2024
*/

function fact(pnum){
    let num = pnum;
    let con = 0;
    let fac = 1;
    while (con<num) {
        con = parseInt(con) + 1;
        fac = parseFloat(fac)*parseFloat(con);
    }
    return fac;
}