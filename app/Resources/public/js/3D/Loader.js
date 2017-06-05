/**
 * Loader
 * Loads objects from server and cache them
 */
'use strict';

/**
 * Class constructor
 * @constructor
 */
var Loader = function () {
    this.jsonLoader = new THREE.JSONLoader(false);
};

Loader.prototype.constructor = Loader;

Loader.prototype.inProgress = 0;

Loader.prototype.facesLoaded = 0;

Loader.prototype.jsonLoader = null;

Loader.prototype.cache = {};

Loader.prototype.load = function (path, callback) {
    this.startRequest();

    if (typeof (this.cache[path]) !== 'undefined') {
        // Object has already been loaded
        this.facesLoaded += this.cache[path].faces ? this.cache[path].faces.length : 0;

        // Call callback
        callback(this.cache[path]);

        this.endRequest();
    } else {
        // Load object from server
        this.jsonLoader.load(path, function (geometry) {
            // Store loaded object
            this.cache[path] = geometry;

            this.facesLoaded += geometry.faces ? geometry.faces.length : 0;

            // Call callback
            callback(geometry);

            this.endRequest();
        }.bind(this));
    }

    return this;
};

Loader.prototype.startRequest = function () {
    this.inProgress++;

    if (1 === this.inProgress) {
        // Display loading message
    }
};

Loader.prototype.endRequest = function () {
    this.inProgress--;

    if (0 === this.inProgress) {
        // Hide loading message
    }
};