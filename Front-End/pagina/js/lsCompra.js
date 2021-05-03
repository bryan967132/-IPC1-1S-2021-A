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
  
  function convertirdata(enfermera){
    var data ={
        "Nombre":enfermera.nombre,
        "Apellido":enfermera.apellido,
        "Medicamento":enfermera.fecha,
        "Unidades":enfermera.genero,
        "Precio":enfermera.password
    }
    return data
  }
  
function crearPdfDocEnfPac(usuario,total){
    fetch(`http://localhost:5000/cobrar/${usuario}`)
    .then(response => response.json())
    .then(data=>{
      //Declarando los headers
      let headers = createHeaders([
        "Nombre",
        "Apellido",
        "Medicamento",
        "Unidades",
        "Precio",
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
      var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });
      doc.table(2, 2, datos, headers, { autoSize: false });
      doc.save(`${tipo}.pdf`)
    })
  }