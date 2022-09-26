from django.shortcuts import render
from django.http import JsonResponse
from .models import voter

def insert_voter_data(request):
    breakpoint()
    if(request.user.is_authenticated):

        if(request.method == "POST"):
            try:
            #1) Obtain csv file
            #2) iterate through csv file and insert it into voters table
            #3) send success or failure response 

                return JsonResponse({"voter_insertion_status":True})
            
            except Exception as e:
                return JsonResponse({"voter_insertion_status":False})


    else:
        return JsonResponse({"admin_auth_status":True})


