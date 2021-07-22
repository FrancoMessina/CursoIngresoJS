/*
Messina, Franco Div H
Ejercicio 03 While
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Error... ingrese el número clave.");
	}
	alert("Ingreso al sistema");
	
}//FIN DE LA FUNCIÓN
