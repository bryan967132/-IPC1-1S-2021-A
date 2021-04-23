from Usuarios import Usuario,Doctor,Paciente,Enfermera
from Libros import Libro
import json

class Gestor:
    def __init__(self):
        self.usuarios = []
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
        self.usuarios.append(Usuario('admin','admin','admin','04/12/2000','M','admin','admin','12345678'))
        #-----------------------doctor-----------------------------------
        self.usuarios.append(Usuario('doctor','Gregory','House','15/02/2000','M','gh123','1234','65432452'))
        self.usuarios.append(Usuario('doctor','Steven','Strange','15/02/2000','M','st123','1234','13262458'))
        self.usuarios.append(Usuario('doctor','Jessica','Adams','15/02/2000','M','ja123','1234','90031612'))
        self.doctores.append(Doctor('Gregory','House','15/02/2000','M','gh123','1234','Infectologia','65432452'))
        self.doctores.append(Doctor('Steven','Strange','15/02/2000','M','st123','1234','Neurocirugia','13262458'))
        self.doctores.append(Doctor('Jessica','Adams','15/02/2000','M','ja123','1234','Endocrinologia','90031612'))
        #-----------------------paciente-----------------------------------
        self.usuarios.append(Usuario('paciente','Giuditta','Tolcharde','28/01/2020','F','gtolcharde0','fTaJo5He','89945059'))
        self.usuarios.append(Usuario('paciente','Joachim','Presnail','10/04/2019','M','jpresnail1','whKNw8MWSw','49771573'))
        self.usuarios.append(Usuario('paciente','Nancee','Whymark','17/10/2019','F','nwhymark2','Vv1fsNxA5R','38189528'))
        """self.usuarios.append(Usuario('paciente','Gregory','House','15/02/2000','M','jk545','1234','65432454'))
        self.usuarios.append(Usuario('paciente','Steven','Strange','15/02/2000','M','gjh65','1234','13264548'))
        self.usuarios.append(Usuario('paciente','Jessica','Adams','15/02/2000','M','hj456','1234','90031612'))"""
        self.pacientes.append(Paciente('Giuditta','Tolcharde','28/01/2020','F','gtolcharde0','fTaJo5He','89945059'))
        self.pacientes.append(Paciente('Joachim','Presnail','10/04/2019','M','jpresnail1','whKNw8MWSw','49771573'))
        self.pacientes.append(Paciente('Nancee','Whymark','17/10/2019','F','nwhymark2','Vv1fsNxA5R','38189528'))
        """self.pacientes.append(Paciente('Gregory','House','15/02/2000','M','jk545','1234','65432454'))
        self.pacientes.append(Paciente('Steven','Strange','15/02/2000','M','gjh65','1234','13264548'))
        self.pacientes.append(Paciente('Jessica','Adams','15/02/2000','M','hj456','1234','90031612'))"""
        #-----------------------enfermera-----------------------------------
        self.usuarios.append(Usuario('enfermera','Almire','Shalcros','29/11/2019','F','ashalcros0','UCqVbdszlaiH','39693213'))
        self.usuarios.append(Usuario('enfermera','Martie','Drummond','01/08/2021','F','mdrummond1','DasE5ymBvgV','80586487'))
        self.usuarios.append(Usuario('enfermera','Niki','Serrels','01/09/2021','M','nserrels2','7Hhz9rNQ6ktU','42491095'))
        self.enfermeras.append(Enfermera('Almire','Shalcros','29/11/2019','F','ashalcros0','UCqVbdszlaiH','39693213'))
        self.enfermeras.append(Enfermera('Martie','Drummond','01/08/2021','F','mdrummond1','DasE5ymBvgV','80586487'))
        self.enfermeras.append(Enfermera('Niki','Serrels','01/09/2021','M','nserrels2','7Hhz9rNQ6ktU','42491095'))
        #----------------------------------------------------------

    #Create
    def crearLibro(self,titulo,autor,imagen,descripcion):
        self.libros.append(Libro(titulo,autor,imagen,descripcion))

    #Read
    def obtener_libros(self):
        return json.dumps([ob.__dict__ for ob in self.libros])

    def obtener_usuarios(self):
        return json.dumps([ob.__dict__ for ob in self.usuarios])

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
                        return json.dumps(i.__dict__)
            if tipo == 'enfermera' and i.usuario == usuario:
                for j in self.enfermeras:
                    if j.usuario == i.usuario:
                        self.usuarios.remove(i)
                        self.enfermeras.remove(j)
                        return json.dumps(i.__dict__)
            if tipo == 'paciente' and i.usuario == usuario:
                for j in self.pacientes:
                    if j.usuario == i.usuario:
                        self.usuarios.remove(i)
                        self.pacientes.remove(j)
                        return json.dumps(i.__dict__)

    def eliminar_libro(self,titulo,autor):
        for i in self.libros:
            if i.titulo == titulo and i.autor == autor:
                self.libros.remove(i)
                return True
        return False

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
            self.usuarios.append(Usuario(tipo,nombre,apellido,fecha,genero,usuario,password,telefono))
            self.pacientes.append(Paciente(nombre,apellido,fecha,genero,usuario,password,telefono))
            return '{"data":"creado"}'
        return '{"data":"enUso"}'

    def verificar_usuario(self,usuario):
        for i in self.usuarios:
            if i.usuario == usuario:
                return False
        return True