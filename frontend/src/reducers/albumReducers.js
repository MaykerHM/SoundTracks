import {
  ALBUM_LIST_REQUEST,
  ALBUM_LIST_SUCCESS,
  ALBUM_LIST_FAIL,
  ALBUM_DETAILS_REQUEST,
  ALBUM_DETAILS_SUCCESS,
  ALBUM_DETAILS_FAIL,
} from '../constants/albumConstants.js'

export const albumListReducer = (state = { albums: [] }, action) => {
  switch (action.type) {
    case ALBUM_LIST_REQUEST:
      return { loading: true, albums: [] }
    case ALBUM_LIST_SUCCESS:
      return { loading: false, albums: action.payload }
    case ALBUM_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const albumDetailsReducer = (
  state = { album: { tracks: [] } },
  action
) => {
  switch (action.type) {
    case ALBUM_DETAILS_REQUEST:
      return { loading: true, ...state }
    case ALBUM_DETAILS_SUCCESS:
      return { loading: false, album: action.payload }
    case ALBUM_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
