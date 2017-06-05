/**
 * Content.Plant.SmallPlant
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
    Content.Plant.SmallPlant = function (scale, position, rotation) {
        // Call parent constructor
        Content.Common.AbstractObject.call(this, scale, position, rotation);
    };

    /**
     * Extends Abstract Object
     * @type {Content.Common.AbstractObject}
     */
    Content.Plant.SmallPlant.prototype = Object.create(Content.Common.AbstractObject.prototype);
    Content.Plant.SmallPlant.prototype.constructor = Content.Plant.SmallPlant;

    /**
     * @inheritDoc
     */
    Content.Plant.SmallPlant.prototype.name = 'Content.Plant.SmallPlant';

    Content.Plant.SmallPlant.prototype.modelMap = [{
        name:     'SM_SmallPlant',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            var material = new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Plant/SmallPlant/Texture/T_SmallPlant_D.png'),
                bumpMap: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Plant/SmallPlant/Texture/T_SmallPlant_N.png'),
                bumpScale: 0.2
            });

            material.side = THREE.DoubleSide;

            return material
        }
    }];
})();