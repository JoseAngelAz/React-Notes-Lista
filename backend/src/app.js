const express = require('express');
const cors = require('cors');
const app = express();//servidor definido no iniciado.

//setting server
app.set('port',process.env.PORT || 4000);
//middlewares rutas que llegan antes que las  url
app.use(cors());//cada vez que llegue una petición al servidor podrá enviar y recibir datos
app.use(express.json());//el server entenderá json


//routes, url que al app usará para alimentar al frontend
app.use('/api/users', require('./routes/users'));

app.use('/api/notes', require('./routes/notes'));




module.exports = app;