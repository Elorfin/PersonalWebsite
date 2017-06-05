import React from 'react'
import {PropTypes as T} from 'prop-types'
import {NavLink} from 'react-router-dom'

import {sections} from './../constants'

const NavigationLink = props =>
  <a className="app-nav-link" href={props.target}>
    <span className={`app-nav-link-icon fa fa-${props.icon}`} />
    <span className="app-nav-link-label">
      {props.label}
    </span>
  </a>

NavigationLink.propTypes = {
  icon: T.string.isRequired,
  label: T.string.isRequired,
  target: T.string.isRequired
}

const FooterColumn = props =>
  <nav className="app-footer-column">
    <header>{props.title}</header>
    {props.children}
  </nav>

FooterColumn.propTypes = {
  title: T.string.isRequired,
  children: T.node.isRequired
}

const Footer = props =>
  <footer className="app-footer">
    <FooterColumn title="Social networks">
      <ul>
        <li>
          <a href="">
            <span className="fa fa-fw fa-github" />
            Github
          </a>
        </li>
        <li>
          <a href="">
            <span className="fa fa-fw fa-stack-overflow" />
            Stack overflow
          </a>
        </li>
        <li>
          <a href="">
            <span className="fa fa-fw fa-linkedin-square" />
            LinkedIn
          </a>
        </li>
      </ul>
    </FooterColumn>

    <FooterColumn title="Internal links">
      <ul>
        {sections.map((section, index) =>
        <li key={index}>
          <NavLink activeClassName="active" to={section.target}>
            <span className={`fa fa-fw fa-${section.icon}`} />
            {section.label}
          </NavLink>
        </li>
        )}
      </ul>
    </FooterColumn>

    <FooterColumn title="Versions">
      <div className="versions-btn-group">
        <NavigationLink
          icon="print"
          label="PDF"
          target="#/download"
        />

        <NavigationLink
          icon="code"
          label="API"
          target="#/api"
        />

        <NavigationLink
          icon="cube"
          label="3D"
          target="#/3d"
        />
      </div>

      <em className="last-update text-muted">last updated on 04/06/2017</em>
    </FooterColumn>
  </footer>

export {Footer}
