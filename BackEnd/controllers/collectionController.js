const collection = require('../models/collection');
const test = require('../public/test');

exports.add_collection_post = function(req , res){
    let new_collection = new collection({
        collection_name : req.body.collection_name,
        collection_description : req.body.collection_description,
        collection_releaseDate : req.body.collection_releaseDate
    });
    new_collection.save((err) => {
        if(err)
            res.send("error saving new collection");
        res.send("new item added");    
    });
}

exports.get_all_collections = function(req , res){
    collection.find({} , 'collection_name collection_description')
        .exec((err , collection_list) => {
            if(err)
                res.send('error fetching collection list');
            res.send(collection_list);   
        })
}
exports.get_collection_detail = function(req , res ){
    
    collection.findById(req.params.id , function(err , collection_detail){
        if(err)
            res.send("error fetching collection detail");
        res.send(collection_detail);
    })
};

exports.delete_collection = function(req , res){
    collection.findByIdAndDelete(req.params.id , (err , deleted_collection)=>{
        if(err)
            res.send("error in deleting collection");
        res.send(deleted_collection);    
    })
}