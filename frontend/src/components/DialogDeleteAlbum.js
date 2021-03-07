import React, { useState } from 'react'

import { deleteAlbum, listAlbums } from '../actions/albumActions'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { DialogContentText } from '@material-ui/core'

export default function DialogDeleteAlbum({
  handleClose,
  open,
  id,
  resetAlbumSelection,
}) {
  const [newAlbumName, setNewAlbumName] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const { username } = userInfo

  const handleDeleteAlbum = () => {
    if (newAlbumName === `${username}`) {
      dispatch(deleteAlbum(id))
      dispatch(listAlbums())
      resetAlbumSelection()
    }
    handleClose()
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Excluir Álbum</DialogTitle>
        <DialogContent style={{ width: '500px' }}>
          <DialogContentText>
            Digite o seu login para confirmar.
          </DialogContentText>
          <TextField
            value={newAlbumName}
            onChange={(e) => setNewAlbumName(e.target.value)}
            autoFocus
            margin='dense'
            label='Login'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancelar
          </Button>
          <Button onClick={handleDeleteAlbum} color='primary'>
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
