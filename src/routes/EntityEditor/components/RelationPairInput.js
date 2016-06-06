import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import RelationEntityTags from './RelationEntityTags'
import Delete from 'material-ui/svg-icons/action/delete'
import _ from 'lodash'
import classes from './EntityEditor.scss'

const RelationPairInput = (item, key, callbacks, entitySugs) => (
  <div key={key}>
    <div className={classes['relationsPairContainer']}>
      <TextField
        className={classes['inputGap']}
        id='text-field-entity-relation-name'
        floatingLabelText='Entity Relation Name'
        defaultValue={item.name}
        onBlur={callbacks['onChangeRelationName'].bind(null, { id: item.id || item['_id'] })}
      />
      <div>
        <AutoComplete
          className={classes['inputGap']}
          hintText='type an entity name'
          floatingLabelText='Reference Entity Name'
          dataSource={_.map(entitySugs, sug => sug.name) || []}
          onUpdateInput={callbacks['onUpdateSearchEntityInput']}
          onNewRequest={callbacks['onSelectEntityTag'].bind(null, item, entitySugs)}
        />
      </div>
      <div style={{
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
      }}>
        <FlatButton
          icon={<Delete />}
          onClick={callbacks['onDeleteRelation'].bind(null, item.id || item['_id'])}
        />
      </div>
    </div>
    <div className={classes['relationsPairContainerTag']} style={{ 'overflow': 'hidden' }}>
      {RelationEntityTags(item.relatedEntities, callbacks['onDeleteEntityTag'], item.id || item['_id'])}
    </div>
  </div>
)

RelationPairInput.propTypes = {
  item: React.PropTypes.object.isRequired,
  onBlur: React.PropTypes.func.isRequired,
  callbacks: React.PropTypes.objectOf(React.PropTypes.func)
}

export default RelationPairInput
