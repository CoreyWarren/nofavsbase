from django.db import models

class Show(models.Model):
    date        = models.DateField()
    doors_time  = models.TimeField(auto_now=False, auto_now_add=False)
    band_time   = models.TimeField(auto_now=False, auto_now_add=False)
    title       = models.CharField(max_length=255)
    address     = models.CharField(max_length=400)




