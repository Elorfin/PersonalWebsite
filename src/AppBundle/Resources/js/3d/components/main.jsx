import React, { Component } from 'react'
import { PropTypes as T } from 'prop-types'

import {
  PerspectiveCamera/*,
  PCFSoftShadowMap*/
} from 'three'

import { config } from './../config'
import { build as buildScene } from './../scene/index'

window.requestAnimationFrame =
  window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame

const ViewControls = props =>
  <div className="view-3d-controls">
    <button type="button" className="view-3d-btn">
      <span className={`fa fa-fw ${props.audio ? 'fa-volume-off' : 'fa-volume-up'}`} />
      <span className="sr-only">
        {props.audio ? 'disable audio' : 'enable audio'}
      </span>
    </button>
  </div>

ViewControls.propTypes = {
  audio: T.bool.isRequired,
  toggleAudio: T.func.isRequired
}

/**
 * @todo check WebGL support (https://github.com/mrdoob/three.js/blob/master/examples/js/Detector.js)
 */
class View3D extends Component {
  constructor(props) {
    super(props)

    this.renderScene = this.renderScene.bind(this)
    this.resize = this.resize.bind(this)
  }

  componentDidMount() {
    const height = 8 // back wall height
    const distance = 16
    const vFOV = 2 * Math.atan( height / ( 2 * distance ) )

    // add & configure camera
    this.camera = new PerspectiveCamera(vFOV * 180 / Math.PI, this.container.offsetWidth / window.innerHeight, 10, 50)
    this.camera.position.set(0, 6, 30)
    this.camera.lookAt({x: 0, y: 2, z: 0})

    // add & configure renderer
    this.renderer = new config.render.renderer({
      antialias: config.render.antialias
    })
    this.renderer.setSize(this.container.offsetWidth, window.innerHeight)

    if (config.render.background) {
      this.renderer.setClearColor(...config.render.background)
    }

    this.renderer.setPixelRatio(window.devicePixelRatio)

    // Enable shadow rendering
    if (config.render.shadow) {
      this.renderer.shadowMap.enabled = config.render.shadow.enabled
      this.renderer.shadowMap.type = config.render.shadow.type
    }

    this.container.appendChild(this.renderer.domElement)

    // create scene
    this.scene = buildScene(config)

    this.renderScene()

    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize() {
    this.renderer.setSize(this.container.offsetWidth, window.innerHeight)
    this.camera.aspect = this.container.offsetWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
  }

  renderScene() {
    window.requestAnimationFrame(this.renderScene)

    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div className="view-3d-container">
        <ViewControls
          audio={false}
          toggleAudio={() => true}
        />

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
