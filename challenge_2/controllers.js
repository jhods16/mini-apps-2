let axios = require('axios');
let redis = require('redis');
let redisClient = redis.createClient();

const getCachedData = (req, res) => {
  return redisClient.get(JSON.stringify(req.query), (err, results) => {
    if (!results) {
      getCoinDeskData(req, res)
    } else if (err) {
      res.send(`Could not get data for query: ${req.query}`)
    } else {
      res.send(results);
    }
  })
}

const getCoinDeskData = (req,res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json', {
    params: req.query
  })
    .then(results => {
      redisClient.setex(JSON.stringify(req.query), 3600, JSON.stringify(results.data.bpi));
      res.send(results.data.bpi);
    })
    .catch(err => res.send(err));
}

module.exports = { getCachedData }