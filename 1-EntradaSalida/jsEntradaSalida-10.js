/*Messina, Franco Div H
Ejercicio 9 E/S Datos
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
  let importe;
  let nuevoImporte;
  const descuento = 25;

  importe = parseFloat(document.getElementById("txtIdImporte").value);
  nuevoImporte = (importe * descuento) / 100;
  document.getElementById("txtIdResultado").value = importe - nuevoImporte;
}
