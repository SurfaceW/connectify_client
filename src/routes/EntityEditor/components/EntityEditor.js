import React from 'react'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import DeviceWidgets from 'material-ui/svg-icons/device/widgets'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Add from 'material-ui/svg-icons/content/add'
import Done from 'material-ui/svg-icons/action/done'
import Editor from 'material-ui/svg-icons/image/edit'
import Delete from 'material-ui/svg-icons/action/delete'
import { PropPairList } from './PropPairList'
import { RelationPairList } from './RelationPairList'
import AppBar from '../../../components/AppBar'
import classes from './EntityEditor.scss'

const floatActionButtonStyle = {
  'position': 'fixed',
  'bottom': '1rem',
  'right': '1rem'
}

const inputStyle = {
  'width': '90%',
  'marginLeft': '5%'
}

export const EntityEditor = ({
  createEntityRequest,
  updateEntityRequest,
  deleteEntityRequest,

  updateEntityForm,
  updateEntityProp,
  createNewProp,
  deleteProp,

  openEditor,

  changeRelationName,
  deleteEntityTag,
  updateSearchEntityInput,
  selectEntityTag,
  deleteEntityRelation,
  createNewRelation,

  entityEditor }) => (
  <div>
    {AppBar(entityEditor['_id'] ? 'Update Entity' : 'Create Entity')}
    <Paper zDepth={1} style={{ marginTop: '10px' }}>
      <div>
        <TextField
          style={inputStyle}
          hintText='Please enter the entity name'
          floatingLabelText='Entity Name'
          defaultValue={entityEditor['name'] || ''}
          onBlur={updateEntityForm.bind(null, { type: 'name' })}
        />
      </div>
      <div>
        <TextField
          style={inputStyle}
          hintText='Support multiLine edit'
          floatingLabelText='Definition of this entity'
          defaultValue={entityEditor['define'] || ''}
          multiLine
          rows={5}
          onBlur={updateEntityForm.bind(null, { type: 'define' })}
        />
      </div>
      <div className={classes['editDetail']}>
        <FlatButton
          label='Edit detail information'
          labelPosition='before'
          primary
          icon={<Editor />}
          onClick={openEditor.bind(null, entityEditor['detail'])}
        />
      </div>
    </Paper>
    <Paper zDepth={1} style={{ marginTop: '10px' }}>
      <Subheader><DeviceWidgets color={'#4BB9D1'} /> Properties Define</Subheader>
      <Divider />
      {PropPairList(entityEditor.props, updateEntityProp, deleteProp)}
      <div style={{ 'padding': '20px 0' }}>
        <FlatButton
          label='add new prop'
          icon={<Add />}
          onClick={createNewProp}
        />
      </div>
    </Paper>
    <Paper zDepth={1} style={{ marginTop: '10px' }}>
      <Subheader><DeviceWidgets color={'#4BB9D1'} /> Relations Define</Subheader>
      <Divider />
      {RelationPairList(entityEditor.relations, {
        onChangeRelationName: changeRelationName,
        onDeleteEntityTag: deleteEntityTag,
        onUpdateSearchEntityInput: updateSearchEntityInput,
        onSelectEntityTag: selectEntityTag,
        onDeleteRelation: deleteEntityRelation
      }, entityEditor.entitySugs)}
      <div style={{ 'padding': '20px 0' }}>
        <FlatButton
          label='add new relation'
          icon={<Add />}
          onClick={createNewRelation}
        />
      </div>
    </Paper>
    {entityEditor['_id']
      ? <FlatButton
        label='DELETE ENTITY'
        primary
        icon={<Delete />}
        onClick={deleteEntityRequest.bind(null, entityEditor['_id'])}
      /> : ''}
    <FloatingActionButton
      style={floatActionButtonStyle}
      mini
      onClick={entityEditor['_id']
        ? updateEntityRequest.bind(null, entityEditor)
        : createEntityRequest.bind(null, entityEditor)
      }
    >
      <Done />
    </FloatingActionButton>
  </div>
)

EntityEditor.propTypes = {
  entityEditor: React.PropTypes.object.isRequired,
  updateEntityForm: React.PropTypes.func.isRequired,
  updateEntityProp: React.PropTypes.func.isRequired,
  createNewProp: React.PropTypes.func.isRequired,
  deleteProp: React.PropTypes.func.isRequired,
  createEntityRequest: React.PropTypes.func.isRequired,
  updateEntityRequest: React.PropTypes.func.isRequired,
  deleteEntityRequest: React.PropTypes.func.isRequired,

  openEditor: React.PropTypes.func.isRequired,

  createNewRelation: React.PropTypes.func.isRequired,
  changeRelationName: React.PropTypes.func.isRequired,
  deleteEntityTag: React.PropTypes.func.isRequired,
  updateSearchEntityInput: React.PropTypes.func.isRequired,
  selectEntityTag: React.PropTypes.func.isRequired,
  deleteEntityRelation: React.PropTypes.func.isRequired
}

export default EntityEditor
