/*Messina, Franco Div H
Parcial Ejercicio 2

A una pareja se le pide los datos para mostrar un mensaje
 " ustedes se llaman  xxxxx y xxxx pesan xx y xx kilos, que sumados son xx
  kilos y el promedio de peso xx ".

*/

function mostrar() {
  let nombreParejaUno;
  let nombreParejaDos;
  let pesoParejaUno;
  let pesoParejaDos;
  let pesoTotal;
  let pesoPromedio;

  nombreParejaUno = prompt("Ingresa tu nombre pareja uno");
  pesoParejaUno = prompt(`Ingresa tu peso pareja ${nombreParejaUno}`);
  pesoParejaUno = parseFloat(pesoParejaUno);
  nombreParejaDos = prompt("Ingresa tu nombre pareja uno");
  pesoParejaDos = prompt(`Ingresa tu peso ${nombreParejaDos} `);
  pesoParejaDos = parseFloat(pesoParejaDos);
  pesoTotal = pesoParejaUno + pesoParejaDos;
  pesoPromedio = pesoTotal / 2;

  alert(
    `Ustedes se llaman ${nombreParejaUno} y ${nombreParejaDos} pesan ${pesoParejaUno} y ${pesoParejaDos} kilos, que sumados son ${pesoTotal} kilos y el promedio de peso ${pesoPromedio} kg`
  );
}
