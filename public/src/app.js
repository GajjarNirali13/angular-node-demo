angular
	.module('timeSlot', ['ui.router', 'ngMessages'])

	.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'src/templates/home.html'
        })
        .state('list', {
            url: '/list',
            templateUrl: 'src/templates/list.html',
            controller: 'TimeSlotListController',
            controllerAs: 'vm'
        })
        .state('detail', {
            url: '/detail/:id',
            templateUrl: 'src/templates/detail.html',
            controller: 'TimeSlotDetailController',
            controllerAs: 'vm'
        });        
});