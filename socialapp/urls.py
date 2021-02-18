from django.urls import path
from .views import *


urlpatterns = [
    path('posts/', PostView.as_view()),
    path('posts/<int:pk>/', PostView.as_view()),
    path('addlike/', AddLikeView.as_view()),
    path('addcomment/', AddComment.as_view()),
    path('addreply/', AddReply.as_view()),
]
