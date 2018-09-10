import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import configureStore from './CreateStore'
import rootSaga from '../sagas'
import ReduxPersist from '../config/ReduxPersist'

import { reducer as GithubReducer } from './GithubRedux'
import { reducer as SearchReducer } from './SearchRedux'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  github: GithubReducer,
  search: SearchReducer,
})

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  const { store, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  let { sagasManager } = configureStore(finalReducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers // eslint-disable-line global-require, import/no-self-import
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../sagas').default // eslint-disable-line global-require
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
