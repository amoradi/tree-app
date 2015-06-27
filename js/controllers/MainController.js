app.controller('MainController', ['$scope', function($scope) {

	// Initially, do not go into full screen
    $scope.isFullscreen = false;

    var toggle = false;

    // toggle fullscreen mode
    $scope.toggleFullScreen = function(e) {
        $scope.isFullscreen = !$scope.isFullscreen;
        angular.element('.nav-links span').blur();         
    };

    // change slide view
    $scope.toggleSlideView = function() {    	
    	var stage = angular.element(document.querySelector('#stage'));
    	stage.toggleClass('slideChange');

    	
    	if (!toggle) {
    		angular.element(document.querySelector('#toggleView')).html('<span class="faux-border"></span><span class="faux-border"></span>image view');
    		toggle = true;
    	}
    	else {
    		angular.element(document.querySelector('#toggleView')).html('<span class="faux-border"></span>list view');
    		toggle = false;
    	}
    };

    // info view
    $scope.showInfo = function() {
    
        angular.element(document.querySelectorAll('#infoModal, #percentScrn')).addClass('show');        
    };

    $scope.hideModal = function() {
        angular.element(document.querySelectorAll('#infoModal, #modal, #percentScrn')).removeClass('show');        
    };
	

	$scope.title = 'A Tree of Moses\' Life';
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

		function zeroThruNine(i) {
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
			return zeroThruNine(y);
		}
		// 2 digit #
		else {
			if (y[0] === '1') {
				return 'X' + zeroThruNine(y[1])
			}
			else if (y[0] === '2') {
				return 'XX' + zeroThruNine(y[1])
			}
			else if (y[0] === '3') {
				return 'XXX' + zeroThruNine(y[1])
			}
			else {
				return 'too large!'
			}
		}
	}

	//
	//point
}]);