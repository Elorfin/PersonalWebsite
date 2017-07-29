import { default as SM_BulletinBoard }   from 'models/Furniture/BulletinBoard/SM_BulletinBoard'
import { default as SM_Cabinet }         from 'models/Furniture/Cabinet/SM_Cabinet'
import { default as SM_CabinetDoor }     from 'models/Furniture/Cabinet/SM_CabinetDoor'
import { default as SM_Chair }           from 'models/Furniture/Chair/SM_Chair'
import { default as SM_Couch }           from 'models/Furniture/Couch/SM_Couch'
import { default as SM_Cupboard }        from 'models/Furniture/Cupboard/SM_Cupboard'
import { default as SM_CupboardWindows } from 'models/Furniture/Cupboard/SM_CupboardWindows'
import { default as SM_Documents }       from 'models/Furniture/Cupboard/SM_Documents'
import { default as SM_Desk }            from 'models/Furniture/Desk/SM_Desk'
import { default as SM_DeskChair }       from 'models/Furniture/DeskChair/SM_DeskChair'
import { default as SM_DrawingTable }    from 'models/Furniture/DrawingTable/SM_DrawingTable'
import { default as SM_HighTable }       from 'models/Furniture/HighTable/SM_HighTable'
import { default as SM_Shelf }           from 'models/Furniture/Shelf/SM_Shelf'
import { default as SM_SmallTable }      from 'models/Furniture/SmallTable/SM_SmallTable'
import { default as SM_Trash }           from 'models/Furniture/Trash/SM_Trash'
import { default as SM_Whiteboard }      from 'models/Furniture/Whiteboard/SM_Whiteboard'

const meshes = [
  // hall
  {
    name: 'SM_BulletinBoard',
    geometry: SM_BulletinBoard,
    material: 'M_BulletinBoard',
    instances: [
      { scale: [1, 1, 1], position: [-16, 3.4, -1.4], rotation: [0, 90, 0] }
    ]
  },

  {
    name: 'SM_HighTable',
    geometry: SM_HighTable,
    material: 'M_HighTable',
    instances: [
      { scale: [1, 1, 1], position: [-14.5, 0, -1.6], rotation: [0, 45, 0] }
    ]
  },

  // office
  {
    name: 'SM_Whiteboard',
    geometry: SM_Whiteboard,
    material: 'M_Whiteboard',
    onClick: (mesh) => {
      // play sound effect
      mesh.getObjectByName('A_MarkerWriting').play()
    },
    sounds: [
      ['A_MarkerWriting', .3]
    ],
    instances: [
      { scale: [1, 1, 1], position: [-3.4, 0, -7], rotation: [0, -8, 0] }
    ]
  },

  {
    name: 'SM_Couch',
    geometry: SM_Couch,
    material: 'M_Couch',
    instances: [
      { scale: [1, 1, 1], position: [-7.4, 0, 12], rotation: [0, 0, 0] }
    ]
  },

  {
    name: 'SM_Trash',
    geometry: SM_Trash,
    material: 'M_Trash',
    instances: [
      { scale: [1, 1, 1], position: [5, 0, 8], rotation: [0, 0, 0] }
    ]
  },

  {
    name: 'SM_DrawingTable',
    geometry: SM_DrawingTable,
    material: 'M_DrawingTable',
    instances: [
      { scale: [1, 1, 1], position: [14, 0, -6.2], rotation: [0, -58, 0] }
    ]
  },

  {
    name: 'SM_SmallTable',
    geometry: SM_SmallTable,
    material: 'M_Desk',
    instances: [
      { scale: [1, 1, 1], position: [15.9, 0, 4.8], rotation: [0, -90, 0] }
    ]
  },
  {
    name: 'SM_Shelf',
    geometry: SM_Shelf,
    material: 'M_Desk',
    instances: [
      { scale: [1, 1, 1], position: [15.9, 0, 8.35], rotation: [0, -90, 0] }
    ]
  },

  {
    name: 'SM_Desk',
    geometry: SM_Desk,
    material: 'M_Desk',
    instances: [
      { scale: [1, 1, 1], position: [8, 0, 4], rotation: [0, 55, 0] }
    ]
  },

  {
    name: 'SM_DeskChair',
    geometry: SM_DeskChair,
    material: 'M_DeskChair',
    instances: [
      { scale: [1, 1, 1], position: [9.5, 0, 5.5], rotation: [0, -100, 0] }
    ]
  },

  {
    name: 'SM_Chair',
    geometry: SM_Chair,
    material: 'M_DeskChair',
    instances: [
      { scale: [1, 1, 1], position: [2.5, 0, 4.2], rotation: [0, 95, 0] },
      { scale: [1, 1, 1], position: [4.5, 0, 0], rotation: [0, 30, 0] }
    ]
  },

  {
    name: 'SM_Cabinet',
    geometry: SM_Cabinet,
    material: 'M_Cabinet',
    instances: [
      { scale: [1, 1, 1], position: [1, 0, -7.9], rotation: [0, 0, 0] }
    ]
  },
  {
    name: 'SM_CabinetDoor',
    geometry: SM_CabinetDoor,
    material: 'M_CabinetDoor',
    instances: [
      { scale: [1, 1, 1], position: [1, 0.375, -6.4], rotation: [0, 0, 0] },
      { scale: [-1, -1, 1], position: [4, 5.625, -6.4], rotation: [0, 0, 0] }
    ]
  },

  {
    name: 'SM_CupboardWindows',
    geometry: SM_CupboardWindows,
    material: 'M_CupboardWindows',
    receiveShadow: false,
    instances: [
      { scale: [1, 1, 1], position: [4.1, 0, -7.9], rotation: [0, 0, 0] }
    ]
  },
  {
    name: 'SM_Cupboard',
    geometry: SM_Cupboard,
    material: 'M_Cupboard',
    instances: [
      { scale: [1, 1, 1], position: [4.1, 0, -7.9], rotation: [0, 0, 0] }
    ]
  },
  {
    name: 'SM_Documents',
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
