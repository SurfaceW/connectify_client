import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Delete from 'material-ui/svg-icons/action/delete'
import classes from './EntityEditor.scss'

export const PropPairInput = (item, onBlur, key, onDelete) => (
  <div key={key} className={classes['propsPairContainer']}>
    <TextField
      id='text-field-entity-prop-name'
      floatingLabelText='Entity Prop Name'
      defaultValue={item.name}
      className={classes['inputGap']}
      onBlur={onBlur.bind(null, { id: item.id || item['_id'], propType: 'name', value: item.value })}
    />
    <TextField
      id='text-field-entity-prop-value'
      floatingLabelText='Entity Prop Value'
      defaultValue={item.value}
      className={classes['inputGap']}
      onBlur={onBlur.bind(null, { id: item.id || item['_id'], propType: 'value', value: item.value })}
    />
    <div style={{
      'display': 'flex',
      'justifyContent': 'center',
      'alignItems': 'center'
    }}>
      <FlatButton
        icon={<Delete />}
        onClick={onDelete.bind(null, item.id || item['_id'])}
      />
    </div>
  </div>
)

PropPairInput.propTypes = {
  item: React.PropTypes.object.isRequired,
  onBlur: React.PropTypes.func.isRequired
}
