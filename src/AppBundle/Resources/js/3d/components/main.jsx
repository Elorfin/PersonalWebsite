import React, { Component } from 'react'
import { PropTypes as T } from 'prop-types'
import { NavLink } from 'react-router-dom'

import {
  PerspectiveCamera
} from 'three'
import {
  default as Stats
} from 'stats.js/src/Stats'

import { defaultSection } from 'main/app/sections/index'
import { config } from './../config/index'
import { canRender, build as buildScene } from './../scene/index'

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

    this.createScene = this.createScene.bind(this)
    this.renderScene = this.renderScene.bind(this)
    this.resize      = this.resize.bind(this)
  }

  componentDidMount() {
    // load three-js scene
    if (this.browserCompatible) {
      this.createScene()
      this.renderScene()

      window.addEventListener('resize', this.resize)
    }
  }

  componentWillUnmount() {
    // cancel animation
    if (this.animateScene) {
      window.cancelAnimationFrame(this.animateScene)
    }

    // remove events
    window.removeEventListener('resize', this.resize)

    // break reference to three-js objects (and let's garbage collector do his work)
    this.camera   = null
    this.renderer = null
    this.scene    = null
    this.stats    = null
  }

  createScene() {
    const height = 8 // back wall height
    const distance = 16
    const vFOV = 2 * Math.atan(height / ( 2 * distance ))

    // add & configure camera
    this.camera = new PerspectiveCamera(vFOV * 180 / Math.PI, this.container.offsetWidth / this.container.offsetHeight, 10, 50)
    this.camera.position.set(...config.camera.position)
    if (config.camera.lookAt) {
      this.camera.lookAt(config.camera.lookAt)
    }

    // add & configure renderer
    this.renderer = new config.render.renderer({
      antialias: config.render.antialias
    })
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)

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

    if (config.helpers.stats) {
      this.stats = new Stats()
      //this.stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
      /*this.stats.showPanel(1)
      this.stats.showPanel(2)*/
      this.container.appendChild(this.stats.dom)

      // the lib does not permit to display the 3 panels at once
      // so we just hack it (force display all panels + disable toggle event)
      // this is slightly ugly
      this.stats.dom.className = 'view-3d-stats'
      for (let i = 0; i < this.stats.dom.children.length; i++) {
        this.stats.dom.children[i].className = 'view-3d-stats-panel'
        this.stats.dom.children[i].style.display = 'inline-block'
      }
      this.stats.dom.addEventListener('click', e => {
        for (let i = 0; i < this.stats.dom.children.length; i++) {
          this.stats.dom.children[i].style.display = 'inline-block'
        }
        e.preventDefault()
      }, false)
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
