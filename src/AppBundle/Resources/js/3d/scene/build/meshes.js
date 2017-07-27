import merge from 'lodash/merge'

import {
  Mesh,
  PositionalAudio
} from 'three'

import { getGeometryFromObject } from './../parser/raw-object-parser'
import { getAudio } from './assets'
import { getMaterialInstance } from './materials'
import { transform } from './world'

const defaultMeshConfig = {
  castShadow: true,
  receiveShadow: true,
  instances: [],
  animations: [],
  sounds: []
}

function createMesh(name, geometry, material, config, audioListener) {
  const mesh = new Mesh(geometry, material)

  mesh.name          = name
  mesh.castShadow    = config.castShadow
  mesh.receiveShadow = config.receiveShadow

  transform(mesh, config)

  if (config.animations) {
    mesh.animations = config.animations
  }

  if (config.sounds) {
    config.sounds.map(sound => {
      let audio
      if (typeof sound === 'string') {
        audio = [sound, 1]
      } else {
        audio = sound
      }

      let positionalAudio = new PositionalAudio(audioListener)
      getAudio(audio[0], (soundBuffer) => {
        positionalAudio.name = audio[0]
        positionalAudio.setBuffer(soundBuffer)
        positionalAudio.setVolume(audio[1])
        positionalAudio.setRefDistance(mesh.position.distanceTo(audioListener.parent.position))
      })

      mesh.add(positionalAudio)
    })
  }

  if (config.userData) {
    mesh.userData = config.userData
  }

  return mesh
}

function add(scene, meshes, audioListener) {
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
      meshGeometry = getGeometryFromObject(meshConfig.geometry)
    }

    // create instances
    meshConfig.instances.map((shape, idx) => {
      scene.add(
        createMesh(
          meshConfig.name,
          meshGeometry,
          material,
          Object.assign({}, shape, {
            castShadow: meshConfig.castShadow,
            receiveShadow: meshConfig.receiveShadow,
            animations: meshConfig.animations,
            sounds: meshConfig.sounds,
            userData: {
              index: idx,
              click: !!meshConfig.onClick
            }
          }),
          audioListener
        )
      )
    })
  })
}

export {
  add
}
