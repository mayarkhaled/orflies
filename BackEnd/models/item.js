var mongoose = require('mongoose');
var schema = mongoose.Schema;

var item_schema = new schema({
    item_price : {type : String , required : true},
    item_descrption : {type : String },
    item_category : {type : String },
    item_image : {data : Buffer  , contentType : String },
    item_collection : {type : schema.Types.ObjectId , ref : 'Collection'},
    item_quantity : {type : Number }
});

item_schema.virtual('url').get(function(){
    return 'home/item/'+this._id;
});

module.exports = mongoose.model('Item' , item_schema , 'Item');

