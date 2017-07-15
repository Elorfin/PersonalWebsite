import React from 'react'
import { PropTypes as T } from 'prop-types'

const NetworkBtn = props =>
  <a href={props.url} className={`btn social-network-link ${props.class}`}>
    <span className={`fa fa-fw fa-${props.icon || props.class}`} />
    <span className="sr-only">{props.name}</span>
  </a>

NetworkBtn.propTypes = {
  name: T.string.isRequired,
  icon: T.string,
  class: T.string.isRequired,
  url: T.string.isRequired
}

const SocialNetworks = props =>
  <div className="social-networks">
    <h3 className="sr-only">Find me on social networks</h3>
    {props.networks.map((network, i) => <NetworkBtn key={i} {...network} />)}
  </div>

SocialNetworks.propTypes = {
  networks: T.arrayOf(T.shape({
    name: T.string.isRequired,
    icon: T.string,
    class: T.string.isRequired,
    url: T.string.isRequired
  })).isRequired
}

export {
  SocialNetworks
}
