import React from 'react'
import { NavLink } from 'react-router-dom'

import { defaultSection } from 'main/app/sections/index'
import { Maze } from 'main/maze/components/maze.jsx'

const NotFound = () =>
  <div className="container app-section page-404">
    <div className="error-404" role="presentation">
      <h2>
        404
        <small>error</small>
      </h2>

      <h3>
        Page not found.
        <small>Oops ! It seems we can not find the page you are looking for.</small>
      </h3>
    </div>

    <hr />

    <div className="row">
      <div className="col text-center">
        <p>
          Now, you can get your way back to home and try to not get lost again.
        </p>

        <NavLink to={defaultSection.target} className="btn btn-lg btn-primary">
          <span className="fa fa-home" />
          Go back to home
        </NavLink>
      </div>
      <div className="col text-center">
        <p>
          You can see if you have better luck finding your way in this small maze.
        </p>

        <Maze />
      </div>
    </div>
  </div>

export {
  NotFound
}
