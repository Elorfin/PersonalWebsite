/**
 * ThreeJS Scene Directive
 *
 * @param {boolean} debug      Enable/Disable debug mode to display some debug tools (Grid, Axes, etc)
 * @param {string}  color      Clear color of the Renderer
 * @param {number}  width      Width of the Scene. If provided, enabling responsiveness will not affect width
 * @param {number}  height     Height of the Scene. If provided, enabling responsiveness will not affect height
 * @param {boolean} responsive Enable/disable responsiveness to resize Scene when window is resized
 */
(function () {
    'use strict';

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame
                                    || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    angular.module('ThreeJSModule').directive('thScene', ['$window', function ($window) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                debug:      '=?',
                color:      '=?',
                width:      '=?',
                height:     '=?',
                responsive: '=?'
            },
            controller: 'SceneController',
            controllerAs: 'ctrl',
            link: function ($scope, element, attrs, SceneController) {
                function resize() {
                    $scope.width  = parent.offsetWidth;
                    $scope.height = parent.offsetHeight;

                    renderer.setSize($scope.width, $scope.height);

                    // TODO : resize camera
                }

                var parent = element.parent()[0];

                // Set defaults
                $scope.width  = $scope.width  ? $scope.width  : parent.offsetWidth;
                $scope.height = $scope.height ? $scope.height : parent.offsetHeight;

                /*$scope.color  = $scope.color  ? ('0x' + $scope.color)  : 0xFFFFFF;*/

                // Build scene
                SceneController.build();

                var renderer = SceneController.getRenderer();

                // Attach renderer to DOM
                element.append(renderer.domElement);

                // Watch properties
                $scope.$watch('width', function (newValue) {
                    if (typeof newValue !== 'undefined') {
                        renderer.setSize($scope.width, $scope.height);
                    }
                });

                $scope.$watch('height', function (newValue) {
                    if (typeof newValue !== 'undefined') {
                        renderer.setSize($scope.width, $scope.height);
                    }
                });

                $scope.$watch('color', function (newValue) {
                    if (typeof newValue !== 'undefined') {
                        renderer.setClearColor($scope.color, 1);
                    }
                });

                $scope.$watch('responsive', function (newValue) {
                    if (typeof newValue !== 'undefined') {
                        if (newValue) {
                            $window.addEventListener('resize', resize);
                        } else {
                            $window.removeEventListener('resize', resize);
                        }
                    }
                });

                // Bind events

                // Render the scene
                SceneController.render();

                // Animate the scene
                SceneController.animate();

                // Destroy events on directive destroy
                $scope.$on('$destroy', function onAdminExpandDestroy() {
                    $window.removeEventListener('resize', resize);
                });
            }
        };
    }]);
})();