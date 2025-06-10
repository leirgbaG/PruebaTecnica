from rest_framework import serializers
from .models import Cliente, Producto, Inventario

class ClienteSerializer(serializers.ModelSerializer):
  class Meta:
    model = Cliente
    fields = ('__all__')


class ProductoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Producto
    fields = ('__all__')


class InventarioSerializer(serializers.ModelSerializer):
  class Meta:
    model = Inventario
    fields = ('__all__')

