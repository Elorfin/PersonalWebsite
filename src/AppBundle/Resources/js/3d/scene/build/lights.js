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

import { transform } from './world'

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

function createLight(lightConfig, worldTransform) {
  const light = new lightConfig.type(...lightConfig.options)

  light.name = lightConfig.name

  if (worldTransform) {
    transform(light, worldTransform)
    if (worldTransform.target) {
      light.target.position.set(...worldTransform.target)
      light.target.updateMatrixWorld()
    }
  }

  // configure light shadow
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

  return light
}

function add(scene, lights, showHelpers = false) {
  lights.map(config => {
    const lightConfig = merge({}, defaultLightConfig, config)

    if (lightConfig.instances) {
      // positionable lights (eg. PointLight, SpotLight, DirectionalLight)
      lightConfig.instances.map((instance, idx) => {
        const lightInstance = createLight(lightConfig, instance)
        lightInstance.userData = {
          index: idx
        }

        scene.add(lightInstance)
        if (showHelpers) {
          addHelper(scene, lightInstance)
        }
      })
    } else {
      // global lights (eg. AmbientLight)
      const light = createLight(lightConfig)
      scene.add(light)
      if (showHelpers) {
        addHelper(scene, light)
      }
    }
  })
}

export {
  add
}
