import _ from 'lodash'

// ------------------------------------
// Constants
// ------------------------------------
import { GOTO_ENTITY } from '../../Search/modules/searchEntity'

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GOTO_ENTITY]: (state, { results, entityId }) => {
    let result = _.find(results, { '_id': entityId })
    state.name = result.name
    state.define = result.define
    state.props = result.props
    return _.cloneDeep(state)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  name: '',
  define: '',
  props: []
}

export default function entityReducer (state = _.cloneDeep(initialState), action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

