function checar(){
    let palavra = document.getElementById("palidromo").value;
    let reverso = palavra.split("").reverse().join("");
    
    if(reverso == palavra){
        alert("É um palidromo!");
    }
    else{
        alert("Não é um palidromo");
    }
}