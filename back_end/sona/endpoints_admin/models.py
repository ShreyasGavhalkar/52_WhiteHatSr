from django.db import models


class constituency(models.Model):
    constituency_id = models.IntegerField(primary_key=True)
    constituency_name = models.TextField()
class election(models.Model):
    TYPE_OF_ELECTION = [
        ('LS', 'Lok Sabha'),
        ('RS', 'Rajya Sabha')
    ]
    election_id = models.IntegerField(primary_key=True)
    type = models.CharField(max_length=2, choices = TYPE_OF_ELECTION, null=False)
    details = models.Textfield()
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=False)
    constituency_id = models.ForeignKey(constituency)
    admin_id = models.IntegerField(null=False)

class candidates(models.Model):
    candidate_id = models.IntegerField(primary_key=True)
    sex = models.CharField(max_length=1, null=False)
    name = models.TextField(null=False)
    age = models.IntegerField(null=False)
    constituency_id = models.ForeignKey(constituency)
    party = models.TextField(null=False)
    election_id = models.ForeignKey(election)
