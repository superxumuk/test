angular.module('clientsApp').controller('clientsCtrl', function($scope) { 
    $scope.clients = [ 
        { id: 1, fname: 'Илья', lname: 'Иванов', comt: 'fghfgh' }, 
        { id: 2, fname: 'Виталий', lname: 'Петров', comt: 'hbjkhjk' }, 
        { id: 3, fname: 'Александр', lname: 'Сидоров', comt: 'rttry' }, 
        { id: 4, fname: 'Евгений', lname: 'Пашков', comt: '' },
		{ id: 5, fname: 'Светлана', lname: 'Моисеева', comt: 'gfngfng' }		
    ]; 
	
	$scope.create = function() { 
	 var index = $scope.clients.length -1; 
	 var index2 = $scope.clients[index].id; 
		$scope.newClient.id = index2 +1; 
		$scope.clients.push($scope.newClient); 
		$scope.newClient = null; 
	};
	
	$scope.delete = function(client) { 
		var index = $scope.clients.indexOf(client); 
		$scope.clients.splice(index, 1); 
	};

	$scope.edit = function(client) {
		$scope.activeClient = client;
	}; 
	
	$scope.update = function(client) { 
		$scope.activeClient = null; 
	};

});
