from django.shortcuts import render
from rest_framework import viewsets
from.serializers import MOTDSerializer
from .models import MOTD

class MOTDView(viewsets.ModelViewSet):
    serializer_class = MOTDSerializer
    queryset = MOTD.objects.all()