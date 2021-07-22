/*
Messina, Franco Div H
Ejercicio 08 While
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	numeroIngresado = 0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta= true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingresa un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		else
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}

		respuesta = confirm("Queres ingresar otro numero?");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN