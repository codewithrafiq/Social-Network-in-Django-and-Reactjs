from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from .models import *
from .serializer import *


def commoneposts(posts_obj, request):
    posts_serializer = PostSerializer(
        posts_obj, many=True, context={'request': request})
    data = []
    for post in posts_serializer.data:
        comment_obj = Comment.objects.filter(post=post['id'])
        comment_serializer = CommentSerializer(
            comment_obj, many=True, context={'request': request})
        comments = []
        for comment in comment_serializer.data:
            reply_obj = Reply.objects.filter(comment=comment['id'])
            reply_serializer = ReplySerializer(
                reply_obj, many=True, context={'request': request})
            comment['reply'] = reply_serializer.data
            comments.append(comment)
        like_total = Like.objects.filter(
            post=post['id']).filter(like=True).count()
        like_obj = Like.objects.filter(post=post['id']).filter(
            profile=request.user.profile).first()

        if like_obj:
            post['like'] = like_obj.like
        else:
            post['like'] = False
        post['liketotal'] = like_total
        post['comment'] = comments
        data.append(post)
    return data


class PostView(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def get(self, request):
        posts_obj = Post.objects.all()
        data = commoneposts(posts_obj, request)

        return Response(data)
