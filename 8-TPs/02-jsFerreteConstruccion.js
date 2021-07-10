/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  let largo; //Largo del rectangulo de la construccion
  let ancho; //ancho del rectangulo de la construccion
  let sumaRectangulo; //Suma de ancho y largo
  let resultado;

  largo = document.getElementById("txtIdLargo").value;
  ancho = document.getElementById("txtIdAncho").value;
  largo = parseFloat(largo);
  ancho = parseFloat(ancho);
  sumaRectangulo = (largo + ancho) * 2;
  resultado = sumaRectangulo * 3;
  alert(`Tenes que comprar ${resultado} metros de alambre`);
}
function Circulo() {
  let radio; // Radio del terreno
  let resultado;
  radio = document.getElementById("txtIdRadio").value;
  radio = parseFloat(radio);
  resultado = 2 * Math.PI * radio * 3;
  alert(`Tenes que comprar ${resultado} metros de alambre`);
}
function Materiales() {
  let largo; //Largo del rectangulo de la construccion
  let ancho; //ancho del rectangulo de la construccion
  let multiplicarRectangulo; //Multiplicar suma y ancho de largo para saber losmetros cuadrados
  let resultadoCal; // Cuanta cal necesito
  let resultadoCemento; // Cuanto cemento necesito

  largo = document.getElementById("txtIdLargo").value;
  ancho = document.getElementById("txtIdAncho").value;
  largo = parseFloat(largo);
  ancho = parseFloat(ancho);
  multiplicarRectangulo = largo * ancho;
  resultadoCal = multiplicarRectangulo * 3;
  resultadoCemento = multiplicarRectangulo * 2;

  alert(
    `Necesito ${resultadoCal} bolsas de cal y ${resultadoCemento} bolsas de cemento`
  );
}
