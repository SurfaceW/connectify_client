import React from 'react'
import _ from 'lodash'
import AppBar from 'components/AppBar'
import EmptyResultCard from './EmptyResultCard'
import SearchResultList from './SearchResultList'

export const SearchResults = ({ searchResults, gotoEntity }) => (
  <div>
    {AppBar('Search Results')}
    {_.size(searchResults) === 0 ? EmptyResultCard() : SearchResultList(searchResults, gotoEntity)}
  </div>
)

SearchResults.propTypes = {
  searchResults: React.PropTypes.array.isRequired,
  gotoEntity: React.PropTypes.func.isRequired
}
