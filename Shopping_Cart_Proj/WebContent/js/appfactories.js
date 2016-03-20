var f = angular.module("FactoryModule", []);

f.factory("productFactory", function() {
	
	var products=[{"code": "1001", "Name": "Fluted Hem Dress","Price" :1000, "Description":"Fluted Hem Dress", "imageURL":"images/home/product1.jpg"},
	                 {"code": "1002", "Name": "Green Tshirt","Price" :1200, "Description":"Green Tshirt","imageURL":"images/home/product2.jpg"},
	                 {"code": "1003", "Name": "Black Color Dress","Price" :2000, "Description":"Black Color Dress","imageURL":"images/home/product3.jpg"},
	                 {"code": "1004", "Name": "Navy Blue Dress","Price" :1500, "Description":"Navy Blue Dress","imageURL":"images/home/product4.jpg"},
	                 {"code": "1005", "Name": "Women Blue Tshirt","Price" :500, "Description":"Women Blue Tshirt","imageURL":"images/home/product5.jpg"},
	                 {"code": "1006", "Name": "White Tshirt","Price" :800, "Description":"White Tshirt","imageURL":"images/home/product6.jpg"}];
	
	return {
		getProucts: function(){
			return products;
		},
		addNewProduct: function(newProd){
			products.push(newProd);
		},
		removeProduct: function(idx) {
		  console.log(idx);
		  products.splice(idx,1);
			
		}
	    
	};
	
})


f.factory("cartFactory", function() {
	var cart = [];
	
	return {
		getCartItems : function(){
			return cart;
		},
	   
	    addCartItem : function(newVal){
	    	cart.push(newVal);
	    },
		
		deleteCartItem: function(index){
			cart.splice(index,1);
		}
		
	}
})