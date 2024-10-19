function get_reminder_details(){
        
    let formData = new FormData();         
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
    $.ajax({
       url:"/get_reminder_details/",
       type:"POST",
       data:formData,
       processData:false,
       contentType:false,
  
       success:function(res){
          for(let i=0; i<res.length;i++)
          {
       //  console.log(res[0].us_id)
            $("#table").append("<tr><td>"+res[i].uc_id+"</td><td>"+res[i].uc_category+"</td><td id='"+res[i].uc_category+"'>Please Pay</td></tr>");
          }
       },
       error:function(err){
       },
       complete:function(){
  
       },
  
    });
  }
  get_reminder_details()



  function check_reminder_details(){
        
    let formData = new FormData();         
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
    $.ajax({
       url:"/check_reminder_details/",
       type:"POST",
       data:formData,
       processData:false,
       contentType:false,
  
       success:function(res){

        for(let i=0; i<res.length;i++)
        {
          if(res[i].ut_category == "Rent"){
            $("#"+res[i].ut_category).text("Already Paid");
          }

          if(res[i].ut_category == "EMI"){
            $("#"+res[i].ut_category).text("Already Paid");
          }

          if(res[i].ut_category == "Current_Bill"){
            $("#"+res[i].ut_category).text("Already Paid");
          }

          if(res[i].ut_category == "Mobile_Recharge"){
            $("#"+res[i].ut_category).text("Already Paid");
          }

          if(res[i].ut_category == "Water_Bill"){
            $("#"+res[i].ut_category).text("Already Paid");
          }

        }
       },
       error:function(err){
       },
       complete:function(){
  
       },
  
    });
  }
  check_reminder_details()