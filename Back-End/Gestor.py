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
        self.usuarios.append(Usuario('admin','admin','admin','admin'))
        self.usuarios.append(Usuario('Jemima','Hernandez','1234','jh123'))
        self.usuarios.append(Usuario('Luisa','Ortiz','1234','lo123'))

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
    def buscar_libro(self,titulo):
        for i in self.libros:
            if i.titulo == titulo:
                return json.dumps([i.__dict__])