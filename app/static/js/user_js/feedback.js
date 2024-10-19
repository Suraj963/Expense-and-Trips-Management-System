

$(document).ready(function(){
   
   
    $("#Submit").click(function(){
       
     

     if($("#feedback").val().length<5){
        alert("Please Enter valid feedback");
        $("#feedback").focus();
        return false;
     }

    

     let formData = new FormData();
     formData.append("id",$("#id").val());
     formData.append("feedback",$("#feedback").val());
     formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());


     $.ajax({
        url:"/save_feedback_details/",
        type:"POST",
        data:formData,
        processData:false,
        contentType:false,

        success:function(res){
            alert("Submitted sucessfully");
            location.reload();
        
        },
        error:function(err){
        },
        complete:function(){
  
        },

     });



       
    });
    
});