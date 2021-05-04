
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

function convertirdata1(usuario){
  let data ={
      "Nombre":usuario.nombre,
      "Apellido":usuario.apellido,
      "Fecha de Nacimiento":usuario.fecha,
      "Género":usuario.genero,
      "Usuario":usuario.usuario,
      "Contraseña":usuario.password,
  }

  return data

}

function crearPdfDocEnfPac(tipo){
  fetch(`http://35.222.105.198:5000/clasificartipousuario/${tipo}`)
  .then(response => response.json())
  .then(data=>{
    //Declarando los headers
    let headers = createHeaders([
      "Nombre",
      "Apellido",
      "Fecha de Nacimiento",
      "Género",
      "Usuario",
      "Contraseña"
    ]);
    // Insertamos la data
    let datos=[]
    for(let i =0;i<data.length;i++){
      datos.push(Object.assign({},convertirdata1(data[i])))
    }
    console.log(datos)
    var contentJsPdf = {
      headers,
      datos
  };
    var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });
    doc.table(2,2, datos, headers, { autoSize: false });
    doc.save(`${tipo}.pdf`)
  })
}