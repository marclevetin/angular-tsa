app.controller("linegraphs", function($scope, $http) {
  $scope.test2 = "Remember to remove this.";

  var vt = this;

  // Line Chart

  vt.chartLineLabels = [
    "Jan 2010",
    "Feb 2010",
    "Mar 2010",
    "Apr 2010",
    "May 2010",
    "Jun 2010",
    "Jul 2010",
    "Aug 2010",
    "Sept 2010",
    "Oct 2010",
    "Nov 2010",
    "Dec 2010",
    "Jan 2011",
    "Feb 2011",
    "Mar 2011",
    "Apr 2011",
    "May 2011",
    "Jun 2011",
    "Jul 2011",
    "Aug 2011",
    "Sept 2011",
    "Oct 2011",
    "Nov 2011",
    "Dec 2011",
    "Jan 2012",
    "Feb 2012",
    "Mar 2012",
    "Apr 2012",
    "May 2012",
    "Jun 2012",
    "Jul 2012",
    "Aug 2012",
    "Sept 2012",
    "Oct 2012",
    "Nov 2012",
    "Dec 2012",
    "Jan 2013",
    "Feb 2013",
    "Mar 2013",
    "Apr 2013",
    "May 2013",
    "Jun 2013",
    "Jul 2013",
    "Aug 2013",
    "Sept 2013",
    "Oct 2013",
    "Nov 2013",
    "Dec 2013"
  ];

  vt.chartLineSeries = [];

  vt.chartLineCharts = [];

  // API Request
  $http({
    method: "GET",
    url: "./data/valueLost.js"
  }).then(function(data) {
    var array = data.data;
    // prepares average series
    var averageSeriesName = "Average";
    var averageDataObject = {};

    angular.forEach(array, function(chartLineData) {
      // adds airline to chart series
      vt.chartLineSeries.push(chartLineData.Airline);

      //this removes Airline from the array.
      sortedObjectKeys = Object.keys(chartLineData).sort();
      sortedObjectKeys.pop();

      // assembles data for the Airline
      let thisAirlineArray = [];
      angular.forEach(sortedObjectKeys, function(key) {
        // average series
        if (averageDataObject[key] === undefined) {
          averageDataObject[key] = chartLineData[key];
        } else {
          averageDataObject[key] += chartLineData[key];
        }

        //  airline series
        thisAirlineArray.push(chartLineData[key]);
      });

      vt.chartLineCharts.push(thisAirlineArray);
    });
    // adds average series
    vt.chartLineSeries.push(averageSeriesName);

    var averageDataArray = Object.values(averageDataObject);

    angular.forEach(averageDataArray, function(value, key) {
      averageDataArray[key] = value / vt.chartLineSeries.length - 1;
    });

    vt.chartLineCharts.push(averageDataArray);
  });

  vt.chartLineOptions = {
    maintainAspectRatio: false,
    responsive: true
  };

  vt.chartLineColours = ["#494750", "#cc3321"];

  $scope.form = {
    "year": "all"
  }
});
