import merge from 'lodash/merge'

import {
  Mesh,
  Math as TMath,
  BufferGeometry,
  Geometry
} from 'three'

import {
  parseModel,
  parseSkin,
  parseMorphing,
  parseAnimations
} from './../parser'

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
      switch (typeof meshConfig.geometry) {
        case 'function':
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

          break


        case 'object':
          const geometry = new Geometry()

          parseModel(meshConfig.geometry, geometry)
          parseSkin(meshConfig.geometry, geometry)
          parseMorphing(meshConfig.geometry, geometry)
          parseAnimations( meshConfig.geometry, geometry )

          geometry.computeFaceNormals()
          geometry.computeBoundingSphere()

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

          break

        case 'string':
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

          break
      }
    })
  })
}

export {
  add
}
