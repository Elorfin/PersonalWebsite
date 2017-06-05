import React from 'react'
import {PropTypes as T} from 'prop-types'
import {NavLink} from 'react-router-dom'

import {sections} from './../constants'

const NavigationLink = props =>
  <NavLink
    className="app-nav-link"
    to={props.target}
    activeClassName="active"
    activeStyle={{
      color: props.color,
      borderColor: props.color
    }}
  >
    <span className={`app-nav-link-icon fa fa-${props.icon}`} />
    <span className="app-nav-link-label">
      {props.label}
    </span>
  </NavLink>

NavigationLink.propTypes = {
  icon: T.string.isRequired,
  color: T.string.isRequired,
  label: T.string.isRequired,
  target: T.string.isRequired
}

const Navigation = props =>
  <nav className="app-nav">
    {sections.map((section, index) =>
      <NavigationLink
        key={index}
        icon={section.icon}
        label={section.label}
        color={section.colors[0]}
        target={section.target}
      />
    )}
  </nav>

const LanguageMenu = props =>
  <a href="" className="lang-select">
    <img src="bundles/app/images/lang/en.png" />
    english

    <span className="fa fa-caret-down" />
  </a>

const Header = props =>
  <header className="app-header">
    <img className="app-logo" src="./bundles/app/images/avatar.jpg" alt="avatar" />

    <h1 className="app-title">
      Axel Penin
      <small>Web development engineer</small>
    </h1>

    <div className="app-main-menu">
      <LanguageMenu />
      <Navigation />
    </div>
  </header>

export {Header}
