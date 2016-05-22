import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'

export default (title, define) => (
  <Card>
    <CardHeader title='Define' />
    <CardText>
      {define || 'empty define'}
    </CardText>
  </Card>
)
