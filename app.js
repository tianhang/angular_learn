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

  $scope.tianhang = "TIANHANG"
  console.log("outer ctrl");
  console.log($scope.demo2);
});
app.directive('demoModel', function () {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      
    },
    templateUrl:"demo2.html"
  };
});

app.directive("unorderedList", function() {
  return {
    link: function(scope, element, attrs,ctrl) {
      console.log(scope);
      console.log(element);
      console.log(attrs);
      var data = attrs["unorderedList"];
      //console.table(data);
      console.log("link------------");
    },
    replace:true,
    scope:{
      demo:'=paDemo'
    },
    controller:function ($scope) {
      $scope.demo = "12345";
      $scope.demo2 = "1234544444";
      console.log("inner ctrl");
      // body...
    },
    template:"<div>Name:--{{demo2}}-- <input ng-model='demo' /></div>",
  }
});