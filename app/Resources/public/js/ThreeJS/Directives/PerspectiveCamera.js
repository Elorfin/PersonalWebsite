(function () {
    'use strict';

    angular.module('ThreeJSModule').directive('thPerspectiveCamera', ['$window', 'POSITIONABLE', function ($window, POSITIONABLE) {
        console.log('I am called.');
        return {
            restrict: 'E',
            replace: true,
            template: '',
            scope: angular.extend(
                POSITIONABLE,
                {
                    fov:    '=?',
                    aspect: '=?',
                    near:   '=?',
                    far:    '=?'
                }
            ),
            require: '^thScene',
            link: function ($scope, element, attrs, SceneController) {
                console.log('I am called.');
            }
        };
    }]);
})();