import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'

export default () => (
  <Card>
    <CardHeader
      title='no result'
    />
    <CardText>
      There is no result for the current state, you can click back button and
      keep on searching with some other words.
    </CardText>
  </Card>
)
