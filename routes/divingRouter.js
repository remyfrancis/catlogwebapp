var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var DivingItems = require('../models/diving');

var divingRouter = express.Router();
divingRouter.use(bodyParser.json());

divingRouter.route('/')
.get(function (req, res, next) {
    DivingItems.find({}, function (err, diving) {
        if (err) throw err;
        res.json(diving);
    });
})

.post(function (req, res, next) {
    DivingItems.create(req.body, function (err, diving) {
        if (err) throw err;
        console.log('Diving item created!');
        var id = diving._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the diving item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    DivingItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

divingRouter.route('/:divingId')
.get(function (req, res, next) {
    DivingItems.findById(req.params.divingId, function (err, diving) {
        if (err) throw err;
        res.json(diving);
    });
})

.put(function (req, res, next) {
    DivingItems.findByIdAndUpdate(req.params.divingId, {
        $set: req.body
    }, {
        new: true
    }, function (err, diving) {
        if (err) throw err;
        res.json(diving);
    });
})

.delete(function (req, res, next) {
    DivingItems.findByIdAndRemove(req.params.divingId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = divingRouter;
