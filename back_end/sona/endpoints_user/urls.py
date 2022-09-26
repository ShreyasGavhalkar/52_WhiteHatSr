from django.urls import path
from . import views

app_name = "endpoints_user"

urlpatterns = [
        path("voters/",views.insert_voter_data,name = "insert_voter_data")
        ]

