var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var BoathardwareItems = require('../models/boathardware');

var boathardwareRouter = express.Router();
boathardwareRouter.use(bodyParser.json());

boathardwareRouter.route('/')
.get(function (req, res, next) {
    BoathardwareItems.find({}, function (err, boathardware) {
        if (err) throw err;
        res.json(boathardware);
    });
})

.post(function (req, res, next) {
    BoathardwareItems.create(req.body, function (err, boathardware) {
        if (err) throw err;
        console.log('Boat Hardware item created!');
        var id = boathardware._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the boat hardware item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    BoathardwareItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

boathardwareRouter.route('/:boathardwareId')
.get(function (req, res, next) {
    BoathardwareItems.findById(req.params.boathardwareId, function (err, boathardware) {
        if (err) throw err;
        res.json(boathardware);
    });
})

.put(function (req, res, next) {
    BoathardwareItems.findByIdAndUpdate(req.params.boathardwareId, {
        $set: req.body
    }, {
        new: true
    }, function (err, boathardware) {
        if (err) throw err;
        res.json(boathardware);
    });
})

.delete(function (req, res, next) {
    BoathardwareItems.findByIdAndRemove(req.params.boathardwareId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = boathardwareRouter;
