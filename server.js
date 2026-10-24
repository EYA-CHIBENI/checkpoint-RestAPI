const express = require ('express')
const ConnectDB = require('./config/ConnectDB')
const ContactRouter = require('./routes/Contact')
const app= express()
const port = 5000

ConnectDB()

app.use(express.json())
app.use('/api/contact',ContactRouter)




app.listen(port, console.log( `server is runnig on port ${port}`))