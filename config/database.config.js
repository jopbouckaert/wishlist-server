require('dotenv').config()

module.exports = {
    url: process.env.DB_SERVER + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + process.env.DB_NAME
}