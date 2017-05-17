var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var FishingItems = require('../models/fishing');

var fishingRouter = express.Router();
fishingRouter.use(bodyParser.json());

fishingRouter.route('/')
.get(function (req, res, next) {
    FishingItems.find({}, function (err, fishing) {
        if (err) throw err;
        res.json(fishing);
    });
})

.post(function (req, res, next) {
    FishingItems.create(req.body, function (err, fishing) {
        if (err) throw err;
        console.log('Fishing item created!');
        var id = fishing._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the fishing item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    FishingItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

fishingRouter.route('/:fishingId')
.get(function (req, res, next) {
    FishingItems.findById(req.params.fishingId, function (err, fishing) {
        if (err) throw err;
        res.json(fishing);
    });
})

.put(function (req, res, next) {
    FishingItems.findByIdAndUpdate(req.params.fishingId, {
        $set: req.body
    }, {
        new: true
    }, function (err, fishing) {
        if (err) throw err;
        res.json(fishing);
    });
})

.delete(function (req, res, next) {
    FishingItems.findByIdAndRemove(req.params.fishingId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = fishingRouter;
