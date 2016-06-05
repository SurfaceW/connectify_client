import React from 'react'
import AppBar from 'components/AppBar'
import DefineCard from './DefineCard'
import DetailCard from './DetailCard'
import PropsCard from './PropsCard'
import RelationsCard from './RelationsCard'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ActionSettings from 'material-ui/svg-icons/action/settings'

const EntityPage = ({ entity, switchToEntityEditPage, gotoEntity }) => (
  <div>
    {AppBar(entity.name)}
    {DefineCard(entity.name, entity.define)}
    <DetailCard
      detail={entity.detail}
    />
    {PropsCard(entity.props)}
    {RelationsCard(entity.relations, gotoEntity)}
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
