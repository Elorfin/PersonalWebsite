import {
  PCFSoftShadowMap,
  WebGLRenderer
} from 'three'

import { lights, meshes as lightsMeshes } from './lights'
import { materials } from './materials'

import { meshes as buildingMeshes } from './building'
import { meshes as furnitureMeshes } from './furniture'
import { meshes as appliancesMeshes } from './appliances'
import { meshes as decorationsMeshes } from './decorations'

export const config = {
  // Mapping of the used models / textures
  staticAssets: './dist/models/mapping.json',

  // dev debug options
  helpers: {
    grid: true,
    axis: false,
    lights: false
  },

  grid: {
    colors: [0xff0000, 0x8f8f8f],
    subdivisions: 40,
    size: 40
  },

  render: {
    renderer: WebGLRenderer,
    background: [0xFCFCFC, 1],
    antialias: true,
    shadow: {
      enabled: true,
      type: PCFSoftShadowMap
    }
  },

  camera: {
    position: [0, 4, 28],
    lookAt: {
      x: 0,
      y: 4,
      z: 0
    }
  },

  lights: lights,
  materials: materials,
  meshes: [
    ...buildingMeshes,
    ...lightsMeshes,
    ...furnitureMeshes,
    ...appliancesMeshes,
    ...decorationsMeshes
  ]
}
