/**
 * Content.Decoration.Octocat
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
    Content.Decoration.Octocat = function (scale, position, rotation) {
        // Call parent constructor
        Content.Common.AbstractObject.call(this, scale, position, rotation);
    };

    /**
     * Extends Abstract Object
     * @type {Content.Common.AbstractObject}
     */
    Content.Decoration.Octocat.prototype = Object.create(Content.Common.AbstractObject.prototype);
    Content.Decoration.Octocat.prototype.constructor = Content.Decoration.Octocat;

    /**
     * @inheritDoc
     */
    Content.Decoration.Octocat.prototype.name = 'Content.Decoration.Octocat';

    Content.Decoration.Octocat.prototype.modelMap = [{
        name:     'SM_Octocat',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            var material = new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Decoration/Octocat/Texture/T_Octocat_D.png')
            });

            material.side = THREE.DoubleSide;

            return material
        }
    }];
})();