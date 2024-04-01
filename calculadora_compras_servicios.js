let opcion = parseInt(prompt("Seleccione una opción para calcular su costo final:\n1- Compra extrangera online\n2- Subscripción a servicio online\n3- Intereses de tarjeta de crédito"));
const dolarTarjeta = 1442;
let compraCuotas = 0;

function compra(precioParam){
    let importe;
    let comprasPrevias = parseInt(prompt("¿Cuántas compras online internacionales ha realizado a lo largo del año?"));
    if (comprasPrevias<=12 && precioParam<=50){
        importe = 0;
        console.log("No se aplican impuestos aduaneros");
    } 
    else if (comprasPrevias<=12 && precioParam>50){
        importe = (precioParam-50)*0.5;
        console.log("Se aplica un 50% del excedente de 50 dólares");
    } 
    else{
        importe = precioParam*0.5;
        console.log("Se aplica un 50% del valor de la compra");
    }
    console.log("Recargo: "+importe+ " dólares");
    console.log("Precio final US$"+(precioParam+importe) + " o AR$"+(precioParam+importe)*dolarTarjeta);
    let importeTotalPesos = (precioParam+importe)*dolarTarjeta;
    return importeTotalPesos;
}

function servicio(mensualidad){
    let impPais=mensualidad*0.08;
    let pdGanancias=mensualidad*0.3;
    let impDigital;
    let caba_gba = prompt("¿Usted reside en CABA o Gran Buenos Aires?");
    if(caba_gba=="si"||caba_gba=="Si"||caba_gba=="SI"){
        impDigital=mensualidad*0.23;
    } 
    else{
        impDigital=mensualidad*0.21;
    }
    console.log("Se recargan $"+impPais+" de impuesto país");
    console.log("Se recargan $"+pdGanancias+" de percepción de ganancias");
    console.log("Se recargan $"+impDigital+" de impuesto digital");
    console.log("Precio final: AR$"+(mensualidad+impPais+pdGanancias+impDigital));

}

function cuotas(cuotasParam){
    let cft;
    let interes;
    if(cuotasParam<=1){
        cft=0;
    }
    else if(cuotasParam>1&&cuotasParam<=5){
        cft=0.63;
    } 
    else if(cuotasParam==6){
        cft=0.64;
    } 
    else if(cuotasParam==7||cuotasParam==8){
        cft=0.7;
    }
    else if(cuotasParam>=9&&cuotasParam<=12){
        cft=0.71;
    }
    else if(cuotasParam==13||cuotasParam==14){
        cft=0.74;
    }
    else if(cuotasParam>=15&&cuotasParam<=17){
        cft=0.75;
    }
    else if(cuotasParam>=18&&cuotasParam<=20){
        cft=0.76;
    }
    else if(cuotasParam>=21&&cuotasParam<=23){
        cft=0.77;
    }
    else if(cuotasParam==24){
        cft=0.78;
    }
    else{
        console.log("Ingrese un valor entre 2 y 24")
    }
    interes=compraCuotas*cft;
    console.log("Se aplica un C.F.T de " +(cft*100) +"%: AR$"+interes)
    console.log("Precio final: AR$"+(interes+compraCuotas))

}

switch(opcion){
    case 1:
        compra(parseInt(prompt("Ingrese precio de su compra en USD")));
        break;
    case 2:
        servicio(parseInt(prompt("Ingrese precio en pesos de la mensualidad")));
        break;
    case 3:
        compraCuotas = parseInt(prompt("Ingrese el precio de su compra en pesos"));
        cuotas(parseInt(prompt("Ingrese la cantidad de cuotas")));
        break;
    default:
        console.log("Se cerró la calculadora");
        break;
}




