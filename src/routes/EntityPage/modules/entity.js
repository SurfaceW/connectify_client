import _ from 'lodash'
import { API } from '../../../store/api'

// ------------------------------------
// Constants
// ------------------------------------
import { GOTO_ENTITY } from '../../Search/modules/searchEntity'
export const SWITCH_TO_ENTITY_EDIT_PAGE = 'SWITCH_TO_ENTITY_EDIT_PAGE'
export const GET_ENTITY = 'GET_ENTITY'

// ------------------------------------
// Actions
// ------------------------------------
export function getEntity (id) {
  return (dispatch) => {
    API.getEntity(id).then((response) => {
      return response.json()
    }).then((response) => {
      dispatch({
        type: GET_ENTITY,
        entity: response.data
      })
    })
  }
}

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
const DEFAULT_PROPS = ['_id', 'name', 'define', 'props', 'relations', 'actions']
const ACTION_HANDLERS = {
  [GOTO_ENTITY]: (state, { results, entityId }) => {
    let result = _.find(results, { '_id': entityId })
    state = _.pick(result, DEFAULT_PROPS)
    return _.cloneDeep(state)
  },
  [GET_ENTITY]: (state, action) => {
    state = _.pick(action.entity[0], DEFAULT_PROPS)
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

