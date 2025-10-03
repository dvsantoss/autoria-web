function reverter() {

    let nomes = [
        document.getElementById("nome1").value,
        document.getElementById("nome2").value,
        document.getElementById("nome3").value,
        document.getElementById("nome4").value,
        document.getElementById("nome5").value
    ];

    nomes.reverse(); // invertendo ordem

    document.getElementById("nome1").value = nomes[0];
    document.getElementById("nome2").value = nomes[1];
    document.getElementById("nome3").value = nomes[2];
    document.getElementById("nome4").value = nomes[3];
    document.getElementById("nome5").value = nomes[4];
}