import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { listAlbums, updateTracks } from '../actions/albumActions'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { TextField, Button } from '@material-ui/core'
import DialogCreateAlbum from '../components/DialogCreateAlbum'
import DialogDeleteAlbum from '../components/DialogDeleteAlbum'
import DialogDeleteTrack from '../components/DialogDeleteTrack'
import Loader from 'react-loader-spinner'
import { FiFile, FiFilePlus, FiSave, FiTrash } from 'react-icons/fi'
import { Col, Row } from '../styles'
import mongoose from 'mongoose'

const AdminScreen = () => {
  const dispatch = useDispatch()

  const albumList = useSelector((state) => state.albumList)

  const { loading, error, albums } = albumList
  const [album, setAlbum] = useState(null)
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [isOpenDialogDeleteTrack, setIsOpenDialogDeleteTrack] = useState(false)
  const [tracks, setTracks] = useState([])
  const [deletedTrackId, setDeletedTrackId] = useState(null)
  const [deletedTrackName, setDeletedTrackName] = useState(null)

  useEffect(() => {
    setTracks(album?.tracks)
  }, [album])

  useEffect(() => {
    dispatch(listAlbums())
  }, [dispatch])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickOpen2 = () => {
    setOpen2(true)
  }

  const handleClose2 = () => {
    setOpen2(false)
  }

  const handleOpenDialogDeleteTrack = (id, trackName) => {
    setDeletedTrackId(id)
    setDeletedTrackName(trackName)
    setIsOpenDialogDeleteTrack(true)
  }

  const handleCloseDialogDeleteTrack = () => {
    setIsOpenDialogDeleteTrack(false)
  }

  const resetAlbumSelection = () => {
    setAlbum(null)
  }

  const handleOnchangeInputText = (id, value, key) => {
    const newTracks = tracks.map((track) => {
      if (track._id === id) {
        const newTrack = { ...track }
        newTrack[key] = value
        return newTrack
      } else {
        return track
      }
    })
    setTracks(newTracks)
  }

  const handleSaveTracks = () => {
    dispatch(updateTracks(album._id, tracks))
    dispatch(listAlbums())
  }

  const handleRemoveTrack = (id) => {
    const filteredTracks = tracks.filter((track) => track._id !== id)
    setTracks(filteredTracks)
  }

  const handleAddNewTrack = () => {
    const newTrack = {
      _id: mongoose.Types.ObjectId(),
      music: '',
      artist: '',
      musicURI: '',
    }
    if (tracks) {
      setTracks((tracks) => [...tracks, newTrack])
    }
  }

  return (
    <Col>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          <h2>Álbum</h2>
          <Row>
            <Autocomplete
              value={album}
              onChange={(event, newAlbumName) => setAlbum(newAlbumName)}
              id='albumName'
              options={albums}
              getOptionLabel={(option) => option && option.name}
              getOptionSelected={(option) => option._id === album._id}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label='Nome' variant='outlined' />
              )}
              selectOnFocus={true}
            />
            <Button variant='outlined' size='small' onClick={handleClickOpen}>
              <FiFile style={{ fontSize: '2.5rem' }} />
              <p>Novo</p>
            </Button>
            <Button variant='outlined' size='small' onClick={handleClickOpen2}>
              <FiTrash style={{ fontSize: '3rem' }} />
              <p>Excluir</p>
            </Button>
            <DialogCreateAlbum handleClose={handleClose} open={open} />
            <DialogDeleteAlbum
              handleClose={handleClose2}
              open={open2}
              id={album && album._id}
              resetAlbumSelection={resetAlbumSelection}
            />
            <DialogDeleteTrack
              handleClose={handleCloseDialogDeleteTrack}
              open={isOpenDialogDeleteTrack}
              trackName={deletedTrackName}
              id={deletedTrackId}
              handleRemoveTrack={handleRemoveTrack}
            />
          </Row>
          <h2>Trilhas</h2>
          <ul>
            <li>
              <Row>
                <h2>Música</h2>
                <h2>Artista</h2>
                <h2>URI</h2>
                <Button
                  variant='outlined'
                  size='small'
                  onClick={handleSaveTracks}
                >
                  <FiSave style={{ fontSize: '1.2rem' }} />
                  <p>Salvar</p>
                </Button>
                <Button
                  variant='outlined'
                  size='small'
                  onClick={handleAddNewTrack}
                >
                  <FiFilePlus style={{ fontSize: '1.2rem' }} />
                  <p>Adicionar</p>
                </Button>
              </Row>
            </li>
            {tracks &&
              tracks.map((track) => (
                <li key={track._id}>
                  <TextField
                    required
                    variant='outlined'
                    value={track ? track.music : ''}
                    placeholder='Música'
                    onChange={(e) =>
                      handleOnchangeInputText(
                        track._id,
                        e.target.value,
                        'music'
                      )
                    }
                  />
                  <TextField
                    required
                    variant='outlined'
                    placeholder='artista'
                    value={track ? track.artist : 'none'}
                    onChange={(e) =>
                      handleOnchangeInputText(
                        track._id,
                        e.target.value,
                        'artist'
                      )
                    }
                  />
                  <TextField
                    required
                    variant='outlined'
                    placeholder='URI'
                    value={track ? track.musicURI : 'none'}
                    onChange={(e) =>
                      handleOnchangeInputText(
                        track._id,
                        e.target.value,
                        'musicURI'
                      )
                    }
                  />
                  <Button
                    variant='outlined'
                    size='small'
                    onClick={() =>
                      handleOpenDialogDeleteTrack(track._id, track.music)
                    }
                  >
                    <FiTrash style={{ fontSize: '1.2rem' }} />
                  </Button>
                </li>
              ))}
          </ul>
        </>
      )}
    </Col>
  )
}

export default withRouter(AdminScreen)
