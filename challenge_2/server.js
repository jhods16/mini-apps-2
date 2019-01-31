let express = require('express');
let app = express();
let port = 3000;
let bodyParser = require('body-parser');
let path = require('path');
let axios = require ('axios');

app.use(express.static(path.join(__dirname, './public'))); 
app.use(bodyParser.json());

app.get('/data', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(results => {
      res.send(results.data.bpi);
    })
    .catch(err => console.error(err));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})


