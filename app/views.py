import datetime
from sre_parse import State
from tkinter import Entry
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from flask import request
from app.models import Area, Balance, City, Distance, Feedback, Location, User, Usercategory, Users, Usertransactions, State
from app.models import Admin
from django.db.models import Sum
from datetime import date
from datetime import datetime
from django.db import connection
from django.core.paginator import Paginator


# Create your views here.
def home(request):
    return render(request, '/Users/01_expenses.html')

def About(request):
    return render(request, 'about.html')

def Contact(request):
    return render(request, 'contact.html')

def expenses(request):
    return render(request, 'Users/expenses.html');

def transactions(request):
    if 'user-mobile' in request.session:
        return render(request, 'Users/transactions.html');
    else:
        return render(request, 'Users/log_in.html');
    

def dashboard(request):
    if 'user-mobile' in request.session:
        return render(request, 'Users/dashboard.html');
    else:
        return render(request, 'Users/log_in.html');

def myaccount(request):
     if 'user-mobile' in request.session:
        return render(request, 'Users/myaccount.html');
     else:
        return render(request, 'Users/log_in.html');

def myaccountedit(request):
    if 'user-mobile' in request.session:
        return render(request, 'Users/myaccountedit.html');
    else:
        return render(request, 'Users/log_in.html');

def wallet(request):
    return render(request, 'Users/wallet.html');

def trips(request):
     if 'user-mobile' in request.session:
        return render(request, 'Users/trips.html');
     else:
        return render(request, 'Users/log_in.html');
 
def citytrip(request):
    return render(request, 'Users/citytrip.html');

def areatrip(request):
    return render(request, 'Users/areatrip.html');

def distancetrip(request):
    return render(request, 'Users/distancetrip.html');

def settings(request):
     if 'user-mobile' in request.session:
        return render(request, 'Users/settings.html');
     else:
        return render(request, 'Users/log_in.html');

def configsettings(request):
     if 'user-mobile' in request.session:
        return render(request, 'Users/configsettings.html');
     else:
        return render(request, 'Users/log_in.html');

def incomeconfigsettings(request):
     if 'user-mobile' in request.session:
        return render(request, 'Users/incomeconfigsettings.html');
     else:
        return render(request, 'Users/log_in.html');

def expenseconfigsettings(request):
     if 'user-mobile' in request.session:
        return render(request, 'Users/expenseconfigsettings.html');
     else:
        return render(request, 'Users/log_in.html');

def stylemode(request):
     if 'user-mobile' in request.session:
        return render(request, 'Users/stylemode.html');
     else:
        return render(request, 'Users/log_in.html');

def feedback(request):
     if 'user-mobile' in request.session:
        return render(request, 'Users/feedback.html');
     else:
        return render(request, 'Users/log_in.html');

def passcode(request):
     if 'user-mobile' in request.session:
        return render(request, 'Users/passcode.html');
     else:
        return render(request, 'Users/log_in.html');

def log_in(request):
    return render(request, 'Users/log_in.html');    

def registration(request):
    return render(request, 'Users/registration.html');

def report(request):
     if 'user-mobile' in request.session:
        return render(request, 'Users/report.html');
     else:
        return render(request, 'Users/report.html');

def reminder(request):
     if 'user-mobile' in request.session:
        return render(request, 'Users/reminder.html');
     else:
        return render(request, 'Users/report.html');

# def admin(request):
#     return render(request, 'Users/admin.html');  



# User login

def save_login_details(request):
    if Users.objects.filter(us_mobile = request.POST["mobile"],us_password = request.POST["password"]).count() > 0:
       userInfo =  Users.objects.filter(us_mobile = request.POST["mobile"]).values()
       data = list(userInfo)

    #    print(data)
       request.session['user-mobile'] = request.POST["mobile"];
       request.session['user-name'] = data[0]["us_name"];
       request.session['user-email'] = data[0]["us_email_id"];


    #    print(request.session['user-email']);
    
       return HttpResponse(1)

    else:
        return HttpResponse(10)
    # return 1;


# def get_login_details(request):
#    users =  User.objects.filter().values()  
#    data = list(users)  
#    value = JsonResponse(data, safe = False) 
#    return value



def save_details(request):
    if Users.objects.filter(us_mobile = request.POST["mobile"]).count() == 0:
        Users.objects.create(
            us_name = request.POST["name"],
            us_email_id = request.POST["email"],
            us_mobile = request.POST["mobile"],
            us_password = request.POST["password"]
        )
        return HttpResponse(1)

    else:
        return HttpResponse(10)
    # return 1;


def get_details(request):
   users =  Users.objects.filter().values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value
    

def update_details(request):
        Users.objects.filter(us_id = request.POST['id1']).update(
            # us_name = request.POST["name1"],
            us_email_id = request.POST["email1"],
            # us_mobile = request.POST["mobile1"],
            us_password = request.POST["password1"],
        )
    
        return HttpResponse(1)
        
    # return 1;
def delete_details(request):
        Users.objects.filter(us_id = request.POST['id2']).delete()
        
        
        return HttpResponse(1)
        

# User transactions


# def save_details_transaction(request):
#         Usertransactions.objects.create(
#             ut_transactions = request.POST["transaction"],
#             ut_category = request.POST["expense"],
#             ut_amount = request.POST["amount"],
#             ut_debit_or_credit = request.POST["debit"],
#             ut_date = request.POST["date"],
#             ut_created_by = request.POST["create"],
#         )
#         return HttpResponse(1)

#     # return 1;

def save_details_transaction(request):

    if Balance.objects.filter(bl_created_by = request.session['user-mobile']).count() == 0:
        Balance.objects.create(
            bl_balance = 0,
            bl_created_by = request.session['user-mobile'],
        )

    balance =  Balance.objects.filter(bl_created_by = request.session['user-mobile']).values();
    data = list(balance)
    balanceDatabase = data[0]['bl_balance'];

    if request.POST['debit'] == "Debit":
        balanceDatabase = float(balanceDatabase) - float(request.POST['amount']);
    else:
        balanceDatabase = float(balanceDatabase) + float(request.POST['amount']);
     
    Balance.objects.filter(bl_created_by = request.session['user-mobile']).update(bl_balance = balanceDatabase);

    # expense = Usertransactions.objects.filter(ut_created_by = request.session['user-mobile']).values();
    # data = list(expense)
    # expenseDatabase = data[0]['ut_amount']

    # if request.POST['debit'] == "Debit":
    #     expenseDatabase = float(expenseDatabase) + float(request.POST['amount']);
    # else:
    #     expenseDatabase = float(expenseDatabase) - float(request.POST['amount']);
        
    # Usertransactions.objects.filter(ut_created_by = request.session['user-mobile']).update(ut_amount = expenseDatabase);

    Usertransactions.objects.create(
        ut_transactions = request.POST["transaction"],
        ut_category = request.POST["expense"],
        ut_amount = request.POST["amount"],
        ut_debit_or_credit = request.POST["debit"],
        ut_date = request.POST["date"],
        ut_created_by = request.session['user-mobile'],
    )
        
    return HttpResponse(1)

def get_details_transaction(request):
   users =  Usertransactions.objects.filter(ut_created_by = request.session['user-mobile']).order_by('-ut_id').values()
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value




# Inividual user transaction

# def set_update_detail(request):
#         Usertransactions.objects.filter(ut_created_by = request.POST['create']).update(
#             ut_transactions = request.POST["transaction"],
#             ut_category = request.POST["expense"],
#             ut_amount = request.POST["amount"],
#             ut_debit_or_credit = request.POST["debit"],
#             ut_date = request.POST["date"],
#             ut_created_by = request.POST["create"],
#         )
    
#         return HttpResponse(1) 
             


   
# def get_update_detail(request):
#    users =  Usertransactions.objects.filter(us_name = request.POST['create']).values()  
#    data = list(users)  
#    value = JsonResponse(data, safe = False) 
#    return value      


 # User My account Update details


def get_update_account(request):
        Users.objects.filter(us_mobile = request.POST['mobile']).update(
            us_name = request.POST["name"],
            us_email_id = request.POST["email"],
            us_mobile = request.POST["mobile"],
            us_password = request.POST["password"],
        )
    
        return HttpResponse(1) 

 # User My account Update details

def save_update_account(request):
   users =  Users.objects.filter(us_mobile = request.session['user-mobile']).values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value


# Logout

def set_destroy(request):
   request.session.delete()
   return HttpResponse(1)


 # User My account profile photo Update details

def get_update_photo(request):
    Users.objects.filter(us_mobile = request.session['user-mobile']).update(us_image = request.POST["profilePhoto"]);
    return HttpResponse(1)

        

# User trips


# def get_areaby_city(request):
#         City.objects.create(
#             ct_places = request.POST["city"],
            
#         )
#         return HttpResponse(1)

    # return 1;

def get_areaby_city(request):
   users =  Area.objects.filter(ar_city = request.POST["city"]).values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value   

# def get_locationby_city(request):
#    users =  Location.objects.filter(lc_city = request.POST["city"]).values()  
#    data = list(users)  
#    value = JsonResponse(data, safe = False) 
#    return value  

def get_area_details(request):
   users =  Location.objects.filter(lc_area = request.POST["area"]).values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value  





# User category


# def save_details_category(request):
#         Usercategory.objects.create(
#             uc_category = request.POST["category"],
            
#         )
#         return HttpResponse(1)

#     # return 1;

# def get_details_category(request):
#    users =  Usercategory.objects.filter().values()  
#    data = list(users)  
#    value = JsonResponse(data, safe = False) 
#    return value 


# User dashboard

def get_detailsby_transaction(request):
   users =  Usertransactions.objects.filter(ut_created_by = request.session['user-mobile']).order_by('-ut_id')[:10].values()
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value 


def get_detailsby_card(request):
   users =  Balance.objects.filter(bl_created_by = request.session['user-mobile']).values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value 

   
def get_detailsby_card2(request):
   users =  Usertransactions.objects.filter(ut_created_by = request.session['user-mobile']).values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value 


def get_detailsby_card3(request):
   today = date.today()
   users = Usertransactions.objects.filter(ut_date__range=(today, today)).values();
   data = list(users)
   value = JsonResponse(data, safe = False)
   
   return value 



def get_detailsby_chart(request):
   result = Usertransactions.objects.filter(ut_created_by = request.session['user-mobile']).values('ut_category').order_by('ut_amount').annotate(ut_amount=Sum('ut_amount'))  
   data = list(result)  
   value = JsonResponse(data, safe = False) 
   return value 



        
    
# Update details user transaction

def get_update_details(request):
     if Balance.objects.filter(bl_created_by = request.session['user-mobile']).count() == 0:
        Balance.objects.create(
            bl_balance = 0,
            bl_created_by = request.session['user-mobile'],
        )

     balance =  Balance.objects.filter(bl_created_by = request.session['user-mobile']).values();
     data = list(balance)
     balanceDatabase = data[0]['bl_balance'];

     if request.POST['debit1'] == "Debit":
         balanceDatabase = float(balanceDatabase) - float(request.POST['amount1']);
     else:
         balanceDatabase = float(balanceDatabase) + float(request.POST['amount1']);
     
     Balance.objects.filter(bl_created_by = request.session['user-mobile']).update(bl_balance = balanceDatabase);

     Usertransactions.objects.filter(ut_id = request.POST['id']).update(
            ut_id = request.POST["id"],
            ut_transactions = request.POST["transaction1"],
            ut_category = request.POST["expense1"],
            ut_amount = request.POST["amount1"],
            ut_debit_or_credit = request.POST["debit1"],
            ut_date = request.POST["date1"],
            ut_created_by = request.POST["create1"],

        )
    
     return HttpResponse(1)


# Delete details user transaction

def get_delete_details(request):

        balance =  Balance.objects.filter(bl_created_by = request.session['user-mobile']).values();
        data = list(balance)
        balanceDatabase = data[0]['bl_balance'];

        transaction =  Usertransactions.objects.filter(ut_id = request.POST["id1"]).values();
        data1 = list(transaction)
        ttype = data1[0]['ut_debit_or_credit']
        amt = data1[0]['ut_amount']

        if ttype == "Debit":
            balanceDatabase = float(balanceDatabase) + float(amt);
        else:
            balanceDatabase = float(balanceDatabase) - float(amt);
        
        Balance.objects.filter(bl_created_by = request.session['user-mobile']).update(bl_balance = balanceDatabase);

        Usertransactions.objects.filter(ut_id = request.POST['id1']).delete()
        return HttpResponse(1)




# User transactions report

def get_report_details(request):
   today = date.today()
   users = Usertransactions.objects.filter(ut_date__range=(request.POST['Date1'], request.POST['Date2'])).values();
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value


# User transactions reminder

def get_reminder_details(request):
   users = Usercategory.objects.filter().values();
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value
    
def check_reminder_details(request):
   current_time = datetime.now()
   startDate = str(current_time.year) +"-"+ str(current_time.month) +"-01";
   endDate = str(current_time.year) +"-"+ str(current_time.month) +"-30";

   users = Usertransactions.objects.filter(ut_created_by = request.session['user-mobile'], ut_date__range=(startDate, endDate)).values();
   data = list(users)  
   value = JsonResponse(data, safe = False)
   return value



# User feedback

def save_feedback_details(request):
        Feedback.objects.create(
            fd_name = request.session["user-name"],
            fd_email = request.session["user-email"],
            fd_feedback = request.POST["feedback"],  
                
        )
        return HttpResponse(1)



# Admin 

def home(request):
    return render(request, '/admin/01_expenses.html')

def About(request):
    return render(request, 'about.html')

def Contact(request):
    return render(request, 'contact.html')

def expenses(request):
    return render(request, 'admin/expenses.html');

def admintransactions(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/admintransactions.html');
    else:
        return render(request, 'admin/ad_admin.html');

def admindashboard(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/admindashboard.html');
    else:
        return render(request, 'admin/ad_admin.html');

def adminmyaccount(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/adminmyaccount.html');
    else:
        return render(request, 'admin/ad_admin.html');

def adminmyaccountedit(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/adminmyaccountedit.html');
    else:
        return render(request, 'admin/ad_admin.html');

def wallet(request):
    return render(request, 'admin/wallet.html');

def citytrip(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/citytrip.html');
    else:
        return render(request, 'admin/ad_admin.html');

def areatrip(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/areatrip.html');
    else:
        return render(request, 'admin/ad_admin.html');

def distancetrip(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/distancetrip.html');
    else:
        return render(request, 'admin/ad_admin.html');

def adminsettings(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/adminsettings.html');
    else:
        return render(request, 'admin/ad_admin.html');

def adminconfigsettings(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/adminconfigsettings.html');
    else:
        return render(request, 'admin/ad_admin.html');

def adminincomeconfigsettings(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/adminincomeconfigsettings.html');
    else:
        return render(request, 'admin/ad_admin.html');

def adminexpenseconfigsettings(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/adminexpenseconfigsettings.html');
    else:
        return render(request, 'admin/ad_admin.html');

def adminstylemode(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/adminadminstylemode.html');
    else:
        return render(request, 'admin/ad_admin.html');

def adminfeedback(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/adminfeedback.html');
    else:
        return render(request, 'admin/ad_admin.html');

def adminpasscode(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/adminpasscode.html');
    else:
        return render(request, 'admin/ad_admin.html');

def adminlog_in(request):
    return render(request, 'admin/adminlog_in.html');    

def ad_admin(request):
    return render(request, 'admin/ad_admin.html');  


def adminlocation(request):
    if 'admin-mobile' in request.session:
        return render(request, 'admin/adminlocation.html');
    else:
        return render(request, 'admin/ad_admin.html');


# save admin login
def save_admin_login(request):
    if Admin.objects.filter(ad_mobile = request.POST["mobile"]).count() > 0:
        request.session['admin-mobile'] = request.POST["mobile"];
        return HttpResponse(1)

    else:
        request.session['admin-mobile'] = request.POST["mobile"];
        return HttpResponse(10)
    # return 1;


# Admin Dashboard

def get_user_detail(request):
   users =  Users.objects.filter().values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value


def get_detailsby_admin_chart(request):
   result = Usertransactions.objects.values('ut_category').order_by('ut_amount').annotate(ut_amount=Sum('ut_amount'))  
   data = list(result)  
   value = JsonResponse(data, safe = False) 
   return value 


# Admin my account update

def get_update_admin_account(request):
        Admin.objects.filter(ad_mobile = request.POST['mobile']).update(
            ad_name = request.POST["name"],
            ad_email_id = request.POST["email"],
            ad_mobile = request.POST["mobile"],
            ad_password = request.POST["password"],
        )
    
        return HttpResponse(1) 

 # Admin My account Update details

def save_update_admin_account(request):
   users =  Admin.objects.filter(ad_mobile = request.session['admin-mobile']).values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value


 # User My account profile photo Update details

def get_update_adminphoto(request):
    Admin.objects.filter(ad_mobile = request.session['admin-mobile']).update(ad_image = request.POST["profilePhoto"]);
    return HttpResponse(1)



# admin login

# def save_data(request):
#         Admin.objects.create(
#             # ad_name = request.POST["name"],
#             ad_email_id = request.POST["email"],
#             # ad_mobile = request.POST["mobile"],
#             ad_password = request.POST["password"]
#         )
#         return HttpResponse(1)
    
#     # return 1;


# def get_data(request):
#    admin =  Admin.objects.filter().values()  
#    data = list(admin)  
#    value = JsonResponse(data, safe = False) 
#    return value


# def update_detail(request):
#         Admin.objects.filter(ad_id = request.POST['id1']).update(
#             # ad_name = request.POST["name1"],
#             ad_email_id = request.POST["email1"],
#             # ad_mobile = request.POST["mobile1"],
#             ad_password = request.POST["password1"],
#         )
    
#         return HttpResponse(1)
        
    # return 1;

    
# def delete_detail(request):
#         Admin.objects.filter(ad_id = request.POST['id2']).delete()
        
        
#         return HttpResponse(1)




# ADmin category

def save_admin_category(request):
        Usercategory.objects.create(
            uc_category = request.POST["category"],
            
        )
        return HttpResponse(1)

    # return 1;

def get_admin_category(request):
   users =  Usercategory.objects.filter().values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value 


# admin City


def save_details_city(request):
        State.objects.create(
            st_state = request.POST["state"],
            st_city = request.POST["dist"],

            
        )
        return HttpResponse(1)

    # return 1;

def get_details_city(request):
   users =  State.objects.filter().values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value 


# admin Area


def save_details_area(request):
        Area.objects.create(
            ar_city = request.POST["state"],
            ar_area = request.POST["dist"],
            ar_latitude = request.POST["latitude"],
            ar_longitude = request.POST["longitude"],  
            ar_link = request.POST["link"],       

        )
        return HttpResponse(1)

    # return 1;

def get_details_area(request):
   users =  Area.objects.filter().values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value 


# admin distance


def save_details_distance(request):
        Distance.objects.create(
            dt_city = request.POST["city"],
            dt_from = request.POST["from"],
            dt_to = request.POST["to"],
            dt_distance = request.POST["distance"],       
        )
        return HttpResponse(1)

    # return 1;

def get_details_distance(request):
   users =  Distance.objects.filter().values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value 


# Admin location

def save_details_location(request):
        Location.objects.create(
            lc_city = request.POST["state"],
            lc_area = request.POST["dist"],
            lc_category = request.POST["category"],  
            lc_name = request.POST["name"],
            lc_image = request.FILES["image"],
            lc_description = request.POST["description"],  
            lc_link = request.POST["link"],       

        )
        return HttpResponse(1)

    # return 1;

def get_details_location(request):
   users =  Location.objects.filter().values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value 


def get_details_modal(request):
   users =  Location.objects.filter().values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value  




# Update details Category

def get_update_category(request):
        Usercategory.objects.filter(uc_id = request.POST['id']).update(
            uc_id = request.POST["id"],
            uc_category = request.POST["category"],
            
            
        )
    
        return HttpResponse(1)


# Delete details Category

def get_delete_category(request):
        Usercategory.objects.filter(uc_id = request.POST['id1']).delete()
        return HttpResponse(1)

# Update details location

def get_update_location(request):
        Location.objects.filter(lc_id = request.POST['id']).update(
            lc_id = request.POST["id"],
            lc_city = request.POST["state1"],
            lc_area = request.POST["dist1"],
            lc_category = request.POST["category1"],
            lc_name = request.POST["name1"],
            lc_description = request.POST["image1"],
            lc_image = request.POST["description1"],
            lc_link = request.POST["link1"],


        )
    
        return HttpResponse(1)


# Delete details location

def get_delete_location(request):
        Location.objects.filter(lc_id = request.POST['id1']).delete()
        return HttpResponse(1)



# Update details Areatrip

def get_update_areatrip(request):
        Area.objects.filter(ar_id = request.POST['id']).update(
            ar_id = request.POST["id"],
            ar_city = request.POST["state1"],
            ar_area = request.POST["dist1"],
            ar_latitude = request.POST["latitude1"],
            ar_longitude = request.POST["longitude1"],
            ar_link = request.POST["link1"],
            
        )
    
        return HttpResponse(1)


# Delete details Areatrip

def get_delete_areatrip(request):
        Area.objects.filter(ar_id = request.POST['id1']).delete()
        return HttpResponse(1)



# Admin feedback


def get_feedback_details(request):
   users =  Feedback.objects.filter().values()  
   data = list(users)  
   value = JsonResponse(data, safe = False) 
   return value 
