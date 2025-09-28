function reverter(){
    let nome1 = (document.getElementById("nome1").value).split("").reverse().join("");
    let nome2 = (document.getElementById("nome2").value).split("").reverse().join("");
    let nome3 = (document.getElementById("nome3").value).split("").reverse().join("");
    let nome4 = (document.getElementById("nome4").value).split("").reverse().join("");
    let nome5 = (document.getElementById("nome5").value).split("").reverse().join("");

    document.getElementById("nome1").value=nome1;
    document.getElementById("nome2").value=nome1;
    document.getElementById("nome3").value=nome1;
    document.getElementById("nome4").value=nome1;
    document.getElementById("nome5").value=nome1;
}