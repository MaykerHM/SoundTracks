import mongoose from 'mongoose'

const trackSchema = mongoose.Schema(
  {
    music: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    musicURI: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
)

const albumSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imgURI: {
      type: String,
      required: true,
    },
    tracks: [trackSchema],
  },
  {
    timestamps: true,
  }
)

const Album = mongoose.model('Album', albumSchema)

export default Album
