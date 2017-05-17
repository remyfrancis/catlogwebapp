var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var BoatsandmotorsItems = require('../models/boatsandmotors');

var boatsandmotorsRouter = express.Router();
boatsandmotorsRouter.use(bodyParser.json());

boatsandmotorsRouter.route('/')
.get(function (req, res, next) {
    BoatsandmotorsItems.find({}, function (err, boatsandmotors) {
        if (err) throw err;
        res.json(boatsandmotors);
    });
})

.post(function (req, res, next) {
    BoatsandmotorsItems.create(req.body, function (err, boatsandmotors) {
        if (err) throw err;
        console.log('Boats & Motors item created!');
        var id = boatsandmotors._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the Boats & Motors item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    BoatsandmotorsItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

boatsandmotorsRouter.route('/:boatsandmotorsId')
.get(function (req, res, next) {
    BoatsandmotorsItems.findById(req.params.boatsandmotorsId, function (err, boatsandmotors) {
        if (err) throw err;
        res.json(boatsandmotors);
    });
})

.put(function (req, res, next) {
    BoatsandmotorsItems.findByIdAndUpdate(req.params.boatsandmotorsId, {
        $set: req.body
    }, {
        new: true
    }, function (err, boatsandmotors) {
        if (err) throw err;
        res.json(boatsandmotors);
    });
})

.delete(function (req, res, next) {
    BoatsandmotorsItems.findByIdAndRemove(req.params.boatsandmotorsId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = boatsandmotorsRouter;
