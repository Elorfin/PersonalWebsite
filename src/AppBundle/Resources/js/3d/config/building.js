import { PlaneBufferGeometry } from 'three'

const meshes = [
  // ceiling
  /*{
    geometry: () => new PlaneBufferGeometry(32, 24),
    material: 'M_Ceiling',
    instances: [
      { scale: [1, 1, 1], position: [0, 8, 0], rotation: [90, 0, 0] }
    ]
  },*/

  {
    geometry: 'SM_Ceiling',
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
    geometry: 'SM_Ventilation',
    material: 'M_Ventilation',
    instances: [
      { scale: [1, 1, 1], position: [-10, 8, -4], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [12, 8, -4], rotation: [0, 0, 0] }
    ]
  },

  // floor
  {
    geometry: () => new PlaneBufferGeometry(24, 20),
    material: 'M_Carpet',
    instances: [
      { scale: [1, 1, 1], position: [4, 0, 2], rotation: [-90, 0, 0] }
    ]
  },
  {
    geometry: () => new PlaneBufferGeometry(8, 20),
    material: 'M_Wood',
    instances: [
      { scale: [1, 1, 1], position: [-12, 0, 2], rotation: [-90, 0, 0] }
    ]
  },

  {
    geometry: 'SM_Elevator',
    material: 'M_Elevator',
    instances: [
      { scale: [1, 1, 1], position: [-16, 0, 4], rotation: [0, 90, 0] }
    ]
  },

  {
    geometry: 'SM_Extinguisher',
    material: 'M_Extinguisher',
    instances: [
      { scale: [1, 1, 1], position: [-16, 3, 6], rotation: [0, 90, 0] }
    ]
  },

  {
    geometry: 'SM_WallElevator',
    material: 'M_Wall',
    instances: [
      { scale: [1, 1, 1], position: [-16, 0, 4], rotation: [0, 90, 0] },
    ]
  },

  {
    geometry: 'SM_WallDoor',
    material: 'M_Wall',
    instances: [
      { scale: [1, 1, 1], position: [-7.6, 0, -4], rotation: [0, 90, 0] },
      { scale: [-1, 1, 1], position: [-8, 0, -8], rotation: [0, 90, 0] },
    ]
  },

  // office door
  {
    geometry: 'SM_DoorFrame',
    material: 'M_BayWindow',
    instances: [
      { scale: [1, 1, 1], position: [-8, 0, -4], rotation: [0, 90, 0] }
    ]
  },
  {
    geometry: 'SM_Door',
    material: 'M_Door',
    instances: [
      { scale: [1, 1, 1], position: [-7.625, 0, -7.125], rotation: [0, 180, 0] }
    ]
  },

  // left bay (indoor)
  {
    geometry: 'SM_BayWindowLarge',
    material: 'M_BayWindow',
    instances: [
      { scale: [1, 1, 1], position: [-8, 0, 4], rotation: [0, 90, 0] },
      { scale: [1, 1, 1], position: [-8, 0, 12], rotation: [0, 90, 0] }
    ]
  },

  // right bay (outdoor)
  {
    geometry: 'SM_BayWindow',
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
    geometry: () => new PlaneBufferGeometry(1, 8),
    material: 'M_Window',
    castShadow: false,
    instances: [
      // indoor (left)
      { scale: [16, 1, 1], position: [-7.75, 4, 4], rotation: [0, 90, 0] },

      // outdoor (right)
      { scale: [20, 1, 1], position: [16.25, 4, 2], rotation: [0, 90, 0] }
    ]
  },

  {
    geometry: 'SM_Wall',
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
      { scale: [1, 1, 1], position: [12, 0, -8], rotation: [0, 0, 0] }
    ]
  }
]

export {
  meshes
}
