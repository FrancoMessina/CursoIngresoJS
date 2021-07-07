/*
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. */
function mostrar() {
  //tomo la edad
  let edad;
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);
  if (edad >= 18) {
    document.getElementById("txtIdEdad").value = "Hola, sos mayor de edad!";
  } else {
    document.getElementById("txtIdEdad").value = "Hola, sos menor de edad!";
  }
} //FIN DE LA FUNCIÓN
