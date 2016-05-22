import { connect } from 'react-redux'
import EntityPage from '../components/EntityPage'
import { switchToEntityEditPage } from '../modules/entity'

const mapActionCreators = {
  switchToEntityEditPage
}

const mapStateToProps = (state) => ({
  entity: state.entity
})

export default connect(mapStateToProps, mapActionCreators)(EntityPage)
