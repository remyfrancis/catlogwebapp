var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var AnchoringItems = require('../models/anchoring');

var anchoringRouter = express.Router();
anchoringRouter.use(bodyParser.json());

//


/*var MongoClient = require('mongodb').MongoClient, assert = require('assert');


// Use connect method to connect to the Server
MongoClient.connect(uri, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  var col = db.catlog('find');

      // Get first documents from cursor
      col.find({a:1}).limit(1).next(function(err, doc) {
        assert.equal(null, err);
        assert.ok(doc != null);
        console.log(col);
        db.close();
      });
    });*/




//
anchoringRouter.route('/')
.get(function (req, res, next) {
    AnchoringItems.find({}, function (err, anchoring) {
        if (err) throw err;
        res.json(anchoring);
    });
})

.post(function (req, res, next) {
    AnchoringItems.create(req.body, function (err, anchoring) {
        if (err) throw err;
        console.log('Anchoring item created!');
        var id = anchoring._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the anchoring item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    AnchoringItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

anchoringRouter.route('/:anchoringId')
.get(function (req, res, next) {
    AnchoringItems.findById(req.params.anchoringId, function (err, anchoring) {
        if (err) throw err;
        res.json(anchoring);
    });
})

.put(function (req, res, next) {
    AnchoringItems.findByIdAndUpdate(req.params.anchoringId, {
        $set: req.body
    }, {
        new: true
    }, function (err, anchoring) {
        if (err) throw err;
        res.json(anchoring);
    });
})

.delete(function (req, res, next) {
    AnchoringItems.findByIdAndRemove(req.params.anchoringId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = anchoringRouter;
