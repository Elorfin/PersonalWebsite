import {
  PCFSoftShadowMap,
  PerspectiveCamera,
  WebGLRenderer
} from 'three'

import { lights, meshes as lightsMeshes } from './lights'
import { materials } from './materials'

import { meshes as buildingMeshes }    from './building'
import { meshes as furnitureMeshes }   from './furniture'
import { meshes as appliancesMeshes }  from './appliances'
import { meshes as decorationsMeshes } from './decorations'

export const config = {
  // Mapping of the used models / textures
  staticAssets: './dist/models/mapping.json',

  // dev debug options
  helpers: {
    grid: false,
    axis: false,
    lights: false,
    stats: true
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
    instance: (container) => {
      const height   = 8 // back wall height
      const distance = 16
      const vFOV     = 2 * Math.atan(height / ( 2 * distance ))

      return new PerspectiveCamera(vFOV * 180 / Math.PI, container.offsetWidth / container.offsetHeight, 10, 50)
    },
    position: [0, 4, 28],
    lookAt: { x: 0, y: 4, z: 0 }

    // top-down camera
    /*position: [0, 48, 2],
    lookAt: { x: 0, y: 0, z: 2 }*/
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
