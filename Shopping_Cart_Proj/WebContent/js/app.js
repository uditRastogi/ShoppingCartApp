var app = angular.module('main-module',['ngRoute','CtrlModule']);


//For Navigation to different views
app.config(function($routeProvider) {
	console.log("My cart app configs......");

	$routeProvider.when("/", {
		templateUrl : 'partials/product_list_page.html',
		controller: "ProductController"
	})
	.when("/showGallery",{
		templateUrl: 'partials/gallery.html',
		controller: "ProductController"
	})
	.when("/cartPage",{
		templateUrl: 'partials/cart.html',
		controller:"CartController"
	})
	.when("/checkOut",{
		templateUrl: 'partials/checkout.html',
		controller:"CartController"
	})
	.otherwise("/");

});

//App Main controller
app.controller("mainController", function($scope, $location,$rootScope,cartService) {
	
	
	$scope.cart = cartService.getAllCartItems();
	
	$scope.checkCartItems = function(){
		if($scope.cart.length <= 0){
			return true;
		}
	  return false;
	}
	

});



		                      