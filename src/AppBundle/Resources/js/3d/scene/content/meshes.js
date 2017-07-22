import merge from 'lodash/merge'

import {
  Mesh,
  Math as TMath,
  Geometry
} from 'three'

import {
  parseModel,
  parseSkin,
  parseMorphing,
  parseAnimations
} from './../parser'

import { getMaterialInstance } from './materials'

const defaultMeshConfig = {
  castShadow: true,
  receiveShadow: true,
  instances: {}
}

function createMesh(name, geometry, material, config) {
  const mesh = new Mesh(geometry, material)

  mesh.name          = name
  mesh.castShadow    = config.castShadow
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

function createModelGeometry(rawGeometry) {
  const geometry = new Geometry()

  parseModel(rawGeometry, geometry)
  parseSkin(rawGeometry, geometry)
  parseMorphing(rawGeometry, geometry)
  parseAnimations(rawGeometry, geometry )

  geometry.computeFaceNormals()
  geometry.computeBoundingSphere()

  return geometry
}

function add(scene, meshes) {
  // Load all defined meshes
  meshes.map(config => {
    const meshConfig = merge({}, defaultMeshConfig, config)
    const material = config.material ? getMaterialInstance(config.material) : null

    // get geometry
    let meshGeometry
    if (typeof meshConfig.geometry === 'function') {
      // Geometry constructor
      meshGeometry = new meshConfig.geometry()
    } else {
      // Geometry definition object
      meshGeometry = createModelGeometry(meshConfig.geometry)
    }

    // create instances
    meshConfig.instances.map((shape, idx) => {
      scene.add(
        createMesh(
          meshConfig.name + '_' + idx,
          meshGeometry,
          material,
          Object.assign({}, shape, {
            castShadow: meshConfig.castShadow,
            receiveShadow: meshConfig.receiveShadow
          })
        )
      )
    })
  })
}

export {
  add
}
