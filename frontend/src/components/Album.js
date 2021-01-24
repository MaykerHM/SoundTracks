import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledAlbum = styled.div`
  width: 260px;
  height: 280px;
  border-radius: 12px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  img {
    width: 260px;
    border-radius: 12px;
  }
  a {
    color: black;
  }
  p {
    height: 1.5rem;
    overflow: hidden;
  }
`

const Album = ({ album }) => {
  return (
    <StyledAlbum>
      <Link to={`/trilhas/${album._id}`} style={{ textDecoration: 'none' }}>
        <img src={album.imgURL} alt={album.name} />
        <h3>{album.name}</h3>
        <p>{album.synopsis}</p>
      </Link>
    </StyledAlbum>
  )
}

export default Album
