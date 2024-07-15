from rest_framework import serializers
from .models import Show

class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ('date', 'doors_time', 'band_time', 'title', 'address')