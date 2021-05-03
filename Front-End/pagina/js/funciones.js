//declaración de headers
let headers = new Headers()
headers.append('Content-Type','application/json');
headers.append('Accept','application/json');
headers.append('Access-Control-Allow-Origin','http://localhost:5000');
headers.append('Access-Control-Allow-Credentials','true');
headers.append('GET','POST','OPTIONS','PUT','DELETE')

let nameU = document.getElementById("nameU");
let lastname = document.getElementById("lastname");
let date = document.getElementById("dateborn");
let generous = document.getElementById("generous");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
let special = document.getElementById("special");
let phone = document.getElementById("phone");

function look_data(tipo,usuario,accion,medicamento,descripcion) {
    if(tipo == 'doctor'){
        localStorage.setItem('userC',`${usuario}`)
        localStorage.setItem('accion',`${accion}`)
        if(accion == 'ver'){window.location.replace("forms/ver/formdoctor.html")}
        else{window.location.replace("forms/editar/formdoctor.html")}
    }
    if(tipo == 'enfermera'){
        localStorage.setItem('userC',`${usuario}`)
        localStorage.setItem('accion',`${accion}`)
        if(accion == 'ver'){window.location.replace("forms/ver/formenfermera.html")}
        else{window.location.replace("forms/editar/formenfermera.html")}
    }
    if(tipo == 'paciente'){
        localStorage.setItem('userC',`${usuario}`)
        localStorage.setItem('accion',`${accion}`)
        if(accion == 'ver'){window.location.replace("forms/ver/formpaciente.html")}
        else{window.location.replace("forms/editar/formpaciente.html")}
    }
    if(tipo == 'medicamento'){
        localStorage.setItem('medicC',`${medicamento}`)
        localStorage.setItem('descC',`${descripcion}`)
        localStorage.setItem('accion',`${accion}`)
        if(accion == 'ver'){window.location.replace("forms/ver/formmedicamento.html")}
        else{window.location.replace("forms/editar/formmedicamento.html")}
    }
}

function cargarDoc(){
    let file = document.getElementById("cargaDoc").files[0];
    if (file){
        let readers = new FileReader();
        readers.readAsText(file,"UTF-8");
        readers.onload = function(evt){
            let cuerpo = {
                data:evt.target.result
            }
            fetch('http://localhost:5000/cargaDoc',{
                method:'POST',
                headers,
                body:JSON.stringify(cuerpo),
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:',result);
                actualizarTabDoc();
            })
            .catch(error => {
                console.error('Error:',error);
            })
        }
        readers.onerror = function(evt){
        }
    }
}
function cargarEnf(){
    let file = document.getElementById("cargaEnf").files[0];
    if (file){
        let readers = new FileReader();
        readers.readAsText(file,"UTF-8");
        readers.onload = function(evt){
            let cuerpo = {
                data:evt.target.result
            }
            fetch('http://localhost:5000/cargaEnf',{
                method:'POST',
                headers,
                body:JSON.stringify(cuerpo),
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:',result);
                actualizarTabEnf();
            })
            .catch(error => {
                console.error('Error:',error);
            })
        }
        readers.onerror = function(evt){
        }
    }
}
function cargarPac(){
    let file = document.getElementById("cargaPac").files[0];
    if (file){
        let readers = new FileReader();
        readers.readAsText(file,"UTF-8");
        readers.onload = function(evt){
            let cuerpo = {
                data:evt.target.result
            }
            fetch('http://localhost:5000/cargaPac',{
                method:'POST',
                headers,
                body:JSON.stringify(cuerpo),
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:',result);
                actualizarTabPac();
            })
            .catch(error => {
                console.error('Error:',error);
            })
        }
        readers.onerror = function(evt){
        }
    }
}
function cargarMed(){
    let file = document.getElementById("cargaMed").files[0];
    if (file){
        let readers = new FileReader();
        readers.readAsText(file,"UTF-8");
        readers.onload = function(evt){
            let cuerpo = {
                data:evt.target.result
            }
            fetch('http://localhost:5000/cargaMed',{
                method:'POST',
                headers,
                body:JSON.stringify(cuerpo),
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:',result);
                actualizarTabMed();
            })
            .catch(error => {
                console.error('Error:',error);
            })
        }
        readers.onerror = function(evt){
        }
    }
}
function delete_doc(usuario) {
    fetch('http://localhost:5000/eliminarusuario',{
        method:'DELETE',
        headers,
        body:`{
            "tipo":"doctor",
            "usuario":"${usuario}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        alert("Se ha eliminado a "+data.nombre+" "+data.apellido)
        actualizarTabDoc();
    })
}
function delete_enf(usuario) {
    fetch('http://localhost:5000/eliminarusuario',{
        method:'DELETE',
        headers,
        body:`{
            "tipo":"enfermera",
            "usuario":"${usuario}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        alert("Se ha eliminado a "+data.nombre+" "+data.apellido)
        actualizarTabEnf();
    })
}
function delete_pac(usuario) {
    fetch('http://localhost:5000/eliminarusuario',{
        method:'DELETE',
        headers,
        body:`{
            "tipo":"paciente",
            "usuario":"${usuario}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        alert("Se ha eliminado a "+data.nombre+" "+data.apellido)
        actualizarTabPac();
    })
}
function delete_pac(usuario) {
    fetch('http://localhost:5000/eliminarusuario',{
        method:'DELETE',
        headers,
        body:`{
            "tipo":"paciente",
            "usuario":"${usuario}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        alert("Se ha eliminado a "+data.nombre+" "+data.apellido)
        actualizarTabPac();
    })
}

function delete_med(nombre,descripcion) {
    fetch('http://localhost:5000/eliminarmedicamento',{
        method:'DELETE',
        headers,
        body:`{
            "nombre":"${nombre}",
            "descripcion":"${descripcion}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        alert("Se ha eliminado a "+data.nombre)
        actualizarTabMed();
    })
}

function actualizarusuario(usuario,tipo,nName,nLast,nDate,nGens,nUser,nPass,nSpec,nCelu) {
    fetch(`http://localhost:5000/actualizarusuario/${usuario}`,{
        method:'PUT',
        headers,
        body:`{
            "tipo":"${tipo}",
            "usuario":"${nUser}",
            "password":"${nPass}",
            "nombre":"${nName}",
            "apellido":"${nLast}",
            "fecha":"${nDate}",
            "genero":"${nGens}",
            "especialidad":"${nSpec}",
            "telefono":"${nCelu}"
        }`
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:',result);
        if(result.data == 'enUso'){
            alert('El nombre de usuarios ya está en uso, intente con uno nuevo')
        }else{
            alert('Se han guardado los cambios')
            administrar(tipo)
        }
    })
}

function actualizarmedicamento(medicamento,descripcion,nMed,nPre,nDesc,nCant) {
    fetch(`http://localhost:5000/actualizarmedicamento/${medicamento}/${descripcion}`,{
        method:'PUT',
        headers,
        body:`{
            "nombre":"${nMed}",
            "precio":"${nPre}",
            "descripcion":"${nDesc}",
            "cantidad":"${nCant}"
        }`
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:',result);
        alert('Se han guardado los cambios')
        administrar('medicamento')
    })
}

function modificarperfil(usuario,tipo,nName,nLast,nDate,nGens,nUser,nPass,nSpec,nCelu) {
    fetch(`http://localhost:5000/actualizarusuario/${usuario}`,{
        method:'PUT',
        headers,
        body:`{
            "tipo":"${tipo}",
            "usuario":"${nUser}",
            "password":"${nPass}",
            "nombre":"${nName}",
            "apellido":"${nLast}",
            "fecha":"${nDate}",
            "genero":"${nGens}",
            "especialidad":"${nSpec}",
            "telefono":"${nCelu}"
        }`
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:',result);
        if(result.data == 'enUso'){
            alert('El nombre de usuarios ya está en uso, intente con uno nuevo')
        }else{
            if(tipo == 'doctor'){
                localStorage.removeItem("user2")
                localStorage.setItem("user2",`${nUser}`)
            }
            if(tipo == 'enfermera'){
                localStorage.removeItem("user3")
                localStorage.setItem("user3",`${nUser}`)
            }
            if(tipo == 'paciente'){
                localStorage.removeItem("user4")
                localStorage.setItem("user4",`${nUser}`)
            }
            actualizarInfo(nUser)
        }
    })
}

function administrar(tabla) {
    localStorage.setItem('tabla',`${tabla}`)
    localStorage.removeItem('accion')
    localStorage.removeItem('userC')
    localStorage.removeItem('medicC')
    localStorage.removeItem('descC')
    window.location.replace("../../admin.html")
}

function agregarPedido(usuario,medicamento,descripcion) {
    fetch('http://localhost:5000/agregarPedido',{
        method:'POST',
        headers,
        body:`{
            "usuario":"${usuario}",
            "medicamento":"${medicamento}",
            "descripcion":"${descripcion}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        actualizarMedicamentos();
        actualizarPedido();
    })
}

function agregarUnidad(codigo,usuario) {
    fetch('http://localhost:5000/agregarunidad',{
        method:'PUT',
        headers,
        body:`{
            "codigo":"${codigo}",
            "usuario":"${usuario}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        actualizarMedicamentos();
        actualizarPedido();
    })
}

function quitarUnidad(disp,codigo,usuario) {
    if(disp > 0) {
        fetch('http://localhost:5000/quitarunidad',{
            method:'PUT',
            headers,
            body:`{
                "codigo":"${codigo}",
                "usuario":"${usuario}"
            }`
        })
        .then(response => response.json())
        .then(data => {
            actualizarMedicamentos();
            actualizarPedido();
        })
    }
}

function quitarPedido(codigo,usuario) {
    fetch('http://localhost:5000/quitarPedido',{
        method:'DELETE',
        headers,
        body:`{
            "codigo":"${codigo}",
            "usuario":"${usuario}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        //document.getElementById('totalG')
        actualizarMedicamentos();
        actualizarPedido();
    })
}

function comprar(total) {
    console.log(total)
}