const express = require('express');
const bodyParser = require('body-parser');
const {PORT} =  require('./config/server.config');

const connectMongodb = require('./config/dbconnection.config');
connectMongodb();
const app = express();

app.use(bodyParser.json());

const apiRouter = require('./routes')
// app.get('/home', homePingController)
app.use('/api',apiRouter); //localhost:3000/api/v1/ping

app.listen(PORT, ()=> {
    console.log(`Started server at port ${PORT}`)
})
