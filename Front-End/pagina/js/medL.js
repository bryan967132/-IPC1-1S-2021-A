//Catálogo Medicinas
let listadoMed = "";
fetch('http://localhost:5000/obtenermedicamentos')
.then(responseMed => responseMed.json())
.then(medicamento => {
    var i;
    for(i = 0; i < medicamento.length; i++){
        if(parseInt(medicamento[i].cantidad) > 0){
            listadoMed += `<div class="card">
                <div class="card-body">
                    <div class="card-title">${medicamento[i].nombre}</div>
                    <hr class="cell-divide-hr">
                    <div class="price">
                        <span class="currency">Q</span><span class="value">${medicamento[i].precio}</span>
                        <div class="frequency">1 vez al día</div>
                        <div style="font-size: 10px;">Unidades Disponibles: ${medicamento[i].cantidad}</div>
                    </div>
                    <hr class="cell-divide-hr">
                    <ul class="list-unstyled li-space-lg">
                        <li class="media">
                            <i class="fas fa-check"></i><div class="media-body">${medicamento[i].descripcion}</div>
                        </li>
                    </ul>
                    <div id="addP" class="button-wrapper">
                        <a onclick="agregarPedido('${localStorage.getItem("user4")}','${medicamento[i].nombre}','${medicamento[i].descripcion}')" class="btn-solid-lg page-scroll" href="#add">Agregar al Carrito</a>
                    </div>
                </div>
            </div>`
        }
    }
    document.getElementById("listMed").innerHTML = listadoMed;
})

//Tabla Pedidos
let pedidoMed = "";
fetch('http://localhost:5000/obtenerpedido')
.then(responseP => responseP.json())
.then(pedido => {
    var i;
    let total = 0;
    for(i = 0; i < pedido.length; i++){
        if(pedido[i].usuario == localStorage.getItem("user4")){
            subtotal = parseFloat(pedido[i].precio)*parseInt(pedido[i].unidades);
            total += subtotal;
            pedidoMed += `<tr class="row100 body">
                <td class="cell100 columnN">${pedido[i].medicamento}</td>
                <td class="cell100 columnP">Q ${pedido[i].precio}</td>
                <td class="cell100 columnC">${pedido[i].unidades}</td>
                <td class="cell100 columnP">Q ${subtotal}</td>
                <td class="cell100 column5">
                    <div class="form-group" style="margin-top: 30px; margin-left: 25px;">
                        <a class="btn-solid-less page-scroll" type="button" onclick="quitarUnidad('${pedido[i].unidades}','${pedido[i].codigo}','${localStorage.getItem("user4")}','${total}')" href="#less">-</a>
                    </div>
                    <div class="form-group" style="margin-top: -38px; margin-left: 70px;">
                        <a class="btn-solid-plus page-scroll" type="button" onclick="agregarUnidad('${pedido[i].codigo}','${localStorage.getItem("user4")}','${total}')" href="#plus">+</a>
                    </div>
                    <div class="form-group" style="margin-top: -3.4rem; margin-left: 220px;">
                        <a class="btn-solid-quitar page-scroll" type="button" onclick="quitarPedido('${pedido[i].codigo}','${localStorage.getItem("user4")}')" href="#quit"><strong><b>x</b></strong></a>
                    </div>
                </td>
            </tr>`
        }
    }
    document.getElementById('totalG').value = `${total}`;
    document.getElementById("tablepedido").innerHTML = pedidoMed;
})

function actualizarMedicamentos(){
    let listadoMed = "";
    fetch('http://localhost:5000/obtenermedicamentos')
    .then(responseMed => responseMed.json())
    .then(medicamento => {
        var i;
        for(i = 0; i < medicamento.length; i++){
            if(parseInt(medicamento[i].cantidad) > 0){
                listadoMed += `<div class="card">
                    <div class="card-body">
                        <div class="card-title">${medicamento[i].nombre}</div>
                        <hr class="cell-divide-hr">
                        <div class="price">
                            <span class="currency">Q</span><span class="value">${medicamento[i].precio}</span>
                            <div class="frequency">1 vez al día</div>
                            <div style="font-size: 10px;">Unidades Disponibles: ${medicamento[i].cantidad}</div>
                        </div>
                        <hr class="cell-divide-hr">
                        <ul class="list-unstyled li-space-lg">
                            <li class="media">
                                <i class="fas fa-check"></i><div class="media-body">${medicamento[i].descripcion}</div>
                            </li>
                        </ul>
                        <div class="button-wrapper">
                        <a onclick="agregarPedido('${localStorage.getItem("user4")}','${medicamento[i].nombre}','${medicamento[i].descripcion}')" class="btn-solid-lg page-scroll" href="#add">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>`
            }
        }
        document.getElementById("listMed").innerHTML = listadoMed;
    })
}

function actualizarPedido() {
    let pedidoMed = "";
    fetch('http://localhost:5000/obtenerpedido')
    .then(responseP => responseP.json())
    .then(pedido => {
        var i;
        let total = 0;
        for(i = 0; i < pedido.length; i++){
            if(pedido[i].usuario == localStorage.getItem("user4")){
                subtotal = parseFloat(pedido[i].precio)*parseInt(pedido[i].unidades);
                total += subtotal;
                pedidoMed += `<tr class="row100 body">
                    <td class="cell100 columnN">${pedido[i].medicamento}</td>
                    <td class="cell100 columnP">Q ${pedido[i].precio}</td>
                    <td class="cell100 columnC">${pedido[i].unidades}</td>
                    <td class="cell100 columnP">Q ${subtotal}</td>
                    <td class="cell100 column5">
                        <div class="form-group" style="margin-top: 30px; margin-left: 25px;">
                            <a class="btn-solid-less page-scroll" type="button" onclick="quitarUnidad('${pedido[i].unidades}','${pedido[i].codigo}','${localStorage.getItem("user4")}','${total}')" href="#less">-</a>
                        </div>
                        <div class="form-group" style="margin-top: -38px; margin-left: 70px;">
                            <a class="btn-solid-plus page-scroll" type="button" onclick="agregarUnidad('${pedido[i].codigo}','${localStorage.getItem("user4")}','${total}')" href="#plus">+</a>
                        </div>
                        <div class="form-group" style="margin-top: -3.4rem; margin-left: 220px;">
                            <a class="btn-solid-quitar page-scroll" type="button" onclick="quitarPedido('${pedido[i].codigo}','${localStorage.getItem("user4")}')" href="#quit"><strong><b>x</b></strong></a>
                        </div>
                    </td>
                </tr>`
            }
        }
        document.getElementById('totalG').value = `${total}`;
        document.getElementById("tablepedido").innerHTML = pedidoMed;
    })
}