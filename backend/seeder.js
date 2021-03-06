import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import User from './models/userModel.js'
import albums from './data/albums.js'
import Album from './models/albumModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    // await Album.deleteMany()

    await Album.insertMany(albums)
    await User.insertMany(users)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Album.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
