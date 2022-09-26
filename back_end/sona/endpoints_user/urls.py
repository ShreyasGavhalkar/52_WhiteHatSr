from django.urls import path
from . import views

app_name = "endpoints_user"

urlpatterns = [
        path("voters/",views.insert_voter_data,name = "insert_voter_data"),
        path('get_constituency/',views.get_constituency_data,name = "get_constituency")
        ]

