/**
 * Función para hacer el factorial del número ingresado
 * Autor: Javier Ricardo Tovar T.
 * Fecha: Lunes 01 de abril de 2024
*/

const fact = function (pnum){
    let num = pnum;
    let fac = 1;

    for (let con = 1; con <= num; con++) {
        fac = parseFloat(fac)*parseFloat(con);
    }
    
    return fac;
}