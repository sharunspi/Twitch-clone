var express = require('express');
var router = express.Router();

var streamsSchema = require('../model/streams')

router.post('/', function(req, res, next) {
  const newStream = new streamsSchema(req.body)
  newStream.save((err,stream) => {
    if(err){
      return console.log(err)
    }
    console.log(stream)
    res.send('completed')
  })
});

router.get('/', function(req, res, next) {
  res.send('hai')
});



module.exports = router;