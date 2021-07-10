/*Messina, Franco Div H
Ejercicio 10 E/S Datos
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
  // let importe;
  // let nuevoImporte;
  // const descuento = 25;

  // importe = parseFloat(document.getElementById("txtIdImporte").value);
  // nuevoImporte = (importe * descuento) / 100;
  // document.getElementById("txtIdResultado").value = importe - nuevoImporte;

  let importe;
  let nuevoImporte;
  let descuento;
  let resultado;

  importe = document.getElementById("txtIdImporte").value;
  importe = parseFloat(importe);
  descuento = prompt("Ingresa el porcentaje de descuento");
  descuento = parseInt(descuento);

  nuevoImporte = (importe * descuento) / 100;
  resultado = importe - nuevoImporte;
  document.getElementById("txtIdResultado").value = resultado;
}
