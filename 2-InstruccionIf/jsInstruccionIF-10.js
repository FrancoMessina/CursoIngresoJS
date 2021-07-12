/*
Messina, Franco Div H
Ejercicio 10 If
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar() {
  //Genero el número RANDOM entre 1 y 10
  let nota = Math.floor(Math.random() * (10 - 1)) + 1; // El valor random generado
  if (nota == 9 || nota == 10) {
    alert("EXCELENTE te sacaste un " + nota);
  } else if (nota > 3) {
    alert("APROBÓ te sacaste un " + nota);
  } else {
    alert("Vamos, la proxima se puede");
  }
} //FIN DE LA FUNCIÓN
