/**
 * Content.Building.Wall
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
    Content.Building.Wall = function (scale, position, rotation) {
        // Call parent constructor
        Content.Common.AbstractObject.call(this, scale, position, rotation);
    };

    /**
     * Extends Abstract Object
     * @type {Content.Common.AbstractObject}
     */
    Content.Building.Wall.prototype = Object.create(Content.Common.AbstractObject.prototype);
    Content.Building.Wall.prototype.constructor = Content.Building.Wall;

    /**
     * @inheritDoc
     */
    Content.Building.Wall.prototype.name = 'Content.Building.Wall';

    Content.Building.Wall.prototype.modelMap = [{
        name:     'SM_Wall',
        position: { x: -120, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        repeat:   { x: 2, step: 40 },
        material: function () {
            return new THREE.MeshPhongMaterial({
                map:       THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Building/Wall/Texture/T_Wall_D.png'),
                bumpMap:   THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Building/Wall/Texture/T_Wall_N.png'),
                bumpScale: 1
            });
        }
    },{
        name:     'SM_WallElevator',
        position: { x: -40, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            return new THREE.MeshPhongMaterial({
                map:       THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Building/Wall/Texture/T_Wall_D.png'),
                bumpMap:   THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Building/Wall/Texture/T_Wall_N.png'),
                bumpScale: 1
            });
        }
    },{
        name:     'SM_Wall',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        repeat:   { x: 3, step: 40 },
        material: function () {
            return new THREE.MeshPhongMaterial({
                map:       THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Building/Wall/Texture/T_Wall_D.png'),
                bumpMap:   THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Building/Wall/Texture/T_Wall_N.png'),
                bumpScale: 1
            });
        }
    },{
        name:     'SM_Wall',
        position: { x: 120, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: -90 },
        repeat:   { y: 6, step: 40 },
        material: function () {
            return new THREE.MeshPhongMaterial({
                map:       THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Building/Wall/Texture/T_Wall_D.png'),
                bumpMap:   THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Building/Wall/Texture/T_Wall_N.png'),
                bumpScale: 1.5
            });
        }
    }];
})();