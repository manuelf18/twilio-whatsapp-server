const port = process.env.PORT || 3000;
const express = require('express');

const app = express();

// set routers

app.use('/', require('./routes/router'));






app.listen(port, () => { console.log(`Escuchando en el puerto ${port}...`) });