import React from 'react'
import _ from 'lodash'
import {List, ListItem} from 'material-ui/List'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import classes from './EntityPage.scss'

const PropsCard = (props) => (
  <div className={classes['narrowCard']}>
    <Card
      className={classes['generalCard'] + ' ' + classes['narrowCardContent']}
      initiallyExpanded
    >
      <CardHeader
        title='Properties'
        subtitle='General properties of this knowledge entity'
        actAsExpander
        showExpandableButton
      />
      <CardText expandable>
        <List>
          {_.map(props, (prop) => {
            return (
              <ListItem
                key={_.uniqueId('prop_')}
                primaryText={prop.name}
                secondaryText={prop.value}
              />
            )
          })}
        </List>
      </CardText>
    </Card>
  </div>
)

PropsCard.PropTypes = {
  props: React.PropTypes.array.isRequired
}

export default PropsCard
