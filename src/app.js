//Dependencies
const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const canonRouter = require('./canon/canon.router')
const languagesRouter = require('./languages/languages.router')
const chaptersRouter = require('./chapters/chapters.router')
const booksRouter = require('./books/books.router')
const conferencesRouter = require('./conferences/conferences.router')
const referencesRouter = require('./references/references.router')

//Files
const {port} = require('./config')

//Routes
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')

//Initial configs
const app = express()

app.use(express.json())

//Database authentication
db.authenticate()
    .then(() =>{
        console.log('Database authenticated')
    })
    .catch( err => {
        console.log(err)
    })

db.sync()
    .then(() =>{
        console.log('Database synced')
    })
    .catch( err => {
        console.log(err)
    })

initModels()
//A middleware is a function that executes a request before another callback


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users/`
    })
})

//Routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/canon', canonRouter)
app.use('/api/v1/languages', languagesRouter)
app.use('/api/v1/chapters', chaptersRouter)
app.use('/api/v1/books', booksRouter)
app.use('/api/v1/conferences', conferencesRouter)
app.use('/api/v1/references', referencesRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})