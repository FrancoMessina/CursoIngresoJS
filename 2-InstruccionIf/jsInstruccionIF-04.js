/*Messina, Franco Div H
Ejercicio 04 If
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

*/
function mostrar() {
  //tomo la edad
  let edad;
  edad = document.getElementById("txtIdEdad").value; // Edad ingresada por el usuario
  edad = parseInt(edad);
  if (edad > 12 && edad < 18) {
    alert("Sos un adolescente");
  }
} //FIN DE LA FUNCIÓN
