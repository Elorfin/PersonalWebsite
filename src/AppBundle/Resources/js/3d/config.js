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

const BASE_MODEL_PATH = './models'

const models = {
  SM_Floor:           BASE_MODEL_PATH+'/Building/Floor/SM_Floor.json',
  SM_Wall:            BASE_MODEL_PATH+'/Building/Wall/SM_Wall.json',
  SM_WallElevator:    BASE_MODEL_PATH+'/Building/Wall/SM_WallElevator.json',
  SM_Elevator:        BASE_MODEL_PATH+'/Building/Elevator/SM_Elevator.json',
  SM_HighTable:       BASE_MODEL_PATH+'/Furniture/HighTable/SM_HighTable.json',

  SM_Cupboard:        BASE_MODEL_PATH+'/Furniture/Cupboard/SM_Cupboard.json',
  SM_CupboardWindows: BASE_MODEL_PATH+'/Furniture/Cupboard/SM_CupboardWindows.json',
  SM_Documents:       BASE_MODEL_PATH+'/Furniture/Cupboard/SM_Documents.json',

  SM_Octocat:         BASE_MODEL_PATH+'/Social/Octocat/SM_Octocat.json',
  SM_LinkedIn:        BASE_MODEL_PATH+'/Social/LinkedIn/SM_LinkedIn.json',
  SM_StackOverflow:   BASE_MODEL_PATH+'/Social/StackOverflow/SM_StackOverflow.json',

  SM_SmallPlant:      BASE_MODEL_PATH+'/Plant/SmallPlant/SM_SmallPlant.json',
  SM_CoffeeMachine:   BASE_MODEL_PATH+'/Appliance/CoffeeMachine/SM_CoffeeMachine.json',

  SM_Poster:          BASE_MODEL_PATH+'/Decoration/Poster/SM_Poster.json'
}

const textures = {
  T_Wall_D:            BASE_MODEL_PATH+'/Building/Wall/Texture/T_Wall_D.png',
  T_Wall_N:            BASE_MODEL_PATH+'/Building/Wall/Texture/T_Wall_N.png',
  T_Wood_D:            BASE_MODEL_PATH+'/Building/Floor/Texture/T_Wood_D.png',
  T_Wood_N:            BASE_MODEL_PATH+'/Building/Floor/Texture/T_Wood_N.png',
  T_Carpet_D:          BASE_MODEL_PATH+'/Building/Floor/Texture/T_Carpet_D.png',
  T_Carpet_N:          BASE_MODEL_PATH+'/Building/Floor/Texture/T_Carpet_N.png',
  T_Elevator_D:        BASE_MODEL_PATH+'/Building/Elevator/Texture/T_Elevator_D.png',
  T_HighTable_D:       BASE_MODEL_PATH+'/Furniture/HighTable/Texture/T_HighTable_D.png',
  T_Cupboard_D:        BASE_MODEL_PATH+'/Furniture/Cupboard/Texture/T_Cupboard_D.png',
  T_CupboardWindows_D: BASE_MODEL_PATH+'/Furniture/Cupboard/Texture/T_CupboardWindows_D.png',
  T_Documents_D:       BASE_MODEL_PATH+'/Furniture/Cupboard/Texture/T_Documents_D.png',

  T_Octocat_D:         BASE_MODEL_PATH+'/Social/Octocat/Texture/T_Octocat_D.png',
  T_Octocat_N:         BASE_MODEL_PATH+'/Social/Octocat/Texture/T_Octocat_N.png',
  T_LinkedIn_D:        BASE_MODEL_PATH+'/Social/LinkedIn/Texture/T_LinkedIn_D.png',
  T_StackOverflow_D:   BASE_MODEL_PATH+'/Social/StackOverflow/Texture/T_StackOverflow_D.png',

  T_SmallPlant_D:      BASE_MODEL_PATH+'/Plant/SmallPlant/Texture/T_SmallPlant_D.png',
  T_SmallPlant_N:      BASE_MODEL_PATH+'/Plant/SmallPlant/Texture/T_SmallPlant_N.png',

  T_CoffeeMachine_D:   BASE_MODEL_PATH+'/Appliance/CoffeeMachine/Texture/T_CoffeeMachine_D.png',

  T_Poster_CommitStrip_D: BASE_MODEL_PATH+'/Decoration/Poster/Texture/T_Poster_CommitStrip_D.png',
  T_Poster_KeepCalm_D:    BASE_MODEL_PATH+'/Decoration/Poster/Texture/T_Poster_KeepCalm_D.png',
  T_Poster_StarWars_D:    BASE_MODEL_PATH+'/Decoration/Poster/Texture/T_Poster_StarWars_D.png'
}

const materials = {
  M_Wall: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading,
      normalScale: new Vector3(.5, .5)
    },
    textures: {
      map: textures.T_Wall_D,
      normalMap: textures.T_Wall_N
    }
  },

  M_Wood: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: textures.T_Wood_D,
      normalMap: textures.T_Wood_N
    }
  },

  M_Carpet: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: textures.T_Carpet_D,
      normalMap: textures.T_Carpet_N
    }
  },

  M_Elevator: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: textures.T_Elevator_D
    }
  },

  M_HighTable: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: textures.T_HighTable_D
    }
  },

  M_Cupboard: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: textures.T_Cupboard_D
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
      map: textures.T_CupboardWindows_D
    }
  },

  M_Documents: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: textures.T_Documents_D
    }
  },

  M_Octocat: {
    type: MeshPhongMaterial,
    options: {
      shading: SmoothShading
    },
    textures: {
      map: textures.T_Octocat_D,
      normalMap: textures.T_Octocat_N
    }
  },

  M_LinkedIn: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: textures.T_LinkedIn_D
    }
  },

  M_StackOverflow: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: textures.T_StackOverflow_D
    }
  },

  M_SmallPlant: {
    type: MeshPhongMaterial,
    options: {
      shading: SmoothShading,
      side: DoubleSide
    },
    textures: {
      map: textures.T_SmallPlant_D,
      normalMap: textures.T_SmallPlant_N
    }
  },

  M_CoffeeMachine: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: textures.T_CoffeeMachine_D
    }
  },

  M_Poster_CommitStrip: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: textures.T_Poster_CommitStrip_D
    }
  },
  M_Poster_KeepCalm: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: textures.T_Poster_KeepCalm_D
    }
  },
  M_Poster_StarWars: {
    type: MeshPhongMaterial,
    options: {
      shading: FlatShading
    },
    textures: {
      map: textures.T_Poster_StarWars_D
    }
  }
}

export const config = {
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
      geometry: models.SM_Floor,
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
      geometry: models.SM_Floor,
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
      geometry: models.SM_Elevator,
      material: materials.M_Elevator,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [-16, 0, 4], rotation: [0, 90, 0] }
      ]
    },

    {
      geometry: models.SM_WallElevator,
      material: materials.M_Wall,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [-16, 0, 4], rotation: [0, 90, 0] },
      ]
    },

    {
      geometry: models.SM_Wall,
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
      geometry: models.SM_Cupboard,
      material: materials.M_Cupboard,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: models.SM_CupboardWindows,
      material: materials.M_CupboardWindows,
      castShadow: false,
      receiveShadow: false,
      instances: [
        { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: models.SM_Documents,
      material: materials.M_Documents,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [0, 0, -8], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: models.SM_Octocat,
      material: materials.M_Octocat,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [1.75, 3, -7.5], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: models.SM_LinkedIn,
      material: materials.M_LinkedIn,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [2.5, 3, -7.5], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: models.SM_StackOverflow,
      material: materials.M_StackOverflow,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [3.25, 3, -7.5], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: models.SM_SmallPlant,
      material: materials.M_SmallPlant,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [0.5, 3, -7], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: models.SM_CoffeeMachine,
      material: materials.M_CoffeeMachine,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [-15.5, 0, -8], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: models.SM_HighTable,
      material: materials.M_HighTable,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [-14.9, 0, -3], rotation: [0, 45, 0] }
      ]
    },

    {
      geometry: models.SM_Poster,
      material: materials.M_Poster_CommitStrip,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [5.4, 3.5, -8], rotation: [0, 0, -2] }
      ]
    },
    {
      geometry: models.SM_Poster,
      material: materials.M_Poster_StarWars,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [8.2, 4.1, -8], rotation: [0, 0, 1] }
      ]
    },

    {
      geometry: models.SM_Poster,
      material: materials.M_Poster_KeepCalm,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [10.8, 3.8, -8], rotation: [0, 0, -4] }
      ]
    }
  ]
}
