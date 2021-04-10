require('./modals/User')
require('./modals/Track')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')

const uri = "mongodb+srv://erhanyaylali1:efes1998@cluster0.jrgwm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
})

mongoose.connection.on('connected', () => console.log("Connected to Mongo Db"))
mongoose.connection.on('error',(error) => console.log(error))

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`)
})


app.listen(3000, () => {
    console.log('Listening on port 3000')
})