const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const router = express.Router();
const cardRequest = require('../modules/cardRequest');


router.post('/', async (req, res) => {
    const response = new MessagingResponse();
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


module.exports = router;