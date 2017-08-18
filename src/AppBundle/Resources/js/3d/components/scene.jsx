import React, { Component } from 'react'

import {
  AnimationMixer,
  AudioListener,
  Clock
} from 'three'

import { config } from './../config/index'
import {
  addStats,
  buildScene,
  createCamera,
  createRenderer,
  resetBrowserAnimation
} from './../scene/index'

import { getPointedObjects }         from './../scene/interactions/point-mesh'
import { highlight, clearHighlight } from './../scene/interactions/highlight-mesh'

resetBrowserAnimation()

class Scene extends Component {
  constructor(props) {
    super(props)

    this.createScene  = this.createScene.bind(this)
    this.renderScene  = this.renderScene.bind(this)
    this.resize       = this.resize.bind(this)
    this.pointObject  = this.pointObject.bind(this)
    this.clickObject  = this.clickObject.bind(this)
  }

  /**
   * Loads Three JS scene and start animation at component mount.
   */
  componentDidMount() {
    // load three-js scene
    this.createScene()
    this.renderScene()

    // add events
    window.addEventListener('resize', this.resize)
    // user interactions
    window.addEventListener('mousemove', this.pointObject)
    this.container.addEventListener('click', this.clickObject)
  }

  componentWillUnmount() {
    // cancel animation
    if (this.animateScene) {
      window.cancelAnimationFrame(this.animateScene)
    }

    // remove events
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('mousemove', this.pointObject)
    this.container.removeEventListener('click', this.clickObject)

    // break reference to three-js objects (and let's garbage collector do its work)
    this.clock          = null
    this.camera         = null
    this.renderer       = null
    this.scene          = null
    this.stats          = null
    this.animationMixer = null
    this.audioListener  = null
  }

  pointObject(e) {
    const intersects = getPointedObjects(
      (e.clientX - this.container.offsetLeft) / this.container.clientWidth,
      (e.clientY - this.container.offsetTop) / this.container.clientHeight,
      this.camera,
      this.scene
    ).filter(
      inter => inter.object.userData.click
    )

    if (0 < intersects.length) {
      highlight(intersects[0].object)
      this.container.style.cursor = 'pointer'
    } else {
      clearHighlight()
      this.container.style.cursor = 'default'
    }
  }

  clickObject(e) {
    const intersects = getPointedObjects(
      (e.clientX - this.container.offsetLeft) / this.container.clientWidth,
      (e.clientY - this.container.offsetTop) / this.container.clientHeight,
      this.camera,
      this.scene
    ).filter(
      inter => inter.object.userData.click
    )

    if (0 < intersects.length) {
      const meshConfig = config.meshes.find(mesh => mesh.name === intersects[0].object.name)
      meshConfig.onClick(intersects[0].object, this.scene, this.animationMixer)
    }
  }

  createScene() {
    this.clock    = new Clock()
    this.renderer = createRenderer(this.container, config.render)
    this.camera   = createCamera(this.container, config.camera)

    this.audioListener = new AudioListener()
    this.camera.add(this.audioListener)

    this.scene = buildScene(config, this.audioListener)
    this.animationMixer = new AnimationMixer(this.scene)

    // add stats if enabled
    if (config.helpers.stats) {
      this.stats = addStats(this.container)
    }
  }

  renderScene() {
    if (this.stats) {
      this.stats.begin()
    }

    this.animationMixer.update(this.clock.getDelta() * this.animationMixer.timeScale)
    this.renderer.render(this.scene, this.camera)

    if (this.stats) {
      this.stats.end()
    }

    this.animateScene = window.requestAnimationFrame(this.renderScene)
  }

  resize() {
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)

    this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight
    this.camera.updateProjectionMatrix()
  }

  render() {
    return (
      <div className="view-3d" ref={ ref => { this.container = ref }} />
    )
  }
}

export {
  Scene
}
