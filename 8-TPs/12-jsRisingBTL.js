/*RISING BTL. 
Messina, Franco Div H
TP 12 VALIDACION
Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBrutoIngresado;
	var legajoIngresado;
	var nacionalidadIngresada;



	edadIngresada = prompt("Ingresa tu edad: ");
	edadIngresada = parseInt(edadIngresada);
	while(isNaN(edadIngresada) || edadIngresada<18 || edadIngresada>90) 
	{
		edadIngresada = prompt("Error...Volve a ingresar tu edad");
		edadIngresada = parseInt(edadIngresada);
	}
	txtIdEdad.value = edadIngresada;

	sexoIngresado = prompt("“M” para masculino y “F” para femenino");
	
	while(sexoIngresado != "F" && sexoIngresado != "M")
	{
		sexoIngresado = prompt("Error. Ingrese el sexo solicitado. “M” para masculino y “F” para femenino");
	}
	txtIdSexo.value = sexoIngresado;

	estadoCivilIngresado = prompt("Ingresa tu estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);
	while(isNaN(estadoCivilIngresado) || estadoCivilIngresado<1 || estadoCivilIngresado > 4)
	{
		estadoCivilIngresado = prompt("Error... Ingresa tu estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}
	txtIdEstadoCivil.value = estadoCivilIngresado;

	sueldoBrutoIngresado = prompt("Ingrese su sueldo bruto");
	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
	while(isNaN(sueldoBrutoIngresado)||sueldoBrutoIngresado<8000)
	{
		sueldoBrutoIngresado = prompt("Error...Ingrese su sueldo bruto, para que sea valido tiene que ser menor a 8000.");
		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);		
	}
	txtIdSueldo.value = sueldoBrutoIngresado;

	legajoIngresado = prompt("Ingresa tu  legajo.");
	legajoIngresado = parseInt(legajoIngresado);
	while(isNaN(legajoIngresado)|| legajoIngresado < 1000 || legajoIngresado > 9999)
	{
		legajoIngresado = prompt("Error. Ingresa tu legajo, no puede contener 0 a la izquierda.");
		legajoIngresado = parseInt(legajoIngresado);
	}
	txtIdLegajo.value = legajoIngresado;

	nacionalidadIngresada = prompt("Ingresa tu nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N")
	{
		nacionalidadIngresada = prompt("Error...Ingresa tu nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	}
	txtIdNacionalidad.value = nacionalidadIngresada;
}
