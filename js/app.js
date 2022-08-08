import {valida} from "./validaciones.js";

const inputs = document.querySelectorAll(".formulario__input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});