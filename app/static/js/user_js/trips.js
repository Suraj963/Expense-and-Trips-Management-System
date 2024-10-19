$(document).ready(function(){

  $("#city").change(function(){
    
  
        let formData = new FormData();
          formData.append("city",$("#city").val());
          
  
          formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    
    
          $.ajax({
             url:"/get_areaby_city/",
             type:"POST",
             data:formData,
             processData:false,
             contentType:false,
    
             success:function(res){
               for(let i=0; i<res.length;i++)
                {

                  let area = '"'+res[i].ar_area+'"'; 
            //  console.log(res[0].us_id)
             $("#table").append("<tr><td>"+res[i].ar_id+"</td><td>"+res[i].ar_city+"</td><td>"+res[i].ar_area+"</td><td><a href='"+res[i].ar_link+"'> go</a></td><td><a href='#' onClick='viewAreaDetail("+area+")'>view</a></td></tr>");
                }
     
              
             },
             error:function(err){
             },
             complete:function(){
       
             },
    
          });
    
  
    });
});




   
// $(document).ready(function(){

//   $("#city").change(function(){
   
//          let formData = new FormData();
//            formData.append("city",$("#city").val());
           
   
//            formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
     
     
//            $.ajax({
//               url:"/get_locationby_city/",
//               type:"POST",
//               data:formData,
//               processData:false,
//               contentType:false,
     
//               success:function(res){
//                 for(let i=0; i<res.length;i++)
//                  {
//              //  console.log(res[0].us_id)
//               $("#table").append("<tr><td>"+res[i].lc_id+"</td><td>"+res[i].lc_name+"</td><td>"+res[i].lc_area+"</td></tr>");
//                  }
      
               
//               },
//               error:function(err){
//               },
//               complete:function(){
        
//               },
     
//            });
//          });
//       });

  function viewAreaDetail(area){

   let formData = new FormData();
     formData.append("area",area);
     

     formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());



   $.ajax({
      url:"/get_area_details/",
      type:"POST",
      data:formData,
      processData:false,
      contentType:false,

      success:function(res){
        for(let i=0; i<res.length;i++)
         {
    //  //  console.log(res[0].us_id)
    //   $("#table").append("<tr><td>"+res[i].lc_id+"</td><td>"+res[i].lc_name+"</td><td>"+res[i].lc_area+"</td></tr>");
    //      
    let img = res[i].lc_image.substring(3);
     
    $("#exampleModal").modal('show');
    $("#modaldata").append('<div class="card col-sm-3 m-4"><img src="'+img+'" height="200" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">'+res[i].lc_name+'</h5><p class="card-text"> '+res[i].lc_description+'</p><a href="'+res[i].lc_link+'" class="btn btn-primary">Go somewhere</a> </div></div>')

         }
      },
      error:function(err){
      },
      complete:function(){

      },

   });
  }
  viewAreaDetail()
 

//   function get_area_details(){
   
//   $("#city").change(function(){
   
//    let formData = new FormData();
//      formData.append("city",$("#city").val());
     

//      formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());


//      $.ajax({
//         url:"/get_area_details/",
//         type:"POST",
//         data:formData,
//         processData:false,
//         contentType:false,

//         success:function(res){
//       //     for(let i=0; i<res.length;i++)
//       //      {
//       //  //  console.log(res[0].us_id)
//       //   $("#table").append("<tr><td>"+res[i].lc_id+"</td><td>"+res[i].lc_name+"</td><td>"+res[i].lc_area+"</td></tr>");
//       //      }

         
//         },
//         error:function(err){
//         },
//         complete:function(){
  
//         },

//      });
//    });
//   }
// get_area_details()
  
  
 