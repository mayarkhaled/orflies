var mongoose = require('mongoose');
var schema = mongoose.Schema;

var item_schema = new schema({
    item_price : {type : Number , required : true},
    item_descrption : {type : String },
    item_category : {type : String },
    item_image : {type: Array },
    item_collection : {type : schema.Types.ObjectId , ref : 'Collection'},
    item_quantity : {type : Number },
    price_after_sale :{type : Number}
});

item_schema.virtual('url').get(function(){
    return 'home/item/'+this._id;
});

module.exports = mongoose.model('Item' , item_schema , 'Item');

