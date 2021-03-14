import express from 'express'
const router = express.Router()
import {
  getAlbums,
  getAlbumById,
  createAlbum,
  deleteAlbum,
  updateTracks,
} from '../controllers/albumController.js'

router.route('/').get(getAlbums)
router.route('/:id').get(getAlbumById)
router.route('/admin/album').post(createAlbum).delete(deleteAlbum)
router.route('/admin/album/tracks').post(updateTracks)

export default router
