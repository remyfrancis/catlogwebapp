'use strict';


angular.module('catlogApp.services', ['ngResource'])
        .constant("baseURL","http://localhost:8080/")
        //.constant("baseURL","https://catlogproject.herokuapp.com/")


        .factory("anchoringFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"anchoring/:id", {}, {
            'update': {method: "PUT"}});
        }])

        .factory("boathardwareFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"boathardware/:id", {}, {
            'update': {method: "PUT"}});
        }])

        .factory("boatsandmotorsFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"boatsandmotors/:id", {}, {
              'update': {method: "PUT"}});
        }])

        .factory("clothingFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"clothing/:id", {}, {
              'update': {method: "PUT"}});
        }])

        .factory("divingFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"diving/:id", {}, {
              'update': {method: "PUT"}});
        }])

        .factory("electricalFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"electrical/:id", {}, {
              'update': {method: "PUT"}});
        }])

        .factory("electronicFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"electronic/:id", {}, {
              'update': {method: "PUT"}});
        }])

        .factory("fishingFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"fishing/:id", {}, {
              'update': {method: "PUT"}});
        }])

        .factory("guidesFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"guides/:id", {}, {
              'update': {method: "PUT"}});
        }])

        .factory("interiorFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"interior/:id", {}, {
              'update': {method: "PUT"}});
        }])

        .factory("maintenanceFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"maintenance/:id", {}, {
              'update': {method: "PUT"}});
        }])

        .factory("plumbingFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"plumbing/:id", {}, {
              'update': {method: "PUT"}});
        }])

        .factory("safetyFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"safety/:id", {}, {
              'update': {method: "PUT"}});
        }])

        .factory("riggingFactory", ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL+"rigging/:id", {}, {
              'update': {method: "PUT"}});
        }])


;
