
function set_destroy(){

    $("#logout").click(function(){

      let formData = new FormData();
      formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    
        $.ajax({
           url:"/set_destroy/",
           type:"POST",
           data:formData,
           processData:false,
           contentType:false,
  
           success:function(res){
            alert("Logged out sucessfully")
            window.location = '/log_in/';
            return 1;
           },
           error:function(err){
           },
           complete:function(){
     
           },
  
        });
      });

  }
  set_destroy()