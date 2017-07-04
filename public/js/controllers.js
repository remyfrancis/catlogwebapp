'use strict';

angular.module('catlogAppController')

.controller('anchoringController', ['$scope', '$routeParams', 'anchoringFactory', 'baseURL', function($scope, $routeParams, anchoringFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.anchoring = anchoringFactory.query();

}])


.controller('boathardwareController', ['$scope', '$routeParams', 'boathardwareFactory', 'baseURL', function($scope, $routeParams, boathardwareFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.boathardware = boathardwareFactory.query();

}])

.controller('boatsandmotorsController', ['$scope', '$routeParams', 'boatsandmotorsFactory', 'baseURL', function($scope, $routeParams, boatsandmotorsFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.boatsandmotors = boatsandmotorsFactory.query();

}])

.controller('clothingController', ['$scope', '$routeParams', 'clothingFactory', 'baseURL', function($scope, $routeParams, clothingFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.clothing = clothingFactory.query();

}])

.controller('divingController', ['$scope', '$routeParams', 'divingFactory', 'baseURL', function($scope, $routeParams, divingFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.diving = divingFactory.query();

}])

.controller('electricalController', ['$scope', '$routeParams', 'electricalFactory', 'baseURL', function($scope, $routeParams, electricalFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.electrical = electricalFactory.query();

}])

.controller('electronicController', ['$scope', '$routeParams', 'electronicFactory', 'baseURL', function($scope, $routeParams, electronicFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.electronic = electronicFactory.query();

}])

.controller('fishingController', ['$scope', '$routeParams', 'fishingFactory', 'baseURL', function($scope, $routeParams, fishingFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.fishing = fishingFactory.query();

}])

.controller('guidesController', ['$scope', '$routeParams', 'guidesFactory', 'baseURL', function($scope, $routeParams, guidesFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.guides = guidesFactory.query();

}])

.controller('interiorController', ['$scope', '$routeParams', 'interiorFactory', 'baseURL', function($scope, $routeParams, interiorFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.interior = interiorFactory.query();

}])

.controller('maintenanceController', ['$scope', '$routeParams', 'maintenanceFactory', 'baseURL', function($scope, $routeParams, maintenanceFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.maintenance = maintenanceFactory.query();

}])

.controller('plumbingController', ['$scope', '$routeParams', 'plumbingFactory', 'baseURL', function($scope, $routeParams, plumbingFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.plumbing = plumbingFactory.query();

}])

.controller('riggingController', ['$scope', '$routeParams', 'riggingFactory', 'baseURL', function($scope, $routeParams, riggingFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.rigging = riggingFactory.query();

}])

.controller('safetyController', ['$scope', '$routeParams', 'safetyFactory', 'baseURL', function($scope, $routeParams, safetyFactory, baseURL) {

            $scope.baseURL = baseURL;
            $scope.safety = safetyFactory.query();

}])
;
