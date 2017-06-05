(function () {
    'use strict';

    /**
     * Class constructor
     * @constructor
     */
    Camera.Base = function () {};

    Camera.Base.prototype.constructor = Camera.Base;

    /**
     * Camera
     * @type THREE.Camera
     */
    Camera.Base.prototype.camera = null;

    /**
     * Get THREE camera
     * @returns THREE.Camera
     */
    Camera.Base.prototype.get = function () {
        return this.camera;
    };

    /**
     * Update camera properties
     */
    Camera.Base.prototype.update = function () {
        console.warn('Camera.update() method must be implemented in child class.');
    };

    /**
     * Resize camera view port
     */
    Camera.Base.prototype.resize = function () {
        console.warn('Camera.resize() method must be implemented in child class.');
    };
})();