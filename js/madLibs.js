angular.module('madLibs', ['ngMessages', 'ngAnimate'])
.controller('madController', function($scope){

		$scope.aNewOne = true;//default when page loads

		$scope.animateData = true;


		$scope.newgame = function(){
			
			$scope.myForm.$setPristine();
			$scope.myForm.$setUntouched();
			$scope.aNewOne = true;

			$scope.data={
						petname :'',
						humanname :'',
						language :'',
						fooditem :'',
						drink :'',
						thc :'',
						animalnoise :'',
						uselessskill :'',
						gender :'',
						webthing :'',
						animal :''
				};
		};
	
	}
);

