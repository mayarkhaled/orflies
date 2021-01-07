var mongoose = require('mongoose');
var schema = mongoose.Schema;

var outlit_schema = new schema({
    item_price_afterSale : {type : String , required : true},
    item: {type : schema.Types.ObjectId , ref : 'Item'}
});

outlit_schema.virtual('url').get(function(){
    return 'home/outlit/'+this._id;
});

module.exports = mongoose.model('outlit' , outlit_schema);

