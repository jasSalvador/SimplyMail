/*permitir incluir múltiples correos electrónicos como destinatarios de los Carbon Copies o CC. Utilizando 
al menos un parámetro Rest y un bucle for of, la interfaz debe poder mostrar la información por consola una
vez que se haga clic en el botón enviar */

let enviar = document.getElementById('form');

enviar.addEventListener("submit", function(event) {
    event.preventDefault();

    let destinatario = document.getElementById('destinatario').value;
    let titulo = document.getElementById('titulo').value;
    let mensaje = document.getElementById('mensaje').value;
    let remitente = document.getElementById('remitente').value;

    console.log("PARA: " + destinatario);
    console.log("TITULO: " + titulo);
    console.log("MENSAJE: " + mensaje);
    console.log("FROM: " + remitente);

let copiasInput = document.getElementById('copias').value;
let copiasArr = copiasInput.split(','); //split separa los correos segun la coma 

    copias(...copiasArr);
});

function copias(...emails) {

    for (let email of emails){
        console.log("CC:" + email);
    }
}

