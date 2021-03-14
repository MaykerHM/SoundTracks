import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { DialogContentText } from '@material-ui/core'

export default function DialogDeleteTrack({
  handleClose,
  open,
  trackName,
  id,
  handleRemoveTrack,
}) {
  const handleConfirmDeleteTrack = () => {
    handleRemoveTrack(id)
    handleClose()
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Excluir</DialogTitle>
        <DialogContent style={{ width: '500px' }}>
          <DialogContentText>
            <strong>{trackName}</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmDeleteTrack} color='primary'>
            Confirmar
          </Button>
          <Button onClick={handleClose} color='primary'>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
