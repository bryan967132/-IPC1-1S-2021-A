
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
  
  function convertirdataFac(servicio,costo){
    var data ={
        "Servicio":servicio,
        "Costo":costo,
    }
  
    return data
  
  }
  
function crearPdfFactura(fecha,paciente,doctor,consulta,operacion,internado,total){
    if(fecha != '' && paciente != '' && doctor != '' && consulta != ''){
        document.getElementById('date').value = "";
        document.getElementById('paciente').value = "";
        document.getElementById('dr').value = "";
        document.getElementById('cons').value = "";
        document.getElementById('op').value = "";
        document.getElementById('inter').value = "";
        sumarCant();
        //Declarando los headers
        let headers = createHeaders([
            "Servicio",
            "Costo"
        ]);
        // Insertamos la data
        let datos=[]
        datos.push(Object.assign({},convertirdataFac("Consulta",consulta)))
        datos.push(Object.assign({},convertirdataFac("Operacion",operacion)))
        datos.push(Object.assign({},convertirdataFac("Internado",internado)))
        console.log(datos)
        var contentJsPdf = {
            headers,
            datos
        };
        var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
        doc.text(`Fecha: ${fecha}`,10,15);
        doc.text(`Doctor: ${doctor}`,100,15)
        doc.text(`Costo Total: ${total}`,100,25)
        doc.text(`Paciente: ${paciente}`,10,25);
        doc.table(10,30, datos, headers, { autoSize: false });
        doc.save('Factura.pdf')
    }else{
        alert('Los campos son obligatorios')
    }
}