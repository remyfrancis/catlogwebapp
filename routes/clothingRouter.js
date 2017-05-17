var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var ClothingItems = require('../models/clothing');

var clothingRouter = express.Router();
clothingRouter.use(bodyParser.json());


clothingRouter.route('/')
.get(function (req, res, next) {
    ClothingItems.find({}, function (err, clothing) {
        if (err) throw err;
        res.json(clothing);
    });
})

.post(function (req, res, next) {
    ClothingItems.create(req.body, function (err, clothing) {
        if (err) throw err;
        console.log('Clothing item created!');
        var id = clothing._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the clothing item with id: ' + id);
    });
})

.delete(function (req, res, next) {
    ClothingItems.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

clothingRouter.route('/:clothingId')
.get(function (req, res, next) {
    ClothingItems.findById(req.params.clothingId, function (err, clothing) {
        if (err) throw err;
        res.json(clothing);
    });
})

.put(function (req, res, next) {
    ClothingItems.findByIdAndUpdate(req.params.clothingId, {
        $set: req.body
    }, {
        new: true
    }, function (err, clothing) {
        if (err) throw err;
        res.json(clothing);
    });
})

.delete(function (req, res, next) {
    ClothingItems.findByIdAndRemove(req.params.clothingId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
});

module.exports = clothingRouter;
