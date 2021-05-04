function formedit(nombre,apellido,usuario,password,fecha,telefono,genero,especialidad){
    //alert(nombre+" "+apellido+" "+usuario+" "+password+" "+fecha+" "+telefono+" "+genero+" "+especialidad)
    document.getElementById("EditnameP").value = `${nombre}`
    document.getElementById("EditlastP").value = `${apellido}`
    document.getElementById("EdituserP").value = `${usuario}`
    document.getElementById("EditpassP").value = `${password}`
    document.getElementById("EditdateP").value = `${fecha}`
    document.getElementById("EditceluP").value = `${telefono}`
    document.getElementById("EditgensP").value = `${genero}`
    try{
        document.getElementById("EditspecP").value = `${especialidad}`
    }catch(err){}
}

function actualizarInfo(usuario){
    fetch(`http://35.222.105.198:5000/buscartipousuario/${usuario}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("nameP").value = `${data.nombre}`
        document.getElementById("lastP").value = `${data.apellido}`
        document.getElementById("userP").value = `${data.usuario}`
        document.getElementById("dateP").value = `${data.fecha}`
        document.getElementById("passP").value = `${data.password}`
        document.getElementById("celuP").value = `${data.telefono}`
        document.getElementById("gensP").value = `${data.genero}`
        document.getElementById("specP").value = `${data.especialidad}`
    })
}

function cerrarSesionAdmin(){
    localStorage.removeItem("tipo1")
    localStorage.removeItem("user1")
    window.location.replace("../login/login.html")
}
function cerrarSesionDoc(){
    localStorage.removeItem("tipo2")
    localStorage.removeItem("user2")
    window.location.replace("../login/login.html")
}
function cerrarSesionEnf(){
    localStorage.removeItem("tipo3")
    localStorage.removeItem("user3")
    window.location.replace("../login/login.html")
}
function cerrarSesionPac(){
    localStorage.removeItem("tipo4")
    localStorage.removeItem("user4")
    window.location.replace("../login/login.html")
}