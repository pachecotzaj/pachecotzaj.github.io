// Obtener parámetros de la URL
const params = new URLSearchParams(window.location.search);

// Asignar valores a los campos de la tabla
document.getElementById('nombreCompleto').textContent = params.get('nombreCompleto');
document.getElementById('nit').textContent = params.get('nit');
document.getElementById('dpi').textContent = params.get('dpi');
document.getElementById('entidadGobierno').textContent = params.get('entidadGobierno');
document.getElementById('fechaNacimiento').textContent = new Date(params.get('fechaNacimiento')).toLocaleDateString();
document.getElementById('cantidadAniosLaborados').textContent = params.get('cantidadAniosLaborados');
document.getElementById('direccion').textContent = params.get('direccion');
document.getElementById('sueldoAnio1').textContent = params.get('sueldoAnio1');
document.getElementById('sueldoAnio2').textContent = params.get('sueldoAnio2');
document.getElementById('sueldoAnio3').textContent = params.get('sueldoAnio3');
document.getElementById('sueldoAnio4').textContent = params.get('sueldoAnio4');
document.getElementById('sueldoAnio5').textContent = params.get('sueldoAnio5');

// Cálculo del total de jubilación
const totalJubilacion = parseFloat(params.get('totalJubilacion')).toFixed(2);
document.getElementById('totalJubilacion').textContent = 'Q' + totalJubilacion;
