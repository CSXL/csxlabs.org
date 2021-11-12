from django.contrib import admin
from .models import MOTD

class MOTDAdmin(admin.ModelAdmin):
    list_display = ('message', 'date')

admin.site.register(MOTD, MOTDAdmin)
