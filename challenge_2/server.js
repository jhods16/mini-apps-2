let express = require('express');
let app = express();
let port = 3000;
let path = require('path');
let controllers = require('./controllers.js');

app.use(express.static(path.join(__dirname, './public'))); 

app.get('/data', controllers.getCachedData);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
