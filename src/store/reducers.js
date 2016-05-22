import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import entity from '../routes/EntityPage/modules/entity'
import entityEditor from '../routes/EntityEditor/modules/entity'
import searchResults from '../routes/Home/modules/entity'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    entity,
    searchResults,
    entityEditor,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
