var express = require('express');
var router = express.Router();
let itemc = require("../controllers/itemController");
/* GET home page. */
router.get('/' , itemc.items_list);
router.get('/items', itemc.items_list);
router.get('/items/:id' , itemc.item_detail);
router.get('/items/filter' , itemc.filter_items);
router.post('/items' , itemc.add_item_post);
router.put('/items/:id' , itemc.update_item_post);
router.delete('/items/:id' , itemc.delete_item_post);
router.post('/item/outlit/:id' , itemc.add_sale_to_item);
router.put('/item/outlit/:id', itemc.remove_sale_from_item);
module.exports = router;
