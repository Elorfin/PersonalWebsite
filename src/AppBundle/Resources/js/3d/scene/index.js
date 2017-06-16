import {
  AxisHelper,
  DirectionalLight,
  DirectionalLightHelper,
  PointLight,
  PointLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
  FileLoader,
  GridHelper,
  JSONLoader,
  Mesh,
  Scene,
  TextureLoader,
  Math as TMath,
  CameraHelper,
  FlatShading,
  MeshPhongMaterial
} from 'three'

import {
  GRID_HELPER,
  AXIS_HELPER,
  LIGHT_HELPER,
  TEXTURE_ASSET,
  MODEL_ASSET
} from './constant'

// todo add validation

// init three JS loaders
const fileLoader = new FileLoader()
const jsonLoader = new JSONLoader()
const textureLoader = new TextureLoader()

let mapping = {}

const defaultMaterialConfig = {
  type: MeshPhongMaterial,
  options: {
    shading: FlatShading
  }
}

const defaultMeshConfig = {
  castShadow: true,
  receiveShadow: true
}

function getAssetPath(asset, assetType) {
  if (TEXTURE_ASSET === assetType || MODEL_ASSET === assetType) {
    if (mapping[assetType][asset]) {
      return mapping[assetType][asset]
    } else {
      throw new Error('Unknown asset : "'+asset+'".')
    }
  } else {
    throw new Error('Unknown asset type : "'+assetType+'".')
  }
}

function createMaterial(materialConfig) {
  // todo default deep
  const config = Object.assign({}, defaultMaterialConfig, materialConfig)

  let options = {}
  if (config.options) {
    options = Object.assign({}, options, config.options)
  }

  // Load texture files if any
  if (materialConfig.textures) {
    for (let textureName in materialConfig.textures) {
      if (materialConfig.textures.hasOwnProperty(textureName)) {
        options[textureName] = textureLoader.load(
          getAssetPath(materialConfig.textures[textureName], TEXTURE_ASSET)
        )
      }
    }
  }

  return new config.type(options)
}

function addContent(meshes, scene) {
  // Load all defined meshes
  meshes.map(meshConfig => {
    const config = Object.assign({}, defaultMeshConfig, meshConfig)
    const material = createMaterial(config.material)

    // create instances
    meshConfig.instances.map(shape => {
      jsonLoader.load(getAssetPath(config.geometry, MODEL_ASSET), geometry => {
        const mesh = new Mesh(geometry, material)

        mesh.castShadow = config.castShadow
        mesh.receiveShadow = config.receiveShadow

        if (shape.scale) {
          mesh.scale.set(...shape.scale)
        }

        if (shape.position) {
          mesh.position.set(...shape.position)
        }

        if (shape.rotation) {
          mesh.rotation.set(...shape.rotation.map(axis => TMath.degToRad(axis)))
        }

        scene.add(mesh)
      })
    })
  })
}

function addLights(lights, scene, showHelpers = false) {
  lights.map(lightConfig => {
    const light = new lightConfig.type(...lightConfig.color)

    if (lightConfig.position) {
      light.position.set(...lightConfig.position)
    }

    if (lightConfig.castShadow) {
      light.castShadow = true

      light.shadow.camera.near = 4
      light.shadow.camera.far = 40
      light.shadow.camera.left = -12
      light.shadow.camera.bottom = -16
      light.shadow.camera.top = 16
      light.shadow.camera.right = 16

      light.shadow.mapSize.width = 2048
      light.shadow.mapSize.height = 2048

      if (showHelpers) {
        scene.add(
          new CameraHelper(light.shadow.camera)
        )
      }
    }

    scene.add(light)

    if (showHelpers) {
      // todo : find a better way to do it
      let lightHelper = null
      switch (lightConfig.type) {
      case PointLight:
        lightHelper = PointLightHelper
        break

      case DirectionalLight:
        lightHelper = DirectionalLightHelper
        break

      case HemisphereLight:
        lightHelper = HemisphereLightHelper
        break
      }

      if (lightHelper) {
        scene.add(new lightHelper(light))
      }
    }
  })
}

function addGrid(grid, scene) {
  const gridXZ = new GridHelper(grid.size, grid.subdivisions, ...grid.colors)
  gridXZ.position.set(0,0,0)

  scene.add(gridXZ)
}

function addAxis(scene) {
  const axes = new AxisHelper(8)
  axes.position.set(0,0,0)

  scene.add(axes)
}

function build(config) {
  const scene = new Scene()

  if (-1 !== config.helpers.indexOf(GRID_HELPER)) {
    addGrid(config.grid, scene)
  }

  if (-1 !== config.helpers.indexOf(AXIS_HELPER)) {
    addAxis(scene)
  }

  // load statics mapping
  fileLoader.load(config.staticAssets, assets => {
    mapping = JSON.parse(assets)

    addLights(config.lights, scene, -1 !== config.helpers.indexOf(LIGHT_HELPER))
    addContent(config.meshes, scene)
  })

  return scene
}

export {
  build
}
