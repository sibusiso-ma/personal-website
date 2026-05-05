from django.contrib import admin
from .models import UploadedFile
from .models import Post


admin.site.register(UploadedFile)
admin.site.register(Post)