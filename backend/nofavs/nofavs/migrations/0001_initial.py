# Generated by Django 5.0.6 on 2024-06-24 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Show',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('doors_time', models.TimeField()),
                ('band_time', models.TimeField()),
                ('title', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=400)),
            ],
        ),
    ]
