import asyncHandler from 'express-async-handler'
import Album from '../models/albumModel.js'

// @desc Fetch all albums
// @route GET /api/trilhas
// @access Public
const getAlbums = asyncHandler(async (req, res) => {
  const trilhas = await Album.find({})

  res.json(trilhas)
})

// @desc Fetch single album
// @route GET /api/trilhas/:id
// @access Public
const getAlbumById = asyncHandler(async (req, res) => {
  const album = await Album.findById(req.params.id)

  if (album) {
    res.json(album)
  } else {
    res.status(404)
    throw new Error('Album não encontrado.')
  }
})

export { getAlbums, getAlbumById }
