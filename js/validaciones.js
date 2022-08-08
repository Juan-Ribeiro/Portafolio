export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
        input.parentElement.classList.remove("formulario__input--invalido");
        input.parentElement.querySelector(".formulario__input__mensaje-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("formulario__input--invalido");
        input.parentElement.querySelector(".formulario__input__mensaje-error").innerHTML =
            mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo de nombre no puede estar vacío",
    },
    email: {
        valueMissing: "El campo de email no puede estar vacío",
        typeMismatch: "El formato de correo no es válido",
    },
    asunto: {
        valueMissing: "El campo de asunto no puede estar vacío",
    },
    mensaje: {
        valueMissing: "El mensaje no puede estar vacío",
    },
};


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            // console.log(tipoDeInput, error);
            // console.log(input.validity[error]);
            // console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}
