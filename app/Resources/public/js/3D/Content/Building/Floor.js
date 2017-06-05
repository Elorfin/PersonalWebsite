/**
 * Content.Building.Floor
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
    Content.Building.Floor = function (scale, position, rotation) {
        // Call parent constructor
        Content.Common.AbstractObject.call(this, scale, position, rotation);
    };

    /**
     * Extends Abstract Object
     * @type {Content.Common.AbstractObject}
     */
    Content.Building.Floor.prototype = Object.create(Content.Common.AbstractObject.prototype);
    Content.Building.Floor.prototype.constructor = Content.Building.Floor;

    /**
     * @inheritDoc
     */
    Content.Building.Floor.prototype.name = 'Content.Building.Floor';

    Content.Building.Floor.prototype.modelMap = [{
        name:     'SM_Floor',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        repeat:   { x: 3, y: 3, step: 80 },
        material: function () {
            return new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Building/Floor/Texture/T_Carpet_D.png'),
                bumpMap: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Building/Floor/Texture/T_Carpet_N.png'),
                bumpScale: 1
            });
        }
    }];
})();