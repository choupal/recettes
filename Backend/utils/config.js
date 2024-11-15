require('dotenv').config()

const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB

module.exports = {
  PORT,
  MONGODB_URL
}