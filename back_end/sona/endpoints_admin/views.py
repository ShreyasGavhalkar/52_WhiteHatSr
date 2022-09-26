from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from endpoints_admin.models import candidates, election


def elections(request):
    """GET: Returns list of subelections for a particular user and a particular type [Lok Sabha, Rajya Sabha, and so on
       POST: Creates a new sub election for a particular user. Sub election requires:
                1) Constituency name
                2) candidates for a the Constituency: refer to database for the candidate inputs
                """
    if(request.user.is_authenticated):
        
        if(request.method == "GET"):
            #query database for elections of a particular user and particular type and return jsonresponse
            admin_id = request.user.id
            election_type = request.GET.get("type")
            election_entries = election.objects.filter(admin_id = admin_id,type = election_type)

            pass
        elif(request.method == "POST"):
            #TODO: Add a try and except here to indicate success and failure
            admin_id = request.user.id
            constituency_id = request.POST["constituency_id"]
            start_date = request.POST["start_date"]
            end_date = request.POST["end_date"]
            type = request.POST["type"]
            election_id = request.POST["election_id"]
            
            election_entry = election(election_id = election_id,type = type,start_date = start_date,end_date = end_date,constituency_id = constituency_id,admin_id = admin_id)
            election_entry.save()
            return JsonResponse({'request_status':True})

    else:
        return JsonResponse({'admin_auth_status':False})

def admin_auth(request): 
    """POST: returns token by authenticating) (Login)

    """
    
    if(request.user.is_authenticated):
        
        if(request.method == "POST"):
            username = request.POST['username']
            password = request.POST['password']
            
            user = authenticate(request,username = username, password = password)

            if user is not None:
                login(request,user)
                return JsonResponse({'admin_auth_status':True})

            else:
                return JsonResponse({'admin_auth_status':False})
                pass


def candidate(request):
    '''
    endpoint to add a candidate
    '''
    # if request.user.is_authenticated:
    if request.method == 'GET':
        # breakpoint()
        # election_id = request.GET.get('election_id')
        election_id = 1
        election_obj = election.objects.get(pk=election_id)
        candidate_objs = candidates.objects.filter(election_id=election_obj.election_id)
        list_of_candidates = [ i.__dict__ for i in candidate_objs]
        for i in list_of_candidates:
            del i['_state']
        return JsonResponse(list_of_candidates, safe = False)
    else:
        new_candidate = candidate(request.POST)
        new_candidate.save()
        










    
