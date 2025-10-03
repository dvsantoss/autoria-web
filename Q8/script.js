function verificar() {
    let cpf = document.getElementById("cpfId").value.split(".").join("").split("-").join("");
    let paragh = document.getElementById("paragh");

    if (cpf.length === 11 && !isNaN(cpf)) {
        paragh.innerHTML = "CPF Válido";
        paragh.style.color = "green";
    } else {
        paragh.innerHTML = "CPF Inválido";
        paragh.style.color = "red";
    }
}