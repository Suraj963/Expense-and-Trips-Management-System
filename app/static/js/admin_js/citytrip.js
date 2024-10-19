
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
      let formData = new FormData();
        formData.append("state",$("#state").val());
        formData.append("dist",$("#dist").val());
        

        formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
        $.ajax({
           url:"/save_details_city/",
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


 
function get_details_city(){
        
  let formData = new FormData();         
  formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());


  $.ajax({
     url:"/get_details_city/",
     type:"POST",
     data:formData,
     processData:false,
     contentType:false,

     success:function(res){
        for(let i=0; i<res.length;i++)
        {
     //  console.log(res[0].us_id)
     $("#table").append("<tr><td>"+res[i].st_id+"</td><td>"+res[i].st_state+"</td><td>"+res[i].st_city+"</td></tr>");
        }
     },
     error:function(err){
     },
     complete:function(){

     },

  });
}
get_details_city()