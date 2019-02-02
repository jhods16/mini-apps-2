let express = require('express');
let app = express();
let port = 3000;
let path = require('path')

app.use(express.static(path.join(__dirname, './public')));

app.listen(port, () => {
  console.log(`Listening on ${port}!`)
})
