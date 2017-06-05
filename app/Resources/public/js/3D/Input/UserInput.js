(function () {
    'use strict';

    /**
     * Class constructor
     * @param {boolean} invertX
     * @param {boolean} invertY
     * @constructor
     */
    Input.UserInput = function (invertX, invertY) {
        this.invertX  = ( invertX  !== undefined ) ? invertX : false;
        this.invertY  = ( invertY  !== undefined ) ? invertY : false;

        // Bind events
        document.addEventListener('mousemove', function (event) {
            this.mouseX = ( event.clientX - window.innerWidth / 2 );
            this.mouseY = ( event.clientY - window.innerHeight / 2 );

            this.targetX = this.mouseX * .00015;
            this.targetY = this.mouseY * .00015;

            if (!this.invertX) {
                this.targetX = -this.targetX;
            }

            if (!this.invertY) {
                this.targetY = -this.targetY;
            }
        }.bind(this), false);

        document.addEventListener('keydown', function (event) {
            this.key = String.fromCharCode(event.keyCode);
        }.bind(this), false);

        document.addEventListener('keyup', function () {
            this.key = null;
        }.bind(this), false);
    };

    Input.UserInput.prototype.constructor = Input.UserInput;

    /**
     * Invert X axis
     * @var boolean
     */
    Input.UserInput.prototype.invertX = false;

    /**
     * Invert Y axis
     * @var boolean
     */
    Input.UserInput.prototype.invertY = false;

    /**
     * Position of cursor on X axis
     * @var integer
     */
    Input.UserInput.prototype.mouseX = 0;

    /**
     * Position of cursor on Y axis
     * @var integer
     */
    Input.UserInput.prototype.mouseY = 0;

    Input.UserInput.prototype.targetX = 0;

    Input.UserInput.prototype.targetY = 0;

    /**
     * Current key pressed
     * @var string
     */
    Input.UserInput.prototype.key = null;
})();