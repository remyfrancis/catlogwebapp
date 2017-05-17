var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var ElectricalItems = require('../models/electrical');

var electricalRouter = express.Router();
electricalRouter.use(bodyParser.json());

electricalRouter.route('/')
.get(function (req, res, next) {
    ElectricalItems.find({}, function (err, electrical) {
        if (err) throw err;
        res.json(electrical);
    });
})

.post(function (req, res, next) {
    ElectricalItems.create(req.body, function (err, electrical) {
        if (err) throw err;
        console.log('Electrical item created!');
        var id = electrical._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the electrical item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    ElectricalItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

electricalRouter.route('/:electricalId')
.get(function (req, res, next) {
    ElectricalItems.findById(req.params.electricalId, function (err, electrical) {
        if (err) throw err;
        res.json(electrical);
    });
})

.put(function (req, res, next) {
    ElectricalItems.findByIdAndUpdate(req.params.electricalId, {
        $set: req.body
    }, {
        new: true
    }, function (err, electrical) {
        if (err) throw err;
        res.json(electrical);
    });
})

.delete(function (req, res, next) {
    ElectricalItems.findByIdAndRemove(req.params.electricalId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = electricalRouter;
