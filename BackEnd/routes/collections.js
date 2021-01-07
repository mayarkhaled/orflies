var express = require('express');
var router = express.Router();
let collc = require("../controllers/collectionController");

/* GET users listing. */
router.get('/', collc.get_all_collections);
router.get('/:id' , collc.get_collection_detail);
router.post('/addNewCollection' , collc.add_collection_post);
router.post('/deleteCollection' , collc.delete_collection);

module.exports = router;
