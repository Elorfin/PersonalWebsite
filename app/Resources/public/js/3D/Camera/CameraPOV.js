(function () {
    'use strict';

    Camera.POV = function (userInput) {
        // Call the parent constructor
        Camera.Base.call(this);

        this.userInput = userInput;

        this.camera = new THREE.PerspectiveCamera(27, window.innerWidth / window.innerHeight, 1, 10000);

        // x, z, y
        this.camera.position.set(64.6, 50, 211); // 0, 20, 200

        /*this.camera.rotation.x = -79.4 * (Math.PI/180);*/
    };

    Camera.POV.prototype = Object.create(Camera.Base.prototype);
    Camera.POV.prototype.constructor = Camera.POV;

    Camera.POV.prototype.update = function () {
        if (this.camera) {
            this.camera.rotation.y += 0.02 * ( this.userInput.targetX - this.camera.rotation.y );
            this.camera.rotation.x += 0.02 * ( this.userInput.targetY - this.camera.rotation.x );
        }

        var moveStep = 1;
        if ('Z' === this.userInput.key) {
            this.camera.position.z -= moveStep;
        }

        if ('S' === this.userInput.key) {
            this.camera.position.z += moveStep;
        }

        if ('Q' === this.userInput.key) {
            this.camera.position.x -= moveStep;
        }

        if ('D' === this.userInput.key) {
            this.camera.position.x += moveStep;
        }
    };

    Camera.POV.prototype.resize = function () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    };
})();