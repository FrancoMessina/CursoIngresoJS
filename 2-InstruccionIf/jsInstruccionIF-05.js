/*Messina, Franco Div H
Ejercicio 05 If
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar() {
  //tomo la edad
  let edad;
  edad = document.getElementById("txtIdEdad").value; // EDAD INGRESADA POR EL USUARIO
  edad = parseInt(edad);
  if (edad < 12 || edad > 17) {
    alert("No sos adolescente");
  }
} //FIN DE LA FUNCIÓN
