const express = require('express');
const router = express.Router();
const { getAllProducts,createProduct,updateProduct,deletProduct,getOneContact} = require('../controllers/productControllerSQL')
const {createOrder,getAllOrders} = require("../controllers/orderControler")

router.route('/').get(getAllProducts)

router.route('/orders').get(getAllOrders)

router.route('/').post(createProduct)

router.route('/order').post(createOrder)

router.route('/:id').put(updateProduct)

router.route('/:id').delete(deletProduct)

router.route('/:id').get(getOneContact)


module.exports = router; 

