import {
  DoubleSide,
  SmoothShading,
  Vector3
} from 'three'

const materials = {
  M_Sky: {
    options: {
      side: DoubleSide,
      shading: SmoothShading
    },
    textures: {
      map: 'T_Sky_D'
    }
  },

  M_Wall: {
    options: {
      normalScale: new Vector3(.5, .5)
    },
    textures: {
      map      : 'T_Wall_D',
      normalMap: 'T_Wall_N'
    }
  },

  M_Ceiling: {
    options: {
      color: 0xffffff
    }
  },

  M_Window: {
    options: {
      side: DoubleSide,
      transparent: true,
      opacity: .3,
      color: 0xd1f7fa
    }
  },

  M_Door: {
    textures: {
      map: 'T_Door_D'
    }
  },

  M_BayWindow: {
    options: {
      color: 0x262626
    }
  },

  M_BayWindowLarge: {
    options: {
      color: 0x262626
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

  M_DeskLamp: {
    options: {
      color: 0x999999
    }
  },

  M_Computer: {
    options: {
      color: 0x262626
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

  M_Desk: {
    options: {
      color: 0x888888
    }
  },

  M_Cupboard: {
    textures: {
      map: 'T_Cupboard_D'
    }
  },

  M_CupboardWindows: {
    options: {
      transparent: true,
      opacity: .6,
    },
    textures: {
      map: 'T_CupboardWindows_D'
    }
  },

  M_Documents: {
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
  },
  M_Poster_SuperMario: {
    textures: {
      map: 'T_Poster_SuperMario_D'
    }
  }
}

export {
  materials
}
