function tabuada(){
    let num = document.getElementById("numero1").value;

    for(let i=1; i<=10; i++){
        let resultado = num * i;
        document.getElementById("numero1-"+i).innerText = num+" x "+i;
        document.getElementById("soma1-"+i).innerText = resultado;
    }
}