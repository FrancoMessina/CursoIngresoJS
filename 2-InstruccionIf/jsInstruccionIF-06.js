/*
Messina, Franco Div H
Ejercicio 06 If
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar() {
  //tomo la edad
  let edad; //Edad ingresada por el usuario
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);
  if (edad > 17) {
    alert("Hola sos mayor de edad tenes" + edad + " años");
  } else if (edad > 12 && edad < 18) {
    alert("Hola sos adolescente tenes " + edad + " años");
  } else {
    alert("Hola sos un niño tenes " + edad + " años");
  }
} //FIN DE LA FUNCIÓN
