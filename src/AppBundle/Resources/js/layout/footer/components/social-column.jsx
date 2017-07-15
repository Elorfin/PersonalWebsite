import React from 'react'
import { PropTypes as T } from 'prop-types'

import { FooterColumn } from 'main/layout/footer/components/footer-column.jsx'

const SocialColumn = props =>
  <FooterColumn title="Social networks">
    <ul>
      {props.networks.map((network, i) =>
        <li key={i}>
          <a href={network.url}>
            <span className={`fa fa-fw fa-${network.class}`} />
            {network.name}
          </a>
        </li>
      )}
    </ul>
  </FooterColumn>

SocialColumn.propTypes = {
  networks: T.arrayOf(T.shape({
    name: T.string.isRequired,
    icon: T.string,
    class: T.string.isRequired,
    url: T.string.isRequired
  })).isRequired
}

export {
  SocialColumn
}
