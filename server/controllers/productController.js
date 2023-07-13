const Product = require("../models/productModel")

const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
}

const createProduct = async (req, res) => {
    console.log('Body is ', req.body)
    const { name, price,company } = req.body;
    

    if (!name || !company || !price ) {
        res.status(400)
        throw new Error('All fields are mandatory')
    } else {
        const product = await Product.create({ name, company, price })
        // console.log('Created ', product)
        res.status(200).json(product);
    }
}

const updateProduct = async (req, res) => {
    console.log(req.params)
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    // res.status(200).json(updatedProduct);
    res.send("okay")
}

const deletProduct = async (req, res) => {
    const _id = req.params.id;
    const product = await Product.deleteOne({ _id })
    // console.log(product)
    res.status(200).send(`deleted ${req.params.id}`);
}

const getOneContact = async (req, res) => {
    const product = await Product.findById(req.params.id)
    // console.log(product) 
    if (!product) {
        res.status(400)
        throw new Error('All fields are mandatory')
    }
    else { res.status(200).json(product); }

}


module.exports = {getAllProducts,createProduct,updateProduct,deletProduct,getOneContact};
