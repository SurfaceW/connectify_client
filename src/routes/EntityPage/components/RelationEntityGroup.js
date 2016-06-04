import React from 'react'
import { List, ListItem } from 'material-ui/List'
import _ from 'lodash'

const RelationEntityGroup = (relatedEntities, gotoEntity) => (
  <List>
    {_.map(relatedEntities, entity => {
      return (
        <ListItem primaryText={entity.name} onClick={gotoEntity.bind(null, entity['_id'])} />
      )
    })}
  </List>
)

RelationEntityGroup.propTypes = {
  relatedEntities: React.PropTypes.array.isRequired,
  gotoEntity: React.PropTypes.func.isRequired
}

export default RelationEntityGroup
