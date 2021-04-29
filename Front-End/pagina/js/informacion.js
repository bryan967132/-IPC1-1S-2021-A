function datos(usuario){
    localStorage.setItem("userPc",`${usuario}`)
    fetch(`http://localhost:5000/buscartipousuario/${localStorage.getItem("userPc")}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("nameP").value = `${data.nombre}`
        document.getElementById("lastP").value = `${data.apellido}`
        document.getElementById("userP").value = `${data.usuario}`
        document.getElementById("celuP").value = `${data.telefono}`
        document.getElementById("dateP").value = `${data.fecha}`
    })
}
function formedit(nombre,apellido,usuario,password,fecha){
    document.getElementById("EditnameP").value = `${nombre}`
    document.getElementById("EditlastP").value = `${apellido}`
    document.getElementById("EdituserP").value = `${usuario}`
    document.getElementById("EditpassP").value = `${password}`
    document.getElementById("EditdateP").value = `${fecha}`
}

function cerrarSesion(){
    localStorage.removeItem("especialidad")
    localStorage.removeItem("userPc")
    window.location.replace("../login/login.html")
}