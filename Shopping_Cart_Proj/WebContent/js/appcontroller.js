var c = angular.module("CtrlModule",["appServices"], function(){
	console.log("CTRL module instantiated.....");
});


c.value("vcart", []);


c.controller("ProductController", function($scope,$location,ProductService,cartService) {
	$scope.num = 3;
	var flag;

	$scope.productsList = ProductService.getAllProducts();
	
	
	$scope.addToCart = function(product){
		
		cartService.addToCart(product);
	};
	
	$scope.save = function() {
		
		if($scope.newProduct.id != undefined){
			 ProductService.updateProduct(flag, $scope.newProduct);
		}
		else {
		ProductService.addProduct($scope.newProduct);
		
		}
		
		$scope.newProduct = {};
	}
	
	$scope.edit = function(idx, product){
		$scope.newProduct = angular.copy(product);
		flag = idx;
		
	}
	
	$scope.clearAllData = function(){
		
	     $scope.newProduct = {};
	}
	
	$scope.remove = function(idx) {
		ProductService.removeProduct(idx);
	}
	
	$scope.load = function(){
		
		$scope.num++;
	}
	
	
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
        $scope.currentIndex = ($scope.currentIndex < $scope.productsList.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.productsList.length - 1;
    };

});



c.controller("CartController", function($scope, cartService){
	

	$scope.cart = cartService.getAllCartItems();
	
	$scope.remove = function(idx){
	
		cartService.removeItem(idx);
		
	}
	
	$scope.totalAmount = function() {
		return cartService.totalAmount();
	}
	
});


c.controller("DetailsController", function($scope, $routeParams) {
	
	$scope.details = angular.fromJson($routeParams.productinfo);
})



