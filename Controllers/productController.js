const Product = require("../models/productModel");

// @desc  Gets All  Products
// @route  GET / api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    //res.write(JSON.stringify(products))
    //res.end(); OR
    res.end(JSON.stringify(products)); //this is shortform of upper two lines.
  } catch (error) {
    console.log(error);
  }
}

// @desc  Gets Single  Product
// @route  GET / api/products/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ message: "Product does not exist or not found.." })
      ); 
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}

// @desc  Create a Product
// @route  POST / api/products/:id
async function createProduct(req, res, id) {
    try {
     

     let body = '';
     req.on('data', (chunk)=> {
        body += chunk.toString()
     })

     req.on('end', async ()=> {

        const {name, description, price }= JSON.parse(body)

        const product = {
            name, 
            description,
            price
         }

        const newProduct = await Product.create(product);

        res.writeHead(201, {'Content-Type': 'application/json' });
        return res.end(JSON.stringify(newProduct));
     })


     

    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
  getProducts,
  getProduct,
  createProduct
};
