function tabuada(){
    var num = document.getElementById("numero1").value;

    for(var i=1; i<=10; i++){
        var resultado = num * i;
        document.getElementById("numero1-"+i).innerText = num+" x "+i;
        document.getElementById("soma1-"+i).innerText = resultado;
    }
}