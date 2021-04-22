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

class Doctor(Usuario):
    def __init__(self,nombre,apellido,fecha,genero,usuario,password,especialidad,telefono):
        super().__init__('doctor',nombre,apellido,fecha,genero,usuario,password,telefono)
        self.especialidad = especialidad

class Paciente(Usuario):
    def __init__(self,nombre,apellido,fecha,genero,usuario,password,telefono):
        super().__init__('paciente',nombre,apellido,fecha,genero,usuario,password,telefono)

class Enfermera(Usuario):
    def __init__(self,nombre,apellido,fecha,genero,usuario,password,telefono):
        super().__init__('enfermera',nombre,apellido,fecha,genero,usuario,password,telefono)