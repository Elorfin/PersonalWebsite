import {
  FileLoader,
  TextureLoader
} from 'three'

const TEXTURE_ASSET = 'textures'

// path mapping for assets
let assetMap = {}

// stash loaded static assets
// mostly to avoid multiple AJAX call when building the scene
const loadedAssets = {
  [TEXTURE_ASSET]: {}
}

// init three JS loaders
const loaders = {
  [TEXTURE_ASSET]: new TextureLoader()
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
  if (-1 !== Object.keys(loaders).indexOf(type)) {
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

export {
  loadMapping,
  getTexture
}
