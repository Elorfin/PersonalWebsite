import merge from 'lodash/merge'

import { Scene } from 'three'

import { loadMapping } from './content/assets'
import { registerMaterials } from './content/materials'
import { add as addLights } from './content/lights'
import { add as addMeshes } from './content/meshes'
import { add as addAxis } from './helpers/axis'
import { add as addGrid } from './helpers/grid'

const defaultConfig = {
  helpers: {
    grid: false,
    axis: false,
    lights: false
  },
  materials: {},
  lights: {},
  meshes: {}
}

function build(config) {
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
    addMeshes(scene, sceneConfig.meshes)
  })

  return scene
}

export {
  build
}
