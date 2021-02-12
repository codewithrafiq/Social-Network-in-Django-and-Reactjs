from django.contrib import admin
from .models import (
    Profile,
    Post,
    Comment,
    Reply,
    Like,
    FriendRequest,
)
admin.site.register(Profile)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Reply)
admin.site.register(Like)
admin.site.register(FriendRequest)
