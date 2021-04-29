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

function crearpdf(tipo){
    fetch(`http://localhost:5000/clasificartipousuario/${tipo}`)
    .then(response => response.json())
    .then(data=>{
      //Declarando los headers
      let headers = createHeaders([
        "Titulo",
        "Autor",
        "Descripcion"
      ]);
      // Insertamos la data
      let datos=[]
      for(let i =0;i<data.length;i++){
        datos.push(Object.assign({},convertirdata(data[i])))
      }
      console.log(datos)
      var contentJsPdf = {
        headers,
        datos
    };
      var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });
      doc.table(75, 1, datos, headers, { autoSize: false });
      doc.save("ejemplo.pdf")
    })
  }