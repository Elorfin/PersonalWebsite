import {
  AmbientLight,
  DirectionalLight,
  DoubleSide,
  HemisphereLight,
  MeshPhongMaterial,
  PCFSoftShadowMap,
  SmoothShading,
  FlatShading,
  WebGLRenderer
} from 'three'

const BASE_MODEL_PATH = './models'

const models = {
  SM_Floor:           BASE_MODEL_PATH+'/Building/Floor/SM_Floor.json',
  SM_Wall:            BASE_MODEL_PATH+'/Building/Wall/SM_Wall.json',
  SM_WallElevator:    BASE_MODEL_PATH+'/Building/Wall/SM_WallElevator.json',
  SM_Elevator:        BASE_MODEL_PATH+'/Building/Elevator/SM_Elevator.json',
  SM_Cupboard:        BASE_MODEL_PATH+'/Furniture/Cupboard/SM_Cupboard.json',
  SM_CupboardWindows: BASE_MODEL_PATH+'/Furniture/Cupboard/SM_CupboardWindows.json',
  SM_Documents:       BASE_MODEL_PATH+'/Furniture/Cupboard/SM_Documents.json',
  SM_Octocat:         BASE_MODEL_PATH+'/Decoration/Octocat/SM_Octocat.json',
  SM_LinkedIn:        BASE_MODEL_PATH+'/Decoration/LinkedIn/SM_LinkedIn.json',
  SM_StackOverflow:   BASE_MODEL_PATH+'/Decoration/StackOverflow/SM_StackOverflow.json',
  SM_SmallPlant:      BASE_MODEL_PATH+'/Plant/SmallPlant/SM_SmallPlant.json',
  SM_CoffeeMachine:   BASE_MODEL_PATH+'/Appliance/CoffeeMachine/SM_CoffeeMachine.json'
}

const textures = {
  T_Wall_D:            BASE_MODEL_PATH+'/Building/Wall/Texture/T_Wall_D.png',
  T_Wall_N:            BASE_MODEL_PATH+'/Building/Wall/Texture/T_Wall_N.png',
  T_Wood_D:            BASE_MODEL_PATH+'/Building/Floor/Texture/T_Wood_D.png',
  T_Wood_N:            BASE_MODEL_PATH+'/Building/Floor/Texture/T_Wood_N.png',
  T_Carpet_D:          BASE_MODEL_PATH+'/Building/Floor/Texture/T_Carpet_D.png',
  T_Carpet_N:          BASE_MODEL_PATH+'/Building/Floor/Texture/T_Carpet_N.png',
  T_Elevator_D:        BASE_MODEL_PATH+'/Building/Elevator/Texture/T_Elevator_D.png',
  T_Cupboard_D:        BASE_MODEL_PATH+'/Furniture/Cupboard/Texture/T_Cupboard_D.png',
  T_CupboardWindows_D: BASE_MODEL_PATH+'/Furniture/Cupboard/Texture/T_CupboardWindows_D.png',
  T_Documents_D:       BASE_MODEL_PATH+'/Furniture/Cupboard/Texture/T_Documents_D.png',
  T_Octocat_D:         BASE_MODEL_PATH+'/Decoration/Octocat/Texture/T_Octocat_D.png',
  T_Octocat_N:         BASE_MODEL_PATH+'/Decoration/Octocat/Texture/T_Octocat_N.png',
  T_LinkedIn_D:        BASE_MODEL_PATH+'/Decoration/LinkedIn/Texture/T_LinkedIn_D.png',
  T_StackOverflow_D:   BASE_MODEL_PATH+'/Decoration/StackOverflow/Texture/T_StackOverflow_D.png',
  T_SmallPlant_D:      BASE_MODEL_PATH+'/Plant/SmallPlant/Texture/T_SmallPlant_D.png',
  T_SmallPlant_N:      BASE_MODEL_PATH+'/Plant/SmallPlant/Texture/T_SmallPlant_N.png',
  T_CoffeeMachine_D:   BASE_MODEL_PATH+'/Appliance/CoffeeMachine/Texture/T_CoffeeMachine_D.png',
}

const materials = {
  M_Wall: {
    type: MeshPhongMaterial,
    options: {
      side: DoubleSide,
      shading: FlatShading,
      normalScale: [.5, .5]
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
  }
}

export const config = {
  grid: {
    colors: [0xFFC0CB, 0x8f8f8f],
    subdivisions: 40,
    size: 40
  },

  render: {
    renderer: WebGLRenderer,
    background: [0xFCFCFC, 1],
    antialias: true,
    shadow: {
      enabled: true,
      type: PCFSoftShadowMap,
      mapSize: {
        width: 2048,
        height: 2048
      }
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
      position: [12, 10, 12]
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
      instances: [
        { scale: [1, 1, 1], position: [-16, 0, 0], rotation: [0, -90, 0] },
      ]
    },

    {
      geometry: models.SM_Wall,
      material: materials.M_Wall,
      castShadow: true,
      receiveShadow: true,
      instances: [
        { scale: [1, 1, 1], position: [-16, 0, -8], rotation: [0, -90, 0] },
        { scale: [1, 1, 1], position: [-16, 0, -4], rotation: [0, -90, 0] },
        { scale: [1, 1, 1], position: [-16, 0, 4], rotation: [0, -90, 0] },

        { scale: [1, 1, 1], position: [-16, 0, -8], rotation: [0, 0, 0] },
        { scale: [1, 1, 1], position: [-12, 0, -12], rotation: [0, -90, 0] },

        //{ scale: [1, 1, 1], position: [-12, 0, -10], rotation: [0, 0, 0] },
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
      instances: [
        { scale: [1, 1, 1], position: [1.75, 3, -7.5], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: models.SM_LinkedIn,
      material: materials.M_LinkedIn,
      instances: [
        { scale: [1, 1, 1], position: [2.5, 3, -7.5], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: models.SM_StackOverflow,
      material: materials.M_StackOverflow,
      instances: [
        { scale: [1, 1, 1], position: [3.25, 3, -7.5], rotation: [0, 0, 0] }
      ]
    },

    {
      geometry: models.SM_SmallPlant,
      material: materials.M_SmallPlant,
      instances: [
        { scale: [1, 1, 1], position: [0.5, 3, -7], rotation: [0, 0, 0] }
      ]
    },
    {
      geometry: models.SM_CoffeeMachine,
      material: materials.M_CoffeeMachine,
      instances: [
        { scale: [1, 1, 1], position: [-15.5, 0, -8], rotation: [0, 0, 0] }
      ]
    }
  ]
}
