function verificar(){
    let cpf = (document.getElementById("cpfId").value).split(".").join("").split("-").join("");

    if(cpf.length < 11){
        document.getElementById("paragh").innerHTML = "Cpf Invalido";
    }
    else{
        document.getElementById("paragh").innerHTML = "Cpf Valido";
    }
}