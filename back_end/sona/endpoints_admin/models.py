from django.db import models

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
    constituency_id = models.IntegerField(null=False)
    admin_id = models.IntegerField(null=False)
