const express = require('express')
const userRouter = require('./routess/user.routes')
const markRouter = require('./routess/mark.routes')

const PORT = process.env.PORT || 8080

const app = express()

 
app.use('express.json')
app.use('/api', userRouter)

app.listen(PORT, () => console.log('Server started on post ${PORT}'))
