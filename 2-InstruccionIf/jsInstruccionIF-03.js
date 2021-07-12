/*
Messina, Franco Div H
Ejercicio 03 If
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. */
function mostrar() {
  //tomo la edad
  let edad; // EDAD INGRESADA POR EL USUARIO
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);
  if (edad > 17) {
    alert("Hola, sos mayor de edad!");
  } else {
    alert("Hola, sos menor de edad!");
  }
} //FIN DE LA FUNCIÓN
