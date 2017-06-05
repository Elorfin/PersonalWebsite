/**
 * Content.Common.AbstractObject
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
    Content.Common.AbstractObject = function (scale, position, rotation) {
        if (typeof scale === 'object') {
            this.scale = scale;
        }

        if (typeof position === 'object') {
            this.position = position;
        }

        if (typeof rotation === 'object') {
            this.rotation = rotation;
        }
    };

    Content.Common.AbstractObject.prototype.constructor = Content.Common.AbstractObject;

    /**
     * Object name
     * @type {string}
     */
    Content.Common.AbstractObject.prototype.name = 'Content.Common.AbstractObject';

    /**
     * Scale of the object
     * @type {{x: number, y: number, z: number}}
     */
    Content.Common.AbstractObject.prototype.scale = { x: 1, y: 1, z: 1 };

    /**
     * Position of the object
     * @type {{x: number, y: number, z: number}}
     */
    Content.Common.AbstractObject.prototype.position = { x: 0, y: 0, z: 0 };

    /**
     * Rotation of the object
     * @type {{x: number, y: number, z: number}}
     */
    Content.Common.AbstractObject.prototype.rotation = { x: 0, y: 0, z: 0 };

    Content.Common.AbstractObject.prototype.modelPath = '../resources/models/';

    Content.Common.AbstractObject.prototype.modelMap = [];

    Content.Common.AbstractObject.prototype.models = [];

    /**
     * Render object
     */
    Content.Common.AbstractObject.prototype.render = function () {};

    /**
     * Load all Object models
     */
    Content.Common.AbstractObject.prototype.load = function (loader, scene) {
        if (this.modelMap && this.modelMap.length !== 0) {
            for ( var i = 0; i < this.modelMap.length; i++) {
                var model = this.modelMap[i];

                // Validate model config
                if (typeof model.name !== 'string' || model.name.length === 0) {
                    console.error('Invalid model name.');
                } else {
                    this.loadModel(loader, scene, model);
                }
            }
        }
    };

    Content.Common.AbstractObject.prototype.loadModel = function (loader, scene, modelConfig) {
        var basePath = this.modelPath + this.name.replace(/\./g, '/') + '/';

        var material =  null;
        if (modelConfig.material) {
            material = modelConfig.material.call(this);
        }

        // Load model
        var path = basePath + modelConfig.name + '.js';
        loader.load(path, function (geometry) {
            var mesh = new THREE.Mesh(geometry, material);

            mesh.name = modelConfig.name;

            // Set scale
            mesh.scale.x = this.scale.x;
            mesh.scale.y = this.scale.z;
            mesh.scale.z = this.scale.y;

            // Set position
            mesh.position.x = this.position.x + modelConfig.position.x;
            mesh.position.y = this.position.z + modelConfig.position.z;
            mesh.position.z = -this.position.y + -modelConfig.position.y;

            // Set rotation
            mesh.rotation.x = (this.rotation.x + modelConfig.rotation.x) * (Math.PI/180);
            mesh.rotation.y = (this.rotation.z + modelConfig.rotation.z) * (Math.PI/180);
            mesh.rotation.z = -(this.rotation.y + modelConfig.rotation.y) * (Math.PI/180);

            // Set other properties
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            if (modelConfig.repeat) {
                var repeatX = modelConfig.repeat.x ? modelConfig.repeat.x : 1;
                var repeatY = modelConfig.repeat.y ? modelConfig.repeat.y : 1;
                var repeatZ = modelConfig.repeat.z ? modelConfig.repeat.z : 1;

                var offsetX = mesh.position.x;
                var offsetY = mesh.position.z;
                var offsetZ = mesh.position.y;

                for (var i = 0; i < repeatX; i++) {
                    offsetY = mesh.position.z;

                    for (var j = 0; j < repeatY; j++) {
                        offsetZ = mesh.position.y;

                        for (var k = 0; k < repeatZ; k++) {
                            var next = mesh.clone();
                            next.position.x = offsetX;
                            next.position.y = offsetZ;
                            next.position.z = offsetY;

                            this.models.push(next);

                            scene.add(next);

                            offsetZ = offsetZ + modelConfig.repeat.step;
                        }

                        offsetY = offsetY + modelConfig.repeat.step;
                    }

                    offsetX = offsetX + modelConfig.repeat.step;
                }
            } else {
                this.models.push(mesh);
                scene.add(mesh);
            }
        }.bind(this));
    };
})();