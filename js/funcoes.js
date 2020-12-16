function CalculoIMC(){

    //pegar os valores de peso e altura
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;

//calcular o IMC --> PESO / (ALTURA * ALTURA)
let imc = peso / (altura*altura);
console.log(imc);

if(imc<20)
{
    document.getElementById("mensagem").innerText = "Magro";
    document.getElementById("imagem").src="images/esqueleto.gif";
}

else if(imc>=25)
{
    document.getElementById("mensagem").innerText = "Sobrepeso";
    document.getElementById("imagem").src="images/sobrepeso.gif";
}

else{
    document.getElementById("mensagem").innerText = "Ok";
    document.getElementById("imagem").src="images/normal2.gif";
}
}