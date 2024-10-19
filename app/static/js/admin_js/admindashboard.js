// window.onload = function () {

//     //Better to construct options first and then pass it as a parameter
//     var options = {
//         title: {
//             text: "Expense chart"
//         },
//         animationEnabled: true,
//         exportEnabled: true,
//         data: [
//         {
//             type: "spline", //change it to line, area, column, pie, etc
//             dataPoints: [
//                 { x: 10, y: 10 },
//                 { x: 20, y: 12 },
//                 { x: 30, y: 8 },
//                 { x: 40, y: 14 },
//                 { x: 50, y: 6 },
//                 { x: 60, y: 24 },
//                 { x: 70, y: -4 },
//                 { x: 80, y: 10 }
//             ]
//         }
//         ]
//     };
//     $("#chartContainer").CanvasJSChart(options);
    
//     }

    
    // window.onload = function () {

    //     var option = {
    //       title: {
    //         text: "Expense by Category"
    //       },
    //       subtitles: [{
    //         text: ""
    //       }],
    //       animationEnabled: true,
    //       data: [{
    //         type: "pie",
    //         startAngle: 40,
    //         toolTipContent: "<b>{label}</b>: {y}%",
    //         showInLegend: "true",
    //         legendText: "{label}",
    //         indexLabelFontSize: 16,
    //         indexLabel: "{label} - {y}%",
    //         dataPoints: [
    //           { y: 48.36, label: "Shopping" },
    //           { y: 26.85, label: "Education" },
    //           { y: 1.49, label: "Travel" },
    //           { y: 6.98, label: "Subscriptions" },
    //           { y: 6.53, label: "Health" },
    //           { y: 2.45, label: "Entertainement" },
    //           { y: 3.32, label: "Recharge" },
    //           { y: 4.03, label: "Others" }
    //         ]
    //       }]
    //     };
    //     $("#container").CanvasJSChart(option);
        
    //     }



//         $(document).ready(function () {    

//   RenderPieChart('container', [
//             ['Shopping', 65.0],
//             ['Education', 6.8],
//             ['Entertainement',  12.8],                         
//             ['Travel', 8.5],
//             ['Health', 6.2],
//             ['Others', 0.7]
//         ]);     

// $('#btnPieChart').live('click', function(){
// var data = [
//             ['Shopping', 42.0],
//             ['Education', 26.8],
//             {
//                 name: 'Entertainement',
//                 y: 14.8,
//                 sliced: true,
//                 selected: true
//             },
//             ['Travel', 6.5],
//             ['Health', 8.2],
//             ['Others', 0.7]
//         ];

//   RenderPieChart('container', data);
// });

//   function RenderPieChart(elementId, dataList) {
//       new Highcharts.Chart({
//           chart: {
//               renderTo: elementId,
//               plotBackgroundColor: null,
//               plotBorderWidth: null,
//               plotShadow: false
//           }, title: {
//               text: 'Expense by Category'
//           },
//           tooltip: {
//               formatter: function () {
//                   return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
//               }
//           },
//           plotOptions: {
//               pie: {
//                   allowPointSelect: true,
//                   cursor: 'pointer',
//                   dataLabels: {
//                       enabled: true,
//                       color: '#000000',
//                       connectorColor: '#000000',
//                       formatter: function () {
//                           return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
//                       }
//                   }
//               }
//           },
//           series: [{
//               type: 'pie',
//               name: 'Browser share',
//               data: dataList
//           }]
//       });
//   };
// });



function get_user_detail(){
        
    let formData = new FormData();         
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
    $.ajax({
       url:"/get_user_detail/",
       type:"POST",
       data:formData, 
       processData:false,
       contentType:false,
  
       success:function(res){
          for(let i=0; i<res.length;i++)
          {
       //  console.log(res[0].us_id)
       $("#table").append("<tr><td>"+res[i].us_id+"</td><td>"+res[i].us_name+"</td><td>"+res[i].us_email_id+"</td><td>"+res[i].us_mobile+"</td><td>"+res[i].us_password+"</td></tr>");
          }
       },
       error:function(err){
       },
       complete:function(){
  
       },
  
    });
  }
  get_user_detail()



  function get_detailsby_admin_chart(){
        
    let formData = new FormData();         
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
    $.ajax({
       url:"/get_detailsby_admin_chart/",
       type:"POST",
       data:formData,
       processData:false,
       contentType:false,
  
       success:function(res){
        let arr = [];
        for(let i=0; i<res.length;i++){
            

            let obj = { label: res[i].ut_category, y: res[i].ut_amount };
            arr.push(obj)
                
            // console.log(res[i].ut_category)
            // console.log(res[i].ut_amount)
            }

        console.log(arr)



        window.onload = function () {

            var options = {
                animationEnabled: true,
                title: {
                    text: "All Users Expense by Category"
                },
                axisY: {
                    title: "Expense ",
                    // suffix: "%"
                },
                axisX: {
                    title: "Category"
                },
                data: [{
                    type: "column",
                    // yValueFormatString: "#0",
                    dataPoints: arr
                }]
            };
            $("#chartContainer").CanvasJSChart(options);
            
            }
       
       },
       error:function(err){
       },
       complete:function(){
  
       },
  
    });
  }
  get_detailsby_admin_chart()



  
  function get_detailsby_ad_pie_chart(){
        
    let formData = new FormData();         
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  
  
    $.ajax({
       url:"/get_detailsby_admin_chart/",
       type:"POST",
       data:formData,
       processData:false,
       contentType:false,
  
       success:function(res){
        let arr = [];
        for(let i=0; i<res.length;i++){
        // let arr1 = ["Entertainement","Shopping","Medicine"];
            

           let arr1 = [ res[i].ut_category, res[i].ut_amount ]
            arr.push(arr1)
                
            // console.log(res[i].ut_category)
            // console.log(res[i].ut_amount)
            }

        console.log(arr)



        $(document).ready(function () {    

            RenderPieChart('container', arr);     
          
          $('#btnPieChart').live('click', function(){
          
          
            RenderPieChart('container', data);
          });
          
            function RenderPieChart(elementId, dataList) {
                new Highcharts.Chart({
                    chart: {
                        renderTo: elementId,
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false
                    }, title: {
                        text: 'All Users Expense by Category'
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                color: '#000000',
                                connectorColor: '#000000',
                                formatter: function () {
                                    return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                                }
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Browser share',
                        data: dataList
                    }]
                });
            };
          });
          
       
       },
       error:function(err){
       },
       complete:function(){
  
       },
  
    });
  }
  get_detailsby_ad_pie_chart()