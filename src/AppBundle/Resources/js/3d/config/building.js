import { PlaneGeometry } from 'three'

const meshes = [
  {
    geometry: 'SM_Floor',
    material: 'M_Ceiling',
    instances: [
      { scale: [-1, 1, 1], position: [-8, 8, -12], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [-8, 8, -4], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [-8, 8, 4], rotation: [0, 0, 0] },

      { scale: [-1, 1, 1], position: [0, 8, -12], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [8, 8, -12], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [16, 8, -12], rotation: [0, 0, 0] },

      { scale: [-1, 1, 1], position: [0, 8, -4], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [8, 8, -4], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [16, 8, -4], rotation: [0, 0, 0] },

      { scale: [-1, 1, 1], position: [0, 8, 4], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [8, 8, 4], rotation: [0, 0, 0] },
      { scale: [-1, 1, 1], position: [16, 8, 4], rotation: [0, 0, 0] }
    ]
  },

  {
    geometry: 'SM_Floor',
    material: 'M_Wood',
    instances: [
      { scale: [1, 1, 1], position: [-16, 0, -12], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [-16, 0, -4], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [-16, 0, 4], rotation: [0, 0, 0] }
    ]
  },
  {
    geometry: 'SM_Floor',
    material: 'M_Carpet',
    instances: [
      { scale: [1, 1, 1], position: [-8, 0, -12], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [0, 0, -12], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [8, 0, -12], rotation: [0, 0, 0] },

      { scale: [1, 1, 1], position: [-8, 0, -4], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [0, 0, -4], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [8, 0, -4], rotation: [0, 0, 0] },

      { scale: [1, 1, 1], position: [-8, 0, 4], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [0, 0, 4], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [8, 0, 4], rotation: [0, 0, 0] }
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

  {
    geometry: 'SM_BayWindowLarge',
    material: 'M_BayWindowLarge',
    instances: [
      { scale: [1, 1, 1], position: [-8, 0, 4], rotation: [0, 90, 0] },
      { scale: [1, 1, 1], position: [-8, 0, 12], rotation: [0, 90, 0] }
    ]
  },

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

  {
    geometry: () => new PlaneGeometry(1, 8),
    material: 'M_Window',
    castShadow: false,
    instances: [
      // indoor (left)
      { scale: [16, 1, 1], position: [-7.75, 4, 4], rotation: [0, 90, 0] },

      // outdoor (right)
      { scale: [20, 1, 1], position: [16.25, 4, 2], rotation: [0, 90, 0] },
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

      { scale: [1, 1, 1], position: [-16, 0, -8], rotation: [0, 0, 0] },
      { scale: [1, 1, 1], position: [-12, 0, -8], rotation: [0, 90, 0] },

      { scale: [1, 1, 1], position: [-8, 0, -12], rotation: [0, -90, 0] },

      { scale: [1, 1, 1], position: [-12, 0, -12], rotation: [0, 0, 0] },

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
