var Scene = function (loader, debug) {
    this.debug  = ( debug  !== undefined ) ? debug : false;
    this.loader = loader;

    this.scene  = new THREE.Scene();

    // Add lights
    this.addLights();

    // Build scene
    this.build();
};

Scene.prototype = {
    debug: false,

    scene: null,

    loader: null,

    mesh: [],

    constructor: Scene,

    get: function () {
        return this.scene;
    },

    add: function (element) {
        if (typeof element !== 'undefined' && null != element && element.length !== 0) {
            this.scene.add(element);
        }
    },

    render: function () {
        for (var i = 0; i < this.mesh; i++) {
            this.mesh[i].render();
        }
    },

    addLights: function () {
        // Ambient light
        var ambientLight = new THREE.AmbientLight(0xAAAAAA);
        this.add(ambientLight);
    },

    build: function () {
        // Load scene mapping
        $.getJSON('../resources/models/Content/mapping.json', function (mapping) {
            function loadObjects(namespace, mapping, callback) {
                for (var prop in mapping) {
                    if (mapping.hasOwnProperty(prop)) {
                        if (mapping[prop] instanceof Array) {
                            // List of Objects
                            for (var i = 0; i < mapping[prop].length; i++) {
                                callback(namespace[prop], mapping[prop][i]);
                            }
                        } else if (mapping[prop] instanceof Object) {
                            // Sub namespace
                            if (typeof namespace[prop] !== 'undefined') {
                                // Namespace exits => go into
                                loadObjects(namespace[prop], mapping[prop], callback);
                            }
                        }
                    }
                }
            };

            var obj = Content;
            loadObjects(obj, mapping, function (objectName, config) {
                var object = new objectName(config.scale, config.position, config.rotation);
                object.load(this.loader, this.scene);
                this.mesh.push(object);
            }.bind(this));
        }.bind(this));
    }
};