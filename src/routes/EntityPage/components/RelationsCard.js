import React from 'react'
import _ from 'lodash'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import RelationEntityGroup from './RelationEntityGroup'

const RelationsCard = (relations, gotoEntity) => (
  <Card>
    <CardHeader title='Relations' />
    <CardText>
      {_.map(relations, (relation) => {
        return (
          <div key={_.uniqueId('prop_')}>
            <h4>{relation.name}</h4>
            {RelationEntityGroup(relation.relatedEntities, gotoEntity)}
          </div>
        )
      })}
    </CardText>
  </Card>
)

RelationsCard.PropTypes = {
  relations: React.PropTypes.array.isRequired,
  gotoEntity: React.PropTypes.func.isRequired
}

export default RelationsCard
