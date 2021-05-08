//declaración de headers
let headers = new Headers()
headers.append('Content-Type','application/json');
headers.append('Accept','application/json');
headers.append('Access-Control-Allow-Origin','http://104.197.86.64:5000');
headers.append('Access-Control-Allow-Credentials','true');
headers.append('GET','POST','OPTIONS','PUT','DELETE')

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var fecha = document.getElementById("fecha");
var genero = document.getElementById("generous");
var usuario = document.getElementById("usuario");
var pass = document.getElementById("pass");
var telefono = document.getElementById("telefono");

//funcion registrar usuarios
function CrearUsuario(){
    if(nombre.value == ''){showValidate(nombre)}
    if(apellido.value == ''){showValidate(apellido)}
    if(fecha.value == ''){showValidate(fecha)}
    if(genero.value == ''){showValidate(genero)}
    if(usuario.value == ''){showValidate(usuario)}
    if(pass.value == ''){showValidate(pass)}
    if(nombre.value != '' && apellido.value != '' && fecha.value != '' && genero.value != '' && usuario.value != '' && pass.value != ''){
        let phone = '';
        if(telefono.value == ''){phone = 'Sin registrar'}else{phone = telefono.value}
        fetch('http://104.197.86.64:5000/registro',{
            method:'POST',
            headers,
            //Valores que se van a mandar
            body: `{
                "tipo":"paciente",
                "nombre":"${nombre.value}",
                "apellido":"${apellido.value}",
                "fecha":"${fecha.value}",
                "genero":"${genero.value}",
                "usuario":"${usuario.value}",
                "password":"${pass.value}",
                "telefono":"${phone}"
            }`
        })
        .then(response => response.json())
        .then(result => {
            if(result.data != "enUso"){
                nombre.value = '';
                apellido.value = '';
                fecha.value = '';
                genero.value = '';
                usuario.value = '';
                pass.value = '';
                telefono.value = '';
                alert('Paciente Registrado')
                window.location.href="login.html"
            }else{
                alert('El nombre de usuario se encuentra en uso')
                usuario.value = '';
                showValidate(usuario)
            }
        })
        .catch(
            error => {
                console.error('Error:',error);
                nombre.value = '';
                apellido.value = '';
                fecha.value = '';
                genero.value = '';
                usuario.value = '';
                pass.value = '';
                telefono.value = '';
                alert('Hubo un error creando usuario')
            }
        )
    }
}
//funcion iniciar sesion
function IniciarSesion(){
    if(usuario.value == ''){showValidate(usuario)}
    if(pass.value == ''){showValidate(pass)}
    if(usuario.value != '' && pass.value != ''){
        fetch(`http://104.197.86.64:5000/login/${usuario.value}/${pass.value}`)
        //Convirtiendo de string a texto
        .then(response => response.json())
        .then(data => {
            if(data.nombre == "false"){
                alert('Verifique sus Credenciales')
                usuario.value = '';
                pass.value = '';
            }else{
                fetch(`http://104.197.86.64:5000/buscartipousuario/${usuario.value}`)
                .then(response1 => response1.json())
                .then(data1 => {
                    saludo = '';
                    if(data1.genero == 'F'){
                        saludo = 'Bienvenida'
                    }else{
                        saludo = 'Bienvenido'
                    }
                    if(data1.tipo == "admin"){
                        alert(saludo+" "+data1.nombre)
                        localStorage.setItem('tipo1','admin')
                        localStorage.setItem('user1',`${data1.usuario}`)
                        window.location.href="../pagina/admin.html"
                        usuario.value = '';
                        pass.value = '';
                    }
                    if(data1.tipo == "doctor"){
                        alert(saludo+" "+data1.nombre)
                        localStorage.setItem('tipo2','doctor')
                        localStorage.setItem('user2',`${data1.usuario}`)
                        window.location.href="../pagina/doctor.html"
                        usuario.value = '';
                        pass.value = '';
                    }
                    if(data1.tipo == "enfermera"){
                        alert(saludo+" "+data1.nombre)
                        localStorage.setItem('tipo3','enfermera')
                        localStorage.setItem('user3',`${data1.usuario}`)
                        window.location.href="../pagina/enfermera.html"
                        usuario.value = '';
                        pass.value = '';
                    }
                    if(data1.tipo == "paciente"){
                        alert(saludo+" "+data1.nombre)
                        localStorage.setItem('tipo4','paciente')
                        localStorage.setItem('user4',`${data1.usuario}`)
                        window.location.href="../pagina/paciente.html"
                        usuario.value = '';
                        pass.value = '';
                    }
                })
            }
        })
        .catch(
            error => {
                console.error('Error:',error);
                nombre.value = '';
                apellido.value = '';
                fecha.value = '';
                genero.value = '';
                usuario.value = '';
                pass.value = '';
                telefono.value = '';
                alert('Hubo un error al iniciar sesión')
            }
        )
    }
}

function login(){
    nombre.value = '';
    apellido.value = '';
    fecha.value = '';
    genero.value = '';
    usuario.value = '';
    pass.value = '';
    telefono.value = '';
    window.location.href="login.html"
}

function registro(){
    usuario.value = '';
    pass.value = '';
    window.location.href="registro.html"
}

function back1(){
    usuario.value = '';
    pass.value = '';
    window.location.href="../pagina/index.html"
}

function back2(){
    nombre.value = '';
    apellido.value = '';
    fecha.value = '';
    genero.value = '';
    usuario.value = '';
    pass.value = '';
    telefono.value = '';
    window.location.href="../pagina/index.html"
}

function showValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).addClass('alert-validate');
}