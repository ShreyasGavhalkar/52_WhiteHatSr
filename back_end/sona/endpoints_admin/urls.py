from django.urls import path
from . import views

app_name = "endpoints_admin"

urlpatterns = [
        path('auth/',views.admin_auth,name = "auth"),
        path('elections/',views.elections,name = "elections"),
        path('test/', views.candidate,name = "test"),
        ]



