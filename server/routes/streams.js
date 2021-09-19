var express = require('express');
var router = express.Router();

var streamsSchema = require('../model/streams')

router.post('/', function(req, res, next) {
  const newStream = new streamsSchema(req.body)
  newStream.save((err,stream) => {
    if(err){
      return console.log(err)
    }
    res.send(stream)
  })
});

router.get('/', function(req, res, next) {
  streamsSchema.find({}, (err, result) => {
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
});

router.get('/:id', function(req, res, next) {
  streamsSchema.findOne({_id:req.params.id}, (err, result) => {
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
});

router.patch('/:id', function(req, res, next) {
  streamsSchema.findByIdAndUpdate({_id:req.params.id}, req.body,{ upsert: true }, (err, result) => {
    if(err){
      res.send(err)
    }else{
      console.log(result)
      res.send(result)
    }
  })
});

router.delete('/:id', function(req, res, next) {
  streamsSchema.findByIdAndDelete({_id:req.params.id}, (err, result) => {
    if(err){
      res.send(err)
    }else{
      console.log(result)
      res.send(result)
    }
  })
});

module.exports = router;