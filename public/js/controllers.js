'use strict';


angular.module('catlogApp.controllers',[])


.controller('anchoringController', ['$scope', '$stateParams', 'anchoringFactory', 'baseURL', function($scope, $stateParams, anchoringFactory, baseURL) {


            $scope.showAnchoring = false;
            $scope.message = "Loading ...";

            anchoringFactory.query(
                function (response) {
                    $scope.anchoring = response;
                    $scope.showAnchoring = true;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
              );


  }])


.controller('boathardwareController', ['$scope', '$stateParams', 'boathardwareFactory', 'baseURL', function($scope, $stateParams, boathardwareFactory, baseURL) {

        $scope.showBoathardware = false;
        $scope.message = "Loading ...";

        boathardwareFactory.query(
            function (response) {
                $scope.boathardware = response;
                $scope.showBoathardware = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])

.controller('boatsandmotorsController', ['$scope', '$stateParams', 'boatsandmotorsFactory', 'baseURL', function($scope, $stateParams, boatsandmotorsFactory, baseURL) {

        $scope.showBoatsandmotors = false;
        $scope.message = "Loading ...";

        boatsandmotorsFactory.query(
            function (response) {
                $scope.boatsandmotors = response;
                $scope.showBoatsandmotors = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])

.controller('clothingController', ['$scope', '$stateParams', 'clothingFactory', 'baseURL', function($scope, $stateParams, clothingFactory, baseURL) {

        $scope.showClothing = false;
        $scope.message = "Loading ...";

        clothingFactory.query(
            function (response) {
                $scope.clothing = response;
                $scope.showClothing = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])

.controller('divingController', ['$scope', '$stateParams', 'divingFactory', 'baseURL', function($scope, $stateParams, divingFactory, baseURL) {

        $scope.showDiving = false;
        $scope.message = "Loading ...";

        divingFactory.query(
            function (response) {
                $scope.diving = response;
                $scope.showDiving = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])

.controller('electricalController', ['$scope', '$stateParams', 'electricalFactory', 'baseURL', function($scope, $stateParams, electricalFactory, baseURL) {

        $scope.showElectrical = false;
        $scope.message = "Loading ...";

        electricalFactory.query(
            function (response) {
                $scope.electrical = response;
                $scope.showElectrical = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])

.controller('electronicController', ['$scope', '$stateParams', 'electronicFactory', 'baseURL', function($scope, $stateParams, electronicFactory, baseURL) {

        $scope.showElectronic = false;
        $scope.message = "Loading ...";

        electronicFactory.query(
            function (response) {
                $scope.electronic = response;
                $scope.showElectronic = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])

.controller('fishingController', ['$scope', '$stateParams', 'fishingFactory', 'baseURL', function($scope, $stateParams, fishingFactory, baseURL) {

        $scope.showFishing = false;
        $scope.message = "Loading ...";

        fishingFactory.query(
            function (response) {
                $scope.fishing = response;
                $scope.showFishing = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])

.controller('guidesController', ['$scope', '$stateParams', 'guidesFactory', 'baseURL', function($scope, $stateParams, guidesFactory, baseURL) {

        $scope.showGuides = false;
        $scope.message = "Loading ...";

        guidesFactory.query(
            function (response) {
                $scope.guides = response;
                $scope.showGuides = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])

.controller('interiorController', ['$scope', '$stateParams', 'interiorFactory', 'baseURL', function($scope, $stateParams, interiorFactory, baseURL) {

        $scope.showInterior = false;
        $scope.message = "Loading ...";

        interiorFactory.query(
            function (response) {
                $scope.interior = response;
                $scope.showInterior = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])

.controller('maintenanceController', ['$scope', '$stateParams', 'maintenanceFactory', 'baseURL', function($scope, $stateParams, maintenanceFactory, baseURL) {

        $scope.showMaintenance = false;
        $scope.message = "Loading ...";

        maintenanceFactory.query(
            function (response) {
                $scope.maintenance = response;
                $scope.showMaintenance = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])

.controller('plumbingController', ['$scope', '$stateParams', 'plumbingFactory', 'baseURL', function($scope, $stateParams, plumbingFactory, baseURL) {

        $scope.showPlumbing = false;
        $scope.message = "Loading ...";

        plumbingFactory.query(
            function (response) {
                $scope.plumbing = response;
                $scope.showPlumbing = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])

.controller('riggingController', ['$scope', '$stateParams', 'riggingFactory', 'baseURL', function($scope, $stateParams, riggingFactory, baseURL) {

        $scope.showRigging = false;
        $scope.message = "Loading ...";

        riggingFactory.query(
            function (response) {
                $scope.rigging = response;
                $scope.showRigging = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])

.controller('safetyController', ['$scope', '$stateParams', 'safetyFactory', 'baseURL', function($scope, $stateParams, safetyFactory, baseURL) {

        $scope.showSafety = false;
        $scope.message = "Loading ...";

        safetyFactory.query(
            function (response) {
                $scope.safety = response;
                $scope.showSafety = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
          );

}])
;
