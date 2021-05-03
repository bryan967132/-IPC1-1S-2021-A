#Importaciones de Flask
from flask import Flask,request,jsonify
from flask_cors import CORS
from Gestor import Gestor

#Crear la app
app = Flask(__name__)
app.config["DEBUG"] = True

CORS(app)

gestor = Gestor()

#EndPoints
@app.route('/',methods=['GET'])
def home():
    return 'SERVER IS WORKING!!!'

@app.route('/obtenermedicamentos')
def obtenermedicamentos():
    return gestor.obtener_medicamentos()

@app.route('/obtenerusuarios')
def obtenerusuarios():
    return gestor.obtener_usuarios()

@app.route('/actualizarusuario/<usuario>',methods=['PUT'])
def actualizarusuario(usuario):
    dato = request.json
    return gestor.actualizar_usuario(usuario,dato)

@app.route('/actualizarmedicamento/<nombre>/<descripcion>',methods=['PUT'])
def actualizarmedicamento(nombre,descripcion):
    dato = request.json
    return gestor.actualizar_medicamento(nombre,descripcion,dato)

@app.route('/agregarunidad',methods=['PUT'])
def agregarunidad():
    dato = request.json
    return gestor.agregar_unidad(dato['codigo'],dato['usuario'])

@app.route('/quitarunidad',methods=['PUT'])
def quitarunidad():
    dato = request.json
    return gestor.quitar_unidad(dato['codigo'],dato['usuario'])

@app.route('/obtenerpedido')
def obtenerpedido():
    return gestor.obtener_pedido()

@app.route('/eliminarusuario',methods=['DELETE'])
def eliminarusuario():
    dato = request.json
    return gestor.eliminar_usuario(dato['tipo'],dato['usuario'])

@app.route('/eliminarmedicamento',methods=['DELETE'])
def eliminarmedicamento():
    dato = request.json
    return gestor.eliminar_medicamento(dato['nombre'],dato['descripcion'])

@app.route('/buscartipousuario/<usuario>',methods=['GET'])
def buscartipousuario(usuario):
    return gestor.buscar_tipo_usuario(usuario)

@app.route('/buscarmedicamento/<nombre>/<descripcion>')
def buscarmedicamento(nombre,descripcion):
    return gestor.buscar_medicamento(nombre,descripcion)

@app.route('/clasificartipousuario/<tipo>')
def clasificartipousuario(tipo):
    return gestor.clasificar_usuario(tipo)

@app.route('/login/<usuario>/<password>')
def login(usuario,password):
    return gestor.iniciar_sesion(usuario,password)

@app.route('/cargaDoc',methods=['POST'])
def cargaDoc():
    dato = request.json
    gestor.cargamasivaDoc(dato['data'])
    return '{"data":"Cargados"}'

@app.route('/cargaEnf',methods=['POST'])
def cargaEnf():
    dato = request.json
    gestor.cargamasivaEnf(dato['data'])
    return '{"data":"Cargados"}'

@app.route('/cargaPac',methods=['POST'])
def cargaPac():
    dato = request.json
    gestor.cargamasivaPac(dato['data'])
    return '{"data":"Cargados"}'

@app.route('/cargaMed',methods=['POST'])
def cargaMed():
    dato = request.json
    gestor.cargamasivaMed(dato['data'])
    return '{"data":"Cargados"}'

@app.route('/registro',methods=['POST'])
def registrar():
    dato = request.json
    return gestor.registrar_usuario(dato['tipo'],dato['nombre'],dato['apellido'],dato['fecha'],dato['genero'],dato['usuario'],dato['password'],dato['telefono'])

@app.route('/agregarPedido',methods=['POST'])
def agregarPedido():
    dato = request.json
    return gestor.agregar_pedido(dato['usuario'],dato['medicamento'],dato['descripcion'])

@app.route('/quitarPedido',methods=['DELETE'])
def quitarPedido():
    dato = request.json
    return gestor.quitar_pedido(dato['usuario'],dato['codigo'])

#Iniciar el Servidor
if __name__ == "__main__":
    app.run(host="0.0.0.0",debug=True)