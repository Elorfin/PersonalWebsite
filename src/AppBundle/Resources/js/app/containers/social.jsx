import { connect } from 'react-redux'

import { select } from 'main/app/selectors'
import { SocialNetworks } from 'main/app/components/social.jsx'

const mapStateToProps = (state) => {
  return {
    networks: select.social(state)
  }
}

const ConnectedSocialNetworks = connect(mapStateToProps, {})(SocialNetworks)

export {
  ConnectedSocialNetworks as SocialNetworks
}
