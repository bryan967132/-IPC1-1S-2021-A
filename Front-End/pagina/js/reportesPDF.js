function createHeaders(keys) {
    var result = [];
    for (var i = 0; i < keys.length; i += 1) {
        result.push({
            id: keys[i],
            name: keys[i],
            prompt: keys[i],
            width: 65,
            align: "center",
            padding: 0
        });
    }
    return result;
}

function convertirdataTopM(n,medicamento){
    var data ={
        "Top":n,
        "Nombre":medicamento.nombre,
        "Unidades Vendidas":medicamento.unidadesV,
    }
    return data
}

function topMpdf(){
    fetch('http://localhost:5000/obtenerTopM')
    .then(response => response.json())
    .then(data=>{
        let headers = createHeaders([
            "Top",
            "Nombre",
            "Unidades Vendidas"
        ]);
        let datos=[];
        for(let i = 0; i < 5; i++){
            if(parseInt(data[i].unidadesV) > 0){
                datos.push(Object.assign({},convertirdataTopM(i+1,data[i])))
            }
        }
        console.log(datos);
        var contentJsPdf = {
            headers,
            datos
        };
        var doc = new jsPDF({
            putOnlyUsedFonts: true,
            orientation: "portrait"
        });
        doc.text('Medicamentos Más Vendidos',7,10)
        doc.table(7, 15, datos, headers, {autoSize: false });
        doc.save('MedicamentosMasvendidos.pdf');
    })
}

function convertirdataTopDoc(n,doc){
    var data ={
        "Top":n,
        "Nombre":doc.nombre,
        "Apellido":doc.apellido,
        "Citas Atendidas":doc.citasAt
    }
    return data
}

function topDocpdf(){
    fetch('http://localhost:5000/obtenerTopDoc')
    .then(response => response.json())
    .then(data=>{
        let headers = createHeaders([
            "Top",
            "Nombre",
            "Apellido",
            "Citas Atendidas"
        ]);
        let datos=[];
        for(let i = 0; i < 3; i++){
            if(parseInt(data[i].citasAt) > 0){
                datos.push(Object.assign({},convertirdataTopDoc(i+1,data[i])))
            }
        }
        console.log(datos);
        var contentJsPdf = {
            headers,
            datos
        };
        var doc = new jsPDF({
            putOnlyUsedFonts: true,
            orientation: "portrait"
        });
        doc.text('Doctores Con Más Citas Atendidas',7,10)
        doc.table(7, 15, datos, headers, {autoSize: false });
        doc.save('DoctoresConMasCitas.pdf');
    })
}

function convertirdataTopEnf(n,enf){
    var data ={
        "Top":n,
        "Enfermedad":enf.enfermedad,
        "Casos Registrados":enf.casos
    }
    return data
}

function topEnfpdf(){
    fetch('http://localhost:5000/obtenerTopEnf')
    .then(response => response.json())
    .then(data=>{
        let headers = createHeaders([
            "Top",
            "Enfermedad",
            "Casos Registrados"
        ]);
        let datos=[];
        for(let i = 0; i < 3; i++){
            if(parseInt(data[i].casos) > 0){
                datos.push(Object.assign({},convertirdataTopEnf(i+1,data[i])))
            }
        }
        console.log(datos);
        var contentJsPdf = {
            headers,
            datos
        };
        var doc = new jsPDF({
            putOnlyUsedFonts: true,
            orientation: "portrait"
        });
        doc.text('Doctores Con Más Citas Atendidas',7,10)
        doc.table(7, 15, datos, headers, {autoSize: false });
        doc.save('DoctoresConMasCitas.pdf');
    })
}