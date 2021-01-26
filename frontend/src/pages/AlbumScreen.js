import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Track from '../components/Track'
import axios from 'axios'

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
  const [album, setAlbum] = useState({ tracks: [] })
  useEffect(() => {
    const fetchAlbum = async () => {
      const res = await axios.get(`/api/trilhas/${match.params.id}`)

      setAlbum(res.data)
    }

    fetchAlbum()
  }, [match])
  return (
    <Col>
      <h1>{album.name}</h1>
      <AlbumImg src={album.imgURI} alt={album.name} />
      <ul>
        {album.tracks.map((track) => (
          <Track music={track.music} artist={track.artist} />
        ))}
      </ul>
    </Col>
  )
}

export default AlbumScreen
