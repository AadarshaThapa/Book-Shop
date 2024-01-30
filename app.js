var myApp = angular.module("myTodo", ["ngRoute"]);

myApp.config(function($routeProvider){
    $routeProvider
    .when("/books",{
        templateUrl:"partials/book-list.html",
        controller:"BookListCtrl"

    })
    .when("/cart",{
        templateUrl:"partials/cart-list.html",
        controller:"CartListCtrl"

    })
    .otherwise({
        redirectTo: "/books"
    })
})

myApp.controller("myController",function($scope) {
    $scope.appDetails = {};
    $scope.appDetails.title= "BookCart";
    $scope.appDetails.tagline= "We have 1 million books";
})

myApp.controller("BookListCtrl",function($scope, bookService, cartService) {
    $scope.books = bookService.getBooks();

    $scope.addtoCart  = function(book){
        cartService.addToCart(book);
    }
   
})

myApp.controller("CartListCtrl",function($scope,cartService) {
    $scope.cart = cartService.getCart();

    $scope.buy = function(book){
        cartService.buy(book);
    }
})

myApp.factory("cartService", function(){
    var cart = [];

    return{
        getCart: function(){
            return cart;

        },
        addToCart: function(book){
            cart.push(book);

        },
        buy: function(book){
            alert("Thanks for shopping !",book.name)


        },
    }
})



myApp.factory("bookService", function(){
    var books=[
        {
            imgUrl: "images/deepwork.jpeg",
            name: "Deep Work",
            price: 205,
            rating: 4.5,
            binding: "Paperback",
            publisher: "Cal Newpoert",
            releaseDate: "12-08-2018",
            details: "A comprehensive perspective on how to cultivate the ability for deep concentration to produce magnificent results."
        },

        {
            imgUrl: "images/why-we-sleep.jpg",
            name: "Why We Sleep",
            price: 295,
            rating: 4.3,
            binding: "Paperback",
            publisher: "Walker",
            releaseDate: "12-08-2018",
            details: "How we can harness sleep to improve learning, mood, and energy levels, regulate hormones."
        }
    ];
    return{
        getBooks: function(){
            return books;
        }
    }
})

