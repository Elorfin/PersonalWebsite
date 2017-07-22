import {
  AnimationClip,
  Color,
  Face3,
  Vector2,
  Vector3,
  Vector4
} from 'three'

function isBitSet( value, position ) {
  return value & (1 << position)
}

function parseModel( json, geometry ) {
  let fi,

    offset, zLength,

    colorIndex, normalIndex, uvIndex, materialIndex,

    type,
    isQuad,
    hasMaterial,
    hasFaceVertexUv,
    hasFaceNormal, hasFaceVertexNormal,
    hasFaceColor, hasFaceVertexColor,

    vertex, face, faceA, faceB, hex, normal,

    uvLayer, uv, u, v,

    faces = json.faces,
    vertices = json.vertices,
    normals = json.normals,
    colors = json.colors,
    scale = json.scale ? json.scale : 1,

    nUvLayers = 0


  if (json.uvs !== undefined) {
    // disregard empty arrays
    for (let i = 0; i < json.uvs.length; i++) {
      if (json.uvs[i].length) {
        nUvLayers++
      }
    }

    for (let i = 0; i < nUvLayers; i ++ ) {
      geometry.faceVertexUvs[i] = []
    }
  }

  offset = 0
  zLength = vertices.length

  while (offset < zLength) {
    vertex = new Vector3()
    vertex.x = vertices[offset++] * scale
    vertex.y = vertices[offset++] * scale
    vertex.z = vertices[offset++] * scale

    geometry.vertices.push(vertex)
  }

  offset = 0
  zLength = faces.length

  while (offset < zLength) {
    type = faces[offset ++]

    isQuad = isBitSet(type, 0)
    hasMaterial = isBitSet(type, 1)
    hasFaceVertexUv = isBitSet(type, 3)
    hasFaceNormal = isBitSet(type, 4)
    hasFaceVertexNormal = isBitSet(type, 5)
    hasFaceColor = isBitSet(type, 6)
    hasFaceVertexColor = isBitSet(type, 7)

    if (isQuad) {
      faceA = new Face3()
      faceA.a = faces[offset]
      faceA.b = faces[offset + 1]
      faceA.c = faces[offset + 3]

      faceB = new Face3()
      faceB.a = faces[offset + 1]
      faceB.b = faces[offset + 2]
      faceB.c = faces[offset + 3]

      offset += 4

      if (hasMaterial) {
        materialIndex = faces[offset ++]
        faceA.materialIndex = materialIndex
        faceB.materialIndex = materialIndex
      }

      // to get face <=> uv index correspondence
      fi = geometry.faces.length

      if (hasFaceVertexUv) {
        for (let i = 0; i < nUvLayers; i ++) {
          uvLayer = json.uvs[i]

          geometry.faceVertexUvs[i][fi] = []
          geometry.faceVertexUvs[i][fi + 1] = []

          for (let j = 0; j < 4; j ++ ) {
            uvIndex = faces[offset ++]

            u = uvLayer[uvIndex * 2]
            v = uvLayer[uvIndex * 2 + 1]

            uv = new Vector2( u, v )

            if (j !== 2) {
              geometry.faceVertexUvs[i][fi].push( uv )
            }
            if (j !== 0) {
              geometry.faceVertexUvs[i][fi + 1].push(uv)
            }
          }
        }
      }

      if (hasFaceNormal) {
        normalIndex = faces[offset ++] * 3

        faceA.normal.set(
          normals[normalIndex ++],
          normals[normalIndex ++],
          normals[normalIndex]
        )

        faceB.normal.copy(faceA.normal)
      }

      if (hasFaceVertexNormal) {
        for (let i = 0; i < 4; i ++) {
          normalIndex = faces[ offset ++ ] * 3

          normal = new Vector3(
            normals[normalIndex++],
            normals[normalIndex++],
            normals[normalIndex]
          )

          if (i !== 2) {
            faceA.vertexNormals.push(normal)
          }
          if (i !== 0) {
            faceB.vertexNormals.push(normal)
          }
        }
      }

      if (hasFaceColor) {
        colorIndex = faces[offset++]
        hex = colors[colorIndex]

        faceA.color.setHex(hex)
        faceB.color.setHex(hex)
      }

      if (hasFaceVertexColor) {
        for (let i = 0; i < 4; i ++) {
          colorIndex = faces[offset++]
          hex = colors[colorIndex]

          if (i !== 2) {
            faceA.vertexColors.push(new Color(hex))
          }
          if (i !== 0) {
            faceB.vertexColors.push(new Color(hex))
          }
        }
      }

      geometry.faces.push(faceA)
      geometry.faces.push(faceB)
    } else {
      face = new Face3()
      face.a = faces[offset++]
      face.b = faces[offset++]
      face.c = faces[offset++]

      if (hasMaterial) {
        materialIndex = faces[offset++]
        face.materialIndex = materialIndex
      }

      // to get face <=> uv index correspondence
      fi = geometry.faces.length

      if (hasFaceVertexUv) {
        for (let i = 0; i < nUvLayers; i ++) {
          uvLayer = json.uvs[i]
          geometry.faceVertexUvs[i][fi] = []

          for (let j = 0; j < 3; j ++) {
            uvIndex = faces[offset ++]

            u = uvLayer[uvIndex * 2]
            v = uvLayer[uvIndex * 2 + 1]

            uv = new Vector2(u, v)

            geometry.faceVertexUvs[i][fi].push(uv)
          }
        }
      }

      if (hasFaceNormal) {
        normalIndex = faces[offset++] * 3

        face.normal.set(
          normals[normalIndex++],
          normals[normalIndex++],
          normals[normalIndex]
        )
      }

      if (hasFaceVertexNormal) {
        for (let i = 0; i < 3; i ++) {
          normalIndex = faces[offset++] * 3

          normal = new Vector3(
            normals[normalIndex++],
            normals[normalIndex++],
            normals[normalIndex]
          )

          face.vertexNormals.push(normal)
        }
      }

      if (hasFaceColor) {
        colorIndex = faces[offset++]
        face.color.setHex(colors[colorIndex])
      }

      if (hasFaceVertexColor) {
        for (let i = 0; i < 3; i ++) {
          colorIndex = faces[offset++]
          face.vertexColors.push(new Color(colors[colorIndex]))
        }
      }

      geometry.faces.push(face)
    }
  }
}

function parseSkin(json, geometry) {
  let influencesPerVertex = (json.influencesPerVertex !== undefined) ? json.influencesPerVertex : 2

  if (json.skinWeights) {
    for (let i = 0, l = json.skinWeights.length; i < l; i += influencesPerVertex) {
      const x = json.skinWeights[i]
      const y = (influencesPerVertex > 1) ? json.skinWeights[i + 1] : 0
      const z = (influencesPerVertex > 2) ? json.skinWeights[i + 2] : 0
      const w = (influencesPerVertex > 3) ? json.skinWeights[i + 3] : 0

      geometry.skinWeights.push(new Vector4(x, y, z, w))
    }
  }

  if (json.skinIndices) {
    for (let i = 0, l = json.skinIndices.length; i < l; i += influencesPerVertex) {
      const a = json.skinIndices[ i ]
      const b = (influencesPerVertex > 1) ? json.skinIndices[i + 1] : 0
      const c = (influencesPerVertex > 2) ? json.skinIndices[i + 2] : 0
      const d = (influencesPerVertex > 3) ? json.skinIndices[i + 3] : 0

      geometry.skinIndices.push(new Vector4(a, b, c, d))
    }
  }

  geometry.bones = json.bones

  if (geometry.bones && geometry.bones.length > 0 && (geometry.skinWeights.length !== geometry.skinIndices.length || geometry.skinIndices.length !== geometry.vertices.length)) {
    console.warn( 'When skinning, number of vertices (' + geometry.vertices.length + '), skinIndices (' +
      geometry.skinIndices.length + '), and skinWeights (' + geometry.skinWeights.length + ') should match.' )
  }
}

function parseMorphing(json, geometry) {
  const scale = json.scale

  if ( json.morphTargets !== undefined ) {
    for ( let i = 0, l = json.morphTargets.length; i < l; i ++ ) {
      geometry.morphTargets[ i ] = {}
      geometry.morphTargets[ i ].name = json.morphTargets[ i ].name
      geometry.morphTargets[ i ].vertices = []

      const dstVertices = geometry.morphTargets[ i ].vertices
      const srcVertices = json.morphTargets[ i ].vertices

      for ( let v = 0, vl = srcVertices.length; v < vl; v += 3 ) {
        const vertex = new Vector3()
        vertex.x = srcVertices[ v ] * scale
        vertex.y = srcVertices[ v + 1 ] * scale
        vertex.z = srcVertices[ v + 2 ] * scale

        dstVertices.push( vertex )
      }
    }
  }
}

function parseAnimations(json, geometry) {
  let outputAnimations = []

  // parse old style Bone/Hierarchy animations
  let animations = []
  if (json.animation !== undefined) {
    animations.push( json.animation )
  }

  if (json.animations !== undefined) {
    if (json.animations.length) {
      animations = animations.concat(json.animations)
    } else {
      animations.push(json.animations)
    }
  }

  for (let i = 0; i < animations.length; i ++) {
    let clip = AnimationClip.parseAnimation(animations[i], geometry.bones)
    if (clip) {
      outputAnimations.push(clip)
    }
  }

  // parse implicit morph animations
  if (geometry.morphTargets) {
    // TODO: Figure out what an appropriate FPS is for morph target animations -- defaulting to 10, but really it is completely arbitrary.
    const morphAnimationClips = AnimationClip.CreateClipsFromMorphTargetSequences(geometry.morphTargets, 10)
    outputAnimations = outputAnimations.concat(morphAnimationClips)
  }

  if (outputAnimations.length > 0) {
    geometry.animations = outputAnimations
  }
}

export {
  parseModel,
  parseSkin,
  parseMorphing,
  parseAnimations
}
