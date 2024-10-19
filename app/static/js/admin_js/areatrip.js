
// $(document).ready(function(){


//     $("form").submit(function(e){  
//         e.preventDefault();  
//         var name = $("select[name='name']").val();  
//         var dist = $("select[name='dist']").val();  
    
       
//         $(".data-table tbody").append("<tr data-name='"+name+"' data-dist='"+dist+"'><td>"+name+"</td><td>"+dist+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");  
      
//         $("select[name='name']").val('');  
//         $("select[name='dist']").val('');  
    
//       });  
      
//       $("body").on("click", ".btn-delete", function(){  
//         $(this).parents("tr").remove();  
//       });  
      
//       $("body").on("click", ".btn-edit", function(){  
//         var name = $(this).parents("tr").attr('data-name');  
//         var dist = $(this).parents("tr").attr('data-dist');  
    
      
//         $(this).parents("tr").find("td:eq(0)").html('<select name="edit_name" value="'+name+'">');  
//         $(this).parents("tr").find("td:eq(1)").html('<select dist="edit_dist" value="'+dist+'">');  
      
//         $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")  
//         $(this).hide();  
//       });  
      
//       $("body").on("click", ".btn-cancel", function(){  
//         var name = $(this).parents("tr").attr('data-name');  
//         var dist = $(this).parents("tr").attr('data-dist');  
    
      
//         $(this).parents("tr").find("td:eq(0)").text(name);  
//         $(this).parents("tr").find("td:eq(1)").text(dist);  
    
      
//         $(this).parents("tr").find(".btn-edit").show();  
//         $(this).parents("tr").find(".btn-update").remove();  
//         $(this).parents("tr").find(".btn-cancel").remove();  
//       });  
      
//       $("body").on("click", ".btn-update", function(){  
//         var name = $(this).parents("tr").find("select[name='edit_name']").val();  
//         var dist = $(this).parents("tr").find("select[name='edit_dist']").val();  
    
      
//         $(this).parents("tr").find("td:eq(0)").text(name);  
//         $(this).parents("tr").find("td:eq(1)").text(dist);  
    
       
//         $(this).parents("tr").attr('data-name', name);  
//         $(this).parents("tr").attr('data-dist', dist);  
    
      
//         $(this).parents("tr").find(".btn-edit").show();  
//         $(this).parents("tr").find(".btn-cancel").remove();  
//         $(this).parents("tr").find(".btn-update").remove();  
//       });  
    
//     });    
    

$(document).ready(function(){

  $("#Submit").click(function(){
      
   

      if($("#state").val().length<1){
          alert("Please Enter valid transaction");
          $("#state").focus();
          return false;
       }

       if($("#dist").val().length<1){
          alert("Please Enter valid category");
          $("#dist").focus();
          return false;
       }

      if($("#latitude").val().length<2){
         alert("Please Enter correct amount");
         $("#latitude").focus();
         return false;
      }

      if($("#longitude").val().length<2){
          alert("Please Enter debit or credit");
          $("#longitude").focus();
          return false;
      }
      if($("#link").val().length<2){
         alert("Please Enter debit or credit");
         $("#link").focus();
         return false;
     }

   

      let formData = new FormData();
        formData.append("state",$("#state").val());
        formData.append("dist",$("#dist").val());
        formData.append("latitude",$("#latitude").val());
        formData.append("longitude",$("#longitude").val());
        formData.append("link",$("#link").val());
        

        formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
        $.ajax({
           url:"/save_details_area/",
           type:"POST",
           data:formData,
           processData:false,
           contentType:false,
  
           success:function(res){
            alert("Entry sucessful")
            location.reload()
            
           },
           error:function(err){
           },
           complete:function(){
     
           },
  
        });
  

  });
});


function get_details_area(){
      
  let formData = new FormData();         
  formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());


  $.ajax({
     url:"/get_details_area/",
     type:"POST",
     data:formData,
     processData:false,
     contentType:false,

     success:function(res){
        for(let i=0; i<res.length;i++)
        {
     //  console.log(res[0].us_id)
     $("#table").append("<tr><td>"+res[i].ar_id+"</td><td>"+res[i].ar_city+"</td><td>"+res[i].ar_area+"</td><td>"+res[i].ar_latitude+"</td><td>"+res[i].ar_longitude+"</td><td><a href='"+res[i].ar_link+"'>Navigation</a></td><td><div class='d-flex' style='justify-content: space-evenly;'><a href='javascript:void(0);' id='edit_row' title='View/Edit' data-toggle='modal' data-target='#edit_modal' class='text-primary' onClick='getRowsUpdate();'> <i class='fas fa-pen'></i></a><a href='javascript:void(0);' title='Delete' data-toggle='modal' data-target=#delete_modal' class='text-danger' id='delete_row' onClick='getRowsDelete();'> <i class='far fa-trash-alt'></i></a></div></td></tr>");
        }
     },
     error:function(err){
     },
     complete:function(){

     },

  });
}
get_details_area()



function getRowsUpdate() {
   $("#table tr").click(function() {
       var currentRow = $(this).closest("tr");
       var lclId = currentRow.find("td:eq(0)").text();
       var lclCity = currentRow.find("td:eq(1)").text();
       var lclArea = currentRow.find("td:eq(2)").text();
       var lclLatitude = currentRow.find("td:eq(3)").text();
       var lcllongitude = currentRow.find("td:eq(4)").text();
       var lclLink = currentRow.find("td:eq(5)").text();

       // alert(lclName);
       $("#edit_modal").modal('show');

       $("#id").val(lclId);
       $("#state1").val(lclCity);
       $("#dist1").val(lclArea);
       $("#latitude1").val(lclLatitude);
       $("#longitude1").val(lcllongitude);
       $("#link1").val(lclLink);

 
   });
 }



 $(document).ready(function(){

   $("#update").click(function(){
       
    
 
       if($("#state1").val().length<1){
           alert("Please Enter correct state");
           $("#state1").focus();
           return false;
        }
 
        if($("#dist1").val().length<2){
           alert("Please Enter correct dist");
           $("#dist1").focus();
           return false;
        }
 
       if($("#latitude1").val().length<2){
          alert("Please Enter correct latitude");
          $("#latitude1").focus();
          return false;
       }
 
       if($("#longitude1").val().length<2){
           alert("Please Enter correct longitude");
           $("#longitude1").focus();
           return false;
       }
 
       if($("#link1").val().length<2){
         alert("Please Enter valid link");
         $("#link1").focus();
         return false;
     }
 
       let formData = new FormData();
         formData.append("id",$("#id").val());
         formData.append("state1",$("#state1").val());
         formData.append("dist1",$("#dist1").val());
         formData.append("latitude1",$("#latitude1").val());
         formData.append("longitude1",$("#longitude1").val());
         formData.append("link1",$("#link1").val());
 
         formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
   
   
         $.ajax({
            url:"/get_update_areatrip/",
            type:"POST",
            data:formData,
            processData:false,
            contentType:false,
   
            success:function(res){
             alert("Updated sucessfully")
             location.reload()
             
            },
            error:function(err){
            },
            complete:function(){
      
            },
   
         });
   
 
   });
 });


 function getRowsDelete() {
   $("#table tr").click(function() {
       var currentRow = $(this).closest("tr");
       var lclId = currentRow.find("td:eq(0)").text();
       // alert(lclID);
       $("#delete_modal").modal('show');

       $("#id1").val(lclId);
 
   });
 }


 
 $("#delete").click(function(){

      
   let formData = new FormData();  
   formData.append("id1",$("#id1").val());
   formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());


   $.ajax({
      url:"/get_delete_areatrip/",
      type:"POST",
      data:formData,
      processData:false,
      contentType:false,

      success:function(res){
         alert("Deleted sucessfully");
         location.reload(); 

      },
      error:function(err){
      },
      complete:function(){

      },

   });

});

