
// $(document).ready(function(){


//   $("form").submit(function(e){  
//       e.preventDefault();  
//       var name = $("input[name='name']").val();  
//       var email = $("input[name='email']").val();  
//       var password = $("input[name='password']").val();  
  
     
//       $(".data-table tbody").append("<tr data-name='"+name+"' data-email='"+email+"' data-password='"+password+"'><td>"+name+"</td><td>"+email+"</td><td>"+password+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");  
    
//       $("input[name='name']").val('');  
//       $("input[name='email']").val('');  
//       $("input[name='password']").val('');  
  
//     });  
    
//     $("body").on("click", ".btn-delete", function(){  
//       $(this).parents("tr").remove();  
//     });  
    
//     $("body").on("click", ".btn-edit", function(){  
//       var name = $(this).parents("tr").attr('data-name');  
//       var email = $(this).parents("tr").attr('data-email');  
//       var password = $(this).parents("tr").attr('data-password');  
  
    
//       $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" value="'+name+'">');  
//       $(this).parents("tr").find("td:eq(1)").html('<input name="edit_email" value="'+email+'">');  
//       $(this).parents("tr").find("td:eq(2)").html('<input name="edit_password" value="'+password+'">');  
    
//       $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")  
//       $(this).hide();  
//     });  
    
//     $("body").on("click", ".btn-cancel", function(){  
//       var name = $(this).parents("tr").attr('data-name');  
//       var email = $(this).parents("tr").attr('data-email');  
//       var password = $(this).parents("tr").attr('data-password');  
  
    
//       $(this).parents("tr").find("td:eq(0)").text(name);  
//       $(this).parents("tr").find("td:eq(1)").text(email);  
//       $(this).parents("tr").find("td:eq(2)").text(password);  
  
    
//       $(this).parents("tr").find(".btn-edit").show();  
//       $(this).parents("tr").find(".btn-update").remove();  
//       $(this).parents("tr").find(".btn-cancel").remove();  
//     });  
    
//     $("body").on("click", ".btn-update", function(){  
//       var name = $(this).parents("tr").find("input[name='edit_name']").val();  
//       var email = $(this).parents("tr").find("input[name='edit_email']").val();  
//       var password = $(this).parents("tr").find("input[name='edit_password']").val();  
  
    
//       $(this).parents("tr").find("td:eq(0)").text(name);  
//       $(this).parents("tr").find("td:eq(1)").text(email);  
//       $(this).parents("tr").find("td:eq(2)").text(password);  
  
     
//       $(this).parents("tr").attr('data-name', name);  
//       $(this).parents("tr").attr('data-email', email);  
//       $(this).parents("tr").attr('data-password', password);  
  
    
//       $(this).parents("tr").find(".btn-edit").show();  
//       $(this).parents("tr").find(".btn-cancel").remove();  
//       $(this).parents("tr").find(".btn-update").remove();  
//     });  
  
//   });    
  

$(document).ready(function(){

  $("#Submit").click(function(){

    
    if($("#category").val().length<1){
      alert("Please Enter correct category");
      $("#category").focus();
      return false;
   }

    
  
        let formData = new FormData();
          formData.append("category",$("#category").val());
          
  
          formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    
    
          $.ajax({
             url:"/save_details_category/",
             type:"POST",
             data:formData,
             processData:false,
             contentType:false,
    
             success:function(res){
              alert("category selected")
              location.reload()
              
             },
             error:function(err){
             },
             complete:function(){
       
             },
    
          });
    
  
    });
});


  
  
  function get_details_category(){
        
    let formData = new FormData();         
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
    $.ajax({
       url:"/get_details_category/",
       type:"POST",
       data:formData,
       processData:false,
       contentType:false,
  
       success:function(res){
          for(let i=0; i<res.length;i++)
          {
       //  console.log(res[0].us_id)
       $("#table").append("<tr><td>"+res[i].uc_id+"</td><td>"+res[i].uc_category+"</td></tr>");
          }
       },
       error:function(err){
       },
       complete:function(){
  
       },
  
    });
  }
  get_details_category()