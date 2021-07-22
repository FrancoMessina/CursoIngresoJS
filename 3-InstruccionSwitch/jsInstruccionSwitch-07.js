/*
Messina, Franco Div H
Ejercicio 07 Switch
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
    var destinoIngresado =txtIdDestino.value;

    switch(destinoIngresado)
    {
        case "Bariloche":
        case "Ushuaia":
            mensaje = "Se encuentra en el Sur";
        break;
        case "Cataratas":
            mensaje = "Se encuentra en el Norte";
        break;
        case "Mar del plata":
            mensaje = "se encuentra en el Este";
        break;
    }
    alert(mensaje);

}//FIN DE LA FUNCIÓN