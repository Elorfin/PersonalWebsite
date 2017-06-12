import React, { Component } from 'react'

import {
  AmbientLight,
  AxisHelper,
  GridHelper,
  JSONLoader,
  Mesh,
  PerspectiveCamera,
  Scene,
  ImageUtils,
  MeshPhongMaterial,
  HemisphereLight,
  DirectionalLight,
  PCFSoftShadowMap
} from 'three'

import { config } from './../config'

const ViewControls = () =>
  <div className="view-3d-controls">
    <button type="button" className="view-3d-btn">
      <span className="fa fa-fw fa-volume-up" />
      <span className="sr-only">disable audio</span>
    </button>

    <button type="button" className="view-3d-btn">
      <span className="fa fa-fw fa-expand" />
      <span className="sr-only">show in fullscreen</span>
    </button>
  </div>

/**
 * @todo check WebGL support (https://github.com/mrdoob/three.js/blob/master/examples/js/Detector.js)
 */
class View3D extends Component {
  constructor(props) {
    super(props)

    this.addHelpers = this.addHelpers.bind(this)
    this.renderScene = this.renderScene.bind(this)
  }

  componentDidMount() {
    // init three JS
    this.scene = new Scene()

    // add & configure camera
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.z = 3
    this.camera.position.x = 1
    this.camera.position.y = 1

    this.camera.lookAt({
      x: 0,
      y: 0,
      z: 0
    })

    // add & configure renderer
    this.renderer = new config.render.renderer({ antialias: config.render.antialias })
    this.renderer.setSize(this.container.offsetWidth, window.innerHeight)
    this.renderer.setClearColor(config.render.background, 1)
    // Enable shadow rendering
    this.renderer.shadowMap.type = PCFSoftShadowMap // default PCFShadowMap
    this.renderer.shadowMap.enabled = true

    this.container.appendChild(this.renderer.domElement)

    var loader = new JSONLoader()
    loader.load('./dist/models/SM_Octocat.json', (geometry) => {
      this.scene.add(
        new Mesh(geometry, new MeshPhongMaterial({
          map: ImageUtils.loadTexture('./dist/models/T_Octocat_D.png'),
          normalMap: ImageUtils.loadTexture('./dist/models/T_Octocat_N.png'),
          castShadow: true,
          receiveShadow: true
        }))
      )
    })

    this.addLights()
    this.addHelpers()
    this.renderScene()
  }

  renderScene() {
    requestAnimationFrame(this.renderScene)

    this.renderer.render(this.scene, this.camera)
  }

  addLights() {
    // A hemisphere light is a gradient colored light;
    // the first parameter is the sky color, the second parameter is the ground color,
    // the third parameter is the intensity of the light
    const hemisphereLight = new HemisphereLight(0xaaaaaa, 0x000000, .9)

    // A directional light shines from a specific direction.
    // It acts like the sun, that means that all the rays produced are parallel.
    const shadowLight = new DirectionalLight(0xffffff, .9)

    // Allow shadow casting
    shadowLight.castShadow = true

    // Set the direction of the light
    shadowLight.position.set(15, 35, 35)

    // define the visible area of the projected shadow
    shadowLight.shadow.camera.near = 0.1
    shadowLight.shadow.camera.far = 1000

    // define the resolution of the shadow; the higher the better,
    // but also the more expensive and less performant
    shadowLight.shadow.mapSize.width = 1024
    shadowLight.shadow.mapSize.height = 1024

    this.scene.add(new AmbientLight(0xAAAAAA))
    this.scene.add(hemisphereLight)
    this.scene.add(shadowLight)
  }

  addHelpers() {
    // add grid
    const gridXZ = new GridHelper(config.grid.size, config.grid.subdivisions, ...config.grid.colors)
    gridXZ.position.set(0,0,0)
    this.scene.add(gridXZ)

    // add axis
    const axes = new AxisHelper(50)
    axes.position.set(0,0,0)
    this.scene.add(axes)
  }

  render() {
    return (
      <div className="view-3d-container">
        <ViewControls />

        <div
          className="view-3d"
          ref={ ref => { this.container = ref }}
        />
      </div>
    )
  }
}

export {
  View3D
}
