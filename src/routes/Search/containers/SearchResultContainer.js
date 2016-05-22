import { connect } from 'react-redux'
import { SearchResults } from '../components/SearchResults'
import { gotoEntity } from '../modules/searchEntity'

const mapActionCreators = {
  gotoEntity
}

const mapStateToProps = (state) => ({
  searchResults: state.searchResults
})

export default connect(mapStateToProps, mapActionCreators)(SearchResults)
