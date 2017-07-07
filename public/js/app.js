'use strict';

angular.module('catlogApp', ['catlogApp.controllers','catlogApp.services','ui.router','ngResource'])


.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'nav': {
                        templateUrl : 'views/nav.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })

            // route for the cart page
            .state('app.summary', {
                url:'summary',
                views: {
                    'content@': {
                        templateUrl : 'views/cart.html',
                        controller  : 'CartController'
                    }
                }
            })

            // route for the aboutus page
            .state('app.anchoring', {
                url:'anchoring',
                views: {
                    'content@': {
                        templateUrl : 'views/anchoring.html',
                        controller  : 'anchoringController'
                    }
                }
            })

            // route for the boat hardware page
            .state('app.boathardware', {
                url:'boathardware',
                views: {
                    'content@': {
                        templateUrl : 'views/boat_hardware.html',
                        controller  : 'boathardwareController'
                    }
                }
            })

            // route for the boats and motors page
            .state('app.boatsandmotors', {
                url:'boatsandmotors',
                views: {
                    'content@': {
                        templateUrl : 'views/boats_and_motors.html',
                        controller  : 'boatsandmotorsController'
                    }
                }
            })

            // route for the clothing page
            .state('app.clothing', {
                url:'clothing',
                views: {
                    'content@': {
                        templateUrl : 'views/clothing.html',
                        controller  : 'clothingController'
                    }
                }
            })

            // route for the diving page
            .state('app.divebuddy', {
                url:'diving',
                views: {
                    'content@': {
                        templateUrl : 'views/divebuddy.html',
                        controller  : 'divingController'
                    }
                }
            })

            // route for the electrical page
            .state('app.electrical', {
                url:'electrical',
                views: {
                    'content@': {
                        templateUrl : 'views/electrical.html',
                        controller  : 'electricalController'
                    }
                }
            })

            // route for the electronic page
            .state('app.electronic', {
                url:'electronic',
                views: {
                    'content@': {
                        templateUrl : 'views/electronic.html',
                        controller  : 'electronicController'
                    }
                }
            })

            // route for the fishing page
            .state('app.fishing', {
                url:'fishing',
                views: {
                    'content@': {
                        templateUrl : 'views/fishing.html',
                        controller  : 'fishingController'
                    }
                }
            })

            // route for the guides page
            .state('app.guides', {
                url:'guides',
                views: {
                    'content@': {
                        templateUrl : 'views/guides.html',
                        controller  : 'guidesController'
                    }
                }
            })

            // route for the interior page
            .state('app.interior', {
                url:'interior',
                views: {
                    'content@': {
                        templateUrl : 'views/interior.html',
                        controller  : 'interiorController'
                    }
                }
            })

            // route for the maintenance page
            .state('app.maintenance', {
                url:'maintenance',
                views: {
                    'content@': {
                        templateUrl : 'views/maintenance.html',
                        controller  : 'maintenanceController'
                    }
                }
            })

            // route for the plumbing page
            .state('app.plumbing', {
                url:'plumbing',
                views: {
                    'content@': {
                        templateUrl : 'views/plumbing.html',
                        controller  : 'plumbingController'
                    }
                }
            })

            // route for the rigging page
            .state('app.rigging', {
                url:'rigging',
                views: {
                    'content@': {
                        templateUrl : 'views/rigging.html',
                        controller  : 'riggingController'
                    }
                }
            })

            // route for the safety page
            .state('app.safety', {
                url:'safety',
                views: {
                    'content@': {
                        templateUrl : 'views/safety.html',
                        controller  : 'safetyController'
                    }
                }
            })




            ;

        $urlRouterProvider.otherwise('/');
    })
;
