var express = require('express');
var Order = require('../models/order');


var orderRouter = express.Router();

orderRouter
    .route('/orders')
    .get(function (request, response) {

        console.log('GET /orders');
        console.warn(request.query);

        if( Object.keys(request.query).length === 0 ){

            Order.find(function (error, orders) {

                if (error) {
                    response.status(500).send(error);
                    return;
                }

                console.log(orders);

                response.json(orders);
            }).populate('customer items').exec();

        }else{
            console.log(request.query);
            var query = request.query;

            //Hack to support customer.id as the object structure is not exactly it should be in the assesment
            if( query['customer.id'] && query['customer.id'] != "" ){
                console.log('customer.id found');
                query['customer'] = query['customer.id'];
                delete query['customer.id'];
                console.log('redefined query' + query);
            }
            Order.find(query,function (error, orders) {

                if (error) {
                    response.status(500).send(error);
                    return;
                }

                console.log(orders);

                response.json(orders);
            }).populate('customer items').exec();
            
        }

    });
/*
orderRouter
    .route('/orders/:orderId')
    .get(function (request, response) {

        console.log('GET /orders/:orderId');

        var orderId = request.params.orderId;

        Order.findOne({ id: orderId }, function (error, order) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            console.log(order);

            response.json(order);

        }).populate('customer items').exec();
    })*/

module.exports = orderRouter;