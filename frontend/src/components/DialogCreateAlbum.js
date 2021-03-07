import React, { useState } from 'react'

import { createAlbum, listAlbums } from '../actions/albumActions'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch } from 'react-redux'

export default function DialogoCreateAlbum({ handleClose, open }) {
  const [newAlbumName, setNewAlbumName] = useState('')

  const dispatch = useDispatch()

  const handleCreateAlbum = () => {
    if (newAlbumName !== '') {
      dispatch(createAlbum(newAlbumName))
      dispatch(listAlbums())
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
        <DialogTitle id='form-dialog-title'>Criar Álbum</DialogTitle>
        <DialogContent style={{ width: '500px' }}>
          <TextField
            value={newAlbumName}
            onChange={(e) => setNewAlbumName(e.target.value)}
            autoFocus
            margin='dense'
            label='Nome'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancelar
          </Button>
          <Button onClick={handleCreateAlbum} color='primary'>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
