import merge from 'lodash/merge'

import {
  CameraHelper,
  DirectionalLight,
  DirectionalLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
  PointLight,
  PointLightHelper,
  SpotLight,
  SpotLightHelper
} from 'three'

const defaultLightConfig = {
  options: []
}

function addHelper(scene, light) {
  let lightHelper = null
  if (light instanceof DirectionalLight) {
    lightHelper = DirectionalLightHelper
  } else if (light instanceof HemisphereLight) {
    lightHelper = HemisphereLightHelper
  } else if (light instanceof PointLight) {
    lightHelper = PointLightHelper
  } else if (light instanceof SpotLight) {
    lightHelper = SpotLightHelper
  }

  if (lightHelper) {
    scene.add(new lightHelper(light))
  }

  if (light.castShadow) {
    scene.add(
      new CameraHelper(light.shadow.camera)
    )
  }
}

function add(scene, lights, showHelpers = false) {
  lights.map(config => {
    const lightConfig = merge({}, defaultLightConfig, config)
    const light = new lightConfig.type(...lightConfig.options)

    light.name = lightConfig.name

    // configure light
    if (lightConfig.castShadow) {
      light.castShadow = true

      if (lightConfig.shadow) {
        // light has custom shadow config
        if (lightConfig.shadow.bias) {
          light.shadow.bias = lightConfig.shadow.bias
        }

        if (lightConfig.shadow.camera) {
          for (let prop in lightConfig.shadow.camera) {
            if (lightConfig.shadow.camera.hasOwnProperty(prop)) {
              light.shadow.camera[prop] = lightConfig.shadow.camera[prop]
            }
          }
        }

        if (lightConfig.shadow.mapSize) {
          light.shadow.mapSize.width = lightConfig.shadow.mapSize
          light.shadow.mapSize.height = lightConfig.shadow.mapSize
        }
      }
    }

    // todo : optimize
    if (lightConfig.instances) {
      lightConfig.instances.map((instance, idx) => {
        const lightInstance = light.clone()

        if (instance.position) {
          lightInstance.position.set(...instance.position)
        }

        if (instance.target) {
          lightInstance.target.position.set(...instance.target)
          lightInstance.target.updateMatrixWorld()
        }

        lightInstance.userData = {
          index: idx
        }

        scene.add(lightInstance)
      })
    } else {
      scene.add(light)
    }

    if (showHelpers) {
      addHelper(scene, light)
    }
  })
}

export {
  add
}
