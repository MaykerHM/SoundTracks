import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Album from '../models/albumModel.js'

// @desc Fetch all albums
// @route GET /api/trilhas
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const trilhas = await Album.find({})

    res.json(trilhas)
  })
)

// @desc Fetch single album
// @route GET /api/trilhas/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const album = await Album.findById(req.params.id)

    if (album) {
      res.json(album)
    } else {
      res.status(404)
      throw new Error('Album não encontrado.')
    }
  })
)

export default router
