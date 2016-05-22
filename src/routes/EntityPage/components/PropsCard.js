import React from 'react'
import _ from 'lodash'
import { Card, CardHeader, CardText } from 'material-ui/Card'

const PropsCard = (props) => (
  <Card>
    <CardHeader title='Properties' />
    <CardText>
      {_.map(props, (prop) => {
        return (
          <div>
            <h4>{prop.name}</h4>
            <p>{prop.value}</p>
          </div>
        )
      })}
    </CardText>
  </Card>
)

PropsCard.PropTypes = {
  props: React.PropTypes.array.isRequired
}

export default PropsCard
