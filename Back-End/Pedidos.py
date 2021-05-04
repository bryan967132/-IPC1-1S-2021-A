class Pedido:
    def __init__(self,codigo,usuario,medicamento,precio,unidades,descripcion):
        self.usuario = usuario
        self.codigo = codigo
        self.medicamento = medicamento
        self.precio = precio
        self.unidades = unidades
        self.descripcion = descripcion