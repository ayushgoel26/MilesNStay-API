var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/milesNstay');

/* GET reservations according to guest id. */
router.get('/', function(req, res) {
  if (req.query.userid == null){
    res.json({'msg': '"userid" not defined in query parameters'});
  } else {
    var collection = db.get('reservations');
    collection.find({"guest.guest_id": req.query.userid}, function(err, reservations){
      if(err) throw err;
      res.json(reservations);
    });
  }
});

/* GET reservations according to reservation id. */
router.get('/:id', function(req, res) {
  var collection = db.get('reservations');
  collection.findOne({"_id": req.params.id}, function(err, reservations){
      if(err) throw err;
      res.json(reservations);
  });
});

/* ADD reservations to the database */
router.post('/', function(req, res) {
  var collection = db.get('reservations');
  collection.insert(req.body.data, function(err, reservation) {
    if(err) res.json({'msg': err});
    else    res.json({"reservation_id": reservation._id});
  });
});

/* UPDATE/EDIT an existing reservation */
router.put('/', function(req, res) {
  var collection = db.get('reservations');
  collection.update(req.body.query, {"$set": req.body.newValue}, function(err, result) {
    if(err) throw err;
    res.json(result);
  });
});

/* DELETE an existing reservation from the database */
router.delete('/', function(req, res) {
  var collection = db.get('reservations');
  collection.remove(req.body.query, function(err, result) {
    if(err) throw err;
    res.json(result);
  });
});

module.exports = router;
