/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
  let nameUser;
  nameUser = document.getElementById("txtIdNombre").value;
  let ageUser;
  ageUser = document.getElementById("txtIdEdad").value;
  alert(`Usted se llama ${nameUser} y tiene ${ageUser} años.`);
}
