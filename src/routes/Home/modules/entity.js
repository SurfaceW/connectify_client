import _ from 'lodash'
import { API } from '../../../store/api'

// ------------------------------------
// Constants
// ------------------------------------
export const GOTO_ENTITY_ADD_PAGE = 'GOTO_ENTITY_ADD_PAGE'
export const SEARCH_ENTITY = 'SEARCH_ENTITY'

// ------------------------------------
// Actions
// ------------------------------------
export function switchToEntityAddPage () {
  window.connectify_browserHistory.push('entity/add', { type: 'new' })
  return {
    type: GOTO_ENTITY_ADD_PAGE
  }
}

export function searchEntity (query) {
  return (dispatch) => {
    API.searchEntity(query).then((response) => {
      return response.json()
    }).then((response) => {
      dispatch({
        type: SEARCH_ENTITY,
        searchResults: response.data
      })
      window.connectify_browserHistory.push('search/' + encodeURIComponent(query))
    })
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
  },
  [SEARCH_ENTITY]: (state, action) => {
    return _.cloneDeep(action.searchResults)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function entityReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
