import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import classes from './EntityPage.scss'

export default (title, define) => (
  <Card className={classes['generalCard']}>
    <CardHeader title='Define' />
    <CardText>
      {define || 'empty define'}
    </CardText>
  </Card>
)
