var firma = document.getElementById("firma");
var resultadon = document.getElementById("nom");
var resultadop = document.getElementById("pues");
var resultadot = document.getElementById("tel");
var resultadoco = document.getElementById("co");
var nombre1 = document.getElementById("nombre");
var puesto2 = document.getElementById("puesto");
var telefono3 = document.getElementById("telefono");
var correo4 = document.getElementById("correo");

firma.addEventListener("click",firmar);


function firmar(){

    resultadon.innerHTML= nombre1.value;
    resultadop.innerHTML= puesto2.value;
    resultadot.innerHTML= telefono3.value;
    resultadoco.innerHTML= correo4.value;



}