/**
 * Función para saber si la perosna es mayor de edad o no
 * Autor: Javier Ricardo Tovar T.
 * Fecha: Lunes 01 de abril de 2024
*/

const ed = function (pfecNa) {
    let fecNa = pfecNa;
    let fecAc = 2024;
    let eda;
    eda = parseInt(fecAc) - parseInt(fecNa);
    return eda;
}