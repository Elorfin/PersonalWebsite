import React from 'react'
import { PropTypes as T } from 'prop-types'

const LangSelect = () =>
  <a href="" className="lang-select">
    <img src="bundles/app/images/lang/en.png" />
    english

    <span className="fa fa-caret-down" />
  </a>

LangSelect.propTypes = {
  available: T.arrayOf(T.string).isRequired,
  current: T.string.isRequired
}

export {
  LangSelect
}
