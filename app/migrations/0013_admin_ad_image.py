# Generated by Django 4.1.7 on 2023-05-11 07:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0012_alter_users_us_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='admin',
            name='ad_image',
            field=models.TextField(default='null'),
        ),
    ]
