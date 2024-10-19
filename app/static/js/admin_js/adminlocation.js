
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
  
        if($("#category").val().length<2){
           alert("Please Enter correct category");
           $("#category").focus();
           return false;
        }
  
        if($("#name").val().length<2){
            alert("Please Enter name");
            $("#name").focus();
            return false;
        }

        if ($("#image").val().trim().length < 1) {
         snackbar_error("Please Select Photo");
         $("#image").focus();
         return false;
       }

        if($("#description").val().length<2){
            alert("Please Enter correct description");
            $("#description").focus();
            return false;
        }

        if($("#link").val().length<2){
           alert("Please Enter valid link");
           $("#link").focus();
           return false;
       }
  
     
  
        let formData = new FormData();
        let lclFile = document.getElementById("image");
          lclFile1 = lclFile.files[0];
          formData.append("state",$("#state").val());
          formData.append("dist",$("#dist").val());
          formData.append("category",$("#category").val());
          formData.append("name",$("#name").val());
          
          formData.append("image", lclFile1);
          formData.append("description",$("#description").val());
          formData.append("link",$("#link").val());
          
  
          formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    
    
          $.ajax({
             url:"/save_details_location/",
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
  
  
  function get_details_location(){
        
    let formData = new FormData();         
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
    $.ajax({
       url:"/get_details_location/",
       type:"POST",
       data:formData,
       processData:false,
       contentType:false,
  
       success:function(res){
          for(let i=0; i<res.length;i++)
          {
            let img = res[i].lc_image.substring(3);
       //  console.log(res[0].us_id)
       $("#table").append("<tr><td>"+res[i].lc_id+"</td><td>"+res[i].lc_city+"</td><td>"+res[i].lc_area+"</td><td>"+res[i].lc_category+"</td><td>"+res[i].lc_name+"</td><td>"+res[i].lc_description+"</td><td><img src='"+img+"' height='50'></td><td><a href='"+res[i].lc_link+"'>Navigation</a></td><td><div class='d-flex' style='justify-content: space-evenly;'><a href='javascript:void(0);' id='edit_row' title='View/Edit' data-toggle='modal' data-target='#edit_modal' class='text-primary' onClick='getRowsUpdate();'> <i class='fas fa-pen'></i></a><a href='javascript:void(0);' title='Delete' data-toggle='modal' data-target=#delete_modal' class='text-danger' id='delete_row' onClick='getRowsDelete();'> <i class='far fa-trash-alt'></i></a></div></td></tr>");
          }
       },
       error:function(err){
       },
       complete:function(){
  
       },
  
    });
  }
  get_details_location()
  
  
//   function get_details_modal(){
  

    
 
//        let formData = new FormData();
         
         
 
//          formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
   
   
//          $.ajax({
//             url:"/get_details_modal/",
//             type:"POST",
//             data:formData,
//             processData:false,
//             contentType:false,
   
//             success:function(res){
//                for(let i=0; i<res.length;i++)
//                {
//             //  console.log(res[0].us_id)
//             $("#table1").append("<tr><td>"+res[i].lc_id+"</td><td>"+res[i].lc_city+"</td><td>"+res[i].lc_area+"</td><td>"+res[i].lc_category+"</td><td>"+res[i].lc_name+"</td><td>"+res[i].lc_description+"</td><td>"+res[i].lc_image+"</td><td>"+res[i].lc_link+"</td></tr>");
//                }
             
//             },
//             error:function(err){
//             },
//             complete:function(){
      
//             },
   
//          });
   
 
   
//  }
//  get_details_modal()
  




function getRowsUpdate() {
   $("#table tr").click(function() {
       var currentRow = $(this).closest("tr");
       var lclId = currentRow.find("td:eq(0)").text();
       var lclCity = currentRow.find("td:eq(1)").text();
       var lclArea = currentRow.find("td:eq(2)").text();
       var lclCategory = currentRow.find("td:eq(3)").text();
       var lclName = currentRow.find("td:eq(4)").text();
       var lclImage = currentRow.find("td:eq(5)").text();
       var lclDescription = currentRow.find("td:eq(6)").text();
       var lclLink = currentRow.find("td:eq(7)").text();


       // alert(lclName);
       $("#edit_modal").modal('show');

       $("#id").val(lclId);
       $("#state1").val(lclCity);
       $("#dist1").val(lclArea);
       $("#category1").val(lclCategory);
       $("#name1").val(lclName);
       $("#image1").val(lclImage);
       $("#description1").val(lclDescription);
       $("#link1").val(lclLink);
 
   });
 }



 $(document).ready(function(){

   $("#update").click(function(){
       
    
 
       if($("#state1").val().length<1){
           alert("Please Enter valid state");
           $("#state1").focus();
           return false;
        }
 
        if($("#dist1").val().length<2){
           alert("Please Enter valid dist");
           $("#dist1").focus();
           return false;
        }
 
       if($("#category1").val().length<2){
          alert("Please Enter correct category");
          $("#category1").focus();
          return false;
       }
 
       if($("#name1").val().length<2){
           alert("Please Enter correct name");
           $("#name1").focus();
           return false;
       }
 
       if($("#image1").val().length<2){
         alert("Please add image");
         $("#image1").focus();
         return false;
     }
 
      if($("#description1").val().length<2){
         alert("Please Enter correct description");
         $("#description1").focus();
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
         formData.append("category1",$("#category1").val());
         formData.append("name1",$("#name1").val());
         formData.append("image1",$("#image1").val());
         formData.append("description1",$("#description1").val());
         formData.append("link1",$("#link1").val());
 
         formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
   
   
         $.ajax({
            url:"/get_update_location/",
            type:"POST",
            data:formData,
            processData:false,
            contentType:false,
   
            success:function(res){
             alert("Updated successfully")
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
      url:"/get_delete_location/",
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

