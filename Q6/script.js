const checarButton = document.getElementById("checarButton");
checarButton.addEventListener("click", checar);

function checar(){
    let palavra = document.getElementById("palidromo").value;
    
    let reverso = palavra.split("").reverse().join("");
    
    if(reverso.toLowerCase(reverso) == palavra.toLowerCase(reverso)){ // comparando com as letras em minusculo para nao diferenciar "A" de "a"
        alert("É um palidromo!");
    }
    else{
        alert("Não é um palidromo");
    }
}