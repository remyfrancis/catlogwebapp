// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var plumbingSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    itemno: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dfec: {
        type: Number,
        required: true
    },
    dpec: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    selected: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var PlumbingItems = mongoose.model('Plumbing', plumbingSchema, 'plumbing');

// make this available to our Node applications
module.exports = PlumbingItems;
