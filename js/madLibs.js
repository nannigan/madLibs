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
	$scope.gender ='female' || 'male';
	//does default to female in initial dom state
	// jQuery("#gen").on ('click', function(){
	// var foo = jQuery("#gen");
	
	// 	if(foo.prop('checked'))
	// 		{
	// 			gender = 'male';
	// 			console.log('yep checked');
	// 			//does log, but doesn not change 
	// 			//ng-if 
	// 		}else {
	// 			gender = 'female';
	// 			// for unchecking
	// 		}
	// 	});
	
	}
);

