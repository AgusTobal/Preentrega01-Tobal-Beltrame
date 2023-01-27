let ingresarNombre = prompt("Ingrese su nombre")

//inicio
if (ingresarNombre == "") {
    ingresarNombre = alert("Error, ingresar un nombre")
    ingresarNombre = prompt("Ingrese su nombre")
    alert("Bienvenido " + ingresarNombre + "! " + "A continuacion evaluaremos tu nivel matematico")
} else if (true) {
    alert("Bienvenido " + ingresarNombre + "! " + "A continuacion evaluaremos tu nivel matematico")
}
//inicio

//pregunta 1
let pregunta1 = prompt(ingresarNombre + ", ¿Cual es la respuesta correcta? \n 3,1420 \n 3,1416 \n 3,1350 ")
switch (pregunta1) {
    case "3,1416":
        alert("correcto, pasemos a la siguiente pregunta!")
        break;
    case "3,1420":
    case "3,1350":
        alert("incorrecto, pasemos a la siguiente pregunta")
        break;
}
//pregunta 1

//pregunta 2
let pregunta2 = prompt("¿Cual de los siguientes resultados es el correcto para la siguiente operacion? 12x21-60+15x5÷3 \n 217 \n 201 \n 219")
switch (pregunta2) {
    case "217":
        alert("correcto, pasemos a la siguiente ADIVINANZA!")
        break;
    case "201":
    case "219":
        alert("incorrecto, pasemos a la siguiente ADIVINANZA")
        break;
}
//pregunta 2

//problema 1
alert("Veamos como vas con los problemas")
let adivinanza1 = prompt("Cuatro gatos en un cuarto cada gato en un rincón cada gato ve tres gatos adivina cuántos gatos son")
let respuesta1 = "cuatro gatos"

do {

     if (adivinanza1 == respuesta1) {
        alert("correcto, pasemos al ultimo problema ")
     } else {
        alert("incorrecto, pasemos al ultimo problema ")
      }
 }while (adivinanza1 !== respuesta1);
//problema 1

 //problema 2
 alert("Recuerda que solo tienes que escribir una respuesta")
let adivinanza2 = prompt("Tengo mas de tres lado y menos de cinco lados tengo todos mis lados iguales ¿Quien soy?")
let respuesta2 = "cuadrado"

do {
     if (adivinanza2 == respuesta2) {
        alert("correcto, haz terminado el examen!")
     } else {
        alert("incorrecto, haz terminado el examen!")
      }
 }while (adivinanza2 == respuesta2);

 //problema 2