/**
 * stateMap
 * this is only for demostration
 * do not to import it
 *
 * @type {Object}
 */

const entityItem = {
  _id: 'unique id generated by datasource code',
  name: 'JavaScript',
  define: 'JavaScript is a good programming language.',
  props: [{
    name: 'author',
    value: 'E.B.'
  }],
  relations: [{
    id: 'uniqueId',
    name: 'belong to',
    relatedEntities: [ 'entityId' ]
  }],
  entitySugs: [{
    id: 'entityId',
    name: 'entityName'
  }]
}

const searchResultItem = {
  name: 'JavaScript',
  define: 'JavaScript is a good programming language.'
}

export const stateMap = {
  searchText: 'JavaScript',
  searchResults: [
    searchResultItem
  ],
  entity: entityItem,
  entityEditor: entityItem
}
