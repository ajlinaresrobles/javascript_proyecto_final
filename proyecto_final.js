

let mensaje = document.createElement("p");



function conv_moneda() {

    let cantidad = document.getElementById("input_cantidad");
    let moneda_desde = document.getElementById("moneda_desde");
    let moneda_hasta = document.getElementById("moneda_hasta");
    let output = document.getElementById("output");

    function calculo (razon) {
        
        let resultado = cantidad.value * razon;
        mensaje.innerHTML =`Recibirás ${resultado.toFixed(2)} ${moneda_hasta.value}`;
    };
   
    if (moneda_desde.value == "Dolares Americanos ($)") {
        if (moneda_hasta.value == "Dolares Americanos ($)") {calculo(1)}
        else if(moneda_hasta.value == "Pesos Chilenos (CLP)") {calculo(810)}
        else if(moneda_hasta.value == "Euros (€)") {calculo(0.915254)}
        else if(moneda_hasta.value == "Pesos Argentinos (ARS)") {calculo(337.5)};
    }
    if (moneda_desde.value == "Pesos Chilenos (CLP)") {
        if (moneda_hasta.value == "Dolares Americanos ($)") {calculo(0.001205)}
        else if(moneda_hasta.value == "Pesos Chilenos (CLP)") {calculo(1)}
        else if(moneda_hasta.value == "Euros (€)") {calculo(0.00113)}
        else if(moneda_hasta.value == "Pesos Argentinos (ARS)") {calculo(0.41667)};
    }
    if (moneda_desde.value == "Euros (€)") {
        if (moneda_hasta.value == "Dolares Americanos ($)") {calculo(1.036145)}
        else if(moneda_hasta.value == "Pesos Chilenos (CLP)") {calculo(860)}
        else if(moneda_hasta.value == "Euros (€)") {calculo(1)}
        else if(moneda_hasta.value == "Pesos Argentinos (ARS)") {calculo(358.3333)};
    }
    if (moneda_desde.value == "Pesos Argentinos (ARS)") {
        if (moneda_hasta.value == "Dolares Americanos ($)") {calculo(0.00253)}
        else if(moneda_hasta.value == "Pesos Chilenos (CLP)") {calculo(2.1)}
        else if(moneda_hasta.value == "Euros (€)") {calculo(0.002373)}
        else if(moneda_hasta.value == "Pesos Argentinos (ARS)") {calculo(1)};
    }

    output.append(mensaje);
}

let btn_conversion = document.getElementById("btn_conversion");

btn_conversion.addEventListener("click", conv_moneda);




class Usuario{

        constructor(email_usuario, pass_usuario, nombre_usuario, apellido_usuario, edad_usuario){
    
            this.email_usuario = email_usuario;
            this.pass_usuario = pass_usuario;
            this.nombre_usuario = nombre_usuario;
            this.apellido_usuario = apellido_usuario;
            this.edad_usuario = edad_usuario;
        }
    }

    let lista_usuarios = [];

    // Recupero arreglo de objetos almacenados
    let recuperando_usuarios = localStorage.getItem("arreglo_JSON");
    lista_usuarios = JSON.parse(recuperando_usuarios);


function alta_usuario() {
    
    let email_usuario = document.getElementById("email_usuario");
    let pass_usuario = document.getElementById("pass_usuario");
    let nombre_usuario = document.getElementById("nombre_usuario");
    let apellido_usuario = document.getElementById("apellido_usuario");
    let edad_usuario = document.getElementById("edad_usuario");

    if (email_usuario.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe llenar todos los campos para poder registrarse',
          })
    } 
    else if (pass_usuario.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe llenar todos los campos para poder registrarse',
          })
    }
    else if (nombre_usuario.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe llenar todos los campos para poder registrarse',
          })
    }
    else if (apellido_usuario.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe llenar todos los campos para poder registrarse',
          })
    }
    else if (edad_usuario.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe llenar todos los campos para poder registrarse',
          })
    }
    else {
        let nuevo_usuario = new Usuario(email_usuario.value, pass_usuario.value, nombre_usuario.value, apellido_usuario.value, edad_usuario.value);

    lista_usuarios.push(nuevo_usuario);

    let arreglo_JSON = JSON.stringify(lista_usuarios);

    localStorage.setItem("arreglo_JSON", arreglo_JSON);
    Toastify({

        text: "Registro Exitoso",
        
        duration: 3000,
        gravity: "bottom"
        }).showToast();
    }
    

}

function login_usuario() {
   
   let email_login = document.getElementById("email_login");
   let pass_login = document.getElementById("pass_login");
   let recuperando_usuarios = localStorage.getItem("arreglo_JSON");
   lista_usuarios = JSON.parse(recuperando_usuarios);

    for (let usuario of lista_usuarios) {
        if (email_login.value == usuario.email_usuario && pass_login.value == usuario.pass_usuario) {
            document.body.innerHTML = `<h2>bienvenido ${usuario.nombre_usuario}</h2>
                                    <a href="index.html">volver</a>`
                                    break
        }
        else{
            document.body.innerHTML = `<h2>Usuario no encontrado ${email_login.value}</h2>
                                    <a href="index.html">volver</a>`
        }
    }

}


let btn_registro = document.getElementById("btn_registro");

btn_registro.addEventListener("click", alta_usuario);

let btn_login = document.getElementById("btn_login");

btn_login.addEventListener("click", login_usuario);