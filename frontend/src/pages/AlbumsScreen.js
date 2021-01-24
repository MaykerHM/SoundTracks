import React, { useState, useEffect } from 'react'
import Album from '../components/Album'
import styled from 'styled-components'
import axios from 'axios'

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
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const fetchAlbums = async () => {
      const res = await axios.get('/api/trilhas')

      setAlbums(res.data)
    }

    fetchAlbums()
  }, [])

  return (
    <>
      <Col>
        <h1>Trilhas Sonoras</h1>
        <Content>
          <Gallery>
            {albums.map((album) => (
              <Album album={album} />
            ))}
          </Gallery>
        </Content>
      </Col>
    </>
  )
}

export default AlbumsScreen
