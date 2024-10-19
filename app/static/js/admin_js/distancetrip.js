
// $(document).ready(function(){


//     $("form").submit(function(e){  
//         e.preventDefault();  
//         var name = $("select[name='name']").val();  
//         var dis = $("select[name='dis']").val();  
//         var dist = $("select[name='dist']").val();  

    
       
//         $(".data-table tbody").append("<tr data-name='"+name+"' data-dis='"+dis+"' data-dist='"+dist+"'><td>"+name+"</td><td>"+dis+"</td><td>"+dist+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");  
      
//         $("select[name='name']").val('');  
//         $("select[name='dis']").val('');  
//         $("select[name='dist']").val('');  
    
//       });  
      
//       $("body").on("click", ".btn-delete", function(){  
//         $(this).parents("tr").remove();  
//       });  
      
//       $("body").on("click", ".btn-edit", function(){  
//         var name = $(this).parents("tr").attr('data-name'); 
//         var dis = $(this).parents("tr").attr('data-dis');  
//         var dist = $(this).parents("tr").attr('data-dist');  
    
      
//         $(this).parents("tr").find("td:eq(0)").html('<select name="edit_name" value="'+name+'">');  
//         $(this).parents("tr").find("td:eq(1)").html('<select dis="edit_dis" value="'+dis+'">');  
//         $(this).parents("tr").find("td:eq(2)").html('<select dist="edit_dist" value="'+dist+'">');  
      
//         $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")  
//         $(this).hide();  
//       });  
      
//       $("body").on("click", ".btn-cancel", function(){  
//         var name = $(this).parents("tr").attr('data-name');  
//         var dis = $(this).parents("tr").attr('data-dis');  
//         var dist = $(this).parents("tr").attr('data-dist');  
    
      
//         $(this).parents("tr").find("td:eq(0)").text(name);  
//         $(this).parents("tr").find("td:eq(1)").text(dis);  
//         $(this).parents("tr").find("td:eq(2)").text(dist);  

    
      
//         $(this).parents("tr").find(".btn-edit").show();  
//         $(this).parents("tr").find(".btn-update").remove();  
//         $(this).parents("tr").find(".btn-cancel").remove();  
//       });  
      
//       $("body").on("click", ".btn-update", function(){  
//         var name = $(this).parents("tr").find("select[name='edit_name']").val();  
//         var dis = $(this).parents("tr").find("select[name='edit_dis']").val();  
//         var dist = $(this).parents("tr").find("select[name='edit_dist']").val();  

    
      
//         $(this).parents("tr").find("td:eq(0)").text(name);  
//         $(this).parents("tr").find("td:eq(1)").text(dis); 
//         $(this).parents("tr").find("td:eq(1)").text(dist);  

    
       
//         $(this).parents("tr").attr('data-name', name);  
//         $(this).parents("tr").attr('data-dis', dis);  
//         $(this).parents("tr").attr('data-dist', dist);  

    
      
//         $(this).parents("tr").find(".btn-edit").show();  
//         $(this).parents("tr").find(".btn-cancel").remove();  
//         $(this).parents("tr").find(".btn-update").remove();  
//       });  
    
//     });    
    

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
      
   

      if($("#city").val().length<1){
          alert("Please Enter valid transaction");
          $("#city").focus();
          return false;
       }

       if($("#from").val().length<1){
          alert("Please Enter valid category");
          $("#from").focus();
          return false;
       }

      if($("#to").val().length<2){
         alert("Please Enter correct amount");
         $("#to").focus();
         return false;
      }

      if($("#distance").val().length<2){
          alert("Please Enter debit or credit");
          $("#distance").focus();
          return false;
      }

   

      let formData = new FormData();
        formData.append("city",$("#city").val());
        formData.append("from",$("#from").val());
        formData.append("to",$("#to").val());
        formData.append("distance",$("#distance").val());
        

        formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
        $.ajax({
           url:"/save_details_distance/",
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


function get_details_distance(){
      
  let formData = new FormData();         
  formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());


  $.ajax({
     url:"/get_details_distance/",
     type:"POST",
     data:formData,
     processData:false,
     contentType:false,

     success:function(res){
        for(let i=0; i<res.length;i++)
        {
     //  console.log(res[0].us_id)
     $("#table").append("<tr><td>"+res[i].dt_id+"</td><td>"+res[i].dt_city+"</td><td>"+res[i].dt_from+"</td><td>"+res[i].dt_to+"</td><td>"+res[i].dt_distance+"</td></tr>");
        }
     },
     error:function(err){
     },
     complete:function(){

     },

  });
}
get_details_distance()


