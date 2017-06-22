import React from 'react'
import { PropTypes as T } from 'prop-types'
import { NavLink } from 'react-router-dom'

import { sections } from 'main/app/sections/index'
import { LoadingBar } from 'main/layout/components/loading-bar.jsx'

const NavigationLink = props =>
  <NavLink
    className="app-nav-link"
    to={props.target}
    activeClassName="active"
  >
    <span className={`app-nav-link-icon fa fa-${props.icon}`} />
    <span className="app-nav-link-label">
      {props.label}
    </span>
  </NavLink>

NavigationLink.propTypes = {
  icon: T.string.isRequired,
  label: T.string.isRequired,
  target: T.string.isRequired
}

const Navigation = () =>
  <nav className="app-nav">
    {sections.map((section, index) =>
      <NavigationLink
        key={index}
        icon={section.icon}
        label={section.label}
        target={section.target}
      />
    )}
  </nav>

const LanguageMenu = () =>
  <a href="" className="lang-select">
    <img src="bundles/app/images/lang/en.png" />
    english

    <span className="fa fa-caret-down" />
  </a>

const Header = () =>
  <header className="app-header">
    <div className="container" role="presentation">
      <LoadingBar/>

      <div className="app-brand">
        <img className="app-logo" src="./uploads/avatar.jpg" alt="avatar" />

        <h1 className="app-title">
          Axel Penin
          <small>Web development engineer</small>
        </h1>
      </div>

      <div className="app-main-menu">
        <LanguageMenu />
        <Navigation />
      </div>
    </div>
  </header>

export {
  Header
}
