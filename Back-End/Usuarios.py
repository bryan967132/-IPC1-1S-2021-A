class Usuario:
    def __init__(self,tipo,usuario,password):
        self.tipo = tipo
        self.usuario = usuario
        self.password = password

class Admin(Usuario):
    def __init__(self,nombre,apellido,fecha,genero,usuario,password,telefono):
        super().__init__('admin',usuario,password)
        self.nombre = nombre
        self.apellido = apellido
        self.fecha = fecha
        self.genero = genero
        self.telefono = telefono

class Doctor(Usuario):
    def __init__(self,nombre,apellido,fecha,genero,usuario,password,especialidad,telefono):
        super().__init__('doctor',usuario,password)
        self.nombre = nombre
        self.apellido = apellido
        self.fecha = fecha
        self.genero = genero
        self.especialidad = especialidad
        self.telefono = telefono

class Paciente(Usuario):
    def __init__(self,nombre,apellido,fecha,genero,usuario,password,telefono):
        super().__init__('paciente',usuario,password)
        self.nombre = nombre
        self.apellido = apellido
        self.fecha = fecha
        self.genero = genero
        self.telefono = telefono

class Enfermera(Usuario):
    def __init__(self,nombre,apellido,fecha,genero,usuario,password,telefono):
        super().__init__('enfermera',usuario,password)
        self.nombre = nombre
        self.apellido = apellido
        self.fecha = fecha
        self.genero = genero
        self.telefono = telefono