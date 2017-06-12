var app = angular.module('blog', []);

app.controller('commentController', function($scope, $http){
	$scope.comments = [];

	$http.get('http://jsonplaceholder.typicode.com/comments').then(function(response){
		console.log(response);
		$scope.comments = [];
		response.data.forEach(function(comment){
			if(!(comment.postId in $scope.comments)){
				$scope.comments[comment.postId] = [];
			}
			$scope.comments[comment.postId].push(comment);
		});
		console.log($scope.comments);
	});

	this.addComment = function(){
		// TODO
	};
});

app.controller('postController', function($scope, $http){
	this.url = 'http://jsonplaceholder.typicode.com/posts';
	$scope.posts = [];

	$http.get(this.url).then(function(response){
		$scope.posts = response.data;
	});
	
});

app.controller('userController', function($scope, $http){
	this.url = 'http://jsonplaceholder.typicode.com/users';
	$scope.userIsLogged = false;
	this.loggedUser = {};
	$scope.email = "";

	this.submitForm = function(){
		$http.get(this.url).then(function(response){
			response.data.forEach(function(responseUser){
				if($scope.email == responseUser.email){
					this.loggedUser = responseUser;
					$scope.userIsLogged = true;
				}
			});
		});
	};

	this.logout = function(){
		$scope.userIsLogged	 = false;
		this.loggedUser = {};
	};

});