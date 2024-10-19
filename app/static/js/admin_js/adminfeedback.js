function get_feedback_details(){
        
    let formData = new FormData();         
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
    $.ajax({
       url:"/get_feedback_details/",
       type:"POST",
       data:formData, 
       processData:false,
       contentType:false,
  
       success:function(res){
          for(let i=0; i<res.length;i++)
          {
       //  console.log(res[0].us_id)
       $("#table1").append("<tr><td>"+res[i].fd_id+"</td><td>"+res[i].fd_name+"</td><td>"+res[i].fd_email+"</td><td>"+res[i].fd_feedback+"</td></tr>");
          }
       },
       error:function(err){
       },
       complete:function(){
  
       },
  
    });
  }
  get_feedback_details()


