// We only need to import the modules necessary for initial render
import HomeRoute from './Home'
import CounterRoute from './Counter'
import EntityEditorRoute from './EntityEditor'
import SearchRoute from './Search'
import EntityPageRoute from './EntityPage'
import MarkdownEditorRoute from './MarkdownEditor'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  // component: Home          // component will be rendered on every route
  indexRoute: HomeRoute(store),
  childRoutes: [
    CounterRoute(store),       // route: /counter
    EntityEditorRoute(store),  // route: /entity/add
    SearchRoute(store),        // route: /search/:query
    EntityPageRoute(store),    // route: /entity/:entityId
    MarkdownEditorRoute(store) // route: /editor
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
