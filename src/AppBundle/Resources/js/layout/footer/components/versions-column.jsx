import React from 'react'
import { PropTypes as T } from 'prop-types'
import { NavLink } from 'react-router-dom'

import { FooterColumn } from 'main/layout/footer/components/footer-column.jsx'

const VersionLink = props => props.target ?
  <NavLink className="app-nav-link" to={props.target}>
    <span className={`app-nav-link-icon fa fa-${props.icon}`} />
    <span className="app-nav-link-label">
      {props.label}
    </span>
  </NavLink>
  :
  <a href={props.url} className="app-nav-link">
    <span className={`app-nav-link-icon fa fa-${props.icon}`} />
    <span className="app-nav-link-label">
      {props.label}
    </span>
  </a>

VersionLink.propTypes = {
  icon: T.string.isRequired,
  label: T.string.isRequired,
  target: T.string,
  url: T.string
}

const VersionsColumn = props =>
  <FooterColumn title="Versions">
    <div className="versions-btn-group">
      <VersionLink icon="print" label="PDF" url="http://localhost/APWebsite/web/app_dev.php/pdf" />
      <VersionLink icon="code"  label="API" target="/api" />
      <VersionLink icon="cube"  label="3D"  target="/3d" />
    </div>

    <em className="last-update text-muted">last updated on {props.lastSiteUpdate}</em>
  </FooterColumn>

VersionsColumn.propTypes = {
  lastSiteUpdate: T.string.isRequired
}

export {
  VersionsColumn
}