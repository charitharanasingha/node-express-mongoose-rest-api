var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    DOB: {
        type: Date
    }
}, { collection: 'Customers' });

module.exports = mongoose.model('Customer', customerSchema);