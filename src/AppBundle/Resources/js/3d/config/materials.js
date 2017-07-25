import {
  DoubleSide,
  SmoothShading
} from 'three'

const materials = {
  M_Wall: {
    textures: {
      map      : 'T_Wall_D',
      normalMap: 'T_Wall_N'
    }
  },

  M_Ceiling: {
    options: {
      side: DoubleSide
    },
    textures: {
      map      : 'T_Ceiling_D',
      normalMap: 'T_Ceiling_N'
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

  M_NeonLight: {
    options: {
      side: DoubleSide
    },
    textures: {
      map: 'T_NeonLight_D'
    }
  },

  M_Ventilation: {
    options: {
      side: DoubleSide
    },
    textures: {
      map: 'T_Ventilation_D'
    }
  },

  M_Window: {
    options: {
      side: DoubleSide,
      transparent: true,
      opacity: .3,
      color: 0xD1F7FA
    }
  },

  M_Door: {
    textures: {
      map: 'T_Door_D'
    }
  },

  M_DoorFrame: {
    options: {
      color: 0x262626
    }
  },

  M_BayWindow: {
    options: {
      color: 0x262626
    }
  },

  M_BulletinBoard: {
    textures: {
      map      : 'T_BulletinBoard_D',
      normalMap: 'T_BulletinBoard_N'
    }
  },

  M_Elevator: {
    textures: {
      map: 'T_Elevator_D'
    }
  },

  M_Extinguisher: {
    textures: {
      map: 'T_Extinguisher_D'
    }
  },

  M_DeskLamp: {
    options: {
      color: 0x888888
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

  M_CoffeeMachine: {
    textures: {
      map: 'T_CoffeeMachine_D'
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

  M_Trash: {
    options: {
      shading: SmoothShading,
      color: 0x888888
    }
  },

  M_DrawingTable: {
    textures: {
      map: 'T_DrawingTable_D'
    }
  },

  M_Desk: {
    options: {
      color: 0x888888
    }
  },

  M_Whiteboard: {
    textures: {
      map: 'T_Whiteboard_D'
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

  M_Pictures: {
    textures: {
      map: 'T_Pictures_D'
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
