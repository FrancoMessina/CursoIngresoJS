/*
Messina, Franco Div H
Ejercicio 09 While
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var bandera;//Variable par apoder ingresar por primra vez al minimo y maximo
	var numeroIngresado;//Numero ingresado por el usuario
	var numeroMaximo;//Numero máximo ingresado por el usuario
	var numeroMinimo;//Numero minimo ingresado por el usuario
	var seguir;//Variable para entrar al while y pedir lo solicitado en este caso numeros.
	//iniciar variables
	bandera= true;
	seguir = true;
	
	while(seguir == true)
	{
		numeroIngresado = prompt("Ingresa un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado > numeroMaximo || bandera == true)
		{
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado < numeroMinimo || bandera == true)
		{
			numeroMinimo = numeroIngresado;
			bandera = false
		}
		seguir = confirm("desea ingresar otro numero?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN