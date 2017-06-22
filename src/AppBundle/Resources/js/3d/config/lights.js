import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PointLight
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
  }
]

export {
  lights
}
