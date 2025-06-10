from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import UsuarioSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.shortcuts import get_object_or_404


# 
# Función de inicio de sesión
# 
# @api_view(['POST'])
def login(request):
  # Comprobar usuario.
  usuario = get_object_or_404(User, username=request.data['username'])

  # Comprobar contraseña 
  if not usuario.check_password(request.data['password']):
    return Response({'error': 'Contraseña incorrecta'}, status=status.HTTP_400_BAD_REQUEST)

  # Obtener token
  token, created = Token.objects.get_or_create(user=usuario)
  serializer = UsuarioSerializer(usuario)

  # Login 
  return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_200_OK)


# 
# Función de Registro de Usuarios 
# 
@api_view(['POST'])
def register(request):
  serializer = UsuarioSerializer(data=request.data)

  if serializer.is_valid():
    serializer.save()
    print("Datos guardados correctamente")

    usuario = User.objects.get(username=serializer.data['username'])
    usuario.set_password(serializer.data['password'])
    usuario.save()
    print("Ajá, vamos bien hasta")

    token = Token.objects.create(user=usuario)
    print("Token creado: ", token.key)
    return Response({'token': token.key, 'usuario':serializer.data}, status=status.HTTP_201_CREATED)
  
  print("error en algún lao")
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
def profile():
  return Response({})