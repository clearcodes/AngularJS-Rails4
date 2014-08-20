
app.controller("capexController", function ($scope, $http) {
    

    $scope.capexes = [];
    $scope.errorMessage;
    $scope.detail = false;
    $scope.edit = false;
    $scope.newitem = false;

    //Detail Scope

    $scope.id_show;
    $scope.title_show;
    $scope.description_show;
    $scope.ex_type_show;
    $scope.amount_show;
    $scope.created_at_show;

    $scope.predicate = 'title';


    $http({ method: 'GET', url: 'http://127.0.0.1:3000/capexes.json' }).
            success(function (data, status, headers, config) {
                $scope.capexes = data;
            }).
            error(function (data, status, headers, config) {
                $scope.errorMessage = "something went wrong";
            });

     $scope.CreateItem = function() {
    	$scope.edit = false;
    	$scope.detail = false;
    	$scope.newitem = true;
     };

	 $scope.CancelNew = function() {
    	$scope.edit = false;
    	$scope.detail = false;
    	$scope.newitem = false;
     };

     $scope.DeleteItem = function(id) {	
     	var response = confirm("Are you sure to delete this record?");
     	if (response == 0)
     		return false;
     	$http.delete("http://127.0.0.1:3000/capexes/" + id + '.json', {
    								title: $scope.title_new,
    								description: $scope.description_new,
    								ex_type: $scope.type_new,
    								amount: $scope.amount_new
		}).
		success(function (data, status, headers, config) {

			$http({ method: 'GET', url: 'http://127.0.0.1:3000/capexes.json' }).
            success(function (data, status, headers, config) {
                $scope.capexes = data;
            }).
            error(function (data, status, headers, config) {
                $scope.errorMessage = "something went wrong";
            });

	    $scope.edit = false;
    	$scope.detail = false;
    	$scope.newitem = false;

		}).
		error(function (data, status, headers, config) {

    	$scope.errorMessage = "something went wrong";

		});
     };

     $scope.NewModeSave = function() {

     	$http.post("http://127.0.0.1:3000/capexes.json", {
    								title: $scope.title_new,
    								description: $scope.description_new,
    								ex_type: $scope.type_new,
    								amount: $scope.amount_new
		}).
		success(function (data, status, headers, config) {

			$http({ method: 'GET', url: 'http://127.0.0.1:3000/capexes.json' }).
            success(function (data, status, headers, config) {
                $scope.capexes = data;
            }).
            error(function (data, status, headers, config) {
                $scope.errorMessage = "something went wrong";
            });

	    $scope.title_new = '';
    	$scope.description_new = '';
    	$scope.type_new = '';
    	$scope.amount_new = '';
    	$scope.newitem = false;

		}).
		error(function (data, status, headers, config) {

    	$scope.errorMessage = "something went wrong";

		});

    	
     };


     $scope.EditMode = function() {
    	$scope.edit = true;
     };

     $scope.CancelEdit = function() {
    	$scope.edit = false;
     };

     $scope.EditModeSave = function() {
     	$http.put("http://127.0.0.1:3000/capexes/" + $scope.id_show + ".json", {
     								id: $scope.id_show, 
    								title: $scope.title_show,
    								description: $scope.description_show,
    								ex_type: $scope.ex_type_show,
    								amount: $scope.amount_show
		}).
		success(function (data, status, headers, config) {

			$http({ method: 'GET', url: 'http://127.0.0.1:3000/capexes.json' }).
            success(function (data, status, headers, config) {
                $scope.capexes = data;
                $scope.edit = false;
            }).
            error(function (data, status, headers, config) {
                $scope.errorMessage = "something went wrong";
            });

		}).
		error(function (data, status, headers, config) {

    	$scope.errorMessage = "something went wrong";

		});
    	$scope.edit = false;
     };

    $scope.ShowDetail = function(id) {
      for (i = 0; i < $scope.capexes.length; i++) {
            if ($scope.capexes[i].id == id) {
            	$scope.detail = true;
            	$scope.newitem = false;
            	$scope.edit=false;
                $scope.id_show =  $scope.capexes[i].id;
                $scope.title_show =  $scope.capexes[i].title;
                $scope.description_show =  $scope.capexes[i].description;
                $scope.ex_type_show =  $scope.capexes[i].ex_type;
                $scope.amount_show =  $scope.capexes[i].amount;
                $scope.created_at_show =  $scope.capexes[i].created_at;
                break;
            }
        }
        
    };
});