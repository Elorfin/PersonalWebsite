import merge from 'lodash/merge'

import {
  Mesh,
  Math as TMath
} from 'three'

import { getModel } from './assets'
import { getMaterialInstance } from './materials'

const defaultMeshConfig = {
  castShadow: true,
  receiveShadow: true,
  instances: {}
}

function add(scene, meshes) {
  // Load all defined meshes
  meshes.map(config => {
    const meshConfig = merge({}, defaultMeshConfig, config)
    const material = config.material ? getMaterialInstance(config.material) : null

    // create instances
    meshConfig.instances.map(shape => {
      getModel(meshConfig.geometry).then(geometry => {
        const mesh = new Mesh(geometry, material)

        mesh.castShadow = meshConfig.castShadow
        mesh.receiveShadow = meshConfig.receiveShadow

        if (shape.scale) {
          mesh.scale.set(...shape.scale)
        }

        if (shape.position) {
          mesh.position.set(...shape.position)
        }

        if (shape.rotation) {
          mesh.rotation.set(...shape.rotation.map(axis => TMath.degToRad(axis)))
        }

        scene.add(mesh)
      })
    })
  })
}

export {
  add
}
