/*Messina, Franco Div H
Ejercicio 9 E/S Datos
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  let sueldo;
  let nuevoSueldo;
  let resultado;

  sueldo = document.getElementById("txtIdSueldo").value;
  sueldo = parseInt(sueldo);
  nuevoSueldo = (sueldo * 10) / 100;
  resultado = sueldo + nuevoSueldo;
  document.getElementById("txtIdResultado").value = resultado;
}
