from Usuarios import Usuario,Doctor,Paciente,Enfermero,Especialidad
from Libros import Libro
import json

class Gestor:
    def __init__(self):
        self.usuarios = []
        self.libros = []
        self.especialidades = []
        self.libros.append(Libro("La Divina Comedia","Dante Alighiery","https://m.media-amazon.com/images/I/51FBFYOaEZL.jpg","asdf"))
        self.libros.append(Libro("La Calumnia","Vicenta Laparra","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3aLyDfweuNLTqRPV0iC1brqaQcQawjuHU39p2ylsmC5-w5_kplpYty4iOGN52Z1IRL4Y&usqp=CAU","fghj"))
        self.libros.append(Libro("El Animalero","Humberto Ak'abal","https://www.curriculumnacional.cl/614/articles-79653_thumbnail.jpg","ujmh"))
        self.libros.append(Libro("Viento Fuerte","Miguel Angel Asturias","https://2.bp.blogspot.com/-SL58QFsWjfc/W42RRaqeY9I/AAAAAAAAa4E/D0-xF8H39ak2aVmrkRg7ZC4IyB5_L1-kQCLcBGAs/s400/VientoFuerte.jpg","yhnt"))

        self.usuarios.append(Usuario('admin','admin','admin','04/12/2000','M','admin','admin','12345678'))
        
        self.usuarios.append(Usuario('doctor','Gregory','House','15/02/2000','M','gh123','1234','6543245'))
        self.usuarios.append(Usuario('doctor','Steven','Strange','15/02/2000','M','st123','1234','1326458'))
        self.usuarios.append(Usuario('doctor','Jessica','Adams','15/02/2000','M','ja123','1234','90031612'))

        self.especialidades.append(Especialidad('gh123','Infectologia'))
        self.especialidades.append(Especialidad('st123','Neurocirugia'))
        self.especialidades.append(Especialidad('ja123','Endocrinologia'))

        self.usuarios.append(Usuario('paciente','Giuditta','Tolcharde','28/01/2020','F','gtolcharde0','fTaJo5He','8994505922'))
        self.usuarios.append(Usuario('paciente','Joachim','Presnail','10/04/2019','M','jpresnail1','whKNw8MWSw','4977157391'))
        self.usuarios.append(Usuario('paciente','Nancee','Whymark','17/10/2019','F','nwhymark2','Vv1fsNxA5R','3818952816'))

        self.usuarios.append(Usuario('enfermero','Almire','Shalcros','29/11/2019','F','ashalcros0','UCqVbdszlaiH','3969321381'))
        self.usuarios.append(Usuario('enfermero','Martie','Drummond','01/08/2021','F','mdrummond1','DasE5ymBvgV','8058648706'))
        self.usuarios.append(Usuario('enfermero','Niki','Serrels','01/09/2021','M','nserrels2','7Hhz9rNQ6ktU','4249109525'))

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
    def eliminar_libro(self,titulo,autor):
        for i in self.libros:
            if i.titulo == titulo and i.autor == autor:
                self.libros.remove(i)
                return True
        return False

    #Search
    def buscar_tipo_usuario(self,usuario):
        for x in self.usuarios:
            if x.usuario == usuario:
                return '{"tipo":"'+x.tipo+'"}'

    def clasificar_usuario(self,tipo):
        for x in self.usuarios:
            if x.tipo == tipo:
                if x.tipo == 'doctor':
                    for y in self.especialidades:
                        if y.usuario == x.usuario:
                            return '{"tipo":"'+x.tipo+'","nombre":"'+x.nombre+'","apellido":"'+x.apellido+'","fecha":"'+x.fecha+'","genero":"'+x.genero+'","usuario":"'+x.usuario+'","password":"'+x.password+'","especialidad":"'+y.especialidad+'","telefono":"'+x.telefono+'"}'
                return json.dumps(x.__dict__)

    #Iniciar Sesion
    def iniciar_sesion(self,usuario,password):
        for x in self.usuarios:
            if x.password == password and x.usuario == usuario:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}'

    #Registrar Usuario
    def registrar_usuario(self,tipo,nombre,apellido,fecha,genero,usuario,password,telefono):
        if(self.verificar_usuario(usuario)):
            self.usuarios.append(Usuario(tipo,nombre,apellido,fecha,genero,usuario,password,telefono))
            return '{"data":"creado"}'
        return '{"data":"enUso"}'

    def verificar_usuario(self,usuario):
        for x in self.usuarios:
            if x.usuario == usuario:
                return False
        return True