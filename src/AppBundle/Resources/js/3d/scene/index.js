import merge from 'lodash/merge'

import { Scene } from 'three'
import { default as Stats } from 'stats.js/src/Stats'

import { loadMapping }       from './build/assets'
import { registerMaterials } from './build/materials'
import { add as addLights }  from './build/lights'
import { add as addMeshes }  from './build/meshes'
import { addAxis, addGrid }  from './build/helpers'

const defaultConfig = {
  helpers: {
    grid: false,
    axis: false,
    lights: false,
    stats: false
  },
  materials: {},
  lights: {},
  meshes: {}
}

function addStats(container) {
  const stats = new Stats()

  container.appendChild(stats.dom)

  // the lib does not permit to display the 3 panels at once
  // so we just hack it (force display all panels + disable toggle event)
  // this is slightly ugly
  stats.dom.className = 'view-3d-stats'
  for (let i = 0; i < stats.dom.children.length; i++) {
    stats.dom.children[i].className = 'view-3d-stats-panel'
    stats.dom.children[i].style.display = 'inline-block'
  }
  stats.dom.addEventListener('click', e => {
    for (let i = 0; i < stats.dom.children.length; i++) {
      stats.dom.children[i].style.display = 'inline-block'
    }
    e.preventDefault()
  }, false)

  return stats
}

/**
 * Creates a new scene based on config.
 *
 * @param {object}        config
 * @param {AudioListener} audioListener
 *
 * @returns {Scene}
 */
function buildScene(config, audioListener) {
  const scene = new Scene()
  const sceneConfig = merge({}, defaultConfig, config)

  if (sceneConfig.helpers.grid) {
    addGrid(scene, config.grid)
  }

  if (sceneConfig.helpers.axis) {
    addAxis(scene)
  }

  registerMaterials(sceneConfig.materials)

  // load statics mapping
  loadMapping(sceneConfig.staticAssets).then(() => {
    addLights(scene, sceneConfig.lights, sceneConfig.helpers.lights)
    addMeshes(scene, sceneConfig.meshes, audioListener)
  })

  return scene
}

/**
 * Checks if the current client support WebCL rendering.
 *
 * @returns {boolean}
 */
function canRender() {
  try {
    const canvas = document.createElement('canvas')

    return !!(
      window.WebGLRenderingContext
      && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch (e) {
    return false
  }
}

function resetBrowserAnimation() {
  window.requestAnimationFrame =
    window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame

  window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
}

/**
 * Creates a new renderer based on config
 * and appends it to the DOM.
 *
 * @param {HTMLElement} container
 * @param {object}      rendererConfig
 *
 * @returns {object} the three js renderer instance
 */
function createRenderer(container, rendererConfig) {
  // Instantiate the configured renderer
  const renderer = new rendererConfig.renderer({
    antialias: rendererConfig.antialias
  })

  // Configure renderer
  renderer.setSize(container.offsetWidth, container.offsetHeight)

  if (rendererConfig.background) {
    renderer.setClearColor(...rendererConfig.background)
  }

  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)

  /*renderer.gammaInput = true
  renderer.gammaOutput = true
  renderer.physicallyCorrectLights = true*/

  // Enable shadow rendering
  if (rendererConfig.shadow) {
    renderer.shadowMap.enabled = rendererConfig.shadow.enabled
    renderer.shadowMap.type    = rendererConfig.shadow.type
  }

  // Add the renderer to the DOM
  container.appendChild(renderer.domElement)

  return renderer
}

/**
 * Creates a new camera based on config.
 *
 * @param {HTMLElement} container
 * @param {object}      cameraConfig
 *
 * @return {Camera}
 */
function createCamera(container, cameraConfig) {
  const camera = new cameraConfig.instance(container)

  camera.position.set(...cameraConfig.position)
  if (cameraConfig.lookAt) {
    camera.lookAt(cameraConfig.lookAt)
  }

  return camera
}

export {
  addStats,
  buildScene,
  canRender,
  createCamera,
  createRenderer,
  resetBrowserAnimation
}
