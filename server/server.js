const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const passport = require("passport");
const cookieParser = require('cookie-parser')
require('dotenv').config()


// connect DB
const connectDB = require('./config/db')
connectDB();


// init middleware
app.use(cookieParser());
app.use(express.json({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

// initialize passport for OAuth
app.use(passport.initialize());
app.use(passport.session())
require('./services/googleStrategy')
require('./services/facebookStrategy')



// routes for oAuth
require('./routes/Auth/googleAuth')(app)
require('./routes/Auth/facebookAuth')(app)



// general route 
app.use('/', require('./routes/Auth/localAuth'))
app.use('/', require('./routes/advertiseRoute'))
app.use('/', require('./routes/profileRoute'))

// Home
app.get('/', (req, res) => res.send('App is running'))

// Start the Server
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})