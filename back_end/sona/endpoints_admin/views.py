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
            pass
        elif(request.method == "POST"):
            #1) Read input data and send json response of success and failure 
            pass
    else:
        #return json of invalid token
        pass

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
        breakpoint()
        # election_id = request.GET.get('election_id')
        election_id = 1
        election_obj = election.objects.get(pk=election_id)
        candidate_obj = candidates.objects.get(election_id=election_obj)











    
