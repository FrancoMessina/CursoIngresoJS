/*Messina, Franco Div H
Ejercicio 6 E/S Datos
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  //Entradas: Dos numeros
  //Procesos: Realizar la suma de los 2 numeros.
  //Salidas: La suma de los dos numeros.
  let numeroUno;
  let numeroDos;
  let resultado;

  numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
  numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
  resultado = numeroUno + numeroDos;
  alert(`La suma es ${resultado}`);
}
