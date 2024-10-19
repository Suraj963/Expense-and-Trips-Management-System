$(document).ready(function(){

    $("#Submit").click(function(){
        
      //   if($("#name").val().length<2){
      //       alert("Please Enter correct name");
      //       $("#name").focus();
      //       return false;
      //   }

        if($("#email").val().length<2){
            alert("Please Enter valid email");
            $("#email").focus();
            return false;
         }

         // if($("#mobile").val().length<9){
         //    alert("Please Enter valid mobile No");
         //    $("#mobile").focus();
         //    return false;
         // }

        if($("#password").val().length<2){
           alert("Please Enter correct password");
           $("#password").focus();
           return false;
        }

        let formData = new FormData();
         //  formData.append("name",$("#name").val());
          formData.append("email",$("#email").val());
         //  formData.append("mobile",$("#mobile").val());
          formData.append("password",$("#password").val());
          formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    
    
          $.ajax({
             url:"/save_data/",
             type:"POST",
             data:formData,
             processData:false,
             contentType:false,
    
             success:function(res){
              if(res==10)
              {
                alert("Exists")
              }
              else{
              alert("Registration sucessful")
              location.reload()
              }
             },
             error:function(err){
             },
             complete:function(){
       
             },
    
          });
    
  
    });
});

function get_data(){
      
    let formData = new FormData();         
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());


    $.ajax({
       url:"/get_data/",
       type:"POST",
       data:formData,
       processData:false,
       contentType:false,

       success:function(res){
          for(let i=0; i<res.length;i++)
          {
       //  console.log(res[0].us_id)
       $("#table1").append("<tr><td>"+res[i].ad_id+"</td><td>"+res[i].ad_email_id+"</td><td>"+res[i].ad_password+"</td></tr>");
          }
       },
       error:function(err){
       },
       complete:function(){
 
       },

    });
}
get_data()



$(document).ready(function(){
   
   
   $("#Update").click(function(){
      
   //  if($("#name1").val().length<2){
       
   //     alert("Please Enter correct name");
   //     $("#name1").focus();
   //     return false;
   //  }
  
    if($("#email1").val().length<2){
       alert("Please Enter valid email");
       $("#email1").focus();
       return false;
    }

   //  if($("#mobile1").val().length<9){
   //     alert("Please Enter valid mobile No");
   //     $("#mobile1").focus();
   //     return false;
   //  }

   if($("#password1").val().length<2){
      alert("Please Enter correct password");
      $("#password1").focus();
      return false;
   }

    let formData = new FormData();
    formData.append("id1",$("#id1").val());
   //  formData.append("name1",$("#name1").val());
    formData.append("email1",$("#email1").val());
   //  formData.append("mobile1",$("#mobile1").val());
    formData.append("password1",$("#password1").val());
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());


    $.ajax({
       url:"/update_detail/",
       type:"POST",
       data:formData,
       processData:false,
       contentType:false,

       success:function(res){
          alert("Update sucessful");
          location.reload();             
       },
       error:function(err){
       },
       complete:function(){
 
       },

    });



      
   });
   
});


 $("#delete").click(function(){

 
 let formData = new FormData();  
 formData.append("id2",$("#id2").val());
 formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());


 $.ajax({
    url:"/delete_detail/",
    type:"POST",
    data:formData,
    processData:false,
    contentType:false,

    success:function(res){
       alert("Delete sucessful");
       location.reload(); 

    },
    error:function(err){
    },
    complete:function(){

    },

 });

});

