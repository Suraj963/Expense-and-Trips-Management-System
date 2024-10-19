
$(document).ready(function(){

         $("#Submit").click(function(){

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
          formData.append("mobile",$("#mobile").val());
          formData.append("password",$("#password").val());
          formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    
    
          $.ajax({
             url:"/save_login_details/",
             type:"POST",
             data:formData,
             processData:false,
             contentType:false,
    
             success:function(res){
                if(res==10)
              {
                alert("User not found")
              }
              else{
                alert("Login sucessful")
                window.location = '/dashboard/';
              }
              
             },
             error:function(err){
             },
             complete:function(){
       
             },
    
          });
    
    
    
            
         });
         
    });


//     function get_logn_details(){
      
//         let formData = new FormData();         
//         formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
//         $.ajax({
//            url:"/get_logn_details/",
//            type:"POST",
//            data:formData,
//            processData:false,
//            contentType:false,
  
//            success:function(res){
//               for(let i=0; i<res.length;i++)
//               {
//            //  console.log(res[0].us_id)
//            $("#table").append("<tr><td>"+res[i].ur_id+"</td><td>"+res[i].ur_mobile+"</td><td>"+res[i].ur_password+"</td></tr>");
//               }
//            },
//            error:function(err){
//            },
//            complete:function(){
     
//            },
  
//         });
//   }
//   get_login_details()
  