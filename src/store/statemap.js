/**
 * stateMap
 * this is only for demostration
 * do not to import it
 *
 * @type {Object}
 */

const entityItem = {
  name: 'JavaScript',
  define: 'JavaScript is a good programming language.',
  props: [{
    name: 'author',
    value: 'E.B.'
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
