require('./models/User')
const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/authRoutes')
const bodyParser = require('body-parser')
const requireAuth = require('./middlewares/requireAuth')
const app =  express();

app.use(bodyParser.json())
app.use(authRouter)

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.d2alo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
})

mongoose.connection.on('error', (err) => {
    console.error('Error connecting ot mongo', err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})