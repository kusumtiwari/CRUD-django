# Generated by Django 4.0 on 2024-04-23 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0003_remove_post_author_remove_post_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='author',
            field=models.TextField(blank=True, null=True),
        ),
    ]
