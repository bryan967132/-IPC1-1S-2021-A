let headers = new Headers()
headers.append('Content-Type','application/json');
headers.append('Accept','application/json');
headers.append('Access-Control-Allow-Origin','http://localhost:5000');
headers.append('Access-Control-Allow-Credentials','true');
headers.append('GET','POST','OPTIONS','PUT','DELETE')
function look_doc(usuario) {
    alert("Viendo a "+usuario)
    /*fetch()
    .then()
    .then()*/
}
function edit_doc(usuario) {
    alert("Editando a "+usuario)
    /*fetch()
    .then()
    .then()*/
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


function actualizarTabDoc(){
    document.getElementById("tabledocsc").innerHTML = '';
    let inicio = "<div class=\"table100-body js-pscroll\"><table><tbody>";
    let text = "";
    let final = "</tbody></table>";
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
            <a class="btn-solid-look page-scroll" type="button" href="#inicio">Ver</a>
        </div>
                <div class="form-group" style="margin-top: -43.5px; margin-left: 70px;">
                    <a class="btn-solid-edit page-scroll" type="button" onclick="edit_doc('${data[i].usuario}')" href="#inicio">Editar</a>
                </div>
                <div class="form-group" style="margin-top: -43.5px; margin-left: 160px;">
                    <a class="btn-solid-delete page-scroll" type="button" onclick="delete_doc('${data[i].usuario}')" href="#borrar">Borrar</a>
                </div>
            </td>
        </tr>`}
        document.getElementById("tabledocsc").innerHTML = inicio+text+final;
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