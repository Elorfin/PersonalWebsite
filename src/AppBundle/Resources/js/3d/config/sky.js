
import { SphereGeometry } from 'three'

const meshes = [
  {
    geometry: () => new SphereGeometry(20, 20, 10, -Math.PI/4, 3*Math.PI/4, .5, 1.2),
    material: 'M_Sky',
    instances: [
      {scale: [1, 1, 1], position: [13, -3, 0], rotation: [0, 180, 0]}
    ]
  }
]

export {
  meshes
}