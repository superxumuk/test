﻿angular.module('clientsApp').controller('clientsCtrl', function($scope) { 
    $scope.clients = [ 
        { id: 1, fname: 'Илья', lname: 'Иванов', comt: 'fghfgh' }, 
        { id: 2, fname: 'Виталий', lname: 'Петров', comt: 'hbjkhjk' }, 
        { id: 3, fname: 'Александр', lname: 'Сидоров', comt: 'rttry' }, 
        { id: 4, fname: 'Евгений', lname: 'Пашков', comt: '' },
		{ id: 5, fname: 'Светлана', lname: 'Моисеева', comt: 'gfngfng' }		
    ]; 
	
	$scope.create = function() { 
		$scope.newClient.id = $scope.clients.length + 1; 
		$scope.clients.push($scope.newClient); 
		$scope.newClient = null; 
	};
	
	$scope.delete = function(client) { 
		var index = $scope.clients.indexOf(client); 
		$scope.clients.splice(index, 1); 
	};
});
