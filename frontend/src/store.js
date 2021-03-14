import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  albumListReducer,
  albumDetailsReducer,
  albumCreateReducer,
  albumDeleteReducer,
  tracksUpdateReducer,
} from './reducers/albumReducers.js'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
  albumList: albumListReducer,
  albumDetails: albumDetailsReducer,
  albumCreate: albumCreateReducer,
  albumDelete: albumDeleteReducer,
  tracksUpdate: tracksUpdateReducer,
  userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
