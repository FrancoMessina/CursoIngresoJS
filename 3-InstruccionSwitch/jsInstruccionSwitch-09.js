/*
Messina, Franco Div H
Ejercicio 09 Switch
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	
	var estacionIngresada;// Estacion ingresada.
    var destino;// Destino ingresado
    var estadia;//Estadia la base, es decir, los 15000
    var descuento;//Si el usuario accede al descuento
    var aumento;//Si el usuario accede al aumento
    var valorAumento;//Resultado Final con aumento
    var valorDescuento;//Resultado FInal con descuento
	var porcentajeDescuento;//Porcentaje que accede si obtiene descuento
	var porcentajeAumento;//Porcentaje que accede si obtiene aumento

    estacionIngresada =txtIdEstacion.value;
    destino = txtIdDestino.value;
    estadia = 15000;
    porcentajeDescuento = 0;
	porcentajeAumento = 0;


    switch(destino)
    {
        case "Bariloche":
            switch(estacionIngresada)
            {
                case "Invierno":
                    porcentajeAumento = 20;

                break;
                case "Verano":
                    porcentajeDescuento = 20;
                break;
                default:
                    porcentajeAumento = 10;
                break;
            }
        break;
        case "Cataratas":
            switch(estacionIngresada)
            {
                case "Invierno":
                    porcentajeDescuento = 10;

                break;
                case "Verano":
                    porcentajeAumento = 10;
                break;
                default:
                    porcentajeAumento = 10;
                break;
            }
        break;
        case "Cordoba":
            switch(estacionIngresada)
            {
                case "Invierno":
                    porcentajeDescuento = 10;

                break;
                case "Verano":
                    porcentajeAumento = 10;
                break;
                default:
                    porcentajeAumento = 0;
                break;
            }
        break;
        case "Mar del plata":
            switch(estacionIngresada)
            {
                case "Invierno":
                    porcentajeDescuento = 20;

                break;
                case "Verano":
                    porcentajeAumento = 20;
                break;
                default:
                    porcentajeAumento = 10;
                break;
            }
    }

    aumento = (estadia*porcentajeAumento )/100;
	descuento = (estadia*porcentajeDescuento)/100;
    valorAumento = estadia+aumento;
    valorDescuento = estadia-descuento;

	switch(porcentajeDescuento) //Si el porcentaje de descuento es 0 quiere decir que 
                                //ingreso al porcentaje de aumento entonces le muestro el aumentoFinal
                                //Y si es distinto de 0 va a mostrar el descuento.                     
	{                               
		case 0:
			alert(valorAumento);
		break;
		default:
			alert(valorDescuento);
	}

}//FIN DE LA FUNCIÓN