/**
 * Content.Decoration.Diploma
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
    Content.Decoration.Diploma = function (scale, position, rotation) {
        // Call parent constructor
        Content.Common.AbstractObject.call(this, scale, position, rotation);
    };

    /**
     * Extends Abstract Object
     * @type {Content.Common.AbstractObject}
     */
    Content.Decoration.Diploma.prototype = Object.create(Content.Common.AbstractObject.prototype);
    Content.Decoration.Diploma.prototype.constructor = Content.Decoration.Diploma;

    /**
     * @inheritDoc
     */
    Content.Decoration.Diploma.prototype.name = 'Content.Decoration.Diploma';

    Content.Decoration.Diploma.prototype.modelMap = [{
        name:     'SM_Diploma',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            return new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Decoration/Diploma/Texture/T_Diploma_D.png')
            });
        }
    }, {
        name:     'SM_Diploma',
        position: { x: 0, y: 0, z: 7.5 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            return new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Decoration/Diploma/Texture/T_Diploma_D.png')
            });
        }
    }];
})();