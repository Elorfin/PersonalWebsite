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
  Math as TMath
} from 'three'

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
    // create instances
    meshConfig.instances.map(shape => {
      jsonLoader.load(meshConfig.geometry, geometry => {
        const mesh = new Mesh(geometry, createMaterial(meshConfig.material))

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

function addLights(lights, scene, debug = false) {
  lights.map(lightConfig => {
    const light = new lightConfig.type(...lightConfig.color)

    if (lightConfig.position) {
      light.position.set(...lightConfig.position)
    }

    if (lightConfig.castShadow) {
      light.castShadow = true
      //light.shadow.bias = 0.003
      /*if (debug) {
        light.shadowCameraVisible = true;
      }*/

      // todo : use config
      // define the visible area of the projected shadow
      /*light.shadow.camera.near = 0.1
      light.shadow.camera.far = 1000*/

      // define the resolution of the shadow; the higher the better,
      // but also the more expensive
      /*light.shadow.mapSize.width = 2048
      light.shadow.mapSize.height = 2048*/
    }

    scene.add(light)

    if (debug) {
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

function addHelpers(grid, scene) {
  // add grid
  const gridXZ = new GridHelper(grid.size, grid.subdivisions, ...grid.colors)
  gridXZ.position.set(0,0,0)
  scene.add(gridXZ)

  // add axis
  const axes = new AxisHelper(8)
  axes.position.set(0,0,0)
  scene.add(axes)
}

function build(config, debug = false) {
  const scene = new Scene()

  if (debug) {
    addHelpers(config.grid, scene)
  }

  addLights(config.lights, scene, debug)
  addContent(config.meshes, scene)

  return scene
}

export {
  build
}
