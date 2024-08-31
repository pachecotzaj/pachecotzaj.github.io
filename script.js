document.getElementById("jubilacionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura de datos del formulario
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const nit = document.getElementById("nit").value;
    const dpi = document.getElementById("dpi").value;
    const entidadGobierno = document.getElementById("entidadGobierno").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const cantidadAniosLaborados = parseInt(document.getElementById("cantidadAniosLaborados").value);
    const direccion = document.getElementById("direccion").value;
    const sueldo1 = parseFloat(document.getElementById("sueldoAnio1").value);
    const sueldo2 = parseFloat(document.getElementById("sueldoAnio2").value);
    const sueldo3 = parseFloat(document.getElementById("sueldoAnio3").value);
    const sueldo4 = parseFloat(document.getElementById("sueldoAnio4").value);
    const sueldo5 = parseFloat(document.getElementById("sueldoAnio5").value);

    // Cálculo de la edad
    const birthDate = new Date(fechaNacimiento);
    const today = new Date();
    let edad = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        edad--;
    }

    // Cálculo del sueldo promedio
    const sueldoPromedio = (sueldo1 + sueldo2 + sueldo3 + sueldo4 + sueldo5) / 5;

    // Cálculo de la jubilación según las condiciones
    const porcentajeAnual = 0.02; //año
    const porcentajeTotal = porcentajeAnual * cantidadAniosLaborados; // Porcentaje total por todos los años de aporte  // Fórmula de jubilación
    const totalJubilacion = sueldoPromedio * porcentajeTotal; 

    if (cantidadAniosLaborados >= 20 || (edad > 60 && cantidadAniosLaborados >= 10)) {
     
        window.location.href = `resultado.html?nombreCompleto=${encodeURIComponent(nombreCompleto)}&nit=${encodeURIComponent(nit)}&dpi=${encodeURIComponent(dpi)}&entidadGobierno=${encodeURIComponent(entidadGobierno)}&fechaNacimiento=${encodeURIComponent(fechaNacimiento)}&cantidadAniosLaborados=${encodeURIComponent(cantidadAniosLaborados)}&direccion=${encodeURIComponent(direccion)}&sueldoAnio1=${encodeURIComponent(sueldo1)}&sueldoAnio2=${encodeURIComponent(sueldo2)}&sueldoAnio3=${encodeURIComponent(sueldo3)}&sueldoAnio4=${encodeURIComponent(sueldo4)}&sueldoAnio5=${encodeURIComponent(sueldo5)}&totalJubilacion=${totalJubilacion}`;

    } else {
        alert("No cumple con los requisitos para jubilarse.");
    }
});
