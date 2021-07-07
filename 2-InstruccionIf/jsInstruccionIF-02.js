/* 
Al ingresar una edad debemos informar solo si la persona es mayor de edad*/

function mostrar() {
  //tomo la edad
  let edad;
  let idEdad = document.getElementById("txtIdEdad").value;
  const mensaje = "Sos mayor de edad.";
  edad = idEdad;
  edad = parseInt(idEdad);
  if (edad >= 18) {
    document.getElementById("txtIdEdad").value = mensaje;
  }
} //FIN DE LA FUNCIÓN
