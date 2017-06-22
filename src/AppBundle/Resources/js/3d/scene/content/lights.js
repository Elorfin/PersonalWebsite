import merge from 'lodash/merge'

import {
  CameraHelper,
  DirectionalLight,
  DirectionalLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
  PointLight,
  PointLightHelper
} from 'three'

const defaultLightConfig = {
  options: []
}

function add(scene, lights, showHelpers = false) {
  lights.map(config => {
    const lightConfig = merge({}, defaultLightConfig, config)
    const light = new lightConfig.type(...lightConfig.options)

    if (lightConfig.position) {
      light.position.set(...lightConfig.position)
    }

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

export {
  add
}
