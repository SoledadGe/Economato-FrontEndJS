


function mostrarAlerta(evento) {
    evento.preventDefault();

    let valorNombre = document.getElementById("nombre").value;
    let valorEdad = document.getElementById("edad").value;
    valorEdad = parseInt(valorEdad);
    let valorEmail = document.getElementById("email").value;
    let mensajeError = document.getElementById("error");
    
    if (valorNombre == "") {
        mensajeError.textContent = "nombre obligatorio"
        return
    }
    if (isNaN(valorEdad)) {
        mensajeError.textContent = "edad en números"
        return
    }
    if (valorEdad < 1 || valorEdad > 120) {
        mensajeError.textContent = "edad fuera del rango permitido"
        return
    }
    if (valorEdad < 18) {
        mensajeError.textContent = "tiene que ser mayor de 18 años"
        return
    }
    if (valorEmail == "") {
        mensajeError.textContent = "email obligatorio"
        return
    }
    // alert("Gracias por suscribirse " + valorNombre + "!")
    mensajeError.textContent = ""
    document.getElementById("formulario").submit();
}

let boton = document.getElementById("suscribir");
boton.addEventListener("click", mostrarAlerta);











