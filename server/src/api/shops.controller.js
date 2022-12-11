'use strict';

const Shop = require('../models/Shop');

async function shops(req, res, next) {
    const params = {
        shop: {
            name: 'Sunshine',
        },
        items: [
            {'meat': 150},
            {'cereal': 45}
        ]
    }
    const shop = new Shop(params)
    const items = shop.getItems();
    res.status(200);
    res.json({
        items
    });
}

module.exports = shops;
