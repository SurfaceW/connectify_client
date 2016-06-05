import _ from 'lodash'
import { API } from '../../../store/api'

// ------------------------------------
// Constants
// ------------------------------------
import { SWITCH_TO_ENTITY_EDIT_PAGE } from '../../EntityPage/modules/entity'
import { SAVE_EDITOR_TEXT } from '../../MarkdownEditor/modules/editor'
export const SAVE_ENTITY = 'SAVE_ENTITY'
export const CREATE_ENTITY = 'CREATE_ENTITY'
export const UPDATE_ENTITY = 'UPDATE_ENTITY'
export const DELETE_ENTITY = 'DELETE_ENTITY'
export const UPDATE_ENTITY_FORM = 'UPDATE_ENTITY_FORM'
export const CREATE_NEW_PROP = 'CREATE_NEW_PROP'
export const DELETE_ENTITY_PROP = 'DELETE_ENTITY_PROP'
export const UPDATE_ENTITY_PROP = 'UPDATE_ENTITY_PROP'

export const CREATE_NEW_RELATION = 'CREATE_NEW_RELATION'
export const UPDATE_RELATION_NAME = 'UPDATE_RELATION_NAME'
export const DELETE_ENTITY_RELATION_TAG = 'DELETE_ENTITY_RELATION_TAG'
export const UPDATE_SEARCH_ENTITY_INPUT = 'UPDATE_SEARCH_ENTITY_INPUT'
export const SELECT_ENTITY_RELATION_TAG = 'SELECT_ENTITY_RELATION_TAG'
export const DELETE_ENTITY_RELATION = 'DELETE_ENTITY_RELATION'

export const OPEN_EDITOR = 'OPEN_EDITOR'

// ------------------------------------
// Actions
// ------------------------------------
export function createEntityRequest (data) {
  return (dispatch, getState) => {
    return API.createEntity(data).then((res) => {
      dispatch({
        type: CREATE_ENTITY
      })
      return res.json()
    }).then((res) => {
      window.connectify_browserHistory.replace('/entity/' + _.get(res, 'data.0.id'))
    })
  }
}

export function updateEntityRequest (data) {
  return (dispatch) => {
    return API.updateEntity(data['_id'], data).then((response) => {
      dispatch({
        type: UPDATE_ENTITY
      })
      window.connectify_browserHistory.replace('/entity/' + data['_id'])
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

export function createNewRelation () {
  return {
    type: CREATE_NEW_RELATION
  }
}

export function changeRelationName ({ id }, event) {
  return {
    type: UPDATE_RELATION_NAME,
    name: event.target.value,
    relationId: id
  }
}

export function deleteEntityTag (name, id) {
  return {
    type: DELETE_ENTITY_RELATION_TAG,
    name: name,
    relationId: id
  }
}

const REQUEST_DELAY = 800
let requestDelayTimer = null
export function updateSearchEntityInput (searchText) {
  return (dispatch) => {
    clearTimeout(requestDelayTimer)
    requestDelayTimer = setTimeout(() => {
      if (_.isNil(searchText)) return
      API.searchEntity(searchText).then((response) => {
        return response.json()
      }).then((data) => {
        dispatch({
          type: UPDATE_SEARCH_ENTITY_INPUT,
          data: data.data
        })
      })
    }, REQUEST_DELAY)
  }
}

export function selectEntityTag (item, entitySugs, chosenRequest, index) {
  return {
    type: SELECT_ENTITY_RELATION_TAG,
    name: chosenRequest,
    relation: item,
    entitySugs: entitySugs
  }
}

export function deleteEntityRelation (id) {
  return {
    type: DELETE_ENTITY_RELATION,
    relationId: id
  }
}

export function openEditor (text) {
  window.connectify_browserHistory.push('/editor')
  window.localStorage.setItem('editorText', text)
  return {
    type: OPEN_EDITOR,
    text: text
  }
}

export const actions = {
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
  [CREATE_ENTITY]: (state, action) => _.cloneDeep(initialState),

  // detail text reducer
  [SAVE_EDITOR_TEXT]: (state, action) => {
    state.detail = action.text
    return _.clone(state)
  },

  // relations related reducers
  [CREATE_NEW_RELATION]: (state, action) => {
    state.relations.push({
      id: _.uniqueId('entityTag_'),
      name: 'new relation',
      relatedEntities: []
    })
    return _.cloneDeep(state)
  },
  [UPDATE_SEARCH_ENTITY_INPUT]: (state, action) => {
    state.entitySugs = action.data.map(entity => _.pick(entity, ['_id', 'name']))
    return _.cloneDeep(state)
  },
  [SELECT_ENTITY_RELATION_TAG]: (state, action) => {
    let relation = _.find(state.relations, { 'id': action.relation.id })
    relation.relatedEntities.push(_.find(action.entitySugs, { 'name': action.name }))
    return _.cloneDeep(state)
  },
  [DELETE_ENTITY_RELATION_TAG]: (state, action) => {
    let relation = _.find(state.relations, { 'id': action.relationId })
    _.remove(relation.relatedEntities, { 'name': action.name })
    return _.cloneDeep(state)
  },
  [UPDATE_RELATION_NAME]: (state, action) => {
    let relation = _.find(state.relations, { 'id': action.relationId })
    relation.name = action.name
    return _.cloneDeep(state)
  },
  [DELETE_ENTITY_RELATION]: (state, action) => {
    _.remove(state.relations, { 'id': action.relationId })
    return _.cloneDeep(state)
  }
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
  detail: '',
  props: [],
  relations: [],
  entitySugs: []
}

export default function entityEditorReducer (state = _.cloneDeep(initialState), action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

