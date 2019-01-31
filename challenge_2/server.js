let express = require('express');
let app = express();
let port = 3000;
let bodyParser = require('body-parser');
let path = require('path');

app.use(express.static(path.join(__dirname, './public'))); 
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})


