const MessagingResponse = require('twilio').twiml.MessagingResponse;
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();


const response = new MessagingResponse();
response.message('This is message 1 of 2.');
response.message('This is message 2 of 2.');

app.post('/', (req, res) => {
    res.type('application/xml');
    res.send(response.toString());
});

app.listen(port, () => { console.log(`Escuchando en el puerto ${port}...`) });