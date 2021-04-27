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

function look_doc(nombre,apellido,fecha,genero,usuario,password,especialidad,telefono) {
    //window.location.href="usuario1.html"
    alert(nombre+" "+apellido+" "+fecha+" "+genero+" "+usuario+" "+password+" "+especialidad+" "+telefono)
}
function get_Look(nombre,apellido,fecha,genero,usuario,password,especialidad,telefono){
    nameU.value = nombre;
    lastname.value = apellido;
    date.value = fecha;
    generous.value = genero;
    user.value = usuario;
    pass.value = password;
    special.value = especialidad;
    phone.value = telefono;
}
function edit_doc(usuario) {
    alert("Editando a "+usuario)
    /*fetch()
    .then()
    .then()*/
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

function actualizarTabDoc(){
    document.getElementById("tabledocsc").innerHTML = '';
    let text = "";
    fetch('http://localhost:5000/clasificartipousuario/doctor')
    .then(response => response.json())
    .then(data => {
        var i;
        for(i = 0; i < data.length; i++){
            text += `<tr class="row100 body">
                <td class="cell100 column1">${i+1}</td>
                <td class="cell100 column2">${data[i].nombre}</td>
                <td class="cell100 column3">${data[i].apellido}</td>
                <td class="cell100 column4">${data[i].especialidad}</td>
                <td class="cell100 column5">
                    <div class="form-group">
                    <a class="btn-solid-look page-scroll" type="button" onclick="look_doc('${data[i].nombre}','${data[i].apellido}','${data[i].fecha}','${data[i].genero}','${data[i].usuario}','${data[i].password}','${data[i].especialidad}','${data[i].telefono}')" href="#inicio">Ver</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                        <a class="btn-solid-edit page-scroll " type="button" onclick="edit_doc('${data[i].usuario}')" href="#inicio">Editar</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                        <a class="btn-solid-delete page-scroll" type="button" onclick="delete_doc('${data[i].usuario}')" href="#borrar">Borrar</a>
                    </div>
                </td>
            </tr>`
        }
        document.getElementById("tabledocsc").innerHTML = text;
    })
}
function actualizarTabEnf() {
    document.getElementById("tableenfsc").innerHTML = '';
    let inicio1 = "<div class=\"table100-body js-pscroll\"><table><tbody>";
    let text1 = "";
    let final1 = "</tbody></table>";
    fetch('http://localhost:5000/clasificartipousuario/enfermera')
    .then(response1 => response1.json())
    .then(data1 => {
        var i;
        for(i = 0; i < data1.length; i++){
            text1 += `<tr class="row100 body">
                <td class="cell100 column1">${i+1}</td>
                <td class="cell100 column2">${data1[i].nombre}</td>
                <td class="cell100 column3">${data1[i].apellido}</td>
                <td class="cell100 column4">${data1[i].telefono}</td>
                <td class="cell100 column5">
                    <div class="form-group">
                        <a class="btn-solid-look page-scroll" type="button" href="#inicio">Ver</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                        <a class="btn-solid-edit page-scroll" type="button" href="#inicio">Editar</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                        <a class="btn-solid-delete page-scroll" type="button" onclick="delete_enf('${data1[i].usuario}')" href="#inicio">Borrar</a>
                    </div>
            </tr>`}
        document.getElementById("tableenfsc").innerHTML = inicio1+text1+final1;
    })
}
function actualizarTabPac() {
    document.getElementById("tablepassc").innerHTML = '';
    let inicio2 = "<div class=\"table100-body js-pscroll\"><table><tbody>";
    let text2 = "";
    let final2 = "</tbody></table>";
    fetch('http://localhost:5000/clasificartipousuario/paciente')
    .then(response2 => response2.json())
    .then(data2 => {
        var i;
        for(i = 0; i < data2.length; i++){
            text2 += `
            <tr class="row100 body">
                <td class="cell100 column1">${i+1}</td>
                <td class="cell100 column2">${data2[i].nombre}</td>
                <td class="cell100 column3">${data2[i].apellido}</td>
                <td class="cell100 column4">${data2[i].telefono}</td>
                <td class="cell100 column5">
                    <div class="form-group">
                        <a class="btn-solid-look page-scroll" type="button" href="#inicio">Ver</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                        <a class="btn-solid-edit page-scroll" type="button" href="#inicio">Editar</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                        <a class="btn-solid-delete page-scroll" type="button" onclick="delete_pac('${data2[i].usuario}')" href="#inicio">Borrar</a>
                    </div>
                </td>
            </tr>`}
        document.getElementById("tablepassc").innerHTML = inicio2+text2+final2;
    })
}
function actualizarTabMed() {
    document.getElementById("tablemedsc").innerHTML = '';
    let inicio3 = "<div class=\"table100-body js-pscroll\"><table><tbody>";
    let text3 = "";
    let final3 = "</tbody></table>";
    fetch('http://localhost:5000/obtenermedicamentos')
    .then(response3 => response3.json())
    .then(data3 => {
        var i;
        for(i = 0; i < data3.length; i++){
            text3 += `<tr class="row100 body">
                <td style="padding-left: 3%;" class="cell100 column2">${data3[i].nombre}</td>
                <td class="cell100 column2">${data3[i].precio}</td>
                <td class="cell100 column3">${data3[i].descripcion}</td>
                <td class="cell100 column4">${data3[i].cantidad}</td>
                <td class="cell100 column5">
                    <div class="form-group">
                        <a class="btn-solid-look page-scroll" type="button" href="#inicio">Ver</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                        <a class="btn-solid-edit page-scroll" type="button" href="#inicio">Editar</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                        <a class="btn-solid-delete page-scroll" type="button" onclick="delete_med('${data3[i].nombre}','${data3[i].descripcion}')" href="#inicio">Borrar</a>
                    </div>
                </td>
            </tr>`
        }
        document.getElementById("tablemedsc").innerHTML = inicio3+text3+final3;
    })
}