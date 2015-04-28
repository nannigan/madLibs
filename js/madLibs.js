angular.module('madLibs', ['ngMessages'])
.controller('madController', function($scope){

		$scope.anew = true;//default when page loads
		$scope.newgame = function(){
			
			// $scope.myForm.$setPristine();
			// $scope.myForm.$setUntouched();
			$scope.anew = true;
			$scope.petname = '';
			$scope.humanname = '';
			$scope.language = '';
			$scope.fooditem = '';
			$scope.drink = '';
			$scope.thc = '';
			$scope.animalnoise = '';
			$scope.uselessskill = '';
			$scope.gender = '';
			$scope.webthing = '';
			$scope.animal = '';
			// $scope.myForm.reset();
};
	

	
		
	}
);

