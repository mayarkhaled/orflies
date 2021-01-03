var mongoose = require('mongoose');
var schema = mongoose.Schema;

var item_schema = new schema({
    item_price : {type : string , required : true},
    item_descrption : {type : string },
    item_category : {type : string },
    item_image : {data : Buffer , required : true  , contentType : string },
    item_collection : {type : schema.Types.ObjectId , ref : 'Collection'},
    item_quantity : {type : Int16Array }
});

item_schema.virtual('url').get(function(){
    return 'home/item/'+this._id;
});

module.exports = mongoose.model('Item' , item_schema);

