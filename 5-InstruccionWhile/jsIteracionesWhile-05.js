/*
Messina, Franco Div H
Ejercicio 05 While
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	// while(!(sexoIngresado == "f" || sexoIngresado == "m")) //1ra opcion
	while(sexoIngresado!= "f" && sexoIngresado!= "m") //2da opcion
	{
		sexoIngresado = prompt("Error... ingrese f ó m .");
	}



	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN