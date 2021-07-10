/*Messina, Franco Div H
Parcial Ejercicio 1
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/
function mostrar() {
  let ladoTriangulo;
  let resultadoPerimetro;
  ladoTriangulo = parseFloat(
    prompt(
      "Ingresa cuanto mide un lado del triángulo equilátero en centimetros"
    )
  );
  resultadoPerimetro = ladoTriangulo * 3;
  alert(
    `El primetro del triángulo equilátero es ${resultadoPerimetro} centimetros `
  );
}
