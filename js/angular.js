var app = angular.module('blog', []);

app.controller('commentController', function($scope, $http){

});

app.controller('postController', function($scope, $http){
	this.url = 'http://jsonplaceholder.typicode.com/posts';
	$scope.posts = [];

	$http.get(this.url).then(function(response){
		$scope.posts = response.data;
		console.log($scope.posts);
	});
	
});

app.controller('userController', function($scope, $http){
	this.url = 'http://jsonplaceholder.typicode.com/users';
	this.valid = false;
	this.loggedUser = {};
	$scope.email = "";
	this.submitForm = function(){
		$http.get(this.url).then(function(response){
			console.log(response.data);
			response.data.forEach(function(responseUser){
				if($scope.email == responseUser.email){
					this.loggedUser = responseUser;
					this.valid = true;
				}
			});
			console.log(this.loggedUser);
		});
	};

});