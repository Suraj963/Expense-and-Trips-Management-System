

$(document).ready(function(){
   
   
    $("#Update").click(function(){
       
     if($("#name").val().length<2){
        alert("Please Enter correct name");
        $("#name").focus();
        return false;
     }
   
     if($("#email").val().length<2){
        alert("Please Enter valid email");
        $("#email").focus();
        return false;
     }

     if($("#mobile").val().length<9){
        alert("Please Enter valid mobile No");
        $("#mobile").focus();
        return false;
     }

    if($("#password").val().length<2){
       alert("Please Enter correct password");
       $("#password").focus();
       return false;
    }

     let formData = new FormData();
     formData.append("id",$("#id").val());
     formData.append("name",$("#name").val());
     formData.append("email",$("#email").val());
     formData.append("mobile",$("#mobile").val());
     formData.append("password",$("#password").val());
     formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());


     $.ajax({
        url:"/get_update_admin_account/",
        type:"POST",
        data:formData,
        processData:false,
        contentType:false,

        success:function(res){
           alert("Update sucessful");
        //    location.reload();             
        },
        error:function(err){
        },
        complete:function(){
  
        },

     });



       
    });
     
});


function save_update_admin_account(){


       let formData = new FormData();
     
         formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
   
   
         $.ajax({
            url:"/save_update_admin_account/",
            type:"POST",
            data:formData,
            processData:false,
            contentType:false,
   
            success:function(res){
              $('#name').val(res[0].ad_name);
              $('#email').val(res[0].ad_email_id);
              $('#mobile').val(res[0].ad_mobile);
              $('#password').val(res[0].ad_password);
              $("#adminImage").attr("src", res[0].ad_image);

            },
            error:function(err){
            },
            complete:function(){
      
            },
   
         });
   }
   save_update_admin_account()



   let uploadedPhoto = "";
   const profilePhoto = document.getElementById("profilePhoto");
      profilePhoto.addEventListener("change", e => {
         const file = profilePhoto.files[0];
         const reader = new FileReader();

         reader.addEventListener("load", () => {
           console.log(reader.result);
           uploadedPhoto = reader.result;
         });

         reader.readAsDataURL(file);
      });

   function get_update_adminphoto(){

      if ($("#profilePhoto").val().trim().length < 1) {
         alert("Please Select Photo"); 
         $("#profilePhoto").focus();
         return false;
       } 

      let formData = new FormData();
      formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());

      // let lclFile = document.getElementById("profilePhoto");
      // lclFile1 = lclFile.files[0];
      // formData.append("profilePhoto", lclFile1);

      
      // let lclFile = document.getElementById("profilePhoto");
      // lclFile1 = lclFile.files[0];
      formData.append("profilePhoto", uploadedPhoto);

   
   
        $.ajax({
           url:"/get_update_adminphoto/",
           type:"POST",
           data:formData,
           processData:false,
           contentType:false,
  
           success:function(res){
         
           },
           error:function(err){
           },
           complete:function(){
     
           }, 
  
        });
  }
