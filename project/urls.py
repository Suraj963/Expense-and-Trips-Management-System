"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app import views
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('expenses/', views.expenses),
    path('dashboard/', views.dashboard),
    path('myaccount/', views.myaccount),
    path('myaccountedit/', views.myaccountedit),
    path('wallet/', views.wallet),
    path('distancetrip/', views.distancetrip),
    path('settings/', views.settings),
    path('configsettings/', views.configsettings),
    path('incomeconfigsettings/', views.incomeconfigsettings),
    path('expenseconfigsettings/', views.expenseconfigsettings),
    path('stylemode/', views.stylemode),
    path('feedback/', views.feedback),
    path('passcode/', views.passcode),
    path('registration/', views.registration),
    path('save_details/',views.save_details),
    path('get_details/',views.get_details),
    path('update_details/',views.update_details),
    path('delete_details/',views.delete_details),
    path('log_in/', views.log_in),
    path('save_login_details/',views.save_login_details),
    # path('get_login_details/',views.get_login_details),
    

    # user transactions

    path('transactions/', views.transactions),
    path('save_details_transaction/', views.save_details_transaction),
    path('get_details_transaction/', views.get_details_transaction),
    # path('set_update_detail/',views.set_update_detail),
    # path('get_update_detail/',views.get_update_detail),



    # User trips
  
    path('trips/', views.trips),
    path('get_areaby_city/', views.get_areaby_city),
    # path('get_locationby_city/', views.get_locationby_city),

    
    path('get_area_details/', views.get_area_details),
  

    # User category
  
    path('incomeconfigsettings/', views.incomeconfigsettings),
    # path('save_details_category/', views.save_details_category),
    # path('get_details_category/', views.get_details_category),


#   User dashboard
    path('get_detailsby_transaction/', views.get_detailsby_transaction),

#    User dashboard card
    path('get_detailsby_card/', views.get_detailsby_card),
    path('get_detailsby_card2/', views.get_detailsby_card2),
    path('get_detailsby_card3/', views.get_detailsby_card3),


#    User dashboard chart
    path('get_detailsby_chart/', views.get_detailsby_chart),



    
    # Update details(User transaction)
    path('get_update_details/', views.get_update_details),
    path('get_delete_details/', views.get_delete_details),


# User My account Update details
    path('get_update_account/', views.get_update_account),
    path('save_update_account/', views.save_update_account),
    path('set_destroy/', views.set_destroy),


# User My account profile photo update details
    path('get_update_photo/', views.get_update_photo),



# User transactions report
    path('report/', views.report),
    path('get_report_details/', views.get_report_details),

# User Transactions reminder
    path('reminder/', views.reminder),
    path('get_reminder_details/', views.get_reminder_details),
    path('check_reminder_details/', views.check_reminder_details),



    # Admin
     path('expenses/', views.expenses),
    path('admintransactions/', views.admintransactions),
    path('admindashboard/', views.admindashboard),
    path('adminmyaccount/', views.adminmyaccount),
    path('adminmyaccountedit/', views.adminmyaccountedit),
    path('wallet/', views.wallet),
    path('adminsettings/', views.adminsettings),
    path('adminconfigsettings/', views.adminconfigsettings),
    path('adminincomeconfigsettings/', views.adminincomeconfigsettings),
    path('adminexpenseconfigsettings/', views.adminexpenseconfigsettings),
    path('adminstylemode/', views.adminstylemode),
    path('adminfeedback/', views.adminfeedback),
    path('adminpasscode/', views.adminpasscode),
    path('adminlog_in/', views.adminlog_in),
    path('ad_admin/', views.ad_admin),
    # path('save_data/', views.save_data),
    # path('get_data/', views.get_data),
    # path('update_detail/',views.update_detail),
    # path('delete_detail/',views.delete_detail),

    # admin login
    path('save_admin_login/',views.save_admin_login),


    # Admin Dashboard
    path('get_user_detail/', views.get_user_detail),

    #    User dashboard chart
    path('get_detailsby_admin_chart/', views.get_detailsby_admin_chart),


    # Admin My account Update details
    path('get_update_admin_account/', views.get_update_admin_account),
    path('save_update_admin_account/', views.save_update_admin_account),

# Admin My account profile photo update details
    path('get_update_adminphoto/', views.get_update_adminphoto),

# Admin category
    path('save_admin_category/',views.save_admin_category),
    path('get_admin_category/',views.get_admin_category),



    # admin city
  
    path('citytrip/', views.citytrip),
    path('save_details_city/', views.save_details_city),
    path('get_details_city/', views.get_details_city),


# admin Area
  
    path('areatrip/', views.areatrip),
    path('save_details_area/', views.save_details_area),
    path('get_details_area/', views.get_details_area),


# admin distance
  
    path('distancetrip/', views.distancetrip),
    path('save_details_distance/', views.save_details_distance),
    path('get_details_distance/', views.get_details_distance),


# admin location
  
    path('adminlocation/', views.adminlocation),
    path('save_details_location/', views.save_details_location),
    path('get_details_location/', views.get_details_location),
    path('get_details_modal/', views.get_details_modal),


# balance
    # path('save_details_balance/', views.save_details_balance),


 # Update details(Admin Category)
    path('get_update_category/', views.get_update_category),
    path('get_delete_category/', views.get_delete_category),


    # Update details(Admin Location)
    path('get_update_location/', views.get_update_location),
    path('get_delete_location/', views.get_delete_location),


    # Update details(Admin Areatrip)
    path('get_update_areatrip/', views.get_update_areatrip),
    path('get_delete_areatrip/', views.get_delete_areatrip),


    # Admin feedback
    path('save_feedback_details/', views.save_feedback_details),
    path('get_feedback_details/', views.get_feedback_details),



]
