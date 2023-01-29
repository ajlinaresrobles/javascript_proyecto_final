// convertidor de unidades
    

let propiedad = prompt("Cuál propiedad desea convertir?\n - longitud \n - masa \n - volumen");


while (propiedad != "salir") {
    
if (propiedad != "longitud" && propiedad != "masa" && propiedad != "volumen") {
    alert("No ingresó ninguna de las propiedades");
    break
}
let numero = prompt("Ingrese la cantidad a convertir");
numero = parseFloat(numero);

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

if (propiedad == "longitud") {
    let unidad_elegida = prompt("ingrese la unidad a convertir \n - centímetros, metros, piés o pulgadas");

    if (unidad_elegida == "metros" && unidad_elegida == "METROS") {
        calc_conv_longitud(100, 1, 3.28, 39.37, unidad_elegida);   
    }

    if (unidad_elegida == "centimetros") {
        calc_conv_longitud(1, 0.01, 0.03, 0.39, unidad_elegida);
    }

    if (unidad_elegida == "pies") {
        calc_conv_longitud(30.48, 0.3048, 1, 12, unidad_elegida);
    }

    if (unidad_elegida == "pulgadas") {
        calc_conv_longitud(2.54, 0.0254, 0.8333, 1, unidad_elegida);
    }
}

else if (propiedad == "masa") {
    
    unidad_elegida = prompt("ingrese la unidad a convertir \n - gramos, kilogramos, libras o toneladas");
    if (unidad_elegida == "gramos") {
        calc_conv_masa(1, 0.001, 0.0022, 0.000001, unidad_elegida);
    }

    if (unidad_elegida == "kilogramos") {
        calc_conv_masa(1000, 1, 2.2046, 0.001, unidad_elegida);
    }
    if (unidad_elegida == "libras") {
        calc_conv_masa(453.59, 0.45359, 1, 0.00045359, unidad_elegida);
    }

    if (unidad_elegida == "toneladas") {
        calc_conv_masa(1000000, 1000, 2204.6, 1, unidad_elegida);
    }
}

else if (propiedad == "volumen") {
    
    unidad_elegida = prompt("ingrese la unidad a convertir \n - litros, galones, onzas o metros cúbicos");
    if (unidad_elegida == "litros") {
        calc_conv_volumen(1, 0.2199, 33.81, 0.001, unidad_elegida);
    }

    if (unidad_elegida == "galones") {
        calc_conv_volumen(4.546, 1, 153.72, 0.004546, unidad_elegida);
    }
    if (unidad_elegida == "onzas") {
        calc_conv_volumen(0.295, 0.00625, 1, 0.0000295, unidad_elegida);
    }

    if (unidad_elegida == "metros cubicos") {
        calc_conv_volumen(1000, 219.96, 33814.02, 1, unidad_elegida);
    }
}
}
propiedad = prompt("Cuál propiedad desea convertir?\n - longitud \n - masa \n - volumen \n o escriba salir para terminar");


}




