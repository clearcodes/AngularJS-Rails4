
app.controller("weatherController", function ($scope, $http) {
    $scope.weatherData = [];
    $scope.errorMessage;
    $scope.search = function () {
        $http({ method: 'GET', url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + $scope.txtCity }).
            success(function (data, status, headers, config) {
                $scope.weatherData = data;
            }).
            error(function (data, status, headers, config) {
                $scope.errorMessage = "no such city found";
            });
    }
});