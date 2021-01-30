import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Album from '../components/Album'
import Loader from '../components/LoaderSpinner'
import styled from 'styled-components'
import { listAlbums } from '../actions/albumActions'

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Content = styled.div`
  width: 80vw;
  margin: 20px 0;
  @media (max-width: 600px) {
    width: 100vw;
  }
`

const AlbumsScreen = () => {
  const dispatch = useDispatch()

  const albumList = useSelector((state) => state.albumList)
  const { loading, error, albums } = albumList

  useEffect(() => {
    dispatch(listAlbums())
  }, [dispatch])

  return (
    <>
      <Col>
        <h1>Trilhas Sonoras</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <Content>
            <Gallery>
              {albums.map((album) => (
                <Album album={album} />
              ))}
            </Gallery>
          </Content>
        )}
      </Col>
    </>
  )
}

export default AlbumsScreen
