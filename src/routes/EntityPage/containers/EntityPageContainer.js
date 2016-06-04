import { connect } from 'react-redux'
import EntityPage from '../components/EntityPage'
import { switchToEntityEditPage } from '../modules/entity'
import { gotoEntity } from '../../Search/modules/searchEntity'

const mapActionCreators = {
  switchToEntityEditPage,
  gotoEntity
}

const mapStateToProps = (state) => ({
  entity: state.entity
})

export default connect(mapStateToProps, mapActionCreators)(EntityPage)
