
// $(document).ready(function(){


//     $("form").submit(function(e){  
//         e.preventDefault();  
//         var transaction = $("input[name='transaction']").val();  
//         var expense = $("input[name='expense']").val();  
//         var amount = $("input[name='amount']").val(); 
//         var debit = $("input[name='debit']").val();  

    
       
//         $(".data-table tbody").append("<tr data-transaction='"+transaction+"' data-expense='"+expense+"' data-amount='"+amount+"' data-debit='"+debit+"'><td>"+transaction+"</td><td>"+expense+"</td><td>"+amount+"</td><td>"+debit+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");  
      
//         $("input[name='transaction']").val('');  
//         $("input[name='expense']").val('');  
//         $("input[name='amount']").val('');  
//         $("input[name='debit']").val('');  

    
//       });  
      
//       $("body").on("click", ".btn-delete", function(){  
//         $(this).parents("tr").remove();  
//       });  
      
//       $("body").on("click", ".btn-edit", function(){  
//         var transaction = $(this).parents("tr").attr('data-transaction');  
//         var expense = $(this).parents("tr").attr('data-expense');  
//         var amount = $(this).parents("tr").attr('data-amount');  
//         var debit = $(this).parents("tr").attr('data-debit');  
    
      
//         $(this).parents("tr").find("td:eq(0)").html('<input name="edit_transaction" value="'+transaction+'">');  
//         $(this).parents("tr").find("td:eq(1)").html('<input name="edit_expense" value="'+expense+'">');  
//         $(this).parents("tr").find("td:eq(2)").html('<input name="edit_amount" value="'+amount+'">');  
//         $(this).parents("tr").find("td:eq(3)").html('<input name="edit_debit" value="'+debit+'">');  
      
//         $(this).parents("tr").find("td:eq(4)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")  
//         $(this).hide();  
//       });  
      
//       $("body").on("click", ".btn-cancel", function(){  
//         var transaction = $(this).parents("tr").attr('data-transaction');  
//         var expense = $(this).parents("tr").attr('data-expense');  
//         var amount = $(this).parents("tr").attr('data-amount');  
//         var debit = $(this).parents("tr").attr('data-debit');  
    
      
//         $(this).parents("tr").find("td:eq(0)").text(transaction);  
//         $(this).parents("tr").find("td:eq(1)").text(expense);  
//         $(this).parents("tr").find("td:eq(2)").text(amount);  
//         $(this).parents("tr").find("td:eq(3)").text(debit);  
    
      
//         $(this).parents("tr").find(".btn-edit").show();  
//         $(this).parents("tr").find(".btn-update").remove();  
//         $(this).parents("tr").find(".btn-cancel").remove();  
//       });  
      
//       $("body").on("click", ".btn-update", function(){  
//         var transaction = $(this).parents("tr").find("input[name='edit_transaction']").val();  
//         var expense = $(this).parents("tr").find("input[name='edit_expense']").val();  
//         var amount = $(this).parents("tr").find("input[name='edit_amount']").val();  
//         var debit = $(this).parents("tr").find("input[name='edit_debit']").val();  
    
      
//         $(this).parents("tr").find("td:eq(0)").text(transaction);  
//         $(this).parents("tr").find("td:eq(1)").text(expense);  
//         $(this).parents("tr").find("td:eq(2)").text(amount);  
//         $(this).parents("tr").find("td:eq(3)").text(debit);  
    
       
//         $(this).parents("tr").attr('data-transaction', transaction);  
//         $(this).parents("tr").attr('data-expense', expense);  
//         $(this).parents("tr").attr('data-amount', amount);  
//         $(this).parents("tr").attr('data-debit', debit);  
    
      
//         $(this).parents("tr").find(".btn-edit").show();  
//         $(this).parents("tr").find(".btn-cancel").remove();  
//         $(this).parents("tr").find(".btn-update").remove();  
//       }); 
//     });  

    
       
// $(document).ready(function(){
      

//       RenderPieChart('container', [
//                 ['Shopping', 65.0],
//                 ['Education', 6.8],
//                 ['Travel',  12.8],                         
//                 ['Entertainement', 8.5],
//                 ['Health', 6.2],
//                 ['Others', 0.7]
//             ]);     
    
//     $('#btnPieChart').live('click', function(){
//     var data = [
//                 ['Shopping', 42.0],
//                 ['Education', 26.8],
//                 {
//                     name: 'Travel',
//                     y: 14.8,
//                     sliced: true,
//                     selected: true
//                 },
//                 ['Entertainement', 6.5],
//                 ['Health', 8.2],
//                 ['Others', 0.7]
//             ];
    
//       RenderPieChart('container', data);
//     });
    
//       function RenderPieChart(elementId, dataList) {
//           new Highcharts.Chart({
//               chart: {
//                   renderTo: elementId,
//                   plotBackgroundColor: null,
//                   plotBorderWidth: null,
//                   plotShadow: false
//               }, title: {
//                   text: 'Expense by Category'
//               },
//               tooltip: {
//                   formatter: function () {
//                       return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
//                   }
//               },
//               plotOptions: {
//                   pie: {
//                       allowPointSelect: true,
//                       cursor: 'pointer',
//                       dataLabels: {
//                           enabled: true,
//                           color: '#000000',
//                           connectorColor: '#000000',
//                           formatter: function () {
//                               return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
//                           }
//                       }
//                   }
//               },
//               series: [{
//                   type: 'pie',
//                   name: 'Browser share',
//                   data: dataList
//               }]
//           });
//       };

//     });    

    // google.charts.load('current', {'packages':['corechart']});
    // google.charts.setOnLoadCallback(drawChart);

    // function drawChart() {

    //   var data = google.visualization.arrayToDataTable([
    //     ['Task', 'Hours per Day'],
    //     ['Work',     11],
    //     ['Eat',      2],
    //     ['Commute',  2],
    //     ['Watch TV', 2],
    //     ['Sleep',    7]
    //   ]);

    //   var options = {
    //     title: 'My Daily Activities'
    //   };

    //   var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    //   chart.draw(data, options);
    // }

    window.onload = function () {

      var options = {
        title: {
          text: "Expense by Category"
        },
        subtitles: [{
          text: ""
        }],
        animationEnabled: true,
        data: [{
          type: "pie",
          startAngle: 40,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: 48.36, label: "Shopping" },
            { y: 26.85, label: "Education" },
            { y: 1.49, label: "Travel" },
            { y: 6.98, label: "Subscriptions" },
            { y: 6.53, label: "Health" },
            { y: 2.45, label: "Entertainement" },
            { y: 3.32, label: "Recharge" },
            { y: 4.03, label: "Others" }
          ]
        }]
      };
      $("#chartContainer").CanvasJSChart(options);
      
      }




      $(document).ready(function(){

        $("#Submit").click(function(){
            
      
         if($("#category").val().length<1){
            alert("Please Enter category");
            $("#category").focus();
            return false;
         }
      
            let formData = new FormData();
              formData.append("category",$("#category").val());
              
      
              formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
        
        
              $.ajax({
                 url:"/save_admin_category/",
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
      


      function get_admin_category(){
      
        let formData = new FormData();         
        formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
        $.ajax({
           url:"/get_admin_category/",
           type:"POST",
           data:formData,
           processData:false,
           contentType:false,
  
           success:function(res){
              for(let i=0; i<res.length;i++)
              {
           //  console.log(res[0].us_id)
           $("#table").append("<tr><td>"+res[i].uc_id+"</td><td>"+res[i].uc_category+"</td><td><div class='d-flex' style='justify-content: space-evenly;'><a href='javascript:void(0);' id='edit_row' title='View/Edit' data-toggle='modal' data-target='#edit_modal' class='text-primary' onClick='getRowsUpdate();'> <i class='fas fa-pen'></i></a><a href='javascript:void(0);' title='Delete' data-toggle='modal' data-target=#delete_modal' class='text-danger' id='delete_row' onClick='getRowsDelete();'> <i class='far fa-trash-alt'></i></a></div></td></tr>");
              }
           },
           error:function(err){
           },
           complete:function(){
     
           },
  
        });
  }
  get_admin_category()      




  

function getRowsUpdate() {
  $("#table tr").click(function() {
      var currentRow = $(this).closest("tr");
      var lclId = currentRow.find("td:eq(0)").text();
      var lclCategory = currentRow.find("td:eq(1)").text();
    

      // alert(lclName);
      $("#edit_modal").modal('show');

      $("#id").val(lclId);
      $("#category").val(lclCategory);
    


  });
}



$(document).ready(function(){

  $("#update").click(function(){
      
   

      if($("#category").val().length<1){
          alert("Please Enter category");
          $("#category").focus();
          return false;
       }
       
      let formData = new FormData();
        formData.append("id",$("#id").val());
        formData.append("category",$("#category").val());
        

        formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
        $.ajax({
           url:"/get_update_category/",
           type:"POST",
           data:formData,
           processData:false,
           contentType:false,
  
           success:function(res){
            alert("Updated sucessfully")
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
     url:"/get_delete_category/",
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

