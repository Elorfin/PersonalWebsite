/**
 * Content.Decoration.Poster
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
    Content.Decoration.Poster = function (scale, position, rotation) {
        // Call parent constructor
        Content.Common.AbstractObject.call(this, scale, position, rotation);
    };

    /**
     * Extends Abstract Object
     * @type {Content.Common.AbstractObject}
     */
    Content.Decoration.Poster.prototype = Object.create(Content.Common.AbstractObject.prototype);
    Content.Decoration.Poster.prototype.constructor = Content.Decoration.Poster;

    /**
     * @inheritDoc
     */
    Content.Decoration.Poster.prototype.name = 'Content.Decoration.Poster';

    Content.Decoration.Poster.prototype.modelMap = [{
        name:     'SM_Poster',
        position: { x: 0, y: 0, z: 5 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            var material = new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Decoration/Poster/Texture/T_Poster_KeepCalm_D.png')
            });

            material.side = THREE.DoubleSide;

            return material
        }
    }, {
        name:     'SM_Poster',
        position: { x: 0, y: -23.75, z: 15 },
        rotation: { x: 0, y: 5, z: 0 },
        material: function () {
            var material = new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Decoration/Poster/Texture/T_Poster_StarWars_D.png')
            });

            material.side = THREE.DoubleSide;

            return material
        }
    }, {
        name:     'SM_Poster',
        position: { x: 0, y: -50, z: 0 },
        rotation: { x: 0, y: -5, z: 0 },
        material: function () {
            var material = new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Decoration/Poster/Texture/T_Poster_CommitStrip_D.png')
            });

            material.side = THREE.DoubleSide;

            return material
        }
    }];
})();