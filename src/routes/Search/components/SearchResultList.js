import React from 'react'
import _ from 'lodash'
import { Card, CardHeader, CardText } from 'material-ui/Card'

export default (searchResults) => (
  <div>
    {_.map(searchResults, (result) => {
      return (
        <Card
          onClick={() => { console.log('click me!') }}
        >
          <CardHeader
            title={result.name}
          />
          <CardText>
            {result.define.slice(0, 500)}
          </CardText>
        </Card>
      )
    })}
  </div>
)
