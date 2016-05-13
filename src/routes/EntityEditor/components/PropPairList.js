import React from 'react'
import _ from 'lodash'
import { PropPairInput } from './PropPairInput'

export const PropPairList = (list = [], onBlur, onDelete) => (
  <div>
    {_.map(list, (item, key) => PropPairInput(item, onBlur, key, onDelete))}
  </div>
)

PropPairList.propTypes = {
  list: React.PropTypes.array.isRequired,
  onBlur: React.PropTypes.func.isRequired
}
