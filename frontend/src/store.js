import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  albumListReducer,
  albumDetailsReducer,
} from './reducers/albumReducers.js'

const reducer = combineReducers({
  albumList: albumListReducer,
  albumDetails: albumDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
