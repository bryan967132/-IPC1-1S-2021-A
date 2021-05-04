//Tabla Doctores
let text = "";
fetch('http://35.222.105.198:5000/clasificartipousuario/doctor')
.then(response => response.json())
.then(data => {
    var i;
    for(i = 0; i < data.length; i++){
        text += `<tr class="row100 body">
            <td class="cell100 column1">${i+1}</td>
            <td class="cell100 column2">${data[i].nombre}</td>
            <td class="cell100 column3">${data[i].apellido}</td>
            <td class="cell100 column4">${data[i].telefono}</td>
            <td class="cell100 column5">
                <div class="form-group">
                    <a class="btn-solid-look page-scroll" type="button" onclick="look_data('doctor','${data[i].usuario}','ver')" href="#doctor">Ver</a>
                </div>
                <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                    <a class="btn-solid-edit page-scroll" type="button" onclick="look_data('doctor','${data[i].usuario}','edicion')" href="#doctor">Editar</a>
                </div>
                <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                    <a class="btn-solid-delete page-scroll" type="button" onclick="delete_doc('${data[i].usuario}')" href="#doctor">Borrar</a>
                </div>
            </td>
        </tr>`
    }
    document.getElementById("tabledocsc").innerHTML = text;
})

//Tabla Enfermeras
let text1 = "";
fetch('http://35.222.105.198:5000/clasificartipousuario/enfermera')
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
                    <a class="btn-solid-look page-scroll" type="button" onclick="look_data('enfermera','${data1[i].usuario}','ver')" href="#enfermera">Ver</a>
                </div>
                <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                    <a class="btn-solid-edit page-scroll" type="button" onclick="look_data('enfermera','${data1[i].usuario}','edicion')" href="#enfermera">Editar</a>
                </div>
                <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                    <a class="btn-solid-delete page-scroll" type="button" onclick="delete_enf('${data1[i].usuario}')" href="#enfermera">Borrar</a>
                </div>
            </td>
        </tr>`
    }
    document.getElementById("tableenfsc").innerHTML = text1;
})

//Tabla Pacientes
let text2 = "";
fetch('http://35.222.105.198:5000/clasificartipousuario/paciente')
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
                    <a class="btn-solid-look page-scroll" type="button" onclick="look_data('paciente','${data2[i].usuario}','ver')" href="#paciente">Ver</a>
                </div>
                <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                    <a class="btn-solid-edit page-scroll" type="button" onclick="look_data('paciente','${data2[i].usuario}','edicion')" href="#paciente">Editar</a>
                </div>
                <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                    <a class="btn-solid-delete page-scroll" type="button" onclick="delete_pac('${data2[i].usuario}')" href="#paciente">Borrar</a>
                </div>
            </td>
        </tr>`
    }
    document.getElementById("tablepassc").innerHTML = text2;
})

//Tabla Medicamentos
let text3 = "";
fetch('http://35.222.105.198:5000/obtenermedicamentos')
.then(response3 => response3.json())
.then(data3 => {
    var i;
    for(i = 0; i < data3.length; i++){
        text3 += `
        <tr class="row100 body">
            <td class="cell100 columnN">${data3[i].nombre}</td>
            <td class="cell100 columnP">Q ${data3[i].precio}</td>
            <td class="cell100 columnD">${data3[i].descripcion}</td>
            <td class="cell100 columnC">${data3[i].cantidad}</td>
            <td class="cell100 column5">
                <div class="form-group">
                    <a class="btn-solid-look page-scroll" type="button" onclick="look_data('medicamento','','ver','${data3[i].nombre}','${data3[i].descripcion}')" href="#medicamento">Ver</a>
                </div>
                <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                    <a class="btn-solid-edit page-scroll" type="button" onclick="look_data('medicamento','','edicion','${data3[i].nombre}','${data3[i].descripcion}')" href="#medicamento">Editar</a>
                </div>
                <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                    <a class="btn-solid-delete page-scroll" type="button" onclick="delete_med('${data3[i].nombre}','${data3[i].descripcion}')" href="#medicamento">Borrar</a>
                </div>
            </td>
        </tr>`
    }
    document.getElementById("tablemedsc").innerHTML = text3;
})

function actualizarTabDoc() {
    let text = "";
    fetch('http://35.222.105.198:5000/clasificartipousuario/doctor')
    .then(response => response.json())
    .then(data => {
        var i;
        for(i = 0; i < data.length; i++){
            text += `<tr class="row100 body">
                <td class="cell100 column1">${i+1}</td>
                <td class="cell100 column2">${data[i].nombre}</td>
                <td class="cell100 column3">${data[i].apellido}</td>
                <td class="cell100 column4">${data[i].telefono}</td>
                <td class="cell100 column5">
                    <div class="form-group">
                        <a class="btn-solid-look page-scroll" type="button" onclick="look_data('doctor','${data[i].usuario}','ver')" href="#doctor">Ver</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                        <a class="btn-solid-edit page-scroll" type="button" onclick="look_data('doctor','${data[i].usuario}','edicion')" href="#doctor">Editar</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                        <a class="btn-solid-delete page-scroll" type="button" onclick="delete_doc('${data[i].usuario}')" href="#doctor">Borrar</a>
                    </div>
                </td>
            </tr>`
        }
        document.getElementById("tabledocsc").innerHTML = text;
    })
}

function actualizarTabEnf() {
    let text1 = "";
    fetch('http://35.222.105.198:5000/clasificartipousuario/enfermera')
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
                        <a class="btn-solid-look page-scroll" type="button" onclick="look_data('enfermera','${data1[i].usuario}','ver')" href="#enfermera">Ver</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                        <a class="btn-solid-edit page-scroll" type="button" onclick="look_data('enfermera','${data1[i].usuario}','edicion')" href="#enfermera">Editar</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                        <a class="btn-solid-delete page-scroll" type="button" onclick="delete_enf('${data1[i].usuario}')" href="#enfermera">Borrar</a>
                    </div>
                </td>
            </tr>`
        }
        document.getElementById("tableenfsc").innerHTML = text1;
    })
}

function actualizarTabPac() {
    let text2 = "";
    fetch('http://35.222.105.198:5000/clasificartipousuario/paciente')
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
                        <a class="btn-solid-look page-scroll" type="button" onclick="look_data('paciente','${data2[i].usuario}','ver')" href="#paciente">Ver</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                        <a class="btn-solid-edit page-scroll" type="button" onclick="look_data('paciente','${data2[i].usuario}','edicion')" href="#paciente">Editar</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                        <a class="btn-solid-delete page-scroll" type="button" onclick="delete_pac('${data2[i].usuario}')" href="#paciente">Borrar</a>
                    </div>
                </td>
            </tr>`
        }
        document.getElementById("tablepassc").innerHTML = text2;
    })
}

function actualizarTabMed() {
    let text3 = "";
    fetch('http://35.222.105.198:5000/obtenermedicamentos')
    .then(response3 => response3.json())
    .then(data3 => {
        var i;
        for(i = 0; i < data3.length; i++){
            text3 += `
            <tr class="row100 body">
                <td class="cell100 columnN">${data3[i].nombre}</td>
                <td class="cell100 columnP">Q ${data3[i].precio}</td>
                <td class="cell100 columnD">${data3[i].descripcion}</td>
                <td class="cell100 columnC">${data3[i].cantidad}</td>
                <td class="cell100 column5">
                    <div class="form-group">
                        <a class="btn-solid-look page-scroll" type="button" onclick="look_data('medicamento','','ver','${data3[i].nombre}','${data3[i].descripcion}')" href="#medicamento">Ver</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                        <a class="btn-solid-edit page-scroll" type="button" onclick="look_data('medicamento','','edicion','${data3[i].nombre}','${data3[i].descripcion}')" href="#medicamento">Editar</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                        <a class="btn-solid-delete page-scroll" type="button" onclick="delete_med('${data3[i].nombre}','${data3[i].descripcion}')" href="#medicamento">Borrar</a>
                    </div>
                </td>
            </tr>`
        }
        document.getElementById("tablemedsc").innerHTML = text3;
    })
}