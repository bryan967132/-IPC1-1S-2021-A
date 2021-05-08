
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
  
  function convertirdataR(motivo,tratamiento){
    var data ={
        "Motivo":motivo,
        "Tratamiento":tratamiento,
    }
  
    return data
  
  }
  
function crearPdfReceta(fecha,paciente,doctor,motivo,tratamiento){
    if(fecha != '' && paciente != '' && motivo != '' && tratamiento != ''){
        registrarEnfermedad(motivo);
        document.getElementById('dateR').value = "";
        document.getElementById('motivoR').value = "";
        document.getElementById('pacR').value = "";
        document.getElementById('docR').value = "";
        document.getElementById('trataR').value = "";
        //Declarando los headers
        let headers = createHeaders([
            "Motivo",
            "Tratamiento"
        ]);
        // Insertamos la data
        let datos=[]
        datos.push(Object.assign({},convertirdataR(motivo,tratamiento)))
        console.log(datos)
        var contentJsPdf = {
            headers,
            datos
        };
        var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
        doc.text(`Fecha: ${fecha}`,10,15);
        doc.text(`Doctor: ${doctor}`,100,15)
        doc.text(`Paciente: ${paciente}`,10,25);
        doc.table(10,30, datos, headers, { autoSize: false });
        doc.save('Receta.pdf')
    }else{
        alert('Los campos son obligatorios')
    }
}

function registrarEnfermedad(motivo){
  fetch('http://localhost:5000/registrarEnfermedad',{
    method:'POST',
    headers,
    body:`{
      "enfermedad":"${motivo}"
    }`
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
  })
}