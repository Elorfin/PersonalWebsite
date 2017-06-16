import { AxisHelper } from 'three'

function add(scene) {
  const axes = new AxisHelper(8)
  axes.position.set(0,0,0)

  scene.add(axes)
}

export {
  add
}
