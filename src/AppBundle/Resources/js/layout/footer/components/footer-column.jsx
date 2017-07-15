import React from 'react'
import { PropTypes as T } from 'prop-types'

const FooterColumn = props =>
  <nav className="app-footer-column">
    <header>{props.title}</header>
    {props.children}
  </nav>

FooterColumn.propTypes = {
  title: T.string.isRequired,
  children: T.node.isRequired
}

export {
  FooterColumn
}
