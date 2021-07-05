/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

let precioUno;
let precioDos;
let precioTres;
let resultado = 0;
const totalProductos = 3;
let promedio;
let iva;
let precioFinal;

function Sumar() {
  precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
  precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
  precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
  resultado = precioUno + precioDos + precioTres;
  alert(`La suma de los tres productos es: ${resultado}`);
}
function Promedio() {
  precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
  precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
  precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
  resultado = precioUno + precioDos + precioTres;
  promedio = resultado / totalProductos;
  alert(`El promedio de los 3 productos es : ${promedio}`);
}
function PrecioFinal() {
  precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
  precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
  precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
  resultado = precioUno + precioDos + precioTres;
  iva = resultado * 0.21;
  precioFinal = resultado + iva;
  alert(`El precio final con el IVA(21%) es ${precioFinal}`);
}
