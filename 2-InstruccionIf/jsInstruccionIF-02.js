/* 
Messina, Franco Div H
Ejercicio 02 If
Al ingresar una edad debemos informar solo si la persona es mayor de edad*/

function mostrar() {
  //tomo la edad
  let edad; // EDAD INGRESADA POR EL USUARIO
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);
  if (edad > 17) {
    alert("Hola sos mayor de edad tenes " + edad + " años");
  }
} //FIN DE LA FUNCIÓN
