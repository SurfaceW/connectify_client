import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import RelationEntityTags from './RelationEntityTags'
import Delete from 'material-ui/svg-icons/action/delete'
import _ from 'lodash'

const RelationPairInput = (item, key, callbacks, entitySugs) => (
  <div key={key}>
    <TextField
      id='text-field-entity-relation-name'
      defaultValue={item.name}
      onBlur={callbacks['onChangeRelationName'].bind(null, { id: item.id })}
    />
    {RelationEntityTags(item.relatedEntities, callbacks['onDeleteEntityTag'], item.id)}
    <div>
      <AutoComplete
        hintText='type an entity name'
        dataSource={_.map(entitySugs, sug => sug.name) || []}
        onUpdateInput={callbacks['onUpdateSearchEntityInput']}
        onNewRequest={callbacks['onSelectEntityTag'].bind(null, item, entitySugs)}
      />
    </div>
    <div>
      <FlatButton
        icon={<Delete />}
        onClick={callbacks['onDeleteRelation'].bind(null, item.id)}
      />
    </div>
  </div>
)

RelationPairInput.propTypes = {
  item: React.PropTypes.object.isRequired,
  onBlur: React.PropTypes.func.isRequired,
  callbacks: React.PropTypes.objectOf(React.PropTypes.func)
}

export default RelationPairInput
