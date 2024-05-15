/**
 * ejercicio de arreglo nomina
 * 15 de mayo de 2024
 * Autor: Javier Tovar 
 */

let nomina = [
    {cedula: '123456789', nombre: 'Juan', apellido: 'Pérez', edad: 30, estrato: 3, valorDia: 50000, diasTrabajados: 20},
    {cedula: '987654321', nombre: 'María', apellido: 'Gómez', edad: 25, estrato: 2, valorDia: 60000, diasTrabajados: 15},
    {cedula: '112233445', nombre: 'Carlos', apellido: 'López', edad: 40, estrato: 4, valorDia: 77000, diasTrabajados: 25},
    {cedula: '998877665', nombre: 'Ana', apellido: 'Martínez', edad: 35, estrato: 5, valorDia: 65000, diasTrabajados: 30},
    {cedula: '776655443', nombre: 'Luis', apellido: 'Rodríguez', edad: 28, estrato: 1, valorDia: 55000, diasTrabajados: 10},
    {cedula: '123456789', nombre: 'Andres', apellido: 'Pérez', edad: 30, estrato: 3, valorDia: 58000, diasTrabajados: 20},
    {cedula: '987654321', nombre: 'Maríana', apellido: 'Gómez', edad: 25, estrato: 1, valorDia: 65000, diasTrabajados: 15},
    {cedula: '112233445', nombre: 'Angie', apellido: 'Corredor', edad: 40, estrato: 5, valorDia: 90000, diasTrabajados: 25},
    {cedula: '998877665', nombre: 'Anamar', apellido: 'Tovar', edad: 35, estrato: 5, valorDia: 85000, diasTrabajados: 30},
    {cedula: '776655443', nombre: 'Luisa', apellido: 'Diaz', edad: 28, estrato: 6, valorDia: 75000, diasTrabajados: 10},
];

function calcularTotalPago(valorDia, diasTrabajados) {
    return valorDia * diasTrabajados;
}

function procesarNomina(nomina) {
    let totalNomina = [];
    for (let i = 0; i < nomina.length; i++) {
        let empleado = nomina[i];
        let totalPago = calcularTotalPago(empleado.valorDia, empleado.diasTrabajados);
        totalNomina.push({
            cedula: empleado.cedula,
            nombre: empleado.nombre,
            apellido: empleado.apellido,
            edad: empleado.edad,
            estrato: empleado.estrato,
            valorDia: empleado.valorDia,
            diasTrabajados: empleado.diasTrabajados,
            totalPago: totalPago
        });
        // Log individual para cada empleado
        console.log(`Empleado: ${empleado.nombre} ${empleado.apellido}`);
        console.log(`Cédula: ${empleado.cedula}`);
        console.log(`Total Pago: ${totalPago}`);
    }
    return totalNomina;
}

function actualizarTablaNomina(totalNomina) {
    let tbody = document.getElementById('nomina-body');
    for (let i = 0; i < totalNomina.length; i++) {
        let fila = totalNomina[i];
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${fila.cedula}</td>
            <td>${fila.nombre}</td>
            <td>${fila.apellido}</td>
            <td>${fila.edad}</td>
            <td>${fila.estrato}</td>
            <td>${fila.valorDia}</td>
            <td>${fila.diasTrabajados}</td>
            <td>${fila.totalPago}</td>
        `;
    }
}

let totalNomina = procesarNomina(nomina);
actualizarTablaNomina(totalNomina);

// Log final de la nómina completa
console.log('Nómina completa:', totalNomina);