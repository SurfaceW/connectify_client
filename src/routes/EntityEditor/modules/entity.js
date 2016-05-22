import _ from 'lodash'
import { API } from '../../../store/api'

// ------------------------------------
// Constants
// ------------------------------------
import { SWITCH_TO_ENTITY_EDIT_PAGE } from '../../EntityPage/modules/entity'
export const SAVE_ENTITY = 'SAVE_ENTITY'
export const CREATE_ENTITY = 'CREATE_ENTITY'
export const UPDATE_ENTITY = 'UPDATE_ENTITY'
export const DELETE_ENTITY = 'DELETE_ENTITY'
export const UPDATE_ENTITY_FORM = 'UPDATE_ENTITY_FORM'
export const CREATE_NEW_PROP = 'CREATE_NEW_PROP'
export const DELETE_ENTITY_PROP = 'DELETE_ENTITY_PROP'
export const UPDATE_ENTITY_PROP = 'UPDATE_ENTITY_PROP'

// ------------------------------------
// Actions
// ------------------------------------
export function createEntityRequest (data) {
  return (dispatch, getState) => {
    return API.createEntity(data).then(() => {
      dispatch({
        type: CREATE_ENTITY
      })
      window.connectify_browserHistory.replace('/')
    })
  }
}

export function updateEntityRequest (data) {
  return (dispatch) => {
    return API.updateEntity(data['_id'], data).then((response) => {
      dispatch({
        type: UPDATE_ENTITY
      })
      window.connectify_browserHistory.replace('/')
    })
  }
}

export function deleteEntityRequest (id) {
  return (dispatch) => {
    return API.deleteEntity(id).then(() => {
      dispatch({
        type: DELETE_ENTITY
      })
      window.connectify_browserHistory.replace('/')
    })
  }
}

export function saveEntity () {
  return function (dispatch) {
    return new Promise((resolve, reject) => {

    })
  }
}

export function updateEntityForm (data, event) {
  return {
    type: UPDATE_ENTITY_FORM,
    prop: data.type,
    data: event.target.value
  }
}

export function updateEntityProp (data, event) {
  return {
    type: UPDATE_ENTITY_PROP,
    id: data.id,
    propType: data.propType,
    value: event.target.value
  }
}

export function createNewProp () {
  return {
    type: CREATE_NEW_PROP
  }
}

export function deleteProp (id) {
  return {
    type: DELETE_ENTITY_PROP,
    id: id
  }
}

export const actions = {
  saveEntity,
  updateEntityForm,
  updateEntityProp,
  createNewProp,
  deleteProp
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SAVE_ENTITY]: (state, action) => state,
  [SWITCH_TO_ENTITY_EDIT_PAGE]: (state, action) => {
    return _.cloneDeep(action.entity)
  },
  [UPDATE_ENTITY_FORM]: (state, action) => {
    _.set(state, action.prop, action.data, '')
    return _.cloneDeep(state)
  },
  [UPDATE_ENTITY_PROP]: (state, action) => {
    let prop = _.find(state.props, { 'id': action.id })
    prop[action.propType] = action.value
    return _.cloneDeep(state)
  },
  [CREATE_NEW_PROP]: (state, action) => {
    _.set(state, 'props', _.concat(state.props, [generateNewProp()]))
    return _.cloneDeep(state)
  },
  [DELETE_ENTITY_PROP]: (state, action) => {
    state.props = _.remove(state.props, (i) => i.id !== action.id)
    return _.cloneDeep(state)
  },
  [CREATE_ENTITY]: (state, action) => _.cloneDeep(initialState)
}

const generateNewProp = (prefix = 'prop_') => {
  const newProp = { 'name': 'prop name', 'value': 'prop value' }
  let newprops = _.cloneDeep(newProp)
  newprops.id = _.uniqueId(prefix)
  return newprops
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  '_id': '',
  name: '',
  define: '',
  props: []
}

export default function entityEditorReducer (state = _.cloneDeep(initialState), action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

