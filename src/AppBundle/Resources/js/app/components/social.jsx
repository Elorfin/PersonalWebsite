import React from 'react'

const SocialNetworks = () =>
  <div className="social-networks text-center">
    <a href="" className="social-network-link github">
      <span className="social-network-icon fa fa-fw fa-github-alt" />
      <span className="social-network-name">Github</span>
    </a>

    <a href="" className="social-network-link stack-overflow">
      <span className="social-network-icon fa fa-fw fa-stack-overflow" />
      <span className="social-network-name">Stack overflow</span>
    </a>

    <a href="" className="social-network-link linkedin">
      <span className="social-network-icon fa fa-fw fa-linkedin" />
      <span className="social-network-name">LinkedIn</span>
    </a>
  </div>

export {
  SocialNetworks
}
