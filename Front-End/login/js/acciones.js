function actualizar() {
    document.getElementById("cardsc").innerHTML = '';
    let text = "";
    fetch('http://localhost:5000/obtenerlibros')
    .then(response => response.json())
    .then(data => {
        var i;
        for(i = 0; i < data.length; i++){
            text += `<br>
                    <div class="col-sm-3" style="margin-top: 25px;">
                    <div class="card bg-light" style="width: 18rem;">
                    <img class="card-img-top" src="${data[i].imagen}" alt="alternative">
                    <div class="card-body">
                        <h4 class="card-title">${data[i].titulo}</h4>
                        <h5 class="card-title">${data[i].autor}</h5>
                        <p class="card-text">${data[i].descripcion}</p>
                        <button href="#" class="btn-solid-lg" onclick="Eliminar()"></button>
                    </div>
                    </div>
                    </div>
                    <br>`
            console.log(data[i].nombre,'prueba')
        }
        document.getElementById("cardsc").innerHTML = text;
    })
}