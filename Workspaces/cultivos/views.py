from django.shortcuts import render

# Create your views here.

def reloj(request):
    return render(request, 'reloj.html')

def grafico(request):
    return render(request, 'grafico.html')

def dashboard(request):
    return render(request, 'dashboard.html')

def dashboard2(request):
    return render(request, 'dashboard2.html')

def dashboard3(request):
    return render(request, 'dashboard3.html')

def index(request):
    return render(request, 'index.html')