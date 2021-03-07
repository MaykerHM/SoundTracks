import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { listAlbums } from '../actions/albumActions'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { TextField, Button } from '@material-ui/core'
import DialogCreateAlbum from '../components/DialogCreateAlbum'
import DialogDeleteAlbum from '../components/DialogDeleteAlbum'
import Loader from 'react-loader-spinner'
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import DeleteIcon from '@material-ui/icons/Delete'
import { Col, Row } from '../styles'

const AdminScreen = () => {
  const dispatch = useDispatch()

  const albumList = useSelector((state) => state.albumList)

  const { loading, error, albums } = albumList
  const [album, setAlbum] = useState(null)
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

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

  const resetAlbumSelection = () => {
    setAlbum(null)
  }

  return (
    <Col>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          <h1>Nome do Álbum</h1>
          <Row>
            <Autocomplete
              value={album}
              onChange={(event, newAlbumName) => setAlbum(newAlbumName)}
              id='albumName'
              options={albums}
              getOptionLabel={(option) => option && option.name}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label='Nome' variant='outlined' />
              )}
              selectOnFocus={true}
            />
            <Button variant='outlined' size='small' onClick={handleClickOpen}>
              <NoteAddIcon style={{ fontSize: '2rem' }} />
            </Button>
            <Button variant='outlined' size='small' onClick={handleClickOpen2}>
              <DeleteIcon style={{ fontSize: '2rem' }} />
            </Button>
            <DialogCreateAlbum handleClose={handleClose} open={open} />
            <DialogDeleteAlbum
              handleClose={handleClose2}
              open={open2}
              id={album && album._id}
              resetAlbumSelection={resetAlbumSelection}
            />
          </Row>
          <ul>
            {album &&
              album.tracks.map((track) => (
                <div>
                  <div>{track ? track.music : ''}</div>
                  <div>{track ? track.musicURI : 'none'}</div>
                </div>
              ))}
          </ul>
        </>
      )}
    </Col>
  )
}

export default withRouter(AdminScreen)
