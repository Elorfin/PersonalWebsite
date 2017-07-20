import { default as SM_BulletinBoard }   from 'models/Furniture/BulletinBoard/SM_BulletinBoard'
import { default as SM_Cabinet }         from 'models/Furniture/Cabinet/SM_Cabinet'
import { default as SM_CabinetDoor }     from 'models/Furniture/Cabinet/SM_CabinetDoor'
import { default as SM_Cupboard }        from 'models/Furniture/Cupboard/SM_Cupboard'
import { default as SM_CupboardWindows } from 'models/Furniture/Cupboard/SM_CupboardWindows'
import { default as SM_Documents }       from 'models/Furniture/Cupboard/SM_Documents'
import { default as SM_Desk }            from 'models/Furniture/Desk/SM_Desk'
import { default as SM_HighTable }       from 'models/Furniture/HighTable/SM_HighTable'
import { default as SM_Trash }           from 'models/Furniture/Trash/SM_Trash'
import { default as SM_Whiteboard }      from 'models/Furniture/Whiteboard/SM_Whiteboard'

const meshes = [
  // hall
  {
    geometry: SM_BulletinBoard,
    material: 'M_BulletinBoard',
    instances: [
      { scale: [1, 1, 1], position: [-16, 3.4, -1.4], rotation: [0, 90, 0] }
    ]
  },

  {
    geometry: SM_HighTable,
    material: 'M_HighTable',
    instances: [
      { scale: [1, 1, 1], position: [-14.5, 0, -1.6], rotation: [0, 45, 0] }
    ]
  },

  // office
  {
    geometry: SM_Whiteboard,
    material: 'M_Whiteboard',
    instances: [
      { scale: [1, 1, 1], position: [-3.4, 0, -7], rotation: [0, -8, 0] }
    ]
  },

  {
    geometry: SM_Trash,
    material: 'M_Trash',
    instances: [
      { scale: [1, 1, 1], position: [7.5, 0, 8.5], rotation: [0, 0, 0] }
    ]
  },

  {
    geometry: SM_Desk,
    material: 'M_Desk',
    instances: [
      { scale: [1, 1, 1], position: [8, 0, 5], rotation: [0, 55, 0] }
    ]
  },

  {
    geometry: SM_Cabinet,
    material: 'M_Cabinet',
    instances: [
      { scale: [1, 1, 1], position: [1, 0, -7.9], rotation: [0, 0, 0] }
    ]
  },
  {
    geometry: SM_CabinetDoor,
    material: 'M_CabinetDoor',
    instances: [
      { scale: [1, 1, 1], position: [1, 0.375, -6.4], rotation: [0, 0, 0] },
      { scale: [-1, -1, 1], position: [4, 5.625, -6.4], rotation: [0, 0, 0] }
    ]
  },

  {
    geometry: SM_CupboardWindows,
    material: 'M_CupboardWindows',
    receiveShadow: false,
    instances: [
      { scale: [1, 1, 1], position: [4.1, 0, -7.9], rotation: [0, 0, 0] }
    ]
  },
  {
    geometry: SM_Cupboard,
    material: 'M_Cupboard',
    instances: [
      { scale: [1, 1, 1], position: [4.1, 0, -7.9], rotation: [0, 0, 0] }
    ]
  },
  {
    geometry: SM_Documents,
    material: 'M_Documents',
    instances: [
      { scale: [1, 1, 1], position: [4.1, 0, -7.9], rotation: [0, 0, 0] }
    ]
  },
]

export {
  meshes
}
