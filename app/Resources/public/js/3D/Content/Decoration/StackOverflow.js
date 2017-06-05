/**
 * Content.Decoration.StackOverflow
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
    Content.Decoration.StackOverflow = function (scale, position, rotation) {
        // Call parent constructor
        Content.Common.AbstractObject.call(this, scale, position, rotation);
    };

    /**
     * Extends Abstract Object
     * @type {Content.Common.AbstractObject}
     */
    Content.Decoration.StackOverflow.prototype = Object.create(Content.Common.AbstractObject.prototype);
    Content.Decoration.StackOverflow.prototype.constructor = Content.Decoration.StackOverflow;

    /**
     * @inheritDoc
     */
    Content.Decoration.StackOverflow.prototype.name = 'Content.Decoration.StackOverflow';

    Content.Decoration.StackOverflow.prototype.modelMap = [{
        name:     'SM_StackOverflow',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            var material = new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Decoration/StackOverflow/Texture/T_StackOverflow_D.png')
            });

            material.side = THREE.DoubleSide;

            return material
        }
    }];
})();