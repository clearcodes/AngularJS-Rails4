app.controller('personDetailsController', function ($scope, $http, $routeParams) {
    $http.get('products.json').success(function (data) {
        for (i = 0; i < data.length; i++) {
            if (data[i].id == $routeParams.productId) {
                $scope.products =  data[i];
                break;
            }
        }
    });
});