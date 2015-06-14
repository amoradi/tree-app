app.controller('MainController', ['$scope', function($scope) {

	// Initially, do not go into full screen
    $scope.isFullscreen = false;

    $scope.toggleFullScreen = function() {
        $scope.isFullscreen = !$scope.isFullscreen;
    };
	
	$scope.title = 'Tree of Moses\' Life';
	$scope.intro = ['The tree presents an outline study of the history of Moses beginning with his parentage and family, and ending with his reappearance after death at the transfiguration of Christ.', 'By comparing the numbers in the circles, which represent fruit on the tree, with the corresponding numbers given by the key, the main facts of this great life can be traced.'];

	$scope.keyTitle = 'The Key to The Tree of Moses\' Life';
	$scope.milestones = [
	    {
	      "name": 'family',
	      "points": [
	        {
				text: 'Father, Amram',
				scripture: 'Ex.6.20'	          
	        },
	        {
				text: 'Father, Amram',
				scripture: 'Ex.12.29'
	          
	        },
	        {
				text: 'Father, Amram',
				scripture: 'Ex.7.20'  
	        }
	      ]
	    },
	    {
	      "name": 'family 2',
	      "points": [
	        {
	          	text: 'Father, Amram',
	          	scripture: 'Ex.6.90'
	          
	        },
	        {
	        	submilestone: 'subname here',
				text: 'Father, Amram',
				scripture: 'Ex.12.49'
	          
	        },
	        {
				text: 'Father, Amram',
				scripture: 'Ex.7.20'  
	        }
	      ]
	    }
	];
}]);