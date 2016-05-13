import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Delete from 'material-ui/svg-icons/action/delete'

export const PropPairInput = (item, onBlur, key, onDelete) => (
  <div key={key}>
    <TextField
      id='text-field-entity-prop-name'
      defaultValue={item.name}
      onBlur={onBlur.bind(null, { id: item.id, propType: 'name', value: item.value })}
    />
    <TextField
      id='text-field-entity-prop-value'
      defaultValue={item.value}
      onBlur={onBlur.bind(null, { id: item.id, propType: 'value', value: item.value })}
    />
    <div>
      <FlatButton
        icon={<Delete />}
        onClick={onDelete.bind(null, item.id)}
      />
    </div>
  </div>
)

PropPairInput.propTypes = {
  item: React.PropTypes.object.isRequired,
  onBlur: React.PropTypes.func.isRequired
}
