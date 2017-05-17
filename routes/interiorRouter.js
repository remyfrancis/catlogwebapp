var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var InteriorItems = require('../models/interior');

var interiorRouter = express.Router();
interiorRouter.use(bodyParser.json());


interiorRouter.route('/')
.get(function (req, res, next) {
    InteriorItems.find({}, function (err, interior) {
        if (err) throw err;
        res.json(interior);
    });
})

.post(function (req, res, next) {
    InteriorItems.create(req.body, function (err, interior) {
        if (err) throw err;
        console.log('Interior item created!');
        var id = interior._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the interior item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    InteriorItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

interiorRouter.route('/:interiorId')
.get(function (req, res, next) {
    InteriorItems.findById(req.params.interiorId, function (err, interior) {
        if (err) throw err;
        res.json(interior);
    });
})

.put(function (req, res, next) {
    InteriorItems.findByIdAndUpdate(req.params.interiorId, {
        $set: req.body
    }, {
        new: true
    }, function (err, interior) {
        if (err) throw err;
        res.json(interior);
    });
})

.delete(function (req, res, next) {
    InteriorItems.findByIdAndRemove(req.params.interiorId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = interiorRouter;
