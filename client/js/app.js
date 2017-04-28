var app = angular.module('myProject', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'client/home.html'
    })
    .when('/#putproject', {
        templateUrl : 'client/project/putProject.html',
        controller : 'putCtrl'
    })
    .when('/deleteproject', {
        templateUrl : 'client/project/deleteProject.html'
    })
    .when('/getproject', {
        templateUrl : 'client/project/getProject.html'
    })
    .when('/postproject', {
        templateUrl : 'client/project/postProject.html'
    })
    .otherwise({
    	redirectTo : '/'
    });
});

app.controller('putCtrl', function(){
    alert("helo");
})