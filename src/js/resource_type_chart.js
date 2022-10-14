// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['운영체제', 7],
    ['자바스크립트', 10],
    ['CSS', 10]
  ]);

  // Set chart options
  var options =
  {'title':'우이하루가 가지고 있는 자료 종류들',
    'width':400,
    'height':300
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('resource_type_Chart'));
  chart.draw(data, options);
}