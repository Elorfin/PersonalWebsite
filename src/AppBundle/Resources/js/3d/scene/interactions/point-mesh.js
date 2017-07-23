import { Vector3, Raycaster } from 'three'

// init some object know, so it will not be down at each user interaction
const direction = new Vector3()
const rayCaster = new Raycaster()

/**
 * Retrieve the list of Meshes pointed by the user.
 *
 * @param {number}            x - X position of the pointer (in CSS pixels)
 * @param {number}            y - Y position of the pointer (in CSS pixels)
 * @param {PerspectiveCamera} camera
 * @param {Scene}             scene
 *
 * @return {Array}
 */
function getPointedObjects(x, y, camera, scene) {
  // convert pointer position to make it understandable by three js
  direction.x =  x * 2 - 1
  direction.y = -y * 2 + 1

  // set new orientation for the ray caster
  rayCaster.setFromCamera(direction, camera)

  // retrieve objects hit by the ray caster
  return rayCaster.intersectObjects(scene.children)
}

export {
  getPointedObjects
}
