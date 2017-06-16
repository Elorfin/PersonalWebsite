import merge from 'lodash/merge'

import {
  FlatShading,
  MeshPhongMaterial
} from 'three'

import {
  getTexture
} from './assets'

let registeredMaterials = {}

// reuse materials to avoids `new` object operations
const initializedMaterials = {}

const defaultMaterialConfig = {
  type: MeshPhongMaterial,
  options: {
    shading: FlatShading
  },
  textures: {}
}

function registerMaterials(materials) {
  registeredMaterials = materials
}

function createMaterialInstance(name) {
  if (!registeredMaterials[name]) {
    throw new Error('Try to access a non existing material.')
  }

  const config = registeredMaterials[name]
  const materialConfig = merge({}, defaultMaterialConfig, config)

  const constructorOptions = merge({}, materialConfig.options)

  // Load texture files if any
  if (materialConfig.textures) {
    for (let textureName in materialConfig.textures) {
      if (materialConfig.textures.hasOwnProperty(textureName)) {
        constructorOptions[textureName] = getTexture(materialConfig.textures[textureName])
      }
    }
  }

  return new materialConfig.type(constructorOptions)
}

function getMaterialInstance(name) {
  if (!initializedMaterials[name]) {
    initializedMaterials[name] = createMaterialInstance(name)
  }

  return initializedMaterials[name]
}

export {
  registerMaterials,
  getMaterialInstance
}
