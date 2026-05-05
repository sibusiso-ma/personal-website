from django.shortcuts import render, get_object_or_404
from .models import Post

def home(request):
    posts = Post.objects.all()[:3]
    return render(request, 'blog/index.html', {'posts': posts})

def blog_list(request):
    posts = Post.objects.all().order_by('-id')
    return render(request, 'blog/blog_list.html', {'posts': posts})

def blog_detail(request, pk):
    post = get_object_or_404(Post, id=pk)
    return render(request, 'blog/blog_detail.html', {'post': post})