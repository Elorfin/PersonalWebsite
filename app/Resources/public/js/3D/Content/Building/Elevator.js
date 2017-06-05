/**
 * Content.Building.Elevator
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
    Content.Building.Elevator = function (scale, position, rotation) {
        // Call parent constructor
        Content.Common.AbstractObject.call(this, scale, position, rotation);
    };

    /**
     * Extends Abstract Object
     * @type {Content.Common.AbstractObject}
     */
    Content.Building.Elevator.prototype = Object.create(Content.Common.AbstractObject.prototype);
    Content.Building.Elevator.prototype.constructor = Content.Building.Elevator;

    /**
     * @inheritDoc
     */
    Content.Building.Elevator.prototype.name = 'Content.Building.Elevator';

    Content.Building.Elevator.prototype.modelMap = [{
        name:     'SM_Elevator',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        material: function () {
            var material = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture(this.modelPath + 'Content/Building/Elevator/Texture/T_Elevator_D.png')
            });

            material.side = THREE.DoubleSide;

            return material;
        }
    }];
})();