function mostrarPoppup(){
    window.alert("oi mundo")
}
let email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

let email = document.getElementById("campo-email-login");
let password = document.getElementById("campo-senha");

function enviarEmailSenha(){
    let emailDigitato = email.value;
    let passwordDigitado = password.value;
    console.log(emailDigitado + passwordDigitado)
}