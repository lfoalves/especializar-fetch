const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json())

app.route('/github').get((req, res) => {

    axios.get('https://api.github.com/users/lfoalves')
    .then( result => res.send( `<img src=${result.data.avatar_url} />`))
    .catch( error => console.log( error ))
})


app.listen(3000, console.log('Rodando!'))