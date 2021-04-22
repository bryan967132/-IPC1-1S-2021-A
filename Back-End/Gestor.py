from Usuarios import Usuario
from Libros import Libro
import json

class Gestor:
    def __init__(self):
        self.usuarios = []
        self.libros = []
        self.libros.append(Libro("La Divina Comedia","Dante Alighiery","https:","asdf"))
        self.libros.append(Libro("La Calumnia","Vicenta Laparra","https:","fghj"))
        self.libros.append(Libro("El Animalero","Humberto Ak'abal","https:","ujmh"))
        self.libros.append(Libro("Viento Fuerte","Miguel Angel Asturias","https:","yhnt"))
        self.usuarios.append(Usuario('admin','Herbert','Reyes','04/12/2000','M','admin','admin','12345678'))
        self.usuarios.append(Usuario('doctor','Jemima','Hernandez','15/02/2000','F','jh123','1234','Sin vincular'))
        self.usuarios.append(Usuario('paciente','Luisa','Ortiz','13/04/2000','F','lo123','1234','87654321'))

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
        for i in self.usuarios:
            if i.usuario == usuario:
                return '{"tipo":"'+i.tipo+'"}'
        return '{"usuario":"false"}'

    #Iniciar Sesion
    def iniciar_sesion(self,usuario,password):
        for x in self.usuarios:
            if x.password == password and x.usuario == usuario:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}'

    #Registrar Usuario
    def registrar_usuario(self,tipo,nombre,apellido,fecha,genero,usuario,password,telefono):
        self.usuarios.append(Usuario(tipo,nombre,apellido,fecha,genero,usuario,password,telefono))