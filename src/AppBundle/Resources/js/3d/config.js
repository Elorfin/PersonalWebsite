import {
  AmbientLight,
  DirectionalLight,
  DoubleSide,
  HemisphereLight,
  PCFSoftShadowMap,
  SmoothShading,
  FlatShading,
  Vector3,
  WebGLRenderer
} from 'three'

const materials = {
  M_Wall: {
    options: {
      shading: FlatShading,
      normalScale: new Vector3(.5, .5)
    },
    textures: {
      map      : 'T_Wall_D',
      normalMap: 'T_Wall_N'
    }
  },

  M_BayWindow: {
    options: {
      shading: FlatShading,
      side: DoubleSide,
      transparent: true
    },
    textures: {
      map: 'T_BayWindow_D',
      alphaMap: 'T_BayWindow_A'
    }
  },

  M_Wood: {
    textures: {
      map      : 'T_Wood_D',
      normalMap: 'T_Wood_N'
    }
  },

  M_Carpet: {
    textures: {
      map      : 'T_Carpet_D',
      normalMap: 'T_Carpet_N'
    }
  },

  M_Elevator: {
    textures: {
      map: 'T_Elevator_D'
    }
  },

  M_HighTable: {
    textures: {
      map: 'T_HighTable_D'
    }
  },

  M_Cabinet: {
    textures: {
      map: 'T_Cabinet_D'
    }
  },

  M_CabinetDoor: {
    textures: {
      map: 'T_CabinetDoor_D'
    }
  },

  M_Cupboard: {
    textures: {
      map: 'T_Cupboard_D'
    }
  },

  M_CupboardWindows: {
    options: {
      shading: FlatShading,
      transparent: true,
      opacity: .6,
    },
    textures: {
      map: 'T_CupboardWindows_D'
    }
  },

  M_Documents: {
    options: {
      shading: FlatShading
    },
    textures: {
      map: 'T_Documents_D'
    }
  },

  M_Octocat: {
    options: {
      shading: SmoothShading
    },
    textures: {
      map      : 'T_Octocat_D',
      normalMap: 'T_Octocat_N'
    }
  },

  M_LinkedIn: {
    textures: {
      map: 'T_LinkedIn_D'
    }
  },

  M_StackOverflow: {
    textures: {
      map: 'T_StackOverflow_D'
    }
  },

  M_SmallPlant: {
    options: {
      shading: SmoothShading,
      side: DoubleSide
    },
    textures: {
      map: 'T_SmallPlant_D',
      normalMap: 'T_SmallPlant_N'
    }
  },

  M_CoffeeMachine: {
    textures: {
      map: 'T_CoffeeMachine_D'
    }
  },

  M_Poster_CommitStrip: {
    textures: {
      map: 'T_Poster_CommitStrip_D'
    }
  },
  M_Poster_KeepCalm: {
    textures: {
      map: 'T_Poster_KeepCalm_D'
    }
  },
  M_Poster_StarWars: {
    textures: {
      map: 'T_Poster_StarWars_D'
    }
  }
}

export const config = {
  // Mapping of the used models / textures
  staticAssets: './dist/models/mapping.json',
  helpers: {
    lights: false,
    axis: false,
    grid: true
  },
  grid: {
    colors: [0xff0000, 0x8f8f8f],
    subdivisions: 40,
    size: 40
  },

  render: {
    renderer: WebGLRenderer,
    background: [0xFCFCFC, 1],
    antialias: true,
    shadow: {
      enabled: true,
      type: PCFSoftShadowMap
    }
  },

  lights: [
    {
      type: HemisphereLight,
      color: [0xaaaaaa, 0x000000, .5]
    },
    {
      type: AmbientLight,
      color: [0x404040, .5]
    },
    {
      type: DirectionalLight,
      color: [0xffffff],
      castShadow: true,
      position: [16, 16, 4]
    }
  ],

  materials: materials,

  meshes: [
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

        { scale: [1, 1, 1], position: [-12, 0, -12], rotation: [0, 0, 0] },

        { scale: [1, 1, 1], position: [-8, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [-4, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [4, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [8, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [12, 0, -8], rotation: [0, 0, 0] }
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
      castShadow: false,
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

    {
      geometry: 'SM_SmallPlant',
      material: 'M_SmallPlant',
      instances: [
        { scale: [1, 1, 1], position: [0.7, 3, -7], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: 'SM_CoffeeMachine',
      material: 'M_CoffeeMachine',
      instances: [
        { scale: [1, 1, 1], position: [-15.5, 0, -8], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: 'SM_HighTable',
      material: 'M_HighTable',
      instances: [
        { scale: [1, 1, 1], position: [-14.9, 0, -3], rotation: [0, 45, 0] }
      ]
    },

    {
      geometry: 'SM_Poster',
      material: 'M_Poster_CommitStrip',
      instances: [
        { scale: [1, 1, 1], position: [5.4, 3.5, -8], rotation: [0, 0, -2] }
      ]
    },
    {
      geometry: 'SM_Poster',
      material: 'M_Poster_StarWars',
      instances: [
        { scale: [1, 1, 1], position: [8.2, 4.1, -8], rotation: [0, 0, 1] }
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
}
