import { combineReducers, createStore } from '@reduxjs/toolkit'

import userReducer from './ducks/data'


const reducer = combineReducers({
  userData: userReducer
})


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;