import React from 'react'
import { PropTypes as T } from 'prop-types'
import { connect } from 'react-redux'

import { select } from 'main/app/selectors'

import { SocialColumn } from 'main/layout/footer/components/social-column.jsx'
import { InternalColumn } from 'main/layout/footer/components/internal-column.jsx'
import { VersionsColumn } from 'main/layout/footer/components/versions-column.jsx'

const FooterComponent = props =>
  <footer className="app-footer">
    <div className="container" role="presentation">
      <SocialColumn networks={props.networks} />
      <InternalColumn />
      <VersionsColumn lastSiteUpdate={props.lastSiteUpdate} />
    </div>
  </footer>

FooterComponent.propTypes = {
  networks: T.arrayOf(T.object).isRequired,
  lastSiteUpdate: T.string.isRequired
}

const mapStateToProps = state => {
  return {
    lastSiteUpdate: select.lastSiteUpdate(state),
    networks: select.social(state)
  }
}

const ConnectedFooter = connect(mapStateToProps, {})(FooterComponent)

export {
  ConnectedFooter as Footer
}
