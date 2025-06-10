from rest_framework import viewsets, permissions
from . import models, serializer


class ClienteView(viewsets.ModelViewSet):
  serializer_class = serializer.ClienteSerializer
  queryset = models.Cliente.objects.all()
  permission_classes = [permissions.AllowAny]


class ProductoView(viewsets.ModelViewSet):
  serializer_class = serializer.ProductoSerializer
  queryset = models.Producto.objects.all()
  permission_classes = [permissions.AllowAny]


class InventarioView(viewsets.ModelViewSet):
  serializer_class = serializer.InventarioSerializer
  queryset = models.Inventario.objects.all()
  permission_classes = [permissions.AllowAny]