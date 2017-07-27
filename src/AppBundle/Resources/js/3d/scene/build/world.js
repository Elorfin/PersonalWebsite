import {
  Math as TMath
} from 'three'

/**
 *
 * @param {Object3D} object
 * @param transformParams
 */
function transform(object, transformParams) {
  if (transformParams.scale) {
    object.scale.set(...transformParams.scale)
  }

  if (transformParams.position) {
    object.position.set(...transformParams.position)
  }

  if (transformParams.rotation) {
    object.rotation.set(...transformParams.rotation.map(axis => TMath.degToRad(axis)))
  }

  if (transformParams.lookAt) {
    object.lookAt(transformParams.lookAt)
  }
}

export {
  transform
}
