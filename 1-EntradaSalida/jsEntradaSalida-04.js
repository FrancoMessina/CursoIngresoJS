/*Messina, Franco Div H
Ejercicio 4 E/S Datos
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
  let nameUser = prompt("Ingresa tu nombre");
  document.getElementById("txtIdNombre").value = nameUser;
}
