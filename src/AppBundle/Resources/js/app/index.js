import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {createStore} from 'main/app/store'
import {MainApp} from 'main/app/components/main.jsx'

render(
  <Provider store={createStore()}>
    <MainApp />
  </Provider>,
  document.querySelector('.app-container')
)
