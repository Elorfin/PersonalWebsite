import React from 'react'
import { PropTypes as T } from 'prop-types'
import { connect } from 'react-redux'

import { NavLink, withRouter } from 'react-router-dom'

import { select } from 'main/app/selectors'
import { sections } from 'main/app/sections/index'

import { LoadingBar } from 'main/layout/header/components/loading-bar.jsx'
import { LangSelect } from 'main/layout/header/components/lang-select.jsx'
import { ThemeSelect } from 'main/layout/header/components/theme-select.jsx'

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

const HeaderComponent = props =>
  <header className="app-header">
    <div className="container" role="presentation">
      <LoadingBar />

      <div className="app-brand">
        <div>
          <img className="app-logo" src="./uploads/avatar.jpg" alt="avatar" />
          <span className={`hiring-status ${props.hiringStatus}`} />
        </div>

        <h1 className="app-title">
          Axel Penin
          <small>Web development engineer</small>
        </h1>
      </div>

      <div className="app-main-menu">
        <ThemeSelect />
        <LangSelect current='en' available={['en', 'fr']} />

        <Navigation />
      </div>
    </div>
  </header>

HeaderComponent.propTypes = {
  hiringStatus: T.string.isRequired
}

const mapStateToProps = state => {
  return {
    hiringStatus: select.hiringStatus(state)
  }
}

const ConnectedHeader = withRouter(connect(mapStateToProps, {})(HeaderComponent))

export {
  ConnectedHeader as Header
}
