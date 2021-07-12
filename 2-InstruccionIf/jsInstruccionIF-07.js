/*
Messina, Franco Div H
Ejercicio 07 If
 Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
 */
function mostrar() {
  //tomo la edad
  let edad; // Edad ingresada del usuario
  let estado; // Estado seleccionado por el usuario
  edad = document.getElementById("txtIdEdad").value;
  estado = document.getElementById("estadoCivil").value;
  edad = parseInt(edad);
  if (edad < 18 && estado !== "Soltero") {
    alert("Es muy pequeño para NO ser soltero.");
  }
} //FIN DE LA FUNCIÓN
