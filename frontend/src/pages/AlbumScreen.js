import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Track from '../components/Track'
import Loader from '../components/LoaderSpinner'
import { listAlbumDetails } from '../actions/albumActions.js'

const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const AlbumImg = styled.img`
  max-width: 600px;
  border-radius: 12px;
  @media (max-width: 640px) {
    max-width: 90vw;
  }
`

const AlbumScreen = ({ match }) => {
  const dispatch = useDispatch()

  const albumDetails = useSelector((state) => state.albumDetails)
  const { loading, error, album } = albumDetails

  useEffect(() => {
    dispatch(listAlbumDetails(match.params.id))
  }, [dispatch, match])

  return (
    <Col>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          <h1>{album.name}</h1>
          <AlbumImg src={album.imgURI} alt={album.name} />
          <ul>
            {album.tracks.map((track) => (
              <Track music={track.music} artist={track.artist} />
            ))}
          </ul>
        </>
      )}
    </Col>
  )
}

export default AlbumScreen
