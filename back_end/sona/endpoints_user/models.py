from django.db import models
from endpoints_admin.models import constituency

class voter(models.Model):
    voter_id = models.CharField(max_length=10, primary_key=True)
    name = models.TextField(null=False)
    date_of_birth = models.DateField(null=False)
    sex = models.CharField(max_length=1, null=False)
    address = models.TextField(null=False)
    constituency = models.ForeignKey(constituency)
# Create your models here.
