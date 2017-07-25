import {
  AmbientLight,
  /*DirectionalLight,*/
  PointLight,
  SpotLight
} from 'three'

import { default as SM_NeonLight } from 'models/Light/NeonLight/SM_NeonLight'
import { default as SM_DeskLamp }  from 'models/Light/DeskLamp/SM_DeskLamp'

const lights = [
  {
    type: AmbientLight,
    options: [0xFFFFFF, .6]
  },

  // sun
  // we loose 20FPS if it's enabled !!!
  /*{
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
  },*/

  // neon lights
  {
    name: 'L_NeonLight',
    type: PointLight,
    options: [0xFFFFFF, .25, 24, 2],
    castShadow: true,
    shadow: {
      camera: {
        near: .1,
        far: 8
      },
      /*mapSize: 1024*/
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
    name: 'L_DeskLamp',
    type: SpotLight,
    options: [0xECE3AC, 1, 20, Math.PI/4, .5],
    castShadow: true,
    shadow: {
      camera: {
        near: .1,
        far: 4
      },
      mapSize: 256
    },
    instances: [
      {position: [5.975, 3.7, 6], target: [6.525, 0, 6]}
    ]
  }
]

const meshes = [
  {
    name: 'SM_NeonLight',
    geometry: SM_NeonLight,
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
    name: 'SM_DeskLamp',
    geometry: SM_DeskLamp,
    material: 'M_DeskLamp',
    options: {
      on: true
    },
    onClick: (mesh, scene) => {
      // toggle light state
      scene.getObjectByName('L_DeskLamp').visible = !!mesh.userData.off
      mesh.userData.off = !mesh.userData.off

      // play sound effect
      mesh.getObjectByName('A_ButtonClick').play()
    },
    sounds: [
      ['A_ButtonClick', .2]
    ],
    instances: [
      {scale: [1, 1, 1], position: [5.25, 2, 6], rotation: [0, 0, 0]}
    ]
  }
]

export {
  lights,
  meshes
}
