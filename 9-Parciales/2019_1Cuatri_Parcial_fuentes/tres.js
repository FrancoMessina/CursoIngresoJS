/*
Messina, Franco Div H
Parcial Ejercicio 3
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/

function mostrar() {
  let precio;
  let descuento;
  let nuevoPrecio;
  let resultado;

  precio = prompt("Ingresa el precio de tu accesorio");
  precio = parseFloat(precio);
  descuento = prompt("Ingresa el descuento que deseas utilizar");
  descuento = parseFloat(descuento);
  nuevoPrecio = (precio * descuento) / 100;
  resultado = precio - nuevoPrecio;

  document.getElementById("elPrecioFinal").value = resultado;
}
