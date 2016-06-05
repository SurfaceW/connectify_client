import _ from 'lodash'
// ------------------------------------
// Constants
// ------------------------------------
export const SAVE_EDITOR_TEXT = 'SAVE_EDITOR_TEXT'
import { OPEN_EDITOR } from '../../EntityPage/modules/entity'

// ------------------------------------
// Actions
// ------------------------------------
export function saveEditorText (text) {
  _.defer(() => window.connectify_browserHistory.goBack())
  return {
    type: SAVE_EDITOR_TEXT,
    text: text
  }
}

export const actions = {
  saveEditorText
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SAVE_EDITOR_TEXT]: (state, action) => {
    state.text = action.text
    return _.clone(state)
  },
  [OPEN_EDITOR]: (state, action) => {
    state.text = action.text
    return _.clone(state)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  text: ''
}

export default function editorReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
