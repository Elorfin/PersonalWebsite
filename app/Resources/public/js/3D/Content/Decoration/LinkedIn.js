/**
 * Content.Decoration.LinkedIn
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
    Content.Decoration.LinkedIn = function (scale, position, rotation) {
        // Call parent constructor
        Content.Common.AbstractObject.call(this, scale, position, rotation);
    };

    /**
     * Extends Abstract Object
     * @type {Content.Common.AbstractObject}
     */
    Content.Decoration.LinkedIn.prototype = Object.create(Content.Common.AbstractObject.prototype);
    Content.Decoration.LinkedIn.prototype.constructor = Content.Decoration.LinkedIn;

    /**
     * @inheritDoc
     */
    Content.Decoration.LinkedIn.prototype.name = 'Content.Decoration.LinkedIn';

    Content.Decoration.LinkedIn.prototype.modelMap = [{
        name:     'SM_LinkedIn',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            var material = new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Decoration/LinkedIn/Texture/T_LinkedIn_D.png')
            });

            material.side = THREE.DoubleSide;

            return material
        }
    }];
})();