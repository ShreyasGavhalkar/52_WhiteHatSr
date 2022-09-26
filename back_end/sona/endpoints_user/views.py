from django.shortcuts import render
from django.http import JsonResponse
from .models import voter
import json

def insert_voter_data(request):
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

def get_constituency(request):
    if(request.method == 'GET'):
        json_data = json.loads(request.body)
        voter_id = json_data['voter_id']
        voter_model = voter.objects.get(pk=voter_id)
        return JsonResponse({'constituency':voter_model.constituency_id})



