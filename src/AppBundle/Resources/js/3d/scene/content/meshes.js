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

function createMesh(geometry, material, config) {
  const mesh = new Mesh(geometry, material)

  mesh.castShadow = config.castShadow
  mesh.receiveShadow = config.receiveShadow

  if (config.scale) {
    mesh.scale.set(...config.scale)
  }

  if (config.position) {
    mesh.position.set(...config.position)
  }

  if (config.rotation) {
    mesh.rotation.set(...config.rotation.map(axis => TMath.degToRad(axis)))
  }

  return mesh
}

function add(scene, meshes) {
  // Load all defined meshes
  meshes.map(config => {
    const meshConfig = merge({}, defaultMeshConfig, config)
    const material = config.material ? getMaterialInstance(config.material) : null

    // create instances
    meshConfig.instances.map(shape => {
      if (typeof meshConfig.geometry === 'function') {
        scene.add(
          createMesh(
            new meshConfig.geometry(),
            material,
            Object.assign({}, shape, {
              castShadow: meshConfig.castShadow,
              receiveShadow: meshConfig.receiveShadow
            })
          )
        )
      } else {
        getModel(meshConfig.geometry).then(geometry => {
          scene.add(
            createMesh(
              geometry,
              material,
              Object.assign({}, shape, {
                castShadow: meshConfig.castShadow,
                receiveShadow: meshConfig.receiveShadow
              })
            )
          )
        })
      }
    })
  })
}

export {
  add
}
