var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var RiggingItems = require('../models/rigging');

var riggingRouter = express.Router();
riggingRouter.use(bodyParser.json());

riggingRouter.route('/')
.get(function (req, res, next) {
    RiggingItems.find({}, function (err, rigging) {
        if (err) throw err;
        res.json(rigging);
    });
})

.post(function (req, res, next) {
    RiggingItems.create(req.body, function (err, rigging) {
        if (err) throw err;
        console.log('Rigging item created!');
        var id = rigging._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the rigging item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    RiggingItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

riggingRouter.route('/:riggingId')
.get(function (req, res, next) {
    RiggingItems.findById(req.params.riggingId, function (err, rigging) {
        if (err) throw err;
        res.json(rigging);
    });
})

.put(function (req, res, next) {
    RiggingItems.findByIdAndUpdate(req.params.riggingId, {
        $set: req.body
    }, {
        new: true
    }, function (err, rigging) {
        if (err) throw err;
        res.json(rigging);
    });
})

.delete(function (req, res, next) {
    RiggingItems.findByIdAndRemove(req.params.riggingId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = riggingRouter;
