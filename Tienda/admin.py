from django.contrib import admin
from .models import Cliente, Producto, Inventario

admin.site.register(Cliente)
admin.site.register(Producto)
admin.site.register(Inventario)