import {
  FileLoader,
  JSONLoader,
  TextureLoader
} from 'three'

const MODEL_ASSET   = 'models'
const TEXTURE_ASSET = 'textures'

// path mapping for assets
let assetMap = {}

// stash loaded static assets
// mostly to avoid multiple AJAX call when building the scene
const loadedAssets = {
  [TEXTURE_ASSET]: {},
  [MODEL_ASSET]  : {},
}

// init three JS loaders
const loaders = {
  [TEXTURE_ASSET]: new TextureLoader(),
  [MODEL_ASSET]  : new JSONLoader(),
}

function loadMapping(mappingFilePath) {
  return new Promise((resolve) => {
    const fileLoader = new FileLoader()
    fileLoader.load(mappingFilePath, assets => {
      assetMap = JSON.parse(assets)

      resolve(assetMap)
    })
  })
}

function getAssetPath(name, type) {
  if (TEXTURE_ASSET === type || MODEL_ASSET === type) {
    if (assetMap[type][name]) {
      return assetMap[type][name]
    } else {
      throw new Error('Unknown asset : "'+name+'".')
    }
  } else {
    throw new Error('Unknown asset type : "'+type+'".')
  }
}

function getAsset(name, type, callback = () => true) {
  if (!loadedAssets[type][name]) {
    loadedAssets[type][name] = loaders[type].load(getAssetPath(name, type), callback)
  }

  return loadedAssets[type][name]
}

// shortcut to access textures
function getTexture(name, callback = () => true) {
  return getAsset(name, TEXTURE_ASSET, callback)
}

// encapsulate JSON loader into a Promise
// this permits to link all objects which share the same geometry to one AJAX call
function getModel(name) {
  if (!loadedAssets[MODEL_ASSET][name]) {
    loadedAssets[MODEL_ASSET][name] = new Promise(resolve => {
      loaders[MODEL_ASSET].load(getAssetPath(name, MODEL_ASSET), (geometry) => {
        resolve(geometry)
      })
    })
  }

  return loadedAssets[MODEL_ASSET][name]
}

export {
  loadMapping,
  getTexture,
  getModel
}
