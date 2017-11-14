import { combineReducers } from 'redux'
import users from './users'
import destinations from './destinations'
import activities from './activities'
import suggestions from './suggestions'

export default combineReducers({ users, destinations, activities, suggestions })

// combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to `createStore`

// the resulting reducer calls every child reducer and gathers their results into a single state object

// the shape of the state object matches the keys of the passed reducers

// the state will return { users, destinations, activities, suggestions }
