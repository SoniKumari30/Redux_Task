import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk"
import fieldReducer from "../reducer/fieldReducer"

const configureStore = () => {
  const store = createStore(
    combineReducers({ datas: fieldReducer }),
    applyMiddleware(thunk)
  )//
  return store
}

export default configureStore
