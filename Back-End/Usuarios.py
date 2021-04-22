class Usuario:
    def __init__(self,tipo,nombre,apellido,fecha,genero,usuario,password,telefono):
        self.tipo = tipo
        self.nombre = nombre
        self.apellido = apellido
        self.fecha = fecha
        self.genero = genero
        self.usuario = usuario
        self.password = password
        self.telefono = telefono

class Especialidad:
    def __init__(self,usuario,especialidad):
        self.usuario = usuario
        self.especialidad = especialidad

class Doctor(Usuario):
    def __init__(self,nombre,apellido,fecha,genero,usuario,password,especialidad,telefono):
        super().__init__(nombre,apellido,fecha,genero,usuario,password,especialidad,telefono)
        self.usuario = usuario
        self.especialidad = especialidad

class Paciente(Usuario):
    def __init__(self,nombre,apellido,fecha,genero,usuario,password,especialidad,telefono):
        super().__init__(nombre,apellido,fecha,genero,usuario,password,especialidad,telefono)

class Enfermero(Usuario):
    def __init__(self,nombre,apellido,fecha,genero,usuario,password,especialidad,telefono):
        super().__init__(nombre,apellido,fecha,genero,usuario,password,especialidad,telefono)