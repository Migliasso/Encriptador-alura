

let botonencritar = document.querySelector(".btn-encriptar" );
let botoncopiar = document.querySelector("btn-copiar" );
let botondesencriptar = document.querySelector(".btn-desencriptar" );

let muneco = document.querySelector(".muneco ");
let h3 = document.querySelector(".contenedorh3 ");
let parrafo =document.querySelector(".contenedorparrafo");
let resultado = document.querySelector(".textoresultado");

botonencritar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;
botoncopiar.onclick=  myFunction;

function desencriptar(){
    ocultaradelante();

    resultado.textContent = desencriptartexto (recuperartexto());
}

function encriptar(){
    ocultaradelante();

    resultado.textContent = encriptartexto (recuperartexto());
}

function recuperartexto(){
    let area = document.querySelector(".area");
    return area.value;
}

function ocultaradelante(){
muneco.classList.add("ocultar");
h3.classList.add("ocultar");
parrafo.classList.add("ocultar");
}

function encriptartexto(mensaje){
    let texto = mensaje;
    let textofinal ="";

    for (let i = 0; i < texto.length ;i++){
        if (texto[i] == "a"){
            textofinal = textofinal + "ai"

        }
        else if (texto[i] == "e"){
            textofinal = textofinal + "enter"
            
        }
        else if (texto[i] == "i"){
            textofinal = textofinal + "imes"
            
        }
        else if (texto[i] == "o"){
            textofinal = textofinal + "ober"
        }
        else if (texto[i] == "u"){
            textofinal = textofinal + "ufat"
            
        }
        else{
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal
}

function desencriptartexto(mensaje){
    let texto = mensaje;
    let textofinal ="";

    for (let i = 0; i < texto.length ;i++){
        if (texto[i] == "a"){
            textofinal = textofinal + "a"
            i = i+1;
        }
        else if (texto[i] == "e"){
            textofinal = textofinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i"){
            textofinal = textofinal + "i"
            i = i+3;
        }
        else if (texto[i] == "o"){
            textofinal = textofinal + "o"
            i = i+3;
        }
        else if (texto[i] == "u"){
            textofinal = textofinal + "u"
            i = i+3;
        }
        else{
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal
}
function myFunction() {
    /* Get the text field */
    var copyText = document.querySelector("textoresultado");

    navigator.clipboard.writeText(copyText.value);

}