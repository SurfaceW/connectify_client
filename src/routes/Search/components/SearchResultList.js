import React from 'react'
import _ from 'lodash'
import { Card, CardHeader, CardText } from 'material-ui/Card'

export default (searchResults, gotoEntity) => (
  <div>
    {_.map(searchResults, (result) => {
      return (
        <Card
          onClick={gotoEntity.bind(this, result['_id'], searchResults)}
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
