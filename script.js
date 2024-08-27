//Variables

const textoEntrada = document.getElementById("texto-entrada");
const textoSalida = document.getElementById("texto-salida");
const buttonEncriptar = document.getElementById("boton-encriptar");
const buttonDesencriptar = document.getElementById("boton-desencriptar");
const mensajeValidacion = document.getElementById("mensaje-de-validacion");

//Funcion de validación
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

//Funciones de cifrado y descifrado
function encriptar(texto) {
    let textoCifrado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
return textoCifrado;
}

function desencriptar(texto) {
    let textoDecifrado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    return textoDecifrado;
}

//Eventos
buttonEncriptar.addEventListener("click", () => {
    const texto = textoEntrada.value;
    if (validarTexto(texto)) {
        mensajeValidacion.textContent = '';
        const textoCifrado = encriptar(texto);
        textoSalida.value = textoCifrado;
    } else {
        mensajeValidacion.textContent = 'Solo utilice letras "a-z" sin mayusculas ni caracteres especiales';
    }
});

buttonDesencriptar.addEventListener("click", () => {
    const texto = textoEntrada.value;
    if (validarTexto(texto)) {
        mensajeValidacion.textContent = '';
        const textoDecifrado = desencriptar(texto);
        textoSalida.value = textoDecifrado;
    } else {
        mensajeValidacion.textContent = 'Solo utilice letras "a-z" sin mayusculas ni caracteres especiales';
    }
});
