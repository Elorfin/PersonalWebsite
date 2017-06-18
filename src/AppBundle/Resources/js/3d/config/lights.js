import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PointLight
} from 'three'

const lights = [
  {
    type: HemisphereLight,
    options: [0xbbbbbb, 0x000000, .5]
  },
  {
    type: AmbientLight,
    options: [0xffffff, .3]
  },

  // sun
  {
    type: DirectionalLight,
    options: [0xfff2d8, .5],
    castShadow: true,
    shadow: {
      //bias: .09,
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
    options: [0xffffff, .25, 50, 2],
    castShadow: true,
    shadow: {
      camera: {
        near: .1,
        far: 8
      },
      mapSize: 1024
    },
    position: [-12, 7.9, 2]
  },

  {
    type: PointLight,
    options: [0xffffff, .25, 50, 2],
    castShadow: true,
    shadow: {
      camera: {
        near: .1,
        far: 8
      },
      mapSize: 1024
    },
    position: [-12, 7.9, 10]
  }
]

export {
  lights
}
