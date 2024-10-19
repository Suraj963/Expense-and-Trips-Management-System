// alert("First");

$(document).ready(function(){
    //     let num1 = $("#num1").val();
    //    alert(num1);
    //    let div = $("#div").html();
    //    alert(div);
    //    let txt = $("#div").text();
    //    alert(txt);
    //    $("#num1").val(20);
    // //    $("div").text("New content");
    //    $("div").html("New content")
    
         $("#Submit").click(function(){
            // $("#div").show();
            // $("#div1").hide();
          //   $("#div").toggle();
          //   $("#div1").toggle();
          // if($("#num1").val()==""){
          // if($("#num1").val().length!=10){
          if($("#name").val().length<2){
             // alert("Please Enter Num1");
             // alert("Please Enter correct mobile number");
             alert("Please Enter correct name");
             $("#name").focus();
             return false;
          }
        // $("#name").on("blur", function() {
        //     if ( $(this).val().match('^[a-zA-Z]{3,16}$') ) 
        //     {
        //         alert("Valid name");
        //     } else
        //     {
        //         alert("Please enter a valid name");
        //         return false;
        //     }
        // });
          if($("#email").val().length<2){
             alert("Please Enter valid email");
             $("#email").focus();
             return false;
          }

        // $("#email").change(function () {    
        //     var inputvalues = $(this).val();    
        //     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
        //     if(!regex.test(inputvalues)){    
        //     alert("invalid email id");    
        //     return regex.test(inputvalues);    
        //     }    
        //     });   
        


          if($("#mobile").val().length<9){
            alert("Please Enter valid mobile No");
            $("#mobile").focus();
            return false;
         }

      //   $("#mobile").on("blur", function(){
      //       var mobNum = $(this).val();
      //       var filter = /^\d*(?:\.\d{1,2})?$/;
    
      //         if (filter.test(mobNum)) {
      //           if(mobNum.length==10){
      //               //   alert("valid");
      //             $("#mobile-valid").removeClass("hidden");
      //             $("#folio-invalid").addClass("hidden");
      //            } else {
      //               alert('Please put 10  digit mobile number');
      //              $("#folio-invalid").removeClass("hidden");
      //              $("#mobile-valid").addClass("hidden");
      //               return false;
      //             }
      //           }
      //           else {
      //             alert('Not a valid number');
      //             $("#folio-invalid").removeClass("hidden");
      //             $("#mobile-valid").addClass("hidden");
      //             return false;
      //          }
        
      // });


         if($("#password").val().length<2){
            alert("Please Enter correct password");
            $("#password").focus();
            return false;
         }


        // $("#password").on('keyup', function(){
        //     var number = /([0-9])/;
        //     var alphabets = /([a-zA-Z])/;
        //     var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
        //     if ($('#password').val().length < 6) {
        //         $('#password-strength-status').removeClass();
        //         $('#password-strength-status').addClass('weak-password');
        //         $('#password-strength-status').html("Weak (should be atleast 6 characters.)");
        //     } else {
        //         if ($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {
        //             $('#password-strength-status').removeClass();
        //             $('#password-strength-status').addClass('strong-password');
        //             $('#password-strength-status').html("Strong");
        //         } else {
        //             $('#password-strength-status').removeClass();
        //             $('#password-strength-status').addClass('medium-password');
        //             $('#password-strength-status').html("Medium (should include alphabets, numbers and special characters or some combination.)");
        //         }
        //     }
        //   });
    
        


    
          let formData = new FormData();
          formData.append("name",$("#name").val());
          formData.append("email",$("#email").val());
          formData.append("mobile",$("#mobile").val());
          formData.append("password",$("#password").val());
          formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    
    
          $.ajax({
             url:"/save_details/",
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
    // alert("Last");
    
    function get_details(){
      
      let formData = new FormData();         
      formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());


      $.ajax({
         url:"/get_details/",
         type:"POST",
         data:formData,
         processData:false,
         contentType:false,

         success:function(res){
            for(let i=0; i<res.length;i++)
            {
         //  console.log(res[0].us_id)
         $("#table").append("<tr><td>"+res[i].us_id+"</td><td>"+res[i].us_name+"</td><td>"+res[i].us_email_id+"</td><td>"+res[i].us_mobile+"</td><td>"+res[i].us_password+"</td></tr>");
            }
         },
         error:function(err){
         },
         complete:function(){
   
         },

      });
}
get_details()

   


$(document).ready(function(){
   
   
        $("#Update").click(function(){
           
         if($("#name1").val().length<2){
            
            alert("Please Enter correct name");
            $("#name1").focus();
            return false;
         }
       
         if($("#email1").val().length<2){
            alert("Please Enter valid email");
            $("#email1").focus();
            return false;
         }

         if($("#mobile1").val().length<9){
            alert("Please Enter valid mobile No");
            $("#mobile1").focus();
            return false;
         }

        if($("#password1").val().length<2){
           alert("Please Enter correct password");
           $("#password1").focus();
           return false;
        }
   
         let formData = new FormData();
         formData.append("id1",$("#id1").val());
         formData.append("name1",$("#name1").val());
         formData.append("email1",$("#email1").val());
         formData.append("mobile1",$("#mobile1").val());
         formData.append("password1",$("#password1").val());
         formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
   
   
         $.ajax({
            url:"/update_details/",
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
         url:"/delete_details/",
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
   
   