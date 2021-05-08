//declaración de headers
let headers = new Headers()
headers.append('Content-Type','application/json');
headers.append('Accept','application/json');
headers.append('Access-Control-Allow-Origin','http://104.197.86.64:5000');
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
            fetch('http://104.197.86.64:5000/cargaDoc',{
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
        document.getElementById("cargaDoc").value = '';
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
            fetch('http://104.197.86.64:5000/cargaEnf',{
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
        document.getElementById("cargaEnf").value = '';
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
            fetch('http://104.197.86.64:5000/cargaPac',{
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
        document.getElementById("cargaPac").value = '';
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
            fetch('http://104.197.86.64:5000/cargaMed',{
                method:'POST',
                headers,
                body:JSON.stringify(cuerpo),
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:',result);
                actualizarTabMed();
                actualizarTabTopM();
            })
            .catch(error => {
                console.error('Error:',error);
            })
        }
        readers.onerror = function(evt){
        }
        document.getElementById("cargaMed").value = '';
    }
}
function delete_doc(usuario) {
    fetch('http://104.197.86.64:5000/eliminarusuario',{
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
        actualizarTabTopDoc();
    })
}
function delete_enf(usuario) {
    fetch('http://104.197.86.64:5000/eliminarusuario',{
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
    fetch('http://104.197.86.64:5000/eliminarusuario',{
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
    fetch('http://104.197.86.64:5000/eliminarusuario',{
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
    fetch('http://104.197.86.64:5000/eliminarmedicamento',{
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
        actualizarTabTopM();
    })
}

function actualizarusuario(usuario,tipo,nName,nLast,nDate,nGens,nUser,nPass,nSpec,nCelu) {
    fetch(`http://104.197.86.64:5000/actualizarusuario/${usuario}`,{
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
    fetch(`http://104.197.86.64:5000/actualizarmedicamento/${medicamento}/${descripcion}`,{
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
    fetch(`http://104.197.86.64:5000/actualizarusuario/${usuario}`,{
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
    fetch('http://104.197.86.64:5000/agregarPedido',{
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
    fetch('http://104.197.86.64:5000/agregarunidad',{
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
    fetch('http://104.197.86.64:5000/quitarunidad',{
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

function quitarPedido(codigo,usuario) {
    fetch('http://104.197.86.64:5000/quitarPedido',{
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

function comprar(usuario,total,cliente) {
    fetch('http://104.197.86.64:5000/obtenerpedido')
    .then(response => response.json())
    .then(data=>{
        crearPdfCompra(cliente,total,usuario);
        let i;
        for(i = 0; i < data.length; i++) {
            fetch('http://104.197.86.64:5000/cobrar',{
                method:'DELETE',
                headers,
                body:`{
                    "codigo":"${data[i].codigo}",
                    "usuario":"${usuario}"
                }`
            })
            .then(resp => resp.json())
            .then(data1 => {
                actualizarPedido();
            })
        }
    })
}

function enviarSolicitud(fecha,hora,motivo) {
    if(motivo == ''){
        alert('Ingrese el motivo de su cita')
    }else{
        fetch('http://104.197.86.64:5000/solicitudCita',{
            method:'POST',
            headers,
            body:`{
                "usuario":"${localStorage.getItem("user4")}",
                "fecha":"${fecha}",
                "hora":"${hora}",
                "motivo":"${motivo}"
            }`
        })
        .then(response => response.json())
        .then(data => {
            if(data.solicitud == 'enviado') {
                let fecha = new Date();
                let mes = '';
                let dia = '';
                if(fecha.getMonth()+1 < 10) {mes = '0'+(fecha.getMonth()+1)}else{mes = (fecha.getMonth()+1)}
                if(fecha.getDate() < 10) {dia = '0'+fecha.getDate()}else{dia = fecha.getDate()}
                document.getElementById('dateC').value = fecha.getFullYear()+"-"+mes+"-"+dia
                let tiempo = new Date();
                let hora = '';
                let minuto = '';
                if(tiempo.getHours() < 10) {hora = '0'+tiempo.getHours()}else{hora = tiempo.getHours()}
                if(tiempo.getMinutes() < 10) {minuto = '0'+tiempo.getMinutes()}else{minuto = tiempo.getMinutes()}
                document.getElementById('timeC').value = hora+":"+minuto
                document.getElementById('motivoC').value = '';
                actualizarEstadoCita();
            }else{
                alert('Tiene una cita en proceso')
                let fecha = new Date();
                let mes = '';
                let dia = '';
                if(fecha.getMonth()+1 < 10) {mes = '0'+(fecha.getMonth()+1)}else{mes = (fecha.getMonth()+1)}
                if(fecha.getDate() < 10) {dia = '0'+fecha.getDate()}else{dia = fecha.getDate()}
                document.getElementById('dateC').value = fecha.getFullYear()+"-"+mes+"-"+dia
                let tiempo = new Date();
                let hora = '';
                let minuto = '';
                if(tiempo.getHours() < 10) {hora = '0'+tiempo.getHours()}else{hora = tiempo.getHours()}
                if(tiempo.getMinutes() < 10) {minuto = '0'+tiempo.getMinutes()}else{minuto = tiempo.getMinutes()}
                document.getElementById('timeC').value = hora+":"+minuto
                document.getElementById('motivoC').value = '';
            }
        })
    }
}

function nuevaSolicitud() {
    fetch('http://104.197.86.64:5000/eliminarsolicitudCita',{
        method:'DELETE',
        headers,
        body:`{
            "usuario":"${localStorage.getItem("user4")}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('motivoC').value = '';
        document.getElementById('date').value = '';
        document.getElementById('time').value = '';
        document.getElementById('motivo').value = '';
        document.getElementById('rech').value = '';
        document.getElementById('acc').value = '';
        document.getElementById('pend').value = '';
        document.getElementById('nueva').innerHTML = '';
    })
}

function actualizarEstadoCita() {
    fetch(`http://104.197.86.64:5000/buscarcita/${localStorage.getItem("user4")}`)
    .then(responseC => responseC.json())
    .then(dataC => {
        fetch(`http://104.197.86.64:5000/buscarcita/${localStorage.getItem("user4")}`)
        .then(responseC => responseC.json())
        .then(dataC => {
            if(dataC.cita != "false") {
                document.getElementById('date').value = `${dataC.fecha}`
                document.getElementById('time').value = `${dataC.hora}`
                document.getElementById('motivo').value = `${dataC.motivo}`
                if(dataC.estado == 'Rechazado'){
                    document.getElementById('rech').value = `${dataC.estado}`
                    document.getElementById('nueva').innerHTML = `<a class="btn-solid-lg page-scroll" onclick="nuevaSolicitud()" href="#send">Nueva Solicitud</a>`
                }
                if(dataC.estado == 'Aceptado'){
                    document.getElementById('acc').value = `${dataC.estado}`
                }
                if(dataC.estado == 'Pendiente'){
                    document.getElementById('pend').value = `${dataC.estado}`
                }
            }
        })
    })
}

function aceptarCitaDoctor(usuario) {
    fetch('http://104.197.86.64:5000/aceptarCiDoc',{
        method:'PUT',
        headers,
        body:`{
            "usuario":"${usuario}",
            "doctor":"${localStorage.getItem("user2")}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        actualizarTabCitaPend();
        actualizarTabAcc();
    })
}

function rechazarCitaDoctor(usuario) {
    fetch('http://104.197.86.64:5000/rechazarCiDoc',{
        method:'PUT',
        headers,
        body:`{
            "usuario":"${usuario}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        actualizarTabCitaPend();
        actualizarTabAcc();
    })
}

function completarCita(usuario,doctor,motivo) {
    fetch(`http://104.197.86.64:5000/buscartipousuario/${usuario}`)
    .then(response => response.json())
    .then(data => {
        let fecha = new Date();
        let mes = '';
        let dia = '';
        if(fecha.getMonth()+1 < 10) {mes = '0'+(fecha.getMonth()+1)}else{mes = (fecha.getMonth()+1)}
        if(fecha.getDate() < 10) {dia = '0'+fecha.getDate()}else{dia = fecha.getDate()}
        document.getElementById('dateR').value = fecha.getFullYear()+"-"+mes+"-"+dia
        document.getElementById('motivoR').value = motivo
        document.getElementById('pacR').value = data.nombre+" "+data.apellido
        document.getElementById('docR').value = doctor
        location.hash="#receta"
    })
    fetch('http://104.197.86.64:5000/eliminarsolicitudCita',{
        method:'DELETE',
        headers,
        body:`{
            "usuario":"${usuario}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        actualizarTabAcc();
    })
    fetch('http://104.197.86.64:5000/completarCitaCont',{
        method:'PUT',
        headers,
        body:`{
            "usuario":"${localStorage.getItem("user2")}"
        }`
    })
    .then(response => response.json())
    .then(data => {})
}

function cancelarReceta() {
    document.getElementById('dateR').value = "";
    document.getElementById('motivoR').value = "";
    document.getElementById('pacR').value = "";
    document.getElementById('docR').value = "";
    document.getElementById('trataR').value = "";
}

function sumarCant() {
    let total = 0;
    let numA = document.getElementById('cons');
    let numB = document.getElementById('op');
    let numC = document.getElementById('inter');
    let num1 = parseFloat(document.getElementById('cons').value);
    let num2 = parseFloat(document.getElementById('op').value);
    let num3 = parseFloat(document.getElementById('inter').value);
    if(numA.value == '' && numB.value == '' && numC.value == ''){
        total = 0;
    }
    if(numA.value == '' && numB.value == '' && numC.value != ''){
        total = num3;
    }
    if(numA.value == '' && numB.value != '' && numC.value == ''){
        total = num2;
    }
    if(numA.value == '' && numB.value != '' && numC.value != ''){
        total = num2+num3;
    }
    if(numA.value != '' && numB.value == '' && numC.value == ''){
        total = num1;
    }
    if(numA.value != '' && numB.value == '' && numC.value != ''){
        total = num1+num3;
    }
    if(numA.value != '' && numB.value != '' && numC.value == ''){
        total = num1+num2;
    }
    if(numA.value != '' && numB.value != '' && numC.value != ''){
        total = num1+num2+num3;
    }
    document.getElementById('totalF').value = `Q ${total}`
}

function cancelarFactura() {
    document.getElementById('date').value = "";
    document.getElementById('paciente').value = "";
    document.getElementById('dr').value = "";
    document.getElementById('cons').value = "";
    document.getElementById('op').value = "";
    document.getElementById('inter').value = "";
    sumarCant();
}

function seleccionarDoctor(usuario){
    localStorage.setItem('pacienteCita',`${usuario}`)
    window.location.replace("opcionDoc.html")
}

function aceptarEnf(doctor) {
    fetch('http://104.197.86.64:5000/aceptarCiEnf',{
        method:'PUT',
        headers,
        body:`{
            "usuario":"${localStorage.getItem('pacienteCita')}",
            "doctor":"${doctor}",
            "enfermera":"${localStorage.getItem("user3")}"
        }`
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('tabla1','Cita')
        localStorage.removeItem('pacienteCita')
        window.location.replace("enfermera.html")
    })
}

function administrarEnfCita() {
    localStorage.setItem('tabla1','Cita')
    window.location.replace("enfermera.html")
    localStorage.removeItem('pacienteCita')
}