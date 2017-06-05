(function () {
    'use strict';

    angular.module('ThreeJSModule').controller('SceneController', ['$scope', function ($scope) {
        var scene    = null;
        var renderer = null;

        /**
         * Build the scene
         */
        this.build = function () {
            if (!scene) {
                scene = new THREE.Scene();
            }

            if (!renderer) {
                renderer = new THREE.WebGLRenderer({ antialias: true });

                // Configure renderer
                renderer.shadowMapEnabled = true;
                renderer.shadowMapType    = THREE.PCFSoftShadowMap;
            }
        };

        this.getRenderer = function () {
            return renderer;
        };

        this.getScene = function () {
            return scene;
        };

        /**
         * Render the scene
         */
        this.render = function () {
            // Update scene
            /*scene.render();*/

            // Update camera
            /*this.camera.update();

            this.renderer.clear();
            this.renderer.render(this.scene.get(), this.camera.get());*/
        };

        /**
         * Animate the scene
         */
        this.animate = function () {
            requestAnimationFrame(this.animate.bind(this));

            this.render();
        };
    }]);
})();