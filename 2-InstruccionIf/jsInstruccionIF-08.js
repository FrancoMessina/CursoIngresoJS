/*Messina, Franco Div H
Ejercicio 08 If
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar() {
  //tomo la edad

  let edad; // Edad ingresada del usuario
  let estado; // Estado seleccionado por el usuario
  edad = document.getElementById("txtIdEdad").value;
  estado = document.getElementById("estadoCivil").value;
  edad = parseInt(edad);
  if (edad > 17 && estado == "Soltero") {
    alert("Es soltero y no es menor.");
  }
} //FIN DE LA FUNCIÓN
