# Generated by Django 4.1.7 on 2023-05-11 07:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_feedback'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='us_image',
            field=models.TextField(),
        ),
    ]
