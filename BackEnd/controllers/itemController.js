const item = require('../models/item');
const { body,validationResult } = require('express-validator');

exports.items_list = function(req , res ){
    item.find({} , 'item_image item_descrption item_price')
        .exec((err, items_list)=>{
            if(err)
                res.send("error in get items list ");
            res.send(items_list);    
        });
}

exports.item_detail = function(req,res){
    item.findById(req.params.id)
        .populate('item_collection').exec((err , item_detail_)=>{
            if(err)
                res.send("error fetching item detail");
            res.send(item_detail_);    
        });
}

exports.add_item_post = function(req , res){
    body('item_price').trim().isLength({min : 1 }).withMessage("Price must be specified");
        
    var new_item = new item({
        item_price : req.body.item_price,
        item_descrption : req.body.item_descrption,
        item_category : req.body.item_category,
        item_image : req.body.item_image,
        item_collection : req.body.item_collection,
        item_quantity : req.body.item_quantity
    });
    new_item.save(function(err){
        if(err)
            res.send("error when adding new item");
        res.send("successful -new item added-")  ; 
    })

}

exports.update_item_post = function(req , res){
    var _item = new item({
        item_price : req.body.item_price,
        item_descrption : req.body.item_descrption,
        item_category : req.body.item_category,
        item_image : req.body.item_image,
        item_collection : req.body.item_collection,
        item_quantity : req.body.item_quantity
    });
    item.findByIdAndUpdate(req.params.id , _item , {} , (err , theItem)=>{
        res.send("updated");
    });
}
exports.delete_item_post = function(req , res){
    item.findByIdAndRemove(req.body.itemId , (err)=>{
        if(err){
            res.send("error in deleting item");
        };
        res.send("deleted");
    })
}