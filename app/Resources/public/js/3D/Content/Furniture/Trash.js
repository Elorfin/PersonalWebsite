/**
 * Content.Furniture.Trash
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
    Content.Furniture.Trash = function (scale, position, rotation) {
        // Call parent constructor
        Content.Common.AbstractObject.call(this, scale, position, rotation);
    };

    /**
     * Extends Abstract Object
     * @type {Content.Common.AbstractObject}
     */
    Content.Furniture.Trash.prototype = Object.create(Content.Common.AbstractObject.prototype);
    Content.Furniture.Trash.prototype.constructor = Content.Furniture.Trash;

    /**
     * @inheritDoc
     */
    Content.Furniture.Trash.prototype.name = 'Content.Furniture.Trash';

    Content.Furniture.Trash.prototype.modelMap = [{
        name:     'SM_Trash',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            return new THREE.MeshBasicMaterial();
            /*return new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Furniture/Trash/Texture/T_Trash_D.png')
            });*/
        }
    }];
})();