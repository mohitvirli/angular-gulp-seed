"use strict";

app.controller('SampleControllerOne', ['$scope', function($scope) {

    //Controller code here.
    $scope.text = "This text is from SampleControllerOne";

}]);

app.controller('SampleControllerTwo', ['$scope', function($scope) {

    //Controller code here.
    $scope.text = "This text is from SampleControllerTwo";
}]);