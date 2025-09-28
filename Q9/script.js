function intercalar(){
    document.getElementById("resultante").value = "";
    let nome1 = (document.getElementById("nome1").value).split("");
    let nome2 = (document.getElementById("nome2").value).split("");
    let maior = nome1.length > nome2.length ? nome1.length : nome2.length;
    for(let i = 0; i < maior; i++){
        document.getElementById("resultante").value += nome1[i] ?? "";
        document.getElementById("resultante").value += nome2[i] ?? "";
    }
}