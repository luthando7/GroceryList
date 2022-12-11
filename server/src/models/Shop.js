'use strict';

class Shop {
    constructor(params) {
        const shop = params.shop;
        console.log({shop});
        const items = params.items;
        console.log({items})
    }

    getItems() {
        return this.items;
    }

    addItems(itemsToAdd) {
        this.items.push(itemsToAdd);
    }
}

module.exports = Shop;