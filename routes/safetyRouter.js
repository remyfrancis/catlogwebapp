var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var SafetyItems = require('../models/safety');

var safetyRouter = express.Router();
safetyRouter.use(bodyParser.json());


safetyRouter.route('/')
.get(function (req, res, next) {
    SafetyItems.find({}, function (err, safety) {
        if (err) throw err;
        res.json(safety);
    });
})

.post(function (req, res, next) {
    SafetyItems.create(req.body, function (err, safety) {
        if (err) throw err;
        console.log('Safety item created!');
        var id = safety._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the safety item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    SafetyItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

safetyRouter.route('/:safetyId')
.get(function (req, res, next) {
    SafetyItems.findById(req.params.safetyId, function (err, safety) {
        if (err) throw err;
        res.json(safety);
    });
})

.put(function (req, res, next) {
    SafetyItems.findByIdAndUpdate(req.params.safetyId, {
        $set: req.body
    }, {
        new: true
    }, function (err, safety) {
        if (err) throw err;
        res.json(safety);
    });
})

.delete(function (req, res, next) {
    SafetyItems.findByIdAndRemove(req.params.safetyId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = safetyRouter;
