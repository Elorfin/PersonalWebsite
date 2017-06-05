/**
 * Content.Light.NeonLight
 */
(function () {
    'use strict';

    /**
     * Class constructor
     * @param {{x: number, y: number, z: number}} scale
     * @param {{x: number, y: number, z: number}} position
     * @param {{x: number, y: number, z: number}} rotation
     * @constructor
     */
    Content.Light.NeonLight = function (scale, position, rotation) {
        // Call parent constructor
        Content.Common.AbstractObject.call(this, scale, position, rotation);
    };

    /**
     * Extends Abstract Object
     * @type {Content.Common.AbstractObject}
     */
    Content.Light.NeonLight.prototype = Object.create(Content.Common.AbstractObject.prototype);
    Content.Light.NeonLight.prototype.constructor = Content.Furniture.Cupboard;

    /**
     * @inheritDoc
     */
    Content.Light.NeonLight.prototype.name = 'Content.Light.NeonLight';

    Content.Light.NeonLight.prototype.modelMap = [];

    Content.Light.NeonLight.prototype.load = function (loader, scene) {
        // Call parent load
        Content.Common.AbstractObject.prototype.load.call(this, loader, scene);

        /*var spotLight = new THREE.SpotLight(0xe1dcb0, 10, this.position.z * 2, Math.PI/2.5);

        spotLight.position.x = this.position.x;
        spotLight.position.y = this.position.z;
        spotLight.position.z = -this.position.y;

        spotLight.rotation.set(0, 0, 0);

        spotLight.target.position.x = this.position.x;
        spotLight.target.position.y = 0;
        spotLight.target.position.z = -this.position.y;

        spotLight.target.updateMatrixWorld();

        spotLight.shadowCameraFov = 130;
        spotLight.castShadow     = true;
        spotLight.onlyShadow = true;

        spotLight.shadowMapWidth   = 2048;
        spotLight.shadowMapHeight  = 2048;
        spotLight.shadowCameraNear = 10;
        spotLight.shadowCameraFar  = 1000;
        spotLight.shadowBias       = -0.0005;
        spotLight.shadowDarkness   = 0.08;*/

        var pointLight = new THREE.PointLight(0xe1dcb0, 0.6, this.position.z * 2);

        pointLight.position.x = this.position.x;
        pointLight.position.y = this.position.z;
        pointLight.position.z = -this.position.y;

        scene.add(pointLight);
        /*scene.add(spotLight);*/
    };
})();