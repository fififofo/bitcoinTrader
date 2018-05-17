
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/btcusd', function (req, res) {

    return axios.get('https://api.bitfinex.com/v1/pubticker/btcusd/')
    .then((resp) => resp.data)
    .then((resp) => res.send(resp))
    .catch( (error) => {
        res.status(500).send({ error: 'Request has failed' })
    })
})

app.listen(3001, function () {
  console.log('Server is connected to port 3001');
})