const MessagingResponse = require('twilio').twiml.MessagingResponse;
const port = process.env.PORT || 3000;
const express = require('express');
const cardRequest = require('./modules/cardRequest');
const app = express();


const response = new MessagingResponse();


app.post('/', async (req, res) => {
    await cardRequest.get().then(
        (value) => {
            let cards = JSON.parse(value);
            for(i=0; i<3; i++){
                let responseVars = ['first', 'second', 'third'];
                response.message(`Your ${responseVars[i]} card of the day is: ${cards[i].name}, which means: ${cards[i].meaning}`);
            }
        }, 
        (err) => {
            response.message(`There was an an error ${err}`);
        } 
    );
    res.type('application/xml');
    res.send(response.toString());
});

app.listen(port, () => { console.log(`Escuchando en el puerto ${port}...`) });