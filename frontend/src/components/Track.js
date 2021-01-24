import React from 'react'
import styled from 'styled-components'

const StyledTrack = styled.li``

const Track = ({ music, artist }) => {
  return (
    <StyledTrack>
      {music} - {artist}
    </StyledTrack>
  )
}

export default Track
