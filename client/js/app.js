var app =angular.module('myProject', []);
/*app.controller('projectController',function($scope){
	$scope.projects = [{
		"projectId":102,
		"projectTitle":"live cricket",
		"projectDescription":"get the ipl score",
		"projectFeature":"crickets",
		"technologyUsed":"java, angular"
	}];
});
*/
app.controller('projectController', function($scope, $http) {
    $http.get('http://localhost:8080/projectmanagement/project/103').
        then(function(response) {
            $scope.projects = response.data;
        });
});