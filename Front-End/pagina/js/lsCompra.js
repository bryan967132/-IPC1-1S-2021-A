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
  
  function convertirdata2(user){
      var data ={
          "Medicamento":user.medicamento,
          "Unidades":user.unidades,
          "Precio":user.precio,
      }
    return data
  }
  
function crearPdfCompra(cliente,total,clienteUser){
    fetch('http://35.222.105.198:5000/obtenerpedido')
    .then(response => response.json())
    .then(data=>{
      //Declarando los headers
      let headers = createHeaders([
        "Medicamento",
        "Unidades",
        "Precio"
      ]);
      // Insertamos la data
      let datos = [];
      let nombre = '';
      for(let i =0;i<data.length;i++){
        if(data[i].usuario == clienteUser){
          datos.push(Object.assign({},convertirdata2(data[i])))
        }
      }
      console.log(datos)
      var contentJsPdf = {
        headers,
        datos
    };
    var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
      doc.text(`Nombre: ${cliente}`, 10, 15)
      doc.table(10, 20, datos, headers, { autoSize: false });
      doc.text(`Total Gastado: Q ${total}`, 120, 15)
      doc.save('PedidoMedicamentos.pdf')
    })
  }