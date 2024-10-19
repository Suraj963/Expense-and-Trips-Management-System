
$(document).ready(function(){


    $("form").submit(function(e){  
        e.preventDefault();  
        var name = $("select[name='name']").val();  
        var dis = $("select[name='dis']").val();  
        var dist = $("select[name='dist']").val();  

    
       
        $(".data-table tbody").append("<tr data-name='"+name+"' data-dis='"+dis+"' data-dist='"+dist+"'><td>"+name+"</td><td>"+dis+"</td><td>"+dist+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");  
      
        $("select[name='name']").val('');  
        $("select[name='dis']").val('');  
        $("select[name='dist']").val('');  
    
      });  
      
      $("body").on("click", ".btn-delete", function(){  
        $(this).parents("tr").remove();  
      });  
      
      $("body").on("click", ".btn-edit", function(){  
        var name = $(this).parents("tr").attr('data-name'); 
        var dis = $(this).parents("tr").attr('data-dis');  
        var dist = $(this).parents("tr").attr('data-dist');  
    
      
        $(this).parents("tr").find("td:eq(0)").html('<select name="edit_name" value="'+name+'">');  
        $(this).parents("tr").find("td:eq(1)").html('<select dis="edit_dis" value="'+dis+'">');  
        $(this).parents("tr").find("td:eq(2)").html('<select dist="edit_dist" value="'+dist+'">');  
      
        $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")  
        $(this).hide();  
      });  
      
      $("body").on("click", ".btn-cancel", function(){  
        var name = $(this).parents("tr").attr('data-name');  
        var dis = $(this).parents("tr").attr('data-dis');  
        var dist = $(this).parents("tr").attr('data-dist');  
    
      
        $(this).parents("tr").find("td:eq(0)").text(name);  
        $(this).parents("tr").find("td:eq(1)").text(dis);  
        $(this).parents("tr").find("td:eq(2)").text(dist);  

    
      
        $(this).parents("tr").find(".btn-edit").show();  
        $(this).parents("tr").find(".btn-update").remove();  
        $(this).parents("tr").find(".btn-cancel").remove();  
      });  
      
      $("body").on("click", ".btn-update", function(){  
        var name = $(this).parents("tr").find("select[name='edit_name']").val();  
        var dis = $(this).parents("tr").find("select[name='edit_dis']").val();  
        var dist = $(this).parents("tr").find("select[name='edit_dist']").val();  

    
      
        $(this).parents("tr").find("td:eq(0)").text(name);  
        $(this).parents("tr").find("td:eq(1)").text(dis); 
        $(this).parents("tr").find("td:eq(1)").text(dist);  

    
       
        $(this).parents("tr").attr('data-name', name);  
        $(this).parents("tr").attr('data-dis', dis);  
        $(this).parents("tr").attr('data-dist', dist);  

    
      
        $(this).parents("tr").find(".btn-edit").show();  
        $(this).parents("tr").find(".btn-cancel").remove();  
        $(this).parents("tr").find(".btn-update").remove();  
      });  
    
    });    
    