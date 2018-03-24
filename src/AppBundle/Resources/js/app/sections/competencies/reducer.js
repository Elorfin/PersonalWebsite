import {makeReducer} from 'main/utils/redux'

import {
  OPEN_COMPETENCY,
  CLOSE_COMPETENCY
} from './actions'

const reducer = makeReducer({list: [], current: null}, {
  [OPEN_COMPETENCY]: (state, action) => {
    return {
      list: state.list,
      current: action.competencyId
    }
  },
  [CLOSE_COMPETENCY]: (state) => {
    return {
      list: state.list,
      current: null
    }
  }
})

export {
  reducer
}
