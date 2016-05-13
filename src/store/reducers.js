import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import entityEditor from '../routes/EntityEditor/modules/entity'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    entityEditor,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
