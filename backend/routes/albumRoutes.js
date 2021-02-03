import express from 'express'
const router = express.Router()
import { getAlbums, getAlbumById } from '../controllers/albumController.js'

router.route('/').get(getAlbums)
router.route('/:id').get(getAlbumById)

export default router
