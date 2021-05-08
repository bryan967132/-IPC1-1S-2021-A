
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
  
  function convertirdata(medicamento){
    var data ={
        "Nombre":medicamento.nombre,
        "Precio":medicamento.precio,
        "Descripción":medicamento.descripcion,
        "Unidades Disponibles":medicamento.cantidad,
    }
  
    return data
  
  }
  
function crearPdfMed(){
    fetch('http://104.197.86.64:5000/obtenermedicamentos')
    .then(response => response.json())
    .then(data=>{
      //Declarando los headers
      let headers = createHeaders([
        "Nombre",
        "Precio",
        "Descripción",
        "Unidades Disponibles"
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
      var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
      doc.table(7, 7, datos, headers, { autoSize: false });
      doc.save('medicamento.pdf')
    })
  }