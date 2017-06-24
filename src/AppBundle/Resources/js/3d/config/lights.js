import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PointLight,
  SpotLight
} from 'three'

const lights = [
  {
    type: HemisphereLight,
    options: [0xBBBBBB, 0x000000, .5]
  },
  {
    type: AmbientLight,
    options: [0xFFFFFF, .3]
  },

  // sun
  {
    type: DirectionalLight,
    options: [0xFFF2D8, .5],
    castShadow: true,
    shadow: {
      camera: {
        near: 4,
        far: 40,
        left: -16,
        bottom: -16,
        top: 20,
        right: 16
      },
      mapSize: 4092
    },
    position: [16, 16, 4]
  },

  {
    type: PointLight,
    options: [0xFFFFFF, .25, 50, 2],
    castShadow: true,
    shadow: {
      camera: {
        near: .1,
        far: 8
      },
      mapSize: 1024
    },
    position: [-12, 7.9, -1]
  },

  {
    type: PointLight,
    options: [0xFFFFFF, .25, 50, 2],
    castShadow: true,
    shadow: {
      camera: {
        near: .1,
        far: 8
      },
      mapSize: 1024
    },
    position: [-12, 7.9, 7]
  },

  // desk lamp
  {
    type: SpotLight,
    options: [0xECE3AC, 1, 20, Math.PI/4, .5],
    castShadow: true,
    shadow: {
      camera: {
        near: .1,
        far: 4
      }
    },
    position: [6.725, 3.7, 6],
    target: [7.275, 0, 6]
  }
]

const meshes = [
  {
    geometry: 'SM_DeskLamp',
    material: 'M_DeskLamp',
    instances: [
      {scale: [1, 1, 1], position: [6, 2, 6], rotation: [0, 0, 0]}
    ]
  }
]

export {
  lights,
  meshes
}
