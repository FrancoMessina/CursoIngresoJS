/*
Messina, Franco Div H
Ejercicio 01 While
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let i; //Variable de control(son contadores)
	i = 0;
	while(i < 10)
	{	
		
		document.write((i+1) + "<br>");
		i = i + 1;
		
	}
}
//FIN DE LA FUNCIÓN
//
// while (condicion) 
// {
// 	sentencias que se tienen que repetir
//	i + 1  -> no modifica la variable
//  i++ o i = i + 1 -> Modifica la variable 
// 	sentencias que hagan que la condicion en algun momento sea falsa
// }