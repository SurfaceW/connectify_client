import React from 'react'
import AppBar from 'components/AppBar'
import DefineCard from './DefineCard'
import PropsCard from './PropsCard'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ActionSettings from 'material-ui/svg-icons/action/settings'

const EntityPage = ({ entity, switchToEntityEditPage }) => (
  <div>
    {AppBar(entity.name)}
    {DefineCard(entity.name, entity.define)}
    {PropsCard(entity.props)}
    <FloatingActionButton style={{
      'position': 'fixed',
      'bottom': '1rem',
      'right': '1rem'
    }}
      mini
      onClick={switchToEntityEditPage.bind(this, entity)}
    >
      <ActionSettings />
    </FloatingActionButton>
  </div>
)

EntityPage.propTypes = {
  entity: React.PropTypes.object.isRequired,
  switchToEntityEditPage: React.PropTypes.func.isRequired
}

export default EntityPage
