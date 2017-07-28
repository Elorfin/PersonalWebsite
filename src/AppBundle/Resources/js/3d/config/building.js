import {
  AnimationClip,
  NumberKeyframeTrack,
  PlaneBufferGeometry,
  LoopOnce,
  Math as TMath
} from 'three'

import { default as SM_Ceiling }        from 'models/Building/Ceiling/SM_Ceiling'
import { default as SM_Ventilation }    from 'models/Building/Ventilation/SM_Ventilation'
import { default as SM_Elevator }       from 'models/Building/Elevator/SM_Elevator'
import { default as SM_Extinguisher }   from 'models/Building/Extinguisher/SM_Extinguisher'
import { default as SM_Wall }           from 'models/Building/Wall/SM_Wall'
import { default as SM_WallDoor }       from 'models/Building/Wall/SM_WallDoor'
import { default as SM_WallElevator }   from 'models/Building/Wall/SM_WallElevator'
import { default as SM_Door }           from 'models/Building/Door/SM_Door'
import { default as SM_DoorFrame }      from 'models/Building/Door/SM_DoorFrame'
import { default as SM_BayWindowLarge } from 'models/Building/Window/SM_BayWindowLarge'
import { default as SM_BayWindow }      from 'models/Building/Window/SM_BayWindow'

const meshes = [
  // ceiling
  {
    name: 'SM_Ceiling',
    geometry: SM_Ceiling,
    material: 'M_Ceiling',
    instances: [
      { scale: [1, 1, 1], position: [8, 8, -8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [0, 8, -8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [-8, 8, -8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [-16, 8, -8], rotation: [0, 0, 0] },

      { scale: [1, 1, 1], position: [8, 8, 0], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [0, 8, 0], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [-8, 8, 0], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [-16, 8, 0], rotation: [0, 0, 0] },

      { scale: [1, 1, 1], position: [8, 8, 8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [0, 8, 8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [-8, 8, 8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [-16, 8, 8], rotation: [0, 0, 0] },
    ]
  },

  {
    name: 'SM_Ventilation',
    geometry: SM_Ventilation,
    material: 'M_Ventilation',
    instances: [
      { scale: [1, 1, 1], position: [-10, 8, -4], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [12, 8, -4], rotation: [0, 0, 0] }
    ]
  },

  // floor
  {
    name: 'SM_CarpetFloor',
    geometry: () => new PlaneBufferGeometry(24, 20),
    material: 'M_Carpet',
    instances: [
      { scale: [1, 1, 1], position: [4, 0, 2], rotation: [-90, 0, 0] }
    ]
  },
  {
    name: 'SM_WoodFloor',
    geometry: () => new PlaneBufferGeometry(8, 20),
    material: 'M_Wood',
    instances: [
      { scale: [1, 1, 1], position: [-12, 0, 2], rotation: [-90, 0, 0] }
    ]
  },

  // walls
  {
    name: 'SM_Wall',
    geometry: SM_Wall,
    material: 'M_Wall',
    instances: [
      // left wall
      { scale: [1, 1, 1], position: [-16, 0, -4], rotation: [0, 90, 0] },
      { scale: [1, 1, 1], position: [-16, 0, 0], rotation: [0, 90, 0] },
      { scale: [1, 1, 1], position: [-16, 0, 8], rotation: [0, 90, 0] },
      { scale: [1, 1, 1], position: [-16, 0, 12], rotation: [0, 90, 0] },

      // bottom wall
      { scale: [1, 1, 1], position: [-16, 0, -8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [-12, 0, -8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [-8, 0, -8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [-4, 0, -8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [4, 0, -8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [8, 0, -8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [12, 0, -8], rotation: [0, 0, 0] },

      // front wall
      { scale: [-1, 1, 1], position: [-12, 0, 12], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [-8, 0, 12], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [-4, 0, 12], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [0, 0, 12], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [4, 0, 12], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [8, 0, 12], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [12, 0, 12], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [16, 0, 12], rotation: [0, 0, 0] }
    ]
  },

  {
    name: 'SM_WallElevator',
    geometry: SM_WallElevator,
    material: 'M_Wall',
    instances: [
      { scale: [1, 1, 1], position: [-16, 0, 4], rotation: [0, 90, 0] },
    ]
  },

  {
    name: 'SM_WallDoor',
    geometry: SM_WallDoor,
    material: 'M_Wall',
    instances: [
      { scale: [1, 1, 1], position: [-7.6, 0, -4], rotation: [0, 90, 0] },
      { scale: [-1, 1, 1], position: [-8, 0, -8], rotation: [0, 90, 0] },
    ]
  },

  {
    name: 'SM_Elevator',
    geometry: SM_Elevator,
    material: 'M_Elevator',
    instances: [
      { scale: [1, 1, 1], position: [-16, 0, 4], rotation: [0, 90, 0] }
    ]
  },

  {
    name: 'SM_Extinguisher',
    geometry: SM_Extinguisher,
    material: 'M_Extinguisher',
    instances: [
      { scale: [1, 1, 1], position: [-16, 3, 6], rotation: [0, 90, 0] }
    ]
  },

  // office door
  {
    name: 'SM_DoorFrame',
    geometry: SM_DoorFrame,
    material: 'M_DoorFrame',
    instances: [
      { scale: [1, 1, 1], position: [-8, 0, -4], rotation: [0, 90, 0] }
    ]
  },
  {
    name: 'SM_Door',
    geometry: SM_Door,
    material: 'M_Door',
    onClick: (mesh, scene, animationMixer) => {
      const action = animationMixer
        .clipAction(!mesh.userData.opened ? 'open' : 'close', mesh)
        .setLoop(LoopOnce, 0)
      const sound = mesh.getObjectByName(!mesh.userData.opened ? 'A_DoorOpen' : 'A_DoorClose')
      action.clampWhenFinished = true

      if (mesh.currentAnimation) {
        if (mesh.currentAnimation.isRunning()) {
          action.crossFadeFrom(mesh.currentAnimation, .1)
          mesh.fadeAnimation = mesh.currentAnimation
        } else {
          if (mesh.fadeAnimation) {
            mesh.fadeAnimation.stopWarping().stopFading().stop()
          }
          mesh.currentAnimation.stopWarping().stopFading().stop()
        }
      }

      action.play()
      sound.play()

      mesh.currentAnimation = action
      // toggle open state
      mesh.userData.opened = !mesh.userData.opened
    },
    sounds: [
      ['A_DoorOpen', .6],
      ['A_DoorClose', .6]
    ],
    animations: [
      new AnimationClip('open', .4, [
        new NumberKeyframeTrack('.rotation[y]', [0, .4], [TMath.degToRad(90), TMath.degToRad(180)])
      ]),
      new AnimationClip('close', .4, [
        new NumberKeyframeTrack('.rotation[y]', [0, .4], [TMath.degToRad(180), TMath.degToRad(90)])
      ])
    ],
    instances: [
      { scale: [1, 1, 1], position: [-7.625, 0, -7.125], rotation: [0, 90, 0] }
    ],
  },

  // left bay (indoor)
  {
    name: 'SM_BayWindowLarge',
    geometry: SM_BayWindowLarge,
    material: 'M_BayWindow',
    instances: [
      { scale: [1, 1, 1], position: [-8, 0, 4], rotation: [0, 90, 0] },
      { scale: [1, 1, 1], position: [-8, 0, 12], rotation: [0, 90, 0] }
    ]
  },

  // right bay (outdoor)
  {
    name: 'SM_BayWindow',
    geometry: SM_BayWindow,
    material: 'M_BayWindow',
    instances: [
      { scale: [1, 1, 1], position: [16, 0, -4], rotation: [0, 90, 0] },
      { scale: [1, 1, 1], position: [16, 0, 0], rotation: [0, 90, 0] },
      { scale: [1, 1, 1], position: [16, 0, 4], rotation: [0, 90, 0] },
      { scale: [1, 1, 1], position: [16, 0, 8], rotation: [0, 90, 0] },
      { scale: [1, 1, 1], position: [16, 0, 12], rotation: [0, 90, 0] }
    ]
  },

  // windows
  {
    name: 'SM_Window',
    geometry: () => new PlaneBufferGeometry(1, 8),
    material: 'M_Window',
    castShadow: false,
    instances: [
      // indoor (left)
      { scale: [16, 1, 1], position: [-7.75, 4, 4], rotation: [0, 90, 0] },

      // outdoor (right)
      { scale: [20, 1, 1], position: [16.25, 4, 2], rotation: [0, 90, 0] }
    ]
  }
]

export {
  meshes
}
