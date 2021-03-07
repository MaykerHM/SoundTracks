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

const createAlbum = asyncHandler(async (req, res) => {
  const newAlbum = new Album({
    name: req.body.name,
  })
  try {
    newAlbum.save()
  } catch (error) {
    res.json({ message: error })
  }
})

const deleteAlbum = asyncHandler(async (req, res) => {
  try {
    await Album.remove({ _id: req.params.id })
  } catch (error) {
    res.json({ message: error })
  }
})

export { getAlbums, getAlbumById, createAlbum, deleteAlbum }
