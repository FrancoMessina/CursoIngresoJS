/*1.
/*Messina, Franco Div H
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
// variable.toFixed(3)
function Sumar() {
  let precioUno;
  let precioDos;
  let precioTres;
  let resultado;
  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioUno = parseFloat(precioUno);
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioDos = parseFloat(precioUno);
  precioTres = document.getElementById("txtIdPrecioTres").value;
  precioTres = parseFloat(precioTres);
  resultado = precioUno + precioDos + precioTres;
  alert(`La suma de los tres productos es: $${resultado}`);
}
function Promedio() {
  let precioUno;
  let precioDos;
  let precioTres;
  let resultado;
  let promedio;

  precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
  precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
  precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
  resultado = precioUno + precioDos + precioTres;
  promedio = resultado / 3;
  alert(`El promedio de los 3 productos es : $${promedio}`);
}
function PrecioFinal() {
  let precioUno;
  let precioDos;
  let precioTres;
  let iva;
  let precioFinal;
  precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
  precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
  precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
  resultado = precioUno + precioDos + precioTres;
  iva = resultado * 0.21;
  precioFinal = resultado + iva;
  alert(`El precio final con el IVA(21%) es $${precioFinal}`);
}
