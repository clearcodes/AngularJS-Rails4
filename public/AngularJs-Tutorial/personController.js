
app.controller("personController", function ($scope, $http) {
    $http.get('products.json').success(function (data) {
        $scope.products = data;
    });
});