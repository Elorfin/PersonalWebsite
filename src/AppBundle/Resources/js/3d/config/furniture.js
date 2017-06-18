
const meshes = [
  // break room
  {
    geometry: 'SM_HighTable',
    material: 'M_HighTable',
    instances: [
      { scale: [1, 1, 1], position: [-14.9, 0, -3], rotation: [0, 45, 0] }
    ]
  },

  // office
  {
    geometry: 'SM_Desk',
    material: 'M_Desk',
    instances: [
      { scale: [1, 1, 1], position: [9, 0, 5], rotation: [0, 55, 0] }
    ]
  },

  {
    geometry: 'SM_Cabinet',
    material: 'M_Cabinet',
    instances: [
      { scale: [1, 1, 1], position: [-3.1, 0, -8], rotation: [0, 0, 0] }
    ]
  },

  {
    geometry: 'SM_CabinetDoor',
    material: 'M_CabinetDoor',
    instances: [
      { scale: [1, 1, 1], position: [-3.1, 0.375, -6.5], rotation: [0, 0, 0] },
      { scale: [-1, -1, 1], position: [-0.1, 5.625, -6.5], rotation: [0, 0, 0] }
    ]
  },

  {
    geometry: 'SM_CupboardWindows',
    material: 'M_CupboardWindows',
    receiveShadow: false,
    instances: [
      { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] }
    ]
  },

  {
    geometry: 'SM_Cupboard',
    material: 'M_Cupboard',
    instances: [
      { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] }
    ]
  },

  {
    geometry: 'SM_Documents',
    material: 'M_Documents',
    instances: [
      { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] }
    ]
  },
]

export {
  meshes
}
