# Generated by Django 4.1.7 on 2023-04-20 12:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='admin',
            name='ad_mobile',
            field=models.CharField(default='null', max_length=20),
        ),
        migrations.AddField(
            model_name='admin',
            name='ad_name',
            field=models.CharField(default='null', max_length=100),
        ),
    ]
