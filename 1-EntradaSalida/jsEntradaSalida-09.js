/*Messina, Franco Div H
Ejercicio 9 E/S Datos
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  let sueldo;
  let nuevoSueldo;
  const porcentaje = 10;

  sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
  nuevoSueldo = (sueldo * porcentaje) / 100;
  document.getElementById("txtIdResultado").value = nuevoSueldo + sueldo;
}
