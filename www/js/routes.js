angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

        .state('home', {
          url: '/page0',
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl',
          resolve: {
            "check": function ($location) {
              if (localStorage.getItem('loggedin_id')) {
                $location.path('/page0');
              } else {
                $location.path('/page4');
              }
            }
          }
        })



          .state('menu', {
            url: '/page1',
            templateUrl: 'templates/menu.html',
            controller: 'menuCtrl',
            resolve: {
              "check": function ($location) {
                if (localStorage.getItem('loggedin_id')) {
                  $location.path('/page1');
                } else {
                  $location.path('/page4');
                }
              }
            }
          })





          .state('cart', {
            url: '/page2',
            templateUrl: 'templates/cart.html',
            controller: 'cartCtrl'
          })





          .state('checkOut', {
            url: '/page3',
            templateUrl: 'templates/checkOut.html',
            controller: 'checkOutCtrl'
          })







          .state('login', {
            url: '/page4',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl',
            resolve: {
              "check": function ($location) {
                if (localStorage.getItem('loggedin_id')) {
                  $location.path('/page0');
                } else {
                  $location.path('/page4');
                }
              }
            }
          })





          .state('signup', {
            url: '/page5',
            templateUrl: 'templates/signup.html',
            controller: 'signupCtrl'
          })





          .state('filterBy', {
            url: '/page6',
            templateUrl: 'templates/filterBy.html',
            controller: 'filterByCtrl'
          })





          .state('sortBy', {
            url: '/page7',
            templateUrl: 'templates/sortBy.html',
            controller: 'sortByCtrl'
          })





          .state('payment', {
            url: '/page8',
            templateUrl: 'templates/payment.html',
            controller: 'paymentCtrl'
          })





          .state('profile', {
            url: '/page9',
            templateUrl: 'templates/profile.html',
            controller: 'profileCtrl',
            resolve: {
              "check": function ($location) {
                if (localStorage.getItem('loggedin_id')) {
                  $location.path('/page9');
                } else {
                  $location.path('/page4');
                }
              }
            }
          })







          .state('myOrders', {
            url: '/page10',
            templateUrl: 'templates/myOrders.html',
            controller: 'myOrdersCtrl'
          })





          .state('editProfile', {
            url: '/page11',
            templateUrl: 'templates/editProfile.html',
            controller: 'editProfileCtrl'
          })





          .state('favorates', {
            url: '/page12',
            templateUrl: 'templates/favorates.html',
            controller: 'favoratesCtrl'
          })





          .state('productPage', {
            url: '/page13',
            templateUrl: 'templates/productPage.html',
            controller: 'productPageCtrl'
          })


          ;

          // if none of the above states are matched, use this as the fallback
          $urlRouterProvider.otherwise('/page0');

        });
