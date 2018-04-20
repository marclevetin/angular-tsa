app.controller("barchart", function($scope, $http) {
  $scope.test2 = "Remember to remove this.";

  var vt = this;

  // Bar Chart

  vt.barChartLabels = [];

  vt.barChartSeries = ["Average", "Standard Deviation"];

  vt.barChartCharts = [];
  
  // API Request
  $http({
    method: "GET",
    url: "./data/averageClaims.js"
  }).then(function(data) {
    var array = data.data;

    var averageData = [];
    var stdDevData = [];
    angular.forEach(array, function(barChartData) {
      // add to labels
      vt.barChartLabels.push(barChartData.airportCode);
      // add data to series 1 (average)
      averageData.push(barChartData.averageClaim);
      // add data to series 2 (stdDev)
      stdDevData.push(barChartData.standardDeviation);
    });

    vt.barChartCharts = [averageData, stdDevData];
  });

  vt.barChartOptions = {
    maintainAspectRatio: false,
    responsive: true
  };

  vt.barChartColours = ["#494750", "#cc3321"];
});
