import {
  AmbientLight,
  DirectionalLight,
  PointLight,
  SpotLight
} from 'three'

const lights = [
  {
    type: AmbientLight,
    options: [0xFFFFFF, .6]
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
    instances: [
      {position: [16, 16, 4]}
    ]
  },

  // neon lights
  {
    type: PointLight,
    options: [0xFFFFFF, .25, 24, 2],
    castShadow: true,
    shadow: {
      camera: {
        near: .1,
        far: 8
      },
      mapSize: 1024
    },
    instances: [
      // hall
      {position: [-12, 7.9, 0]},
      {position: [-12, 7.9, 8]},

      // desk
      {position: [-2, 7.9, 0]},
      {position: [8, 7.9, 0]},
      {position: [-2, 7.9, 8]},
      {position: [8, 7.9, 8]}
    ]
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
    instances: [
      {position: [5.975, 3.7, 6], target: [6.525, 0, 6]}
    ]
  }
]

const meshes = [
  {
    geometry: 'SM_NeonLight',
    material: 'M_NeonLight',
    instances: [
      // hall
      {scale: [1, 1, 1], position: [-12, 8, 0], rotation: [0, 0, 0]},
      {scale: [1, 1, 1], position: [-12, 8, 8], rotation: [0, 0, 0]},

      // desk
      {scale: [1, 1, 1], position: [-2, 8, 0], rotation: [0, 0, 0]},
      {scale: [1, 1, 1], position: [8, 8, 0], rotation: [0, 0, 0]},
      {scale: [1, 1, 1], position: [-2, 8, 8], rotation: [0, 0, 0]},
      {scale: [1, 1, 1], position: [8, 8, 8], rotation: [0, 0, 0]}
    ]
  },

  {
    geometry: 'SM_DeskLamp',
    material: 'M_DeskLamp',
    instances: [
      {scale: [1, 1, 1], position: [5.25, 2, 6], rotation: [0, 0, 0]}
    ]
  }
]

export {
  lights,
  meshes
}
