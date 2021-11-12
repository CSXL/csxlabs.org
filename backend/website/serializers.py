from rest_framework import serializers
from .models import MOTD

class MOTDSerializer(serializers.ModelSerializer):
    class Meta:
        model = MOTD
        fields = ('id', 'message', 'date')
