//funcion registrar usuarios
function CrearUsuario(){
    var nombre = document.getElementById("nombre");
    var pass = document.getElementById("pass");
    if(nombre.value != '' && pass.value != ''){
        alert(nombre.value)
        alert(pass.value)
    }else{
        alert("Campos obligatorios")
    }
}
function IniciarSesion(){
    var usuario = document.getElementById("usuario");
    var pass = document.getElementById("pass");
    if(usuario.value != '' && pass.value != ''){
        alert(usuario.value)
        alert(pass.value)
    }else{
        alert("Campos obligatorios")
    }
}