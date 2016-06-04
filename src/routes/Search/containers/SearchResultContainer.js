import { connect } from 'react-redux'
import { SearchResults } from '../components/SearchResults'
import { gotoEntity } from '../modules/searchEntity'
import { searchEntity } from '../../Home/modules/entity'
import { dispatch } from '../../../main'

const mapActionCreators = {
  gotoEntity
}

const mapStateToProps = (state) => ({
  searchResults: state.searchResults
})

window.connectify_browserHistory.listen((context) => {
  if (context.pathname.indexOf('search') > 0) {
    let searchKeyWord = context.pathname.split('search/')[1]
    dispatch(searchEntity(searchKeyWord, false))
  }
})

export default connect(mapStateToProps, mapActionCreators)(SearchResults)
