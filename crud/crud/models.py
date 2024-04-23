from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    # id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    content = models.TextField(null=True,  blank=True)
    author = models.TextField( null=True,  blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    is_published = models.BooleanField(default=False, null=True,  blank=True)

    def __str__(self):
        return self.title
