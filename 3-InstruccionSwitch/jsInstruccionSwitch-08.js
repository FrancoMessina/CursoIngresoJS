/*
Messina, Franco Div H
Ejercicio 08 Switch
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/
function mostrar()
{
    var destinoIngresado =txtIdDestino.value;

    switch(destinoIngresado)
    {
        case "Bariloche":
        case "Ushuaia":
            mensaje = "Hace frio";
        break;
        case "Cataratas":
        case "Mar del plata":
            mensaje = "Hace calor";
        break;
    }
    alert(mensaje);

}