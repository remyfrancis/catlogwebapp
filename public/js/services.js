'use strict';

angular.module('catlogApp.services', ['ngResource'])
        .constant("baseURL","mongodb://Remz:yadmon@ds133221.mlab.com:33221/catlogappdatabase/")


        .factory("anchoringFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"anchoring/:id", {}, {
              query: {method: "GET", isArray: true}});
        }])

        .factory("boathardwareFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"boathardware/:id", {}, {
            query: {method: "GET", isArray: true}
            });
        }])

        .factory("boatsandmotorsFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"boatsandmotors/:id", {}, {
              query: {method: "GET", isArray:true}
            });
        }])

        .factory("clothingFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"clothing/:id", {}, {
              query: {method: "GET", isArray:true}
            });
        }])

        .factory("divingFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"diving/:id", {}, {
              query: {method: "GET", isArray:true}
            });
        }])

        .factory("electricalFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"electrical/:id", {}, {
              query: {method: "GET", isArray:true}
            });
        }])

        .factory("electronicFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"electronic/:id", {}, {
              query: {method: "GET", isArray:true}
            });
        }])

        .factory("fishingFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"fishing/:id", {}, {
              query: {method: "GET", isArray:true}
            });
        }])

        .factory("guidesFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"guides/:id", {}, {
              query: {method: "GET", isArray:true}
            });
        }])

        .factory("interiorFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"interior/:id", {}, {
              query: {method: "GET", isArray:true}
            });
        }])

        .factory("maintenanceFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"maintenance/:id", {}, {
              query: {method: "GET", isArray:true}
            });
        }])

        .factory("plumbingFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"plumbing/:id", {}, {
              query: {method: "GET", isArray:true}
            });
        }])

        .factory("safetyFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"safety/:id", {}, {
              query: {method: "GET", isArray:true}
            });
        }])

        .factory("riggingFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"rigging/:id", {}, {
              query: {method: "GET", isArray:true}
            });
        }])


;
