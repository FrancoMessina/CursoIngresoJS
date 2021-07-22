/*4.
Franco Messina, Franco Div H TP4 SOLO SWITCH	 
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 function CalcularPrecio() 
 {
    let precioLampara; // Precio por unidad
    let cantidadLampara; //Cantidad de lamparas ingresadas por el usuario
    let descuento; //Descuento obtenido por el usuario
    let primerPrecio; // Precio sin descuento
    let precioFinal; // Precio final de las lamparas
    let marca; //Marca que elige el usuario
    let impuesto; //Impuesto creado
    let descuentoRealizado;
    marca = document.getElementById("Marca").value;
    cantidadLampara = document.getElementById("txtIdCantidad").value;
    cantidadLampara = parseInt(cantidadLampara);
    precioLampara = 35;
    primerPrecio = cantidadLampara * precioLampara;
   
   

    switch(cantidadLampara) 
    {
        case 5:
            switch (marca)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                break;    
                default:
                    descuento = 30;
                break;
            }
        break;
        case 4:
            switch(marca) 
            {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 25;
                    break;
                    default: 
                        descuento = 20;
                    break;
            }
        break;
        case 3: 
            switch(marca) 
            {
                        case "ArgentinaLuz":
                           descuento = 15;
                        break;
                        case "FelipeLamparas":
                            descuento = 10;
                        break;
                        default: 
                            descuento = 5;
                        break;
            }
        break;
        case 1:
        case 2:
            descuento = 0;
        break;
        default:
            descuento = 50;
        break;
    }

    descuentoRealizado = (descuento * primerPrecio) / 100;
    precioFinal = primerPrecio - descuentoRealizado;
    

    if(precioFinal > 120) 
    {
        impuesto = (10 *precioFinal / 100);
            
        precioFinal = precioFinal + impuesto;
        precioFinal = precioFinal.toFixed(2);
        impuesto = impuesto.toFixed(2);
        alert(
        `IIBB Usted pago ${impuesto}.`
        );
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal;









   if(cantidadLampara > 5) 
    {
       descuento = 50;
    }
   else 
    {
        if (cantidadLampara == 5)
        {
            switch(marca) 
            {
                case "ArgentinaLuz":
                descuento = 40;
                break;
                default:
                descuento = 30;
                break; 
            }
        }
       else 
       {
           if (cantidadLampara == 4) 
            {
               switch(marca) 
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 25;
                    break;
                    default: 
                        descuento = 20;
                    break; 
                }
            }
           else 
            {
               if(cantidadLampara == 3)
               {
                  switch(marca) 
                    {
                        case "ArgentinaLuz":
                            descuento = 15;
                        break;
                        case "FelipeLamparas":
                            descuento = 10;
                        break;
                        default: 
                            descuento = 5;
                        break;

                    }
                }
            }
        }
    }
    descuentoRealizado = (descuento * primerPrecio) / 100;
    precioFinal = primerPrecio - descuentoRealizado;
    

    if(precioFinal > 120) 
    {
        impuesto = (10 *precioFinal) / 100;
            
        precioFinal = precioFinal + impuesto;
        precioFinal = precioFinal.toFixed(2);
        impuesto = impuesto.toFixed(2);
        alert(
        `IIBB Usted pago ${impuesto}.`
        );
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal;






    if (cantidadLampara > 5) 
    {
        
         descuento = 50;
       
    }
    else 
    {
        if (cantidadLampara == 5) 
        {
            if(marca == "ArgentinaLuz") 
            {
                descuento = 40;
            }
            else 
            {
                descuento = 30;
            }
        }
     

      else 
        {
            if (cantidadLampara == 4) 
            {
                
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
                {
                    descuento = 25;
                }
                else 
                {
                    descuento = 20;
                }        
            } 
            else 
            {
                if (cantidadLampara == 3) 
                {
                    if (marca == "ArgentinaLuz") 
                    {
                        descuento = 15;
                    }
                }
                else 
                {
                    if (marca == "FelipeLamparas") 
                    {
                        descuento = 10;
                    }
                    else 
                    {
                        descuento = 5;
                    }
                }
            }
        }
    }
   descuentoRealizado = (descuento * primerPrecio) / 100;
    precioFinal = primerPrecio - descuentoRealizado;
    

    if(precioFinal > 120) 
    {
        impuesto = (10 *precioFinal) / 100;
            
        precioFinal = precioFinal + impuesto;
        precioFinal = precioFinal.toFixed(2);
        impuesto = impuesto.toFixed(2);
        alert(
        `IIBB Usted pago ${impuesto}.`
        );
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
 }