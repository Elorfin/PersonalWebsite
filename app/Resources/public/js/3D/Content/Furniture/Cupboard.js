/**
 * Content.Furniture.Cupboard
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
    Content.Furniture.Cupboard = function (scale, position, rotation) {
        // Call parent constructor
        Content.Common.AbstractObject.call(this, scale, position, rotation);
    };

    /**
     * Extends Abstract Object
     * @type {Content.Common.AbstractObject}
     */
    Content.Furniture.Cupboard.prototype = Object.create(Content.Common.AbstractObject.prototype);
    Content.Furniture.Cupboard.prototype.constructor = Content.Furniture.Cupboard;

    /**
     * @inheritDoc
     */
    Content.Furniture.Cupboard.prototype.name = 'Content.Furniture.Cupboard';

    Content.Furniture.Cupboard.prototype.modelMap = [{
        name:     'SM_Cupboard',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            return new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Furniture/Cupboard/Texture/T_Cupboard_D.png')
            });
        }
    }, {
        name:     'SM_CupboardWindows',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            return new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Furniture/Cupboard/Texture/T_CupboardWindows_D.png'),
                transparent: true,
                opacity: 0.6
            });
        }
    }, {
        name:     'SM_Documents',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            return new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Furniture/Cupboard/Texture/T_Documents_D.png')
            });
        }
    }];
})();