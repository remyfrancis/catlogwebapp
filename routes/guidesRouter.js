var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var GuidesItems = require('../models/guides');

var guidesRouter = express.Router();
guidesRouter.use(bodyParser.json());

guidesRouter.route('/')
.get(function (req, res, next) {
    GuidesItems.find({}, function (err, guides) {
        if (err) throw err;
        res.json(guides);
    });
})

.post(function (req, res, next) {
    GuidesItems.create(req.body, function (err, guides) {
        if (err) throw err;
        console.log('Guides item created!');
        var id = guides._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the guides item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    GuidesItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

guidesRouter.route('/:guidesId')
.get(function (req, res, next) {
    GuidesItems.findById(req.params.guidesId, function (err, guides) {
        if (err) throw err;
        res.json(guides);
    });
})

.put(function (req, res, next) {
    GuidesItems.findByIdAndUpdate(req.params.guidesId, {
        $set: req.body
    }, {
        new: true
    }, function (err, guides) {
        if (err) throw err;
        res.json(guides);
    });
})

.delete(function (req, res, next) {
    GuidesItems.findByIdAndRemove(req.params.guidesId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = guidesRouter;
