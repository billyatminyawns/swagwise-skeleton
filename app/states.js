(function(angular) {
	var app = angular.module('Swagwise');

	app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
            })

            .state('cart', {
                 url: '/cart',
                 templateUrl: 'views/cart.html'
                 })
            .state('contact', {
                 url: '/contact',
                 templateUrl: 'views/contact.html'
                 }) 
            .state('login', {
                 url: '/login',
                 templateUrl: 'views/login.html'
                 })
            .state('about', {
                 url: '/about',
                 templateUrl: 'views/about.html'
                 })
            .state('swag', {
                url: '/swag',
                controller: 'SwagController',
                templateUrl: 'views/swag.html'
                })
            ;

    });
})(window.angular);