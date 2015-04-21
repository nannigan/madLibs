angular.module('madLibs', [])
.controller('madController', function($scope){
	$scope.humanname = "";
	$scope.thc = "";
	$scope.animal = "";
	$scope.name =  "";
	$scope.animalnoise =  "";
	$scope.uselessskill =  "";
	$scope.fooditem =  "";
	$scope.drink =  "";
	$scope.language =  "";
	$scope.web =  "";
	// $scope.gender ='female' || 'male';
	$scope.gender = 'female' ? 'female' : 'male';
	var gen = jQuery.input('#gen');
	console.log(gen);
	if (gen.checked === true ){$scope.gender = 'male';}
	}
);