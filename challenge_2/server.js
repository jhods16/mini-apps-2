let express = require('express');
let app = express();
let port = 3000;
let bodyParser = require('body-parser');
let path = require('path');
let controllers = require('./controllers.js')

app.use(express.static(path.join(__dirname, './public'))); 
app.use(bodyParser.json());

app.get('/data', controllers.getCachedData)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})


