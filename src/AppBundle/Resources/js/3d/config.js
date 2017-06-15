import {
  AmbientLight,
  DirectionalLight,
  DoubleSide,
  HemisphereLight,
  MeshPhongMaterial,
  PCFSoftShadowMap,
  SmoothShading,
  FlatShading,
  Vector3,
  WebGLRenderer
} from 'three'

import {
  GRID_HELPER,
  AXIS_HELPER,
  LIGHT_HELPER
} from './scene/constant'

const materials = {
  M_Wall: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading,
      normalScale: new Vector3(.5, .5)
    },
    textures: {
      map      : 'T_Wall_D',
      normalMap: 'T_Wall_N'
    }
  },

  M_Wood: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map      : 'T_Wood_D',
      normalMap: 'T_Wood_N'
    }
  },

  M_Carpet: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map      : 'T_Carpet_D',
      normalMap: 'T_Carpet_N'
    }
  },

  M_Elevator: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: 'T_Elevator_D'
    }
  },

  M_HighTable: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: 'T_HighTable_D'
    }
  },

  M_Cupboard: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: 'T_Cupboard_D'
    }
  },

  M_CupboardWindows: {
    type: MeshPhongMaterial,
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
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: 'T_Documents_D'
    }
  },

  M_Octocat: {
    type: MeshPhongMaterial,
    options: {
      shading: SmoothShading
    },
    textures: {
      map      : 'T_Octocat_D',
      normalMap: 'T_Octocat_N'
    }
  },

  M_LinkedIn: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: 'T_LinkedIn_D'
    }
  },

  M_StackOverflow: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: 'T_StackOverflow_D'
    }
  },

  M_SmallPlant: {
    type: MeshPhongMaterial,
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
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: 'T_CoffeeMachine_D'
    }
  },

  M_Poster_CommitStrip: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: 'T_Poster_CommitStrip_D'
    }
  },
  M_Poster_KeepCalm: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: 'T_Poster_KeepCalm_D'
    }
  },
  M_Poster_StarWars: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: 'T_Poster_StarWars_D'
    }
  }
}

export const config = {
  // Mapping of the used models / textures
  staticAssets: './dist/models/mapping.json',
  helpers: [
    /*AXIS_HELPER,*/
    GRID_HELPER,
    /*LIGHT_HELPER*/
  ],
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

  meshes: [
    {
      geometry: 'SM_Floor',
      material: materials.M_Wood,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [-16, 0, -16], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [-16, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [-16, 0, 0], rotation: [0, 0, 0] }
      ]
    },
    {
      geometry: 'SM_Floor',
      material: materials.M_Carpet,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [0, 0, 0], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [8, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [8, 0, 0], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [-8, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [-8, 0, 0], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: 'SM_Elevator',
      material: materials.M_Elevator,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [-16, 0, 4], rotation: [0, 90, 0] }
      ]
    },

    {
      geometry: 'SM_WallElevator',
      material: materials.M_Wall,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [-16, 0, 4], rotation: [0, 90, 0] },
      ]
    },

    {
      geometry: 'SM_Wall',
      material: materials.M_Wall,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [-16, 0, -4], rotation: [0, 90, 0] },
        { scale: [1, 1, 1], position: [-16, 0, 0], rotation: [0, 90, 0] },
        { scale: [1, 1, 1], position: [-16, 0, 8], rotation: [0, 90, 0] },

        { scale: [1, 1, 1], position: [-16, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [-12, 0, -8], rotation: [0, 90, 0] },

        { scale: [1, 1, 1], position: [-8, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [-4, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [4, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [8, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [12, 0, -8], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: 'SM_Cupboard',
      material: materials.M_Cupboard,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: 'SM_CupboardWindows',
      material: materials.M_CupboardWindows,
      castShadow: false,
      receiveShadow: false,
      instances: [
        { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: 'SM_Documents',
      material: materials.M_Documents,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: 'SM_Octocat',
      material: materials.M_Octocat,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [1.75, 3, -7.5], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: 'SM_LinkedIn',
      material: materials.M_LinkedIn,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [2.5, 3, -7.5], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: 'SM_StackOverflow',
      material: materials.M_StackOverflow,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [3.25, 3, -7.5], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: 'SM_SmallPlant',
      material: materials.M_SmallPlant,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [0.5, 3, -7], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: 'SM_CoffeeMachine',
      material: materials.M_CoffeeMachine,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [-15.5, 0, -8], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: 'SM_HighTable',
      material: materials.M_HighTable,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [-14.9, 0, -3], rotation: [0, 45, 0] }
      ]
    },

    {
      geometry: 'SM_Poster',
      material: materials.M_Poster_CommitStrip,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [5.4, 3.5, -8], rotation: [0, 0, -2] }
      ]
    },
    {
      geometry: 'SM_Poster',
      material: materials.M_Poster_StarWars,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [8.2, 4.1, -8], rotation: [0, 0, 1] }
      ]
    },

    {
      geometry: 'SM_Poster',
      material: materials.M_Poster_KeepCalm,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [10.8, 3.8, -8], rotation: [0, 0, -4] }
      ]
    }
  ]
}
