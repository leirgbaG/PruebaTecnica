# Clientes
# •	Campos: nombre, correo electrónico, teléfono y dirección.
# 
# Productos
# •	Campos: nombre, descripción, precio y categoría.
# 
# Inventario
# •	Relación con producto.
# •	Campos: producto, cantidad en stock, fecha de ingreso y observaciones (opcional).


from django.db import models


class Cliente(models.Model):
  nombre  = models.CharField(max_length=50)
  email   = models.EmailField(max_length=100)
  phone   = models.CharField(max_length=20)
  address = models.CharField(max_length=200)

  def __str__(self):
    return self.nombre


class Producto(models.Model):
  nombre      = models.CharField(max_length=50)
  descripcion = models.TextField()
  precio      = models.DecimalField(max_digits=20, decimal_places=2)
  categoria   = models.CharField(max_length=50)

  def __str__(self):
    return self.nombre


class Inventario(models.Model):
  producto  = models.ForeignKey(Producto, on_delete=models.RESTRICT)
  stock     = models.IntegerField()
  checkin   = models.DateField()
  obsv      = models.TextField(null=True, blank=True)

  def __str__(self):
    return f'{self.producto.nombre} | {self.checkin}'