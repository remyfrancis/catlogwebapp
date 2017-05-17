var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var PlumbingItems = require('../models/plumbing');

var plumbingRouter = express.Router();
plumbingRouter.use(bodyParser.json());

plumbingRouter.route('/')
.get(function (req, res, next) {
    PlumbingItems.find({}, function (err, plumbing) {
        if (err) throw err;
        res.json(plumbing);
    });
})

.post(function (req, res, next) {
    PlumbingItems.create(req.body, function (err, plumbing) {
        if (err) throw err;
        console.log('Plumbing item created!');
        var id = plumbing._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the plumbing item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    PlumbingItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

plumbingRouter.route('/:plumbingId')
.get(function (req, res, next) {
    PlumbingItems.findById(req.params.plumbingId, function (err, plumbing) {
        if (err) throw err;
        res.json(plumbing);
    });
})

.put(function (req, res, next) {
    PlumbingItems.findByIdAndUpdate(req.params.plumbingId, {
        $set: req.body
    }, {
        new: true
    }, function (err, plumbing) {
        if (err) throw err;
        res.json(plumbing);
    });
})

.delete(function (req, res, next) {
    PlumbingItems.findByIdAndRemove(req.params.plumbingId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = plumbingRouter;
