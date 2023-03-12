require('dotenv').config()
const express = require('express');
const cors = require('cors') // This is new
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

require('./config/Mongodb.config');
app.use(cors({credentials: true, origin: 'http://localhost:3000', exposedHeaders:['usertoken']}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
require('./routes/Admin.routes')(app);

app.listen(8000,()=>{
    console.log('Conectado exitosa mente')
})