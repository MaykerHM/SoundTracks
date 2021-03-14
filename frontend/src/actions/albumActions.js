import axios from 'axios'
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
  TRACKS_UPDATE_REQUEST,
  TRACKS_UPDATE_SUCCESS,
  TRACKS_UPDATE_FAIL,
} from '../constants/albumConstants.js'

export const listAlbums = () => async (dispatch) => {
  try {
    dispatch({ type: ALBUM_LIST_REQUEST })
    const { data } = await axios.get('/api/trilhas')

    dispatch({
      type: ALBUM_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALBUM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listAlbumDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALBUM_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/trilhas/${id}`)

    dispatch({
      type: ALBUM_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALBUM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createAlbum = (name) => async (dispatch) => {
  try {
    dispatch({ type: ALBUM_CREATE_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/trilhas/admin/album',
      { name },
      config
    )

    dispatch({
      type: ALBUM_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALBUM_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteAlbum = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALBUM_DELETE_REQUEST })

    const { data } = await axios.delete('/api/trilhas/admin/album', {
      data: { id },
    })

    dispatch({
      type: ALBUM_DELETE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALBUM_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateTracks = (id, tracks) => async (dispatch) => {
  try {
    dispatch({ type: TRACKS_UPDATE_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/trilhas/admin/album/tracks',
      { id, tracks },
      config
    )

    dispatch({
      type: TRACKS_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TRACKS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
