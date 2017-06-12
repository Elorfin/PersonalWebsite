var View3D = function (parent, debug) {
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    this.debug  = ( debug  !== undefined ) ? debug : false;
    this.parent = ( parent !== undefined ) ? parent : false;

    // Initialize UserInput
    this.userInput = new Input.UserInput();
    this.loader = new Loader();
};

View3D.prototype = {
    /**
     * Enable or disable debug mode
     * @type boolean
     */
    debug: false,

    /**
     * Manager for stats
     * @type Stats
     */
    stats: null,

    parent: null,

    container: null,

    loader: null,

    userInput: null,

    renderer: null,

    scene: null,

    camera: null,

    constructor: View3D,

    init: function () {
        // Check if WebGL is available in current browser
        if (!Detector.webgl) {
            Detector.addGetWebGLMessage();

            return;
        }

        if (typeof this.parent !== 'undefined' && this.parent !== null && this.parent.length !== 0) {
            // Parent is defined => Scene will be attach to this element
            this.container = document.getElementById(this.parent);
            if (!this.container) {
                console.error('Unable to find element "' + this.parent + '" in DOM tree.');
            }
        }

        // No parent => attach to body
        if (!this.container) {
            this.container = document.createElement('div');
            document.body.appendChild(this.container);
        }

        this.addRenderer();

        this.addScene();
        this.addCamera();

        if (this.debug) {
            this.addStats();
            this.addGrid();
            this.addAxes();
        }

        // Attach events
        var obj = this;
        window.addEventListener('resize', function() {
            obj.renderer.setSize(window.innerWidth, window.innerHeight);
            obj.camera.resize();
        });

        // Render view
        this.render();

        // Start animation
        this.animate();
    },

    render: function () {
        // Update camera
        this.camera.update();

        // Update scene
        this.scene.render();

        this.renderer.clear();
        this.renderer.render(this.scene.get(), this.camera.get());
    },

    animate: function () {
        requestAnimationFrame(this.animate.bind(this));

        this.render();
    },

    addScene: function () {
        this.scene = new Scene(this.loader, this.debug);
    },

    addCamera: function () {
        this.camera = new Camera.POV(this.userInput);
    },

    addRenderer: function () {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });

        this.renderer.setClearColor(0x222222, 1);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapType = THREE.PCFSoftShadowMap;

        /*this.renderer.shadowMapCullFace = THREE.CullFaceBack;
        this.renderer.autoClear = false;
        this.renderer.gammaInput = true;
        this.renderer.gammaOutput = true;*/

        this.container.appendChild(this.renderer.domElement);
    }
};