import React, { Component } from 'react'
import { PropTypes as T } from 'prop-types'
import { NavLink } from 'react-router-dom'

import {
  PerspectiveCamera,
  Vector3,
  Color,
  Raycaster
} from 'three'

import { defaultSection } from 'main/app/sections/index'
import { config } from './../config/index'
import {
  addStats,
  buildScene,
  canRender,
  createRenderer
} from './../scene/index'

window.requestAnimationFrame =
  window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame

window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame

const BrowserSupportError = () =>
  <div className="view-3d-support">
    {window.WebGLRenderingContext ? (
      <p>
        Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>.
      </p>
    ) : (
      <p>
        Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>.
        <br/>
        Find out how to get it <a href="http://get.webgl.org/">here</a>.
      </p>
    )}
  </div>

const ViewControls = props =>
  <div className="view-3d-controls">
    <button type="button" className="view-3d-btn">
      <span className={`fa fa-fw ${props.audio ? 'fa-volume-off' : 'fa-volume-up'}`} />
      <span className="sr-only">
        {props.audio ? 'disable audio' : 'enable audio'}
      </span>
    </button>

    <NavLink className="view-3d-btn" to={defaultSection.target}>
      <span className="fa fa-fw fa-sign-out" />
      <span className="sr-only">
        exit to classic version
      </span>
    </NavLink>
  </div>

ViewControls.propTypes = {
  audio: T.bool.isRequired,
  toggleAudio: T.func.isRequired
}

class View3D extends Component {
  constructor(props) {
    super(props)

    this.browserCompatible = canRender()

    this.createScene  = this.createScene.bind(this)
    this.renderScene  = this.renderScene.bind(this)
    this.resize       = this.resize.bind(this)
    this.pointObjects = this.pointObjects.bind(this)
    this.clickObject  = this.clickObject.bind(this)
  }

  componentDidMount() {
    // load three-js scene
    if (this.browserCompatible) {
      this.createScene()
      this.renderScene()

      this.mouseVector = new Vector3()
      this.rayCaster   = new Raycaster()
      this.highlighted = null

      // add events
      window.addEventListener('resize', this.resize)
      // user interactions
      window.addEventListener('mousemove', this.pointObjects)
      this.container.addEventListener('click', this.clickObject)
    }
  }

  componentWillUnmount() {
    // cancel animation
    if (this.animateScene) {
      window.cancelAnimationFrame(this.animateScene)
    }

    // remove events
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('mousemove', this.pointObjects)
    this.container.removeEventListener('click', this.clickObject)

    // break reference to three-js objects (and let's garbage collector do its work)
    this.camera    = null
    this.renderer  = null
    this.scene     = null
    this.stats     = null
    this.rayCaster = null
  }

  pointObjects(e) {
    // calculate new mouse position
    this.mouseVector.x =  ((e.clientX - this.container.offsetLeft) / this.container.clientWidth) * 2 - 1
    this.mouseVector.y = -((e.clientY - this.container.offsetTop) / this.container.clientHeight) * 2 + 1

    // update ray caster
    this.rayCaster.setFromCamera(this.mouseVector, this.camera)

    const intersects = this.rayCaster.intersectObjects(this.scene.children)

    let newHighlighted = null
    if (0 < intersects.length) {
      // only highlight the first object
      newHighlighted = intersects[0].object
    }

    // reset previous highlighted object if needed
    if (this.highlighted && (!newHighlighted || this.highlighted !== newHighlighted.id)) {
      let oldHighlighted = this.scene.getObjectById(this.highlighted)

      // reset to default
      // this might be a problem for mesh that uses emissive
      oldHighlighted.material.emissive = new Color(0x000000)
      oldHighlighted.material.emissiveIntensity = 1
    }

    this.highlighted = null
    // set current highlighted object if needed
    if (newHighlighted) {
      this.highlighted = newHighlighted.id

      newHighlighted.material.emissive = new Color(0xFFFFFF)
      newHighlighted.material.emissiveIntensity = .2 // 1 is default
    }

    // change mouse cursor
    this.container.style.cursor = this.highlighted ? 'pointer' : 'default'
  }

  clickObject(e) {

  }

  createScene() {
    // add & configure camera
    const height   = 8 // back wall height
    const distance = 16
    const vFOV     = 2 * Math.atan(height / ( 2 * distance ))

    this.camera = new PerspectiveCamera(vFOV * 180 / Math.PI, this.container.offsetWidth / this.container.offsetHeight, 10, 50)
    this.camera.position.set(...config.camera.position)
    if (config.camera.lookAt) {
      this.camera.lookAt(config.camera.lookAt)
    }

    // add & configure renderer
    this.renderer = createRenderer(this.container, config.render)

    // create scene
    this.scene = buildScene(config)

    // add stats if enabled
    if (config.helpers.stats) {
      this.stats = addStats(this.container)
    }
  }

  renderScene() {
    this.stats.begin()
    this.renderer.render(this.scene, this.camera)
    this.stats.end()

    this.animateScene = window.requestAnimationFrame(this.renderScene)
  }

  resize() {
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)

    this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight
    this.camera.updateProjectionMatrix()
  }

  render() {
    return !this.browserCompatible ? (
      <BrowserSupportError />
    ) : (
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
