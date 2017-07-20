import { default as SM_Pictures }      from 'models/Decoration/Pictures/SM_Pictures'
import { default as SM_SmallPlant }    from 'models/Decoration/SmallPlant/SM_SmallPlant'
import { default as SM_Poster }        from 'models/Decoration/Poster/SM_Poster'
import { default as SM_Octocat }       from 'models/Social/Octocat/SM_Octocat'
import { default as SM_LinkedIn }      from 'models/Social/LinkedIn/SM_LinkedIn'
import { default as SM_StackOverflow } from 'models/Social/StackOverflow/SM_StackOverflow'

const meshes = [
  {
    geometry: SM_Pictures,
    material: 'M_Pictures',
    instances: [
      { scale: [1, 1, 1], position: [6.2, 4, -8], rotation: [0, 0, 0] }
    ]
  },

  // plants
  {
    geometry: SM_SmallPlant,
    material: 'M_SmallPlant',
    instances: [
      { scale: [1, 1, 1], position: [4.7, 3, -6.7], rotation: [0, 0, 0] }
    ]
  },

  // social items
  {
    geometry: SM_Octocat,
    material: 'M_Octocat',
    instances: [
      { scale: [1, 1, 1], position: [5.95, 3, -7.1], rotation: [0, 0, 0] }
    ]
  },
  {
    geometry: SM_LinkedIn,
    material: 'M_LinkedIn',
    instances: [
      { scale: [1, 1, 1], position: [6.7, 3, -7.1], rotation: [0, 0, 0] }
    ]
  },
  {
    geometry: SM_StackOverflow,
    material: 'M_StackOverflow',
    instances: [
      { scale: [1, 1, 1], position: [7.45, 3, -7.1], rotation: [0, 0, 0] }
    ]
  },

  // posters
  {
    geometry: SM_Poster,
    material: 'M_Poster_SuperMario',
    instances: [
      { scale: [1, 1, 1], position: [-5, 7, -8], rotation: [0, 0, -89] }
    ]
  },

  {
    geometry: SM_Poster,
    material: 'M_Poster_CommitStrip',
    instances: [
      { scale: [1, 1, 1], position: [8.7, 3.9, -8], rotation: [0, 0, -2] }
    ]
  },
  {
    geometry: SM_Poster,
    material: 'M_Poster_StarWars',
    instances: [
      { scale: [1, 1, 1], position: [11.2, 4.6, -8], rotation: [0, 0, 1] }
    ]
  },
  {
    geometry: SM_Poster,
    material: 'M_Poster_KeepCalm',
    instances: [
      { scale: [1, 1, 1], position: [13.6, 4.3, -8], rotation: [0, 0, -4] }
    ]
  }
]

export {
  meshes
}
