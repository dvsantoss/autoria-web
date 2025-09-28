function numeros(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let num3 = document.getElementById("numero3").value;

    let soma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
    document.getElementById("soma").innerHTML = soma;

    let media = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3));
    document.getElementById("media").innerHTML = media/3;

    let produto = parseFloat(num1) * parseFloat(num2) * parseFloat(num3);
    document.getElementById("produto").innerHTML = produto;

    //maior
    let maior = [num1,num2,num3];
    maior.sort();
    document.getElementById("maior").innerHTML = maior[2];

    //menor
    document.getElementById("menor").innerHTML = maior[0];
}