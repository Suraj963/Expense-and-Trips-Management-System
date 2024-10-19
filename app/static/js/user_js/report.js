function get_report_details(){
        
    let formData = new FormData();  
    formData.append("Date1",$("#Date1").val());
    formData.append("Date2",$("#Date2").val());       
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
    $.ajax({
       url:"/get_report_details/",
       type:"POST",
       data:formData,
       processData:false,
       contentType:false,
  
       success:function(res){
        for(let i=0; i<res.length;i++)
        {
     //  console.log(res[0].us_id)
     $("#table").append("<tr><td>"+res[i].ut_id+"</td><td>"+res[i].ut_transactions+"</td><td>"+res[i].ut_category+"</td><td>"+res[i].ut_amount+"</td><td>"+res[i].ut_debit_or_credit+"</td><td>"+res[i].ut_date+"</td><td>"+res[i].ut_created_by+"</td></tr>");
     $("#table1").append("<tr><td>"+res[i].ut_id+"</td><td>"+res[i].ut_transactions+"</td><td>"+res[i].ut_category+"</td><td>"+res[i].ut_amount+"</td><td>"+res[i].ut_debit_or_credit+"</td><td>"+res[i].ut_date+"</td><td>"+res[i].ut_created_by+"</td></tr>");
        }
       },
       error:function(err){
       },
       complete:function(){
  
       },
  
    });
  }
  get_report_details()



  