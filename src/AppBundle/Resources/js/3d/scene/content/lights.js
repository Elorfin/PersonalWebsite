import {
  CameraHelper,
  DirectionalLight,
  DirectionalLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
  PointLight,
  PointLightHelper
} from 'three'

function add(scene, lights, showHelpers = false) {
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

export {
  add
}
