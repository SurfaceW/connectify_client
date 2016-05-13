import React from 'react'
import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import DeviceWidgets from 'material-ui/svg-icons/device/widgets'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Add from 'material-ui/svg-icons/content/add'
import Done from 'material-ui/svg-icons/action/done'
import { PropPairList } from './PropPairList'

const floatActionButtonStyle = {
  'position': 'fixed',
  'bottom': '1rem',
  'right': '1rem'
}

export const EntityEditor = ({
  saveEntity,
  createEntityRequest,
  updateEntityForm,
  updateEntityProp,
  createNewProp,
  deleteProp,
  entityEditor }) => (
  <div>
    <AppBar
      zDepth={2}
      title='Create Entity'
      iconClassNameRight='muidocs-icon-navigation-expand-more'
    />
    <Paper zDepth={1}>
      <TextField
        hintText='Entity Name'
        onBlur={updateEntityForm.bind(null, { type: 'name' })}
      />
      <TextField
        hintText='Support multiLine edit'
        floatingLabelText='Definition of this entity'
        multiLine
        rows={5}
        onBlur={updateEntityForm.bind(null, { type: 'define' })}
      />
    </Paper>
    <Paper zDepth={1} style={{ marginTop: '10px' }}>
      <Subheader><DeviceWidgets color={'#4BB9D1'} /> Properties Define</Subheader>
      <Divider />
      {PropPairList(entityEditor.props, updateEntityProp, deleteProp)}
      <div>
        <FlatButton
          label='add new prop'
          icon={<Add />}
          onClick={createNewProp}
        />
      </div>
    </Paper>
    <FloatingActionButton
      style={floatActionButtonStyle}
      mini
      onClick={createEntityRequest.bind(null, entityEditor)}
    >
      <Done />
    </FloatingActionButton>
  </div>
)

EntityEditor.propTypes = {
  entityEditor: React.PropTypes.object.isRequired,
  saveEntity: React.PropTypes.func.isRequired,
  updateEntityForm: React.PropTypes.func.isRequired,
  updateEntityProp: React.PropTypes.func.isRequired,
  createNewProp: React.PropTypes.func.isRequired,
  deleteProp: React.PropTypes.func.isRequired,
  createEntityRequest: React.PropTypes.func.isRequired
}

export default EntityEditor
