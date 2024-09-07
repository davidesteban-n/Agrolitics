from django.urls import path
from . import views

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('dashboard2/', views.dashboard2, name='dashboard2'),
    path('dashboard3/', views.dashboard3, name='dashboard3'),
    path('grafico/', views.grafico, name='grafico'),
    path('reloj/', views.reloj, name='reloj'),
    path('', views.index, name='index'),
]

