
app.controller("capexController", function ($scope, $http) {
	$scope.capexes = []; //{"id":1,"title":"House Loan EMI","description":"House load EMI for the month of August","ex_type":1,"amount":30000.0,"url":"http://127.0.0.1:3000/capexes/1.json"},{"id":2,"title":"Dinner","description":"Dinner with family","ex_type":1,"amount":2000.0,"url":"http://127.0.0.1:3000/capexes/2.json"},{"id":3,"title":"Titan watch","description":"Titan watch for myself","ex_type":1,"amount":2000.0,"url":"http://127.0.0.1:3000/capexes/3.json"}];
	$scope.errorMessage = '';

	
	$http({ method: 'GET', url: 'http://127.0.0.1:3000/capexes.json' }).
            success(function (data, status, headers, config) {
                $scope.capexes = data;
            }).
            error(function (data, status, headers, config) {
                $scope.errorMessage = "no such city found";
            });

});