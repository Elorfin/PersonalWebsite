import { default as SM_CoffeeMachine } from 'models/Appliance/CoffeeMachine/SM_CoffeeMachine'
import { default as SM_Computer }      from 'models/Appliance/Computer/SM_Computer'

const meshes = [
  {
    name: 'SM_CoffeeMachine',
    geometry: SM_CoffeeMachine,
    material: 'M_CoffeeMachine',
    onClick: (mesh) => {
      mesh.getObjectByName('A_CoffeeMaking').play()
    },
    sounds: [
      ['A_CoffeeMaking', .2]
    ],
    instances: [
      { scale: [1, 1, 1], position: [-15.5, 0, -7.8], rotation: [0, 0, 0] }
    ]
  },

  {
    name: 'SM_Computer',
    geometry: SM_Computer,
    material: 'M_Computer',
    instances: [
      { scale: [1, 1, 1], position: [6.7, 2, 4.2], rotation: [0, 55, 0] }
    ]
  }
]

export {
  meshes
}
