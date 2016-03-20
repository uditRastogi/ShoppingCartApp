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
	
	
	
	$scope.imageList = [{url: "images/home/product1.jpg",desc:"product1"},
	                    {url: "images/home/product2.jpg",desc:"product2"},
	                    {url: "images/home/product3.jpg",desc:"product3"},
	                    {url: "images/home/product4.jpg",desc:"product4"},
	                    {url: "images/home/product5.jpg",desc:"product5"},
	                    {url: "images/home/product6.jpg",desc:"product6"}];
	
	$scope.showGallery = function(index){
		$scope.currentIndex = index;
		$location.path("/showGallery");
	}
    
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };

    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.imageList.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.imageList.length - 1;
    };


});



		                      