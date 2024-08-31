document.getElementById('jubilacionForm').addEventListener('submit', function(event) {
    let isValid = true;
    
    // Validar Nombre Completo (solo letras y espacios)
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    if (!/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/.test(nombreCompleto)) {
        alert('Nombre Completo solo debe contener letras y espacios.');
        isValid = false;
    }

    // Validar NIT (solo números)
    const nit = document.getElementById('nit').value;
    if (!/^\d+$/.test(nit)) {
        alert('NIT solo debe contener números.');
        isValid = false;
    }

    // Validar DPI (solo números, máximo 13 caracteres)
    const dpi = document.getElementById('dpi').value;
    if (!/^\d{1,13}$/.test(dpi)) {
        alert('DPI solo debe contener números y un máximo de 13 dígitos.');
        isValid = false;
    }

    // Validar Entidad Gobierno (solo letras y espacios)
    const entidadGobierno = document.getElementById('entidadGobierno').value;
    if (!/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/.test(entidadGobierno)) {
        alert('Entidad de Gobierno solo debe contener letras y espacios.');
        isValid = false;
    }

    // Validar Cantidad de Años Laborados (solo números)
    const cantidadAniosLaborados = document.getElementById('cantidadAniosLaborados').value;
    if (!/^\d+$/.test(cantidadAniosLaborados)) {
        alert('Cantidad de Años Laborados solo debe contener números.');
        isValid = false;
    }

    // Detener el envío del formulario si alguna validación falla
    if (!isValid) {
        event.preventDefault();
    }
});
