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
        comment_obj = Comment.objects.filter(post=post['id']).order_by('-id')
        comment_serializer = CommentSerializer(
            comment_obj, many=True, context={'request': request})
        comments = []
        for comment in comment_serializer.data:
            reply_obj = Reply.objects.filter(
                comment=comment['id']).order_by('-id')
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
        posts_obj = Post.objects.all().order_by('-id')
        data = commoneposts(posts_obj, request)

        return Response(data)


class AddLikeView(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def post(self, request):
        try:
            post_id = request.data['id']
            post_obj = Post.objects.get(id=post_id)
            user = request.user.profile
            like_obj = Like.objects.filter(
                profile=user).filter(post=post_obj).first()
            if like_obj:
                old_like = like_obj.like
                like_obj.like = not old_like
                like_obj.save()
            else:
                Like.objects.create(
                    post=post_obj, profile=user, like=True,
                )
            response_msg = {'error': False}
        except:
            response_msg = {'error': True}
        return Response(response_msg)


class AddComment(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def post(self, request):
        try:
            user = request.user.profile
            post_id = request.data['id']
            post_obj = Post.objects.get(id=post_id)
            comment_text = request.data['ctitle']
            Comment.objects.create(
                profile=user,
                title=comment_text,
                post=post_obj
            )
            response_msg = {'error': False}
        except:
            response_msg = {'error': True}
        return Response(response_msg)


class AddReply(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def post(self, request):
        try:
            user = request.user.profile
            comment_id = request.data['cid']
            comment_obj = Comment.objects.get(id=comment_id)
            reply_text = request.data['rtext']
            Reply.objects.create(
                profile=user,
                title=reply_text,
                comment=comment_obj
            )
            response_msg = {'error': False}
        except:
            response_msg = {'error': True}
        return Response(response_msg)
