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
	          
	        }
	      ]
	    },
	    {
	      "name": 'family 2',
	      "points": [
	        {
	          	text: 'Father, Amram',
	          	scripture: 'Ex.6.90'
	          
	        }
	      ]
	    },
	    {
	      "name": 'family 2',
	      "points": [
	        {
	          	text: 'Father, Amram',
	          	scripture: 'Ex.6.90'
	          
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
	          
	        }
	      ]
	    },
	    {
	      "name": 'family 2',
	      "points": [
	        {
	          	text: 'Father, Amram',
	          	scripture: 'Ex.6.90'
	          
	        }
	      ]
	    },
	    {
	      "name": 'family 2',
	      "points": [
	        {
	          	text: 'Father, Amram',
	          	scripture: 'Ex.6.90'
	          
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
	          
	        }
	      ]
	    },
	    {
	      "name": 'family 2',
	      "points": [
	        {
	          	text: 'Father, Amram',
	          	scripture: 'Ex.6.90'
	          
	        }
	      ]
	    },
	    {
	      "name": 'family 2',
	      "points": [
	        {
	          	text: 'Father, Amram',
	          	scripture: 'Ex.6.90'
	          
	        }
	      ]
	    },
	    {
	      "name": 'family 2',
	      "points": [
	        {
	          	text: 'Father, Amram',
	          	scripture: 'Ex.6.90'
	          
	        }
	      ]
	    },
	    {
	      "name": 'family 2',
	      "points": [
	        {
	          	text: 'Father, Amram',
	          	scripture: 'Ex.6.90'
	          
	        }
	      ]
	    }
	];

	// @desc return roman numeral of #'s 1-39
	$scope.convertToRomanNumeral = function(x) {
		if (isNaN(x)) return null;
		var y = Math.abs(Math.floor(x)),
			y = y.toString();

		function oneThruNine(i) {
			switch (i) {
				case '0': 
					return '';
					break;
				case '1': 
					return 'I';
					break;
				case '2': 
					return 'II';
					break;
				case '3': 
					return 'III';
					break;
				case '4': 
					return 'IV';
					break;
				case '5': 
					return 'V';
					break;
				case '6': 
					return 'VI';
					break;
				case '7': 
					return 'VII';
					break;
				case '8': 
					return 'VIII';
					break;
				case '9': 
					return 'IX';
					break;
			}
		}

		// single digit #
		if (y.length === 1) {
			return oneThruNine(y);
		}
		// 2 digit #
		else {
			if (y[0] === '1') {
				return 'X' + oneThruNine(y[1])
			}
			else if (y[0] === '2') {
				return 'XX' + oneThruNine(y[1])
			}
			else if (y[0] === '3') {
				return 'XXX' + oneThruNine(y[1])
			}
			else {
				return 'too large!'
			}
		}
	}

	//
	point
}]);