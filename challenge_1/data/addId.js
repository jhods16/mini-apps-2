let fs = require('fs');

let addId = () => {
  fs.readFile('/Users/jessicahodson/hack-reactor/w11/hrsf108-mini-apps-2/challenge_1/data/db.json', (err, results) => {
    if (err) {
      return console.error(err)
    } 
    let json = JSON.parse(results);
    console.log(typeof json)

    for (let i = 0; i < json.events.length; i++) {
      json.events[i].id = i;
    }
    fs.writeFile('/Users/jessicahodson/hack-reactor/w11/hrsf108-mini-apps-2/challenge_1/data/db.json', JSON.stringify(json), (err) => {
      if (err) {
        return console.error(err)
      }
    })
  })
}

addId();