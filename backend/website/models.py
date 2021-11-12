from django.db import models

# Message of The Day - Test api endpoint
class MOTD(models.Model):
    message = models.CharField(max_length=120)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.message} | {self.date}'
