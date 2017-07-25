var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var ElectronicItems = require('../models/electronic');

var electronicRouter = express.Router();
electronicRouter.use(bodyParser.json());

electronicRouter.route('/')
.get(function (req, res, next) {
    ElectronicItems.find({}, function (err, electronic) {
        if (err) throw err;
        res.json(electronic);
    });
})

.post(function (req, res, next) {
    ElectronicItems.create(req.body, function (err, electronic) {
        if (err) throw err;
        console.log('Electronic item created!');
        var id = electronic._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the electronic item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    ElectronicItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

electronicRouter.route('/:electronicId')
.get(function (req, res, next) {
    ElectronicItems.findById(req.params.electronicId, function (err, electronic) {
        if (err) throw err;
        res.json(electronic);
    });
})

.put(function (req, res, next) {
    ElectronicItems.findByIdAndUpdate(req.params.electronicId, {
        $set: req.body
    }, {
        new: true
    }, function (err, electronic) {
        if (err) throw err;
        res.json(electronic);
    });
})

.delete(function (req, res, next) {
    ElectronicItems.findByIdAndRemove(req.params.electronicId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = electronicRouter;
