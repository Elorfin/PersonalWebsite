(function () {
    'use strict';

    angular.module('ThreeJSModule').directive('thAmbientLight', function () {
        return {
            require: '^thScene',
            restrict: 'E',
            replace: true,
            template: '',
            scope: {
                debug: '='
            },
            link: function ($scope, element, attrs) {

            }
        };
    });
})();