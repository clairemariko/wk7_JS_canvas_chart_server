
//step 3 just open a window.onload function with one line of console.log
window.onload = function(){
  console.log("chart app running");

  var data = new ChartData();
  var containers = new ChartContainers();
  var types = new ChartTypes();

  var title = "Pokemone I've Caught";
  new Chart(title, types.pie, containers.pie, data.pie);
  new Chart(title, types.line, containers.line, data.series, data.months);
  //you have to add a new chart that 
}
//step5 grab the element from html
// var pieContainer = document.getElementById("pie-chart");

// //we are now constructing a new pie container.
// //step6
// var pieChart = new Highcharts.Chart({
//   chart: {
//     type: 'pie',
//     renderTo: pieContainer
//     },
//   title:{
//     text: "Pokemon Types Ive Caught"
//     },
//   series: [{
//     name: "Pokemon Type",
//     data: [
//         {
//         name: "Fire",
//         y: 74,
//         color: "#ffac33"
//         },
//         {
//         name: "Water",
//         y:25,
//         color:"#73b7ff",
//         sliced: true
//         },
//         {
//           name: "Grass",
//           y:1,
//           color: "#00ba2f"
//         }
//       ]
//     }]
//   });



