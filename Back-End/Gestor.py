from Usuarios import Usuario,Admin,Doctor,Paciente,Enfermera
from Medicamentos import Medicamento
from Libros import Libro
import json
import re

class Gestor:
    def __init__(self):
        self.usuarios = []
        self.admin = []
        self.libros = []
        self.doctores = []
        self.pacientes = []
        self.enfermeras = []
        self.medicamentos = []

        #datos quemados------------------------------------
        self.libros.append(Libro("La Divina Comedia","Dante Alighiery","https://m.media-amazon.com/images/I/51FBFYOaEZL.jpg","asdf"))
        self.libros.append(Libro("La Calumnia","Vicenta Laparra","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3aLyDfweuNLTqRPV0iC1brqaQcQawjuHU39p2ylsmC5-w5_kplpYty4iOGN52Z1IRL4Y&usqp=CAU","fghj"))
        self.libros.append(Libro("El Animalero","Humberto Ak'abal","https://www.curriculumnacional.cl/614/articles-79653_thumbnail.jpg","ujmh"))
        self.libros.append(Libro("Viento Fuerte","Miguel Angel Asturias","https://2.bp.blogspot.com/-SL58QFsWjfc/W42RRaqeY9I/AAAAAAAAa4E/D0-xF8H39ak2aVmrkRg7ZC4IyB5_L1-kQCLcBGAs/s400/VientoFuerte.jpg","yhnt"))
        #-----------------------admin-----------------------------------
        self.usuarios.append(Usuario('admin','admin','admin'))
        self.admin.append(Admin('admin','admin','04/12/2000','M','admin','admin','12345678'))
        #-----------------------doctor-----------------------------------
        self.usuarios.append(Usuario('doctor','gh123','1234'))
        self.usuarios.append(Usuario('doctor','st123','1234'))
        self.usuarios.append(Usuario('doctor','ja123','1234'))
        self.doctores.append(Doctor('Gregory','House','15/02/2000','M','gh123','1234','Infectologia','65432452'))
        self.doctores.append(Doctor('Steven','Strange','15/02/2000','M','st123','1234','Neurocirugia','13262458'))
        self.doctores.append(Doctor('Jessica','Adams','15/02/2000','M','ja123','1234','Endocrinologia','90031612'))
        #-----------------------paciente-----------------------------------
        self.usuarios.append(Usuario('paciente','gtolcharde0','fTaJo5He'))
        self.usuarios.append(Usuario('paciente','jpresnail1','whKNw8MWSw'))
        self.usuarios.append(Usuario('paciente','nwhymark2','Vv1fsNxA5R'))
        self.pacientes.append(Paciente('Giuditta','Tolcharde','28/01/2020','F','gtolcharde0','fTaJo5He','89945059'))
        self.pacientes.append(Paciente('Joachim','Presnail','10/04/2019','M','jpresnail1','whKNw8MWSw','49771573'))
        self.pacientes.append(Paciente('Nancee','Whymark','17/10/2019','F','nwhymark2','Vv1fsNxA5R','38189528'))
        #-----------------------enfermera-----------------------------------
        self.usuarios.append(Usuario('enfermera','ashalcros0','UCqVbdszlaiH'))
        self.usuarios.append(Usuario('enfermera','mdrummond1','DasE5ymBvgV'))
        self.usuarios.append(Usuario('enfermera','nserrels2','7Hhz9rNQ6ktU'))
        self.enfermeras.append(Enfermera('Almire','Shalcros','29/11/2019','F','ashalcros0','UCqVbdszlaiH','39693213'))
        self.enfermeras.append(Enfermera('Martie','Drummond','01/08/2021','F','mdrummond1','DasE5ymBvgV','80586487'))
        self.enfermeras.append(Enfermera('Niki','Serrels','01/09/2021','M','nserrels2','7Hhz9rNQ6ktU','42491095'))
        #-----------------------medicamento-----------------------------------
        self.medicamentos.append(Medicamento('Ibuprofeno','10.5','Calma el dolor','50'))
        self.medicamentos.append(Medicamento('Aspirina','13','Calma el dolor','12'))
        self.medicamentos.append(Medicamento('Neomelubrina','5','Calma el dolor','20'))
        #----------------------------------------------------------

    #Create
    def crearLibro(self,titulo,autor,imagen,descripcion):
        self.libros.append(Libro(titulo,autor,imagen,descripcion))

    #Read
    def obtener_usuarios(self):
        return json.dumps([ob.__dict__ for ob in self.usuarios])

    def obtener_medicamentos(self):
        return json.dumps([ob.__dict__ for ob in self.medicamentos])

    #Update
    def actualizar_libro(self,titulo,titulonuevo,autor,imagen,descripcion):
        for i in self.libros:
            if i.titulo == titulo:
                self.libros[self.libros.index(i)] = Libro(titulonuevo,autor,imagen,descripcion)
                return True
        return False

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
                return '{"tipo":"'+i.tipo+'"}'

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
        if(self.verificar_usuario(usuario)):
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
        fila = re.split('\r\n',data)
        i=1
        while i < len(fila):
            campo = re.split(',',fila[i])
            self.usuarios.append(Usuario('doctor',campo[4],campo[5]))
            self.doctores.append(Doctor(campo[0],campo[1],campo[2],campo[3],campo[4],campo[5],campo[6],campo[7]))
            i += 1
    
    #Carga Masiva Enfermeras
    def cargamasivaEnf(self,data):
        fila = re.split('\r\n',data)
        i=1
        while i < len(fila):
            campo = re.split(',',fila[i])
            self.usuarios.append(Usuario('enfermera',campo[4],campo[5]))
            self.enfermeras.append(Enfermera(campo[0],campo[1],campo[2],campo[3],campo[4],campo[5],campo[6]))
            i += 1

    #Carga Masiva Pacientes
    def cargamasivaPac(self,data):
        fila = re.split('\r\n',data)
        i=1
        while i < len(fila):
            campo = re.split(',',fila[i])
            self.usuarios.append(Usuario('paciente',campo[4],campo[5]))
            self.pacientes.append(Paciente(campo[0],campo[1],campo[2],campo[3],campo[4],campo[5],campo[6]))
            i += 1

    #Carga Masiva Medicamentos
    def cargamasivaMed(self,data):
        fila = re.split('\r\n',data)
        i=1
        while i < len(fila):
            campo = re.split(',',fila[i])
            self.medicamentos.append(Medicamento(campo[0],campo[1],campo[2],campo[3]))
            i += 1