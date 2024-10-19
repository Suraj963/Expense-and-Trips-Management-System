
// $(document).ready(function(){


//     $("form").submit(function(e){  
//         e.preventDefault();  
//         var transaction = $("input[name='transaction']").val();  
//         var expense = $("input[name='expense']").val();  
//         var amount = $("input[name='amount']").val(); 
//         var debit = $("input[name='debit']").val();  
//         var date = $("input[name='date']").val();  
//         var create = $("input[name='create']").val();  


    
       
//         $(".data-table tbody").append("<tr data-transaction='"+transaction+"' data-expense='"+expense+"'  data-amount='"+amount+"' data-debit='"+debit+"' data-date='"+date+"' data-create='"+create+"'><td>"+transaction+"</td><td>"+expense+"</td><td>"+amount+"</td><td>"+debit+"</td><td>"+date+"</td><td>"+create+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");  
      
//         $("input[name='transaction']").val('');  
//         $("input[name='expense']").val('');  
//         $("input[name='amount']").val('');  
//         $("input[name='debit']").val('');  
//         $("input[name='date']").val('');  
//         $("input[name='create']").val('');    
//       });  
      
//       $("body").on("click", ".btn-delete", function(){  
//         $(this).parents("tr").remove();  
//       });  
      
//       $("body").on("click", ".btn-edit", function(){  
//         var transaction = $(this).parents("tr").attr('data-transaction');  
//         var expense = $(this).parents("tr").attr('data-expense');  
//         var amount = $(this).parents("tr").attr('data-amount');  
//         var debit = $(this).parents("tr").attr('data-debit');  
//         var date = $(this).parents("tr").attr('data-date');  
//         var create = $(this).parents("tr").attr('data-create');  
    
//         $(this).parents("tr").find("td:eq(0)").html('<input name="edit_transaction" value="'+transaction+'">');  
//         $(this).parents("tr").find("td:eq(1)").html('<input name="edit_expense" value="'+expense+'">');  
//         $(this).parents("tr").find("td:eq(2)").html('<input name="edit_amount" value="'+amount+'">');  
//         $(this).parents("tr").find("td:eq(3)").html('<input name="edit_debit" value="'+debit+'">');  
//         $(this).parents("tr").find("td:eq(4)").html('<input name="date" value="'+date+'">');  
//         $(this).parents("tr").find("td:eq(5)").html('<input name="create" value="'+create+'">');  
      
//         $(this).parents("tr").find("td:eq(6)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")  
//         $(this).hide();  
//       });  
      
//       $("body").on("click", ".btn-cancel", function(){  
//         var transaction = $(this).parents("tr").attr('data-transaction');  
//         var expense = $(this).parents("tr").attr('data-expense');  
//         var amount = $(this).parents("tr").attr('data-amount');  
//         var debit = $(this).parents("tr").attr('data-debit');  
//         var date = $(this).parents("tr").attr('data-date');  
//         var create = $(this).parents("tr").attr('data-create');  
    
      
//         $(this).parents("tr").find("td:eq(0)").text(transaction);  
//         $(this).parents("tr").find("td:eq(1)").text(expense);  
//         $(this).parents("tr").find("td:eq(2)").text(amount);  
//         $(this).parents("tr").find("td:eq(3)").text(debit);  
//         $(this).parents("tr").find("td:eq(4)").text(date);  
//         $(this).parents("tr").find("td:eq(5)").text(create);  
    
      
//         $(this).parents("tr").find(".btn-edit").show();  
//         $(this).parents("tr").find(".btn-update").remove();  
//         $(this).parents("tr").find(".btn-cancel").remove();  
//       });  
      
//       $("body").on("click", ".btn-update", function(){  
//         var transaction = $(this).parents("tr").find("input[name='edit_transaction']").val();  
//         var expense = $(this).parents("tr").find("input[name='edit_expense']").val();  
//         var amount = $(this).parents("tr").find("input[name='edit_amount']").val();  
//         var debit = $(this).parents("tr").find("input[name='edit_debit']").val();  
//         var date = $(this).parents("tr").find("input[name='date']").val();  
//         var create = $(this).parents("tr").find("input[name='create']").val();  
    
      
//         $(this).parents("tr").find("td:eq(0)").text(transaction);  
//         $(this).parents("tr").find("td:eq(1)").text(expense);  
//         $(this).parents("tr").find("td:eq(2)").text(amount);  
//         $(this).parents("tr").find("td:eq(3)").text(debit);  
//         $(this).parents("tr").find("td:eq(4)").text(date);  
//         $(this).parents("tr").find("td:eq(5)").text(create);  
    
       
//         $(this).parents("tr").attr('data-transaction', transaction);  
//         $(this).parents("tr").attr('data-expense', expense);  
//         $(this).parents("tr").attr('data-amount', amount);  
//         $(this).parents("tr").attr('data-debit', debit);  
//         $(this).parents("tr").attr('data-date', date);  
//         $(this).parents("tr").attr('data-create', create);  

    
      
//         $(this).parents("tr").find(".btn-edit").show();  
//         $(this).parents("tr").find(".btn-cancel").remove();  
//         $(this).parents("tr").find(".btn-update").remove();  
//       }); 
//     });  

    
       
// // $(document).ready(function(){
      

// //       RenderPieChart('container', [
// //                 ['Shopping', 65.0],
// //                 ['Education', 6.8],
// //                 ['Travel',  12.8],                         
// //                 ['Entertainement', 8.5],
// //                 ['Health', 6.2],
// //                 ['Others', 0.7]
// //             ]);     
    
// //     $('#btnPieChart').live('click', function(){
// //     var data = [
// //                 ['Shopping', 42.0],
// //                 ['Education', 26.8],
// //                 {
// //                     name: 'Travel',
// //                     y: 14.8,
// //                     sliced: true,
// //                     selected: true
// //                 },
// //                 ['Entertainement', 6.5],
// //                 ['Health', 8.2],
// //                 ['Others', 0.7]
// //             ];
    
// //       RenderPieChart('container', data);
// //     });
    
// //       function RenderPieChart(elementId, dataList) {
// //           new Highcharts.Chart({
// //               chart: {
// //                   renderTo: elementId,
// //                   plotBackgroundColor: null,
// //                   plotBorderWidth: null,
// //                   plotShadow: false
// //               }, title: {
// //                   text: 'Expense by Category'
// //               },
// //               tooltip: {
// //                   formatter: function () {
// //                       return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
// //                   }
// //               },
// //               plotOptions: {
// //                   pie: {
// //                       allowPointSelect: true,
// //                       cursor: 'pointer',
// //                       dataLabels: {
// //                           enabled: true,
// //                           color: '#000000',
// //                           connectorColor: '#000000',
// //                           formatter: function () {
// //                               return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
// //                           }
// //                       }
// //                   }
// //               },
// //               series: [{
// //                   type: 'pie',
// //                   name: 'Browser share',
// //                   data: dataList
// //               }]
// //           });
// //       };

// //     });    

//     // google.charts.load('current', {'packages':['corechart']});
//     // google.charts.setOnLoadCallback(drawChart);

//     // function drawChart() {

//     //   var data = google.visualization.arrayToDataTable([
//     //     ['Task', 'Hours per Day'],
//     //     ['Work',     11],
//     //     ['Eat',      2],
//     //     ['Commute',  2],
//     //     ['Watch TV', 2],
//     //     ['Sleep',    7]
//     //   ]);

//     //   var options = {
//     //     title: 'My Daily Activities'
//     //   };

//     //   var chart = new google.visualization.PieChart(document.getElementById('piechart'));

//     //   chart.draw(data, options);
//     // }

//     window.onload = function () {

//       var options = {
//         title: {
//           text: "Expense by Category"
//         },
//         subtitles: [{
//           text: ""
//         }],
//         animationEnabled: true,
//         data: [{
//           type: "pie",
//           startAngle: 40,
//           toolTipContent: "<b>{label}</b>: {y}%",
//           showInLegend: "true",
//           legendText: "{label}",
//           indexLabelFontSize: 16,
//           indexLabel: "{label} - {y}%",
//           dataPoints: [
//             { y: 48.36, label: "Shopping" },
//             { y: 26.85, label: "Education" },
//             { y: 1.49, label: "Travel" },
//             { y: 6.98, label: "Subscriptions" },
//             { y: 6.53, label: "Health" },
//             { y: 2.45, label: "Entertainement" },
//             { y: 3.32, label: "Recharge" },
//             { y: 4.03, label: "Others" }
//           ]
//         }]
//       };
//       $("#chartContainer").CanvasJSChart(options);
      
//       }


$(document).ready(function(){

  $("#Submit").click(function(){
      
   

      if($("#transaction").val().length<1){
          alert("Please Enter valid transaction");
          $("#transaction").focus();
          return false;
       }

       if($("#expense").val().length<2){
          alert("Please Enter valid category");
          $("#expense").focus();
          return false;
       }

      if($("#amount").val().length<2){
         alert("Please Enter correct amount");
         $("#amount").focus();
         return false;
      }

      if($("#debit").val().length<2){
          alert("Please Enter debit or credit");
          $("#debit").focus();
          return false;
      }

      if($("#date").val().length<2){
        alert("Please Enter correct date");
        $("#date").focus();
        return false;
    }

    if($("#create").val().length<2){
      alert("Please Enter correct details");
      $("#create").focus();
      return false;
  }

      let formData = new FormData();
        formData.append("transaction",$("#transaction").val());
        formData.append("expense",$("#expense").val());
        formData.append("amount",$("#amount").val());
        formData.append("debit",$("#debit").val());
        formData.append("date",$("#date").val());
        formData.append("create",$("#create").val());

        formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
        $.ajax({
           url:"/save_details_transaction/",
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


function get_details_transaction(){
      
  let formData = new FormData();         
  formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());


  $.ajax({
     url:"/get_details_transaction/",
     type:"POST",
     data:formData,
     processData:false,
     contentType:false,

     success:function(res){
        for(let i=0; i<res.length;i++)
        {
     //  console.log(res[0].us_id)
     $("#table").append("<tr><td>"+res[i].ut_id+"</td><td>"+res[i].ut_transactions+"</td><td>"+res[i].ut_category+"</td><td>"+res[i].ut_amount+"</td><td>"+res[i].ut_debit_or_credit+"</td><td>"+res[i].ut_date+"</td><td>"+res[i].ut_created_by+"</td><td><div class='d-flex' style='justify-content: space-evenly;'><a href='javascript:void(0);' id='edit_row' title='View/Edit' data-toggle='modal' data-target='#edit_modal' class='text-primary' onClick='getRowsUpdate();'> <i class='fas fa-pen'></i></a><a href='javascript:void(0);' title='Delete' data-toggle='modal' data-target=#delete_modal' class='text-danger' id='delete_row' onClick='getRowsDelete();'> <i class='far fa-trash-alt'></i></a></div></td></tr>");
        }
     },
     error:function(err){
     },
     complete:function(){

     },

  });
}
get_details_transaction()



function getRowsUpdate() {
   $("#table tr").click(function() {
       var currentRow = $(this).closest("tr");
       var lclId = currentRow.find("td:eq(0)").text();
       var lclTransaction = currentRow.find("td:eq(1)").text();
       var lclExpense_Category = currentRow.find("td:eq(2)").text();
       var lclAmount = currentRow.find("td:eq(3)").text();
       var lclTransaction_type = currentRow.find("td:eq(4)").text();
       var lclDate = currentRow.find("td:eq(5)").text();
       var lclCreated_by = currentRow.find("td:eq(6)").text();

       // alert(lclName);
       $("#edit_modal").modal('show');

       $("#id").val(lclId);
       $("#transaction1").val(lclTransaction);
       $("#expense1").val(lclExpense_Category);
       $("#amount1").val(lclAmount);
       $("#debit1").val(lclTransaction_type);
       $("#date1").val(lclDate);
       $("#create1").val(lclCreated_by);

 
   });
 }



 $(document).ready(function(){

   $("#update").click(function(){
       
    
 
       if($("#transaction1").val().length<1){
           alert("Please Enter valid transaction");
           $("#transaction1").focus();
           return false;
        }
 
        if($("#expense1").val().length<2){
           alert("Please Enter valid category");
           $("#expense1").focus();
           return false;
        }
 
       if($("#amount1").val().length<2){
          alert("Please Enter correct amount");
          $("#amount1").focus();
          return false;
       }
 
       if($("#debit1").val().length<2){
           alert("Please Enter debit or credit");
           $("#debit1").focus();
           return false;
       }
 
       if($("#date1").val().length<2){
         alert("Please Enter correct date");
         $("#date1").focus();
         return false;
     }
 
     if($("#create1").val().length<2){
       alert("Please Enter correct details");
       $("#create1").focus();
       return false;
   }
 
       let formData = new FormData();
         formData.append("id",$("#id").val());
         formData.append("transaction1",$("#transaction1").val());
         formData.append("expense1",$("#expense1").val());
         formData.append("amount1",$("#amount1").val());
         formData.append("debit1",$("#debit1").val());
         formData.append("date1",$("#date1").val());
         formData.append("create1",$("#create1").val());
 
         formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
   
   
         $.ajax({
            url:"/get_update_details/",
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
      url:"/get_delete_details/",
      type:"POST",
      data:formData,
      processData:false,
      contentType:false,

      success:function(res){
         alert("Delete sucessful");
         location.reload(); 

      },
      error:function(err){
      },
      complete:function(){

      },

   });

});



// function get_update_detail(){
      
//    let formData = new FormData();   
//    formData.append("transaction",$("#transaction").val());
//    formData.append("expense",$("#expense").val());
//    formData.append("amount",$("#amount").val());
//    formData.append("debit",$("#debit").val());
//    formData.append("date",$("#date").val());
//    formData.append("create",$("#create").val());      
//    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
 
 
//    $.ajax({
//       url:"/get_update_detail/",
//       type:"POST",
//       data:formData,
//       processData:false,
//       contentType:false,
 
//       success:function(res){
//          for(let i=0; i<res.length;i++)
//          {
//       //  console.log(res[0].us_id)
//       $("#table").append("<tr><td>"+res[i].ut_id+"</td><td>"+res[i].ut_transactions+"</td><td>"+res[i].ut_category+"</td><td>"+res[i].ut_amount+"</td><td>"+res[i].ut_debit_or_credit+"</td><td>"+res[i].ut_date+"</td><td>"+res[i].ut_created_by+"</td><td><div class='d-flex' style='justify-content: space-evenly;'><a href='javascript:void(0);' id='edit_row' title='View/Edit' data-toggle='modal' data-target='#edit_modal' class='text-primary' onClick='getRowsUpdate();'> <i class='fas fa-pen'></i></a><a href='javascript:void(0);' title='Delete' data-toggle='modal' data-target=#delete_modal' class='text-danger' id='delete_row' onClick='getRowsDelete();'> <i class='far fa-trash-alt'></i></a></div></td></tr>");
//          }
//       },
//       error:function(err){
//       },
//       complete:function(){
 
//       },
 
//    });
//  }
//  get_update_detail()

