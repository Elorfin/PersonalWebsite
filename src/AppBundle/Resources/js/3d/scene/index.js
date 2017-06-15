import {
  AxisHelper,
  DirectionalLight,
  DirectionalLightHelper,
  PointLight,
  PointLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
  GridHelper,
  JSONLoader,
  Mesh,
  Scene,
  TextureLoader,
  Math as TMath,
  CameraHelper
} from 'three'

import {
  GRID_HELPER,
  AXIS_HELPER,
  LIGHT_HELPER
} from './constant'

// todo add validation

// init three JS loaders
const jsonLoader = new JSONLoader()
const textureLoader = new TextureLoader()

function createMaterial(materialConfig) {
  let options = {}
  if (materialConfig.options) {
    options = Object.assign({}, options, materialConfig.options)
  }

  // Load texture files if any
  if (materialConfig.textures) {
    for (let textureName in materialConfig.textures) {
      if (materialConfig.textures.hasOwnProperty(textureName)) {
        options[textureName] = textureLoader.load(materialConfig.textures[textureName])
      }
    }
  }

  return new materialConfig.type(options)
}

function addContent(meshes, scene) {
  // Load all defined meshes
  meshes.map(meshConfig => {
    const material = createMaterial(meshConfig.material)

    // create instances
    meshConfig.instances.map(shape => {
      jsonLoader.load(meshConfig.geometry, geometry => {
        const mesh = new Mesh(geometry, material)

        mesh.castShadow = meshConfig.castShadow
        mesh.receiveShadow = meshConfig.receiveShadow

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

      light.shadow.camera.near = 8
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

  addLights(config.lights, scene, -1 !== config.helpers.indexOf(LIGHT_HELPER))
  addContent(config.meshes, scene)

  return scene
}

export {
  build
}
