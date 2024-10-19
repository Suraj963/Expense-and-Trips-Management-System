from django.db import models

# Create your models here.

class Users(models.Model):
    us_id = models.AutoField(primary_key=True, unique=True)
    us_name = models.CharField(max_length=100)
    us_email_id = models.CharField(max_length=100)
    us_mobile = models.CharField(max_length=20)
    us_password = models.CharField(max_length=30)
    us_image = models.TextField()
    # us_image = models.ImageField(upload_to="app/static/user_img/", default="null") 


class Admin(models.Model):
    ad_id = models.AutoField(primary_key=True, unique=True)
    ad_name = models.CharField(max_length=100, default="null")
    ad_email_id = models.CharField(max_length=100)
    ad_mobile = models.CharField(max_length=20, default="null")
    ad_password = models.CharField(max_length=30) 
    ad_image = models.TextField(default="null")


class User(models.Model):
    ur_id = models.AutoField(primary_key=True, unique=True)
    ur_mobile = models.CharField(max_length=20)
    ur_password = models.CharField(max_length=30)

# user

class Usertransactions(models.Model):                             
    ut_id = models.AutoField(primary_key=True, unique=True)
    ut_transactions = models.CharField(max_length=100, default="null")
    ut_category = models.CharField(max_length=100)
    ut_amount = models.CharField(max_length=100)
    ut_debit_or_credit = models.CharField(max_length=20)
    ut_date = models.CharField(max_length=30) 
    ut_created_by = models.CharField(max_length=30)   

class City(models.Model):
    ct_id = models.AutoField(primary_key=True, unique=True)
    ct_places = models.CharField(max_length=100)

class Usercategory(models.Model):
    uc_id = models.AutoField(primary_key=True, unique=True)
    uc_category = models.CharField(max_length=100)

    
    # Admin

# class Admintranactions(models.Model):
#     at_id = models.AutoField(primary_key=True, unique=True)
#     at_category = models.CharField(max_length=100)  

class State(models.Model):
    st_id = models.AutoField(primary_key=True, unique=True)
    st_state = models.CharField(max_length=100)    
    st_city = models.CharField(max_length=30) 

class Area(models.Model):
    ar_id = models.AutoField(primary_key=True, unique=True)
    ar_city = models.CharField(max_length=100)    
    ar_area = models.CharField(max_length=30)   
    ar_latitude = models.CharField(max_length=30)    
    ar_longitude = models.CharField(max_length=30)  
    ar_link = models.TextField(default="null")  


class Distance(models.Model):
    dt_id = models.AutoField(primary_key=True, unique=True)
    dt_city = models.CharField(max_length=100)    
    dt_from = models.CharField(max_length=30)   
    dt_to = models.CharField(max_length=30)    
    dt_distance = models.CharField(max_length=30)

# class Admincategory(models.Model):
#     ac_id = models.AutoField(primary_key=True, unique=True)
#     ac_category = models.CharField(max_length=100)  


class Balance(models.Model):
    bl_id = models.AutoField(primary_key=True, unique=True)
    bl_balance = models.CharField(max_length=100)    
    bl_created_by = models.CharField(max_length=30) 


class Location(models.Model):
    lc_id = models.AutoField(primary_key=True, unique=True)
    lc_city = models.CharField(max_length=100)    
    lc_area = models.CharField(max_length=30)   
    lc_category = models.CharField(max_length=30)    
    lc_name = models.CharField(max_length=30)  
    lc_description = models.TextField() 
    lc_image = models.ImageField(upload_to="app/static/admin_img/") 
    lc_link = models.TextField()  
    

class Feedback(models.Model):
    fd_id = models.AutoField(primary_key=True, unique=True)
    fd_name = models.CharField(max_length=100)    
    fd_email = models.CharField(max_length=30)   
    fd_feedback = models.TextField() 
   
    

