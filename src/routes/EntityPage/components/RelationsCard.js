import React from 'react'
import _ from 'lodash'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import RelationEntityGroup from './RelationEntityGroup'
import classes from './EntityPage.scss'

const RelationsCard = (relations, gotoEntity) => (
  <div className={classes['narrowCard']}>
    <Card
      className={classes['generalCard'] + ' ' + classes['narrowCardContent']}
      initiallyExpanded
    >
      <CardHeader
        title='Relations'
        subtitle='General relations between entities to this entity'
        actAsExpander
        showExpandableButton
      />
      <CardText expandable>
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
  </div>
)

RelationsCard.PropTypes = {
  relations: React.PropTypes.array.isRequired,
  gotoEntity: React.PropTypes.func.isRequired
}

export default RelationsCard
