import EntityPageContainer from './containers/EntityPageContainer'

export default (store) => ({
  path: 'entity/:entityId',
  component: EntityPageContainer
})
