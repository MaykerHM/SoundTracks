import {
  ALBUM_LIST_REQUEST,
  ALBUM_LIST_SUCCESS,
  ALBUM_LIST_FAIL,
  ALBUM_DETAILS_REQUEST,
  ALBUM_DETAILS_SUCCESS,
  ALBUM_DETAILS_FAIL,
  ALBUM_CREATE_REQUEST,
  ALBUM_CREATE_SUCCESS,
  ALBUM_CREATE_FAIL,
  ALBUM_DELETE_REQUEST,
  ALBUM_DELETE_SUCCESS,
  ALBUM_DELETE_FAIL,
  TRACKS_UPDATE_FAIL,
  TRACKS_UPDATE_SUCCESS,
  TRACKS_UPDATE_REQUEST,
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

export const albumCreateReducer = (
  state = { album: { tracks: [] } },
  action
) => {
  switch (action.type) {
    case ALBUM_CREATE_REQUEST:
      return { loading: true, ...state }
    case ALBUM_CREATE_SUCCESS:
      return { loading: false, album: action.payload }
    case ALBUM_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const albumDeleteReducer = (
  state = { album: { tracks: [] } },
  action
) => {
  switch (action.type) {
    case ALBUM_DELETE_REQUEST:
      return { loading: true, ...state }
    case ALBUM_DELETE_SUCCESS:
      return { loading: false, album: action.payload }
    case ALBUM_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const tracksUpdateReducer = (
  state = { album: { tracks: [] } },
  action
) => {
  switch (action.type) {
    case TRACKS_UPDATE_REQUEST:
      return { loading: true, ...state }
    case TRACKS_UPDATE_SUCCESS:
      return { loading: false, album: action.payload }
    case TRACKS_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
