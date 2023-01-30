// convertidor de unidades
    
// Se ingresa la propiedad

let propiedad = prompt("Cuál propiedad desea convertir?\n - longitud \n - masa \n - volumen");


while (propiedad != "salir") {
    
// se ingresa la cantidad

let numero = prompt("Ingrese la cantidad a convertir");


if (isNaN(numero)) {
    alert("La cantidad debe ser numérica");
    break
}
else{
                    // FUNCIONES

function calc_conv_longitud(constante1, constante2, constante3, constante4, unidad ) {
    let result_centimetro = numero * constante1;
    let result_metro = numero * constante2;
    let result_pie = numero * constante3;
    let result_pulgada = numero * constante4;
    alert("el resultado es el siguiente: \n" + 
        numero + " " + unidad + " equivalen a " + result_centimetro + " centímetros \n" +
        numero + " " + unidad + " equivalen a " + result_metro + " metros \n" +
        numero + " " + unidad + " equivalen a " + result_pie + " pies \n" + 
        numero + " " + unidad + " equivalen a " + result_pulgada + " pulgadas \n");

}
function calc_conv_masa(constante1, constante2, constante3, constante4, unidad) {
    let result_gramo = numero * constante1;
    let result_kilogramo = numero * constante2;
    let result_libra = numero * constante3;
    let result_tonelada = numero * constante4;
    alert("el resultado es el siguiente: \n" + 
        numero + " " + unidad + " equivalen a " + result_gramo + " gramos \n" +
        numero + " " + unidad + " equivalen a " + result_kilogramo + " kilogramos \n" +
        numero + " " + unidad + " equivalen a " + result_libra + " libras \n" + 
        numero + " " + unidad + " equivalen a " + result_tonelada + " toneladas \n");
}

function calc_conv_volumen(constante1, constante2, constante3, constante4, unidad) {
    let result_litro = numero * constante1;
    let result_galon = numero * constante2;
    let result_onza = numero * constante3;
    let result_metros_cubicos = numero * constante4;
    alert("el resultado es el siguiente: \n" + 
        numero + " " + unidad + " equivalen a " + result_litro + " litros \n" +
        numero + " " + unidad + " equivalen a " + result_galon + " galones \n" +
        numero + " " + unidad + " equivalen a " + result_onza + " onzas \n" + 
        numero + " " + unidad + " equivalen a " + result_metros_cubicos + " metros cúbicos \n");
}


                    // CONDICIONES

if (propiedad == "longitud" || propiedad == "LONGITUD") {
    let unidad_elegida = prompt("ingrese la unidad a convertir \n - centímetros \n - metros \n - piés \n - pulgadas");

    if (unidad_elegida == "metros" || unidad_elegida == "METROS") {
        calc_conv_longitud(100, 1, 3.28, 39.37, unidad_elegida);   
    }

    else if (unidad_elegida == "centimetros" || unidad_elegida == "CENTIMETROS" || unidad_elegida == "centímetros" || unidad_elegida == "CENTÍMETROS") {
        calc_conv_longitud(1, 0.01, 0.03, 0.39, unidad_elegida);
    }

    else if (unidad_elegida == "pies" || unidad_elegida == "piés" || unidad_elegida == "PIES" || unidad_elegida == "PIÉS") {
        calc_conv_longitud(30.48, 0.3048, 1, 12, unidad_elegida);
    }

    else if (unidad_elegida == "pulgadas" || unidad_elegida == "PULGADAS") {
        calc_conv_longitud(2.54, 0.0254, 0.8333, 1, unidad_elegida);
    }
    else {
        alert("No ingresó ninguna de las unidades solicitadas");
    }
}

else if (propiedad == "masa" || propiedad == "MASA") {
    
    unidad_elegida = prompt("ingrese la unidad a convertir \n - gramos \n - kilogramos \n - libras \n - toneladas");
    if (unidad_elegida == "gramos") {
        calc_conv_masa(1, 0.001, 0.0022, 0.000001, unidad_elegida);
    }

    else if (unidad_elegida == "kilogramos" || unidad_elegida == "KILOGRAMOS") {
        calc_conv_masa(1000, 1, 2.2046, 0.001, unidad_elegida);
    }
    else if (unidad_elegida == "libras" || unidad_elegida == "LIBRAS") {
        calc_conv_masa(453.59, 0.45359, 1, 0.00045359, unidad_elegida);
    }

    else if (unidad_elegida == "toneladas" || unidad_elegida == "TONELADAS") {
        calc_conv_masa(1000000, 1000, 2204.6, 1, unidad_elegida);
    }
    else {
        alert("No ingresó ninguna de las unidades solicitadas");
    }
}

else if (propiedad == "volumen" || propiedad == "VOLUMEN") {
    
    unidad_elegida = prompt("ingrese la unidad a convertir \n - litros \n - galones \n - onzas \n - metros cúbicos");
    if (unidad_elegida == "litros" || unidad_elegida == "LITROS") {
        calc_conv_volumen(1, 0.2199, 33.81, 0.001, unidad_elegida);
    }

    else if (unidad_elegida == "galones" || unidad_elegida == "GALONES") {
        calc_conv_volumen(4.546, 1, 153.72, 0.004546, unidad_elegida);
    }
    else if (unidad_elegida == "onzas" || unidad_elegida == "ONZAS") {
        calc_conv_volumen(0.295, 0.00625, 1, 0.0000295, unidad_elegida);
    }

    else if (unidad_elegida == "metros cubicos" || unidad_elegida == "METROS CUBICOS" || unidad_elegida == "metros cúbicos" || unidad_elegida == "METROS CÚBICOS") {
        calc_conv_volumen(1000, 219.96, 33814.02, 1, unidad_elegida);
    }
    else {
        alert("No ingresó ninguna de las unidades solicitadas");
    }
}
else {
    alert("No ingresó ninguna de las propiedades anteriormente solicitadas");
    break
}
}
propiedad = prompt("Cuál propiedad desea convertir?\n - longitud \n - masa \n - volumen \n o escriba salir para terminar");


}




