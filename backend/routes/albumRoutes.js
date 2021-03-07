import express from 'express'
const router = express.Router()
import {
  getAlbums,
  getAlbumById,
  createAlbum,
  deleteAlbum,
} from '../controllers/albumController.js'

router.route('/').get(getAlbums)
router.route('/:id').get(getAlbumById)
router.route('/admin').post(createAlbum).delete(deleteAlbum)
router.route('/admin/:id').delete(deleteAlbum)

export default router
