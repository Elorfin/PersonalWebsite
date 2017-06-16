import { GridHelper } from 'three'

function add(scene, grid) {
  const gridXZ = new GridHelper(grid.size, grid.subdivisions, ...grid.colors)
  gridXZ.position.set(0,0,0)

  scene.add(gridXZ)
}

export {
  add
}
