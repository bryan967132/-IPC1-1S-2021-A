from Usuarios import Usuario,Admin,Doctor,Paciente,Enfermera
from Medicamentos import Medicamento
from Pedidos import Pedido
import random
import json
import re

class Gestor:
    def __init__(self):
        self.usuarios = []
        self.admin = []
        self.doctores = []
        self.pacientes = []
        self.enfermeras = []
        self.medicamentos = []
        self.pedidos = []

        #datos quemados------------------------------------
        #-----------------------admin-----------------------------------
        self.usuarios.append(Usuario('admin','admin','1234'))
        self.admin.append(Admin('Herbert','Reyes','2000-12-04','M','admin','1234','12345678'))
        #-----------------------doctor-----------------------------------
        self.usuarios.append(Usuario('doctor','gh123','1234'))
        self.usuarios.append(Usuario('doctor','st123','1234'))
        self.usuarios.append(Usuario('doctor','ja123','1234'))
        self.doctores.append(Doctor('Gregory','House','2000-02-15','M','gh123','1234','Infectologia','Sin registrar'))
        self.doctores.append(Doctor('Steven','Strange','2000-02-15','M','st123','1234','Neurocirugia','13262458'))
        self.doctores.append(Doctor('Jessica','Adams','2000-02-15','F','ja123','1234','Endocrinologia','90031612'))
        #-----------------------paciente-----------------------------------
        self.usuarios.append(Usuario('paciente','dani12','1234'))
        self.usuarios.append(Usuario('paciente','jpresnail1','1234'))
        self.usuarios.append(Usuario('paciente','nwhymark2','Vv1fsNxA5R'))
        self.pacientes.append(Paciente('Danny','Tejaxun','2020-06-04','M','dani12','1234','58333546'))
        self.pacientes.append(Paciente('Joachim','Presnail','2019-04-03','M','jpresnail1','1234','Sin registrar'))
        self.pacientes.append(Paciente('Nancee','Whymark','2019-10-27','F','nwhymark2','Vv1fsNxA5R','38189528'))
        #-----------------------enfermera-----------------------------------
        self.usuarios.append(Usuario('enfermera','ashalcros0','UCqVbdszlaiH'))
        self.usuarios.append(Usuario('enfermera','mdrummond1','DasE5ymBvgV'))
        self.usuarios.append(Usuario('enfermera','nserrels2','7Hhz9rNQ6ktU'))
        self.enfermeras.append(Enfermera('Almire','Shalcros','2019-11-29','F','ashalcros0','UCqVbdszlaiH','39693213'))
        self.enfermeras.append(Enfermera('Martie','Drummond','2021-08-01','F','mdrummond1','DasE5ymBvgV','80586487'))
        self.enfermeras.append(Enfermera('Niki','Serrels','2021-09-01','M','nserrels2','7Hhz9rNQ6ktU','Sin registrar'))
        #-----------------------medicamento-----------------------------------
        self.medicamentos.append(Medicamento('Ibuprofeno','10.5','Calma el dolor','50'))
        self.medicamentos.append(Medicamento('Aspirina','13','Calma el dolor','12'))
        self.medicamentos.append(Medicamento('Neomelubrina','5','Calma el dolor','20'))
        #----------------------------------------------------------
    #Read
    def obtener_usuarios(self):
        return json.dumps([ob.__dict__ for ob in self.usuarios])

    def obtener_medicamentos(self):
        return json.dumps([ob.__dict__ for ob in self.medicamentos])

    #Update
    def actualizar_usuario(self,usuario,data):
        for i in self.usuarios:
            if i.usuario == usuario:
                if i.usuario == data['usuario'] or self.verificar_usuario(data['usuario']):
                    telefono = 'Sin registrar'
                    if data['telefono'] != '':
                        telefono = data['telefono']
                    if data['tipo'] == 'doctor':
                        for j in self.doctores:
                            if j.usuario == i.usuario:
                                self.usuarios[self.usuarios.index(i)] = Usuario(data['tipo'],data['usuario'],data['password'])
                                self.doctores[self.doctores.index(j)] = Doctor(data['nombre'],data['apellido'],data['fecha'],data['genero'],data['usuario'],data['password'],data['especialidad'],telefono)
                                return '{"data":"actualizado"}'
                    if data['tipo'] == 'enfermera':
                        for j in self.enfermeras:
                            if j.usuario == i.usuario:
                                self.usuarios[self.usuarios.index(i)] = Usuario(data['tipo'],data['usuario'],data['password'])
                                self.enfermeras[self.enfermeras.index(j)] = Enfermera(data['nombre'],data['apellido'],data['fecha'],data['genero'],data['usuario'],data['password'],telefono)
                                return '{"data":"actualizado"}'
                    if data['tipo'] == 'paciente':
                        for j in self.pacientes:
                            if j.usuario == i.usuario:
                                self.usuarios[self.usuarios.index(i)] = Usuario(data['tipo'],data['usuario'],data['password'])
                                self.pacientes[self.pacientes.index(j)] = Paciente(data['nombre'],data['apellido'],data['fecha'],data['genero'],data['usuario'],data['password'],telefono)
                                return '{"data":"actualizado"}'
        return '{"data":"enUso"}'

    def actualizar_medicamento(self,nombre,descripcion,data):
        for i in self.medicamentos:
            if i.nombre == nombre and i.descripcion == descripcion:
                self.medicamentos[self.medicamentos.index(i)] = Medicamento(data['nombre'],data['precio'],data['descripcion'],data['cantidad'])
                return '{"data":"actualizado"}'

    #Delete
    def eliminar_usuario(self,tipo,usuario):
        for i in self.usuarios:
            if tipo == 'doctor' and i.usuario == usuario:
                for j in self.doctores:
                    if j.usuario == i.usuario:
                        self.usuarios.remove(i)
                        self.doctores.remove(j)
                        return json.dumps(j.__dict__)
            if tipo == 'enfermera' and i.usuario == usuario:
                for j in self.enfermeras:
                    if j.usuario == i.usuario:
                        self.usuarios.remove(i)
                        self.enfermeras.remove(j)
                        return json.dumps(j.__dict__)
            if tipo == 'paciente' and i.usuario == usuario:
                for j in self.pacientes:
                    if j.usuario == i.usuario:
                        self.usuarios.remove(i)
                        self.pacientes.remove(j)
                        return json.dumps(j.__dict__)

    def eliminar_medicamento(self,nombre,descripcion):
        for i in self.medicamentos:
            if i.nombre == nombre and i.descripcion == descripcion:
                self.medicamentos.remove(i)
                return json.dumps(i.__dict__)

    #Buscar
    def buscar_tipo_usuario(self,usuario):
        for i in self.usuarios:
            if i.usuario == usuario:
                if i.tipo == 'admin':
                    for j in self.admin:
                        if j.usuario == i.usuario:
                            return json.dumps(j.__dict__)
                if i.tipo == 'doctor':
                    for j in self.doctores:
                        if j.usuario == i.usuario:
                            return json.dumps(j.__dict__)
                if i.tipo == 'enfermera':
                    for j in self.enfermeras:
                        if j.usuario == i.usuario:
                            return json.dumps(j.__dict__)
                if i.tipo == 'paciente':
                    for j in self.pacientes:
                        if j.usuario == i.usuario:
                            return json.dumps(j.__dict__)

    def buscar_medicamento(self,nombre,descripcion):
        for i in self.medicamentos:
            if i.nombre == nombre and i.descripcion == descripcion:
                return json.dumps(i.__dict__)

    def clasificar_usuario(self,tipo):
        if tipo == 'doctor':
            return json.dumps([ob.__dict__ for ob in self.doctores])
        if tipo == 'paciente':
            return json.dumps([ob.__dict__ for ob in self.pacientes])
        if tipo == 'enfermera':
            return json.dumps([ob.__dict__ for ob in self.enfermeras])

    #Iniciar Sesion
    def iniciar_sesion(self,usuario,password):
        for i in self.usuarios:
            if i.password == password and i.usuario == usuario:
                return json.dumps(i.__dict__)
        return '{"nombre":"false"}'

    #Registrar Usuario
    def registrar_usuario(self,tipo,nombre,apellido,fecha,genero,usuario,password,telefono):
        if self.verificar_usuario(usuario):
            self.usuarios.append(Usuario(tipo,usuario,password))
            self.pacientes.append(Paciente(nombre,apellido,fecha,genero,usuario,password,telefono))
            return '{"data":"creado"}'
        return '{"data":"enUso"}'

    def verificar_usuario(self,usuario):
        for i in self.usuarios:
            if i.usuario == usuario:
                return False
        return True

    #Carga Masiva Doctores
    def cargamasivaDoc(self,data):
        fila = re.split('\n',data)
        i=1
        while i < len(fila):
            campo = re.split(',',fila[i])
            compFecha = re.split('/',campo[2])
            fecha = compFecha[2]+"-"+compFecha[1]+"-"+compFecha[0]
            telefono='Sin registrar'
            try:
                if campo[7] != '':
                    telefono = campo[7]
            except:
                pass
            self.usuarios.append(Usuario('doctor',campo[4],campo[5]))
            self.doctores.append(Doctor(campo[0],campo[1],fecha,campo[3],campo[4],campo[5],campo[6],telefono))
            i += 1
    
    #Carga Masiva Enfermeras
    def cargamasivaEnf(self,data):
        fila = re.split('\n',data)
        i=1
        while i < len(fila):
            campo = re.split(',',fila[i])
            compFecha = re.split('/',campo[2])
            fecha = compFecha[2]+"-"+compFecha[1]+"-"+compFecha[0]
            telefono='Sin registrar'
            try:
                if campo[6] != '':
                    telefono = campo[6]
            except:
                pass
            self.usuarios.append(Usuario('enfermera',campo[4],campo[5]))
            self.enfermeras.append(Enfermera(campo[0],campo[1],fecha,campo[3],campo[4],campo[5],telefono))
            i += 1

    #Carga Masiva Pacientes
    def cargamasivaPac(self,data):
        fila = re.split('\n',data)
        i=1
        while i < len(fila):
            campo = re.split(',',fila[i])
            compFecha = re.split('/',campo[2])
            fecha = compFecha[2]+"-"+compFecha[1]+"-"+compFecha[0]
            telefono='Sin registrar'
            try:
                if campo[6] != '':
                    telefono = campo[6]
            except:
                pass
            self.usuarios.append(Usuario('paciente',campo[4],campo[5]))
            self.pacientes.append(Paciente(campo[0],campo[1],fecha,campo[3],campo[4],campo[5],telefono))
            i += 1

    #Carga Masiva Medicamentos
    def cargamasivaMed(self,data):
        fila = re.split('\n',data)
        i=1
        while i < len(fila):
            campo = re.split(',',fila[i])
            self.medicamentos.append(Medicamento(campo[0],campo[1],campo[2],campo[3]))
            i += 1

    #Agregar al Pedido
    def agregar_pedido(self,usuario,medicamento,descripcion):
        for i in self.medicamentos:
            if i.nombre == medicamento and i.descripcion == descripcion:
                cant = int(i.cantidad)
                cant -= 1
                self.medicamentos[self.medicamentos.index(i)] = Medicamento(i.nombre,i.precio,i.descripcion,cant)
                self.pedidos.append(Pedido(self.generar_codigo(),usuario,i.nombre,i.precio,1,i.descripcion))
                return '{"estado":"agregado"}'

    #Quitar del Pedido
    def quitar_pedido(self,usuario,codigo):
        for i in self.pedidos:
            if i.usuario == usuario and i.codigo == codigo:
                for j in self.medicamentos:
                    if j.nombre == i.medicamento and j.descripcion == i.descripcion:
                        cant1 = int(i.unidades)
                        cant2 = int(j.cantidad)
                        cant2 += cant1
                        self.medicamentos[self.medicamentos.index(j)] = Medicamento(j.nombre,j.precio,j.descripcion,cant2)
                        self.pedidos.remove(i)
                        return '{"estado":"quitado"}'

    #Obtener Tabla Pedidos
    def obtener_pedido(self):
        return json.dumps([ob.__dict__ for ob in self.pedidos])

    #Agregar Unidades
    def agregar_unidad(self,codigo,usuario):
        for i in self.pedidos:
            if i.usuario == usuario and i.codigo == codigo:
                for j in self.medicamentos:
                    if int(j.cantidad) > 0:
                        if j.nombre == i.medicamento and j.descripcion == i.descripcion:
                            cant1 = int(i.unidades)
                            cant1 += 1
                            cant2 = int(j.cantidad)
                            cant2 -= 1
                            self.medicamentos[self.medicamentos.index(j)] = Medicamento(j.nombre,j.precio,j.descripcion,cant2)
                            self.pedidos[self.pedidos.index(i)] = Pedido(i.codigo,i.usuario,i.medicamento,i.precio,cant1,i.descripcion)
                            return '{"estado":"agregado"}'
        return '{"estado":"agotado"}'

    #Quitar Unidades
    def quitar_unidad(self,codigo,usuario):
        for i in self.pedidos:
            if i.usuario == usuario and i.codigo == codigo:
                for j in self.medicamentos:
                    if j.nombre == i.medicamento and j.descripcion == i.descripcion:
                        cant1 = int(i.unidades)
                        cant1 -= 1
                        cant2 = int(j.cantidad)
                        cant2 += 1
                        self.medicamentos[self.medicamentos.index(j)] = Medicamento(j.nombre,j.precio,j.descripcion,cant2)
                        self.pedidos[self.pedidos.index(i)] = Pedido(i.codigo,i.usuario,i.medicamento,i.precio,cant1,i.descripcion)
                        return '{"estado":"agregado"}'

    #Generador Código de Pedido
    def generar_codigo(self):
        mayusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        minusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        simbolos = ['#','$','&','-','_','(',')','|','*','¿','?','¡','!']
        numeros = ['1','2','3','4','5','6','7','8','9','0']
        caracteres = mayusculas + minusculas + simbolos + numeros
        codigo = []
        for i in range(20):
            caracter_random = random.choice(caracteres)
            codigo.append(caracter_random)
        return ''.join(codigo)