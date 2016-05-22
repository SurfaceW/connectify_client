import SearchResultContainer from './containers/SearchResultContainer'

export default (store) => ({
  path: 'search/:query',
  component: SearchResultContainer
})
