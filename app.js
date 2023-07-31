require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express();
const connectToDB = require('./config/db.js')

// middleware express
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
// connect to db
connectToDB()

const userRoutes = require('./Routes/userRoutes.js')
app.use('/',userRoutes)

module.exports = app;