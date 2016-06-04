import React from 'react'
import _ from 'lodash'
import RelationPairInput from './RelationPairInput'

export const RelationPairList = (list = [], callbacks, entitySugs) => (
  <div>
    {_.map(list, (item, key) => RelationPairInput(item, key, callbacks, entitySugs))}
  </div>
)

RelationPairList.propTypes = {
  list: React.PropTypes.array.isRequired
}
