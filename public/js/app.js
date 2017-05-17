'use strict';

angular.module('catlogApp', ['ngCart', 'ngRoute', 'catlogApp.controllers', 'catlogApp.services'])

//Application Routes

.config(function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
          enabled: true
        });
        $routeProvider


                    // route for the home page
            .when('/', {
                templateUrl:'views/home.html',
                controller:''
              })

                    // route for the Quote page
            .when('/summary', {
                templateUrl:'views/template/ngCart/cart.html',
                controller:'CartController'
              })

                    // route for the Anchoring page
            .when('/anchoring', {
                templateUrl:'views/anchoring.html',
                controller:'anchoringController'
              })

                    // route for the Boat Hardware page
            .when('/boathardware', {
                templateUrl:'views/boat_hardware.html',
                controller:'boathardwareController'
              })

                  // route for the Boats & Motors page
            .when('/boatsandmotors', {
            templateUrl:'views/boats_and_motors.html',
            controller:'boatsandmotorsController'
            })

                  // route for the Clothing page
            .when('/clothing', {
            templateUrl:'views/clothing.html',
            controller:'clothingController'
            })

                  // route for the Diving page
            .when('/divebuddy', {
            templateUrl:'views/divebuddy.html',
            controller:'divingController'
            })

                  // route for the Electrical page
            .when('/electrical', {
            templateUrl:'views/electrical.html',
            controller:'electricalController'
            })

                  // route for the Electronic page
            .when('/electronic', {
            templateUrl:'views/electronic.html',
            controller:'electronicController'
            })

                  // route for the Fishing page
            .when('/fishing', {
            templateUrl:'views/fishing.html',
            controller:'fishingController'
            })

                  // route for the Guides page
            .when('/guides', {
            templateUrl:'views/guides.html',
            controller:'guidesController'
            })

                  // route for the Interior page
            .when('/interior', {
            templateUrl:'views/interior.html',
            controller:'interiorController'
            })

                  // route for the Maintenance page
            .when('/maintenance', {
            templateUrl:'views/maintenance.html',
            controller:'maintenanceController'
            })

                  // route for the Plumbing page
            .when('/plumbing', {
            templateUrl:'views/plumbing.html',
            controller:'plumbingController'
            })

                  // route for the Rigging page
            .when('/rigging', {
            templateUrl:'views/rigging.html',
            controller:'riggingController'
            })

                  // route for the Safety page
            .when('/safety', {
            templateUrl:'views/safety.html',
            controller:'safetyController'
            })


            // if none of the above states are matched, use this as the fallback
            .otherwise('views/home.html');
    })
