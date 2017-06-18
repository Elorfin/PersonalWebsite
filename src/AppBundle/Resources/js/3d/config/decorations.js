
const meshes = [
  // plants
  {
    geometry: 'SM_SmallPlant',
    material: 'M_SmallPlant',
    instances: [
      { scale: [1, 1, 1], position: [0.7, 3, -7], rotation: [0, 0, 0] }
    ]
  },

  // social items
  {
    geometry: 'SM_Octocat',
    material: 'M_Octocat',
    instances: [
      { scale: [1, 1, 1], position: [1.95, 3, -7.5], rotation: [0, 0, 0] }
    ]
  },
  {
    geometry: 'SM_LinkedIn',
    material: 'M_LinkedIn',
    instances: [
      { scale: [1, 1, 1], position: [2.7, 3, -7.5], rotation: [0, 0, 0] }
    ]
  },
  {
    geometry: 'SM_StackOverflow',
    material: 'M_StackOverflow',
    instances: [
      { scale: [1, 1, 1], position: [3.45, 3, -7.5], rotation: [0, 0, 0] }
    ]
  },

  // posters
  {
    geometry: 'SM_Poster',
    material: 'M_Poster_SuperMario',
    instances: [
      { scale: [1, 1, 1], position: [2.8, 6.9, -8], rotation: [0, 0, -89] }
    ]
  },
  {
    geometry: 'SM_Poster',
    material: 'M_Poster_CommitStrip',
    instances: [
      { scale: [1, 1, 1], position: [5.9, 3.2, -8], rotation: [0, 0, -2] }
    ]
  },
  {
    geometry: 'SM_Poster',
    material: 'M_Poster_StarWars',
    instances: [
      { scale: [1, 1, 1], position: [8.4, 4.1, -8], rotation: [0, 0, 1] }
    ]
  },
  {
    geometry: 'SM_Poster',
    material: 'M_Poster_KeepCalm',
    instances: [
      { scale: [1, 1, 1], position: [10.8, 3.8, -8], rotation: [0, 0, -4] }
    ]
  }
]

export {
  meshes
}
