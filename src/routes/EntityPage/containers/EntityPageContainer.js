import { connect } from 'react-redux'
import EntityPage from '../components/EntityPage'
import { switchToEntityEditPage, getEntity } from '../modules/entity'
import { gotoEntity } from '../../Search/modules/searchEntity'
import { dispatch } from '../../../main'

const mapActionCreators = {
  switchToEntityEditPage,
  gotoEntity
}

const mapStateToProps = (state) => ({
  entity: state.entity
})

window.connectify_browserHistory.listen((context) => {
  if (context.pathname.indexOf('entity') > 0) {
    let query = context.pathname.split('entity/')[1]
    dispatch(getEntity(query))
  }
})

export default connect(mapStateToProps, mapActionCreators)(EntityPage)
