/**
 * ejercicio de arreglo llave:valor - key:value
 * 15 de mayo de 2024
 * Autor: Javier Tovar
 */

let factura=[];
let valorTotalProducto
let iteracion;
let TotalPago=[];
let TotalPagoProducto;
factura=[
    {codigo:1, nombreProducto: 'Malteada',cantidad:2, valorUnidad:12000},
    {codigo:2, nombreProducto: 'Picada',cantidad:3, valorUnidad:25000},
    {codigo:3, nombreProducto: 'Hamburguesa Mixta',cantidad:4, valorUnidad:16000},
    {codigo:4, nombreProducto: 'Churrasco',cantidad:1, valorUnidad:25000},
    {codigo:5, nombreProducto: 'Gaseosa',cantidad:5, valorUnidad:5000},
    {codigo:6, nombreProducto: 'Limonada',cantidad:5, valorUnidad:6000},
];

/** 
valorTotalProducto = factura[3].cantidad*factura[3].valorUnidad;
console.log(factura[3].nombreProducto);
console.log("Total pagar:"+valorTotalProducto);
*/

for(iteracion=0;iteracion<factura.length;iteracion++){
    TotalPagoProducto = factura[iteracion].cantidad * factura[iteracion].valorUnidad;
    TotalPago.push({nombreProducto:factura[iteracion].nombreProducto, cantidad:factura[iteracion].cantidad,valorUnidad:factura[iteracion].valorUnidad, total:TotalPagoProducto})
}
console.log(TotalPago);