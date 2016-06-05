import _ from 'lodash'
// ------------------------------------
// Constants
// ------------------------------------
export const SAVE_EDITOR_TEXT = 'SAVE_EDITOR_TEXT'
export const GET_ORIGIN_TEXT = 'GET_ORIGIN_TEXT'
export const OPEN_EDITOR = 'OPEN_EDITOR'

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

export function getOriginText (text) {
  return {
    type: GET_ORIGIN_TEXT,
    text: window.localStorage.getItem('editorText') || ''
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
  [GET_ORIGIN_TEXT]: (state, action) => {
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
