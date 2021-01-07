var express = require('express');
var router = express.Router();
let itemc = require("../controllers/itemController");
/* GET home page. */
router.get('/', itemc.items_list);
router.get('/item/:id' , itemc.item_detail);
router.post('/item/addNewItem' , itemc.add_item_post);
router.post('item/updateItem/:id' , itemc.update_item_post);
router.post('item/deleteItem/:id' , itemc.delete_item_post);

module.exports = router;
