//Listado Citas
let citas = "";
fetch('http://104.197.86.64:5000/obtenercitas')
.then(responseC => responseC.json())
.then(data => {
    var i;
    for(i = 0; i < data.length; i++){
        if(data[i].estado == 'Pendiente'){
            citas += `<tr class="row100 body">
                <td class="cell100 columnN"><input type="date" value="${data[i].fecha}" style="background: transparent;" disabled></td>
                <td class="cell100 columnP">${data[i].hora}</td>
                <td class="cell100 columnD">${data[i].motivo}</td>
                <td class="cell100 column5">
                    <div class="form-group">
                        <a class="btn-solid-edit page-scroll" type="button" onclick="aceptarCitaDoctor('${data[i].usuario}')" href="#acc">Aceptar</a>
                    </div>
                    <div class="form-group" style="margin-top: -43.5px; margin-left: 100px;">
                        <a class="btn-solid-delete page-scroll" type="button" onclick="rechazarCitaDoctor('${data[i].usuario}')" href="#rech">Rechazar</a>
                    </div>
                </td>
            </tr>`
        }
    }
    document.getElementById("tablemeCitas").innerHTML = citas;
})

//Citas Aceptadas
let acc = "";
fetch('http://104.197.86.64:5000/obtenercitas')
.then(responseA => responseA.json())
.then(dataA => {
    var i;
    for(i = 0; i < dataA.length; i++){
        if(dataA[i].estado == 'Aceptado' && dataA[i].doc_user == localStorage.getItem("user2")){
            acc += `<tr class="row100 body">
                <td class="cell100 columnN"><input type="date" value="${dataA[i].fecha}" style="background: transparent;" disabled></td>
                <td class="cell100 columnP">${dataA[i].hora}</td>
                <td class="cell100 columnD">${dataA[i].motivo}</td>
                <td class="cell100 column5">
                    <div class="form-group">
                    <input id="completo" type="checkbox" onclick="completarCita('${dataA[i].usuario}','${document.getElementById("nameP").value+" "+document.getElementById("lastP").value}','${dataA[i].motivo}')" href="#com"></input>
                    </div>
                </td>
            </tr>`
        }
    }
    document.getElementById("tablemeCitasA").innerHTML = acc;
})

function actualizarTabCitaPend() {
    let citas = "";
    fetch('http://104.197.86.64:5000/obtenercitas')
    .then(responseC => responseC.json())
    .then(data => {
        var i;
        for(i = 0; i < data.length; i++){
            if(data[i].estado == 'Pendiente'){
                citas += `<tr class="row100 body">
                    <td class="cell100 columnN"><input type="date" value="${data[i].fecha}" style="background: transparent;" disabled></td>
                    <td class="cell100 columnP">${data[i].hora}</td>
                    <td class="cell100 columnD">${data[i].motivo}</td>
                    <td class="cell100 column5">
                        <div class="form-group">
                            <a class="btn-solid-edit page-scroll" type="button" onclick="aceptarCitaDoctor('${data[i].usuario}')" href="#acc">Aceptar</a>
                        </div>
                        <div class="form-group" style="margin-top: -43.5px; margin-left: 100px;">
                            <a class="btn-solid-delete page-scroll" type="button" onclick="rechazarCitaDoctor('${data[i].usuario}')" href="#rech">Rechazar</a>
                        </div>
                    </td>
                </tr>`
            }
        }
        document.getElementById("tablemeCitas").innerHTML = citas;
    })
}

function actualizarTabAcc() {
    let acc = "";
    fetch('http://104.197.86.64:5000/obtenercitas')
    .then(responseA => responseA.json())
    .then(dataA => {
        var i;
        for(i = 0; i < dataA.length; i++){
            if(dataA[i].estado == 'Aceptado' && dataA[i].doc_user == localStorage.getItem("user2")){
                acc += `<tr class="row100 body">
                    <td class="cell100 columnN"><input type="date" value="${dataA[i].fecha}" style="background: transparent;" disabled></td>
                    <td class="cell100 columnP">${dataA[i].hora}</td>
                    <td class="cell100 columnD">${dataA[i].motivo}</td>
                    <td class="cell100 column5">
                        <div class="form-group">
                            <input id="completo" type="checkbox" onclick="completarCita('${dataA[i].usuario}','${document.getElementById("nameP").value+" "+document.getElementById("lastP").value}','${dataA[i].motivo}')" href="#com"></input>
                        </div>
                    </td>
                </tr>`
            }
        }
        document.getElementById("tablemeCitasA").innerHTML = acc;
    })
}