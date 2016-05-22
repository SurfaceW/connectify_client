import { connect } from 'react-redux'
import EntityPage from '../components/EntityPage'

const mapActionCreators = {}

const mapStateToProps = (state) => ({
  entity: state.entity
})

export default connect(mapStateToProps, mapActionCreators)(EntityPage)
