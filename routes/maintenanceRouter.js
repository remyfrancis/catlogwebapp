var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var MaintenanceItems = require('../models/maintenance');

var maintenanceRouter = express.Router();
maintenanceRouter.use(bodyParser.json());


maintenanceRouter.route('/')
.get(function (req, res, next) {
    MaintenanceItems.find({}, function (err, maintenance) {
        if (err) throw err;
        res.json(maintenance);
    });
})

.post(function (req, res, next) {
    MaintenanceItems.create(req.body, function (err, maintenance) {
        if (err) throw err;
        console.log('Maintenance item created!');
        var id = maintenance._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the maintenance item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    MaintenanceItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

maintenanceRouter.route('/:maintenanceId')
.get(function (req, res, next) {
    MaintenanceItems.findById(req.params.maintenanceId, function (err, maintenance) {
        if (err) throw err;
        res.json(maintenance);
    });
})

.put(function (req, res, next) {
    MaintenanceItems.findByIdAndUpdate(req.params.maintenanceId, {
        $set: req.body
    }, {
        new: true
    }, function (err, maintenance) {
        if (err) throw err;
        res.json(maintenance);
    });
})

.delete(function (req, res, next) {
    MaintenanceItems.findByIdAndRemove(req.params.maintenanceId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = maintenanceRouter;
