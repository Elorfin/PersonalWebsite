import React from 'react'

const LoadingBar = props =>
  <div className="app-loading-bar">
    <span className="bouncing-point" />
    <span className="sr-only">Please wait app is loading.</span>
  </div>

export {
  LoadingBar
}
