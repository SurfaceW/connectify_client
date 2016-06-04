import _ from 'lodash'

// ------------------------------------
// Constants
// ------------------------------------
import { GOTO_ENTITY } from '../../Search/modules/searchEntity'
export const SWITCH_TO_ENTITY_EDIT_PAGE = 'SWITCH_TO_ENTITY_EDIT_PAGE'

// ------------------------------------
// Actions
// ------------------------------------
export function switchToEntityEditPage (entity) {
  window.connectify_browserHistory.replace('/entity/add', { type: 'update' })
  return {
    type: SWITCH_TO_ENTITY_EDIT_PAGE,
    entity: entity
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GOTO_ENTITY]: (state, { results, entityId }) => {
    let result = _.find(results, { '_id': entityId })
    state = _.pick(result, ['_id', 'name', 'define', 'props', 'relations', 'actions'])
    return _.cloneDeep(state)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  '_id': '',
  name: '',
  define: '',
  props: [],
  relations: []
}

export default function entityReducer (state = _.cloneDeep(initialState), action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

