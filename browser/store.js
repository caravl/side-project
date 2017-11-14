import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './redux'

export default createStore(
  // reducer, preloadedState, applyMiddleware
)

// createStore(reducer, [preloadedState], [enhancer])
// createStore --> creates a redux store that holds the complete state tree of your app
// rootReducer --> a reducing function that returns the next state tree, given the current state tree and an action to handle
// preloadedState --> the initial state
// enhancer --> only store enhancer that ships with Redux is `applyMiddleware()`
