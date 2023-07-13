const express = require('express');
const router = express.Router();
const { getAllProducts,createProduct,updateProduct,deletProduct,getOneContact} = require('../controllers/productController')

router.route('/').get(getAllProducts)

router.route('/').post(createProduct)

router.route('/:id').put(updateProduct)

router.route('/:id').delete(deletProduct)

router.route('/:id').get(getOneContact)


module.exports = router; 

