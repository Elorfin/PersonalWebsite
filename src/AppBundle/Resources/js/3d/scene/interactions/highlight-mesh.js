import { Color } from 'three'

let highlighted = {}

const highlightColor = new Color(0xFFFFFF)

const originalMaterials = {}
const highlightMaterials = {}

function clearHighlight(mesh = null) {
  if (mesh) {
    if (highlighted[mesh.id]) {
      setOriginalMaterial(mesh)
    }

    delete highlighted[mesh.id]
  } else {
    // empty the highlighted list
    for (let meshId in highlighted) {
      if (highlighted.hasOwnProperty(meshId)) {
        setOriginalMaterial(highlighted[meshId])
      }
    }

    highlighted = {}
  }
}

function highlight(mesh, clearHighlighted = true) {
  if (isHighlighted(mesh)) {
    return
  }

  if (clearHighlighted) {
    clearHighlight()
  }

  highlighted[mesh.id] = mesh
  setHighlightMaterial(mesh)
}

function isHighlighted(mesh) {
  return !!highlighted[mesh.id]
}

function setOriginalMaterial(mesh) {
  mesh.material = originalMaterials[mesh.id]
}

function setHighlightMaterial(mesh) {
  if (!highlightMaterials[mesh.id]) {
    // mesh has never been highlighted
    // keep a copy of the current mesh material (to be able to clear highlight later)
    originalMaterials[mesh.id] = mesh.material.clone()

    // create the new highlighted material
    const highlightMaterial = mesh.material.clone()
    highlightMaterial.emissive          = highlightColor
    highlightMaterial.emissiveIntensity = .2 // 1 is default

    // store highlight material to avoid `clone` cost in next calls
    highlightMaterials[mesh.id] = highlightMaterial
  }

  mesh.material = highlightMaterials[mesh.id]
}

export {
  highlight,
  isHighlighted,
  clearHighlight
}
