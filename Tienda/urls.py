from django.urls import path, include
from rest_framework import routers
from . import views


# Router
router = routers.DefaultRouter()

# Creación de rutas 
router.register(r'Cliente', views.ClienteView, 'cliente')
router.register(r'Producto', views.ProductoView, 'producto')
router.register(r'Inventario', views.InventarioView, 'inventario')


# Guardado de Rutas
urlpatterns = [
  path('api/', include(router.urls)),
]