var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    dateOrdered: {
        type: Date,
        required: true
    }
}, { collection: 'Orders',toJSON: { virtuals: true },toObject: {
    virtuals: true
}, });

//Virtual Schema for the relationship
orderSchema.virtual('customer',{
    ref: 'Customer',
    localField : 'customer',
    foreignField : 'id'
});

orderSchema.virtual('items',{
    ref: 'Item',
    localField : 'items.id',
    foreignField : 'id'
});

module.exports = mongoose.model('Order', orderSchema);