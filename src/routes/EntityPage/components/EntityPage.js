import React from 'react'
import AppBar from 'components/AppBar'
import DefineCard from './DefineCard'
import PropsCard from './PropsCard'

const EntityPage = ({ entity }) => (
  <div>
    {AppBar(entity.name)}
    {DefineCard(entity.name, entity.define)}
    {PropsCard(entity.props)}
  </div>
)

EntityPage.propTypes = {
  entity: React.PropTypes.object.isRequired
}

export default EntityPage
