var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  // body...
  $scope.products = [{
    name: "Apples",
    category: "Fruit",
    price: 1.20,
    expiry: 10
  }, {
    name: "Bananas",
    category: "Fruit",
    price: 2.42,
    expiry: 7
  }, {
    name: "Pears",
    category: "Fruit",
    price: 2.02,
    expiry: 6
  }];
});
app.directive("unorderedList", function() {
  return {
    link: function(scope, element, attrs) {
      console.log(scope);
      console.log(element);
      console.log(attrs);
      var data = attrs["unorderedList"];
      //console.table(data);
    },
    template:"<div class='panel-body'>Name: <input ng-model='name' /></div>",
  }
});