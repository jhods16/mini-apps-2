let fs = require('fs');
let path = require('path');

let addId = () => {
  fs.readFile(path.join(__dirname, 'data/db.json'), (err, results) => {
    if (err) {
      return console.error(err)
    } 
    let json = JSON.parse(results);
    console.log(typeof json)

    for (let i = 0; i < json.events.length; i++) {
      json.events[i].id = i;
    }
    fs.writeFile(path.join(__dirname, 'data/db.json'), JSON.stringify(json), (err) => {
      if (err) {
        return console.error(err)
      }
    })
  })
}

addId();