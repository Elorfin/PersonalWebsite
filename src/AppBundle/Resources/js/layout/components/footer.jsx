import React from 'react'
import { PropTypes as T } from 'prop-types'
import { NavLink } from 'react-router-dom'

import { sections } from 'main/app/sections/index'

const VersionLink = props =>
  <NavLink className="app-nav-link" to={props.target}>
    <span className={`app-nav-link-icon fa fa-${props.icon}`} />
    <span className="app-nav-link-label">
      {props.label}
    </span>
  </NavLink>

VersionLink.propTypes = {
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

const SocialNetworksColumn = () =>
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

const InternalLinksColumn = () =>
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

    <ul className="admin-links">
      <li>
        <a href="">
          <span className="fa fa-fw fa-unlock-alt" />
          Connexion
        </a>
      </li>
    </ul>
  </FooterColumn>

const Footer = () =>
  <footer className="app-footer">
    <div className="container" role="presentation">
      <SocialNetworksColumn/>

      <InternalLinksColumn />

      <FooterColumn title="Versions">
        <div className="versions-btn-group">
          <a href="http://localhost/APWebsite/web/app_dev.php/pdf" className="app-nav-link">
            <span className="app-nav-link-icon fa fa-print" />
            <span className="app-nav-link-label">
              PDF
            </span>
          </a>

          <VersionLink
            icon="code"
            label="API"
            target="/api"
          />

          <VersionLink
            icon="cube"
            label="3D"
            target="/3d"
          />
        </div>

        <em className="last-update text-muted">last updated on 04/06/2017</em>
      </FooterColumn>
    </div>
  </footer>

export {
  Footer
}
