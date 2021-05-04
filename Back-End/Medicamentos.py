class Medicamento:
    def __init__(self,nombre,precio,descripcion,cantidad):
        self.nombre = nombre
        self.precio = precio
        self.descripcion = descripcion
        self.cantidad = cantidad

class MasVendidosMed:
    def __init__(self,nombre,descripcion,unidadesV):
        self.nombre = nombre
        self.descripcion = descripcion
        self.unidadesV = unidadesV