var mongoose = require('mongoose');
var schema = mongoose.Schema;

var collection_schema = new schema({
    collection_name : {type : String , required : true },
    collection_description : {type : String},
    collection_releaseDate : {type : Date} ,
    outer_collection : {type : schema.Types.ObjectId , ref : 'Collection'}
});

collection_schema.virtual('url').get(function(){
    return '/home/collection' + this._id;
})

module.exports = mongoose.model('Collection' , collection_schema , 'collection');