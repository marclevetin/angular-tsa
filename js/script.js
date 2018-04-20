var app = angular.module("app", ["chart.js", "ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/home/home.html"
    })
    .when("/valuelost", {
      templateUrl: "pages/valuelost/valuelost.html"
    })
    .when("/averageclaims", {
      templateUrl: "pages/averageclaims/averageclaims.html"
    });
});