// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var anchoringSchema = new Schema({
    itemno: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var AnchoringItems = mongoose.model('Anchoring', anchoringSchema);

// make this available to our Node applications
module.exports = AnchoringItems;
