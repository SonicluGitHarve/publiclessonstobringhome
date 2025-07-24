let loginName = document.getElementById("LoginName")
var idadeBox = document.getElementById("MenorIdadeBox")
let email = document.getElementById("Email")
let senha = document.getElementById("Senha")
let emailPais = document.getElementById("EmailPais")
let aceitarDoc = document.getElementById("AceitarContrato")

idadeBox.addEventListener('change', validarIdade);

function validarIdade() {
    if(idadeBox.checked){
        idadeBox.innerText = "Teste";
        alert("AH INFERNO");
        console.log("AAAHHH")
    }
    else {
        idadeBox.innerText = "enjoado";
    }
}