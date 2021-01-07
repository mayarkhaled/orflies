let item = require('../models/item')
let collection = require('../models/collection')
let outlit = require('../models/outlit')

exports.create_collection_test = function(){
    return {
        collection_name : 'roses',
        collection_description : 'collection of rings and neckless',
        collection_releaseDate : '12-12-2020'
    };
}

exports.create_item_test = function(){
    return {
        item_price : "100",
        item_descrption : "ring made from crystals",
        item_category : "ring",
        item_collection : create_collection_test(),
        item_quantity : 5
    };
}