var app = angular.module('blog', []);

app.controller('commentController', function(){

});

app.controller('postController', function(){

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
				console.log(responseUser.email);
				console.log($scope.email);
				if($scope.email == responseUser.email){
					this.loggedUser = responseUser;
					this.valid = true;
				}
			});
			console.log(this.loggedUser);
		});
	};

});