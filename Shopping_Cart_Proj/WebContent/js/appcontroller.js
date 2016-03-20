var c = angular.module("CtrlModule",["appServices"], function(){
	console.log("CTRL module instantiated.....");
});


c.value("vcart", []);


c.controller("ProductController", function($scope,ProductService,cartService) {
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



