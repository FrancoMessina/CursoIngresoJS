/*
Messina, Franco Div H
Ejercicio 09 If
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar() {
  //Genero el número RANDOM entre 1 y 10
  let numRandom = Math.floor(Math.random() * (10 - 1)) + 1; // El valor random generado
  return alert(numRandom);
} //FIN DE LA FUNCIÓN
