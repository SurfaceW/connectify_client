// ------------------------------------
// Constants
// ------------------------------------
export const GOTO_ENTITY_ADD_PAGE = 'GOTO_ENTITY_ADD_PAGE'

// ------------------------------------
// Actions
// ------------------------------------
export function switchToEntityAddPage () {
  window.connectify_browserHistory.push('entity/add', { type: 'new' })
  return {
    type: GOTO_ENTITY_ADD_PAGE
  }
}

export const actions = {
  switchToEntityAddPage
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GOTO_ENTITY_ADD_PAGE]: (state, action) => {
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function entityReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
