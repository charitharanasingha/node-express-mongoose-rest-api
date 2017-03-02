var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String
    },
    Price: {
        type: String,
        required: true
    },
    Images: {
        type: Array
    }
}, { collection: 'Items' });

module.exports = mongoose.model('Item', itemSchema);