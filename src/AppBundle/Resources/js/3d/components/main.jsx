import React from 'react'
import { PropTypes as T } from 'prop-types'
import { NavLink } from 'react-router-dom'

import { defaultSection } from 'main/app/sections/index'
import { Scene } from './scene.jsx'
import { canRender } from 'main/3d//scene/index'

const BrowserSupportError = () =>
  <div className="view-3d-support">
    {window.WebGLRenderingContext ? (
      <p>
        Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>.
      </p>
    ) : (
      <p>
        Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>.
        <br/>
        Find out how to get it <a href="http://get.webgl.org/">here</a>.
      </p>
    )}
  </div>

const ViewControls = props =>
  <div className="view-3d-controls">
    <button type="button" className="view-3d-btn">
      <span className={`fa fa-fw ${props.audio ? 'fa-volume-off' : 'fa-volume-up'}`} />
      <span className="sr-only">
        {props.audio ? 'disable audio' : 'enable audio'}
      </span>
    </button>

    <NavLink className="view-3d-btn" to={defaultSection.target}>
      <span className="fa fa-fw fa-sign-out" />
      <span className="sr-only">
        exit to classic version
      </span>
    </NavLink>
  </div>

ViewControls.propTypes = {
  audio: T.bool.isRequired,
  toggleAudio: T.func.isRequired
}

const View3D = () => !canRender() ?
  <BrowserSupportError />
  :
  <div className="view-3d-container">
    <ViewControls
      audio={false}
      toggleAudio={() => true}
    />

    <Scene />
  </div>

export {
  View3D
}
