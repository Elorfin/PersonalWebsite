
// generator for very simple action creators (see redux doc)
export function makeActionCreator(type, ...argNames) {
  return (...args) => {
    let action = { type }
    argNames.forEach((arg, index) => {
      if (args[index] === undefined) {
        throw new Error(`${argNames[index]} is required`)
      }

      action[argNames[index]] = args[index]
    })
    return action
  }
}

export function makeReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
