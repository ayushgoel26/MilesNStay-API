var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/milesNstay');

/* GET listings according available */
router.get('/', function(req, res) {
  var collection = db.get('properties');
  collection.find({}, function(err, properties){
      if(err) throw err;
      res.json(properties);
  });
});

/* GET property for a property id. */
router.get('/:id', function(req, res) {
  var collection = db.get('properties');
  collection.findOne({"_id": req.params.id}, function(err, properties){
      if(err) throw err;
      res.json(properties);
  });
});

/* ADD a new property listing to the database */
router.post('/', function(req, res) {
  var collection = db.get('properties');
  collection.insert(req.body.data, function(err, property) {
    if(err) throw err;
    res.json({'property_id': property._id});
  });
});

/* EDIT/UPDATE an existing property listing to the database */
router.put('/', function(req, res) {
  var collection = db.get('properties');
  collection.update(req.body.query, {"$set": req.body.newValue}, function(err, result) {
    if(err) throw err;
    res.json(result);
  });
});

/* DELETE an existing property listing from the database */
router.delete('/', function(req, res) {
  var collection = db.get('properties');
  collection.remove(req.body.query, function(err, result) {
    if(err) throw err;
    res.json(result);
  });
});

module.exports = router;
