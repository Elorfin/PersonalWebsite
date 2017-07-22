import { AxisHelper, GridHelper } from 'three'

function addAxis(scene) {
  const axes = new AxisHelper(8)
  axes.position.set(0,0,0)

  scene.add(axes)
}

function addGrid(scene, grid) {
  const gridXZ = new GridHelper(grid.size, grid.subdivisions, ...grid.colors)
  gridXZ.position.set(0,0,0)

  scene.add(gridXZ)
}

export {
  addAxis,
  addGrid
}
