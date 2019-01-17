# Twilio Whatsapp Server

This is a very basic express server that responds to a POST request with some cards from [Espress Server Tarot](https://github.com/manuelf18/express-server-tarot)

## How to run?
1. Clone this repository
2. Install dependencies:
    ``` npm install ```
3. Start:
    ``` npm start ``` or
    ``` node app.js ``` or
    ``` nodemon ```

## Instructions
These instructions are for making the [Twilio API for Whatsapp](https://www.twilio.com/whatsapp) make a request to our server. The server must be deployed on the web,
so I deployed mine using [Heroku](https://www.heroku.com/).

1. In the whatsapp/learn page of Twilio, we need to follow the instructions of joining the Whatsapp sandbox.
2. In the whatsapp/sandbox page of Twilio, there will be a input of **WHEN A MESSAGE COMES IN** there we will set the url of our express server.
3. The twilio API is gonna make a POST request to our server and we need to handle it, in my case I respond with a GET request to my tarot server (link above), and then 
express sends a respond in the form of the [TwiML™](https://www.twilio.com/docs/voice/twiml) standard.
4. Anytime sends a message to the twilio bot, it will respond with the tarot cards.
