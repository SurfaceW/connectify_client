import { connect } from 'react-redux'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component   */

import EntityEditor from '../components/EntityEditor'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

import {
  updateEntityRequest,
  createEntityRequest,
  deleteEntityRequest,
  saveEntity,
  updateEntityForm,
  createNewProp,
  deleteProp,
  updateEntityProp,

  createNewRelation,
  changeRelationName,
  deleteEntityTag,
  updateSearchEntityInput,
  selectEntityTag,
  deleteEntityRelation } from '../modules/entity'

const mapActionCreators = {
  updateEntityRequest,
  createEntityRequest,
  deleteEntityRequest,
  saveEntity,
  updateEntityProp,
  updateEntityForm,
  createNewProp,
  deleteProp,

  createNewRelation,
  changeRelationName,
  deleteEntityTag,
  updateSearchEntityInput,
  selectEntityTag,
  deleteEntityRelation
}

const mapStateToProps = (state) => ({
  entityEditor: state.entityEditor
})

export default connect(mapStateToProps, mapActionCreators)(EntityEditor)
